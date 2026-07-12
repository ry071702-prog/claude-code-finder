# Claude Code 逆引き辞典 / claude-code-finder

「やりたいこと」から、使う Claude Code の機能・コマンド・設定・連携先を逆引きできる日本語辞典。
本番: **https://claude-code-finder.pages.dev/**

- 本文データはすべて公式ドキュメントを一次情報に独自執筆（事実ベース・表現はオリジナル）
- 逆引き（`/`）に加えて、**ガイド**（通読）/ **講座**（3コース）/ **更新**（新機能＋公式CHANGELOG自動取得）の複数ページ構成
- **コミュニティ Skills** を非LLMで週次取り込み・配布、**MCP プラグイン**として Claude Code に常駐も可能

## Claude Code から使う（プラグイン / Skill）

やりたいことから機能を逆引きする **MCP tool `lookup(query)`** を Claude Code に常駐させられる。

- **プラグイン（推奨・MCP 常駐）**:
  ```
  /plugin marketplace add ry071702-prog/claude-code-finder
  /plugin install claude-code-finder@claude-code-finder
  ```
  有効化すると `lookup("PRを直したい")` のように、目的から機能・コマンド・導入skillを引ける（オフライン・同梱データ）。
- **単体 Skill だけ**:
  ```
  npx skills add ry071702-prog/claude-code-finder -g
  ```

## 構成
```
site/                 静的サイト（Cloudflare Pages 配信ルート）
  index.html          逆引き / guide.html ガイド / academy.html 講座 / updates.html 更新
  js/ main.js          逆引きの描画・検索・フィルタ・モーダル・投稿
      data.js          逆引き本文データ（オリジナル）
      data-custom.js   自分/チームの追加エントリ（ここに書き足す）
      data-skills.js   取り込んだコミュニティ Skills（生成物）
      data-academy.js  講座データ（オリジナル）/ academy.js 描画
      data-updates.js  更新ハイライト（手書き）/ updates.js 描画
      data-changelog.js 公式 CHANGELOG（生成物・週次自動取得）
      guide.js theme-toggle.js
functions/api/        Cloudflare Pages Functions（submit-skill.ts = 投稿API/D1）
plugin/               Claude Code プラグイン
  .claude-plugin/plugin.json  .mcp.json  skills/cc-finder/SKILL.md
  mcp/server.mjs       MCP stdio サーバ（lookup ツール・依存なし）
  mcp/data.json        逆引きデータ同梱（生成物）
.claude-plugin/marketplace.json   プラグイン配布マーケット
config/skill-sources.csv          取り込み元 watchlist
db/schema.sql                     D1 submissions スキーマ
scripts/              fetch_skills.py / fetch_updates.py / build_data.py / build_plugin_data.mjs / review_submissions.py
.github/workflows/    deploy.yml（push で自動デプロイ）/ ingest-skills.yml（週次・非LLM取り込み＋CHANGELOG更新）
```

## エントリの追加
`site/js/data-custom.js` に追記する。書式・カテゴリID・公式根拠IDは同ファイル冒頭のコメント参照。追加分は自動で「◆ 独自」タグ＋専用フィルタが付く。講座は `data-academy.js`、更新ハイライトは `data-updates.js` に追記。

## コミュニティ Skills / 更新情報の自動取り込み（非LLM）
- 取り込み元を足す: `config/skill-sources.csv` に1行（repo or 検索クエリ）
- 手動更新: `python scripts/fetch_skills.py && python scripts/fetch_updates.py && python scripts/build_data.py && node scripts/build_plugin_data.mjs`
- 更新ページの CHANGELOG は `anthropics/claude-code` の CHANGELOG.md を純パースして生成（`fetch_updates.py`）
- 他者からの投稿を捌く: `python scripts/review_submissions.py --list` → `--approve owner/repo`（`skill-sources.csv` へ昇格）

## Slack 週次通知（非LLM・任意）
週次インジェストで **新しい CHANGELOG バージョン / 新規 Skill が入った時だけ** Slack に投稿する。差分が無ければ何も流さない。

- 有効化: Slack の Incoming Webhook を作り、GitHub Secrets に `SLACK_WEBHOOK_URL` を登録するだけ（未設定なら投稿はスキップされ、状態も進まないので後から有効化しても取りこぼさない）
- 動作確認: `python scripts/notify_slack.py --dry-run`（投稿せず内容を表示）
- 通知済みの位置は `data/notify_state.json` に記録（git-as-DB）。初回は記録のみで投稿しない
- LLM は使わない。純粋な差分計算のみ

> 補足: 個人ルールでは Slack 連携は日報アプリに集約する方針だが、サイトと通知を同一リポジトリで完結させる判断により、本リポジトリに置く明示的な例外としている（2026-07-12）。

## デプロイ
- **自動（推奨）**: `main` に push すると `.github/workflows/deploy.yml` が `site/` を Cloudflare Pages へデプロイ。
  - 必要な GitHub Secrets: `CLOUDFLARE_API_TOKEN`（Pages:Edit）, `CLOUDFLARE_ACCOUNT_ID`
  - 任意: `SLACK_WEBHOOK_URL`（週次通知を使う場合）
- **手動**: `npx wrangler pages deploy site --project-name claude-code-finder --branch main`
- 週次インジェストは `GITHUB_TOKEN` で push するため `deploy.yml` の `on:push` が発火しない（GitHub仕様）。そのため ingest 側が自分でデプロイまで行う。
