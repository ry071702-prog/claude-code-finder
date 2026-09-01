"""案件の収集元。すべて Source プロトコルを満たし、正規化済みの Job を返す。"""

from .base import Source, SourceError, build_sources

__all__ = ["Source", "SourceError", "build_sources"]
