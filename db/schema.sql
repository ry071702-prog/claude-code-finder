-- claude-code-finder 投稿レジストリ（他者からの Skill 登録申請）
-- status: pending(未審査) / approved(採用→skill-sources.csv昇格) / rejected
CREATE TABLE IF NOT EXISTS submissions (
  id          TEXT PRIMARY KEY,
  owner_repo  TEXT NOT NULL,          -- "owner/repo"
  skill_name  TEXT,                   -- 任意（repo内の特定skill slug）
  category    TEXT,                   -- 任意
  contact     TEXT,                   -- 任意（連絡先/X等）
  note        TEXT,                   -- 任意（推薦理由）
  status      TEXT NOT NULL DEFAULT 'pending',
  country     TEXT,
  user_agent  TEXT,
  created_at  TEXT NOT NULL,
  UNIQUE(owner_repo, skill_name)
);
CREATE INDEX IF NOT EXISTS idx_submissions_status ON submissions(status, created_at);

-- 空振り検索（ヒット0件だった検索語）の集計。
-- 「みんなが探したのに辞典に無かったもの」＝次に足すべき項目、を推測でなくデータで決めるため。
-- 検索語のみを正規化して保存し、個人を識別しうる情報は持たない。
-- 1語1行に集約（hits を加算）するので行数は無限に増えない。
CREATE TABLE IF NOT EXISTS misses (
  q          TEXT PRIMARY KEY,        -- 正規化済みの検索語
  hits       INTEGER NOT NULL DEFAULT 1,
  first_seen TEXT NOT NULL,
  last_seen  TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_misses_hits ON misses(hits DESC);
