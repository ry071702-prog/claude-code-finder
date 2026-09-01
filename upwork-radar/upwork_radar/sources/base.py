"""Source の共通インターフェースと、設定から収集元を組み立てるファクトリ。

入口が Gmail のアラートメールでも公式 GraphQL API でも、下流（重複排除・
スコアリング・提案文生成）は Job しか見ない。API キーが下りたら
`sources.enabled` を差し替えるだけで移行が終わるようにしてある。
"""

from __future__ import annotations

from pathlib import Path
from typing import Iterator, Protocol, runtime_checkable


class SourceError(RuntimeError):
    """収集元が使えない（認証情報が無い、接続できない等）。"""


@runtime_checkable
class Source(Protocol):
    name: str

    def fetch(self) -> Iterator["object"]:  # -> Iterator[Job]
        ...

    def available(self) -> tuple[bool, str]:
        """(使えるか, 理由や不足している環境変数の説明) を返す。"""
        ...


def build_sources(config_dir: Path, names: list[str]) -> list[Source]:
    """名前のリストから Source を組み立てる。未知の名前は SourceError。"""
    from .gmail_alerts import GmailAlertSource
    from .local_json import LocalJsonSource
    from .upwork_api import UpworkApiSource

    registry = {
        "gmail": lambda: GmailAlertSource(),
        "eml": lambda: GmailAlertSource(eml_dir=Path("eml")),
        "api": lambda: UpworkApiSource(config_dir=config_dir),
        "local": lambda: LocalJsonSource(Path("jobs.json")),
    }
    out: list[Source] = []
    for n in names:
        if n not in registry:
            raise SourceError(f"未知の収集元 {n!r}。使えるのは {sorted(registry)}")
        out.append(registry[n]())
    return out
