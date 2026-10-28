from PIL import Image
import os

PUB = "/Users/miniesabanao/Projects/profile/public"
img = Image.open(os.path.join(PUB, "image-removebg-preview.png")).convert("RGBA")
print("source:", img.size, "corner alpha:", img.getpixel((0, 0))[3])

# Tight-crop to visible pixels with small padding
bbox = img.getbbox()
w, h = img.size
pad = 8
box = (max(0, bbox[0] - pad), max(0, bbox[1] - pad), min(w, bbox[2] + pad), min(h, bbox[3] + pad))
img = img.crop(box)
print("cropped:", img.size)

# Square canvas, centered
w2, h2 = img.size
side = max(w2, h2)
canvas = Image.new("RGBA", (side, side), (0, 0, 0, 0))
canvas.paste(img, ((side - w2) // 2, (side - h2) // 2))

canvas.save(os.path.join(PUB, "logo.png"))
for s, name in [(16, "favicon-16x16.png"), (32, "favicon-32x32.png"),
                (180, "apple-touch-icon.png"), (192, "icon-192.png"), (512, "icon-512.png")]:
    canvas.resize((s, s), Image.LANCZOS).save(os.path.join(PUB, name))

test = Image.open(os.path.join(PUB, "favicon-32x32.png"))
print("favicon-32 corner alpha (want 0):", test.getpixel((0, 0))[3])
print("done")
