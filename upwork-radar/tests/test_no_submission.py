"""このツールが提案を送信する手段を持たないことの回帰テスト。

Upwork は完全自動の提案送信とブラウザ自動化を規約で禁止しており、違反は
永久停止の対象になる。うっかり「送信」を足してしまわないための歯止め。
"""

from pathlib import Path

import pytest

PACKAGE = Path(__file__).resolve().parents[1] / "upwork_radar"
SOURCES = sorted(PACKAGE.rglob("*.py"))

# ブラウザ自動化ライブラリ。Upwork の応募フローを操作すると規約違反になる。
FORBIDDEN_IMPORTS = ("selenium", "playwright", "puppeteer", "undetected_chromedriver")

# 提案送信・招待送信にあたる GraphQL / REST の操作名。
FORBIDDEN_OPERATIONS = (
    "createProposal",
    "submitProposal",
    "applyToJob",
    "sendInvite",
    "createOffer",
    "/proposals/",
)


@pytest.mark.parametrize("path", SOURCES, ids=lambda p: p.name)
def test_no_browser_automation(path):
    text = path.read_text(encoding="utf-8").lower()
    for name in FORBIDDEN_IMPORTS:
        assert f"import {name}" not in text, f"{path.name} が {name} を import している"


@pytest.mark.parametrize("path", SOURCES, ids=lambda p: p.name)
def test_no_proposal_submitting_operations(path):
    text = path.read_text(encoding="utf-8")
    for op in FORBIDDEN_OPERATIONS:
        assert op not in text, f"{path.name} に送信系の操作 {op} がある"


def test_graphql_query_is_read_only():
    query_dir = Path(__file__).resolve().parents[1] / "config"
    for path in query_dir.glob("*.graphql"):
        body = path.read_text(encoding="utf-8")
        assert "mutation" not in body, f"{path.name} に mutation がある（読み取り専用のはず）"
