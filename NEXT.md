# claude-code-finder — Next Actions

本番: https://claude-code-finder.pages.dev/ ・ repo: ry071702-prog/claude-code-finder
計画全体: `~/.claude/plans/github-skills-skills-skills-claudecode-mossy-wozniak.md`

## 要ユーザー（CI/cron 前提）
- [x] Cloudflare API トークン発行→CLOUDFLARE_API_TOKEN 設定済（CI自動デプロイ稼働）

## Phase 1 — GitHub高星Skills 取り込み（非LLM cron）✅ 稼働
- [x] `config/skill-sources.csv`（seed: anthropics/skills, vercel-labs/agent-skills, 自作, 検索lane）
- [x] `scripts/fetch_skills.py`（GitHub API・★取得・SKILL.md frontmatter抽出、初回60件）
- [x] `scripts/build_data.py` → `site/js/data-skills.js` ＋ main.js マージ拡張
- [x] `.github/workflows/ingest-skills.yml`（週次cron 火07:00 JST・非LLM）
- 運用メモ: 取り込み元を足す時は `config/skill-sources.csv` に1行。marketplace系(plugins内skill)は P4 で別レーン化予定

## Phase 2 — install コピペ導線 ✅ 稼働
- [x] カードに `npx skills add …` コピーボタン＋★バッジ＋モーダル導入手順

## Phase 3 — 投稿レジストリ（D1）✅ 稼働
- [x] `functions/api/submit-skill.ts`（POST検証+honeypot+dedupe→D1 pending / GET件数）
- [x] D1 `claude-code-finder-submissions` + `db/schema.sql` + `wrangler.toml` バインド
- [x] 投稿CTA+モーダル（サイト）／`scripts/review_submissions.py`（--list/--approve/--reject→CSV昇格）
- 運用: 投稿は `python scripts/review_submissions.py --list` で確認→ `--approve owner/repo` で採用（次回ingestで掲載）
- 注意: functions/ は**リポジトリ直下**（pages_build_output_dir=site の外）。deploy は `wrangler pages deploy`（引数なし=wrangler.toml参照）

## Phase 4 — プラグイン + MCP 常駐 ✅ 稼働
- [x] `.claude-plugin/marketplace.json` / `plugin/.claude-plugin/plugin.json`
- [x] `plugin/mcp/server.mjs`（依存なし最小MCP stdio・tool `lookup`・日本語曖昧一致）+ `mcp/data.json` 同梱
- [x] `plugin/.mcp.json` / `plugin/skills/cc-finder/SKILL.md` / `scripts/build_plugin_data.mjs`
- 導入: `/plugin marketplace add ry071702-prog/claude-code-finder` → `/plugin install claude-code-finder@claude-code-finder`
- 単体skill: `npx skills add ry071702-prog/claude-code-finder -g`

---
## 🎉 P0–P4 全完了（2026-07-10）
本番 https://claude-code-finder.pages.dev/ で全機能稼働。push→自動デプロイ / 週次で Skills+plugin data 自動更新 / 投稿→D1→人間モデレート / プラグインで lookup 常駐。

## Phase 5 — コンテンツ層＆多ページ化（2026-07-10〜11）✅ 稼働
- [x] KAWAI 痕跡を全除去し、本文データ(`data.js` 77件)を公式docs準拠で**オリジナル執筆**。git履歴も orphan squash で由来を消去
- [x] 多ページ化: `guide.html`(通読ガイド) / `academy.html`(講座) / `updates.html`(更新)。共通ヘッダにサイト内タブ＋テーマトグル
- [x] **Academy 3コース21レッスン**(入門/中級/上級)・進捗localStorage・コース切替チップ・中級/上級は実例つき本文
- [x] **Updates 非LLM自動更新**: `scripts/fetch_updates.py` が公式 `anthropics/claude-code` の CHANGELOG.md を純パース→ `site/js/data-changelog.js`(週次 ingest に組込・色分けアコーディオン)
- [x] index に BENTO クロスページ導線「辞典の先へ」／ヒーローのタイプライター演出
- [x] **Skill登録の常時導線**: 全ページヘッダに「＋Skill登録」CTA、他ページは `index.html#submit` で申請モーダル自動オープン

## 残アイデア（Inbox/2026-07-11 にも記録）
- [ ] PR系クエリの検索精度向上（語境界一致は導入済み・次は同義語/意図マップ）
- [ ] marketplace系(plugin配下 skills/*/SKILL.md)の取り込みレーンを fetch_skills に追加
- [x] ~~掲載skillのstar自動再計測~~ → **既に実現**（fetch_skills は毎回 jsonl を全書き換え＋starをGitHubから再取得）
- [ ] パーサ(fetch_updates/fetch_skills)のテスト → `tests/` に pytest 追加（2026-07-11 着手）
- [ ] SEO: sitemap.xml / robots.txt（2026-07-11 追加）
- 運用: 週次ingest cron(火07:00 JST)の健全性を時々確認（CHANGELOG取得追加後の初回scheduled runが緑か）
