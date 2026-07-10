/* =====================================================================
 *  更新ハイライト（オリジナル・編集者まとめ）
 *  - Claude Code の主要トピック/新機能を、公式ドキュメントを根拠に独自に整理したもの。
 *  - 正確なバージョン・リリース日は公式リリースノートを参照（各項目の doc リンク先）。
 *  - period は登場時期の目安（厳密な日付ではない）。
 * ===================================================================== */
window.CCF_UPDATES = [
  {period:"最近",tag:"並列",title:"エージェントの並列・チーム実行が充実",summary:"バックグラウンド実行、複数セッションの一覧管理、サブエージェントへの委譲、大規模変更の分割並列（一括変更）など、長時間・並列のワークフローが強化されている。",links:[{name:"Subagents",url:"https://code.claude.com/docs/en/sub-agents"},{name:"Overview",url:"https://code.claude.com/docs/en/overview"}]},
  {period:"最近",tag:"拡張",title:"Plugins とマーケットプレイスで拡張を配布",summary:"Skills・subagents・hooks・MCP をまとめて配布・導入できる Plugins が整い、marketplace 経由で共有できるようになった。",links:[{name:"Plugins",url:"https://code.claude.com/docs/en/plugins"}]},
  {period:"最近",tag:"拡張",title:"Agent Skills で手順・知識を再利用",summary:"よく使う手順や知識を SKILL.md にまとめ、必要な時に自動で読み込ませたり、npx skills で配布・導入したりできる。",links:[{name:"Agent Skills",url:"https://code.claude.com/docs/en/skills"}]},
  {period:"最近",tag:"連携",title:"MCP 接続の追加・認証が扱いやすく",summary:"claude mcp add で stdio / HTTP / SSE サーバを登録でき、スコープ（user/project/local）や OAuth 認証まわりも整理された。",links:[{name:"MCP",url:"https://code.claude.com/docs/en/mcp"}]},
  {period:"最近",tag:"使う場所",title:"Web / Desktop / モバイルで使える幅が拡大",summary:"ブラウザ上のクラウド環境（Claude Code on the web）、Desktop アプリ、モバイルからの操作など、ローカルターミナル以外の選択肢が増えた。",links:[{name:"Overview",url:"https://code.claude.com/docs/en/overview"}]},
  {period:"最近",tag:"安全",title:"権限モードとサンドボックスの整理",summary:"確認優先・acceptEdits・plan・権限スキップなどのモードと、対応環境でのサンドボックス実行により、安全と効率のバランスを選べる。",links:[{name:"IAM / Permissions",url:"https://code.claude.com/docs/en/iam"}]},
  {period:"最近",tag:"検証",title:"計画（Plan）と巻き戻し（rewind）で安全に試行",summary:"実装前に方針だけ出す Plan mode と、会話やコードをチェックポイントへ戻す rewind で、行き過ぎた変更をやり直しやすくなった。",links:[{name:"Slash commands",url:"https://code.claude.com/docs/en/slash-commands"}]},
  {period:"最近",tag:"自動化",title:"ヘッドレス実行と GitHub Actions で自動化",summary:"claude -p の非対話実行や構造化出力、GitHub Actions 連携により、PR レビューやイベント駆動の自動処理が組みやすくなった。",links:[{name:"GitHub Actions",url:"https://code.claude.com/docs/en/github-actions"},{name:"CLI reference",url:"https://code.claude.com/docs/en/cli-reference"}]},
  {period:"最近",tag:"SDK",title:"Agent SDK で自作アプリに組み込み",summary:"Claude Code のエージェント機能をライブラリとして呼び出し、独自ツールやアプリに組み込めるようになった。",links:[{name:"Agent SDK",url:"https://code.claude.com/docs/en/sdk"}]},
  {period:"随時",tag:"確認",title:"最新の変更はリリースノートで確認",summary:"機能は活発に更新されている。うろ覚えのコマンドや古い記事の手順は、実行前に最新仕様を確認するのが安全。",links:[{name:"Overview",url:"https://code.claude.com/docs/en/overview"}]}
];
