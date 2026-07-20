// 生成物: scripts/build_data.py が skills.jsonl + overrides.ja.json から作成。手で編集しない。
// GitHub の Claude Code Skills を非LLMで取り込み、日本語化 39/120 件（週次 ingest-skills.yml）。
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
"stars": 162944,
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
"stars": 162944,
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
"stars": 162944,
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
"stars": 162944,
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
"stars": 162944,
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
"stars": 162944,
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
"stars": 162944,
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
"stars": 162944,
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
"stars": 162944,
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
"stars": 162944,
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
"stars": 162944,
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
"stars": 162944,
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
"stars": 162944,
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
"stars": 162944,
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
"stars": 162944,
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
"stars": 162944,
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
"stars": 162944,
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
"id": "skill-ruvnet-ruflo-.agents-skills-agent-adaptive-coordinator",
"priority": 417,
"category": "community",
"type": "skill",
"want": "agent-adaptive-coordinator",
"feature": "ruvnet/ruflo",
"summary": "Agent skill for adaptive-coordinator - invoke with $agent-adaptive-coordinator",
"trigger": "",
"commands": [
"npx skills add ruvnet/ruflo@agent-adaptive-coordinator -g"
],
"install": "npx skills add ruvnet/ruflo@agent-adaptive-coordinator -g",
"stars": 65315,
"repoUrl": "https://github.com/ruvnet/ruflo",
"aliases": [
"agent-adaptive-coordinator",
"ruvnet",
"agent-adaptive-coordinator",
"skill",
"スキル"
]
},
{
"id": "skill-ruvnet-ruflo-.agents-skills-agent-agent",
"priority": 418,
"category": "community",
"type": "skill",
"want": "agent-agent",
"feature": "ruvnet/ruflo",
"summary": "Agent skill for agent - invoke with $agent-agent",
"trigger": "",
"commands": [
"npx skills add ruvnet/ruflo@agent-agent -g"
],
"install": "npx skills add ruvnet/ruflo@agent-agent -g",
"stars": 65315,
"repoUrl": "https://github.com/ruvnet/ruflo",
"aliases": [
"agent-agent",
"ruvnet",
"agent-agent",
"skill",
"スキル"
]
},
{
"id": "skill-ruvnet-ruflo-.agents-skills-agent-agentic-payments",
"priority": 419,
"category": "community",
"type": "skill",
"want": "agent-agentic-payments",
"feature": "ruvnet/ruflo",
"summary": "Agent skill for agentic-payments - invoke with $agent-agentic-payments",
"trigger": "",
"commands": [
"npx skills add ruvnet/ruflo@agent-agentic-payments -g"
],
"install": "npx skills add ruvnet/ruflo@agent-agentic-payments -g",
"stars": 65315,
"repoUrl": "https://github.com/ruvnet/ruflo",
"aliases": [
"agent-agentic-payments",
"ruvnet",
"agent-agentic-payments",
"skill",
"スキル"
]
},
{
"id": "skill-ruvnet-ruflo-.agents-skills-agent-analyze-code-quality",
"priority": 420,
"category": "community",
"type": "skill",
"want": "agent-analyze-code-quality",
"feature": "ruvnet/ruflo",
"summary": "Agent skill for analyze-code-quality - invoke with $agent-analyze-code-quality",
"trigger": "",
"commands": [
"npx skills add ruvnet/ruflo@agent-analyze-code-quality -g"
],
"install": "npx skills add ruvnet/ruflo@agent-analyze-code-quality -g",
"stars": 65315,
"repoUrl": "https://github.com/ruvnet/ruflo",
"aliases": [
"agent-analyze-code-quality",
"ruvnet",
"agent-analyze-code-quality",
"skill",
"スキル"
]
},
{
"id": "skill-ruvnet-ruflo-.agents-skills-agent-app-store",
"priority": 421,
"category": "community",
"type": "skill",
"want": "agent-app-store",
"feature": "ruvnet/ruflo",
"summary": "Agent skill for app-store - invoke with $agent-app-store",
"trigger": "",
"commands": [
"npx skills add ruvnet/ruflo@agent-app-store -g"
],
"install": "npx skills add ruvnet/ruflo@agent-app-store -g",
"stars": 65315,
"repoUrl": "https://github.com/ruvnet/ruflo",
"aliases": [
"agent-app-store",
"ruvnet",
"agent-app-store",
"skill",
"スキル"
]
},
{
"id": "skill-ruvnet-ruflo-.agents-skills-agent-arch-system-design",
"priority": 422,
"category": "community",
"type": "skill",
"want": "agent-arch-system-design",
"feature": "ruvnet/ruflo",
"summary": "Agent skill for arch-system-design - invoke with $agent-arch-system-design",
"trigger": "",
"commands": [
"npx skills add ruvnet/ruflo@agent-arch-system-design -g"
],
"install": "npx skills add ruvnet/ruflo@agent-arch-system-design -g",
"stars": 65315,
"repoUrl": "https://github.com/ruvnet/ruflo",
"aliases": [
"agent-arch-system-design",
"ruvnet",
"agent-arch-system-design",
"skill",
"スキル"
]
},
{
"id": "skill-ruvnet-ruflo-.agents-skills-agent-architecture",
"priority": 423,
"category": "community",
"type": "skill",
"want": "agent-architecture",
"feature": "ruvnet/ruflo",
"summary": "Agent skill for architecture - invoke with $agent-architecture",
"trigger": "",
"commands": [
"npx skills add ruvnet/ruflo@agent-architecture -g"
],
"install": "npx skills add ruvnet/ruflo@agent-architecture -g",
"stars": 65315,
"repoUrl": "https://github.com/ruvnet/ruflo",
"aliases": [
"agent-architecture",
"ruvnet",
"agent-architecture",
"skill",
"スキル"
]
},
{
"id": "skill-ruvnet-ruflo-.agents-skills-agent-authentication",
"priority": 424,
"category": "community",
"type": "skill",
"want": "agent-authentication",
"feature": "ruvnet/ruflo",
"summary": "Agent skill for authentication - invoke with $agent-authentication",
"trigger": "",
"commands": [
"npx skills add ruvnet/ruflo@agent-authentication -g"
],
"install": "npx skills add ruvnet/ruflo@agent-authentication -g",
"stars": 65315,
"repoUrl": "https://github.com/ruvnet/ruflo",
"aliases": [
"agent-authentication",
"ruvnet",
"agent-authentication",
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
"stars": 37438,
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
"stars": 37438,
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
"stars": 37438,
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
"stars": 37438,
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
"id": "skill-vercel-labs-agent-skills-skills-deploy-to-vercel",
"priority": 429,
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
"stars": 29253,
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
"priority": 430,
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
"stars": 29253,
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
"priority": 431,
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
"stars": 29253,
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
"priority": 432,
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
"stars": 29253,
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
"priority": 433,
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
"stars": 29253,
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
"priority": 434,
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
"stars": 29253,
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
"priority": 435,
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
"stars": 29253,
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
"priority": 436,
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
"stars": 29253,
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
"priority": 437,
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
"stars": 29253,
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
"priority": 438,
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
"stars": 27606,
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
"id": "skill-teng-lin-notebooklm-py-notebooklm-py",
"priority": 439,
"category": "community",
"type": "skill",
"want": "notebooklm",
"feature": "teng-lin/notebooklm-py",
"summary": "Complete API for Google NotebookLM - full programmatic access including features not in the web UI. Create notebooks, add sources, generate all artifact types, download in multiple formats. Activates on explicit /notebooklm or intent like \"create a podcast about X\"",
"trigger": "",
"commands": [
"npx skills add teng-lin/notebooklm-py -g"
],
"install": "npx skills add teng-lin/notebooklm-py -g",
"stars": 18005,
"repoUrl": "https://github.com/teng-lin/notebooklm-py",
"aliases": [
"notebooklm-py",
"teng-lin",
"notebooklm",
"skill",
"スキル"
]
},
{
"id": "skill-weifeng2333-videocaptioner-skills",
"priority": 440,
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
"stars": 15376,
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
"stars": 8151,
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
"stars": 8151,
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
"id": "skill-kaggle-kaggle-cli-skills",
"priority": 443,
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
"stars": 7459,
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
"id": "skill-builderz-labs-mission-control-mission-control",
"priority": 444,
"category": "community",
"type": "skill",
"want": "mission-control",
"feature": "builderz-labs/mission-control",
"summary": "Interact with Mission Control — AI agent orchestration dashboard.",
"trigger": "Use when registering agents, managing tasks, syncing skills, or querying agent/task status via MC APIs.",
"commands": [
"npx skills add builderz-labs/mission-control -g"
],
"install": "npx skills add builderz-labs/mission-control -g",
"stars": 5796,
"repoUrl": "https://github.com/builderz-labs/mission-control",
"aliases": [
"mission-control",
"builderz-labs",
"mission-control",
"skill",
"スキル"
]
},
{
"id": "skill-vyperlang-vyper-skills",
"priority": 445,
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
"stars": 5174,
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
"id": "skill-op7418-claude-to-im-skill-claude-to-im-skill",
"priority": 446,
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
"stars": 2824,
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
"id": "skill-foryourhealth111-pixel-vibe-skills-bundled-skills-adaptyv",
"priority": 447,
"category": "community",
"type": "skill",
"want": "adaptyv",
"feature": "foryourhealth111-pixel/Vibe-Skills",
"summary": "Cloud laboratory platform for automated protein testing and validation.",
"trigger": "Use when designing proteins and needing experimental validation including binding assays, expression testing, thermostability measurements, enzyme activity assays, or protein sequence optimization. Also use for submitting experiments via API, tracking experiment status, downloading results, optimizing protein sequences for better expression using computational tools (NetSolP, SoluProt, SolubleMPNN, ESM), or managing protein design workflows with wet-lab validation.",
"commands": [
"npx skills add foryourhealth111-pixel/Vibe-Skills@adaptyv -g"
],
"install": "npx skills add foryourhealth111-pixel/Vibe-Skills@adaptyv -g",
"stars": 2405,
"repoUrl": "https://github.com/foryourhealth111-pixel/Vibe-Skills",
"aliases": [
"adaptyv",
"foryourhealth111-pixel",
"adaptyv",
"skill",
"スキル"
]
},
{
"id": "skill-foryourhealth111-pixel-vibe-skills-bundled-skills-aeon",
"priority": 448,
"category": "community",
"type": "skill",
"want": "aeon",
"feature": "foryourhealth111-pixel/Vibe-Skills",
"summary": "This skill should be used for time series machine learning tasks including classification, regression, clustering, forecasting, anomaly detection, segmentation, and similarity search.",
"trigger": "Use when working with temporal data, sequential patterns, or time-indexed observations requiring specialized algorithms beyond standard ML approaches. Particularly suited for univariate and multivariate time series analysis with scikit-learn compatible APIs.",
"commands": [
"npx skills add foryourhealth111-pixel/Vibe-Skills@aeon -g"
],
"install": "npx skills add foryourhealth111-pixel/Vibe-Skills@aeon -g",
"stars": 2405,
"repoUrl": "https://github.com/foryourhealth111-pixel/Vibe-Skills",
"aliases": [
"aeon",
"foryourhealth111-pixel",
"aeon",
"skill",
"スキル"
]
},
{
"id": "skill-foryourhealth111-pixel-vibe-skills-bundled-skills-algorithmic-art",
"priority": 449,
"category": "community",
"type": "skill",
"want": "algorithmic-art",
"feature": "foryourhealth111-pixel/Vibe-Skills",
"summary": "Creating algorithmic art using p5.js with seeded randomness and interactive parameter exploration.",
"trigger": "Use this when users request creating art using code, generative art, algorithmic art, flow fields, or particle systems. Create original algorithmic art rather than copying existing artists' work to avoid copyright violations.",
"commands": [
"npx skills add foryourhealth111-pixel/Vibe-Skills@algorithmic-art -g"
],
"install": "npx skills add foryourhealth111-pixel/Vibe-Skills@algorithmic-art -g",
"stars": 2405,
"repoUrl": "https://github.com/foryourhealth111-pixel/Vibe-Skills",
"aliases": [
"algorithmic-art",
"foryourhealth111-pixel",
"algorithmic-art",
"skill",
"スキル"
]
},
{
"id": "skill-foryourhealth111-pixel-vibe-skills-bundled-skills-alpha-vantage",
"priority": 450,
"category": "community",
"type": "skill",
"want": "alpha-vantage",
"feature": "foryourhealth111-pixel/Vibe-Skills",
"summary": "Access real-time and historical stock market data, forex rates, cryptocurrency prices, commodities, economic indicators, and 50+ technical indicators via the Alpha Vantage API.",
"trigger": "Use when fetching stock prices (OHLCV), company fundamentals (income statement, balance sheet, cash flow), earnings, options data, market news/sentiment, insider transactions, GDP, CPI, treasury yields, gold/silver/oil prices, Bitcoin/crypto prices, forex exchange rates, or calculating technical indicators (SMA, EMA, MACD, RSI, Bollinger Bands). Requires a free API key from alphavantage.co.",
"commands": [
"npx skills add foryourhealth111-pixel/Vibe-Skills@alpha-vantage -g"
],
"install": "npx skills add foryourhealth111-pixel/Vibe-Skills@alpha-vantage -g",
"stars": 2405,
"repoUrl": "https://github.com/foryourhealth111-pixel/Vibe-Skills",
"aliases": [
"alpha-vantage",
"foryourhealth111-pixel",
"alpha-vantage",
"skill",
"スキル"
]
},
{
"id": "skill-foryourhealth111-pixel-vibe-skills-bundled-skills-lqf_machine_learning_expert_guide",
"priority": 451,
"category": "community",
"type": "skill",
"want": "LQF_Machine_Learning_Expert_Guide",
"feature": "foryourhealth111-pixel/Vibe-Skills",
"summary": "LQF Machine Learning Expert Guide - Routed skill for ML/Statistical Modeling with Critical Discussion Mode.\nTriggers on: machine learning, modeling, prediction, training, classification, regression, clustering, deep learning, neural network, model evaluation, feature engineering, hyperparameter tuning, overfitting, underfitting, baseline, ablation study, critique my approach, review my model, is this a good idea, should I use, what's wrong with, evaluate my solution, challenge my assumptions, discuss my approach\nEngages in critical discussion with minimum 3 rounds of iterative refinement. Challenges both user proposals and own suggestions with fact-based critique. Demands evidence and baselines before accepting solutions.",
"trigger": "",
"commands": [
"npx skills add foryourhealth111-pixel/Vibe-Skills@LQF_Machine_Learning_Expert_Guide -g"
],
"install": "npx skills add foryourhealth111-pixel/Vibe-Skills@LQF_Machine_Learning_Expert_Guide -g",
"stars": 2405,
"repoUrl": "https://github.com/foryourhealth111-pixel/Vibe-Skills",
"aliases": [
"LQF_Machine_Learning_Expert_Guide",
"foryourhealth111-pixel",
"LQF_Machine_Learning_Expert_Guide",
"skill",
"スキル"
]
},
{
"id": "skill-foryourhealth111-pixel-vibe-skills-bundled-skills-.system-skill-creator",
"priority": 452,
"category": "community",
"type": "skill",
"want": "skill-creator",
"feature": "foryourhealth111-pixel/Vibe-Skills",
"summary": "Guide for creating effective skills.",
"trigger": "This skill should be used when users want to create a new skill (or update an existing skill) that extends Codex's capabilities with specialized knowledge, workflows, or tool integrations.",
"commands": [
"npx skills add foryourhealth111-pixel/Vibe-Skills@skill-creator -g"
],
"install": "npx skills add foryourhealth111-pixel/Vibe-Skills@skill-creator -g",
"stars": 2405,
"repoUrl": "https://github.com/foryourhealth111-pixel/Vibe-Skills",
"aliases": [
"skill-creator",
"foryourhealth111-pixel",
"skill-creator",
"skill",
"スキル"
]
},
{
"id": "skill-foryourhealth111-pixel-vibe-skills-bundled-skills-.system-skill-installer",
"priority": 453,
"category": "community",
"type": "skill",
"want": "skill-installer",
"feature": "foryourhealth111-pixel/Vibe-Skills",
"summary": "Install Codex skills into $CODEX_HOME/skills from a curated list or a GitHub repo path.",
"trigger": "Use when a user asks to list installable skills, install a curated skill, or install a skill from another repo (including private repos).",
"commands": [
"npx skills add foryourhealth111-pixel/Vibe-Skills@skill-installer -g"
],
"install": "npx skills add foryourhealth111-pixel/Vibe-Skills@skill-installer -g",
"stars": 2405,
"repoUrl": "https://github.com/foryourhealth111-pixel/Vibe-Skills",
"aliases": [
"skill-installer",
"foryourhealth111-pixel",
"skill-installer",
"skill",
"スキル"
]
},
{
"id": "skill-foryourhealth111-pixel-vibe-skills-vibe-skills",
"priority": 454,
"category": "community",
"type": "skill",
"want": "vibe",
"feature": "foryourhealth111-pixel/Vibe-Skills",
"summary": "Vibe Code Orchestrator (VCO) is a governed runtime entry that freezes requirements, bounds execution, and enforces verification and phase cleanup.",
"trigger": "",
"commands": [
"npx skills add foryourhealth111-pixel/Vibe-Skills@Vibe-Skills -g"
],
"install": "npx skills add foryourhealth111-pixel/Vibe-Skills@Vibe-Skills -g",
"stars": 2405,
"repoUrl": "https://github.com/foryourhealth111-pixel/Vibe-Skills",
"aliases": [
"Vibe-Skills",
"foryourhealth111-pixel",
"vibe",
"skill",
"スキル"
]
},
{
"id": "skill-leilei926524-tech-anti-distill-anti-distill",
"priority": 455,
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
"stars": 2331,
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
"priority": 456,
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
"stars": 1774,
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
"priority": 457,
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
"stars": 1586,
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
"priority": 458,
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
"stars": 1144,
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
"priority": 459,
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
"stars": 960,
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
"priority": 460,
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
"stars": 960,
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
"priority": 461,
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
"stars": 960,
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
"priority": 462,
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
"stars": 960,
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
"priority": 463,
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
"stars": 960,
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
"priority": 464,
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
"stars": 960,
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
"priority": 465,
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
"stars": 960,
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
"priority": 466,
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
"stars": 960,
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
"id": "skill-talesofai-neta-skills-skills-neta",
"priority": 467,
"category": "community",
"type": "skill",
"want": "neta",
"feature": "talesofai/neta-skills",
"summary": "Neta capability index and routing skill - help choose the appropriate Neta-related skill (neta-space / neta-creative / neta-adventure / neta-community / neta-suggest). Use this skill when you need to understand Neta's overall capabilities, decide which skill fits the current task, or migrate from older documentation that referenced the monolithic neta skill.",
"trigger": "",
"commands": [
"npx skills add talesofai/neta-skills@neta -g"
],
"install": "npx skills add talesofai/neta-skills@neta -g",
"stars": 760,
"repoUrl": "https://github.com/talesofai/neta-skills",
"aliases": [
"neta",
"talesofai",
"neta",
"skill",
"スキル"
]
},
{
"id": "skill-talesofai-neta-skills-skills-neta-adventure",
"priority": 468,
"category": "community",
"type": "skill",
"want": "neta-adventure",
"feature": "talesofai/neta-skills",
"summary": "Neta Adventure Campaign skill - Create and play AI-driven interactive story adventures. Adventure campaigns provide story-crafting and story-telling modes where agents act as DM and roleplay characters following plot, rules, and special guidelines.",
"trigger": "",
"commands": [
"npx skills add talesofai/neta-skills@neta-adventure -g"
],
"install": "npx skills add talesofai/neta-skills@neta-adventure -g",
"stars": 760,
"repoUrl": "https://github.com/talesofai/neta-skills",
"aliases": [
"neta-adventure",
"talesofai",
"neta-adventure",
"skill",
"スキル"
]
},
{
"id": "skill-talesofai-neta-skills-skills-neta-character",
"priority": 469,
"category": "community",
"type": "skill",
"want": "neta-character",
"feature": "talesofai/neta-skills",
"summary": "Neta Character Forging Skill - Guides users through creating or updating anime/cultural IP/original character (OC) VTokens (Virtual Tokens, TCP). Includes visual preview, character documentation, backstory confirmation, and complete creative workflow. Use this skill when users want to create new characters, modify existing ones, or begin character design.",
"trigger": "",
"commands": [
"npx skills add talesofai/neta-skills@neta-character -g"
],
"install": "npx skills add talesofai/neta-skills@neta-character -g",
"stars": 760,
"repoUrl": "https://github.com/talesofai/neta-skills",
"aliases": [
"neta-character",
"talesofai",
"neta-character",
"skill",
"スキル"
]
},
{
"id": "skill-talesofai-neta-skills-skills-neta-community",
"priority": 470,
"category": "community",
"type": "skill",
"want": "neta-community",
"feature": "talesofai/neta-skills",
"summary": "Neta API community skill — browse interactive feeds, view collection details, like and interact with content, and browse content by tags and characters in a community context. Use this skill when the user wants to “see what people are making”, “scroll the feed”, or “interact with works”. Do not use it for taxonomy/keyword‑level research (handled by neta-suggest) or for generating images/videos/songs (handled by neta-creative).",
"trigger": "",
"commands": [
"npx skills add talesofai/neta-skills@neta-community -g"
],
"install": "npx skills add talesofai/neta-skills@neta-community -g",
"stars": 760,
"repoUrl": "https://github.com/talesofai/neta-skills",
"aliases": [
"neta-community",
"talesofai",
"neta-community",
"skill",
"スキル"
]
},
{
"id": "skill-talesofai-neta-skills-skills-neta-creative",
"priority": 471,
"category": "community",
"type": "skill",
"want": "neta-creative",
"feature": "talesofai/neta-skills",
"summary": "Neta API creative skill — generate images, videos, songs, and MVs, and deconstruct creative ideas from existing works. Use this skill when the user wants to create or edit images/videos/songs/MVs, or create based on character settings and existing works. Do not use it for feed browsing or tag/category research (those are handled by neta-community and neta-suggest).",
"trigger": "",
"commands": [
"npx skills add talesofai/neta-skills@neta-creative -g"
],
"install": "npx skills add talesofai/neta-skills@neta-creative -g",
"stars": 760,
"repoUrl": "https://github.com/talesofai/neta-skills",
"aliases": [
"neta-creative",
"talesofai",
"neta-creative",
"skill",
"スキル"
]
},
{
"id": "skill-talesofai-neta-skills-skills-neta-elementum",
"priority": 472,
"category": "community",
"type": "skill",
"want": "neta-elementum",
"feature": "talesofai/neta-skills",
"summary": "Neta Elementum Alchemy Skill - Guides users through creating or updating style element (Elementum) VTokens (Virtual Tokens, TCP). Elementum encapsulates a visual concept (scene, prop, clothing, weapon, pose, atmosphere, meme, etc.) and can be referenced in make_image via /ElementName after creation. Use this skill when users want to create new Elementa, encapsulate visual styles or concepts, or modify existing Elementa.",
"trigger": "",
"commands": [
"npx skills add talesofai/neta-skills@neta-elementum -g"
],
"install": "npx skills add talesofai/neta-skills@neta-elementum -g",
"stars": 760,
"repoUrl": "https://github.com/talesofai/neta-skills",
"aliases": [
"neta-elementum",
"talesofai",
"neta-elementum",
"skill",
"スキル"
]
},
{
"id": "skill-talesofai-neta-skills-skills-neta-space",
"priority": 473,
"category": "community",
"type": "skill",
"want": "neta-space",
"feature": "talesofai/neta-skills",
"summary": "Neta API space and world‑view browsing skill — browse worldbuilding, sub‑spaces, and playable content by space/hashtag. Use this skill when the user talks about worlds/spaces/universes/scenes, or wants to browse characters and gameplay based on space and activity structure. Do not use it for concrete media creation (handled by neta-creative).",
"trigger": "",
"commands": [
"npx skills add talesofai/neta-skills@neta-space -g"
],
"install": "npx skills add talesofai/neta-skills@neta-space -g",
"stars": 760,
"repoUrl": "https://github.com/talesofai/neta-skills",
"aliases": [
"neta-space",
"talesofai",
"neta-space",
"skill",
"スキル"
]
},
{
"id": "skill-talesofai-neta-skills-skills-neta-suggest",
"priority": 474,
"category": "community",
"type": "skill",
"want": "neta-suggest",
"feature": "talesofai/neta-skills",
"summary": "Neta API research and recommendation skill — provide keyword/tag/category suggestions, validate taxonomy paths, and power multi‑mode content feeds, supporting progressive exploration from broad to precise. Use this skill when the user has no clear goal, wants topic/idea suggestions, or needs systematic content filtering by keywords/categories. It does not directly generate media (handled by neta-creative); community interactions are handled by neta-community.",
"trigger": "",
"commands": [
"npx skills add talesofai/neta-skills@neta-suggest -g"
],
"install": "npx skills add talesofai/neta-skills@neta-suggest -g",
"stars": 760,
"repoUrl": "https://github.com/talesofai/neta-skills",
"aliases": [
"neta-suggest",
"talesofai",
"neta-suggest",
"skill",
"スキル"
]
},
{
"id": "skill-denissergeevitch-repo-task-proof-loop-repo-task-proof-loop",
"priority": 475,
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
"id": "skill-nvidia-torch-harmonics-.skills-disco-kernel-dev",
"priority": 476,
"category": "community",
"type": "skill",
"want": "disco-kernel-dev",
"feature": "NVIDIA/torch-harmonics",
"summary": "Expert guide for adding, optimizing, or debugging DISCO convolution kernels in torch-harmonics. Use this skill whenever the user mentions: adding a new kernel variant or GPU arch path, wiring up a kernel through the Python dispatch layer, fixing bf16/fp16/autocast issues in DISCO, profiling or benchmarking the CSR or kpacked forward/backward, propagating kernel changes to the distributed DISCO path, or writing tests that cover all dispatch branches. Also use for debugging correctness issues in the DISCO fwd/bwd path or distributed a2a collectives.",
"trigger": "",
"commands": [
"npx skills add NVIDIA/torch-harmonics@disco-kernel-dev -g"
],
"install": "npx skills add NVIDIA/torch-harmonics@disco-kernel-dev -g",
"stars": 687,
"repoUrl": "https://github.com/NVIDIA/torch-harmonics",
"aliases": [
"disco-kernel-dev",
"NVIDIA",
"disco-kernel-dev",
"skill",
"スキル"
]
},
{
"id": "skill-nvidia-torch-harmonics-.skills-test-writing",
"priority": 477,
"category": "community",
"type": "skill",
"want": "test-writing",
"feature": "NVIDIA/torch-harmonics",
"summary": "Guide for writing tests in torch-harmonics. Use this skill whenever the user asks to add tests, check or extend test coverage, write a new test class, test a new layer or kernel, or add distributed tests. Also.",
"trigger": "use when the user asks about tolerance values, how to compare tensors, how to structure distributed test infrastructure, or how to test gradients. Covers serial tests in test_convolution.py and distributed tests in test_distributed_*.py.",
"commands": [
"npx skills add NVIDIA/torch-harmonics@test-writing -g"
],
"install": "npx skills add NVIDIA/torch-harmonics@test-writing -g",
"stars": 687,
"repoUrl": "https://github.com/NVIDIA/torch-harmonics",
"aliases": [
"test-writing",
"NVIDIA",
"test-writing",
"skill",
"スキル"
]
},
{
"id": "skill-nvidia-torch-harmonics-torch-harmonics",
"priority": 478,
"category": "community",
"type": "skill",
"want": "torch-harmonics-skills",
"feature": "NVIDIA/torch-harmonics",
"summary": "Index of project-local Claude Code skills for torch-harmonics. Use this to discover which skills are available for this codebase. Individual skills live in the .skills/ directory at the project root.",
"trigger": "",
"commands": [
"npx skills add NVIDIA/torch-harmonics@torch-harmonics -g"
],
"install": "npx skills add NVIDIA/torch-harmonics@torch-harmonics -g",
"stars": 687,
"repoUrl": "https://github.com/NVIDIA/torch-harmonics",
"aliases": [
"torch-harmonics",
"NVIDIA",
"torch-harmonics-skills",
"skill",
"スキル"
]
},
{
"id": "skill-ahmadawais-ramadan-cli-skills",
"priority": 479,
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
"priority": 480,
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
"stars": 426,
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
"id": "skill-claw-bench-claw-bench-leaderboard-public",
"priority": 481,
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
"priority": 482,
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
"id": "skill-garycli-garycli-skills",
"priority": 483,
"category": "community",
"type": "skill",
"want": "skills",
"feature": "garycli/garycli",
"summary": "The Spear Carrier. AI-native CLI agent for STM32 embedded development and automated debugging. (Gary：专为 STM32 打造的 AI 原生命令行开发与调试智能体。)",
"trigger": "",
"commands": [
"npx skills add garycli/garycli -g"
],
"install": "npx skills add garycli/garycli -g",
"stars": 124,
"repoUrl": "https://github.com/garycli/garycli",
"aliases": [
"skills",
"garycli",
"skills",
"skill",
"スキル"
]
},
{
"id": "skill-polydile-dile-components-skills-dile-components",
"priority": 484,
"category": "community",
"type": "skill",
"want": "dile-components",
"feature": "Polydile/dile-components",
"summary": "Use when building or modifying UI with the Dile Components library (@dile/ui, @dile/crud, @dile/editor, @dile/utils, @dile/lib, @dile/iconlib, @dile/icons) — a framework-agnostic, Lit-based web component catalog. Trigger when installing/importing dile-* custom elements, using tags like <dile-input>, <dile-modal>, <dile-table>, building CRUD screens, adding a WYSIWYG/Markdown editor, using icon components, or theming with Dile's CSS custom properties.",
"trigger": "Use when building or modifying UI with the Dile Components library (@dile/ui, @dile/crud, @dile/editor, @dile/utils, @dile/lib, @dile/iconlib, @dile/icons) — a framework-agnostic, Lit-based web component catalog. Trigger when installing/importing dile-* custom elements, using tags like <dile-input>, <dile-modal>, <dile-table>, building CRUD screens, adding a WYSIWYG/Markdown editor, using icon components, or theming with Dile's CSS custom properties.",
"commands": [
"npx skills add Polydile/dile-components -g"
],
"install": "npx skills add Polydile/dile-components -g",
"stars": 106,
"repoUrl": "https://github.com/Polydile/dile-components",
"aliases": [
"dile-components",
"Polydile",
"dile-components",
"skill",
"スキル"
]
},
{
"id": "skill-diegosouzapw-awesome-omni-skill-skills-ai-agents-000-tnr-absolute-rigor",
"priority": 485,
"category": "community",
"type": "skill",
"want": "000-TnR-Absolute-Rigor",
"feature": "diegosouzapw/awesome-omni-skill",
"summary": "[00] TnR ABSOLUTE RIGOR — Systemic Verification Doctrine. Forced cognitive exertion for high-stakes investigations. Mandates absolute deconstruction, mathematical proof chains, and ≥95% derived certainty. Zero-tolerance for heuristics or sentiment-based reasoning. Shortcuts are defined as intentional hallucinations.",
"trigger": "",
"commands": [
"npx skills add diegosouzapw/awesome-omni-skill@000-tnr-absolute-rigor -g"
],
"install": "npx skills add diegosouzapw/awesome-omni-skill@000-tnr-absolute-rigor -g",
"stars": 50,
"repoUrl": "https://github.com/diegosouzapw/awesome-omni-skill",
"aliases": [
"000-tnr-absolute-rigor",
"diegosouzapw",
"000-TnR-Absolute-Rigor",
"skill",
"スキル"
]
},
{
"id": "skill-diegosouzapw-awesome-omni-skill-skills-ai-agents-2agent-majiayu000",
"priority": 486,
"category": "community",
"type": "skill",
"want": "2agent",
"feature": "diegosouzapw/awesome-omni-skill",
"summary": "Configures 2-Agent workflow between PM and implementation roles.",
"trigger": "Use when user mentions 2-Agent, 2エージェント, PM連携設定, Cursor設定, Cursor連携, 2-agent運用. Do NOT load for: 単独運用, ワークフロー実行, ハンドオフ処理.",
"commands": [
"npx skills add diegosouzapw/awesome-omni-skill@2agent-majiayu000 -g"
],
"install": "npx skills add diegosouzapw/awesome-omni-skill@2agent-majiayu000 -g",
"stars": 50,
"repoUrl": "https://github.com/diegosouzapw/awesome-omni-skill",
"aliases": [
"2agent-majiayu000",
"diegosouzapw",
"2agent",
"skill",
"スキル"
]
},
{
"id": "skill-diegosouzapw-awesome-omni-skill-skills-ai-agents-2agent",
"priority": 487,
"category": "community",
"type": "skill",
"want": "2agent",
"feature": "diegosouzapw/awesome-omni-skill",
"summary": "Configures 2-Agent workflow between PM and implementation roles.",
"trigger": "Use when user mentions 2-Agent, 2エージェント, PM連携設定, Cursor設定, Cursor連携, 2-agent運用. Do NOT load for: 単独運用, ワークフロー実行, ハンドオフ処理.",
"commands": [
"npx skills add diegosouzapw/awesome-omni-skill@2agent -g"
],
"install": "npx skills add diegosouzapw/awesome-omni-skill@2agent -g",
"stars": 50,
"repoUrl": "https://github.com/diegosouzapw/awesome-omni-skill",
"aliases": [
"2agent",
"diegosouzapw",
"2agent",
"skill",
"スキル"
]
},
{
"id": "skill-diegosouzapw-awesome-omni-skill-skills-ai-agents-add-agent",
"priority": 488,
"category": "community",
"type": "skill",
"want": "add-agent",
"feature": "diegosouzapw/awesome-omni-skill",
"summary": "Add a new AI coding agent to Agent Sandbox. Creates all required files (Dockerfile, templates, CI, docs) and wires the agent into the CLI, proxy, and build system.",
"trigger": "",
"commands": [
"npx skills add diegosouzapw/awesome-omni-skill@add-agent -g"
],
"install": "npx skills add diegosouzapw/awesome-omni-skill@add-agent -g",
"stars": 50,
"repoUrl": "https://github.com/diegosouzapw/awesome-omni-skill",
"aliases": [
"add-agent",
"diegosouzapw",
"add-agent",
"skill",
"スキル"
]
},
{
"id": "skill-diegosouzapw-awesome-omni-skill-skills-ai-agents-add-agent-property",
"priority": 489,
"category": "community",
"type": "skill",
"want": "add-agent-property",
"feature": "diegosouzapw/awesome-omni-skill",
"summary": "Add a new property to the AI agents database.",
"trigger": "Use when the user wants to add, create, or introduce a new column, property, field, or feature to track across all agents in the comparison matrix. Handles all four required steps - database updates, groups.json, table display, and GitHub issue templates.",
"commands": [
"npx skills add diegosouzapw/awesome-omni-skill@add-agent-property -g"
],
"install": "npx skills add diegosouzapw/awesome-omni-skill@add-agent-property -g",
"stars": 50,
"repoUrl": "https://github.com/diegosouzapw/awesome-omni-skill",
"aliases": [
"add-agent-property",
"diegosouzapw",
"add-agent-property",
"skill",
"スキル"
]
},
{
"id": "skill-diegosouzapw-awesome-omni-skill-skills-ai-agents-add-agent-templates",
"priority": 490,
"category": "community",
"type": "skill",
"want": "add-agent-templates",
"feature": "diegosouzapw/awesome-omni-skill",
"summary": "Add new Agent templates to the meta-agent-skills framework.",
"trigger": "",
"commands": [
"npx skills add diegosouzapw/awesome-omni-skill@add-agent-templates -g"
],
"install": "npx skills add diegosouzapw/awesome-omni-skill@add-agent-templates -g",
"stars": 50,
"repoUrl": "https://github.com/diegosouzapw/awesome-omni-skill",
"aliases": [
"add-agent-templates",
"diegosouzapw",
"add-agent-templates",
"skill",
"スキル"
]
},
{
"id": "skill-diegosouzapw-awesome-omni-skill-skills-ai-agents-add-backend-tool",
"priority": 491,
"category": "community",
"type": "skill",
"want": "add-backend-tool",
"feature": "diegosouzapw/awesome-omni-skill",
"summary": "Add a new tool to the backend OpenAI function calling system.",
"trigger": "Use when user mentions \"new tool\", \"add tool\", \"backend function\", \"agent capability\", or wants to extend what the AI agent can do.",
"commands": [
"npx skills add diegosouzapw/awesome-omni-skill@add-backend-tool -g"
],
"install": "npx skills add diegosouzapw/awesome-omni-skill@add-backend-tool -g",
"stars": 50,
"repoUrl": "https://github.com/diegosouzapw/awesome-omni-skill",
"aliases": [
"add-backend-tool",
"diegosouzapw",
"add-backend-tool",
"skill",
"スキル"
]
},
{
"id": "skill-diegosouzapw-awesome-omni-skill-skills-ai-agents-add-embedding-support",
"priority": 492,
"category": "community",
"type": "skill",
"want": "add-embedding-support",
"feature": "diegosouzapw/awesome-omni-skill",
"summary": "Add Qdrant embedding support to v3 WordPress components for RAG chatbot. Implements component-level content chunking for searchable, structured embeddings.",
"trigger": "Use when adding embedding to new or existing v3 components.",
"commands": [
"npx skills add diegosouzapw/awesome-omni-skill@add-embedding-support -g"
],
"install": "npx skills add diegosouzapw/awesome-omni-skill@add-embedding-support -g",
"stars": 50,
"repoUrl": "https://github.com/diegosouzapw/awesome-omni-skill",
"aliases": [
"add-embedding-support",
"diegosouzapw",
"add-embedding-support",
"skill",
"スキル"
]
},
{
"id": "skill-jskits-loggerjs-skills-loggerjs",
"priority": 493,
"category": "community",
"type": "skill",
"want": "loggerjs",
"feature": "jskits/loggerjs",
"summary": "Use LoggerJS in JavaScript or TypeScript projects. Trigger when adding structured logging, choosing LoggerJS packages for Node.js, browser, worker, edge, CLI, or library code, configuring transports, integrations, processors, codecs, OpenTelemetry or vendor delivery, migrating from console, pino, winston, loglevel, debug, or other loggers, or troubleshooting LoggerJS logging behavior.",
"trigger": "",
"commands": [
"npx skills add jskits/loggerjs -g"
],
"install": "npx skills add jskits/loggerjs -g",
"stars": 37,
"repoUrl": "https://github.com/jskits/loggerjs",
"aliases": [
"loggerjs",
"jskits",
"loggerjs",
"skill",
"スキル"
]
},
{
"id": "skill-taishan1994-agent-handbook-mini-agents-mini_agents-skills-data-analysis",
"priority": 494,
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
"stars": 29,
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
"priority": 495,
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
"stars": 29,
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
"priority": 496,
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
"stars": 29,
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
"priority": 497,
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
"id": "skill-untitled-data-company-data-skills-skills-dlt-dagster",
"priority": 498,
"category": "community",
"type": "skill",
"want": "dlt-dagster",
"feature": "untitled-data-company/data-skills",
"summary": "Runs dlt pipelines in Dagster as software-defined assets (Component or Pythonic @dlt_assets) or as a single standard Dagster asset.",
"trigger": "Use when orchestrating dlt with Dagster; scaffolding loads.py/defs.yaml; jobs/schedules; secrets/env; incremental/backfill via apply_hints; parallelization (one asset per resource); Dagster Cloud deployment; or external compute (ECS, Fargate — refer to dagster-integrations). Triggers: dagster-dlt, dlt on Dagster, deploy dlt with Dagster, standard Dagster asset, external compute.",
"commands": [
"npx skills add untitled-data-company/data-skills@dlt-dagster -g"
],
"install": "npx skills add untitled-data-company/data-skills@dlt-dagster -g",
"stars": 20,
"repoUrl": "https://github.com/untitled-data-company/data-skills",
"aliases": [
"dlt-dagster",
"untitled-data-company",
"dlt-dagster",
"skill",
"スキル"
]
},
{
"id": "skill-untitled-data-company-data-skills-skills-dlt-skill",
"priority": 499,
"category": "community",
"type": "skill",
"want": "dlt-skill",
"feature": "untitled-data-company/data-skills",
"summary": "Creates and maintains dlt (data load tool) pipelines from APIs, databases, and other sources.",
"trigger": "Use when the user wants to build or debug pipelines; use verified sources (e.g. Salesforce, GitHub, Stripe) or declarative REST API or custom Python; configure destinations (e.g. DuckDB, BigQuery, Snowflake); implement incremental loading; or edit .dlt config and secrets. Use when the user mentions data ingestion, dlt pipeline, dlt init, rest_api_source, incremental load, or pipeline dashboard.",
"commands": [
"npx skills add untitled-data-company/data-skills@dlt-skill -g"
],
"install": "npx skills add untitled-data-company/data-skills@dlt-skill -g",
"stars": 20,
"repoUrl": "https://github.com/untitled-data-company/data-skills",
"aliases": [
"dlt-skill",
"untitled-data-company",
"dlt-skill",
"skill",
"スキル"
]
},
{
"id": "skill-untitled-data-company-data-skills-skills-uv",
"priority": 500,
"category": "community",
"type": "skill",
"want": "uv",
"feature": "untitled-data-company/data-skills",
"summary": "Uses the uv Python package and project manager correctly for dependencies, venvs, and scripts.",
"trigger": "Use when creating or modifying Python projects, adding dependencies, running scripts with inline deps, managing virtual environments, pinning Python versions, running CLI tools from PyPI, setting the IDE Python interpreter, or using uv in CI (e.g. GitHub Actions) or Docker containers. Use when the user mentions uv, pyproject.toml, uv.lock, uv run, uv add, uv sync, .venv, Python interpreter, poetry, pipenv, conda, CI, Docker, GitHub Actions, or asks to use uv instead of pip or poetry.",
"commands": [
"npx skills add untitled-data-company/data-skills@uv -g"
],
"install": "npx skills add untitled-data-company/data-skills@uv -g",
"stars": 20,
"repoUrl": "https://github.com/untitled-data-company/data-skills",
"aliases": [
"uv",
"untitled-data-company",
"uv",
"skill",
"スキル"
]
},
{
"id": "skill-alexanderop-app-screenshots-app-screenshots",
"priority": 501,
"category": "community",
"type": "skill",
"want": "screenshotting-apps",
"feature": "alexanderop/app-screenshots",
"summary": "Generates annotated screenshot documentation for web apps and websites — local dev servers or live sites.",
"trigger": "Use when asked to \"screenshot the app\", \"document the app\", \"visual docs\", \"screenshot documentation\", \"show me the app\", \"screenshot <url>\", or \"document this website\".",
"commands": [
"npx skills add alexanderop/app-screenshots -g"
],
"install": "npx skills add alexanderop/app-screenshots -g",
"stars": 15,
"repoUrl": "https://github.com/alexanderop/app-screenshots",
"aliases": [
"app-screenshots",
"alexanderop",
"screenshotting-apps",
"skill",
"スキル"
]
},
{
"id": "skill-tashangkd-tashan-cursor-skills-skills-administer-ams",
"priority": 502,
"category": "community",
"type": "skill",
"want": "administer-ams",
"feature": "TashanGKD/tashan-cursor-skills",
"summary": "施测学术动机量表（AMS-GSR 28），采集科研人员的内在动机、外在动机和无动机数据。当用户选择填写量表、或画像中AMS数据缺失时使用。",
"trigger": "",
"commands": [
"npx skills add TashanGKD/tashan-cursor-skills@administer-ams -g"
],
"install": "npx skills add TashanGKD/tashan-cursor-skills@administer-ams -g",
"stars": 13,
"repoUrl": "https://github.com/TashanGKD/tashan-cursor-skills",
"aliases": [
"administer-ams",
"TashanGKD",
"administer-ams",
"skill",
"スキル"
]
},
{
"id": "skill-tashangkd-tashan-cursor-skills-skills-administer-mini-ipip",
"priority": 503,
"category": "community",
"type": "skill",
"want": "administer-mini-ipip",
"feature": "TashanGKD/tashan-cursor-skills",
"summary": "施测大五人格量表（Mini-IPIP，20题），评估外向性、宜人性、尽责性、神经质和开放性。当用户选择填写量表、或画像中人格数据缺失时使用。",
"trigger": "",
"commands": [
"npx skills add TashanGKD/tashan-cursor-skills@administer-mini-ipip -g"
],
"install": "npx skills add TashanGKD/tashan-cursor-skills@administer-mini-ipip -g",
"stars": 13,
"repoUrl": "https://github.com/TashanGKD/tashan-cursor-skills",
"aliases": [
"administer-mini-ipip",
"TashanGKD",
"administer-mini-ipip",
"skill",
"スキル"
]
},
{
"id": "skill-tashangkd-tashan-cursor-skills-skills-administer-rcss",
"priority": 504,
"category": "community",
"type": "skill",
"want": "administer-rcss",
"feature": "TashanGKD/tashan-cursor-skills",
"summary": "施测科研人员认知风格量表（RCSS），评估横向整合 vs 垂直深度的认知偏好。当用户选择填写量表、或画像中RCSS数据缺失时使用。",
"trigger": "",
"commands": [
"npx skills add TashanGKD/tashan-cursor-skills@administer-rcss -g"
],
"install": "npx skills add TashanGKD/tashan-cursor-skills@administer-rcss -g",
"stars": 13,
"repoUrl": "https://github.com/TashanGKD/tashan-cursor-skills",
"aliases": [
"administer-rcss",
"TashanGKD",
"administer-rcss",
"skill",
"スキル"
]
},
{
"id": "skill-tashangkd-tashan-cursor-skills-skills-ai-image-generator",
"priority": 505,
"category": "community",
"type": "skill",
"want": "ai-image-generator",
"feature": "TashanGKD/tashan-cursor-skills",
"summary": "AI配图能力层 Skill。任何需要生成信息图的任务都调用此 Skill，而不是自行调用 API。包含：模型选择、API调用、多视角草图流程、风格库引用、配图索引联动。触发词：「需要绘图」「生成配图」「画一张图」「制作信息图」「根据这段文字画图」「图片提示词」。",
"trigger": "",
"commands": [
"npx skills add TashanGKD/tashan-cursor-skills@ai-image-generator -g"
],
"install": "npx skills add TashanGKD/tashan-cursor-skills@ai-image-generator -g",
"stars": 13,
"repoUrl": "https://github.com/TashanGKD/tashan-cursor-skills",
"aliases": [
"ai-image-generator",
"TashanGKD",
"ai-image-generator",
"skill",
"スキル"
]
},
{
"id": "skill-tashangkd-tashan-cursor-skills-skills-architecture-gap-mapper",
"priority": 506,
"category": "community",
"type": "skill",
"want": "architecture-gap-mapper",
"feature": "TashanGKD/tashan-cursor-skills",
"summary": "架构/系统差距分析 Skill。将当前系统/代码库/文档与目标框架/标准/竞品对比，生成带证据链的差距报告（兼容/冲突/缺失三类），为整改计划提供输入。触发词：「对比XXX和YYY」「这两个项目有什么异同」「找出差距」「现有系统与目标有什么不对齐」「竞品分析」「和XXX相比缺什么」。",
"trigger": "",
"commands": [
"npx skills add TashanGKD/tashan-cursor-skills@architecture-gap-mapper -g"
],
"install": "npx skills add TashanGKD/tashan-cursor-skills@architecture-gap-mapper -g",
"stars": 13,
"repoUrl": "https://github.com/TashanGKD/tashan-cursor-skills",
"aliases": [
"architecture-gap-mapper",
"TashanGKD",
"architecture-gap-mapper",
"skill",
"スキル"
]
},
{
"id": "skill-tashangkd-tashan-cursor-skills-skills-article-image-angles",
"priority": 507,
"category": "community",
"type": "skill",
"want": "article-image-angles",
"feature": "TashanGKD/tashan-cursor-skills",
"summary": "分析文章可用的多种配图视角，为每个角度生成提示词草图供用户选择。触发词：帮我分析配图角度/生成多视角草图/配图有几种选择/给我几个配图方案。",
"trigger": "",
"commands": [
"npx skills add TashanGKD/tashan-cursor-skills@article-image-angles -g"
],
"install": "npx skills add TashanGKD/tashan-cursor-skills@article-image-angles -g",
"stars": 13,
"repoUrl": "https://github.com/TashanGKD/tashan-cursor-skills",
"aliases": [
"article-image-angles",
"TashanGKD",
"article-image-angles",
"skill",
"スキル"
]
},
{
"id": "skill-tashangkd-tashan-cursor-skills-skills-article-image-styles",
"priority": 508,
"category": "community",
"type": "skill",
"want": "article-image-styles",
"feature": "TashanGKD/tashan-cursor-skills",
"summary": "管理他山公众号的配图风格库，提供风格模板调用和新风格沉淀。触发词：调用风格库/用XX风格/存入风格库/更新风格模板/风格库有哪些风格。",
"trigger": "",
"commands": [
"npx skills add TashanGKD/tashan-cursor-skills@article-image-styles -g"
],
"install": "npx skills add TashanGKD/tashan-cursor-skills@article-image-styles -g",
"stars": 13,
"repoUrl": "https://github.com/TashanGKD/tashan-cursor-skills",
"aliases": [
"article-image-styles",
"TashanGKD",
"article-image-styles",
"skill",
"スキル"
]
},
{
"id": "skill-tashangkd-tashan-cursor-skills-skills-article-proofreading",
"priority": 509,
"category": "community",
"type": "skill",
"want": "article-proofreading",
"feature": "TashanGKD/tashan-cursor-skills",
"summary": "按郑总的审稿标准审阅中文文章草稿，检查AI腔、标题写法（4种错误类型）、绝对表达、结构层次污染、结语完整性，逐条给出修改方案。当用户说\"审稿\"\"帮我检查文章\"\"review一下\"时使用，也可在完成文章草稿后主动执行。",
"trigger": "",
"commands": [
"npx skills add TashanGKD/tashan-cursor-skills@article-proofreading -g"
],
"install": "npx skills add TashanGKD/tashan-cursor-skills@article-proofreading -g",
"stars": 13,
"repoUrl": "https://github.com/TashanGKD/tashan-cursor-skills",
"aliases": [
"article-proofreading",
"TashanGKD",
"article-proofreading",
"skill",
"スキル"
]
},
{
"id": "skill-ammdevl-vibe-match-.claude-skills-vibe-search",
"priority": 510,
"category": "community",
"type": "skill",
"want": "vibe-search",
"feature": "ammdevl/vibe-match",
"summary": "A tool for searching MCPs, SKILLs adn AGENTs for Vibe-Code Projects. Describe what you want --> Get what you need",
"trigger": "",
"commands": [
"npx skills add ammdevl/vibe-match -g"
],
"install": "npx skills add ammdevl/vibe-match -g",
"stars": 8,
"repoUrl": "https://github.com/ammdevl/vibe-match",
"aliases": [
"vibe-search",
"ammdevl",
"vibe-search",
"skill",
"スキル"
]
},
{
"id": "skill-yeet-src-yeet-scripts-yeet-scripts",
"priority": 511,
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
"id": "skill-yiouli-pixie-qa-skills-eval-driven-dev",
"priority": 512,
"category": "community",
"type": "skill",
"want": "eval-driven-dev",
"feature": "yiouli/pixie-qa",
"summary": "Improve AI application with evaluation-driven development. Define eval criteria, instrument the application, build golden datasets, observe and evaluate application runs, analyze results, and produce a concrete action plan for improvements. ALWAYS USE THIS SKILL when the user asks to set up QA, add tests, add evals, evaluate, benchmark, fix wrong behaviors, improve quality, or do quality assurance for any Python project that calls an LLM model.",
"trigger": "",
"commands": [
"npx skills add yiouli/pixie-qa -g"
],
"install": "npx skills add yiouli/pixie-qa -g",
"stars": 7,
"repoUrl": "https://github.com/yiouli/pixie-qa",
"aliases": [
"eval-driven-dev",
"yiouli",
"eval-driven-dev",
"skill",
"スキル"
]
},
{
"id": "skill-mikecheng1208-battletree-.agents-skills-00-andruia-consultant",
"priority": 513,
"category": "community",
"type": "skill",
"want": "00-andruia-consultant",
"feature": "MikeCheng1208/BattleTree",
"summary": "Arquitecto de Soluciones Principal y Consultor Tecnológico de Andru.ia. Diagnostica y traza la hoja de ruta óptima para proyectos de IA en español.",
"trigger": "",
"commands": [
"npx skills add MikeCheng1208/BattleTree@00-andruia-consultant -g"
],
"install": "npx skills add MikeCheng1208/BattleTree@00-andruia-consultant -g",
"stars": 2,
"repoUrl": "https://github.com/MikeCheng1208/BattleTree",
"aliases": [
"00-andruia-consultant",
"MikeCheng1208",
"00-andruia-consultant",
"skill",
"スキル"
]
},
{
"id": "skill-mikecheng1208-battletree-.agents-skills-00-meta-chain-flow-150",
"priority": 514,
"category": "community",
"type": "skill",
"want": "00-meta-chain-flow-150",
"feature": "MikeCheng1208/BattleTree",
"summary": "[00] META. Orchestrate skills into dynamic chains for complex tasks. Analyzes the task, discovers available skills, builds an optimal chain, explains why each skill is needed, and executes step-by-step with user confirmation. Use for any complex task requiring multiple thinking/research/analysis steps. Triggers on \"plan this\", \"how to approach\", \"what's the strategy\", \"build a plan\", or any multi-step problem requiring skill orchestration.",
"trigger": "",
"commands": [
"npx skills add MikeCheng1208/BattleTree@00-meta-chain-flow-150 -g"
],
"install": "npx skills add MikeCheng1208/BattleTree@00-meta-chain-flow-150 -g",
"stars": 2,
"repoUrl": "https://github.com/MikeCheng1208/BattleTree",
"aliases": [
"00-meta-chain-flow-150",
"MikeCheng1208",
"00-meta-chain-flow-150",
"skill",
"スキル"
]
},
{
"id": "skill-mikecheng1208-battletree-.agents-skills-000-tnr-absolute-rigor",
"priority": 515,
"category": "community",
"type": "skill",
"want": "000-TnR-Absolute-Rigor",
"feature": "MikeCheng1208/BattleTree",
"summary": "[00] TnR ABSOLUTE RIGOR — Systemic Verification Doctrine. Forced cognitive exertion for high-stakes investigations. Mandates absolute deconstruction, mathematical proof chains, and ≥95% derived certainty. Zero-tolerance for heuristics or sentiment-based reasoning. Shortcuts are defined as intentional hallucinations.",
"trigger": "",
"commands": [
"npx skills add MikeCheng1208/BattleTree@000-tnr-absolute-rigor -g"
],
"install": "npx skills add MikeCheng1208/BattleTree@000-tnr-absolute-rigor -g",
"stars": 2,
"repoUrl": "https://github.com/MikeCheng1208/BattleTree",
"aliases": [
"000-tnr-absolute-rigor",
"MikeCheng1208",
"000-TnR-Absolute-Rigor",
"skill",
"スキル"
]
},
{
"id": "skill-mikecheng1208-battletree-.agents-skills-01-meta-chain-of-skills-150",
"priority": 516,
"category": "community",
"type": "skill",
"want": "01-meta-chain-of-skills-150",
"feature": "MikeCheng1208/BattleTree",
"summary": "[01] META. Сканирует доступные skills, создает план выполнения и идет шаг за шагом с подтверждением каждого этапа. Triggers on complex tasks, multi-step work, or when structured execution is needed.",
"trigger": "",
"commands": [
"npx skills add MikeCheng1208/BattleTree@01-meta-chain-of-skills-150 -g"
],
"install": "npx skills add MikeCheng1208/BattleTree@01-meta-chain-of-skills-150 -g",
"stars": 2,
"repoUrl": "https://github.com/MikeCheng1208/BattleTree",
"aliases": [
"01-meta-chain-of-skills-150",
"MikeCheng1208",
"01-meta-chain-of-skills-150",
"skill",
"スキル"
]
},
{
"id": "skill-mikecheng1208-battletree-.agents-skills-02-meta-skill-forge-150",
"priority": 517,
"category": "community",
"type": "skill",
"want": "02-meta-skill-forge-150",
"feature": "MikeCheng1208/BattleTree",
"summary": "[02] META. Create new skills when existing ones don't cover the task. Analyze unique requirements, build framework (Frame → Research → Plan → Execute), integrate risks, and declare new skill.",
"trigger": "Use when facing novel problems that existing skills can't address.",
"commands": [
"npx skills add MikeCheng1208/BattleTree@02-meta-skill-forge-150 -g"
],
"install": "npx skills add MikeCheng1208/BattleTree@02-meta-skill-forge-150 -g",
"stars": 2,
"repoUrl": "https://github.com/MikeCheng1208/BattleTree",
"aliases": [
"02-meta-skill-forge-150",
"MikeCheng1208",
"02-meta-skill-forge-150",
"skill",
"スキル"
]
},
{
"id": "skill-mikecheng1208-battletree-.agents-skills-05-20-mcp-less",
"priority": 518,
"category": "community",
"type": "skill",
"want": "05-20-mcp-less",
"feature": "MikeCheng1208/BattleTree",
"summary": "Use MCP without installing",
"trigger": "",
"commands": [
"npx skills add MikeCheng1208/BattleTree@05-20-mcp-less -g"
],
"install": "npx skills add MikeCheng1208/BattleTree@05-20-mcp-less -g",
"stars": 2,
"repoUrl": "https://github.com/MikeCheng1208/BattleTree",
"aliases": [
"05-20-mcp-less",
"MikeCheng1208",
"05-20-mcp-less",
"skill",
"スキル"
]
},
{
"id": "skill-mikecheng1208-battletree-.agents-skills-10-andruia-skill-smith",
"priority": 519,
"category": "community",
"type": "skill",
"want": "10-andruia-skill-smith",
"feature": "MikeCheng1208/BattleTree",
"summary": "Ingeniero de Sistemas de Andru.ia. Diseña, redacta y despliega nuevas habilidades (skills) dentro del repositorio siguiendo el Estándar de Diamante.",
"trigger": "",
"commands": [
"npx skills add MikeCheng1208/BattleTree@10-andruia-skill-smith -g"
],
"install": "npx skills add MikeCheng1208/BattleTree@10-andruia-skill-smith -g",
"stars": 2,
"repoUrl": "https://github.com/MikeCheng1208/BattleTree",
"aliases": [
"10-andruia-skill-smith",
"MikeCheng1208",
"10-andruia-skill-smith",
"skill",
"スキル"
]
}
];
