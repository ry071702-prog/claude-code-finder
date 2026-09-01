"""Upwork の保存済み検索アラートメールを読んで案件に変換する。

RSS は 2024-08-20 に廃止されたので、API キーが下りるまでの現実的な入口はこれ。
遅延は 20 分〜2 時間ほど（Upwork 側のバッチ送信間隔）。

IMAP は必ず readonly で開く。メールボックスを一切変更しない — 既読フラグすら
立てない。差分管理は store.py の SQLite 側で持つ。

パースは「壊れても静かに間違えない」方針。案件リンクを見つけられなければ 0 件を
返し、金額が読めなければ None（不明）にする。推測で数字を埋めない。
"""

from __future__ import annotations

import email
import imaplib
import os
import re
from datetime import datetime, timedelta, timezone
from email.message import Message
from email.utils import parsedate_to_datetime
from html.parser import HTMLParser
from pathlib import Path
from typing import Iterator

from ..models import Job, JOB_URL_RE, fallback_id, job_id_from_url
from .base import SourceError

DEFAULT_SENDER = "upwork.com"
_SKIP_TAGS = {"script", "style", "head", "title"}
_BLOCK_TAGS = {"p", "div", "br", "tr", "td", "li", "h1", "h2", "h3", "h4", "table"}

_MONEY = r"\$\s*([\d,]+(?:\.\d{1,2})?)"
_DASH = r"(?:-|–|—|to)"

FIXED_RE = re.compile(
    rf"(?:est(?:imated)?\.?\s*budget|fixed[\s-]?price)\D{{0,25}}{_MONEY}", re.I
)
HOURLY_RANGE_RE = re.compile(rf"{_MONEY}\s*{_DASH}\s*{_MONEY}", re.I)
HOURLY_SINGLE_RE = re.compile(rf"{_MONEY}\s*(?:/\s*hr|per\s+hour|an\s+hour)", re.I)
COUNTRY_RE = re.compile(r"(?i:country)\s*:?\s*([A-Za-z .'\-]{2,60})")
# 国名の直後に別項目が続く形 ("Country: United States Payment verified") を切る。
_COUNTRY_STOP = {
    "payment", "proposals", "posted", "skills", "budget", "hourly", "fixed",
    "country", "member", "est", "verified", "unverified", "level", "expert",
    "intermediate", "entry",
}
LEVEL_RE = re.compile(r"\b(entry[\s-]?level|intermediate|expert)\b", re.I)
PROPOSALS_RE = re.compile(
    rf"proposals?\s*:?\s*(?:less\s+than\s*)?(\d+)(?:\s*{_DASH}\s*(\d+))?", re.I
)
SKILLS_RE = re.compile(r"skills?\s*:\s*([^\n]{3,300})", re.I)
RELATIVE_RE = re.compile(
    r"posted\s+(?:on\s+)?(\d+)\s+(minute|min|hour|hr|day)s?\s+ago", re.I
)


class _LinkChunker(HTMLParser):
    """HTML を (href, テキスト) の並びに潰す。リンク境界だけ保てればよい。"""

    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.chunks: list[tuple[str | None, str]] = []
        self._href: str | None = None
        self._skip_depth = 0

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        if tag in _SKIP_TAGS:
            self._skip_depth += 1
        elif tag == "a":
            self._href = dict(attrs).get("href")
        elif tag in _BLOCK_TAGS:
            self.chunks.append((None, "\n"))

    def handle_endtag(self, tag: str) -> None:
        if tag in _SKIP_TAGS and self._skip_depth:
            self._skip_depth -= 1
        elif tag == "a":
            self._href = None
        elif tag in _BLOCK_TAGS:
            self.chunks.append((None, "\n"))

    def handle_data(self, data: str) -> None:
        if self._skip_depth or not data.strip():
            return
        self.chunks.append((self._href, data))


def _tidy(text: str) -> str:
    text = re.sub(r"[ \t\xa0]+", " ", text)
    return re.sub(r"\n\s*\n+", "\n", text).strip()


def parse_budget(text: str) -> tuple[str, float | None, float | None]:
    """(budget_type, min, max) を返す。読めなければ ("unknown", None, None)。"""

    def money(s: str) -> float:
        return float(s.replace(",", ""))

    if m := FIXED_RE.search(text):
        return "fixed", money(m.group(1)), money(m.group(1))

    if re.search(r"\bhourly\b", text, re.I):
        if m := HOURLY_RANGE_RE.search(text):
            return "hourly", money(m.group(1)), money(m.group(2))
        if m := HOURLY_SINGLE_RE.search(text):
            return "hourly", money(m.group(1)), money(m.group(1))
    elif m := HOURLY_SINGLE_RE.search(text):
        # "hourly" の語は無いが "$45/hr" と書いてある形。
        return "hourly", money(m.group(1)), money(m.group(1))
    return "unknown", None, None


