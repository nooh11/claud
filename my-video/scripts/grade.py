"""معالجة العرض العقاري: وضوح موضعي (Clarity) + عمق + حدّة — بلا إفراط."""
import numpy as np
from PIL import Image, ImageFilter

def srgb_to_lin(x): return np.where(x <= 0.04045, x/12.92, ((x+0.055)/1.055)**2.4)
def lin_to_srgb(x): return np.where(x <= 0.0031308, x*12.92, 1.055*np.clip(x,0,None)**(1/2.4)-0.055)

def grade(src, dst, target_h=2200, exterior=True, clarity=0.42, sky=1.0):
    im = Image.open(src).convert("RGB")
    w, h = im.size
    im = im.resize((round(w*target_h/h), target_h), Image.LANCZOS)
    a = np.asarray(im).astype(np.float32)/255.0
    H, W, _ = a.shape
    lin = srgb_to_lin(a)
    lin = lin*1.02 + 0.003

    # منحنى S على اللمعان
    lum = lin @ np.array([0.2126,0.7152,0.0722], np.float32)
    s = np.clip(lum, 1e-6, None)
    c = s**0.95
    c = c + 0.14*c*(1-c)*(c-0.5)*4
    lin *= (c/s)[..., None]

    if exterior:
        g = (np.clip(np.linspace(1.0,0.0,H)*1.5-0.12, 0, 1)[:,None]**1.5 * sky)[..., None]
        lin = lin*(1-g) + lin*np.array([0.88,0.98,1.13], np.float32)*g
        wg = (np.clip(np.linspace(-0.2,1.0,H),0,1)[:,None,None]**1.2)
        lin = lin*(1-wg) + lin*np.array([1.045,1.010,0.962], np.float32)*wg
    else:
        lin *= np.array([0.996,1.0,1.014], np.float32)

    lum2 = (lin @ np.array([0.2126,0.7152,0.0722], np.float32))[..., None]
    lin = lum2 + (lin-lum2)*(1.12 if exterior else 1.05)

    out = np.clip(lin_to_srgb(np.clip(lin,0,None)), 0, 1)
    img = Image.fromarray((out*255).round().astype(np.uint8))

    # ---- Clarity: تباين موضعي بنصف قطر كبير — هذا ما يجعل العمارة "تبرز" ----
    base = np.asarray(img).astype(np.float32)
    blur = np.asarray(img.filter(ImageFilter.GaussianBlur(radius=max(H, W)/110))).astype(np.float32)
    detail = base - blur
    # حماية السماء والأبيض من الهالات: خفّض الأثر عند اللمعان العالي
    L = (base @ np.array([0.2126,0.7152,0.0722], np.float32))[..., None]/255.0
    guard = np.clip(1.0 - np.clip((L-0.72)/0.28, 0, 1)*0.85, 0, 1)
    img = Image.fromarray(np.clip(base + detail*clarity*guard, 0, 255).astype(np.uint8))

    # حدّة نهائية دقيقة
    img = img.filter(ImageFilter.UnsharpMask(radius=1.1, percent=115, threshold=2))
    img.save(dst, "JPEG", quality=93, optimize=True, progressive=True)
    return img.size
