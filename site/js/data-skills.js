// 生成物: scripts/build_data.py が skills.jsonl + overrides.ja.json から作成。手で編集しない。
// GitHub の Claude Code Skills を非LLMで取り込み、日本語化 48/88 件（週次 ingest-skills.yml）。
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
"stars": 160862,
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
"stars": 160862,
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
"stars": 160862,
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
"stars": 160862,
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
"stars": 160862,
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
"stars": 160862,
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
"stars": 160862,
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
"stars": 160862,
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
"stars": 160862,
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
"stars": 160862,
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
"stars": 160862,
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
"stars": 160862,
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
"stars": 160862,
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
"stars": 160862,
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
"stars": 160862,
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
"stars": 160862,
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
"stars": 160862,
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
"id": "skill-tldraw-tldraw-apps-mcp-app-.claude-skills-add-app-to-server",
"priority": 417,
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
"stars": 48738,
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
"priority": 418,
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
"stars": 48738,
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
"priority": 419,
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
"stars": 48738,
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
"priority": 420,
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
"stars": 48738,
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
"priority": 421,
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
"stars": 48738,
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
"priority": 422,
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
"stars": 48738,
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
"priority": 423,
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
"stars": 48738,
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
"priority": 424,
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
"stars": 48738,
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
"priority": 425,
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
"stars": 37431,
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
"priority": 426,
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
"stars": 37431,
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
"priority": 427,
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
"stars": 37431,
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
"priority": 428,
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
"stars": 37431,
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
"priority": 429,
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
"stars": 29888,
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
"priority": 430,
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
"stars": 29025,
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
"priority": 431,
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
"stars": 29025,
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
"priority": 432,
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
"stars": 29025,
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
"priority": 433,
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
"stars": 29025,
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
"priority": 434,
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
"stars": 29025,
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
"priority": 435,
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
"stars": 29025,
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
"priority": 436,
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
"stars": 29025,
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
"priority": 437,
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
"stars": 29025,
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
"priority": 438,
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
"stars": 29025,
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
"priority": 439,
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
"stars": 27382,
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
"id": "skill-titanwings-colleague-skill-colleague-skill",
"priority": 440,
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
"stars": 20256,
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
"id": "skill-crazyguitar-pysheeet-skills-py",
"priority": 441,
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
"priority": 442,
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
"id": "skill-op7418-claude-to-im-skill-claude-to-im-skill",
"priority": 443,
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
"stars": 2809,
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
"id": "skill-conorbronsdon-avoid-ai-writing-avoid-ai-writing",
"priority": 444,
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
"stars": 2332,
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
"priority": 445,
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
"stars": 2332,
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
"id": "skill-leilei926524-tech-anti-distill-anti-distill",
"priority": 446,
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
"stars": 2318,
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
"id": "skill-youmind-openlab-nano-banana-pro-prompts-recommend-skill-nano-banana-pro-prompts-recommend-skill",
"priority": 447,
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
"stars": 1760,
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
"id": "skill-adamlyttleapps-claude-skill-aso-appstore-screenshots-claude-skill-aso-appstore-screenshots",
"priority": 448,
"category": "community",
"type": "skill",
"want": "aso-appstore-screenshots",
"feature": "adamlyttleapps/claude-skill-aso-appstore-screenshots",
"summary": "Generate high-converting App Store screenshots by analyzing your app's codebase, discovering core benefits, and creating ASO-optimized screenshot images using Nano Banana Pro.",
"trigger": "",
"commands": [
"npx skills add adamlyttleapps/claude-skill-aso-appstore-screenshots -g"
],
"install": "npx skills add adamlyttleapps/claude-skill-aso-appstore-screenshots -g",
"stars": 1560,
"repoUrl": "https://github.com/adamlyttleapps/claude-skill-aso-appstore-screenshots",
"aliases": [
"claude-skill-aso-appstore-screenshots",
"adamlyttleapps",
"aso-appstore-screenshots",
"skill",
"スキル"
]
},
{
"id": "skill-litellm-labs-litellm-agent-control-plane-skills",
"priority": 449,
"category": "community",
"type": "skill",
"want": "skills",
"feature": "LiteLLM-Labs/litellm-agent-control-plane",
"summary": "1 place to call all your agents - OpenCode, Hermes, Claude Managed Agents, Cursor Agents API, DeepAgents.",
"trigger": "",
"commands": [
"npx skills add LiteLLM-Labs/litellm-agent-control-plane -g"
],
"install": "npx skills add LiteLLM-Labs/litellm-agent-control-plane -g",
"stars": 1123,
"repoUrl": "https://github.com/LiteLLM-Labs/litellm-agent-control-plane",
"aliases": [
"skills",
"LiteLLM-Labs",
"skills",
"skill",
"スキル"
]
},
{
"id": "skill-datadog-pup-skills-dd-apm",
"priority": 450,
"category": "community",
"type": "skill",
"want": "dd-apm",
"feature": "DataDog/pup",
"summary": "APM - traces, services, dependencies, performance analysis.",
"trigger": "",
"commands": [
"npx skills add DataDog/pup@dd-apm -g"
],
"install": "npx skills add DataDog/pup@dd-apm -g",
"stars": 953,
"repoUrl": "https://github.com/DataDog/pup",
"aliases": [
"dd-apm",
"DataDog",
"dd-apm",
"skill",
"スキル"
]
},
{
"id": "skill-datadog-pup-skills-dd-code-generation",
"priority": 451,
"category": "community",
"type": "skill",
"want": "dd-code-generation",
"feature": "DataDog/pup",
"summary": "Use pup CLI for immediate Datadog operations or generate code for integration into applications",
"trigger": "",
"commands": [
"npx skills add DataDog/pup@dd-code-generation -g"
],
"install": "npx skills add DataDog/pup@dd-code-generation -g",
"stars": 953,
"repoUrl": "https://github.com/DataDog/pup",
"aliases": [
"dd-code-generation",
"DataDog",
"dd-code-generation",
"skill",
"スキル"
]
},
{
"id": "skill-datadog-pup-skills-dd-debugger",
"priority": 452,
"category": "community",
"type": "skill",
"want": "dd-debugger",
"feature": "DataDog/pup",
"summary": "Live Debugger - inspect runtime argument/variable values in production by placing log probes on methods.",
"trigger": "Use when asked what values a function receives, what parameters look like at runtime, or to capture live data from running services without redeploying.",
"commands": [
"npx skills add DataDog/pup@dd-debugger -g"
],
"install": "npx skills add DataDog/pup@dd-debugger -g",
"stars": 953,
"repoUrl": "https://github.com/DataDog/pup",
"aliases": [
"dd-debugger",
"DataDog",
"dd-debugger",
"skill",
"スキル"
]
},
{
"id": "skill-datadog-pup-skills-dd-docs",
"priority": 453,
"category": "community",
"type": "skill",
"want": "dd-docs",
"feature": "DataDog/pup",
"summary": "Datadog docs lookup using docs.datadoghq.com/llms.txt and linked Markdown pages.",
"trigger": "",
"commands": [
"npx skills add DataDog/pup@dd-docs -g"
],
"install": "npx skills add DataDog/pup@dd-docs -g",
"stars": 953,
"repoUrl": "https://github.com/DataDog/pup",
"aliases": [
"dd-docs",
"DataDog",
"dd-docs",
"skill",
"スキル"
]
},
{
"id": "skill-datadog-pup-skills-dd-file-issue",
"priority": 454,
"category": "community",
"type": "skill",
"want": "dd-file-issue",
"feature": "DataDog/pup",
"summary": "File GitHub issues to the right repository (pup CLI or plugin)",
"trigger": "",
"commands": [
"npx skills add DataDog/pup@dd-file-issue -g"
],
"install": "npx skills add DataDog/pup@dd-file-issue -g",
"stars": 953,
"repoUrl": "https://github.com/DataDog/pup",
"aliases": [
"dd-file-issue",
"DataDog",
"dd-file-issue",
"skill",
"スキル"
]
},
{
"id": "skill-datadog-pup-skills-dd-logs",
"priority": 455,
"category": "community",
"type": "skill",
"want": "dd-logs",
"feature": "DataDog/pup",
"summary": "Log management - search, pipelines, archives, and cost control.",
"trigger": "",
"commands": [
"npx skills add DataDog/pup@dd-logs -g"
],
"install": "npx skills add DataDog/pup@dd-logs -g",
"stars": 953,
"repoUrl": "https://github.com/DataDog/pup",
"aliases": [
"dd-logs",
"DataDog",
"dd-logs",
"skill",
"スキル"
]
},
{
"id": "skill-datadog-pup-skills-dd-monitors",
"priority": 456,
"category": "community",
"type": "skill",
"want": "dd-monitors",
"feature": "DataDog/pup",
"summary": "Monitor management - create, update, mute, and alerting best practices.",
"trigger": "",
"commands": [
"npx skills add DataDog/pup@dd-monitors -g"
],
"install": "npx skills add DataDog/pup@dd-monitors -g",
"stars": 953,
"repoUrl": "https://github.com/DataDog/pup",
"aliases": [
"dd-monitors",
"DataDog",
"dd-monitors",
"skill",
"スキル"
]
},
{
"id": "skill-datadog-pup-pup",
"priority": 457,
"category": "community",
"type": "skill",
"want": "pup",
"feature": "DataDog/pup",
"summary": "Datadog API CLI with 49 command groups, 300+ subcommands. Skills and domain agents for monitoring, logs, APM, security, and infrastructure.",
"trigger": "",
"commands": [
"npx skills add DataDog/pup@pup -g"
],
"install": "npx skills add DataDog/pup@pup -g",
"stars": 953,
"repoUrl": "https://github.com/DataDog/pup",
"aliases": [
"pup",
"DataDog",
"pup",
"skill",
"スキル"
]
},
{
"id": "skill-tripleyak-skillforge-skillforge",
"priority": 458,
"category": "community",
"type": "skill",
"want": "skillforge",
"feature": "tripleyak/SkillForge",
"summary": "Intelligent skill router, proactive advisor, and creator. Analyzes ANY input to recommend existing skills, improve them, or create new ones. Adds proactive Context Skill Advisor suggestions from session, project, and personal context using user-controlled Proactivity Levels.",
"trigger": "",
"commands": [
"npx skills add tripleyak/SkillForge -g"
],
"install": "npx skills add tripleyak/SkillForge -g",
"stars": 792,
"repoUrl": "https://github.com/tripleyak/SkillForge",
"aliases": [
"SkillForge",
"tripleyak",
"skillforge",
"skill",
"スキル"
]
},
{
"id": "skill-denissergeevitch-repo-task-proof-loop-repo-task-proof-loop",
"priority": 459,
"category": "community",
"type": "skill",
"want": "repo-task-proof-loop",
"feature": "DenisSergeevitch/repo-task-proof-loop",
"summary": "Repo-local workflow skill for large coding tasks. Initializes .agent/tasks/TASK_ID artifacts, installs project-scoped Codex and Claude subagents, updates AGENTS.md plus the repo's Claude guide file with the workflow, and runs a spec-freeze → build → evidence → verify → fix loop with fresh-session verification.",
"trigger": "",
"commands": [
"npx skills add DenisSergeevitch/repo-task-proof-loop -g"
],
"install": "npx skills add DenisSergeevitch/repo-task-proof-loop -g",
"stars": 720,
"repoUrl": "https://github.com/DenisSergeevitch/repo-task-proof-loop",
"aliases": [
"repo-task-proof-loop",
"DenisSergeevitch",
"repo-task-proof-loop",
"skill",
"スキル"
]
},
{
"id": "skill-ahmadawais-ramadan-cli-skills",
"priority": 460,
"category": "community",
"type": "skill",
"want": "skills",
"feature": "ahmadawais/ramadan-cli",
"summary": "CLI to check Sehar and Iftar times in Ramadan anywhere in the world.",
"trigger": "",
"commands": [
"npx skills add ahmadawais/ramadan-cli -g"
],
"install": "npx skills add ahmadawais/ramadan-cli -g",
"stars": 601,
"repoUrl": "https://github.com/ahmadawais/ramadan-cli",
"aliases": [
"skills",
"ahmadawais",
"skills",
"skill",
"スキル"
]
},
{
"id": "skill-mobiusquant-openmobius-skill-openmobius-skill",
"priority": 461,
"category": "community",
"type": "skill",
"want": "OpenMobius-skill",
"feature": "MobiusQuant/OpenMobius-skill",
"summary": "ICT/SMC/ChanLun(缠论) trading knowledge base (726 concepts + 1282 cases) + a built-in SMC structural indicator + chart generation via Mobius Quant API. Four interaction modes - (1) concept Q&A (\"what is X / how to identify Y / how to enter Z\"); (2) chart-image analysis when user attaches a trading chart (\"看图 / 分析 / 走势 / 行情 / 帮我看\") — auto-fetches real OHLCV + structural signals; (3) chart annotation (\"draw / annotate / 标一下 / 画出来 / 标注\"); (4) Kline analysis on pasted OHLCV or asset+timeframe (\"BTC 1h 怎么样\" / \"茅台日线\"). The SMC indicator (BOS/CHoCH, Order Blocks, Fair Value Gaps, equal H/L, premium-discount, strong/weak pivots) is the default structural source for any asset+timeframe query. Always fetches FRESH data per turn from Mobius Quant API (api.mobiusquant.ai); when asked \"数据源 / where's the data from\", use the canonical disclosure (do not fabricate upstream vendors). Supports crypto, A股/港股/美股, forex.",
"trigger": "",
"commands": [
"npx skills add MobiusQuant/OpenMobius-skill -g"
],
"install": "npx skills add MobiusQuant/OpenMobius-skill -g",
"stars": 418,
"repoUrl": "https://github.com/MobiusQuant/OpenMobius-skill",
"aliases": [
"OpenMobius-skill",
"MobiusQuant",
"OpenMobius-skill",
"skill",
"スキル"
]
},
{
"id": "skill-xwtro0tk1t-cloud-harness-bundled-skills-android-vuln-analyzer",
"priority": 462,
"category": "community",
"type": "skill",
"want": "android-vuln-analyzer",
"feature": "xwtro0tk1t-cloud/harness",
"summary": "Harness is an AI Agent development guardrail Meta-Skill that establishes four layers of defense for any project in one command: knowledge management, architecture constraints, feedback loops, and entropy management.",
"trigger": "",
"commands": [
"npx skills add xwtro0tk1t-cloud/harness@android-vuln-analyzer -g"
],
"install": "npx skills add xwtro0tk1t-cloud/harness@android-vuln-analyzer -g",
"stars": 320,
"repoUrl": "https://github.com/xwtro0tk1t-cloud/harness",
"aliases": [
"android-vuln-analyzer",
"xwtro0tk1t-cloud",
"android-vuln-analyzer",
"skill",
"スキル"
]
},
{
"id": "skill-xwtro0tk1t-cloud-harness-bundled-skills-design-review",
"priority": 463,
"category": "community",
"type": "skill",
"want": "design-review",
"feature": "xwtro0tk1t-cloud/harness",
"summary": "Dispatch an independent challenger agent to adversarially review a spec or implementation\nplan against the actual codebase. Catches hallucinated APIs, wrong field names, nonexistent\nfiles, and incorrect assumptions. Two modes: (1) spec review — verifies DB model fields,\nAPI paths, config attributes, file paths referenced in a design spec, (2) plan review —\nverifies imports, function signatures, constructor args, file paths in an implementation plan.\nUse after brainstorming produces a spec, or after writing-plans produces a plan, before execution.",
"trigger": "Triggers: \"review the spec\", \"review the plan\", \"challenge this\", \"check for hallucinations\",\n\"design review\", \"spec review\", \"plan review\", \"/design-review\".",
"commands": [
"npx skills add xwtro0tk1t-cloud/harness@design-review -g"
],
"install": "npx skills add xwtro0tk1t-cloud/harness@design-review -g",
"stars": 320,
"repoUrl": "https://github.com/xwtro0tk1t-cloud/harness",
"aliases": [
"design-review",
"xwtro0tk1t-cloud",
"design-review",
"skill",
"スキル"
]
},
{
"id": "skill-xwtro0tk1t-cloud-harness-bundled-skills-explore",
"priority": 464,
"category": "community",
"type": "skill",
"want": "explore",
"feature": "xwtro0tk1t-cloud/harness",
"summary": "Graph-driven project understanding using code-review-graph (CRG). Query architecture,\nmodules, callers/callees, impact radius, hotspots, execution flows, and search nodes.",
"trigger": "Use when: (1) brainstorming and need to understand project structure, (2) writing plans\nand need impact analysis, (3) user says \"understand this project\", \"how does this module\nwork\", \"impact analysis\", \"/explore\", (4) reviewing code changes and need blast radius.\nRequires .code-review-graph/graph.db — run /graph build first if missing.",
"commands": [
"npx skills add xwtro0tk1t-cloud/harness@explore -g"
],
"install": "npx skills add xwtro0tk1t-cloud/harness@explore -g",
"stars": 320,
"repoUrl": "https://github.com/xwtro0tk1t-cloud/harness",
"aliases": [
"explore",
"xwtro0tk1t-cloud",
"explore",
"skill",
"スキル"
]
},
{
"id": "skill-xwtro0tk1t-cloud-harness-bundled-skills-graph",
"priority": 465,
"category": "community",
"type": "skill",
"want": "graph",
"feature": "xwtro0tk1t-cloud/harness",
"summary": "Manage code knowledge graphs via code-review-graph (CRG). Build, update, and check status\nof project code graphs stored in .code-review-graph/graph.db.",
"trigger": "Use when: (1) user says\n\"build graph\", \"update graph\", \"graph status\", \"/graph\", (2) Harness init detects CRG,\n(3) preparing to use /explore commands. Gracefully degrades if CRG is not installed.",
"commands": [
"npx skills add xwtro0tk1t-cloud/harness@graph -g"
],
"install": "npx skills add xwtro0tk1t-cloud/harness@graph -g",
"stars": 320,
"repoUrl": "https://github.com/xwtro0tk1t-cloud/harness",
"aliases": [
"graph",
"xwtro0tk1t-cloud",
"graph",
"skill",
"スキル"
]
},
{
"id": "skill-xwtro0tk1t-cloud-harness-harness",
"priority": 466,
"category": "community",
"type": "skill",
"want": "harness",
"feature": "xwtro0tk1t-cloud/harness",
"summary": "Harness is an AI Agent development guardrail Meta-Skill that establishes four layers of defense for any project in one command: knowledge management, architecture constraints, feedback loops, and entropy management.",
"trigger": "",
"commands": [
"npx skills add xwtro0tk1t-cloud/harness@harness -g"
],
"install": "npx skills add xwtro0tk1t-cloud/harness@harness -g",
"stars": 320,
"repoUrl": "https://github.com/xwtro0tk1t-cloud/harness",
"aliases": [
"harness",
"xwtro0tk1t-cloud",
"harness",
"skill",
"スキル"
]
},
{
"id": "skill-xwtro0tk1t-cloud-harness-bundled-skills-harness-audit",
"priority": 467,
"category": "community",
"type": "skill",
"want": "harness-audit",
"feature": "xwtro0tk1t-cloud/harness",
"summary": "Harness is an AI Agent development guardrail Meta-Skill that establishes four layers of defense for any project in one command: knowledge management, architecture constraints, feedback loops, and entropy management.",
"trigger": "",
"commands": [
"npx skills add xwtro0tk1t-cloud/harness@harness-audit -g"
],
"install": "npx skills add xwtro0tk1t-cloud/harness@harness-audit -g",
"stars": 320,
"repoUrl": "https://github.com/xwtro0tk1t-cloud/harness",
"aliases": [
"harness-audit",
"xwtro0tk1t-cloud",
"harness-audit",
"skill",
"スキル"
]
},
{
"id": "skill-xwtro0tk1t-cloud-harness-bundled-skills-harness-cleanup",
"priority": 468,
"category": "community",
"type": "skill",
"want": "harness-cleanup",
"feature": "xwtro0tk1t-cloud/harness",
"summary": "Harness is an AI Agent development guardrail Meta-Skill that establishes four layers of defense for any project in one command: knowledge management, architecture constraints, feedback loops, and entropy management.",
"trigger": "",
"commands": [
"npx skills add xwtro0tk1t-cloud/harness@harness-cleanup -g"
],
"install": "npx skills add xwtro0tk1t-cloud/harness@harness-cleanup -g",
"stars": 320,
"repoUrl": "https://github.com/xwtro0tk1t-cloud/harness",
"aliases": [
"harness-cleanup",
"xwtro0tk1t-cloud",
"harness-cleanup",
"skill",
"スキル"
]
},
{
"id": "skill-xwtro0tk1t-cloud-harness-bundled-skills-harness-guide",
"priority": 469,
"category": "community",
"type": "skill",
"want": "harness-guide",
"feature": "xwtro0tk1t-cloud/harness",
"summary": "Harness is an AI Agent development guardrail Meta-Skill that establishes four layers of defense for any project in one command: knowledge management, architecture constraints, feedback loops, and entropy management.",
"trigger": "",
"commands": [
"npx skills add xwtro0tk1t-cloud/harness@harness-guide -g"
],
"install": "npx skills add xwtro0tk1t-cloud/harness@harness-guide -g",
"stars": 320,
"repoUrl": "https://github.com/xwtro0tk1t-cloud/harness",
"aliases": [
"harness-guide",
"xwtro0tk1t-cloud",
"harness-guide",
"skill",
"スキル"
]
},
{
"id": "skill-claw-bench-claw-bench-leaderboard-public",
"priority": 470,
"category": "community",
"type": "skill",
"want": "claw-bench",
"feature": "claw-bench/claw-bench",
"summary": "Claw Bench — AI Agent Capability Test. Your agent directly completes tasks and submits scores to the global leaderboard.",
"trigger": "",
"commands": [
"npx skills add claw-bench/claw-bench@public -g"
],
"install": "npx skills add claw-bench/claw-bench@public -g",
"stars": 179,
"repoUrl": "https://github.com/claw-bench/claw-bench",
"aliases": [
"public",
"claw-bench",
"claw-bench",
"skill",
"スキル"
]
},
{
"id": "skill-claw-bench-claw-bench-skills",
"priority": 471,
"category": "community",
"type": "skill",
"want": "claw-bench",
"feature": "claw-bench/claw-bench",
"summary": "Claw Bench — AI Agent Capability Test. Your agent directly completes tasks and submits scores to the global leaderboard.",
"trigger": "",
"commands": [
"npx skills add claw-bench/claw-bench@skills -g"
],
"install": "npx skills add claw-bench/claw-bench@skills -g",
"stars": 179,
"repoUrl": "https://github.com/claw-bench/claw-bench",
"aliases": [
"skills",
"claw-bench",
"claw-bench",
"skill",
"スキル"
]
},
{
"id": "skill-spillwavesolutions-sdd-skill-sdd-skill",
"priority": 472,
"category": "community",
"type": "skill",
"want": "sdd",
"feature": "SpillwaveSolutions/sdd-skill",
"summary": "This skill should be used when users want guidance on Spec-Driven Development methodology using GitHub's Spec-Kit. Guide users through executable specification workflows for both new projects (greenfield) and existing codebases (brownfield). After any SDD command generates artifacts, automatically provide structured 10-point summaries with feature status tracking, enabling natural language feature management and keeping users engaged throughout the process.",
"trigger": "This skill should be used when users want guidance on Spec-Driven Development methodology using GitHub's Spec-Kit. Guide users through executable specification workflows for both new projects (greenfield) and existing codebases (brownfield). After any SDD command generates artifacts, automatically provide structured 10-point summaries with feature status tracking, enabling natural language feature management and keeping users engaged throughout the process.",
"commands": [
"npx skills add SpillwaveSolutions/sdd-skill -g"
],
"install": "npx skills add SpillwaveSolutions/sdd-skill -g",
"stars": 85,
"repoUrl": "https://github.com/SpillwaveSolutions/sdd-skill",
"aliases": [
"sdd-skill",
"SpillwaveSolutions",
"sdd",
"skill",
"スキル"
]
},
{
"id": "skill-taishan1994-agent-handbook-mini-agents-mini_agents-skills-data-analysis",
"priority": 473,
"category": "community",
"type": "skill",
"want": "data-analysis",
"feature": "taishan1994/Agent-Handbook",
"summary": "Skill for data analysis and visualization using Python",
"trigger": "",
"commands": [
"npx skills add taishan1994/Agent-Handbook@data-analysis -g"
],
"install": "npx skills add taishan1994/Agent-Handbook@data-analysis -g",
"stars": 28,
"repoUrl": "https://github.com/taishan1994/Agent-Handbook",
"aliases": [
"data-analysis",
"taishan1994",
"data-analysis",
"skill",
"スキル"
]
},
{
"id": "skill-taishan1994-agent-handbook-mini-agents-mini_agents-skills-example-skill",
"priority": 474,
"category": "community",
"type": "skill",
"want": "example-skill",
"feature": "taishan1994/Agent-Handbook",
"summary": "An example skill demonstrating how to use the skill system",
"trigger": "",
"commands": [
"npx skills add taishan1994/Agent-Handbook@example-skill -g"
],
"install": "npx skills add taishan1994/Agent-Handbook@example-skill -g",
"stars": 28,
"repoUrl": "https://github.com/taishan1994/Agent-Handbook",
"aliases": [
"example-skill",
"taishan1994",
"example-skill",
"skill",
"スキル"
]
},
{
"id": "skill-taishan1994-agent-handbook-mini-agents-mini_agents-skills-document-skills-pdf",
"priority": 475,
"category": "community",
"type": "skill",
"want": "pdf-processing",
"feature": "taishan1994/Agent-Handbook",
"summary": "Skill for processing and extracting content from PDF files",
"trigger": "",
"commands": [
"npx skills add taishan1994/Agent-Handbook@pdf -g"
],
"install": "npx skills add taishan1994/Agent-Handbook@pdf -g",
"stars": 28,
"repoUrl": "https://github.com/taishan1994/Agent-Handbook",
"aliases": [
"pdf",
"taishan1994",
"pdf-processing",
"skill",
"スキル"
]
},
{
"id": "skill-horiacristescu-nub-skills",
"priority": 476,
"category": "community",
"type": "skill",
"want": "nub",
"feature": "horiacristescu/nub",
"summary": "Use when exploring content too large for normal tools: files >10K chars, folders with many files, large logs, codebases. Teaches LoD (level of detail) patterns for progressive navigation.",
"trigger": "Use when exploring content too large for normal tools: files >10K chars, folders with many files, large logs, codebases. Teaches LoD (level of detail) patterns for progressive navigation.",
"commands": [
"npx skills add horiacristescu/nub -g"
],
"install": "npx skills add horiacristescu/nub -g",
"stars": 27,
"repoUrl": "https://github.com/horiacristescu/nub",
"aliases": [
"skills",
"horiacristescu",
"nub",
"skill",
"スキル"
]
},
{
"id": "skill-yeet-src-yeet-scripts-yeet-scripts",
"priority": 477,
"category": "community",
"type": "skill",
"want": "yeet-scripts",
"feature": "yeet-src/yeet-scripts",
"summary": "Use when writing, editing, or debugging yeet scripts — JavaScript files run by the `yeet` daemon as real-time observability tools. Triggers include filenames under an `examples/<name>/{data,render,dump}.js` layout, any `.js` that calls `yeet.graph.query` / `yeet.graph.subscribe`, imports from `./data.js` with a `watch()` export, or invocations like `yeet run path/to/script.js`. Skip for ordinary Node/Deno/browser JS — the runtime is none of those.",
"trigger": "Use when writing, editing, or debugging yeet scripts — JavaScript files run by the `yeet` daemon as real-time observability tools. Triggers include filenames under an `examples/<name>/{data,render,dump}.js` layout, any `.js` that calls `yeet.graph.query` / `yeet.graph.subscribe`, imports from `./data.js` with a `watch()` export, or invocations like `yeet run path/to/script.js`. Skip for ordinary Node/Deno/browser JS — the runtime is none of those.",
"commands": [
"npx skills add yeet-src/yeet-scripts -g"
],
"install": "npx skills add yeet-src/yeet-scripts -g",
"stars": 7,
"repoUrl": "https://github.com/yeet-src/yeet-scripts",
"aliases": [
"yeet-scripts",
"yeet-src",
"yeet-scripts",
"skill",
"スキル"
]
},
{
"id": "skill-nicoaspace-seo-copywriting-agents-skills-copywriting-redactor",
"priority": 478,
"category": "community",
"type": "skill",
"want": "copywriting-redactor",
"feature": "nicoaspace/seo-copywriting-agents",
"summary": "Skill for copywriting agents. Use it ALWAYS when the agent needs to produce a copy draft for any type of web page or marketing content. It takes as input the output of the Research Agent (brand DNA, buyer persona, keywords, value proposition, competition) and produces a structured, humanized, and SEO-optimized draft. It applies the correct copywriting techniques based on the page type (Landing/Sales, Home, About, Blog, Product, Pricing, Service, Category, Case Study, FAQ) and the funnel stage (TOFU / MOFU / BOFU). The skill automatically determines which techniques to use and how to structure the content. The resulting draft is ready to be evaluated by a QA agent.",
"trigger": "",
"commands": [
"npx skills add nicoaspace/seo-copywriting-agents -g"
],
"install": "npx skills add nicoaspace/seo-copywriting-agents -g",
"stars": 1,
"repoUrl": "https://github.com/nicoaspace/seo-copywriting-agents",
"aliases": [
"copywriting-redactor",
"nicoaspace",
"copywriting-redactor",
"skill",
"スキル"
]
},
{
"id": "skill-ry071702-prog-web-design-playbook-skills-web-design-playbook",
"priority": 479,
"category": "community",
"type": "skill",
"want": "web-design-playbook",
"feature": "ry071702-prog/web-design-playbook",
"summary": "Webサイト/LP/HTMLモックのデザイン実装ワークフロー  新規作成・リデザイン・「おしゃれにして」等のデザイン依頼で使用し、参照レイヤー→方向決め→実装→実機検証→学びの還元 の型を強制する  ユーザーが「このサイトいいな/参考にして」とURLを共有したときの参考サイト蓄積にも使用.",
"trigger": "Use when building or redesigning websites, landing pages, or HTML mockups, or when the user shares a website they like",
"commands": [
"npx skills add ry071702-prog/web-design-playbook -g"
],
"install": "npx skills add ry071702-prog/web-design-playbook -g",
"stars": 0,
"repoUrl": "https://github.com/ry071702-prog/web-design-playbook",
"aliases": [
"web-design-playbook",
"ry071702-prog",
"web-design-playbook",
"skill",
"スキル"
]
},
{
"id": "skill-zinojeng-cgm_skill-cgm_skill",
"priority": 480,
"category": "community",
"type": "skill",
"want": "cgm-analyzer",
"feature": "zinojeng/cgm_skill",
"summary": "Analyzes continuous glucose monitor CSV data, calculates TIR/TAR/TBR metrics, generates AGP charts, and provides AI-powered diabetes management recommendations. Handles Dexcom, FreeStyle Libre, Guardian formats.",
"trigger": "",
"commands": [
"npx skills add zinojeng/cgm_skill -g"
],
"install": "npx skills add zinojeng/cgm_skill -g",
"stars": 0,
"repoUrl": "https://github.com/zinojeng/cgm_skill",
"aliases": [
"cgm_skill",
"zinojeng",
"cgm-analyzer",
"skill",
"スキル"
]
},
{
"id": "skill-kilimcininkoroglu-hermeswhois-mcp-server-hermeswhois-mcp-server",
"priority": 481,
"category": "community",
"type": "skill",
"want": "hermeswhois-mcp-server",
"feature": "KilimcininKorOglu/hermeswhois-mcp-server",
"summary": "Model Context Protocol (MCP) sunucusu - HermesWhois servisi üzerinden domain WHOIS ve SSL sertifika bilgilerini sorgulama aracı.",
"trigger": "",
"commands": [
"npx skills add KilimcininKorOglu/hermeswhois-mcp-server -g"
],
"install": "npx skills add KilimcininKorOglu/hermeswhois-mcp-server -g",
"stars": 0,
"repoUrl": "https://github.com/KilimcininKorOglu/hermeswhois-mcp-server",
"aliases": [
"hermeswhois-mcp-server",
"KilimcininKorOglu",
"hermeswhois-mcp-server",
"skill",
"スキル"
]
},
{
"id": "skill-gil-air-may-scribe-scribe",
"priority": 482,
"category": "community",
"type": "skill",
"want": "scribe",
"feature": "gil-air-may/scribe",
"summary": "Turns chaotic AI coding sessions into structured, searchable documentation",
"trigger": "",
"commands": [
"npx skills add gil-air-may/scribe -g"
],
"install": "npx skills add gil-air-may/scribe -g",
"stars": 0,
"repoUrl": "https://github.com/gil-air-may/scribe",
"aliases": [
"scribe",
"gil-air-may",
"scribe",
"skill",
"スキル"
]
},
{
"id": "skill-ryan-lingle-claude-worktrees-claude-worktrees",
"priority": 483,
"category": "community",
"type": "skill",
"want": "worktree",
"feature": "ryan-lingle/claude-worktrees",
"summary": "Manage git worktrees for parallel Claude Code sessions. Create, list, navigate, and remove worktrees with automatic port allocation for local native development.",
"trigger": "",
"commands": [
"npx skills add ryan-lingle/claude-worktrees -g"
],
"install": "npx skills add ryan-lingle/claude-worktrees -g",
"stars": 0,
"repoUrl": "https://github.com/ryan-lingle/claude-worktrees",
"aliases": [
"claude-worktrees",
"ryan-lingle",
"worktree",
"skill",
"スキル"
]
},
{
"id": "skill-sam-ayyy15-realtime-inventory-sync-engine-skills",
"priority": 484,
"category": "community",
"type": "skill",
"want": "data-engineer",
"feature": "sam-ayyy15/realtime-inventory-sync-engine",
"summary": "Data engineering agent for ETL pipelines, data warehousing, and analytics",
"trigger": "",
"commands": [
"npx skills add sam-ayyy15/realtime-inventory-sync-engine -g"
],
"install": "npx skills add sam-ayyy15/realtime-inventory-sync-engine -g",
"stars": 0,
"repoUrl": "https://github.com/sam-ayyy15/realtime-inventory-sync-engine",
"aliases": [
"SKILLS",
"sam-ayyy15",
"data-engineer",
"skill",
"スキル"
]
},
{
"id": "skill-alejandro05-afk-fitnes_tracker-skills",
"priority": 485,
"category": "community",
"type": "skill",
"want": "fall-activity-voice-detector",
"feature": "Alejandro05-afk/fitnes_tracker",
"summary": "Implementa el \"Mega Reto: Detector de actividad física con aviso por voz\" sobre el proyecto Flutter fitness_tracker (Clean Architecture + Vertical Slicing). Cubre detección continua de caminar/correr/quieto y de caídas usando sensors_plus (acelerómetro crudo), avisos por voz con flutter_tts, debounce de estado estable, diálogo de confirmación de caída con reintento a los 15s, permisos en runtime y AndroidManifest. Usa esta skill siempre que el usuario mencione \"detector de actividad\", \"detección de caídas\", \"fall detection\", \"aviso por voz\", \"flutter_tts\", \"sensors_plus\", \"activity_recognition_flutter\", \"debounce de sensores\", o pida ampliar fitness_tracker con reconocimiento de actividad/caídas. NO modifica la lógica de Platform Channels ya existente (biometría, contador de pasos, GPS) — se integra en paralelo como feature nueva.",
"trigger": "",
"commands": [
"npx skills add Alejandro05-afk/fitnes_tracker@Skills -g"
],
"install": "npx skills add Alejandro05-afk/fitnes_tracker@Skills -g",
"stars": 0,
"repoUrl": "https://github.com/Alejandro05-afk/fitnes_tracker",
"aliases": [
"Skills",
"Alejandro05-afk",
"fall-activity-voice-detector",
"skill",
"スキル"
]
},
{
"id": "skill-alejandro05-afk-fitnes_tracker-skills-deber",
"priority": 486,
"category": "community",
"type": "skill",
"want": "fitness-tracker-plugin-crud",
"feature": "Alejandro05-afk/fitnes_tracker",
"summary": "Skill para el proyecto Flutter `fitness_tracker` con Clean Architecture + Vertical Slicing + flutter_bloc + get_it. Úsala SIEMPRE que el usuario pida: - Migrar Platform Channels a plugins (local_auth, geolocator, sensors_plus) - Eliminar código nativo de MainActivity.kt / AppDelegate.swift - Añadir o mejorar el CRUD del historial de actividad física - Registrar datasources, repositorios o BLoCs en get_it para las features auth, tracking,\n  activity_detection o activity_history\n- Agregar persistencia local (sqlite, sqflite, hive, shared_preferences) al registro histórico - Cualquier modificación en biometric_datasource.dart, gps_datasource.dart,\n  accelerometer_datasource.dart, motion_sensor_datasource.dart o injection_container.dart",
"trigger": "",
"commands": [
"npx skills add Alejandro05-afk/fitnes_tracker@deber -g"
],
"install": "npx skills add Alejandro05-afk/fitnes_tracker@deber -g",
"stars": 0,
"repoUrl": "https://github.com/Alejandro05-afk/fitnes_tracker",
"aliases": [
"deber",
"Alejandro05-afk",
"fitness-tracker-plugin-crud",
"skill",
"スキル"
]
},
{
"id": "skill-minhyeokyang-llm_hw-skills",
"priority": 487,
"category": "community",
"type": "skill",
"want": "skills",
"feature": "MinHyeokYang/LLM_HW",
"summary": "과제",
"trigger": "",
"commands": [
"npx skills add MinHyeokYang/LLM_HW -g"
],
"install": "npx skills add MinHyeokYang/LLM_HW -g",
"stars": 0,
"repoUrl": "https://github.com/MinHyeokYang/LLM_HW",
"aliases": [
"skills",
"MinHyeokYang",
"skills",
"skill",
"スキル"
]
}
];
