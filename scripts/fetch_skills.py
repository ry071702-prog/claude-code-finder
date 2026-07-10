#!/usr/bin/env python3
"""GitHub 上の Claude Code Skills を取得して data/skills/skills.jsonl に upsert する。

- 完全に非LLM（純パース）。GitHub REST/Search API + raw.githubusercontent を使う。
- 認証: env GITHUB_TOKEN もしくは GH_TOKEN（ローカルは `GH_TOKEN=$(gh auth token)`）。
- SKILL.md の frontmatter から name/description を抜き、repo の star を付け、
  導入コマンド `npx skills add owner/repo[@slug] -g` を組み立てる。
- config/skill-sources.csv の enabled 行だけ処理する。

使い方:
  python scripts/fetch_skills.py            # 取得して skills.jsonl を書く
  python scripts/fetch_skills.py --dry-run  # 書かずに要約だけ
  python scripts/fetch_skills.py --limit 40 # 最大件数
"""
from __future__ import annotations
import argparse, csv, json, os, sys, time, urllib.request, urllib.parse, urllib.error
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SOURCES = ROOT / "config" / "skill-sources.csv"
OUT = ROOT / "data" / "skills" / "skills.jsonl"
GH_API = "https://api.github.com"
RAW = "https://raw.githubusercontent.com"

TOKEN = os.environ.get("GITHUB_TOKEN") or os.environ.get("GH_TOKEN") or ""
UA = "claude-code-finder-skill-ingest"


def gh_get(url: str, accept: str = "application/vnd.github+json"):
    req = urllib.request.Request(url, headers={
        "User-Agent": UA,
        "Accept": accept,
        **({"Authorization": f"Bearer {TOKEN}"} if TOKEN else {}),
    })
    try:
        with urllib.request.urlopen(req, timeout=30) as r:
            return json.loads(r.read().decode("utf-8")) if "json" in accept else r.read().decode("utf-8")
    except urllib.error.HTTPError as e:
        if e.code == 403 and "rate limit" in (e.read().decode("utf-8", "ignore").lower()):
            print("  ! rate limited — sleeping 20s", file=sys.stderr)
            time.sleep(20)
            return None
        print(f"  ! HTTP {e.code} {url}", file=sys.stderr)
        return None
    except Exception as e:  # noqa
        print(f"  ! err {e} {url}", file=sys.stderr)
        return None


def raw_get(owner: str, repo: str, branch: str, path: str) -> str | None:
    url = f"{RAW}/{owner}/{repo}/{branch}/{urllib.parse.quote(path)}"
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    try:
        with urllib.request.urlopen(req, timeout=30) as r:
            return r.read().decode("utf-8", "ignore")
    except Exception:
        return None


def parse_frontmatter(text: str) -> dict:
    """SKILL.md 先頭の --- ... --- を dict に。pyyaml があれば使い、無ければ簡易パース。"""
    if not text.startswith("---"):
        return {}
    end = text.find("\n---", 3)
    if end == -1:
        return {}
    block = text[3:end].strip("\n")
    try:
        import yaml  # type: ignore
        data = yaml.safe_load(block)
        return data if isinstance(data, dict) else {}
    except Exception:
        pass
    # 簡易フォールバック: name: と description: のみ（複数行 folded/literal 対応）
    out, key, buf = {}, None, []
    for line in block.splitlines():
        if line[:1] not in (" ", "\t") and ":" in line:
            if key:
                out[key] = " ".join(buf).strip()
            k, _, v = line.partition(":")
            key, v = k.strip(), v.strip()
            if v in (">", "|", ">-", "|-", "|+", ">+"):
                buf = []
            else:
                buf = [v.strip('"\'')]
        elif key:
            buf.append(line.strip())
    if key:
        out[key] = " ".join(buf).strip()
    return out


def repo_meta(owner: str, repo: str) -> dict | None:
    d = gh_get(f"{GH_API}/repos/{owner}/{repo}")
    if not d or "full_name" not in d:
        return None
    return {
        "stars": d.get("stargazers_count", 0),
        "branch": d.get("default_branch", "main"),
        "desc": d.get("description") or "",
        "pushed_at": d.get("pushed_at", ""),
        "archived": d.get("archived", False),
    }


def find_skill_md(owner: str, repo: str, branch: str) -> list[str]:
    """default branch の tree から SKILL.md のパスを列挙。"""
    d = gh_get(f"{GH_API}/repos/{owner}/{repo}/git/trees/{branch}?recursive=1")
    if not d or "tree" not in d:
        return []
    return [t["path"] for t in d["tree"]
            if t.get("type") == "blob" and t["path"].split("/")[-1].lower() == "skill.md"]


def slug_of(path: str, repo: str) -> str:
    parts = path.split("/")
    if len(parts) >= 2:
        return parts[-2]           # <dir>/SKILL.md
    return repo                     # ルート直下


