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
