"""يبني نسخة عمودية 9:16 من صورة العمارة بمدّ السماء إلى الأعلى بتدرّج مطابق."""
import numpy as np
from PIL import Image, ImageFilter

def extend_sky(src, dst, x0=0.0, x1=1.0, out_w=1080, out_h=1920, deep=0.62, sample_rows=26):
    im = Image.open(src).convert("RGB")
    W, H = im.size
    im = im.crop((int(W * x0), 0, int(W * x1), H))
    cw, ch = im.size

    # الصورة تُصغَّر لعرض الكادر، وما بقي من الارتفاع يُملأ سماءً ممتدّة
    ph = round(ch * out_w / cw)
    photo = im.resize((out_w, ph), Image.LANCZOS)
    pad = out_h - ph
    if pad <= 0:
        photo.crop((0, ph - out_h, out_w, ph)).save(dst, "JPEG", quality=92, optimize=True)
        return out_w, out_h, 0

    a = np.asarray(photo).astype(np.float32)
    # ملمح لوني لأعلى صف من الصورة، مُنعَّم أفقيًا حتى لا تنسحب أي تفاصيل معمارية للأعلى
    profile = np.median(a[:sample_rows], axis=0)                       # (out_w, 3)
    prof_img = Image.fromarray(profile[None].astype(np.uint8)).resize((out_w, 1), Image.LANCZOS)
    prof_img = prof_img.filter(ImageFilter.GaussianBlur(radius=out_w / 6))
    profile = np.asarray(prof_img).astype(np.float32)[0]

    # أعلى السماء أعمق وأكثر زرقة، كما تتدرّج السماء الحقيقية
    top = profile * np.array([deep, deep + 0.10, deep + 0.22], np.float32)
    t = (np.linspace(1.0, 0.0, pad) ** 1.35)[:, None, None]
    sky = top[None, :, :] * t + profile[None, :, :] * (1 - t)

    # ضجيج خفيف جدًا يمنع التحزّم اللوني في التدرّجات الطويلة
    rng = np.random.default_rng(7)
    sky += rng.normal(0, 1.1, sky.shape).astype(np.float32)

    out = np.concatenate([np.clip(sky, 0, 255), a], axis=0).astype(np.uint8)
    img = Image.fromarray(out)
    # تنعيم اللحام من جهة السماء المولّدة فقط، حتى لا تُطمس تفاصيل السطح
    seam = img.crop((0, pad - 110, out_w, pad + 6)).filter(ImageFilter.GaussianBlur(radius=5))
    img.paste(seam, (0, pad - 110))
    img.save(dst, "JPEG", quality=92, optimize=True, progressive=True)
    return out_w, out_h, pad

import sys, os
x0 = float(sys.argv[1]); x1 = float(sys.argv[2])
deep_v = float(sys.argv[3]) if len(sys.argv) > 3 else 0.62
w, h, pad = extend_sky("my-video/public/project-exterior.jpg",
                       "my-video/public/cover-tall.jpg", x0, x1, deep=deep_v)
crop = x0
print(f"cover-tall.jpg {w}x{h} | سماء مولّدة {pad}px = {pad/h*100:.0f}% | قصّ جانبي {crop*100:.0f}%")
print(f"{os.path.getsize('my-video/public/cover-tall.jpg')/1e6:.2f} MB")
