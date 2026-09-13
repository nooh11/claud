"""معالجة لونية موحّدة لصور المشروع: سماء أعمق، إضاءة أدفأ، تباين منضبط."""
import numpy as np
from PIL import Image, ImageFilter

def srgb_to_lin(x):  return np.where(x <= 0.04045, x / 12.92, ((x + 0.055) / 1.055) ** 2.4)
def lin_to_srgb(x):  return np.where(x <= 0.0031308, x * 12.92, 1.055 * np.clip(x, 0, None) ** (1 / 2.4) - 0.055)

def grade(src, dst, target_h=2200, sky_strength=1.0, warmth=1.0, exterior=True):
    im = Image.open(src).convert("RGB")
    w, h = im.size
    im = im.resize((round(w * target_h / h), target_h), Image.LANCZOS)
    a = np.asarray(im).astype(np.float32) / 255.0
    H, W, _ = a.shape
    lin = srgb_to_lin(a)

    # 1) رفع الظلال قليلًا وضبط النقطة السوداء
    lin = lin * 1.03 + 0.004

    # 2) منحنى S لطيف على اللمعان لزيادة العمق دون حرق الأبيض
    lum = lin @ np.array([0.2126, 0.7152, 0.0722], np.float32)
    s = np.clip(lum, 1e-6, None)
    curved = s ** 0.94
    curved = curved + 0.16 * curved * (1 - curved) * (curved - 0.5) * 4
    lin *= (curved / s)[..., None]

    if exterior:
        # 3) فلتر متدرّج على السماء: أزرق أعمق وأكثر تشبّعًا في الأعلى
        g = np.clip(np.linspace(1.0, 0.0, H) * 1.55 - 0.15, 0, 1)[:, None] ** 1.5
        g = (g * sky_strength)[..., None]
        sky = np.array([0.86, 0.97, 1.14], np.float32)      # ميل بارد للسماء
        lin = lin * (1 - g) + lin * sky * g

        # 4) دفء الغروب على المبنى في النصف السفلي
        wgrad = np.clip(np.linspace(-0.25, 1.0, H), 0, 1)[:, None, None] ** 1.2
        warm = np.array([1.055, 1.012, 0.955], np.float32)
        lin = lin * (1 - wgrad * warmth) + lin * warm * (wgrad * warmth)
    else:
        # للداخلي: تبريد طفيف للجدران البيضاء وإزالة الميل الأصفر
        lin *= np.array([0.995, 1.0, 1.018], np.float32)

    # 5) تشبّع محسوب حول اللمعان
    lum2 = (lin @ np.array([0.2126, 0.7152, 0.0722], np.float32))[..., None]
    lin = lum2 + (lin - lum2) * (1.14 if exterior else 1.06)

    # 6) فينييت خفيف يركّز العين على المبنى
    yy, xx = np.mgrid[0:H, 0:W].astype(np.float32)
    r = np.sqrt(((xx / W - 0.5) * 1.05) ** 2 + ((yy / H - 0.5) * 1.05) ** 2)
    lin *= (1 - 0.20 * np.clip(r - 0.34, 0, None) ** 1.5)[..., None]

    out = np.clip(lin_to_srgb(np.clip(lin, 0, None)), 0, 1)
    img = Image.fromarray((out * 255).round().astype(np.uint8))
    img = img.filter(ImageFilter.UnsharpMask(radius=1.5, percent=105, threshold=3))
    img.save(dst, "JPEG", quality=90, optimize=True, progressive=True)
    return img.size

S = "/tmp/claude-0/-home-user-claud/99f0c586-051e-56da-a0e0-7e14079ffe05/scratchpad/orig"
JOBS = [
    (f"{S}/DSC08156.jpg", "my-video/public/project-exterior.jpg",  True,  1.00, 1.00),
    (f"{S}/DSC08159.jpg", "my-video/public/exterior-entrance.jpg", True,  0.85, 1.00),
    (f"{S}/DSC08167.jpg", "my-video/public/interior-lobby.jpg",    False, 0.00, 0.00),
    (f"{S}/DSC08172.jpg", "my-video/public/interior-living.jpg",   False, 0.00, 0.00),
]
import os
for src, dst, ext, sky, warm in JOBS:
    sz = grade(src, dst, sky_strength=sky, warmth=warm, exterior=ext)
    print(f"{os.path.basename(dst):26s} {sz[0]}x{sz[1]}  {os.path.getsize(dst)/1e6:.2f} MB")
