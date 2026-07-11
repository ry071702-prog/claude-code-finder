"""fetch_updates / fetch_skills の純パーサのテスト（ネットワーク不要）。

公式フォーマット（CHANGELOG.md / SKILL.md frontmatter）が変わったら
静かに壊れる箇所を、固定サンプル→期待出力で守る。

実行:  python -m pytest tests/ -q   もしくは  python tests/test_parsers.py
"""
import importlib.util
from pathlib import Path

SCRIPTS = Path(__file__).resolve().parent.parent / "scripts"


def _load(name):
    spec = importlib.util.spec_from_file_location(name, SCRIPTS / f"{name}.py")
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


fu = _load("fetch_updates")
fs = _load("fetch_skills")


# ---------- fetch_updates.parse ----------
SAMPLE_CHANGELOG = """\
# Changelog

## 2.1.10
- Added `/foo` command for bar
- Fixed crash when baz is null
- Improved startup time

## 2.1.9
- Changed default model row layout

## 2.1.8

## 2.1.7
- Removed the deprecated `--old` flag
"""


def test_parse_extracts_versions_in_order():
    vs = fu.parse(SAMPLE_CHANGELOG, limit=8)
    versions = [v["version"] for v in vs]
    # 箇条書きの無い 2.1.8 は除外される
    assert versions == ["2.1.10", "2.1.9", "2.1.7"]


def test_parse_respects_limit():
    vs = fu.parse(SAMPLE_CHANGELOG, limit=1)
    assert [v["version"] for v in vs] == ["2.1.10"]


def test_parse_strips_inline_code_backticks():
    vs = fu.parse(SAMPLE_CHANGELOG, limit=8)
    first = vs[0]["items"][0]["text"]
    assert "`" not in first
    assert "/foo" in first


def test_classify_kinds():
    assert fu.classify("Added a new command") == "追加"
    assert fu.classify("Fixed a crash") == "修正"
    assert fu.classify("Removed old flag") == "変更"
    assert fu.classify("Improved performance") == "改善"
    assert fu.classify("Totally unrelated line") == "その他"


def test_parse_empty_returns_empty_list():
    assert fu.parse("# Changelog\n\n(no versions here)\n", limit=8) == []


def test_to_js_wraps_window_global():
    js = fu.to_js([{"version": "1.0.0", "items": [{"kind": "追加", "text": "x"}]}])
    assert js.startswith("/*") or "window.CCF_CHANGELOG" in js
    assert "window.CCF_CHANGELOG =" in js
    assert "1.0.0" in js


# ---------- fetch_skills.parse_frontmatter ----------
SAMPLE_SKILL = """\
---
name: pdf-tools
description: PDF を生成・結合・分割したい時に使う
---

# PDF Tools

手順...
"""


def test_frontmatter_extracts_name_and_description():
    fm = fs.parse_frontmatter(SAMPLE_SKILL)
    assert fm.get("name") == "pdf-tools"
    assert "PDF" in fm.get("description", "")


def test_frontmatter_missing_returns_empty():
    assert fs.parse_frontmatter("# no frontmatter here\n") == {}


def test_install_cmd_shape():
    cmd = fs.install_cmd("owner", "repo", "repo", single=True)
    assert cmd.startswith("npx skills add ")
    assert "owner/repo" in cmd
    assert cmd.endswith("-g")


# ---------- fetch_skills: plugin-lane / 誤検出フィルタ / id 一意性 ----------
def test_is_skill_path_accepts_plugin_nested():
    assert fs.is_skill_path("plugins/foo/skills/commit/SKILL.md")
    assert fs.is_skill_path("skills/pdf/SKILL.md")
    assert fs.is_skill_path("SKILL.md")


def test_is_skill_path_rejects_non_skill_dirs():
    assert not fs.is_skill_path("examples/demo/SKILL.md")
    assert not fs.is_skill_path("test/fixtures/SKILL.md")
    assert not fs.is_skill_path("node_modules/pkg/SKILL.md")
    assert not fs.is_skill_path("templates/base/SKILL.md")
    assert not fs.is_skill_path("docs/readme.md")


def test_id_of_is_path_unique_no_leaf_collision():
    # 同じ leaf 名 "commit" が別プラグイン配下にあっても id が衝突しない
    a = fs.id_of("owner", "repo", "plugins/a/skills/commit/SKILL.md")
    b = fs.id_of("owner", "repo", "plugins/b/skills/commit/SKILL.md")
    assert a != b
    assert a.startswith("skill-owner-repo-")
    assert "/" not in a and " " not in a


def test_slug_of_returns_leaf_dir():
    assert fs.slug_of("plugins/a/skills/commit/SKILL.md", "repo") == "commit"
    assert fs.slug_of("SKILL.md", "repo") == "repo"


if __name__ == "__main__":
    import sys
    fns = [v for k, v in sorted(globals().items()) if k.startswith("test_") and callable(v)]
    failed = 0
    for fn in fns:
        try:
            fn()
            print(f"ok   {fn.__name__}")
        except AssertionError as e:
            failed += 1
            print(f"FAIL {fn.__name__}: {e}")
    print(f"\n{len(fns) - failed}/{len(fns)} passed")
    sys.exit(1 if failed else 0)
