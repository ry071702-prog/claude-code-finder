// 生成物: scripts/build_data.py が skills.jsonl + overrides.ja.json から作成。手で編集しない。
// GitHub の Claude Code Skills を非LLMで取り込み、日本語化 120/120 件（週次 ingest-skills.yml）。
window.CCF_SKILLS = [
{
"id": "skill-anthropics-skills-skills-algorithmic-art",
"priority": 400,
"category": "community",
"type": "skill",
"want": "コードで生成アートを作りたい",
"feature": "anthropics/skills",
"summary": "p5.js とシード付き乱数を使い、パラメータを変えながら生成アートを描く。既存作家の模倣は避け、オリジナルを作る。",
"trigger": "コードで生成アート・アルゴリズミックアート・フローフィールド・パーティクル表現を作るとき。",
"commands": [
"npx skills add anthropics/skills@algorithmic-art -g"
],
"install": "npx skills add anthropics/skills@algorithmic-art -g",
"stars": 160359,
"repoUrl": "https://github.com/anthropics/skills",
"aliases": [
"algorithmic-art",
"anthropics",
"algorithmic-art",
"skill",
"スキル"
]
},
{
"id": "skill-anthropics-skills-skills-brand-guidelines",
"priority": 401,
"category": "community",
"type": "skill",
"want": "Anthropic のブランドの見た目に揃えたい",
"feature": "anthropics/skills",
"summary": "Anthropic 公式のブランドカラーとタイポグラフィを成果物に当て、会社のデザイン基準に沿った見た目に整える。",
"trigger": "ブランドカラーやスタイルガイド、視覚フォーマット、会社のデザイン基準を当てはめるとき。",
"commands": [
"npx skills add anthropics/skills@brand-guidelines -g"
],
"install": "npx skills add anthropics/skills@brand-guidelines -g",
"stars": 160359,
"repoUrl": "https://github.com/anthropics/skills",
"aliases": [
"brand-guidelines",
"anthropics",
"brand-guidelines",
"skill",
"スキル"
]
},
{
"id": "skill-anthropics-skills-skills-canvas-design",
"priority": 402,
"category": "community",
"type": "skill",
"want": "ポスターやアート作品を画像・PDFで作りたい",
"feature": "anthropics/skills",
"summary": "デザインの考え方に沿って、.png や .pdf の静的なビジュアル作品を作る。既存作家の模倣はしない。",
"trigger": "ポスター・アート・デザインなど、静的な作品の制作を頼むとき。",
"commands": [
"npx skills add anthropics/skills@canvas-design -g"
],
"install": "npx skills add anthropics/skills@canvas-design -g",
"stars": 160359,
"repoUrl": "https://github.com/anthropics/skills",
"aliases": [
"canvas-design",
"anthropics",
"canvas-design",
"skill",
"スキル"
]
},
{
"id": "skill-anthropics-skills-skills-claude-api",
"priority": 403,
"category": "community",
"type": "skill",
"want": "Claude API の仕様を正しく調べたい",
"feature": "anthropics/skills",
"summary": "モデルIDや料金、ストリーミング、tool use、MCP、トークン計算まで Claude API の仕様を参照する。",
"trigger": "Claude や Anthropic のモデル・API について答えるとき、LLM 前提のコードを書くとき。記憶で答えない。",
"commands": [
"npx skills add anthropics/skills@claude-api -g"
],
"install": "npx skills add anthropics/skills@claude-api -g",
"stars": 160359,
"repoUrl": "https://github.com/anthropics/skills",
"aliases": [
"claude-api",
"anthropics",
"claude-api",
"skill",
"スキル"
]
},
{
"id": "skill-anthropics-skills-skills-doc-coauthoring",
"priority": 404,
"category": "community",
"type": "skill",
"want": "ドキュメントを段取りを踏んで書き上げたい",
"feature": "anthropics/skills",
"summary": "仕様書や提案書、意思決定ドキュメントを、文脈の受け渡しから推敲、読み手目線の確認まで段階を追って書く。",
"trigger": "ドキュメント・提案書・技術仕様・意思決定ドキュメントを書き始めるとき。",
"commands": [
"npx skills add anthropics/skills@doc-coauthoring -g"
],
"install": "npx skills add anthropics/skills@doc-coauthoring -g",
"stars": 160359,
"repoUrl": "https://github.com/anthropics/skills",
"aliases": [
"doc-coauthoring",
"anthropics",
"doc-coauthoring",
"skill",
"スキル"
]
},
{
"id": "skill-anthropics-skills-skills-docx",
"priority": 405,
"category": "community",
"type": "skill",
"want": "Wordファイル(.docx)を作成・編集したい",
"feature": "anthropics/skills",
"summary": ".docx の作成・読み取り・編集を行う。目次や見出し、ページ番号、画像の差し替え、変更履歴やコメントも扱う。",
"trigger": "Word 文書や .docx を扱うとき。レポート・メモ・レターを Word 形式で求められたとき。",
"commands": [
"npx skills add anthropics/skills@docx -g"
],
"install": "npx skills add anthropics/skills@docx -g",
"stars": 160359,
"repoUrl": "https://github.com/anthropics/skills",
"aliases": [
"docx",
"anthropics",
"docx",
"skill",
"スキル"
]
},
{
"id": "skill-anthropics-skills-skills-frontend-design",
"priority": 406,
"category": "community",
"type": "skill",
"want": "テンプレっぽくないUIに仕上げたい",
"feature": "anthropics/skills",
"summary": "新しいUIを作るときや既存UIを組み直すときに、方向性やタイポグラフィなど見た目の判断を助ける。",
"trigger": "新規UIを作る、または既存のUIの見た目を作り直すとき。",
"commands": [
"npx skills add anthropics/skills@frontend-design -g"
],
"install": "npx skills add anthropics/skills@frontend-design -g",
"stars": 160359,
"repoUrl": "https://github.com/anthropics/skills",
"aliases": [
"frontend-design",
"anthropics",
"frontend-design",
"skill",
"スキル"
]
},
{
"id": "skill-anthropics-skills-skills-internal-comms",
"priority": 407,
"category": "community",
"type": "skill",
"want": "社内向けの報告や周知の文章を書きたい",
"feature": "anthropics/skills",
"summary": "ステータス報告、経営層向けアップデート、社内ニュースレター、FAQ、障害報告などを社内の型に沿って書く。",
"trigger": "社内向けの文書 (ステータス報告・障害報告・プロジェクト更新など) を書くとき。",
"commands": [
"npx skills add anthropics/skills@internal-comms -g"
],
"install": "npx skills add anthropics/skills@internal-comms -g",
"stars": 160359,
"repoUrl": "https://github.com/anthropics/skills",
"aliases": [
"internal-comms",
"anthropics",
"internal-comms",
"skill",
"スキル"
]
},
{
"id": "skill-anthropics-skills-skills-mcp-builder",
"priority": 408,
"category": "community",
"type": "skill",
"want": "MCPサーバーを自分で作りたい",
"feature": "anthropics/skills",
"summary": "外部APIやサービスをつなぐ MCP サーバーを、Python (FastMCP) や Node/TypeScript で作る指針を示す。",
"trigger": "外部APIやサービスを取り込む MCP サーバーを作るとき。",
"commands": [
"npx skills add anthropics/skills@mcp-builder -g"
],
"install": "npx skills add anthropics/skills@mcp-builder -g",
"stars": 160359,
"repoUrl": "https://github.com/anthropics/skills",
"aliases": [
"mcp-builder",
"anthropics",
"mcp-builder",
"skill",
"スキル"
]
},
{
"id": "skill-anthropics-skills-skills-pdf",
"priority": 409,
"category": "community",
"type": "skill",
"want": "PDFを読み書き・編集したい",
"feature": "anthropics/skills",
"summary": "PDF のテキストや表の抽出、結合と分割、回転、透かし、フォーム入力、暗号化、スキャンPDFのOCRまで扱う。",
"trigger": ".pdf ファイルに何かする、または PDF を作るとき。",
"commands": [
"npx skills add anthropics/skills@pdf -g"
],
"install": "npx skills add anthropics/skills@pdf -g",
"stars": 160359,
"repoUrl": "https://github.com/anthropics/skills",
"aliases": [
"pdf",
"anthropics",
"pdf",
"skill",
"スキル"
]
},
{
"id": "skill-anthropics-skills-skills-pptx",
"priority": 410,
"category": "community",
"type": "skill",
"want": "スライド(.pptx)を作成・編集したい",
"feature": "anthropics/skills",
"summary": ".pptx の作成・読み取り・編集を行う。テキスト抽出、ファイルの結合と分割、テンプレートや発表者ノートも扱う。",
"trigger": "デッキ・スライド・プレゼン、あるいは .pptx ファイルに触れるとき。",
"commands": [
"npx skills add anthropics/skills@pptx -g"
],
"install": "npx skills add anthropics/skills@pptx -g",
"stars": 160359,
"repoUrl": "https://github.com/anthropics/skills",
"aliases": [
"pptx",
"anthropics",
"pptx",
"skill",
"スキル"
]
},
{
"id": "skill-anthropics-skills-skills-skill-creator",
"priority": 411,
"category": "community",
"type": "skill",
"want": "Skillを自分で作って直したい",
"feature": "anthropics/skills",
"summary": "Skill を新規に作り、既存 Skill の修正、eval による性能測定、description の調整まで行う。",
"trigger": "Skill を作る・直す、eval で性能を測る、description の発動精度を上げるとき。",
"commands": [
"npx skills add anthropics/skills@skill-creator -g"
],
"install": "npx skills add anthropics/skills@skill-creator -g",
"stars": 160359,
"repoUrl": "https://github.com/anthropics/skills",
"aliases": [
"skill-creator",
"anthropics",
"skill-creator",
"skill",
"スキル"
]
},
{
"id": "skill-anthropics-skills-skills-slack-gif-creator",
"priority": 412,
"category": "community",
"type": "skill",
"want": "Slackに貼るGIFアニメを作りたい",
"feature": "anthropics/skills",
"summary": "Slack の制約に収まるアニメーションGIFを作る。制約の情報、検証ツール、アニメーションの型を持つ。",
"trigger": "「Slack 用に〜のGIFを作って」のように、Slack向けアニメGIFを頼むとき。",
"commands": [
"npx skills add anthropics/skills@slack-gif-creator -g"
],
"install": "npx skills add anthropics/skills@slack-gif-creator -g",
"stars": 160359,
"repoUrl": "https://github.com/anthropics/skills",
"aliases": [
"slack-gif-creator",
"anthropics",
"slack-gif-creator",
"skill",
"スキル"
]
},
{
"id": "skill-anthropics-skills-skills-theme-factory",
"priority": 413,
"category": "community",
"type": "skill",
"want": "成果物の配色とフォントを揃えたい",
"feature": "anthropics/skills",
"summary": "スライドや文書、HTMLページに配色とフォントのテーマを当てる。10種のプリセットがあり、新規テーマも作れる。",
"trigger": "作った成果物にテーマを当てて見た目を統一するとき。",
"commands": [
"npx skills add anthropics/skills@theme-factory -g"
],
"install": "npx skills add anthropics/skills@theme-factory -g",
"stars": 160359,
"repoUrl": "https://github.com/anthropics/skills",
"aliases": [
"theme-factory",
"anthropics",
"theme-factory",
"skill",
"スキル"
]
},
{
"id": "skill-anthropics-skills-skills-web-artifacts-builder",
"priority": 414,
"category": "community",
"type": "skill",
"want": "React製の込み入ったアーティファクトを作りたい",
"feature": "anthropics/skills",
"summary": "React・Tailwind CSS・shadcn/ui で、状態管理やルーティングを持つ HTML アーティファクトを組む。",
"trigger": "単一ファイルでは済まない、複数コンポーネント構成のアーティファクトを作るとき。",
"commands": [
"npx skills add anthropics/skills@web-artifacts-builder -g"
],
"install": "npx skills add anthropics/skills@web-artifacts-builder -g",
"stars": 160359,
"repoUrl": "https://github.com/anthropics/skills",
"aliases": [
"web-artifacts-builder",
"anthropics",
"web-artifacts-builder",
"skill",
"スキル"
]
},
{
"id": "skill-anthropics-skills-skills-webapp-testing",
"priority": 415,
"category": "community",
"type": "skill",
"want": "ローカルのWebアプリをブラウザで確認したい",
"feature": "anthropics/skills",
"summary": "Playwright でローカルの Web アプリを操作し、画面の挙動確認、スクリーンショット、ブラウザログの確認を行う。",
"trigger": "",
"commands": [
"npx skills add anthropics/skills@webapp-testing -g"
],
"install": "npx skills add anthropics/skills@webapp-testing -g",
"stars": 160359,
"repoUrl": "https://github.com/anthropics/skills",
"aliases": [
"webapp-testing",
"anthropics",
"webapp-testing",
"skill",
"スキル"
]
},
{
"id": "skill-anthropics-skills-skills-xlsx",
"priority": 416,
"category": "community",
"type": "skill",
"want": "Excelやスプレッドシートを作成・編集したい",
"feature": "anthropics/skills",
"summary": ".xlsx や .csv の読み取り・編集・新規作成を行う。数式や書式、グラフ、崩れた表データの整形まで扱う。",
"trigger": "スプレッドシートが入力か出力の主役になるとき。成果物が Word や HTML なら使わない。",
"commands": [
"npx skills add anthropics/skills@xlsx -g"
],
"install": "npx skills add anthropics/skills@xlsx -g",
"stars": 160359,
"repoUrl": "https://github.com/anthropics/skills",
"aliases": [
"xlsx",
"anthropics",
"xlsx",
"skill",
"スキル"
]
},
{
"id": "skill-garrytan-gstack-autoplan",
"priority": 417,
"category": "community",
"type": "skill",
"want": "複数観点のレビューを続けて回したい",
"feature": "garrytan/gstack",
"summary": "gstack の CEO・デザイン・エンジニア・DX レビューを順に走らせ、6つの判断原則で自動的に結論を出す。",
"trigger": "",
"commands": [
"npx skills add garrytan/gstack@autoplan -g"
],
"install": "npx skills add garrytan/gstack@autoplan -g",
"stars": 121291,
"repoUrl": "https://github.com/garrytan/gstack",
"aliases": [
"autoplan",
"garrytan",
"autoplan",
"skill",
"スキル"
]
},
{
"id": "skill-garrytan-gstack-benchmark",
"priority": 418,
"category": "community",
"type": "skill",
"want": "パフォーマンスの劣化を見つけたい",
"feature": "garrytan/gstack",
"summary": "gstack の browse デーモンを使って、性能のリグレッション (劣化) を検出する。",
"trigger": "",
"commands": [
"npx skills add garrytan/gstack@benchmark -g"
],
"install": "npx skills add garrytan/gstack@benchmark -g",
"stars": 121291,
"repoUrl": "https://github.com/garrytan/gstack",
"aliases": [
"benchmark",
"garrytan",
"benchmark",
"skill",
"スキル"
]
},
{
"id": "skill-garrytan-gstack-benchmark-models",
"priority": 419,
"category": "community",
"type": "skill",
"want": "モデルごとの出来の差を比べたい",
"feature": "garrytan/gstack",
"summary": "gstack のスキル群を複数のモデルで動かし、モデルをまたいだベンチマークを取る。",
"trigger": "",
"commands": [
"npx skills add garrytan/gstack@benchmark-models -g"
],
"install": "npx skills add garrytan/gstack@benchmark-models -g",
"stars": 121291,
"repoUrl": "https://github.com/garrytan/gstack",
"aliases": [
"benchmark-models",
"garrytan",
"benchmark-models",
"skill",
"スキル"
]
},
{
"id": "skill-garrytan-gstack-browse",
"priority": 420,
"category": "community",
"type": "skill",
"want": "ヘッドレスブラウザでサイトを見たい",
"feature": "garrytan/gstack",
"summary": "ヘッドレスブラウザでサイトを開き、QAテストや自社サイトのドッグフーディングを行う。",
"trigger": "",
"commands": [
"npx skills add garrytan/gstack@browse -g"
],
"install": "npx skills add garrytan/gstack@browse -g",
"stars": 121291,
"repoUrl": "https://github.com/garrytan/gstack",
"aliases": [
"browse",
"garrytan",
"browse",
"skill",
"スキル"
]
},
{
"id": "skill-garrytan-gstack-canary",
"priority": 421,
"category": "community",
"type": "skill",
"want": "デプロイ直後の異常を早く掴みたい",
"feature": "garrytan/gstack",
"summary": "デプロイした直後のサービスをカナリア監視し、異常が出ていないかを見張る。",
"trigger": "",
"commands": [
"npx skills add garrytan/gstack@canary -g"
],
"install": "npx skills add garrytan/gstack@canary -g",
"stars": 121291,
"repoUrl": "https://github.com/garrytan/gstack",
"aliases": [
"canary",
"garrytan",
"canary",
"skill",
"スキル"
]
},
{
"id": "skill-garrytan-gstack-careful",
"priority": 422,
"category": "community",
"type": "skill",
"want": "危険なコマンドの誤爆を防ぎたい",
"feature": "garrytan/gstack",
"summary": "破壊的なコマンドにガードレールを設け、取り返しのつかない操作の前に歯止めをかける。",
"trigger": "",
"commands": [
"npx skills add garrytan/gstack@careful -g"
],
"install": "npx skills add garrytan/gstack@careful -g",
"stars": 121291,
"repoUrl": "https://github.com/garrytan/gstack",
"aliases": [
"careful",
"garrytan",
"careful",
"skill",
"スキル"
]
},
{
"id": "skill-garrytan-gstack-gstack",
"priority": 423,
"category": "community",
"type": "skill",
"want": "gstackのスキル群の入口を知りたい",
"feature": "garrytan/gstack",
"summary": "gstack のスキル群の入口になるルーター。用途に応じて該当のスキルへ振り分ける。",
"trigger": "",
"commands": [
"npx skills add garrytan/gstack@gstack -g"
],
"install": "npx skills add garrytan/gstack@gstack -g",
"stars": 121291,
"repoUrl": "https://github.com/garrytan/gstack",
"aliases": [
"gstack",
"garrytan",
"gstack",
"skill",
"スキル"
]
},
{
"id": "skill-garrytan-gstack-browser-skills-hackernews-frontpage",
"priority": 424,
"category": "community",
"type": "skill",
"want": "Hacker Newsのトップ記事を取ってきたい",
"feature": "garrytan/gstack",
"summary": "Hacker News のフロントページから、タイトル・ポイント数・コメント数を取得する。",
"trigger": "",
"commands": [
"npx skills add garrytan/gstack@hackernews-frontpage -g"
],
"install": "npx skills add garrytan/gstack@hackernews-frontpage -g",
"stars": 121291,
"repoUrl": "https://github.com/garrytan/gstack",
"aliases": [
"hackernews-frontpage",
"garrytan",
"hackernews-frontpage",
"skill",
"スキル"
]
},
{
"id": "skill-tldraw-tldraw-apps-mcp-app-.claude-skills-add-app-to-server",
"priority": 425,
"category": "community",
"type": "skill",
"want": "既存のMCPサーバーにUIを足したい",
"feature": "tldraw/tldraw",
"summary": "すでにツールを持つ MCP サーバーの中身を読み、MCP Apps の UI リソースを足す手順を示す。",
"trigger": "既存の MCP サーバーやツールに、対話できるUI (MCP Apps) を追加したいとき。",
"commands": [
"npx skills add tldraw/tldraw@add-app-to-server -g"
],
"install": "npx skills add tldraw/tldraw@add-app-to-server -g",
"stars": 48705,
"repoUrl": "https://github.com/tldraw/tldraw",
"aliases": [
"add-app-to-server",
"tldraw",
"add-app-to-server",
"skill",
"スキル"
]
},
{
"id": "skill-tldraw-tldraw-skills-clean-copy",
"priority": 426,
"category": "community",
"type": "skill",
"want": "コミット履歴をきれいに作り直したい",
"feature": "tldraw/tldraw",
"summary": "今のブランチの作業を新しいブランチで再現し、筋の通ったコミット履歴として組み直す。",
"trigger": "クリーンなコピーブランチを作る、コミット履歴をレビューしやすい形に作り直すとき。",
"commands": [
"npx skills add tldraw/tldraw@clean-copy -g"
],
"install": "npx skills add tldraw/tldraw@clean-copy -g",
"stars": 48705,
"repoUrl": "https://github.com/tldraw/tldraw",
"aliases": [
"clean-copy",
"tldraw",
"clean-copy",
"skill",
"スキル"
]
},
{
"id": "skill-tldraw-tldraw-skills-commit-changes",
"priority": 427,
"category": "community",
"type": "skill",
"want": "いまの変更をコミットしたい",
"feature": "tldraw/tldraw",
"summary": "現在の変更内容から git コミットを作る。ユーザーが足した文脈もメッセージに織り込む。",
"trigger": "変更をコミットする、コミットメッセージを作るとき。",
"commands": [
"npx skills add tldraw/tldraw@commit-changes -g"
],
"install": "npx skills add tldraw/tldraw@commit-changes -g",
"stars": 48705,
"repoUrl": "https://github.com/tldraw/tldraw",
"aliases": [
"commit-changes",
"tldraw",
"commit-changes",
"skill",
"スキル"
]
},
{
"id": "skill-tldraw-tldraw-apps-mcp-app-.claude-skills-convert-web-app",
"priority": 428,
"category": "community",
"type": "skill",
"want": "既存のWebアプリをMCP Appにも対応させたい",
"feature": "tldraw/tldraw",
"summary": "既存の Web アプリを単体で動かせるまま MCP App としても動く形にし、サーバー側の登録まで面倒を見る。",
"trigger": "既存の Web アプリや SPA、iframe 埋め込みを MCP App 対応にしたいとき。",
"commands": [
"npx skills add tldraw/tldraw@convert-web-app -g"
],
"install": "npx skills add tldraw/tldraw@convert-web-app -g",
"stars": 48705,
"repoUrl": "https://github.com/tldraw/tldraw",
"aliases": [
"convert-web-app",
"tldraw",
"convert-web-app",
"skill",
"スキル"
]
},
{
"id": "skill-tldraw-tldraw-apps-mcp-app-.claude-skills-create-mcp-app",
"priority": 429,
"category": "community",
"type": "skill",
"want": "UI付きのMCP Appを新しく作りたい",
"feature": "tldraw/tldraw",
"summary": "MCP Apps SDK の書き方に沿って、UIリソースの登録やホスト連携まで含めた MCP App を新規に組む。",
"trigger": "MCP App を新規に作る、MCP ツールにUIを付ける、MCP Apps のパターンを知りたいとき。",
"commands": [
"npx skills add tldraw/tldraw@create-mcp-app -g"
],
"install": "npx skills add tldraw/tldraw@create-mcp-app -g",
"stars": 48705,
"repoUrl": "https://github.com/tldraw/tldraw",
"aliases": [
"create-mcp-app",
"tldraw",
"create-mcp-app",
"skill",
"スキル"
]
},
{
"id": "skill-tldraw-tldraw-skills-dotcom-release-crew",
"priority": 430,
"category": "community",
"type": "skill",
"want": "tldraw の dotcom リリース告知を投稿したい",
"feature": "tldraw/tldraw",
"summary": "tldraw の dotcom リリースに関する投稿を行う。説明文が途中で切れており詳細は不明。",
"trigger": "",
"commands": [
"npx skills add tldraw/tldraw@dotcom-release-crew -g"
],
"install": "npx skills add tldraw/tldraw@dotcom-release-crew -g",
"stars": 48705,
"repoUrl": "https://github.com/tldraw/tldraw",
"aliases": [
"dotcom-release-crew",
"tldraw",
"dotcom-release-crew",
"skill",
"スキル"
]
},
{
"id": "skill-tldraw-tldraw-skills-issue",
"priority": 431,
"category": "community",
"type": "skill",
"want": "tldraw に GitHub issue を立てたい",
"feature": "tldraw/tldraw",
"summary": "ユーザーの説明から tldraw リポジトリに GitHub issue を作り、追加質問を重ねて中身を詰めていく。",
"trigger": "issue の作成、バグ報告、機能要望の提出を頼むとき。この Skill が作った issue への追加質問に答えるときも含む。",
"commands": [
"npx skills add tldraw/tldraw@issue -g"
],
"install": "npx skills add tldraw/tldraw@issue -g",
"stars": 48705,
"repoUrl": "https://github.com/tldraw/tldraw",
"aliases": [
"issue",
"tldraw",
"issue",
"skill",
"スキル"
]
},
{
"id": "skill-tldraw-tldraw-apps-mcp-app-.claude-skills-migrate-oai-app",
"priority": 432,
"category": "community",
"type": "skill",
"want": "OpenAI Apps SDK のアプリを MCP に移行したい",
"feature": "tldraw/tldraw",
"summary": "OpenAI Apps SDK で書かれたアプリを MCP Apps SDK へ移す手順を、API 対応表つきで段階的に示す。",
"trigger": "OpenAI Apps SDK からの移行、window.openai や skybridge、openai/outputTemplate からの置き換えを尋ねるとき。",
"commands": [
"npx skills add tldraw/tldraw@migrate-oai-app -g"
],
"install": "npx skills add tldraw/tldraw@migrate-oai-app -g",
"stars": 48705,
"repoUrl": "https://github.com/tldraw/tldraw",
"aliases": [
"migrate-oai-app",
"tldraw",
"migrate-oai-app",
"skill",
"スキル"
]
},
{
"id": "skill-alibaba-arthas-skills",
"priority": 433,
"category": "community",
"type": "skill",
"want": "Java アプリと JVM の不具合を診断したい",
"feature": "alibaba/arthas",
"summary": "Arthas を使い、稼働中の Java アプリケーションと JVM で起きている問題を切り分けて診断する。",
"trigger": "",
"commands": [
"npx skills add alibaba/arthas@skills -g"
],
"install": "npx skills add alibaba/arthas@skills -g",
"stars": 37427,
"repoUrl": "https://github.com/alibaba/arthas",
"aliases": [
"skills",
"alibaba",
"arthas",
"skill",
"スキル"
]
},
{
"id": "skill-alibaba-arthas-skills-cpu-high",
"priority": 434,
"category": "community",
"type": "skill",
"want": "JVM の CPU 使用率が跳ね上がった原因を突き止めたい",
"feature": "alibaba/arthas",
"summary": "CPU 使用率が急上昇した JVM / アプリケーションを、スレッドの特定とコードパスの分析でたどる。",
"trigger": "",
"commands": [
"npx skills add alibaba/arthas@cpu-high -g"
],
"install": "npx skills add alibaba/arthas@cpu-high -g",
"stars": 37427,
"repoUrl": "https://github.com/alibaba/arthas",
"aliases": [
"cpu-high",
"alibaba",
"arthas-cpu-high",
"skill",
"スキル"
]
},
{
"id": "skill-alibaba-arthas-skills-eagleeye-traceid",
"priority": 435,
"category": "community",
"type": "skill",
"want": "リクエストの traceId を取り出したい",
"feature": "alibaba/arthas",
"summary": "Arthas の watch / trace を使い、EagleEye の traceId やリクエストの traceId を取得する。",
"trigger": "",
"commands": [
"npx skills add alibaba/arthas@eagleeye-traceid -g"
],
"install": "npx skills add alibaba/arthas@eagleeye-traceid -g",
"stars": 37427,
"repoUrl": "https://github.com/alibaba/arthas",
"aliases": [
"eagleeye-traceid",
"alibaba",
"arthas-eagleeye-traceid",
"skill",
"スキル"
]
},
{
"id": "skill-alibaba-arthas-skills-spring-context",
"priority": 436,
"category": "community",
"type": "skill",
"want": "Spring の Bean や設定注入の不具合を調べたい",
"feature": "alibaba/arthas",
"summary": "Spring の ApplicationContext、Bean、設定注入まわりで起きている問題を調査する。",
"trigger": "",
"commands": [
"npx skills add alibaba/arthas@spring-context -g"
],
"install": "npx skills add alibaba/arthas@spring-context -g",
"stars": 37427,
"repoUrl": "https://github.com/alibaba/arthas",
"aliases": [
"spring-context",
"alibaba",
"arthas-springcontext-issues-resolve",
"skill",
"スキル"
]
},
{
"id": "skill-abiosoft-colima-skills",
"priority": 437,
"category": "community",
"type": "skill",
"want": "macOS や Linux で Colima を使ってコンテナを動かしたい",
"feature": "abiosoft/colima",
"summary": "軽量な Lima VM 上で Docker・containerd・Kubernetes・Incus を動かす Colima の使い方をまとめる。",
"trigger": "Colima のインストールや start/stop、ランタイム切り替え、docker.sock に繋がらないエラー、レジストリミラー、マウント、ディスク容量、Colima を起動するスクリプトを書くとき。",
"commands": [
"npx skills add abiosoft/colima -g"
],
"install": "npx skills add abiosoft/colima -g",
"stars": 29865,
"repoUrl": "https://github.com/abiosoft/colima",
"aliases": [
"skills",
"abiosoft",
"colima",
"skill",
"スキル"
]
},
{
"id": "skill-vercel-labs-agent-skills-skills-deploy-to-vercel",
"priority": 438,
"category": "community",
"type": "skill",
"want": "アプリを Vercel にデプロイしたい",
"feature": "vercel-labs/agent-skills",
"summary": "アプリケーションや Web サイトを Vercel にデプロイし、公開 URL やプレビュー環境を用意する。",
"trigger": "「デプロイして」「リンクをちょうだい」「本番に出して」「プレビューを作って」と頼むとき。",
"commands": [
"npx skills add vercel-labs/agent-skills@deploy-to-vercel -g"
],
"install": "npx skills add vercel-labs/agent-skills@deploy-to-vercel -g",
"stars": 28950,
"repoUrl": "https://github.com/vercel-labs/agent-skills",
"aliases": [
"deploy-to-vercel",
"vercel-labs",
"deploy-to-vercel",
"skill",
"スキル"
]
},
{
"id": "skill-vercel-labs-agent-skills-skills-vercel-cli-with-tokens",
"priority": 439,
"category": "community",
"type": "skill",
"want": "アクセストークンで Vercel CLI を動かしたい",
"feature": "vercel-labs/agent-skills",
"summary": "対話ログインではなくアクセストークン認証で、Vercel へのデプロイやプロジェクト管理を行う。",
"trigger": "トークンを使って Vercel にデプロイする、セットアップする、環境変数を追加するとき。",
"commands": [
"npx skills add vercel-labs/agent-skills@vercel-cli-with-tokens -g"
],
"install": "npx skills add vercel-labs/agent-skills@vercel-cli-with-tokens -g",
"stars": 28950,
"repoUrl": "https://github.com/vercel-labs/agent-skills",
"aliases": [
"vercel-cli-with-tokens",
"vercel-labs",
"vercel-cli-with-tokens",
"skill",
"スキル"
]
},
{
"id": "skill-vercel-labs-agent-skills-skills-composition-patterns",
"priority": 440,
"category": "community",
"type": "skill",
"want": "React コンポーネントの合成パターンを整理したい",
"feature": "vercel-labs/agent-skills",
"summary": "compound components や render props、context provider を使い、増えすぎた boolean props を組み直す。React 19 の API 変更も扱う。",
"trigger": "boolean props が膨らんだコンポーネントのリファクタ、コンポーネントライブラリや再利用 API の設計をするとき。",
"commands": [
"npx skills add vercel-labs/agent-skills@composition-patterns -g"
],
"install": "npx skills add vercel-labs/agent-skills@composition-patterns -g",
"stars": 28950,
"repoUrl": "https://github.com/vercel-labs/agent-skills",
"aliases": [
"composition-patterns",
"vercel-labs",
"vercel-composition-patterns",
"skill",
"スキル"
]
},
{
"id": "skill-vercel-labs-agent-skills-skills-vercel-optimize",
"priority": 441,
"category": "community",
"type": "skill",
"want": "Vercel の請求額と遅いルートを見直したい",
"feature": "vercel-labs/agent-skills",
"summary": "Vercel のメトリクス・使用量・設定・コードを先に集め、数値の裏付けがある候補だけを調べて改善案を順位づけする。",
"trigger": "Vercel の請求削減、遅い/高コストなルート、キャッシュ、Function Invocations、Build Minutes、Core Web Vitals、コスト内訳を調べるとき。",
"commands": [
"npx skills add vercel-labs/agent-skills@vercel-optimize -g"
],
"install": "npx skills add vercel-labs/agent-skills@vercel-optimize -g",
"stars": 28950,
"repoUrl": "https://github.com/vercel-labs/agent-skills",
"aliases": [
"vercel-optimize",
"vercel-labs",
"vercel-optimize",
"skill",
"スキル"
]
},
{
"id": "skill-vercel-labs-agent-skills-skills-react-best-practices",
"priority": 442,
"category": "community",
"type": "skill",
"want": "React / Next.js の性能面の書き方を押さえたい",
"feature": "vercel-labs/agent-skills",
"summary": "Vercel エンジニアリングによる React / Next.js の性能指針に沿って、コードを書き・レビューし・直す。",
"trigger": "React コンポーネント、Next.js のページ、データ取得、バンドルまわりを書く・レビューする・リファクタするとき。",
"commands": [
"npx skills add vercel-labs/agent-skills@react-best-practices -g"
],
"install": "npx skills add vercel-labs/agent-skills@react-best-practices -g",
"stars": 28950,
"repoUrl": "https://github.com/vercel-labs/agent-skills",
"aliases": [
"react-best-practices",
"vercel-labs",
"vercel-react-best-practices",
"skill",
"スキル"
]
},
{
"id": "skill-vercel-labs-agent-skills-skills-react-native-skills",
"priority": 443,
"category": "community",
"type": "skill",
"want": "React Native / Expo でモバイルアプリを作りたい",
"feature": "vercel-labs/agent-skills",
"summary": "React Native と Expo でよく動くモバイルアプリを組むための書き方をまとめる。",
"trigger": "React Native のコンポーネント作成、リスト表示の改善、アニメーション実装、ネイティブモジュールを扱うとき。",
"commands": [
"npx skills add vercel-labs/agent-skills@react-native-skills -g"
],
"install": "npx skills add vercel-labs/agent-skills@react-native-skills -g",
"stars": 28950,
"repoUrl": "https://github.com/vercel-labs/agent-skills",
"aliases": [
"react-native-skills",
"vercel-labs",
"vercel-react-native-skills",
"skill",
"スキル"
]
},
{
"id": "skill-vercel-labs-agent-skills-skills-react-view-transitions",
"priority": 444,
"category": "community",
"type": "skill",
"want": "React で画面遷移のアニメーションを入れたい",
"feature": "vercel-labs/agent-skills",
"summary": "React の View Transition API を使い、ページ遷移・共有要素・リスト並び替えの動きを外部ライブラリなしで作る。",
"trigger": "ページ遷移やルート変更、コンポーネントの出入り、前後方向のナビゲーションを animate したいとき。startViewTransition や ViewTransition について尋ねるときも。",
"commands": [
"npx skills add vercel-labs/agent-skills@react-view-transitions -g"
],
"install": "npx skills add vercel-labs/agent-skills@react-view-transitions -g",
"stars": 28950,
"repoUrl": "https://github.com/vercel-labs/agent-skills",
"aliases": [
"react-view-transitions",
"vercel-labs",
"vercel-react-view-transitions",
"skill",
"スキル"
]
},
{
"id": "skill-vercel-labs-agent-skills-skills-web-design-guidelines",
"priority": 445,
"category": "community",
"type": "skill",
"want": "UI コードをガイドラインに照らして点検したい",
"feature": "vercel-labs/agent-skills",
"summary": "UI のコードを Web Interface Guidelines に照らし、アクセシビリティや UX の観点でレビューする。",
"trigger": "「UI をレビューして」「アクセシビリティを確認して」「デザインを監査して」と頼むとき。",
"commands": [
"npx skills add vercel-labs/agent-skills@web-design-guidelines -g"
],
"install": "npx skills add vercel-labs/agent-skills@web-design-guidelines -g",
"stars": 28950,
"repoUrl": "https://github.com/vercel-labs/agent-skills",
"aliases": [
"web-design-guidelines",
"vercel-labs",
"web-design-guidelines",
"skill",
"スキル"
]
},
{
"id": "skill-vercel-labs-agent-skills-skills-writing-guidelines",
"priority": 446,
"category": "community",
"type": "skill",
"want": "ドキュメントの文体をチェックしたい",
"feature": "vercel-labs/agent-skills",
"summary": "ドキュメントや文章を Writing Guidelines に照らし、文体・声・トーンの観点でレビューする。",
"trigger": "「ドキュメントをレビューして」「文体を確認して」「このページを執筆ハンドブックに照らして」と頼むとき。",
"commands": [
"npx skills add vercel-labs/agent-skills@writing-guidelines -g"
],
"install": "npx skills add vercel-labs/agent-skills@writing-guidelines -g",
"stars": 28950,
"repoUrl": "https://github.com/vercel-labs/agent-skills",
"aliases": [
"writing-guidelines",
"vercel-labs",
"writing-guidelines",
"skill",
"スキル"
]
},
{
"id": "skill-karakeep-app-karakeep-skills",
"priority": 447,
"category": "community",
"type": "skill",
"want": "ブックマーク管理の karakeep を操作したい",
"feature": "karakeep-app/karakeep",
"summary": "ブックマーク管理ツール karakeep の使い方と、プログラムから操作する方法を示す公式 Skill。",
"trigger": "",
"commands": [
"npx skills add karakeep-app/karakeep -g"
],
"install": "npx skills add karakeep-app/karakeep -g",
"stars": 27314,
"repoUrl": "https://github.com/karakeep-app/karakeep",
"aliases": [
"skills",
"karakeep-app",
"karakeep",
"skill",
"スキル"
]
},
{
"id": "skill-op7418-guizang-ppt-skill-guizang-ppt-skill",
"priority": 448,
"category": "community",
"type": "skill",
"want": "横めくりの HTML スライドを作りたい",
"feature": "op7418/guizang-ppt-skill",
"summary": "WebGL 背景・章扉・数字の大見出し・画像グリッドを備えた単一 HTML の横めくり PPT を作る。電子雑誌風とスイス国際主義の2スタイル。",
"trigger": "共有や講演、発表会向けの Web PPT を作るとき。「雑誌風 PPT」「スイス風 PPT」「Swiss Style」「horizontal swipe deck」に言及したとき。",
"commands": [
"npx skills add op7418/guizang-ppt-skill -g"
],
"install": "npx skills add op7418/guizang-ppt-skill -g",
"stars": 21000,
"repoUrl": "https://github.com/op7418/guizang-ppt-skill",
"aliases": [
"guizang-ppt-skill",
"op7418",
"guizang-ppt-skill",
"skill",
"スキル"
]
},
{
"id": "skill-titanwings-colleague-skill-colleague-skill",
"priority": 449,
"category": "community",
"type": "skill",
"want": "同僚や有名人のキャラクターを Skill 化したい",
"feature": "titanwings/colleague-skill",
"summary": "同僚・関係性・著名人という3種の人物像を蒸留し、再利用できる Skill に落とし込む meta-skill エンジン。",
"trigger": "",
"commands": [
"npx skills add titanwings/colleague-skill -g"
],
"install": "npx skills add titanwings/colleague-skill -g",
"stars": 20212,
"repoUrl": "https://github.com/titanwings/colleague-skill",
"aliases": [
"colleague-skill",
"titanwings",
"dot-skill",
"skill",
"スキル"
]
},
{
"id": "skill-tanweai-pua-.trae-skills-pua",
"priority": 450,
"category": "community",
"type": "skill",
"want": "AI に諦めさせず手を尽くさせたい",
"feature": "tanweai/pua",
"summary": "Trae 対応の PUA スキル。AI に諦めや未検証の完了報告を許さず、自分から動くよう仕向ける。",
"trigger": "明示的な PUA 依頼、失敗の繰り返し、ユーザーの不満、諦め・受け身の態度、未検証の完了報告があるとき。初回の試行では発動しない。",
"commands": [
"npx skills add tanweai/pua@pua -g"
],
"install": "npx skills add tanweai/pua@pua -g",
"stars": 18764,
"repoUrl": "https://github.com/tanweai/pua",
"aliases": [
"pua",
"tanweai",
"pua",
"skill",
"スキル"
]
},
{
"id": "skill-tanweai-pua-codebuddy-pua",
"priority": 451,
"category": "community",
"type": "skill",
"want": "AI に手を抜かせず全ての案を試させたい",
"feature": "tanweai/pua",
"summary": "大手企業の詰め話術で、AI が諦めたり手動対応を勧めたりせず、あらゆる手段を尽くすよう仕向ける。",
"trigger": "同じ方針で2回以上失敗、「解決できません」と言いかける、検索も調査もせず指示待ちになる、「もっと頑張れ」「なぜまだできない」と言われたとき。",
"commands": [
"npx skills add tanweai/pua@pua -g"
],
"install": "npx skills add tanweai/pua@pua -g",
"stars": 18764,
"repoUrl": "https://github.com/tanweai/pua",
"aliases": [
"pua",
"tanweai",
"pua",
"skill",
"スキル"
]
},
{
"id": "skill-tanweai-pua-codex-pua-cancel-loop",
"priority": 452,
"category": "community",
"type": "skill",
"want": "Codex で PUA のループを止めたい",
"feature": "tanweai/pua",
"summary": "Claude Code の /pua:cancel-loop に相当する Codex 用のエイリアス。$pua-cancel-loop で呼び出す。",
"trigger": "",
"commands": [
"npx skills add tanweai/pua@pua-cancel-loop -g"
],
"install": "npx skills add tanweai/pua@pua-cancel-loop -g",
"stars": 18764,
"repoUrl": "https://github.com/tanweai/pua",
"aliases": [
"pua-cancel-loop",
"tanweai",
"pua-cancel-loop",
"skill",
"スキル"
]
},
{
"id": "skill-tanweai-pua-.trae-skills-pua-en",
"priority": 453,
"category": "community",
"type": "skill",
"want": "英語版の PUA / PIP で AI を追い込みたい",
"feature": "tanweai/pua",
"summary": "Trae 対応の英語版 PUA / PIP スキル。諦め・受け身・未検証の完了報告を許さない振る舞いを課す。",
"trigger": "明示的な PUA / PIP 依頼、失敗の繰り返し、ユーザーの不満、受け身や諦めの態度、未検証の完了報告があるとき。初回の試行では発動しない。",
"commands": [
"npx skills add tanweai/pua@pua-en -g"
],
"install": "npx skills add tanweai/pua@pua-en -g",
"stars": 18764,
"repoUrl": "https://github.com/tanweai/pua",
"aliases": [
"pua-en",
"tanweai",
"pua-en",
"skill",
"スキル"
]
},
{
"id": "skill-tanweai-pua-codebuddy-pua-en",
"priority": 454,
"category": "community",
"type": "skill",
"want": "AI を PIP にかけて問題を解き切らせたい",
"feature": "tanweai/pua",
"summary": "欧米大手企業の業績評価文化のレトリックと構造化デバッグで、AI に徹底した問題解決をさせる。",
"trigger": "2回以上失敗、「できません」と言いかける、未検証で環境のせいにする、受け身になる、「try harder」等の不満が出たとき。初回失敗時は発動しない。",
"commands": [
"npx skills add tanweai/pua@pua-en -g"
],
"install": "npx skills add tanweai/pua@pua-en -g",
"stars": 18764,
"repoUrl": "https://github.com/tanweai/pua",
"aliases": [
"pua-en",
"tanweai",
"pua-en",
"skill",
"スキル"
]
},
{
"id": "skill-tanweai-pua-codex-pua-en",
"priority": 455,
"category": "community",
"type": "skill",
"want": "Codex でも AI を PIP にかけて粘らせたい",
"feature": "tanweai/pua",
"summary": "欧米大手企業の業績評価文化のレトリックと構造化デバッグで、AI に徹底した問題解決をさせる。",
"trigger": "2回以上失敗、「できません」と言いかける、未検証で環境のせいにする、受け身になる、「try harder」等の不満が出たとき。コード・設定・調査・デプロイなど全タスクに適用。",
"commands": [
"npx skills add tanweai/pua@pua-en -g"
],
"install": "npx skills add tanweai/pua@pua-en -g",
"stars": 18764,
"repoUrl": "https://github.com/tanweai/pua",
"aliases": [
"pua-en",
"tanweai",
"pua-en",
"skill",
"スキル"
]
},
{
"id": "skill-tanweai-pua-codebuddy-pua-ja",
"priority": 456,
"category": "community",
"type": "skill",
"want": "AI を詰めて最後までやり切らせたい",
"feature": "tanweai/pua",
"summary": "日本企業の詰め文化と体系的なデバッグ方法論で、AI にあらゆる手段を尽くさせる。",
"trigger": "同じアプローチで2回以上失敗、「解決できません」と言いかける、検索もソース読みもしない指示待ち、「もっと頑張れ」等の不満が出たとき。初回失敗時は発動しない。",
"commands": [
"npx skills add tanweai/pua@pua-ja -g"
],
"install": "npx skills add tanweai/pua@pua-ja -g",
"stars": 18764,
"repoUrl": "https://github.com/tanweai/pua",
"aliases": [
"pua-ja",
"tanweai",
"pua-ja",
"skill",
"スキル"
]
},
{
"id": "skill-tanweai-pua-.trae-skills-pua-trae",
"priority": 457,
"category": "community",
"type": "skill",
"want": "npx skills で入れた Trae 版 PUA を使いたい",
"feature": "tanweai/pua",
"summary": "npx skills でのインストール向けに Trae 向け調整した PUA スキル。諦めや未検証の完了を許さない。",
"trigger": "明示的な PUA 依頼、失敗の繰り返し、ユーザーの不満、諦め・受け身の態度、未検証の完了報告があるとき。初回の試行では発動しない。",
"commands": [
"npx skills add tanweai/pua@pua-trae -g"
],
"install": "npx skills add tanweai/pua@pua-trae -g",
"stars": 18764,
"repoUrl": "https://github.com/tanweai/pua",
"aliases": [
"pua-trae",
"tanweai",
"pua-trae",
"skill",
"スキル"
]
},
{
"id": "skill-weifeng2333-videocaptioner-skills",
"priority": 458,
"category": "community",
"type": "skill",
"want": "動画に字幕を付けたい",
"feature": "WEIFENG2333/VideoCaptioner",
"summary": "音声を文字起こしし、字幕の推敲や翻訳を行い、スタイルを当てた字幕を動画に焼き込む。",
"trigger": "動画への字幕追加、音声の文字起こし、字幕の翻訳、字幕スタイルの調整をするとき。",
"commands": [
"npx skills add WEIFENG2333/VideoCaptioner -g"
],
"install": "npx skills add WEIFENG2333/VideoCaptioner -g",
"stars": 15295,
"repoUrl": "https://github.com/WEIFENG2333/VideoCaptioner",
"aliases": [
"skills",
"WEIFENG2333",
"videocaptioner",
"skill",
"スキル"
]
},
{
"id": "skill-crazyguitar-pysheeet-skills-py",
"priority": 459,
"category": "community",
"type": "skill",
"want": "Python の書き方をまとめて引きたい",
"feature": "crazyguitar/pysheeet",
"summary": "構文・並行処理・ネットワーク・データベース・ML/LLM・HPC までを網羅した Python のリファレンス。",
"trigger": "Python の疑問、面接対策、デバッグ、async パターン、ライブラリの用例、コードレビュー、MLOps や分散処理など Python の作業全般。",
"commands": [
"npx skills add crazyguitar/pysheeet@py -g"
],
"install": "npx skills add crazyguitar/pysheeet@py -g",
"stars": 8149,
"repoUrl": "https://github.com/crazyguitar/pysheeet",
"aliases": [
"py",
"crazyguitar",
"py",
"skill",
"スキル"
]
},
{
"id": "skill-crazyguitar-pysheeet-skills-readable-py",
"priority": 460,
"category": "community",
"type": "skill",
"want": "読みやすいPythonコードを書きたい",
"feature": "crazyguitar/pysheeet",
"summary": "『リーダブルコード』に着想を得て、短い関数・浅い制御フロー・明快な命名・Pythonらしいイディオムを守らせる。",
"trigger": "Pythonコードを書く・レビューする・リファクタリングするとき。",
"commands": [
"npx skills add crazyguitar/pysheeet@readable-py -g"
],
"install": "npx skills add crazyguitar/pysheeet@readable-py -g",
"stars": 8149,
"repoUrl": "https://github.com/crazyguitar/pysheeet",
"aliases": [
"readable-py",
"crazyguitar",
"readable-py",
"skill",
"スキル"
]
},
{
"id": "skill-zhaoxuya520-reverse-skill-ctf-sandbox-orchestrator-competition-ad-certificate-abuse",
"priority": 461,
"category": "community",
"type": "skill",
"want": "AD CSの証明書を悪用する攻撃経路を調べたい",
"feature": "zhaoxuya520/reverse-skill",
"summary": "AD CSの証明書テンプレート・登録権限・EKU・SAN制御・PKINITから、証明書ベースの権限奪取経路をたどる。",
"trigger": "ESC系の悪用、証明書テンプレート、登録エージェント、EKU、SAN/subject制御、スマートカードやPKINITログオン、CAポリシーについて聞かれたとき。ctf-sandbox-orchestrator経由で振り分けられた後に使う。",
"commands": [
"npx skills add zhaoxuya520/reverse-skill@competition-ad-certificate-abuse -g"
],
"install": "npx skills add zhaoxuya520/reverse-skill@competition-ad-certificate-abuse -g",
"stars": 8112,
"repoUrl": "https://github.com/zhaoxuya520/reverse-skill",
"aliases": [
"competition-ad-certificate-abuse",
"zhaoxuya520",
"competition-ad-certificate-abuse",
"skill",
"スキル"
]
},
{
"id": "skill-zhaoxuya520-reverse-skill-ctf-sandbox-orchestrator-competition-agent-cloud",
"priority": 462,
"category": "community",
"type": "skill",
"want": "AIエージェントやサプライチェーンの弱点を調べたい",
"feature": "zhaoxuya520/reverse-skill",
"summary": "AIエージェント・プロンプトインジェクション・MCP・クラウド・コンテナ・CI/CD・サプライチェーン系の課題を扱う。",
"trigger": "プロンプトからツールへの流れ、retrieval poisoning、マウントされた秘密情報、デプロイのずれ、レジストリの出所、CI生成物などをサンドボックス前提で分析するとき。orchestrator経由で振り分けられた後に使う。",
"commands": [
"npx skills add zhaoxuya520/reverse-skill@competition-agent-cloud -g"
],
"install": "npx skills add zhaoxuya520/reverse-skill@competition-agent-cloud -g",
"stars": 8112,
"repoUrl": "https://github.com/zhaoxuya520/reverse-skill",
"aliases": [
"competition-agent-cloud",
"zhaoxuya520",
"competition-agent-cloud",
"skill",
"スキル"
]
},
{
"id": "skill-zhaoxuya520-reverse-skill-ctf-sandbox-orchestrator-competition-android-hooking",
"priority": 463,
"category": "community",
"type": "skill",
"want": "AndroidアプリをFridaでフックして解析したい",
"feature": "zhaoxuya520/reverse-skill",
"summary": "Android APKのフック、Fridaトレース、SSLピンニング回避、JNI境界の検査、アプリの信頼境界分析を行う。",
"trigger": "APKのフック、署名ロジックの調査、Java/ネイティブ境界のトレース、ピンニングやroot検知の回避、モバイルリクエストの再送をするとき。orchestrator経由で振り分けられた後に使う。",
"commands": [
"npx skills add zhaoxuya520/reverse-skill@competition-android-hooking -g"
],
"install": "npx skills add zhaoxuya520/reverse-skill@competition-android-hooking -g",
"stars": 8112,
"repoUrl": "https://github.com/zhaoxuya520/reverse-skill",
"aliases": [
"competition-android-hooking",
"zhaoxuya520",
"competition-android-hooking",
"skill",
"スキル"
]
},
{
"id": "skill-zhaoxuya520-reverse-skill-ctf-sandbox-orchestrator-competition-browser-persistence",
"priority": 464,
"category": "community",
"type": "skill",
"want": "ブラウザに保存されたセッション状態を調べたい",
"feature": "zhaoxuya520/reverse-skill",
"summary": "cookie・localStorage・IndexedDB・service workerなど、クライアント側に保存されたセッション状態を調べる。",
"trigger": "ブラウザの状態を調べる、キャッシュされた認証やセッションを再現する、読み込み後にページ挙動が変わる理由を説明するとき。orchestrator経由で振り分けられた後に使う。",
"commands": [
"npx skills add zhaoxuya520/reverse-skill@competition-browser-persistence -g"
],
"install": "npx skills add zhaoxuya520/reverse-skill@competition-browser-persistence -g",
"stars": 8112,
"repoUrl": "https://github.com/zhaoxuya520/reverse-skill",
"aliases": [
"competition-browser-persistence",
"zhaoxuya520",
"competition-browser-persistence",
"skill",
"スキル"
]
},
{
"id": "skill-zhaoxuya520-reverse-skill-ctf-sandbox-orchestrator-competition-bundle-sourcemap-recovery",
"priority": 465,
"category": "community",
"type": "skill",
"want": "ビルド済みJSからソースの構造を復元したい",
"feature": "zhaoxuya520/reverse-skill",
"summary": "source map・ビルドマニフェスト・チャンク・難読化ローダーから、配信JavaScriptの構造やフロントの挙動を復元する。",
"trigger": "配信JSの構造再構成、source mapやチャンクマップの調査、バンドル読み込みの追跡、生成物から隠れたルートやAPIを復元するとき。orchestrator経由で振り分けられた後に使う。",
"commands": [
"npx skills add zhaoxuya520/reverse-skill@competition-bundle-sourcemap-recovery -g"
],
"install": "npx skills add zhaoxuya520/reverse-skill@competition-bundle-sourcemap-recovery -g",
"stars": 8112,
"repoUrl": "https://github.com/zhaoxuya520/reverse-skill",
"aliases": [
"competition-bundle-sourcemap-recovery",
"zhaoxuya520",
"competition-bundle-sourcemap-recovery",
"skill",
"スキル"
]
},
{
"id": "skill-zhaoxuya520-reverse-skill-ctf-sandbox-orchestrator-competition-cloud-metadata-path",
"priority": 466,
"category": "community",
"type": "skill",
"want": "クラウドのメタデータから権限昇格経路を調べたい",
"feature": "zhaoxuya520/reverse-skill",
"summary": "クラウドのメタデータサービス・インスタンス/ワークロードID・link-local認証情報経路から、権限昇格の信頼エッジをたどる。",
"trigger": "メタデータサービスへのアクセス、インスタンス認証情報、SSRFからメタデータへの昇格、メタデータ由来の認証情報が権限に変わる仕組みを調べるとき。orchestrator経由で振り分けられた後に使う。",
"commands": [
"npx skills add zhaoxuya520/reverse-skill@competition-cloud-metadata-path -g"
],
"install": "npx skills add zhaoxuya520/reverse-skill@competition-cloud-metadata-path -g",
"stars": 8112,
"repoUrl": "https://github.com/zhaoxuya520/reverse-skill",
"aliases": [
"competition-cloud-metadata-path",
"zhaoxuya520",
"competition-cloud-metadata-path",
"skill",
"スキル"
]
},
{
"id": "skill-zhaoxuya520-reverse-skill-ctf-sandbox-orchestrator-competition-container-runtime",
"priority": 467,
"category": "community",
"type": "skill",
"want": "稼働中コンテナの実行時状態を調べたい",
"feature": "zhaoxuya520/reverse-skill",
"summary": "稼働中コンテナの実行時状態を解析し、マウントされた秘密情報・サイドカー・namespace・entrypointのずれを調べる。",
"trigger": "稼働コンテナがマニフェストと異なる理由、マウントされた秘密がどこで使われるか、どのルートがどのコンテナに解決されるかを調べるとき。orchestrator経由で振り分けられた後に使う。",
"commands": [
"npx skills add zhaoxuya520/reverse-skill@competition-container-runtime -g"
],
"install": "npx skills add zhaoxuya520/reverse-skill@competition-container-runtime -g",
"stars": 8112,
"repoUrl": "https://github.com/zhaoxuya520/reverse-skill",
"aliases": [
"competition-container-runtime",
"zhaoxuya520",
"competition-container-runtime",
"skill",
"スキル"
]
},
{
"id": "skill-zhaoxuya520-reverse-skill-ctf-sandbox-orchestrator-competition-crypto-mobile",
"priority": 468,
"category": "community",
"type": "skill",
"want": "暗号やステガノグラフィのデータを解読したい",
"feature": "zhaoxuya520/reverse-skill",
"summary": "暗号・エンコード・ステガノグラフィやAPK/IPAなどモバイルの信頼境界課題を扱い、変換や鍵の復元、隠しデータの調査を行う。",
"trigger": "blobのデコード、変換チェーンや鍵の復元、隠しメディアの調査、APK/IPA署名のフック、モバイルの署名ロジック再現をするとき。orchestrator経由で振り分けられた後に使う。",
"commands": [
"npx skills add zhaoxuya520/reverse-skill@competition-crypto-mobile -g"
],
"install": "npx skills add zhaoxuya520/reverse-skill@competition-crypto-mobile -g",
"stars": 8112,
"repoUrl": "https://github.com/zhaoxuya520/reverse-skill",
"aliases": [
"competition-crypto-mobile",
"zhaoxuya520",
"competition-crypto-mobile",
"skill",
"スキル"
]
},
{
"id": "skill-kaggle-kaggle-cli-skills",
"priority": 469,
"category": "community",
"type": "skill",
"want": "Kaggle CLIのコマンドや使い方を知りたい",
"feature": "Kaggle/kaggle-cli",
"summary": "Kaggle CLIのコマンド・ワークフロー・トラブル対処を、コンペ・データセット・カーネル・モデル・認証など横断で案内する。",
"trigger": "kaggle CLIのコマンド、例、フラグ、メタデータファイル、ダウンロード/アップロード、提出、ベンチマークについて聞かれたとき。",
"commands": [
"npx skills add Kaggle/kaggle-cli -g"
],
"install": "npx skills add Kaggle/kaggle-cli -g",
"stars": 7450,
"repoUrl": "https://github.com/Kaggle/kaggle-cli",
"aliases": [
"skills",
"Kaggle",
"kaggle-cli",
"skill",
"スキル"
]
},
{
"id": "skill-feast-dev-feast-.claude-skills-feast-architecture",
"priority": 470,
"category": "community",
"type": "skill",
"want": "Feast（AI/ML向け特徴量ストア）を使いたい",
"feature": "feast-dev/feast",
"summary": "AI/ML向けのオープンソース特徴量ストア Feast。",
"trigger": "",
"commands": [
"npx skills add feast-dev/feast@feast-architecture -g"
],
"install": "npx skills add feast-dev/feast@feast-architecture -g",
"stars": 7128,
"repoUrl": "https://github.com/feast-dev/feast",
"aliases": [
"feast-architecture",
"feast-dev",
"feast-architecture",
"skill",
"スキル"
]
},
{
"id": "skill-feast-dev-feast-skills-feast-architecture",
"priority": 471,
"category": "community",
"type": "skill",
"want": "Feastの内部構造やデータの流れを知りたい",
"feature": "feast-dev/feast",
"summary": "Feastコードベースの内部構造を解説する。各コンポーネントの動作、主要な抽象の場所、システム内のデータの流れを扱う。",
"trigger": "feast applyの仕組み、レジストリのデータ保存、マテリアライズ、get_online_featuresの取得、フィーチャーサーバーやKubernetes operatorの動きを知りたいとき。",
"commands": [
"npx skills add feast-dev/feast@feast-architecture -g"
],
"install": "npx skills add feast-dev/feast@feast-architecture -g",
"stars": 7128,
"repoUrl": "https://github.com/feast-dev/feast",
"aliases": [
"feast-architecture",
"feast-dev",
"feast-architecture",
"skill",
"スキル"
]
},
{
"id": "skill-feast-dev-feast-.claude-skills-feast-dev",
"priority": 472,
"category": "community",
"type": "skill",
"want": "Feast（AI/ML向け特徴量ストア）を使いたい",
"feature": "feast-dev/feast",
"summary": "AI/ML向けのオープンソース特徴量ストア Feast。",
"trigger": "",
"commands": [
"npx skills add feast-dev/feast@feast-dev -g"
],
"install": "npx skills add feast-dev/feast@feast-dev -g",
"stars": 7128,
"repoUrl": "https://github.com/feast-dev/feast",
"aliases": [
"feast-dev",
"feast-dev",
"feast-dev",
"skill",
"スキル"
]
},
{
"id": "skill-feast-dev-feast-skills-feast-dev",
"priority": 473,
"category": "community",
"type": "skill",
"want": "Feastの開発に貢献したい",
"feature": "feast-dev/feast",
"summary": "Feastコードベースへの貢献ガイド。環境構築・テスト・lint・プロジェクト構成・PRワークフローを扱う。",
"trigger": "",
"commands": [
"npx skills add feast-dev/feast@feast-dev -g"
],
"install": "npx skills add feast-dev/feast@feast-dev -g",
"stars": 7128,
"repoUrl": "https://github.com/feast-dev/feast",
"aliases": [
"feast-dev",
"feast-dev",
"feast-dev",
"skill",
"スキル"
]
},
{
"id": "skill-feast-dev-feast-.claude-skills-feast-testing",
"priority": 474,
"category": "community",
"type": "skill",
"want": "Feast（AI/ML向け特徴量ストア）を使いたい",
"feature": "feast-dev/feast",
"summary": "AI/ML向けのオープンソース特徴量ストア Feast。",
"trigger": "",
"commands": [
"npx skills add feast-dev/feast@feast-testing -g"
],
"install": "npx skills add feast-dev/feast@feast-testing -g",
"stars": 7128,
"repoUrl": "https://github.com/feast-dev/feast",
"aliases": [
"feast-testing",
"feast-dev",
"feast-testing",
"skill",
"スキル"
]
},
{
"id": "skill-feast-dev-feast-skills-feast-testing",
"priority": 475,
"category": "community",
"type": "skill",
"want": "Feastをテスト・デバッグしたい",
"feature": "feast-dev/feast",
"summary": "Feastのテストとデバッグ方法。対象を絞ったテスト実行、新コンポーネントの単体テスト、レジストリやオンラインストアの調査を扱う。",
"trigger": "新機能のテストを書く、失敗するテストのデバッグ、実行時エラーの調査、変更が正しく動くかの検証をするとき。",
"commands": [
"npx skills add feast-dev/feast@feast-testing -g"
],
"install": "npx skills add feast-dev/feast@feast-testing -g",
"stars": 7128,
"repoUrl": "https://github.com/feast-dev/feast",
"aliases": [
"feast-testing",
"feast-dev",
"feast-testing",
"skill",
"スキル"
]
},
{
"id": "skill-feast-dev-feast-.claude-skills-feast-user-guide",
"priority": 476,
"category": "community",
"type": "skill",
"want": "Feast（AI/ML向け特徴量ストア）を使いたい",
"feature": "feast-dev/feast",
"summary": "AI/ML向けのオープンソース特徴量ストア Feast。",
"trigger": "",
"commands": [
"npx skills add feast-dev/feast@feast-user-guide -g"
],
"install": "npx skills add feast-dev/feast@feast-user-guide -g",
"stars": 7128,
"repoUrl": "https://github.com/feast-dev/feast",
"aliases": [
"feast-user-guide",
"feast-dev",
"feast-user-guide",
"skill",
"スキル"
]
},
{
"id": "skill-feast-dev-feast-skills",
"priority": 477,
"category": "community",
"type": "skill",
"want": "Feastで特徴量を定義して使いたい",
"feature": "feast-dev/feast",
"summary": "Feastの利用ガイド。特徴量の定義、feature_store.yaml設定、オンライン/オフライン取得、CLI、RAG検索パイプライン構築を扱う。",
"trigger": "エンティティやfeature viewの作成、feature_store.yaml設定、feast apply/materialize、オンライン/履歴の特徴量取得、Feastでのベクトル検索について聞かれたとき。",
"commands": [
"npx skills add feast-dev/feast@skills -g"
],
"install": "npx skills add feast-dev/feast@skills -g",
"stars": 7128,
"repoUrl": "https://github.com/feast-dev/feast",
"aliases": [
"skills",
"feast-dev",
"feast-user-guide",
"skill",
"スキル"
]
},
{
"id": "skill-lewislulu-html-ppt-skill-html-ppt-skill",
"priority": 478,
"category": "community",
"type": "skill",
"want": "HTMLでスライド資料を作りたい",
"feature": "lewislulu/html-ppt-skill",
"summary": "テンプレート駆動で、多様なスタイル・レイアウト・アニメーションの静的HTMLプレゼンを作る。キーボード操作に対応。",
"trigger": "プレゼン・PPT・スライド・deck・幻灯片・小红书图文など、複数スライドの資料を頼まれたとき。",
"commands": [
"npx skills add lewislulu/html-ppt-skill -g"
],
"install": "npx skills add lewislulu/html-ppt-skill -g",
"stars": 7072,
"repoUrl": "https://github.com/lewislulu/html-ppt-skill",
"aliases": [
"html-ppt-skill",
"lewislulu",
"html-ppt",
"skill",
"スキル"
]
},
{
"id": "skill-vyperlang-vyper-skills",
"priority": 479,
"category": "community",
"type": "skill",
"want": "Vyperコンパイラの内部を触りたい",
"feature": "vyperlang/vyper",
"summary": "Vyperスマートコントラクトコンパイラの内部を扱う。コンパイルパイプライン、Venom IR、意味解析、コード生成、テストを含む。",
"trigger": "Vyperコンパイラの開発、Venomパス、AST/意味解析の変更、コード生成、テスト作成をするとき。",
"commands": [
"npx skills add vyperlang/vyper -g"
],
"install": "npx skills add vyperlang/vyper -g",
"stars": 5176,
"repoUrl": "https://github.com/vyperlang/vyper",
"aliases": [
"skills",
"vyperlang",
"vyper-compiler",
"skill",
"スキル"
]
},
{
"id": "skill-github-gh-aw-gh-aw",
"priority": 480,
"category": "community",
"type": "skill",
"want": "GitHub Agentic Workflows（gh-aw）を使いたい",
"feature": "github/gh-aw",
"summary": "GitHubのエージェント型ワークフロー（gh-aw）。",
"trigger": "",
"commands": [
"npx skills add github/gh-aw@gh-aw -g"
],
"install": "npx skills add github/gh-aw@gh-aw -g",
"stars": 4752,
"repoUrl": "https://github.com/github/gh-aw",
"aliases": [
"gh-aw",
"github",
"gh-aw",
"skill",
"スキル"
]
},
{
"id": "skill-github-gh-aw-.claude-skills-playwright-cli",
"priority": 481,
"category": "community",
"type": "skill",
"want": "Playwrightでブラウザ操作を自動化したい",
"feature": "github/gh-aw",
"summary": "ブラウザ操作を自動化し、Webページのテストや Playwright テストの作成・実行を行う。",
"trigger": "",
"commands": [
"npx skills add github/gh-aw@playwright-cli -g"
],
"install": "npx skills add github/gh-aw@playwright-cli -g",
"stars": 4752,
"repoUrl": "https://github.com/github/gh-aw",
"aliases": [
"playwright-cli",
"github",
"playwright-cli",
"skill",
"スキル"
]
},
{
"id": "skill-antvis-l7-skills-l7-single",
"priority": 482,
"category": "community",
"type": "skill",
"want": "WebGLで地理空間データを可視化したい",
"feature": "antvis/L7",
"summary": "WebGLベースの大規模地理空間データ可視化エンジン AntV L7。地図アプリ、点・線・面・ヒートマップ、レイヤーや動きを扱う。",
"trigger": "インタラクティブなWebGL地図の作成、地理空間データの可視化、位置データダッシュボードの構築、GeoJSONやCSVの表示をするとき。",
"commands": [
"npx skills add antvis/L7@l7-single -g"
],
"install": "npx skills add antvis/L7@l7-single -g",
"stars": 4030,
"repoUrl": "https://github.com/antvis/L7",
"aliases": [
"l7-single",
"antvis",
"antv-l7",
"skill",
"スキル"
]
},
{
"id": "skill-antvis-l7-skills-l7",
"priority": 483,
"category": "community",
"type": "skill",
"want": "AntV L7で地図の可視化を実装したい",
"feature": "antvis/L7",
"summary": "AntV L7 地理空間可視化ライブラリの総合ガイド。WebGL地図、地理データ可視化、地図レイヤー、AMap/Mapbox連携を扱う。",
"trigger": "WebGL地図の作成、点・線・面・ヒートマップの可視化、位置データダッシュボード構築、GeoJSON/CSV表示、AMap・Mapbox・Maplibre連携、大規模データの描画性能改善をするとき。",
"commands": [
"npx skills add antvis/L7@l7 -g"
],
"install": "npx skills add antvis/L7@l7 -g",
"stars": 4030,
"repoUrl": "https://github.com/antvis/L7",
"aliases": [
"l7",
"antvis",
"antv-l7",
"skill",
"スキル"
]
},
{
"id": "skill-paper2poster-paper2poster-skills",
"priority": 484,
"category": "community",
"type": "skill",
"want": "論文を学会ポスターに変換したい",
"feature": "Paper2Poster/Paper2Poster",
"summary": "学術論文を、学会ポスターや構成案・コピー・レイアウト指示・poster.yamlの下書きに変換する。",
"trigger": "PDF論文・arXivリンク・原稿・PPTXポスター・学会投稿などを、ポスターに変換したいとき。",
"commands": [
"npx skills add Paper2Poster/Paper2Poster -g"
],
"install": "npx skills add Paper2Poster/Paper2Poster -g",
"stars": 3853,
"repoUrl": "https://github.com/Paper2Poster/Paper2Poster",
"aliases": [
"skills",
"Paper2Poster",
"paper2poster-poster",
"skill",
"スキル"
]
},
{
"id": "skill-op7418-claude-to-im-skill-claude-to-im-skill",
"priority": 485,
"category": "community",
"type": "skill",
"want": "Claude Codeのセッションをスマホから使いたい",
"feature": "op7418/Claude-to-IM-skill",
"summary": "今のClaude CodeやCodexのセッションをTelegram・Discord・Feishu・QQ・WeChatへ橋渡しし、スマホからClaudeと会話できるようにする。",
"trigger": "claude-to-imブリッジの設定・起動・停止・診断や、Claudeの返信をメッセージアプリへ転送したいとき。",
"commands": [
"npx skills add op7418/Claude-to-IM-skill -g"
],
"install": "npx skills add op7418/Claude-to-IM-skill -g",
"stars": 2810,
"repoUrl": "https://github.com/op7418/Claude-to-IM-skill",
"aliases": [
"Claude-to-IM-skill",
"op7418",
"claude-to-im",
"skill",
"スキル"
]
},
{
"id": "skill-norman-bury-research-writing-skill-skills-brainstorming-research",
"priority": 486,
"category": "community",
"type": "skill",
"want": "論文の構想を固めてから書き始めたい",
"feature": "Norman-bury/research-writing-skill",
"summary": "対話を通じて論文の種類・分野・テーマ・手法・章立てを整理する。執筆に入る前の準備に使う。",
"trigger": "論文を書き始める前。",
"commands": [
"npx skills add Norman-bury/research-writing-skill@brainstorming-research -g"
],
"install": "npx skills add Norman-bury/research-writing-skill@brainstorming-research -g",
"stars": 2755,
"repoUrl": "https://github.com/Norman-bury/research-writing-skill",
"aliases": [
"brainstorming-research",
"Norman-bury",
"brainstorming-research",
"skill",
"スキル"
]
},
{
"id": "skill-norman-bury-research-writing-skill-skills-environment-setup",
"priority": 487,
"category": "community",
"type": "skill",
"want": "データ可視化用のPython環境を用意したい",
"feature": "Norman-bury/research-writing-skill",
"summary": "データ可視化のためのPython環境構築や conda のインストールを扱う。",
"trigger": "データ可視化向けのPython環境構築やcondaインストールが必要なとき。",
"commands": [
"npx skills add Norman-bury/research-writing-skill@environment-setup -g"
],
"install": "npx skills add Norman-bury/research-writing-skill@environment-setup -g",
"stars": 2755,
"repoUrl": "https://github.com/Norman-bury/research-writing-skill",
"aliases": [
"environment-setup",
"Norman-bury",
"environment-setup",
"skill",
"スキル"
]
},
{
"id": "skill-norman-bury-research-writing-skill-skills-evidence-driven-writing",
"priority": 488,
"category": "community",
"type": "skill",
"want": "引用に基づいて論文の各節を書きたい",
"feature": "Norman-bury/research-writing-skill",
"summary": "序論・関連研究・背景・文献整理など、引用が主張を支える必要がある節の執筆や改稿を扱う。",
"trigger": "序論・関連研究・背景・文献整理など、引用が主張を支える節を書く・改稿するとき。",
"commands": [
"npx skills add Norman-bury/research-writing-skill@evidence-driven-writing -g"
],
"install": "npx skills add Norman-bury/research-writing-skill@evidence-driven-writing -g",
"stars": 2755,
"repoUrl": "https://github.com/Norman-bury/research-writing-skill",
"aliases": [
"evidence-driven-writing",
"Norman-bury",
"evidence-driven-writing",
"skill",
"スキル"
]
},
{
"id": "skill-norman-bury-research-writing-skill-skills-experiment-results-planning",
"priority": 489,
"category": "community",
"type": "skill",
"want": "実験と結果セクションを先に設計したい",
"feature": "Norman-bury/research-writing-skill",
"summary": "実データが揃う前に、実験・結果表・仮の計画データ・評価プロトコル・結果セクションを設計する。",
"trigger": "実データが確定する前に、実験・結果表・評価プロトコル・結果セクションを設計するとき。",
"commands": [
"npx skills add Norman-bury/research-writing-skill@experiment-results-planning -g"
],
"install": "npx skills add Norman-bury/research-writing-skill@experiment-results-planning -g",
"stars": 2755,
"repoUrl": "https://github.com/Norman-bury/research-writing-skill",
"aliases": [
"experiment-results-planning",
"Norman-bury",
"experiment-results-planning",
"skill",
"スキル"
]
},
{
"id": "skill-norman-bury-research-writing-skill-skills-figures-diagram",
"priority": 490,
"category": "community",
"type": "skill",
"want": "論文用の図やダイアグラムを作りたい",
"feature": "Norman-bury/research-writing-skill",
"summary": "フローチャートやアーキテクチャ図・概念図を描くための、画像生成AI向けプロンプトを作る。",
"trigger": "フローチャート・アーキテクチャ図・概念図を作るとき。",
"commands": [
"npx skills add Norman-bury/research-writing-skill@figures-diagram -g"
],
"install": "npx skills add Norman-bury/research-writing-skill@figures-diagram -g",
"stars": 2755,
"repoUrl": "https://github.com/Norman-bury/research-writing-skill",
"aliases": [
"figures-diagram",
"Norman-bury",
"figures-diagram",
"skill",
"スキル"
]
},
{
"id": "skill-norman-bury-research-writing-skill-skills-figures-python",
"priority": 491,
"category": "community",
"type": "skill",
"want": "論文用のグラフ・図版を作りたい",
"feature": "Norman-bury/research-writing-skill",
"summary": "一流誌の配色を使い、論文にそのまま載せられる水準のデータ可視化・プロットを生成する。",
"trigger": "論文向けのデータ可視化を作るとき。",
"commands": [
"npx skills add Norman-bury/research-writing-skill@figures-python -g"
],
"install": "npx skills add Norman-bury/research-writing-skill@figures-python -g",
"stars": 2755,
"repoUrl": "https://github.com/Norman-bury/research-writing-skill",
"aliases": [
"figures-python",
"Norman-bury",
"figures-python",
"skill",
"スキル"
]
},
{
"id": "skill-norman-bury-research-writing-skill-skills-latex-output",
"priority": 492,
"category": "community",
"type": "skill",
"want": "原稿をLaTeX形式で出力したい",
"feature": "Norman-bury/research-writing-skill",
"summary": "原稿をLaTeX形式で出力し、大学や学術誌から渡されたLaTeXテンプレートに沿わせる。",
"trigger": "LaTeX形式の出力を求められた、または学校・学術誌のLaTeXテンプレートが渡されたとき。",
"commands": [
"npx skills add Norman-bury/research-writing-skill@latex-output -g"
],
"install": "npx skills add Norman-bury/research-writing-skill@latex-output -g",
"stars": 2755,
"repoUrl": "https://github.com/Norman-bury/research-writing-skill",
"aliases": [
"latex-output",
"Norman-bury",
"latex-output",
"skill",
"スキル"
]
},
{
"id": "skill-norman-bury-research-writing-skill-research-writing-skill",
"priority": 493,
"category": "community",
"type": "skill",
"want": "論文や学位論文を執筆したい",
"feature": "Norman-bury/research-writing-skill",
"summary": "論文・学位論文・研究記事の執筆を、着想出し・章ごとの執筆・文献レビュー・LaTeX出力の面から支える。",
"trigger": "学術論文・学位論文・研究記事を書くとき。",
"commands": [
"npx skills add Norman-bury/research-writing-skill@research-writing-skill -g"
],
"install": "npx skills add Norman-bury/research-writing-skill@research-writing-skill -g",
"stars": 2755,
"repoUrl": "https://github.com/Norman-bury/research-writing-skill",
"aliases": [
"research-writing-skill",
"Norman-bury",
"research-writing-assistant",
"skill",
"スキル"
]
},
{
"id": "skill-stellarlinkco-myclaude-skills-browser",
"priority": 494,
"category": "community",
"type": "skill",
"want": "Chromeをブラウザ自動操作したい",
"feature": "stellarlinkco/myclaude",
"summary": "Chrome DevTools Protocol でChromeを操作し、ページ遷移・JS実行・スクショ・DOM要素選択まで行う。MCP不要。",
"trigger": "リモートデバッグ付きChromeの起動・ページ遷移・ブラウザ内JS実行・スクショ・DOM要素の選択をするとき。",
"commands": [
"npx skills add stellarlinkco/myclaude@browser -g"
],
"install": "npx skills add stellarlinkco/myclaude@browser -g",
"stars": 2728,
"repoUrl": "https://github.com/stellarlinkco/myclaude",
"aliases": [
"browser",
"stellarlinkco",
"browser",
"skill",
"スキル"
]
},
{
"id": "skill-stellarlinkco-myclaude-skills-codeagent",
"priority": 495,
"category": "community",
"type": "skill",
"want": "複数のAIバックエンドにコード作業を投げたい",
"feature": "stellarlinkco/myclaude",
"summary": "codeagent-wrapper で Codex・Claude・Gemini・OpenCode にコード作業を投げ、並列実行と worktree 分離を行う。",
"trigger": "",
"commands": [
"npx skills add stellarlinkco/myclaude@codeagent -g"
],
"install": "npx skills add stellarlinkco/myclaude@codeagent -g",
"stars": 2728,
"repoUrl": "https://github.com/stellarlinkco/myclaude",
"aliases": [
"codeagent",
"stellarlinkco",
"codeagent",
"skill",
"スキル"
]
},
{
"id": "skill-stellarlinkco-myclaude-skills-dev",
"priority": 496,
"category": "community",
"type": "skill",
"want": "要件定義から実装まで一気通貫で開発したい",
"feature": "stellarlinkco/myclaude",
"summary": "要件のすり合わせ・バックエンド選定・codeagent の並列実行までを回し、テストカバレッジ90%を必須とする軽量な開発フロー。",
"trigger": "",
"commands": [
"npx skills add stellarlinkco/myclaude@dev -g"
],
"install": "npx skills add stellarlinkco/myclaude@dev -g",
"stars": 2728,
"repoUrl": "https://github.com/stellarlinkco/myclaude",
"aliases": [
"dev",
"stellarlinkco",
"dev",
"skill",
"スキル"
]
},
{
"id": "skill-stellarlinkco-myclaude-skills-do",
"priority": 497,
"category": "community",
"type": "skill",
"want": "コードベースを理解しながら機能開発を進めたい",
"feature": "stellarlinkco/myclaude",
"summary": "理解・確認・設計・実装・完了の5フェーズで、複数エージェントを codeagent-wrapper で並列に動かして機能を作る。",
"trigger": "/do コマンドで、コードベースを踏まえた構造的な機能開発をするとき。",
"commands": [
"npx skills add stellarlinkco/myclaude@do -g"
],
"install": "npx skills add stellarlinkco/myclaude@do -g",
"stars": 2728,
"repoUrl": "https://github.com/stellarlinkco/myclaude",
"aliases": [
"do",
"stellarlinkco",
"do",
"skill",
"スキル"
]
},
{
"id": "skill-stellarlinkco-myclaude-skills-harness",
"priority": 498,
"category": "community",
"type": "skill",
"want": "複数セッションにまたがる長時間のエージェント作業を続けたい",
"feature": "stellarlinkco/myclaude",
"summary": "進捗のチェックポイント・失敗からの復旧・タスク依存の管理を備え、コンテキストをまたぐ長時間のエージェント作業を支える。",
"trigger": "/harness コマンドで、進捗の保存・中断からの再開・失敗からの復旧が要る長時間タスクを扱うとき。",
"commands": [
"npx skills add stellarlinkco/myclaude@harness -g"
],
"install": "npx skills add stellarlinkco/myclaude@harness -g",
"stars": 2728,
"repoUrl": "https://github.com/stellarlinkco/myclaude",
"aliases": [
"harness",
"stellarlinkco",
"harness",
"skill",
"スキル"
]
},
{
"id": "skill-stellarlinkco-myclaude-skills-omo",
"priority": 499,
"category": "community",
"type": "skill",
"want": "複数エージェントでコード調査から修正まで進めたい",
"feature": "stellarlinkco/myclaude",
"summary": "コード分析・バグ調査・修正計画・実装を、タスクの種類とリスクに応じた最小構成のエージェントで進める。",
"trigger": "/omo で、コード分析・バグ調査・修正計画・実装を複数エージェントに割り振るとき。",
"commands": [
"npx skills add stellarlinkco/myclaude@omo -g"
],
"install": "npx skills add stellarlinkco/myclaude@omo -g",
"stars": 2728,
"repoUrl": "https://github.com/stellarlinkco/myclaude",
"aliases": [
"omo",
"stellarlinkco",
"omo",
"skill",
"スキル"
]
},
{
"id": "skill-stellarlinkco-myclaude-skills-product-requirements",
"priority": 500,
"category": "community",
"type": "skill",
"want": "要件を整理してPRDを作りたい",
"feature": "stellarlinkco/myclaude",
"summary": "プロダクトオーナー役として対話しながら要件を集めて分析し、PRDを作る。品質スコアで抜けを詰める。",
"trigger": "プロダクト要件の整理・機能仕様・PRD作成を求められたとき。",
"commands": [
"npx skills add stellarlinkco/myclaude@product-requirements -g"
],
"install": "npx skills add stellarlinkco/myclaude@product-requirements -g",
"stars": 2728,
"repoUrl": "https://github.com/stellarlinkco/myclaude",
"aliases": [
"product-requirements",
"stellarlinkco",
"product-requirements",
"skill",
"スキル"
]
},
{
"id": "skill-stellarlinkco-myclaude-skills-prototype-prompt-generator",
"priority": 501,
"category": "community",
"type": "skill",
"want": "UI/UXプロトタイプ用のプロンプトを作りたい",
"feature": "stellarlinkco/myclaude",
"summary": "UI/UXプロトタイプを作るための構造化プロンプトを生成する。iOS・Material・Ant Design Mobile 等に対応。",
"trigger": "「プロトタイプ用プロンプトを作る」「モバイルアプリを設計」「UI仕様を生成」等を求められたとき。",
"commands": [
"npx skills add stellarlinkco/myclaude@prototype-prompt-generator -g"
],
"install": "npx skills add stellarlinkco/myclaude@prototype-prompt-generator -g",
"stars": 2728,
"repoUrl": "https://github.com/stellarlinkco/myclaude",
"aliases": [
"prototype-prompt-generator",
"stellarlinkco",
"prototype-prompt-generator",
"skill",
"スキル"
]
},
{
"id": "skill-butterbase-ai-butterbase-butterbase",
"priority": 502,
"category": "community",
"type": "skill",
"want": "MCP付きのオープンソースBaaSを使いたい",
"feature": "butterbase-ai/butterbase",
"summary": "Postgres・認証・ストレージ・関数・AIゲートウェイを備え、MCPサーバーを内蔵したオープンソースのBaaS。",
"trigger": "",
"commands": [
"npx skills add butterbase-ai/butterbase -g"
],
"install": "npx skills add butterbase-ai/butterbase -g",
"stars": 2557,
"repoUrl": "https://github.com/butterbase-ai/butterbase",
"aliases": [
"butterbase",
"butterbase-ai",
"butterbase",
"skill",
"スキル"
]
},
{
"id": "skill-leilei926524-tech-anti-distill-anti-distill",
"priority": 503,
"category": "community",
"type": "skill",
"want": "提出するSkillから核心のノウハウを抜いておきたい",
"feature": "leilei926524-tech/anti-distill",
"summary": "提出用のSkillファイルを、見た目は完成したまま核心の知識だけ抜き取り、蒸留での流出を防ぐ。",
"trigger": "",
"commands": [
"npx skills add leilei926524-tech/anti-distill -g"
],
"install": "npx skills add leilei926524-tech/anti-distill -g",
"stars": 2315,
"repoUrl": "https://github.com/leilei926524-tech/anti-distill",
"aliases": [
"anti-distill",
"leilei926524-tech",
"anti-distill",
"skill",
"スキル"
]
},
{
"id": "skill-conorbronsdon-avoid-ai-writing-avoid-ai-writing",
"priority": 504,
"category": "community",
"type": "skill",
"want": "文章からAIっぽさを取り除きたい",
"feature": "conorbronsdon/avoid-ai-writing",
"summary": "文章を監査してAI特有の言い回し(AI-ism)を検出し、書き換えて取り除く。声色プロファイルも選べる。",
"trigger": "「AI-ismを消す」「AIっぽい文章を直す」「AIらしさを減らす」等を求められたとき。",
"commands": [
"npx skills add conorbronsdon/avoid-ai-writing@avoid-ai-writing -g"
],
"install": "npx skills add conorbronsdon/avoid-ai-writing@avoid-ai-writing -g",
"stars": 2299,
"repoUrl": "https://github.com/conorbronsdon/avoid-ai-writing",
"aliases": [
"avoid-ai-writing",
"conorbronsdon",
"avoid-ai-writing",
"skill",
"スキル"
]
},
{
"id": "skill-conorbronsdon-avoid-ai-writing-plugins-avoid-ai-writing-skills-avoid-ai-writing",
"priority": 505,
"category": "community",
"type": "skill",
"want": "文章からAIっぽさを取り除きたい",
"feature": "conorbronsdon/avoid-ai-writing",
"summary": "文章を監査してAI特有の言い回し(AI-ism)を検出し、書き換えて取り除く。声色プロファイルも選べる。",
"trigger": "「AI-ismを消す」「AIっぽい文章を直す」「AIらしさを減らす」等を求められたとき。",
"commands": [
"npx skills add conorbronsdon/avoid-ai-writing@avoid-ai-writing -g"
],
"install": "npx skills add conorbronsdon/avoid-ai-writing@avoid-ai-writing -g",
"stars": 2299,
"repoUrl": "https://github.com/conorbronsdon/avoid-ai-writing",
"aliases": [
"avoid-ai-writing",
"conorbronsdon",
"avoid-ai-writing",
"skill",
"スキル"
]
},
{
"id": "skill-openstatushq-data-table-filters-.agents-skills-emil-design-eng",
"priority": 506,
"category": "community",
"type": "skill",
"want": "UIの磨き込みや細部の作り込みの指針を得たい",
"feature": "openstatusHQ/data-table-filters",
"summary": "Emil Kowalski のUI磨き込み・コンポーネント設計・アニメーション判断・細部の作り込みの考え方をまとめる。",
"trigger": "",
"commands": [
"npx skills add openstatusHQ/data-table-filters@emil-design-eng -g"
],
"install": "npx skills add openstatusHQ/data-table-filters@emil-design-eng -g",
"stars": 2158,
"repoUrl": "https://github.com/openstatusHQ/data-table-filters",
"aliases": [
"emil-design-eng",
"openstatusHQ",
"emil-design-eng",
"skill",
"スキル"
]
},
{
"id": "skill-openstatushq-data-table-filters-.agents-skills-frontend-design",
"priority": 507,
"category": "community",
"type": "skill",
"want": "量産型に見えないフロントエンドUIを作りたい",
"feature": "openstatusHQ/data-table-filters",
"summary": "既視感のあるAIっぽいデザインを避け、本番水準で個性のあるフロントエンドUIとコードを作る。",
"trigger": "Webコンポーネント・ページ・ダッシュボード・LP・ポスター等の構築やUIの装飾を頼まれたとき。",
"commands": [
"npx skills add openstatusHQ/data-table-filters@frontend-design -g"
],
"install": "npx skills add openstatusHQ/data-table-filters@frontend-design -g",
"stars": 2158,
"repoUrl": "https://github.com/openstatusHQ/data-table-filters",
"aliases": [
"frontend-design",
"openstatusHQ",
"frontend-design",
"skill",
"スキル"
]
},
{
"id": "skill-openstatushq-data-table-filters-.agents-skills-game-changing-features",
"priority": 508,
"category": "community",
"type": "skill",
"want": "効き目の大きい機能や打ち手を見つけたい",
"feature": "openstatusHQ/data-table-filters",
"summary": "プロダクトを大きく伸ばす機会や、少ない労力で効き目の大きい改善案を戦略的に洗い出す。",
"trigger": "戦略的なプロダクト思考や「10x」「次に何を作るべきか」を求められたとき。",
"commands": [
"npx skills add openstatusHQ/data-table-filters@game-changing-features -g"
],
"install": "npx skills add openstatusHQ/data-table-filters@game-changing-features -g",
"stars": 2158,
"repoUrl": "https://github.com/openstatusHQ/data-table-filters",
"aliases": [
"game-changing-features",
"openstatusHQ",
"game-changing-features",
"skill",
"スキル"
]
},
{
"id": "skill-openstatushq-data-table-filters-.agents-skills-grill-me",
"priority": 509,
"category": "community",
"type": "skill",
"want": "計画や設計を厳しく問い詰めて検証したい",
"feature": "openstatusHQ/data-table-filters",
"summary": "計画や設計について、決定木の各分岐が埋まるまで容赦なく質問を重ね、共通理解に至らせる。",
"trigger": "計画をストレステストしたい、設計を問い詰めてほしい、「grill me」と言われたとき。",
"commands": [
"npx skills add openstatusHQ/data-table-filters@grill-me -g"
],
"install": "npx skills add openstatusHQ/data-table-filters@grill-me -g",
"stars": 2158,
"repoUrl": "https://github.com/openstatusHQ/data-table-filters",
"aliases": [
"grill-me",
"openstatusHQ",
"grill-me",
"skill",
"スキル"
]
},
{
"id": "skill-openstatushq-data-table-filters-.agents-skills-improve",
"priority": 510,
"category": "community",
"type": "skill",
"want": "コードベースを診断して改善計画を作りたい",
"feature": "openstatusHQ/data-table-filters",
"summary": "シニア顧問としてコードベースを調べ、他のエージェントが実行できる優先順位付きの実装計画を作る。ソースは読むだけ。",
"trigger": "コードベースの監査・改善点の洗い出し・別エージェント向けの引き継ぎ計画づくりを頼まれたとき。",
"commands": [
"npx skills add openstatusHQ/data-table-filters@improve -g"
],
"install": "npx skills add openstatusHQ/data-table-filters@improve -g",
"stars": 2158,
"repoUrl": "https://github.com/openstatusHQ/data-table-filters",
"aliases": [
"improve",
"openstatusHQ",
"improve",
"skill",
"スキル"
]
},
{
"id": "skill-openstatushq-data-table-filters-.agents-skills-improve-codebase-architecture",
"priority": 511,
"category": "community",
"type": "skill",
"want": "アーキテクチャの改善余地を見つけたい",
"feature": "openstatusHQ/data-table-filters",
"summary": "浅いモジュールを深めてテストしやすくする観点で、コードベースのアーキテクチャ改善の余地を探す。",
"trigger": "アーキテクチャ改善・リファクタ余地の発見・密結合モジュールの整理をしたいとき。",
"commands": [
"npx skills add openstatusHQ/data-table-filters@improve-codebase-architecture -g"
],
"install": "npx skills add openstatusHQ/data-table-filters@improve-codebase-architecture -g",
"stars": 2158,
"repoUrl": "https://github.com/openstatusHQ/data-table-filters",
"aliases": [
"improve-codebase-architecture",
"openstatusHQ",
"improve-codebase-architecture",
"skill",
"スキル"
]
},
{
"id": "skill-openstatushq-data-table-filters-.agents-skills-mcp-builder",
"priority": 512,
"category": "community",
"type": "skill",
"want": "MCPサーバーを作りたい",
"feature": "openstatusHQ/data-table-filters",
"summary": "外部サービスとLLMをつなぐMCPサーバーの作り方を、Python(FastMCP)やNode/TypeScript(MCP SDK)で案内する。",
"trigger": "外部APIやサービスを連携するMCPサーバーを作るとき。",
"commands": [
"npx skills add openstatusHQ/data-table-filters@mcp-builder -g"
],
"install": "npx skills add openstatusHQ/data-table-filters@mcp-builder -g",
"stars": 2158,
"repoUrl": "https://github.com/openstatusHQ/data-table-filters",
"aliases": [
"mcp-builder",
"openstatusHQ",
"mcp-builder",
"skill",
"スキル"
]
},
{
"id": "skill-openstatushq-data-table-filters-.agents-skills-next-best-practices",
"priority": 513,
"category": "community",
"type": "skill",
"want": "Next.jsのベストプラクティスに沿いたい",
"feature": "openstatusHQ/data-table-filters",
"summary": "ファイル規約・RSC境界・データ取得・メタデータ・エラー処理など、Next.jsの定石をまとめる。",
"trigger": "",
"commands": [
"npx skills add openstatusHQ/data-table-filters@next-best-practices -g"
],
"install": "npx skills add openstatusHQ/data-table-filters@next-best-practices -g",
"stars": 2158,
"repoUrl": "https://github.com/openstatusHQ/data-table-filters",
"aliases": [
"next-best-practices",
"openstatusHQ",
"next-best-practices",
"skill",
"スキル"
]
},
{
"id": "skill-op7418-youtube-clipper-skill-youtube-clipper-skill",
"priority": 514,
"category": "community",
"type": "skill",
"want": "YouTube動画を切り抜いて字幕付き短尺にしたい",
"feature": "op7418/Youtube-clipper-skill",
"summary": "YouTube動画と字幕を取得し、AIで章立てして、選んだ区間の切り抜き・中英字幕の翻訳と焼き込み・要約生成まで行う。",
"trigger": "YouTube動画の切り抜き・短尺化・中英バイリンガル字幕を作るとき。",
"commands": [
"npx skills add op7418/Youtube-clipper-skill -g"
],
"install": "npx skills add op7418/Youtube-clipper-skill -g",
"stars": 2057,
"repoUrl": "https://github.com/op7418/Youtube-clipper-skill",
"aliases": [
"Youtube-clipper-skill",
"op7418",
"youtube-clipper",
"skill",
"スキル"
]
},
{
"id": "skill-upstash-ratelimit-js-skills",
"priority": 515,
"category": "community",
"type": "skill",
"want": "Upstashでレート制限を実装したい",
"feature": "upstash/ratelimit-js",
"summary": "Redis Rate Limit の TypeScript SDK について、セットアップ手順・基本の使い方・応用ドキュメントへの案内をまとめる。",
"trigger": "",
"commands": [
"npx skills add upstash/ratelimit-js -g"
],
"install": "npx skills add upstash/ratelimit-js -g",
"stars": 2040,
"repoUrl": "https://github.com/upstash/ratelimit-js",
"aliases": [
"skills",
"upstash",
"upstash-ratelimit-ts",
"skill",
"スキル"
]
},
{
"id": "skill-opendatalab-omnidocbench-skills",
"priority": 516,
"category": "community",
"type": "skill",
"want": "OmniDocBenchで文書解析の評価を回したい",
"feature": "opendatalab/OmniDocBench",
"summary": "OmniDocBench 評価のデプロイ・検証・実行・結果JSONの解析を助け、Overall/Text/Formula/Table のスコアを報告する。",
"trigger": "OmniDocBench や文書解析/OCRベンチのスコアリング、MinerU 等のモデル評価に触れるとき。",
"commands": [
"npx skills add opendatalab/OmniDocBench -g"
],
"install": "npx skills add opendatalab/OmniDocBench -g",
"stars": 1876,
"repoUrl": "https://github.com/opendatalab/OmniDocBench",
"aliases": [
"skills",
"opendatalab",
"omnidocbench-eval-helper",
"skill",
"スキル"
]
},
{
"id": "skill-francyjglisboa-agent-skill-creator-agent-skill-creator",
"priority": 517,
"category": "community",
"type": "skill",
"want": "定型ワークフローをエージェントSkillにしたい",
"feature": "FrancyJGLisboa/agent-skill-creator",
"summary": "ワークフローの記述からクロスプラットフォームのエージェントSkillを作る。テンプレート作成・検証・エクスポートに対応。",
"trigger": "「エージェントを作る」「反復作業を自動化」「Skillを作る」「毎日〜しなければ」等と言われたとき。",
"commands": [
"npx skills add FrancyJGLisboa/agent-skill-creator -g"
],
"install": "npx skills add FrancyJGLisboa/agent-skill-creator -g",
"stars": 1799,
"repoUrl": "https://github.com/FrancyJGLisboa/agent-skill-creator",
"aliases": [
"agent-skill-creator",
"FrancyJGLisboa",
"agent-skill-creator",
"skill",
"スキル"
]
},
{
"id": "skill-youmind-openlab-nano-banana-pro-prompts-recommend-skill-nano-banana-pro-prompts-recommend-skill",
"priority": 518,
"category": "community",
"type": "skill",
"want": "画像生成に合うプロンプトを見つけたい",
"feature": "YouMind-OpenLab/nano-banana-pro-prompts-recommend-skill",
"summary": "1万件超の Nano Banana Pro 向け画像生成プロンプトから、要望に合うものを推薦する。他の画像生成モデルでも使える。",
"trigger": "AIで画像を生成したい、用途に合う画像プロンプトやテンプレートを探すとき。",
"commands": [
"npx skills add YouMind-OpenLab/nano-banana-pro-prompts-recommend-skill -g"
],
"install": "npx skills add YouMind-OpenLab/nano-banana-pro-prompts-recommend-skill -g",
"stars": 1752,
"repoUrl": "https://github.com/YouMind-OpenLab/nano-banana-pro-prompts-recommend-skill",
"aliases": [
"nano-banana-pro-prompts-recommend-skill",
"YouMind-OpenLab",
"nano-banana-pro-prompts-recommend-skill",
"skill",
"スキル"
]
},
{
"id": "skill-zakirkun-guardian-cli-guardian-cli",
"priority": 519,
"category": "community",
"type": "skill",
"want": "ペネトレーションテストを自動で回したい",
"feature": "zakirkun/guardian-cli",
"summary": "複数のAIエージェントと19種のセキュリティツールを YAML ワークフローで束ね、脆弱性レポートを Markdown/HTML/JSON で出力する。",
"trigger": "",
"commands": [
"npx skills add zakirkun/guardian-cli -g"
],
"install": "npx skills add zakirkun/guardian-cli -g",
"stars": 1738,
"repoUrl": "https://github.com/zakirkun/guardian-cli",
"aliases": [
"guardian-cli",
"zakirkun",
"guardian-cli",
"skill",
"スキル"
]
}
];