def parse_proposals(text: str) -> int | None:
    """レンジ表記は中央値を返す。"Less than 5" は 5 として扱う（悲観側）。"""
    m = PROPOSALS_RE.search(text)
    if not m:
        return None
    low = int(m.group(1))
    high = int(m.group(2)) if m.group(2) else low
    return (low + high) // 2


def parse_posted_at(text: str, received_at: datetime | None) -> datetime | None:
    """"Posted 3 hours ago" をメール受信時刻からの相対で絶対時刻に直す。"""
    if received_at is None:
        return None
    m = RELATIVE_RE.search(text)
    if not m:
        return None
    n, unit = int(m.group(1)), m.group(2).lower()
    delta = {
        "minute": timedelta(minutes=n),
        "min": timedelta(minutes=n),
        "hour": timedelta(hours=n),
        "hr": timedelta(hours=n),
        "day": timedelta(days=n),
    }[unit]
    return received_at - delta


def parse_payment_verified(text: str) -> bool | None:
    low = text.lower()
    if "payment unverified" in low or "unverified payment" in low:
        return False
    if "payment verified" in low:
        return True
    return None


def parse_country(text: str) -> str | None:
    """"Country: United States" を拾う。後ろに続く別項目は切り落とす。"""
    m = COUNTRY_RE.search(text)
    if not m:
        return None
    kept: list[str] = []
    for word in m.group(1).split():
        if word.strip(".,").lower() in _COUNTRY_STOP:
            break
        kept.append(word)
    name = " ".join(kept).strip(" .,'-")
    return name or None


def parse_skills(text: str) -> list[str]:
    m = SKILLS_RE.search(text)
    if not m:
        return []
    parts = re.split(r"[,،・・]|\s{2,}", m.group(1))
    return [p.strip() for p in parts if 1 < len(p.strip()) <= 40][:15]


def _job_from_block(
    url: str, title: str, block: str, received_at: datetime | None
) -> Job:
    budget_type, lo, hi = parse_budget(block)
    level = LEVEL_RE.search(block)
    return Job(
        id=job_id_from_url(url) or fallback_id(title, url),
        source="gmail",
        title=title,
        url=url,
        description=_tidy(block),
        posted_at=parse_posted_at(block, received_at) or received_at,
        budget_type=budget_type,
        budget_min=lo,
        budget_max=hi,
        skills=parse_skills(block),
        experience_level=level.group(1).title() if level else None,
        client_country=parse_country(block),
        client_payment_verified=parse_payment_verified(block),
        proposals=parse_proposals(block),
        raw={"block": block[:4000]},
    )


def parse_alert_html(html: str, received_at: datetime | None = None) -> list[Job]:
    """1 通の HTML から案件を取り出す。案件リンクが 1 つも無ければ空リスト。"""
    parser = _LinkChunker()
    parser.feed(html)
    chunks = parser.chunks

    # 案件リンクの位置を拾う。同じ案件へのリンクが連続することがあるので、
    # 直前と同じ ID なら題名の長い方を採用して 1 件にまとめる。
    anchors: list[tuple[int, str, str, str]] = []  # (index, job_id, url, title)
    for i, (href, text) in enumerate(chunks):
        if not href:
            continue
        jid = job_id_from_url(href)
        if not jid:
            continue
        title = text.strip()
        if anchors and anchors[-1][1] == jid:
            if len(title) > len(anchors[-1][3]):
                anchors[-1] = (anchors[-1][0], jid, href, title)
            continue
        anchors.append((i, jid, href, title))

    jobs: list[Job] = []
    for n, (idx, _jid, url, title) in enumerate(anchors):
        end = anchors[n + 1][0] if n + 1 < len(anchors) else len(chunks)
        block = "".join(t for _h, t in chunks[idx:end])
        if not title:
            # 題名がリンクテキストに無い形（画像リンク等）はブロック先頭行で代用。
            title = next((ln for ln in _tidy(block).splitlines() if ln.strip()), "")
        if not title:
            continue
        jobs.append(_job_from_block(url, title, block, received_at))
    return jobs


def parse_alert_text(text: str, received_at: datetime | None = None) -> list[Job]:
    """text/plain 版のアラート。URL を境目にして同じ要領で切る。"""
    matches = list(JOB_URL_RE.finditer(text))
    jobs: list[Job] = []
    for n, m in enumerate(matches):
        end = matches[n + 1].start() if n + 1 < len(matches) else len(text)
        block = text[m.start() : end]
        head = _tidy(text[max(0, m.start() - 300) : m.start()]).splitlines()
        title = head[-1].strip() if head else ""
        if not title:
            title = _tidy(block).splitlines()[0] if _tidy(block) else ""
        if not title:
            continue
        jobs.append(_job_from_block(m.group(0), title, block, received_at))
    return jobs