def install_cmd(owner: str, repo: str, slug: str, single: bool) -> str:
    base = f"npx skills add {owner}/{repo}"
    return f"{base} -g" if single else f"{base}@{slug} -g"


def collect_repo(owner: str, repo: str, priority: int, cap: int) -> list[dict]:
    meta = repo_meta(owner, repo)
    if not meta:
        print(f"  - skip {owner}/{repo} (not found)", file=sys.stderr)
        return []
    paths = find_skill_md(owner, repo, meta["branch"])
    if not paths:
        print(f"  - {owner}/{repo}: SKILL.md なし", file=sys.stderr)
        return []
    single = len(paths) == 1
    rows = []
    for path in paths[:cap]:
        content = raw_get(owner, repo, meta["branch"], path)
        if not content:
            continue
        fm = parse_frontmatter(content)
        name = (fm.get("name") or slug_of(path, repo)).strip()
        desc = (fm.get("description") or meta["desc"] or "").strip()
        if not desc:
            continue
        slug = slug_of(path, repo)
        rows.append({
            "id": f"skill-{owner}-{repo}-{slug}".lower().replace("/", "-"),
            "owner": owner, "repo": repo, "slug": slug, "name": name,
            "description": desc, "stars": meta["stars"],
            "url": f"https://github.com/{owner}/{repo}",
            "install": install_cmd(owner, repo, slug, single),
            "pushed_at": meta["pushed_at"], "archived": meta["archived"],
            "priority": priority,
        })
    print(f"  + {owner}/{repo}: {len(rows)} skills (★{meta['stars']})", file=sys.stderr)
    return rows


def collect_search(query: str, priority: int, cap: int) -> list[dict]:
    """GitHub コード検索で SKILL.md を発見 → repo 単位で集約して collect_repo に回す。"""
    if not TOKEN:
        print("  - search: 認証なしのためスキップ", file=sys.stderr)
        return []
    q = urllib.parse.quote(f"{query} filename:SKILL.md")
    d = gh_get(f"{GH_API}/search/code?q={q}&per_page=50",
               accept="application/vnd.github.text-match+json")
    if not d or "items" not in d:
        print("  - search: 結果なし/失敗", file=sys.stderr)
        return []
    repos = {}
    for it in d["items"]:
        r = it.get("repository", {})
        full = r.get("full_name")
        if full and full not in repos:
            repos[full] = True
    rows = []
    for full in list(repos)[:cap]:
        owner, _, repo = full.partition("/")
        rows += collect_repo(owner, repo, priority, cap=8)
        time.sleep(1)  # search 後は控えめに
    return rows


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--dry-run", action="store_true")
    ap.add_argument("--limit", type=int, default=200)
    ap.add_argument("--per-repo-cap", type=int, default=40)
    args = ap.parse_args()

    if not SOURCES.exists():
        print(f"no sources: {SOURCES}", file=sys.stderr)
        sys.exit(1)

    all_rows: list[dict] = []
    with SOURCES.open() as f:
        for row in csv.DictReader(r for r in f if not r.lstrip().startswith("#")):
            if (row.get("enabled") or "").strip().lower() != "true":
                continue
            typ = (row.get("type") or "").strip()
            val = (row.get("value") or "").strip()
            pri = int((row.get("priority") or "100").strip() or 100)
            print(f"[{typ}] {val}", file=sys.stderr)
            if typ == "repo" and "/" in val:
                owner, _, repo = val.partition("/")
                all_rows += collect_repo(owner, repo, pri, args.per_repo_cap)
            elif typ == "search":
                all_rows += collect_search(val, pri, cap=20)

    # dedup by id、star降順→priority昇順→name
    dedup = {}
    for r in all_rows:
        cur = dedup.get(r["id"])
        if not cur or r["stars"] > cur["stars"]:
            dedup[r["id"]] = r
    rows = sorted(dedup.values(),
                  key=lambda r: (-r["stars"], r["priority"], r["name"].lower()))[:args.limit]

    print(f"\n=== {len(rows)} skills (from {len(all_rows)} raw) ===", file=sys.stderr)
    for r in rows[:15]:
        print(f"  ★{r['stars']:>5}  {r['owner']}/{r['repo']}@{r['slug']}  — {r['name']}", file=sys.stderr)

    if args.dry_run:
        print("(dry-run: 書き込みなし)", file=sys.stderr)
        return
    OUT.parent.mkdir(parents=True, exist_ok=True)
    with OUT.open("w") as f:
        for r in rows:
            f.write(json.dumps(r, ensure_ascii=False) + "\n")
    print(f"wrote {OUT} ({len(rows)} rows)", file=sys.stderr)


if __name__ == "__main__":
    main()
