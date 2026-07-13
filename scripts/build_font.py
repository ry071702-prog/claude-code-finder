#!/usr/bin/env python3
"""見出し用の日本語表示フォント site/fonts/zenkaku-display.woff2 を生成する（非LLM・再現可能）。

なぜ自己サブセット＋自己ホストか:
  Google Fonts の日本語は多数の unicode-range サブセットに分割配信され、各サブセット到着ごとに
  巨大な hero(=LCP)が逐次再フローして CLS を悪化させる（display=optional でも分割ゆえ残る）。
  1ウェイト(Black 900)を「見出しで実際に使うグリフ＋全かな＋ASCII」に絞った単一 woff2 に
  すれば、一度に描画され逐次リフローが消える。未収録の稀な漢字はブラウザのグリフ単位
  フォールバックでシステム源ゴシックが埋める（tofu にならない）。

いつ再実行するか:
  hero の rotator フレーズ（site/js/main.js）や各ページの h1/h2 見出しに、
  サブセット未収録の新しい漢字を足したとき。その字だけシステムフォントに落ちるのを
  完全に揃えたい場合に再生成する。当てないなら実害はない（フォールバックされるだけ）。

使い方（fonttools は uv の一時環境で実行）:
  uv run --with fonttools --with brotli python scripts/build_font.py
"""
from __future__ import annotations

import re
import sys
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SITE = ROOT / "site"
OUT = SITE / "fonts" / "zenkaku-display.woff2"
# Zen Kaku Gothic New Black (OFL) を google/fonts から取得（キャッシュがあれば再利用）
TTF_URL = "https://raw.githubusercontent.com/google/fonts/main/ofl/zenkakugothicnew/ZenKakuGothicNew-Black.ttf"
TTF_CACHE = ROOT / ".cache" / "ZenKakuGothicNew-Black.ttf"

# CSS 側 @font-face(CCFDisplayJP) を当てている要素で使うテキストを集める。
# 変わりやすいのは hero の rotator と各ページ見出しなので、そこを機械的に走査する。
BRAND = "Claude Code 逆引き辞典"
LINE2 = "その機能へ、逆引きで"


def collect_chars() -> set[str]:
    chars: set[str] = set(BRAND) | set(LINE2)

    # 1) hero rotator のフレーズ配列（main.js の words = [...] を素直に抜く）
    mainjs = (SITE / "js" / "main.js").read_text(encoding="utf-8")
    m = re.search(r"const\s+words\s*=\s*\[(.*?)\]", mainjs, re.S)
    if m:
        for phrase in re.findall(r'"([^"]*)"', m.group(1)):
            chars.update(phrase)

    # 2) 全 HTML の h1/h2 見出しテキスト（タグ除去）
    tag_re = re.compile(r"<(h1|h2)[^>]*>(.*?)</\1>", re.S | re.I)
    strip_re = re.compile(r"<[^>]+>")
    for html in SITE.glob("*.html"):
        txt = html.read_text(encoding="utf-8")
        for _, inner in tag_re.findall(txt):
            chars.update(strip_re.sub("", inner))

    # 3) 安全網: 全かな・ASCII・和文約物・全角英数
    for cp in range(0x3040, 0x30FF + 1):
        chars.add(chr(cp))
    for cp in range(0x20, 0x7E + 1):
        chars.add(chr(cp))
    chars.update("、。，．・：；！？「」『』（）［］｛｝〈〉《》【】〜ー―…“”‘’＋－＝／＼％＆＃＠＊❯")
    for cp in range(0xFF01, 0xFF5E + 1):
        chars.add(chr(cp))

    return {c for c in chars if ord(c) >= 0x20}


def main() -> None:
    try:
        from fontTools.subset import Options, Subsetter
        from fontTools.ttLib import TTFont
    except ImportError:
        sys.exit("fonttools が必要: uv run --with fonttools --with brotli python scripts/build_font.py")

    if not TTF_CACHE.exists():
        TTF_CACHE.parent.mkdir(parents=True, exist_ok=True)
        print(f"downloading {TTF_URL}")
        urllib.request.urlretrieve(TTF_URL, TTF_CACHE)  # noqa: S310 (既知の Google Fonts URL)

    text = "".join(sorted(collect_chars()))
    print(f"サブセット文字数: {len(text)}")

    opts = Options()
    opts.flavor = "woff2"
    opts.desubroutinize = True
    opts.layout_features = ["*"]
    opts.name_IDs = ["*"]
    opts.notdef_outline = True

    font = TTFont(str(TTF_CACHE))
    ss = Subsetter(options=opts)
    ss.populate(text=text)
    ss.subset(font)
    OUT.parent.mkdir(parents=True, exist_ok=True)
    font.save(str(OUT))
    kb = OUT.stat().st_size / 1024
    print(f"wrote {OUT} ({kb:.1f} KB)")
    if kb > 120:
        print("WARN: 120KB 超。見出し用としては重い", file=sys.stderr)


if __name__ == "__main__":
    main()