def parse_message(msg: Message) -> list[Job]:
    """1 通のメールから案件を取り出す。HTML パートを優先し、無ければ本文。"""
    try:
        received_at = parsedate_to_datetime(msg.get("Date", ""))
    except (TypeError, ValueError):
        received_at = None
    if received_at is not None and received_at.tzinfo is None:
        received_at = received_at.replace(tzinfo=timezone.utc)

    html_parts, text_parts = [], []
    for part in msg.walk():
        if part.get_content_maintype() != "text":
            continue
        try:
            body = part.get_payload(decode=True)
        except Exception:  # noqa: BLE001 - 壊れた添付で 1 通を落とさない
            continue
        if body is None:
            continue
        charset = part.get_content_charset() or "utf-8"
        decoded = body.decode(charset, errors="replace")
        (html_parts if part.get_content_subtype() == "html" else text_parts).append(decoded)

    for html in html_parts:
        if jobs := parse_alert_html(html, received_at):
            return jobs
    for text in text_parts:
        if jobs := parse_alert_text(text, received_at):
            return jobs
    return []


class GmailAlertSource:
    """IMAP でアラートメールを読む収集元（`eml_dir` を渡すとオフライン動作）。

    環境変数:
      UPWORK_RADAR_IMAP_HOST      既定 imap.gmail.com
      UPWORK_RADAR_IMAP_USER      Gmail アドレス
      UPWORK_RADAR_IMAP_PASSWORD  Google のアプリパスワード（通常のパスワード不可）
      UPWORK_RADAR_IMAP_MAILBOX   既定 INBOX
    """

    name = "gmail"

    def __init__(
        self,
        *,
        eml_dir: Path | None = None,
        since_days: int = 3,
        sender: str = DEFAULT_SENDER,
    ) -> None:
        self.eml_dir = Path(eml_dir) if eml_dir else None
        self.since_days = since_days
        self.sender = sender
        self.host = os.environ.get("UPWORK_RADAR_IMAP_HOST", "imap.gmail.com")
        self.user = os.environ.get("UPWORK_RADAR_IMAP_USER", "")
        self.password = os.environ.get("UPWORK_RADAR_IMAP_PASSWORD", "")
        self.mailbox = os.environ.get("UPWORK_RADAR_IMAP_MAILBOX", "INBOX")
        if self.eml_dir is not None:
            self.name = "eml"

    def available(self) -> tuple[bool, str]:
        if self.eml_dir is not None:
            if self.eml_dir.is_dir():
                return True, f"{self.eml_dir} の .eml を読む"
            return False, f"{self.eml_dir} が無い。.eml を書き出して置く。"
        missing = [
            var
            for var, val in (
                ("UPWORK_RADAR_IMAP_USER", self.user),
                ("UPWORK_RADAR_IMAP_PASSWORD", self.password),
            )
            if not val
        ]
        if missing:
            return False, f"未設定の環境変数: {', '.join(missing)}"
        return True, f"{self.user}@{self.host}/{self.mailbox}"

    def fetch(self) -> Iterator[Job]:
        ok, why = self.available()
        if not ok:
            raise SourceError(f"[gmail] {why}")
        messages = (
            self._read_eml_dir() if self.eml_dir is not None else self._read_imap()
        )
        for msg in messages:
            yield from parse_message(msg)

    def _read_eml_dir(self) -> Iterator[Message]:
        assert self.eml_dir is not None
        for path in sorted(self.eml_dir.glob("*.eml")):
            yield email.message_from_bytes(path.read_bytes())

    def _read_imap(self) -> Iterator[Message]:
        since = (datetime.now(timezone.utc) - timedelta(days=self.since_days)).strftime(
            "%d-%b-%Y"
        )
        try:
            conn = imaplib.IMAP4_SSL(self.host)
        except OSError as exc:
            raise SourceError(f"[gmail] {self.host} に接続できない: {exc}") from exc
        try:
            conn.login(self.user, self.password)
            # readonly=True: 既読フラグを含め、メールボックスを一切変更しない。
            conn.select(self.mailbox, readonly=True)
            typ, data = conn.search(None, "FROM", self.sender, "SINCE", since)
            if typ != "OK":
                raise SourceError(f"[gmail] IMAP SEARCH が失敗: {typ}")
            for num in data[0].split():
                typ, payload = conn.fetch(num, "(RFC822)")
                if typ != "OK" or not payload or not isinstance(payload[0], tuple):
                    continue
                yield email.message_from_bytes(payload[0][1])
        except imaplib.IMAP4.error as exc:
            raise SourceError(
                f"[gmail] IMAP エラー: {exc}. Gmail はアプリパスワードが必要で、"
                "通常のアカウントパスワードでは失敗する。"
            ) from exc
        finally:
            try:
                conn.logout()
            except Exception:  # noqa: BLE001
                pass
