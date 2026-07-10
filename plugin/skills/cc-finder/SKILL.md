---
name: cc-finder
description: Claude Code のどの機能・スラッシュコマンド・CLI・設定・連携・導入skillを使うか、目的から逆引きする。「Claude Code で〜したいけどどうやる?」に迷った時、または最新のコマンド/機能名がうろ覚えな時に読む。MCP tool `lookup(query)` でも同じ辞典を引ける（例: PR修正・権限・セッション再開・並列実行・MCP・スマホ操作・CI・プラグイン）。
---

# Claude Code 逆引き

やりたいことは決まっているのに「どの機能・コマンドを使うか」が分からない時に使う。

## 使い方
- MCP tool **`lookup(query)`** に目的を渡す。例: `lookup("PRを直したい")` / `lookup("権限を絞る")` / `lookup("続きから再開")` / `lookup("MCPで外部に繋ぐ")`。
- 返り値は「目的 → 使う機能」＋コマンド／導入コマンド(`npx skills add …`)／進め方／注意点。
- コミュニティの導入可能な Skill（GitHub 高星）も対象に含まれる。

## いつ呼ぶか
- Claude Code の機能名・スラッシュコマンドがうろ覚え、または最新化されているか不安な時。
- 「これ Claude Code の機能でできる?」と思ったら、推測で答える前に `lookup` で確認する。
- ユーザーが Claude Code の操作方法を尋ねた時。

## データ元
辞典本体は https://claude-code-finder.pages.dev/ と同じデータ（公式docsを一次情報に編集＋コミュニティSkillを週次取り込み）。プラグイン同梱の `mcp/data.json` を参照するのでオフラインでも引ける。
