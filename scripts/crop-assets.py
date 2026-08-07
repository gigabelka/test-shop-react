"""Вырезает PNG-ассеты из макета главной страницы (mockup.jpg).

Источник: .scratch/asset-extraction/mockup.jpg (1303x1999).
Результат: src/assets/*.png с альфа-каналом.

Запуск:  python scripts/crop-assets.py [путь-к-макету] [выходной-каталог]
(нужен pillow)
"""

from __future__ import annotations

import sys
from collections import deque
from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter

ROOT = Path(__file__).resolve().parent.parent
SRC = Path(sys.argv[1]) if len(sys.argv) > 1 else ROOT / '.scratch/asset-extraction/mockup.jpg'
OUT = Path(sys.argv[2]) if len(sys.argv) > 2 else ROOT / 'src/assets'

img = Image.open(SRC).convert('RGB')
OUT.mkdir(parents=True, exist_ok=True)


def save(crop: Image.Image, name: str) -> None:
    crop.save(OUT / name)
    print(f'{name}: {crop.size}')


def crop(box):
    return img.crop(box)


def flood_key(crop: Image.Image, eligible, feather: float = 1.2) -> Image.Image:
    """Фон = связная область eligible-пикселей от краёв (BFS).

    eligible(r, g, b) -> bool. Замкнутые внутри арта области (тени халата,
    стекло) не затрагиваются, т.к. не связаны с краем.
    """
    rgba = crop.convert('RGBA')
    w, h = rgba.size
    px = rgba.load()
    bg = bytearray(w * h)
    q = deque()

    def try_seed(x, y):
        i = y * w + x
        if not bg[i] and eligible(*px[x, y][:3]):
            bg[i] = 1
            q.append((x, y))

    for x in range(w):
        try_seed(x, 0)
        try_seed(x, h - 1)
    for y in range(h):
        try_seed(0, y)
        try_seed(w - 1, y)
    while q:
        x, y = q.popleft()
        for nx, ny in ((x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)):
            if 0 <= nx < w and 0 <= ny < h:
                i = ny * w + nx
                if not bg[i] and eligible(*px[nx, ny][:3]):
                    bg[i] = 1
                    q.append((nx, ny))

    alpha = Image.new('L', (w, h))
    alpha.putdata([0 if v else 255 for v in bg])
    if feather:
        alpha = alpha.filter(ImageFilter.GaussianBlur(feather))
    rgba.putalpha(alpha)
    return rgba


