#!/usr/bin/env python3
"""OGP画像を全ページ分まとめて生成する（非LLM・完全再現可能）。

Slack / X にリンクを貼った時のカードを、サイト本体と同じブランド
（紙の地色 + アクセント1色 + 大きめタイポ）で揃えるためのもの。
デザインを変えたい時はこのファイルだけ直して再実行する。

    python3 scripts/build_og.py
"""
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "site"

# サイトの CSS 変数と同じ値
BG = (245, 241, 234)        # --bg
INK = (25, 21, 16)          # --ink
TEXT2 = (107, 97, 84)       # --text2
ACCENT = (201, 100, 66)     # --accent
ACCENT_SOFT = (240, 205, 184)  # --accent-line
BORDER = (228, 218, 203)    # --border

S = 2                        # 2倍解像度で描いて出力（1200x630 → 2400x1260）
W, H = 1200 * S, 630 * S

FONT_PATH = "/System/Library/Fonts/Hiragino Sans GB.ttc"
BOLD, REGULAR = 2, 0         # ttc 内のフェイス番号（W6 / W3）


def font(size, bold=True):
    return ImageFont.truetype(FONT_PATH, size * S, index=BOLD if bold else REGULAR)


def chevron(d, x, y, size, width, color):
    """ブランドマークの ❯ を多角形で描く（フォント依存を避ける）。"""
    w = width * S
    d.line([(x, y), (x + size * 0.52, y + size * 0.5), (x, y + size)],
           fill=color, width=int(w), joint="curve")


def build(name, kicker, title_lines, subtitle):
    img = Image.new("RGB", (W, H), BG)
    d = ImageDraw.Draw(img)

    # 右側の大きな装飾シェブロン（極薄）
    chevron(d, W - 300 * S, 150 * S, 330 * S, 26, ACCENT_SOFT)

    # 上下の枠線としての細いアクセントライン
    d.rectangle([0, 0, W, 10 * S], fill=ACCENT)
    d.rectangle([0, H - 3 * S, W, H], fill=BORDER)

    pad = 84 * S
    # ブランド行: ❯_ + サイト名
    chevron(d, pad, 74 * S, 30 * S, 6, ACCENT)
    d.rectangle([pad + 22 * S, 100 * S, pad + 44 * S, 104 * S], fill=ACCENT)
    d.text((pad + 60 * S, 72 * S), "Claude Code 逆引き辞典",
           font=font(26, bold=True), fill=INK)

    # キッカー（英字・アクセント）
    d.text((pad, 184 * S), kicker, font=font(22, bold=True), fill=ACCENT)

    # 大見出し
    y = 226 * S
    for line in title_lines:
        d.text((pad, y), line, font=font(66, bold=True), fill=INK)
        y += 88 * S

    # サブ
    d.text((pad, y + 16 * S), subtitle, font=font(27, bold=False), fill=TEXT2)

    # フッタ URL
    d.text((pad, H - 80 * S), "claude-code-finder.pages.dev",
           font=font(24, bold=True), fill=ACCENT)

    path = OUT / name
    img.save(path, "PNG", optimize=True)
    print(f"  {name}  {img.size[0]}x{img.size[1]}  {path.stat().st_size // 1024}KB")


PAGES = [
    dict(name="og.png", kicker="FUNCTION FINDER",
         title_lines=["“PRを直したい”", "その機能へ、逆引きで"],
         subtitle="Claude Code の全機能を目的から一発で引ける日本語辞典"),
    dict(name="og-guide.png", kicker="GUIDE",
         title_lines=["Claude Code ガイド"],
         subtitle="基本 / コマンド / 設定 / 連携 / 拡張 を目的別に通して読める本文集"),
    dict(name="og-academy.png", kicker="ACADEMY",
         title_lines=["3コースで学ぶ", "Claude Code 講座"],
         subtitle="入門 → 中級 → 上級 手を動かしながら進む・進捗も記録"),
    dict(name="og-updates.png", kicker="UPDATES",
         title_lines=["更新ハイライト"],
         subtitle="主要な新機能 ＋ 公式 CHANGELOG を毎週自動取得"),
]

if __name__ == "__main__":
    print("OGP画像を生成:")
    for p in PAGES:
        build(**p)
    print("done")
