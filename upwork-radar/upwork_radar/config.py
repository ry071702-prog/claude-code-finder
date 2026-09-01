"""TOML 設定の読み込み（依存ゼロ・stdlib の tomllib のみ）。

設定は 2 ファイルに分かれている:
  profile.toml — 自分は何者か。スコアリングの「スキル一致」と提案文生成が使う。
  filters.toml — どの案件を落とし、残りをどう重み付けするか。
"""

from __future__ import annotations

import os
import tomllib
from dataclasses import dataclass, field
from pathlib import Path
from typing import Any

DEFAULT_CONFIG_DIR = Path(os.environ.get("UPWORK_RADAR_CONFIG", "config"))


class ConfigError(RuntimeError):
    pass


def _load_toml(path: Path) -> dict[str, Any]:
    if not path.exists():
        example = path.with_suffix(".example.toml")
        hint = f"  `cp {example} {path}` から始める。" if example.exists() else ""
        raise ConfigError(f"設定ファイルが無い: {path}\n{hint}")
    with path.open("rb") as fh:
        return tomllib.load(fh)


@dataclass(slots=True)
class Portfolio:
    title: str
    summary: str
    url: str = ""
    tech: list[str] = field(default_factory=list)


@dataclass(slots=True)
class Profile:
    name: str
    headline: str = ""
    hourly_rate_usd: float | None = None
    skills: list[str] = field(default_factory=list)
    languages: list[str] = field(default_factory=list)
    timezone: str = ""
    bio: str = ""
    portfolio: list[Portfolio] = field(default_factory=list)
    proposal_style: str = ""

    @classmethod
    def load(cls, path: Path) -> "Profile":
        data = _load_toml(path)
        if not data.get("name"):
            raise ConfigError(f"{path}: `name` は必須。")
        items = [Portfolio(**p) for p in data.pop("portfolio", [])]
        known = {f for f in cls.__slots__ if f != "portfolio"}
        unknown = set(data) - known
        if unknown:
            raise ConfigError(f"{path}: 未知のキー {sorted(unknown)}")
        return cls(portfolio=items, **data)


@dataclass(slots=True)
class HardFilters:
    """1 つでも違反したら即除外。スコアは計算しない。"""

    require_payment_verified: bool = False
    min_fixed_budget_usd: float = 0.0
    min_hourly_rate_usd: float = 0.0
    max_proposals: int | None = None
    min_client_spent_usd: float = 0.0
    exclude_keywords: list[str] = field(default_factory=list)
    require_any_keywords: list[str] = field(default_factory=list)
    exclude_countries: list[str] = field(default_factory=list)
    # 予算や決済状況が不明な案件を落とすか。Gmail 由来は情報が薄いので既定は False。
    drop_when_budget_unknown: bool = False


@dataclass(slots=True)
class Weights:
    """合計が 100 になる必要はない。正規化して 0-100 のスコアにする。"""

    skill_match: float = 40
    budget: float = 20
    client_quality: float = 20
    competition: float = 10
    recency: float = 10


@dataclass(slots=True)
class Targets:
    """スコアが満点になる水準。min_* (足切り) とは別物。"""

    fixed_budget_usd: float = 3000.0
    hourly_rate_usd: float = 80.0
    recency_hours: float = 24.0


@dataclass(slots=True)
class Filters:
    hard: HardFilters = field(default_factory=HardFilters)
    weights: Weights = field(default_factory=Weights)
    targets: Targets = field(default_factory=Targets)
    notify_min_score: int = 60
    draft_min_score: int = 75
    draft_max_per_run: int = 3

    @classmethod
    def load(cls, path: Path) -> "Filters":
        data = _load_toml(path)
        return cls(
            hard=HardFilters(**data.get("hard", {})),
            weights=Weights(**data.get("weights", {})),
            targets=Targets(**data.get("targets", {})),
            notify_min_score=int(data.get("notify_min_score", 60)),
            draft_min_score=int(data.get("draft_min_score", 75)),
            draft_max_per_run=int(data.get("draft_max_per_run", 3)),
        )


@dataclass(slots=True)
class AppConfig:
    profile: Profile
    filters: Filters
    config_dir: Path

    @classmethod
    def load(cls, config_dir: Path | None = None) -> "AppConfig":
        d = Path(config_dir or DEFAULT_CONFIG_DIR)
        return cls(
            profile=Profile.load(d / "profile.toml"),
            filters=Filters.load(d / "filters.toml"),
            config_dir=d,
        )
