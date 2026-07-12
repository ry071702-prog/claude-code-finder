#!/usr/bin/env python3
"""空振り検索（D1 misses）を見て、次に辞典へ足す項目を決めるための CLI。

「探されたのに無かった語」を回数順に出す。ここが辞典を育てるループの入口。
出た語のうち妥当なものを site/js/data-custom.js に追記すれば、次のデプロイで拾える。

  python scripts/review_misses.py                 # 回数の多い空振り語トップ30
  python scripts/review_misses.py --limit 100     # 件数を変える
  python scripts/review_misses.py --min-hits 3    # 2回以上探された語だけ（ノイズ除去）
  python scripts/review_misses.py --clear "語"     # 対応済みの語を削除

D1 へは wrangler 経由でアクセス（ローカル wrangler 認証を使用）。
"""
from __future__ import annotations

import argparse
import json
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DB = "claude-code-finder-submissions"


def d1(sql: str) -> list[dict]:
    cmd = ["npx", "--yes", "wrangler", "d1", "execute", DB, "--remote", "--json", "--command", sql]
    out = subprocess.run(cmd, cwd=ROOT, capture_output=True, text=True)
    if out.returncode != 0:
        print(out.stderr.strip()[-500:], file=sys.stderr)
        sys.exit(1)
    txt = out.stdout.strip()
    start = txt.find("[")
    data = json.loads(txt[start:]) if start != -1 else []
    rows: list[dict] = []
    for blk in data:
        rows += blk.get("results", []) or []
    return rows


def esc(s: str) -> str:
    return s.replace("'", "''")


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--limit", type=int, default=30)
    ap.add_argument("--min-hits", type=int, default=1)
    ap.add_argument("--clear", metavar="語", help="対応済みの語を misses から削除")
    args = ap.parse_args()

    if args.clear:
        d1(f"DELETE FROM misses WHERE q = '{esc(args.clear)}'")
        print(f"削除した: {args.clear}")
        return 0

    rows = d1(
        "SELECT q, hits, last_seen FROM misses "
        f"WHERE hits >= {args.min_hits} ORDER BY hits DESC, last_seen DESC LIMIT {args.limit}"
    )
    if not rows:
        print("空振り検索の記録はまだ無い")
        return 0

    print(f"探されたのに見つからなかった語（{len(rows)} 件・回数順）\n")
    print(f"  {'回数':>4}  {'最終':10}  検索語")
    print(f"  {'-'*4}  {'-'*10}  {'-'*30}")
    for r in rows:
        last = str(r.get("last_seen", ""))[:10]
        print(f"  {r.get('hits', 0):>4}  {last:10}  {r.get('q', '')}")

    print("\n次の一手: 妥当な語は site/js/data-custom.js にエントリを追記 → 対応後は --clear で消す")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