def feather_edges(crop: Image.Image, left=0, top=0, right=0, bottom=0) -> Image.Image:
    """Линейная растушёвка альфы у краёв — плавный переход в CSS-фон."""
    w, h = crop.size
    alpha = crop.getchannel('A')
    ramp = Image.new('L', (w, h), 255)
    px = ramp.load()
    for y in range(h):
        for x in range(w):
            a = 255
            if left and x < left:
                a = min(a, 255 * x // left)
            if right and x >= w - right:
                a = min(a, 255 * (w - 1 - x) // right)
            if top and y < top:
                a = min(a, 255 * y // top)
            if bottom and y >= h - bottom:
                a = min(a, 255 * (h - 1 - y) // bottom)
            px[x, y] = a
    from PIL import ImageChops

    crop.putalpha(ImageChops.multiply(alpha, ramp))
    return crop


def wipe(crop: Image.Image, *rects) -> Image.Image:
    """Обнуляет альфу в прямоугольниках (x0, y0, x1, y1) — мусор из макета."""
    px = crop.load()
    w, h = crop.size
    for x0, y0, x1, y1 in rects:
        for y in range(max(0, y0), min(h, y1)):
            for x in range(max(0, x0), min(w, x1)):
                r, g, b, _ = px[x, y]
                px[x, y] = (r, g, b, 0)
    return crop


def paint_from_below(crop: Image.Image, pad: int, *rects) -> Image.Image:
    """Заливает прямоугольники, продолжая вверх цвет каждой колонки
    из строки y1+pad — для мусора, висящего над однородным фоном."""
    px = crop.load()
    w, h = crop.size
    for x0, y0, x1, y1 in rects:
        src_y = min(y1 + pad, h - 1)
        for x in range(max(0, x0), min(w, x1)):
            r, g, b, _ = px[x, src_y]
            for y in range(max(0, y0), min(h, y1)):
                px[x, y] = (r, g, b, 255)
    return crop


def color_key(crop: Image.Image, is_bg, feather: float = 1.0) -> Image.Image:
    """Простое вырезание по цвету: is_bg(r, g, b) -> 0..1 (1 = фон)."""
    rgba = crop.convert('RGBA')
    px = rgba.load()
    w, h = rgba.size
    for y in range(h):
        for x in range(w):
            r, g, b, _ = px[x, y]
            px[x, y] = (r, g, b, 255 - int(255 * min(1.0, max(0.0, is_bg(r, g, b)))))
    if feather:
        rgba.putalpha(rgba.getchannel('A').filter(ImageFilter.GaussianBlur(feather)))
    return rgba


def circle(crop: Image.Image) -> Image.Image:
    w, h = crop.size
    d = min(w, h)
    mask = Image.new('L', (w, h), 0)
    ImageDraw.Draw(mask).ellipse(
        [(w - d) // 2, (h - d) // 2, (w + d) // 2 - 1, (h + d) // 2 - 1], fill=255
    )
    mask = mask.filter(ImageFilter.GaussianBlur(1))
    out = crop.convert('RGBA')
    out.putalpha(mask)
    return out


# --- предикаты фона ---
def white_strict(r, g, b):
    # только почти белое (шапка над hero-карточкой, белые углы баннера)
    return min(r, g, b) > 236


def white_soft(r, g, b):
    return min(r, g, b) > 232


def logo_bg(r, g, b):
    return (min(r, g, b) - 200) / 30.0


def snow_bg(r, g, b):
    # снежинка белая — оставляем; вырезаем только голубое
    if min(r, g, b) > 225 and b - r < 25:
        return 0.0
    return (b - r - 8) / 22.0 if b > 170 else 0.0


# --- Логотип ---
save(color_key(crop((28, 26, 244, 110)), logo_bg), 'logo.png')

# --- Hero: маскот + продукты (фон карточки оставляем, снимаем только белое над ней) ---
hero = flood_key(crop((505, 55, 1053, 770)), white_strict, feather=0)
hero = wipe(hero, (0, 0, 450, 24), (450, 0, 548, 48))
hero = paint_from_below(hero, 8, (0, 398, 34, 438))
hero = feather_edges(hero, left=40, top=8, right=8)
save(hero, 'hero-scene.png')

# --- Hero: чашка + стол слева ---
cup = flood_key(crop((330, 600, 560, 770)), white_strict, feather=0)
cup = wipe(cup, (0, 0, 30, 70))
cup = feather_edges(cup, left=22, top=26, right=14)
save(cup, 'hero-cup.png')

# --- Аватары ---
for i, cx in enumerate((68, 101, 132, 166), start=1):
    save(circle(crop((cx - 17, 616, cx + 17, 650))), f'avatar-{i}.png')

# --- Товары ---
products = {
    'product-flowers.png': (58, 1125, 262, 1315),
    'product-oil.png': (283, 1125, 508, 1315),
    'product-capsules.png': (518, 1125, 742, 1318),
    'product-tea.png': (755, 1125, 988, 1318),
}
for name, box in products.items():
    save(flood_key(crop(box), white_soft), name)

# --- Маскот «Почему SnowdropShop?» (карточка со снежинками остаётся) ---
why = flood_key(crop((30, 1400, 415, 1770)), white_strict, feather=0)
why = wipe(why, (355, 0, 385, 60))
why = feather_edges(why, left=8, top=6, right=10, bottom=8)
save(why, 'why-mascot.png')

# --- Подарок 10% (голубой фон баннера остаётся, растушёвка по краям) ---
gift = flood_key(crop((640, 1772, 990, 1955)), white_strict, feather=0)
gift = feather_edges(gift, left=18, top=14, right=18, bottom=10)
save(gift, 'gift-10.png')

# --- Снежинка (декор) ---
save(color_key(crop((508, 135, 595, 240)), snow_bg), 'snowflake.png')
