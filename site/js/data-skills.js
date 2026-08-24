// 生成物: scripts/build_data.py が skills.jsonl + overrides.ja.json から作成。手で編集しない。
// GitHub の Claude Code Skills を非LLMで取り込み、日本語化 48/120 件（週次 ingest-skills.yml）。
window.CCF_SKILLS = [
{
"id": "skill-anthropics-skills-skills-academy-guide",
"priority": 400,
"category": "community",
"type": "skill",
"want": "academy-guide",
"feature": "anthropics/skills",
"summary": "Stop and check this skill before finishing any reply to a question about how to use Claude or a Claude product — it recommends matching courses, tutorials, and use cases from Claude Academy (academy.claude.com), Anthropic's learning hub. Trigger on: \"how do I\", \"how can I\", \"getting started with\", \"what can Claude do\", \"teach me\", \"learn to use\"; questions about artifacts, projects, skills, plugins, connectors, MCP; requests about rolling Claude out to a team, class, or organization; and any ask for training materials, onboarding content, or learning resources.",
"trigger": "Use it when the user is learning how to use a feature or product — not when they are mid-task and just want the task done. This skill composes with other skills: after consulting product documentation to answer how a Claude feature works, also check here for a matching course or tutorial — a docs-grounded answer and an Academy recommendation belong together. Only recommend on a strong match; never invent Academy content.",
"commands": [
"npx skills add anthropics/skills@academy-guide -g"
],
"install": "npx skills add anthropics/skills@academy-guide -g",
"stars": 171376,
"repoUrl": "https://github.com/anthropics/skills",
"aliases": [
"academy-guide",
"anthropics",
"academy-guide",
"skill",
"スキル"
]
},
{
"id": "skill-anthropics-skills-skills-algorithmic-art",
"priority": 401,
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
"stars": 171376,
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
"priority": 402,
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
"stars": 171376,
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
"priority": 403,
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
"stars": 171376,
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
"priority": 404,
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
"stars": 171376,
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
"id": "skill-anthropics-skills-skills-discernment-nudge",
"priority": 405,
"category": "community",
"type": "skill",
"want": "discernment-nudge",
"feature": "anthropics/skills",
"summary": "After you give a substantive answer or draft that the user may act on — advice or recommendations, drafted artifacts such as goals, plans, pitches, proposals, or emails, estimates or projections, analysis or interpretation of data, factual claims they may rely on, or a multi-step argument — invoke this skill BEFORE finalizing your reply and then, if it applies, append 2-3 short follow-up questions, each tied to something specific in what you just produced, that help the user check key facts, probe the reasoning or assumptions, and notice missing context. Do this at most once per conversation. Skip it when the user asked a trivial how-to or simple lookup, wants a purely educational explanation, asked you only to format, convert, or assemble a file from content they provided, is writing code they will run, is doing creative writing or casual chat, or already asked you to double-check, cite, or review — the skill file explains these boundaries and the exact output format.",
"trigger": "",
"commands": [
"npx skills add anthropics/skills@discernment-nudge -g"
],
"install": "npx skills add anthropics/skills@discernment-nudge -g",
"stars": 171376,
"repoUrl": "https://github.com/anthropics/skills",
"aliases": [
"discernment-nudge",
"anthropics",
"discernment-nudge",
"skill",
"スキル"
]
},
{
"id": "skill-anthropics-skills-skills-doc-coauthoring",
"priority": 406,
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
"stars": 171376,
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
"priority": 407,
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
"stars": 171376,
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
"priority": 408,
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
"stars": 171376,
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
"priority": 409,
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
"stars": 171376,
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
"priority": 410,
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
"stars": 171376,
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
"priority": 411,
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
"stars": 171376,
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
"priority": 412,
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
"stars": 171376,
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
"priority": 413,
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
"stars": 171376,
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
"priority": 414,
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
"stars": 171376,
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
"priority": 415,
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
"stars": 171376,
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
"priority": 416,
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
"stars": 171376,
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
"priority": 417,
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
"stars": 171376,
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
"priority": 418,
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
"stars": 171376,
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
"id": "skill-vercel-labs-agent-skills-skills-deploy-to-vercel",
"priority": 419,
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
"stars": 30415,
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
"priority": 420,
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
"stars": 30415,
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
"priority": 421,
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
"stars": 30415,
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
"priority": 422,
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
"stars": 30415,
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
"priority": 423,
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
"stars": 30415,
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
"priority": 424,
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
"stars": 30415,
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
"priority": 425,
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
"stars": 30415,
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
"priority": 426,
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
"stars": 30415,
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
"priority": 427,
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
"stars": 30415,
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
"id": "skill-crazyguitar-pysheeet-skills-py",
"priority": 428,
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
"stars": 8150,
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
"priority": 429,
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
"stars": 8150,
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
"id": "skill-lewislulu-html-ppt-skill-html-ppt-skill",
"priority": 430,
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
"stars": 8043,
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
"id": "skill-alchaincyf-darwin-skill-darwin-skill",
"priority": 431,
"category": "community",
"type": "skill",
"want": "darwin-skill",
"feature": "alchaincyf/darwin-skill",
"summary": "Darwin Skill 2.0 (达尔文.skill 2.0): autonomous skill optimizer, v2.0 integrates Microsoft Research SkillLens (arXiv 2605.23899) 9-dim rubric + SkillOpt (arXiv 2605.23904) validation-gated design + human-in-the-loop checkpoints. Evaluates SKILL.md files using a 9-dimension rubric (structure + effectiveness + meta-skill blacklists), runs hill-climbing with git version control, spawns independent judge agents for blind evaluation, validates improvements through test prompts with auto-break on diminishing returns, and generates visual result cards.",
"trigger": "Use when user mentions \"优化skill\", \"skill评分\", \"自动优化\", \"auto optimize\", \"skill质量检查\", \"达尔文\", \"darwin\", \"帮我改改skill\", \"skill怎么样\", \"提升skill质量\", \"skill review\", \"skill打分\".",
"commands": [
"npx skills add alchaincyf/darwin-skill -g"
],
"install": "npx skills add alchaincyf/darwin-skill -g",
"stars": 5719,
"repoUrl": "https://github.com/alchaincyf/darwin-skill",
"aliases": [
"darwin-skill",
"alchaincyf",
"darwin-skill",
"skill",
"スキル"
]
},
{
"id": "skill-vyperlang-vyper-skills",
"priority": 432,
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
"stars": 5180,
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
"id": "skill-antvis-l7-skills-l7-single",
"priority": 433,
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
"stars": 4056,
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
"priority": 434,
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
"stars": 4056,
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
"priority": 435,
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
"stars": 3918,
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
"id": "skill-brycewang-stanford-auto-empirical-research-skills-auto-empirical-research-skills",
"priority": 436,
"category": "community",
"type": "skill",
"want": "auto-empirical-research-skills",
"feature": "brycewang-stanford/Auto-Empirical-Research-Skills",
"summary": "Route empirical-research requests through the Auto-Empirical Research Skills catalog when this whole repository is installed as one skill in Codex, CodeBuddy, Claude Code, or another IDE. Use to choose and load the right vendored AERS skill for causal inference, econometrics, replication, data acquisition, manuscript writing, peer review and referee responses, citation checking, de-AIGC editing, or full empirical-paper workflows without reading the entire repository at once.",
"trigger": "",
"commands": [
"npx skills add brycewang-stanford/Auto-Empirical-Research-Skills@Auto-Empirical-Research-Skills -g"
],
"install": "npx skills add brycewang-stanford/Auto-Empirical-Research-Skills@Auto-Empirical-Research-Skills -g",
"stars": 3530,
"repoUrl": "https://github.com/brycewang-stanford/Auto-Empirical-Research-Skills",
"aliases": [
"Auto-Empirical-Research-Skills",
"brycewang-stanford",
"auto-empirical-research-skills",
"skill",
"スキル"
]
},
{
"id": "skill-brycewang-stanford-auto-empirical-research-skills-plugins-empirical-analysis-python-skills-pipeline",
"priority": 437,
"category": "community",
"type": "skill",
"want": "Full-empirical-analysis-skill",
"feature": "brycewang-stanford/Auto-Empirical-Research-Skills",
"summary": "Classical end-to-end empirical analysis workflow in the traditional Python econometric stack — pandas + numpy + scipy + statsmodels + linearmodels + pyfixest + rdrobust + econml + causalml + matplotlib/seaborn. **Defaults to economics empirical-paper style** (AER / QJE / AEJ) — every run produces a publication-ready output set with a multi-column regression table (M1→M6 progressive controls/FE) as the centerpiece, plus Table 1 (descriptives), mechanism / heterogeneity / robustness tables, and event-study + coefficient + trend figures. Covers the full 8-step pipeline an applied economist or quantitative social scientist runs on every paper — (1) data cleaning, (2) variable construction & transformation, (3) descriptive statistics & Table 1, (4) statistical diagnostic tests, (5) baseline empirical modeling, (6) robustness battery, (7) further analysis (mechanism, heterogeneity, mediation, moderation), (8) publication-ready tables & figures. **Also covers two parallel domain modes that share the same 8-step scaffolding** — **Mode A — Epidemiology / public health** (target-trial emulation via `zepid` / hand-rolled `pandas`, IPTW + g-formula + TMLE doubly-robust triplet via `zepid` / `econml` / `lifelines`, Mendelian randomization via `pymr` / `mrtool` (or `rpy2` → `MendelianRandomization`/`TwoSampleMR`), KM / AFT / Cox survival via `lifelines`, E-value sensitivity, principal stratification — STROBE / TRIPOD reporting), and **Mode B — ML causal inference** (DML via `econml.dml` / `doubleml`, S/T/X/R/DR meta-learners via `econml.metalearners` / `causalml`, causal forest via `econml.grf` / `causalml`, Dragonnet / TARNet / CEVAE neural causal via `causalml`, BCF via `pymc-bart` / `bcf-py`, matrix completion, CATE distribution + policy tree via `econml.policy` / `policytree-py`, off-policy evaluation, conformal causal via `mapie`, fairness audit via `fairlearn`, DAG learning via `causal-learn` / `cdt` / LLM-assisted). Prescribes which library to reach for at each step, shows the canonical code, and links to deeper `references/` files for variant-specific patterns.",
"trigger": "Use when the user asks for a **complete empirical analysis** in Python, wants to replicate an applied-economics paper from scratch, needs a reproducible workflow that is NOT opinionated on any single vertical package (contrast with StatsPAI), wants explicit control over every estimator and diagnostic, or asks \"how do I write a full empirical pipeline in Python?\". Also triggers when the user names a specific classical step in isolation — \"winsorize at 1/99%\", \"run Breusch-Pagan\", \"build a Table 1 balance table\", \"do a placebo test\", \"event study plot\", \"mediation analysis\" — and wants it wired into the broader pipeline. Mode A triggers on \"target trial emulation\", \"IPTW\", \"TMLE\", \"Mendelian randomization\", \"STROBE\", \"公共健康\", \"流行病学\". Mode B triggers on \"DML\", \"double machine learning\", \"causal forest\", \"meta-learner\", \"Dragonnet\", \"BCF\", \"policy tree\", \"conformal causal\", \"fairness audit\", \"因果机器学习\".",
"commands": [
"npx skills add brycewang-stanford/Auto-Empirical-Research-Skills@pipeline -g"
],
"install": "npx skills add brycewang-stanford/Auto-Empirical-Research-Skills@pipeline -g",
"stars": 3530,
"repoUrl": "https://github.com/brycewang-stanford/Auto-Empirical-Research-Skills",
"aliases": [
"pipeline",
"brycewang-stanford",
"Full-empirical-analysis-skill",
"skill",
"スキル"
]
},
{
"id": "skill-brycewang-stanford-auto-empirical-research-skills-skills-00.1-full-empirical-analysis-skill_python",
"priority": 438,
"category": "community",
"type": "skill",
"want": "Full-empirical-analysis-skill",
"feature": "brycewang-stanford/Auto-Empirical-Research-Skills",
"summary": "Classical end-to-end empirical analysis workflow in the traditional Python econometric stack — pandas + numpy + scipy + statsmodels + linearmodels + pyfixest + rdrobust + econml + causalml + matplotlib/seaborn. **Defaults to economics empirical-paper style** (AER / QJE / AEJ) — every run produces a publication-ready output set with a multi-column regression table (M1→M6 progressive controls/FE) as the centerpiece, plus Table 1 (descriptives), mechanism / heterogeneity / robustness tables, and event-study + coefficient + trend figures. Covers the full 8-step pipeline an applied economist or quantitative social scientist runs on every paper — (1) data cleaning, (2) variable construction & transformation, (3) descriptive statistics & Table 1, (4) statistical diagnostic tests, (5) baseline empirical modeling, (6) robustness battery, (7) further analysis (mechanism, heterogeneity, mediation, moderation), (8) publication-ready tables & figures. **Also covers two parallel domain modes that share the same 8-step scaffolding** — **Mode A — Epidemiology / public health** (target-trial emulation via `zepid` / hand-rolled `pandas`, IPTW + g-formula + TMLE doubly-robust triplet via `zepid` / `econml` / `lifelines`, Mendelian randomization via `pymr` / `mrtool` (or `rpy2` → `MendelianRandomization`/`TwoSampleMR`), KM / AFT / Cox survival via `lifelines`, E-value sensitivity, principal stratification — STROBE / TRIPOD reporting), and **Mode B — ML causal inference** (DML via `econml.dml` / `doubleml`, S/T/X/R/DR meta-learners via `econml.metalearners` / `causalml`, causal forest via `econml.grf` / `causalml`, Dragonnet / TARNet / CEVAE neural causal via `causalml`, BCF via `pymc-bart` / `bcf-py`, matrix completion, CATE distribution + policy tree via `econml.policy` / `policytree-py`, off-policy evaluation, conformal causal via `mapie`, fairness audit via `fairlearn`, DAG learning via `causal-learn` / `cdt` / LLM-assisted). Prescribes which library to reach for at each step, shows the canonical code, and links to deeper `references/` files for variant-specific patterns.",
"trigger": "Use when the user asks for a **complete empirical analysis** in Python, wants to replicate an applied-economics paper from scratch, needs a reproducible workflow that is NOT opinionated on any single vertical package (contrast with StatsPAI), wants explicit control over every estimator and diagnostic, or asks \"how do I write a full empirical pipeline in Python?\". Also triggers when the user names a specific classical step in isolation — \"winsorize at 1/99%\", \"run Breusch-Pagan\", \"build a Table 1 balance table\", \"do a placebo test\", \"event study plot\", \"mediation analysis\" — and wants it wired into the broader pipeline. Mode A triggers on \"target trial emulation\", \"IPTW\", \"TMLE\", \"Mendelian randomization\", \"STROBE\", \"公共健康\", \"流行病学\". Mode B triggers on \"DML\", \"double machine learning\", \"causal forest\", \"meta-learner\", \"Dragonnet\", \"BCF\", \"policy tree\", \"conformal causal\", \"fairness audit\", \"因果机器学习\".",
"commands": [
"npx skills add brycewang-stanford/Auto-Empirical-Research-Skills@00.1-Full-empirical-analysis-skill_Python -g"
],
"install": "npx skills add brycewang-stanford/Auto-Empirical-Research-Skills@00.1-Full-empirical-analysis-skill_Python -g",
"stars": 3530,
"repoUrl": "https://github.com/brycewang-stanford/Auto-Empirical-Research-Skills",
"aliases": [
"00.1-Full-empirical-analysis-skill_Python",
"brycewang-stanford",
"Full-empirical-analysis-skill",
"skill",
"スキル"
]
},
{
"id": "skill-brycewang-stanford-auto-empirical-research-skills-plugins-empirical-analysis-r-skills-pipeline",
"priority": 439,
"category": "community",
"type": "skill",
"want": "Full-empirical-analysis-skill-R",
"feature": "brycewang-stanford/Auto-Empirical-Research-Skills",
"summary": "Classical end-to-end empirical analysis workflow in the modern tidyverse + econometrics R ecosystem — dplyr + tidyr + haven + fixest + sandwich + lmtest + clubSandwich + AER + ivreg + did + bacondecomp + HonestDiD + eventstudyr + rdrobust + rddensity + Synth + gsynth + synthdid + MatchIt + WeightIt + cobalt + ebal + grf + DoubleML + mediation + marginaleffects + modelsummary + kableExtra + gt + ggplot2 + ggpubr + cowplot + binsreg. **Defaults to economics empirical-paper style** (AER / QJE / AEJ) — every run produces a publication-ready output set with a multi-column regression table (M1→M6 progressive controls/FE) as the centerpiece, plus Table 1 (descriptives), mechanism / heterogeneity / robustness tables, and event-study + coefficient + trend figures. Covers the full 8-step R pipeline an applied economist runs on every paper — (1) data import & cleaning (read_dta/read_csv, naniar, janitor, validate-merges), (2) variable construction (mutate/across/winsorize/group_by + lag/lead with dplyr), (3) descriptive statistics & Table 1 (gtsummary, modelsummary::datasummary, tableone), (4) classical diagnostic tests (shapiro/jarque.bera.test/bptest/dwtest/bgtest/vif/adf.test/kpss.test/Hausman), (5) baseline modeling (fixest::feols, ivreg, did::att_gt, eventstudyr, sun_ab, did_imputation, synthdid, rdrobust, MatchIt, WeightIt, grf::causal_forest, DoubleML, mediation), (6) robustness battery (modelsummary stack, clubSandwich CRSE, fwildclusterboot, ri2, robomit Oster, bacondecomp, HonestDiD), (7) further analysis (interactions + marginaleffects, mediation::mediate, gsem via lavaan, dose-response splines, grf CATE), (8) publication-ready tables & figures (modelsummary, kableExtra, gt, stargazer, texreg, flextable to LaTeX/Word/HTML; ggplot2 + ggpubr + cowplot + binsreg + iplot for figures). **Also covers two parallel domain modes that share the same 8-step scaffolding** — **Mode A — Epidemiology / public health** (target-trial emulation, IPTW + g-formula + TMLE doubly-robust triplet via `WeightIt` / `gfoRmula` / `tmle` / `ltmle`, Mendelian randomization via `MendelianRandomization` / `TwoSampleMR` / `MRPRESSO`, KM / Cox / AFT / RMST survival via `survival` / `survminer` / `flexsurv`, E-value sensitivity via `EValue`, principal stratification — STROBE / TRIPOD reporting), and **Mode B — ML causal inference** (DML via `DoubleML`, S/T/X/R/DR meta-learners via `causalweight` / `grf`, causal forest via `grf::causal_forest`, BART/BCF via `bartCause` / `bcf`, matrix completion via `MCPanel`, CATE distribution + policy tree via `policytree`, off-policy evaluation, conformal causal via `conformalInference` / `cfcausal`, fairness audit via `fairmodels`, DAG learning via `pcalg` / `bnlearn` / LLM-assisted).",
"trigger": "Use when the user asks for a complete R empirical analysis, wants a tidyverse-style reproducible R script / Quarto workflow, prefers fixest over reghdfe, needs the R counterpart to StatsPAI / 00.1 / 00.2, or names a specific R step in isolation (\"feols with cluster\", \"MatchIt nearest neighbor\", \"bacondecomp in R\", \"gtsummary table 1\", \"modelsummary to Word\"). Mode A triggers on \"target trial emulation R\", \"tmle ltmle\", \"MendelianRandomization\", \"TwoSampleMR\", \"MRPRESSO\", \"survival cox AFT\", \"STROBE R\", \"EValue R\", \"公共健康 R\", \"流行病学 R\". Mode B triggers on \"DoubleML R\", \"grf causal forest\", \"policytree\", \"bartCause bcf\", \"conformal causal R\", \"fairmodels\", \"pcalg NOTEARS\", \"因果机器学习 R\".",
"commands": [
"npx skills add brycewang-stanford/Auto-Empirical-Research-Skills@pipeline -g"
],
"install": "npx skills add brycewang-stanford/Auto-Empirical-Research-Skills@pipeline -g",
"stars": 3530,
"repoUrl": "https://github.com/brycewang-stanford/Auto-Empirical-Research-Skills",
"aliases": [
"pipeline",
"brycewang-stanford",
"Full-empirical-analysis-skill-R",
"skill",
"スキル"
]
},
{
"id": "skill-brycewang-stanford-auto-empirical-research-skills-skills-00.3-full-empirical-analysis-skill_r",
"priority": 440,
"category": "community",
"type": "skill",
"want": "Full-empirical-analysis-skill-R",
"feature": "brycewang-stanford/Auto-Empirical-Research-Skills",
"summary": "Classical end-to-end empirical analysis workflow in the modern tidyverse + econometrics R ecosystem — dplyr + tidyr + haven + fixest + sandwich + lmtest + clubSandwich + AER + ivreg + did + bacondecomp + HonestDiD + eventstudyr + rdrobust + rddensity + Synth + gsynth + synthdid + MatchIt + WeightIt + cobalt + ebal + grf + DoubleML + mediation + marginaleffects + modelsummary + kableExtra + gt + ggplot2 + ggpubr + cowplot + binsreg. **Defaults to economics empirical-paper style** (AER / QJE / AEJ) — every run produces a publication-ready output set with a multi-column regression table (M1→M6 progressive controls/FE) as the centerpiece, plus Table 1 (descriptives), mechanism / heterogeneity / robustness tables, and event-study + coefficient + trend figures. Covers the full 8-step R pipeline an applied economist runs on every paper — (1) data import & cleaning (read_dta/read_csv, naniar, janitor, validate-merges), (2) variable construction (mutate/across/winsorize/group_by + lag/lead with dplyr), (3) descriptive statistics & Table 1 (gtsummary, modelsummary::datasummary, tableone), (4) classical diagnostic tests (shapiro/jarque.bera.test/bptest/dwtest/bgtest/vif/adf.test/kpss.test/Hausman), (5) baseline modeling (fixest::feols, ivreg, did::att_gt, eventstudyr, sun_ab, did_imputation, synthdid, rdrobust, MatchIt, WeightIt, grf::causal_forest, DoubleML, mediation), (6) robustness battery (modelsummary stack, clubSandwich CRSE, fwildclusterboot, ri2, robomit Oster, bacondecomp, HonestDiD), (7) further analysis (interactions + marginaleffects, mediation::mediate, gsem via lavaan, dose-response splines, grf CATE), (8) publication-ready tables & figures (modelsummary, kableExtra, gt, stargazer, texreg, flextable to LaTeX/Word/HTML; ggplot2 + ggpubr + cowplot + binsreg + iplot for figures). **Also covers two parallel domain modes that share the same 8-step scaffolding** — **Mode A — Epidemiology / public health** (target-trial emulation, IPTW + g-formula + TMLE doubly-robust triplet via `WeightIt` / `gfoRmula` / `tmle` / `ltmle`, Mendelian randomization via `MendelianRandomization` / `TwoSampleMR` / `MRPRESSO`, KM / Cox / AFT / RMST survival via `survival` / `survminer` / `flexsurv`, E-value sensitivity via `EValue`, principal stratification — STROBE / TRIPOD reporting), and **Mode B — ML causal inference** (DML via `DoubleML`, S/T/X/R/DR meta-learners via `causalweight` / `grf`, causal forest via `grf::causal_forest`, BART/BCF via `bartCause` / `bcf`, matrix completion via `MCPanel`, CATE distribution + policy tree via `policytree`, off-policy evaluation, conformal causal via `conformalInference` / `cfcausal`, fairness audit via `fairmodels`, DAG learning via `pcalg` / `bnlearn` / LLM-assisted).",
"trigger": "Use when the user asks for a complete R empirical analysis, wants a tidyverse-style reproducible R script / Quarto workflow, prefers fixest over reghdfe, needs the R counterpart to StatsPAI / 00.1 / 00.2, or names a specific R step in isolation (\"feols with cluster\", \"MatchIt nearest neighbor\", \"bacondecomp in R\", \"gtsummary table 1\", \"modelsummary to Word\"). Mode A triggers on \"target trial emulation R\", \"tmle ltmle\", \"MendelianRandomization\", \"TwoSampleMR\", \"MRPRESSO\", \"survival cox AFT\", \"STROBE R\", \"EValue R\", \"公共健康 R\", \"流行病学 R\". Mode B triggers on \"DoubleML R\", \"grf causal forest\", \"policytree\", \"bartCause bcf\", \"conformal causal R\", \"fairmodels\", \"pcalg NOTEARS\", \"因果机器学习 R\".",
"commands": [
"npx skills add brycewang-stanford/Auto-Empirical-Research-Skills@00.3-Full-empirical-analysis-skill_R -g"
],
"install": "npx skills add brycewang-stanford/Auto-Empirical-Research-Skills@00.3-Full-empirical-analysis-skill_R -g",
"stars": 3530,
"repoUrl": "https://github.com/brycewang-stanford/Auto-Empirical-Research-Skills",
"aliases": [
"00.3-Full-empirical-analysis-skill_R",
"brycewang-stanford",
"Full-empirical-analysis-skill-R",
"skill",
"スキル"
]
},
{
"id": "skill-brycewang-stanford-auto-empirical-research-skills-plugins-empirical-analysis-stata-skills-pipeline",
"priority": 441,
"category": "community",
"type": "skill",
"want": "Full-empirical-analysis-skill-Stata",
"feature": "brycewang-stanford/Auto-Empirical-Research-Skills",
"summary": "Classical end-to-end empirical analysis workflow in the traditional Stata ecosystem — native Stata + reghdfe + ivreg2 + csdid + did_imputation + eventstudyinteract + sdid + rdrobust + rddensity + synth + synth_runner + psmatch2 + teffects + ebalance + coefplot + esttab + asdoc + binscatter. **Defaults to economics empirical-paper style** (AER / QJE / AEJ) — every run produces a publication-ready output set with a multi-column regression table (M1→M6 progressive controls/FE) as the centerpiece, plus Table 1 (descriptives), mechanism / heterogeneity / robustness tables, and event-study + coefficient + trend figures. Covers the full 8-step Stata pipeline an applied economist runs on every paper — (1) data import & cleaning (use/import, destring, misstable, duplicates, merge assert), (2) variable construction (gen/egen/winsor2/xtile/xtset with L./F./D.), (3) descriptive statistics & Table 1 (tabstat/balancetable/asdoc), (4) classical diagnostic tests (sktest/swilk/hettest/imtest/xtserial/xttest3/vif/dfuller/kpss/hausman/estat overid), (5) baseline modeling (reg/xtreg/reghdfe/ivreg2/ivregress/csdid/did_imputation/eventstudyinteract/sdid/rdrobust/synth/psmatch2/teffects/heckman/qreg/ppmlhdfe), (6) robustness battery (bacondecomp/honestdid/rwolf/ritest/wildbootstrap/oster), (7) further analysis (subgroup/triple-diff/interactions/medsem/marginsplot/binscatter by group), (8) publication-ready tables & figures (esttab/outreg2/estout/coefplot/marginsplot/rdplot/twoway combined). **Also covers two parallel domain modes that share the same 8-step scaffolding** — **Mode A — Epidemiology / public health** (target-trial emulation, IPTW + g-formula + TMLE doubly-robust triplet via `teffects ipw` / `teffects ipwra` / `teffects aipw` / `eltmle`, Mendelian randomization via `mrrobust` (IVW / Egger / weighted median) and `mregger` / `mrpresso`, KM / Cox / AFT / RMST survival via `sts` / `stcox` / `streg` / `strmst2`, E-value sensitivity via `evalue` (Linden-Mathur), principal stratification — STROBE / TRIPOD reporting), and **Mode B — ML causal inference** (DML via `ddml` / `pdslasso`, S/T/X/R/DR meta-learners via `crforest` and `ddml interactive`, causal forest via `crforest` / `cforest`, BART/BCF via `bart` / `bartCause`-style externals, CATE distribution + policy tree via `crforest`, off-policy evaluation, conformal causal externals, fairness audit, DAG learning via `pcalg` / external Python callouts).",
"trigger": "Use when the user asks for a complete Stata empirical analysis, wants a reproducible .do-file pipeline, needs a Stata counterpart to the Python StatsPAI / Full-empirical-analysis-skill, or names a specific Stata step in isolation (\"run reghdfe with two-way clustering\", \"csdid event study\", \"winsor2 at 1%\", \"esttab to LaTeX\", \"coefplot with CI\", \"ivreg2 weak-IV test\", \"synth_runner placebos\", \"teffects psmatch balance check\"). Mode A triggers on \"target trial emulation Stata\", \"teffects ipw aipw\", \"eltmle\", \"mrrobust\", \"mregger weighted median\", \"stcox AFT survival\", \"strmst2\", \"evalue Stata\", \"STROBE Stata\", \"公共健康 Stata\", \"流行病学 Stata\". Mode B triggers on \"ddml Stata\", \"pdslasso\", \"crforest causal forest Stata\", \"policy tree Stata\", \"因果机器学习 Stata\".",
"commands": [
"npx skills add brycewang-stanford/Auto-Empirical-Research-Skills@pipeline -g"
],
"install": "npx skills add brycewang-stanford/Auto-Empirical-Research-Skills@pipeline -g",
"stars": 3530,
"repoUrl": "https://github.com/brycewang-stanford/Auto-Empirical-Research-Skills",
"aliases": [
"pipeline",
"brycewang-stanford",
"Full-empirical-analysis-skill-Stata",
"skill",
"スキル"
]
},
{
"id": "skill-brycewang-stanford-auto-empirical-research-skills-skills-00.2-full-empirical-analysis-skill_stata",
"priority": 442,
"category": "community",
"type": "skill",
"want": "Full-empirical-analysis-skill-Stata",
"feature": "brycewang-stanford/Auto-Empirical-Research-Skills",
"summary": "Classical end-to-end empirical analysis workflow in the traditional Stata ecosystem — native Stata + reghdfe + ivreg2 + csdid + did_imputation + eventstudyinteract + sdid + rdrobust + rddensity + synth + synth_runner + psmatch2 + teffects + ebalance + coefplot + esttab + asdoc + binscatter. **Defaults to economics empirical-paper style** (AER / QJE / AEJ) — every run produces a publication-ready output set with a multi-column regression table (M1→M6 progressive controls/FE) as the centerpiece, plus Table 1 (descriptives), mechanism / heterogeneity / robustness tables, and event-study + coefficient + trend figures. Covers the full 8-step Stata pipeline an applied economist runs on every paper — (1) data import & cleaning (use/import, destring, misstable, duplicates, merge assert), (2) variable construction (gen/egen/winsor2/xtile/xtset with L./F./D.), (3) descriptive statistics & Table 1 (tabstat/balancetable/asdoc), (4) classical diagnostic tests (sktest/swilk/hettest/imtest/xtserial/xttest3/vif/dfuller/kpss/hausman/estat overid), (5) baseline modeling (reg/xtreg/reghdfe/ivreg2/ivregress/csdid/did_imputation/eventstudyinteract/sdid/rdrobust/synth/psmatch2/teffects/heckman/qreg/ppmlhdfe), (6) robustness battery (bacondecomp/honestdid/rwolf/ritest/wildbootstrap/oster), (7) further analysis (subgroup/triple-diff/interactions/medsem/marginsplot/binscatter by group), (8) publication-ready tables & figures (esttab/outreg2/estout/coefplot/marginsplot/rdplot/twoway combined). **Also covers two parallel domain modes that share the same 8-step scaffolding** — **Mode A — Epidemiology / public health** (target-trial emulation, IPTW + g-formula + TMLE doubly-robust triplet via `teffects ipw` / `teffects ipwra` / `teffects aipw` / `eltmle`, Mendelian randomization via `mrrobust` (IVW / Egger / weighted median) and `mregger` / `mrpresso`, KM / Cox / AFT / RMST survival via `sts` / `stcox` / `streg` / `strmst2`, E-value sensitivity via `evalue` (Linden-Mathur), principal stratification — STROBE / TRIPOD reporting), and **Mode B — ML causal inference** (DML via `ddml` / `pdslasso`, S/T/X/R/DR meta-learners via `crforest` and `ddml interactive`, causal forest via `crforest` / `cforest`, BART/BCF via `bart` / `bartCause`-style externals, CATE distribution + policy tree via `crforest`, off-policy evaluation, conformal causal externals, fairness audit, DAG learning via `pcalg` / external Python callouts).",
"trigger": "Use when the user asks for a complete Stata empirical analysis, wants a reproducible .do-file pipeline, needs a Stata counterpart to the Python StatsPAI / Full-empirical-analysis-skill, or names a specific Stata step in isolation (\"run reghdfe with two-way clustering\", \"csdid event study\", \"winsor2 at 1%\", \"esttab to LaTeX\", \"coefplot with CI\", \"ivreg2 weak-IV test\", \"synth_runner placebos\", \"teffects psmatch balance check\"). Mode A triggers on \"target trial emulation Stata\", \"teffects ipw aipw\", \"eltmle\", \"mrrobust\", \"mregger weighted median\", \"stcox AFT survival\", \"strmst2\", \"evalue Stata\", \"STROBE Stata\", \"公共健康 Stata\", \"流行病学 Stata\". Mode B triggers on \"ddml Stata\", \"pdslasso\", \"crforest causal forest Stata\", \"policy tree Stata\", \"因果机器学习 Stata\".",
"commands": [
"npx skills add brycewang-stanford/Auto-Empirical-Research-Skills@00.2-Full-empirical-analysis-skill_Stata -g"
],
"install": "npx skills add brycewang-stanford/Auto-Empirical-Research-Skills@00.2-Full-empirical-analysis-skill_Stata -g",
"stars": 3530,
"repoUrl": "https://github.com/brycewang-stanford/Auto-Empirical-Research-Skills",
"aliases": [
"00.2-Full-empirical-analysis-skill_Stata",
"brycewang-stanford",
"Full-empirical-analysis-skill-Stata",
"skill",
"スキル"
]
},
{
"id": "skill-brycewang-stanford-auto-empirical-research-skills-skills-00-full-empirical-analysis-skill_statspai",
"priority": 443,
"category": "community",
"type": "skill",
"want": "StatsPAI_skill",
"feature": "brycewang-stanford/Auto-Empirical-Research-Skills",
"summary": "Use when the user asks to run a full empirical / causal analysis in Python — by default in the style of an applied economics paper (AER / QJE / JPE / ReStud / AEJ) with DID / RD / IV / SCM / DML / matching, written-out estimating equation + identifying assumption, Table 1 / Table 2 / event-study figure / robustness gauntlet — OR in epidemiology / public health style (target-trial emulation, IPTW + g-formula + TMLE triplet, Mendelian randomization, KM/AFT survival, E-value sensitivity, STROBE/TRIPOD reporting) — OR in ML causal inference style (DML, S/T/X/R/DR meta-learners, causal forest, Dragonnet/TARNet/CEVAE, BCF, CATE distribution, policy learning, conformal causal, fairness audit, causal discovery) — OR in distributional / gap-decomposition style (Oaxaca–Blinder `sp.oaxaca`, Kitagawa `sp.kitagawa_decompose`, DiNardo–Fortin–Lemieux `sp.dfl_decompose`, Gelbach `sp.gelbach`, Fairlie `sp.fairlie`, RIF / FFL `sp.rif_decomposition`, all reachable through the `sp.decompose` dispatcher). Also covers exporting multi-column regression tables to Word / Excel / LaTeX (Stata outreg2 / esttab / R modelsummary equivalent) and bundling an entire replication appendix into one .docx / .xlsx / .tex file. Triggers on keywords \"StatsPAI\", \"statspai\", \"AER empirical analysis\", \"applied micro pipeline\", \"Table 1 balance\", \"event study\", \"first-stage F\", \"Oster bound\", \"honest_did\", \"spec_curve\", \"callaway_santanna\", \"dragonnet\", \"text as treatment\", \"outreg2 in Python\", \"regression table to Word/Excel\", \"sp.regtable\", \"sp.collect\", \"sp.paper_tables\", \"sp.feols\", \"summary_col\", \"modelsummary\", \"AER style table\", \"QJE style table\", \"epidemiology pipeline\", \"target trial emulation\", \"g-formula\", \"IPTW\", \"TMLE\", \"Mendelian randomization\", \"STROBE\", \"TRIPOD\", \"公共健康\", \"流行病学\", \"DML\", \"double machine learning\", \"causal forest\", \"meta-learner\", \"CATE\", \"conformal causal\", \"policy learning\", \"因果机器学习\", \"ML causal\", \"decomposition\", \"Oaxaca-Blinder\", \"Kitagawa\", \"DiNardo-Fortin-Lemieux\", \"DFL\", \"Gelbach\", \"RIF decomposition\", \"wage gap decomposition\", \"sp.decompose\", \"sp.oaxaca\".",
"trigger": "Use when the user asks to run a full empirical / causal analysis in Python — by default in the style of an applied economics paper (AER / QJE / JPE / ReStud / AEJ) with DID / RD / IV / SCM / DML / matching, written-out estimating equation + identifying assumption, Table 1 / Table 2 / event-study figure / robustness gauntlet — OR in epidemiology / public health style (target-trial emulation, IPTW + g-formula + TMLE triplet, Mendelian randomization, KM/AFT survival, E-value sensitivity, STROBE/TRIPOD reporting) — OR in ML causal inference style (DML, S/T/X/R/DR meta-learners, causal forest, Dragonnet/TARNet/CEVAE, BCF, CATE distribution, policy learning, conformal causal, fairness audit, causal discovery) — OR in distributional / gap-decomposition style (Oaxaca–Blinder `sp.oaxaca`, Kitagawa `sp.kitagawa_decompose`, DiNardo–Fortin–Lemieux `sp.dfl_decompose`, Gelbach `sp.gelbach`, Fairlie `sp.fairlie`, RIF / FFL `sp.rif_decomposition`, all reachable through the `sp.decompose` dispatcher). Also covers exporting multi-column regression tables to Word / Excel / LaTeX (Stata outreg2 / esttab / R modelsummary equivalent) and bundling an entire replication appendix into one .docx / .xlsx / .tex file. Triggers on keywords \"StatsPAI\", \"statspai\", \"AER empirical analysis\", \"applied micro pipeline\", \"Table 1 balance\", \"event study\", \"first-stage F\", \"Oster bound\", \"honest_did\", \"spec_curve\", \"callaway_santanna\", \"dragonnet\", \"text as treatment\", \"outreg2 in Python\", \"regression table to Word/Excel\", \"sp.regtable\", \"sp.collect\", \"sp.paper_tables\", \"sp.feols\", \"summary_col\", \"modelsummary\", \"AER style table\", \"QJE style table\", \"epidemiology pipeline\", \"target trial emulation\", \"g-formula\", \"IPTW\", \"TMLE\", \"Mendelian randomization\", \"STROBE\", \"TRIPOD\", \"公共健康\", \"流行病学\", \"DML\", \"double machine learning\", \"causal forest\", \"meta-learner\", \"CATE\", \"conformal causal\", \"policy learning\", \"因果机器学习\", \"ML causal\", \"decomposition\", \"Oaxaca-Blinder\", \"Kitagawa\", \"DiNardo-Fortin-Lemieux\", \"DFL\", \"Gelbach\", \"RIF decomposition\", \"wage gap decomposition\", \"sp.decompose\", \"sp.oaxaca\".",
"commands": [
"npx skills add brycewang-stanford/Auto-Empirical-Research-Skills@00-Full-empirical-analysis-skill_StatsPAI -g"
],
"install": "npx skills add brycewang-stanford/Auto-Empirical-Research-Skills@00-Full-empirical-analysis-skill_StatsPAI -g",
"stars": 3530,
"repoUrl": "https://github.com/brycewang-stanford/Auto-Empirical-Research-Skills",
"aliases": [
"00-Full-empirical-analysis-skill_StatsPAI",
"brycewang-stanford",
"StatsPAI_skill",
"skill",
"スキル"
]
},
{
"id": "skill-butterbase-ai-butterbase-butterbase",
"priority": 444,
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
"stars": 3223,
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
"id": "skill-foryourhealth111-pixel-vibe-skills-bundled-skills-adaptyv",
"priority": 445,
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
"stars": 2981,
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
"priority": 446,
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
"stars": 2981,
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
"priority": 447,
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
"stars": 2981,
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
"priority": 448,
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
"stars": 2981,
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
"priority": 449,
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
"stars": 2981,
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
"priority": 450,
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
"stars": 2981,
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
"priority": 451,
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
"stars": 2981,
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
"priority": 452,
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
"stars": 2981,
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
"id": "skill-op7418-claude-to-im-skill-claude-to-im-skill",
"priority": 453,
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
"stars": 2868,
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
"id": "skill-stellarlinkco-myclaude-skills-browser",
"priority": 454,
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
"stars": 2750,
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
"priority": 455,
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
"stars": 2750,
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
"priority": 456,
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
"stars": 2750,
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
"priority": 457,
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
"stars": 2750,
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
"priority": 458,
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
"stars": 2750,
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
"priority": 459,
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
"stars": 2750,
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
"priority": 460,
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
"stars": 2750,
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
"priority": 461,
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
"stars": 2750,
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
"id": "skill-leilei926524-tech-anti-distill-anti-distill",
"priority": 462,
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
"stars": 2387,
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
"id": "skill-op7418-youtube-clipper-skill-youtube-clipper-skill",
"priority": 463,
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
"stars": 2155,
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
"priority": 464,
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
"stars": 2044,
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
"id": "skill-zakirkun-guardian-cli-guardian-cli",
"priority": 465,
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
"stars": 1854,
"repoUrl": "https://github.com/zakirkun/guardian-cli",
"aliases": [
"guardian-cli",
"zakirkun",
"guardian-cli",
"skill",
"スキル"
]
},
{
"id": "skill-youmind-openlab-nano-banana-pro-prompts-recommend-skill-nano-banana-pro-prompts-recommend-skill",
"priority": 466,
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
"stars": 1834,
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
"id": "skill-daymade-claude-code-skills-auto-repo-setup",
"priority": 467,
"category": "community",
"type": "skill",
"want": "auto-repo-setup",
"feature": "daymade/claude-code-skills",
"summary": "Diagnose, repair, and standardize repository setup and safe Git workflows for Claude Code or Codex.",
"trigger": "Use when a repository will not run, a collaborator is onboarding, dependencies or credentials are missing, the user wants startup sync, SessionStart output is duplicated, project instructions or hooks need auditing, or commit/push/conflict/history-cleanup needs a guarded workflow. Route ordinary startup behavior through project instructions or a natural language request; use lifecycle hooks only when behavior must occur before the first prompt and the target runtime has been verified.",
"commands": [
"npx skills add daymade/claude-code-skills@auto-repo-setup -g"
],
"install": "npx skills add daymade/claude-code-skills@auto-repo-setup -g",
"stars": 1348,
"repoUrl": "https://github.com/daymade/claude-code-skills",
"aliases": [
"auto-repo-setup",
"daymade",
"auto-repo-setup",
"skill",
"スキル"
]
},
{
"id": "skill-daymade-claude-code-skills-benchmark-due-diligence",
"priority": 468,
"category": "community",
"type": "skill",
"want": "benchmark-due-diligence",
"feature": "daymade/claude-code-skills",
"summary": "Runs adversarial due-diligence on a benchmark the user envies — a founder, KOL, company, or product whose claimed success looks inflated — splitting marketing bubble from real signal, then mapping the validated playbook onto the user's own resources.",
"trigger": "Use whenever the user wants to 尽调/对标/拆解 a competitor or role-model, 抄/偷师 someone's playbook, suspects 水分/泡沫 in their claims (#1 on Product Hunt, 0-to-1M users, funding, 估值几个亿), asks whether wins are 真本事 vs 运气/时机, or says someone is 太成功了/crushing it and wants the real story — even if they never say 尽调. Prefer over deep-research for debunking inflated claims and extracting a replicable playbook rather than a neutral briefing.",
"commands": [
"npx skills add daymade/claude-code-skills@benchmark-due-diligence -g"
],
"install": "npx skills add daymade/claude-code-skills@benchmark-due-diligence -g",
"stars": 1348,
"repoUrl": "https://github.com/daymade/claude-code-skills",
"aliases": [
"benchmark-due-diligence",
"daymade",
"benchmark-due-diligence",
"skill",
"スキル"
]
},
{
"id": "skill-daymade-claude-code-skills-bilibili-source",
"priority": 469,
"category": "community",
"type": "skill",
"want": "bilibili-source",
"feature": "daymade/claude-code-skills",
"summary": "Fetch comprehensive, login-free data for any Bilibili (B站) video — title, UP name and follower count, publish date, partition, tags, per-part cids, live stats (view, like, coin, favorite, share, reply, danmaku), and full danmaku (bullet-comment) text. Use this skill whenever working with a Bilibili video and needing real, citable numbers or metadata — ingesting a Bilibili source into a knowledge base, analyzing why a video performed, verifying a creator's claimed metrics, building a case study, or any time a Bilibili view/like/favorite count is about to be written into a document — fetch it, never hand-type or estimate it. Accepts BVID, av numbers, b23.tv short links, or full URLs. Subtitles are also covered but require the user's Bilibili login.",
"trigger": "",
"commands": [
"npx skills add daymade/claude-code-skills@bilibili-source -g"
],
"install": "npx skills add daymade/claude-code-skills@bilibili-source -g",
"stars": 1348,
"repoUrl": "https://github.com/daymade/claude-code-skills",
"aliases": [
"bilibili-source",
"daymade",
"bilibili-source",
"skill",
"スキル"
]
},
{
"id": "skill-daymade-claude-code-skills-capture-screen",
"priority": 470,
"category": "community",
"type": "skill",
"want": "capture-screen",
"feature": "daymade/claude-code-skills",
"summary": "Programmatic screenshot capture on macOS. Find window IDs with Swift CGWindowListCopyWindowInfo, control application windows via AppleScript (zoom, scroll, select), and capture with screencapture.",
"trigger": "Use when automating screenshots, capturing application windows for documentation, or building multi-shot visual workflows.",
"commands": [
"npx skills add daymade/claude-code-skills@capture-screen -g"
],
"install": "npx skills add daymade/claude-code-skills@capture-screen -g",
"stars": 1348,
"repoUrl": "https://github.com/daymade/claude-code-skills",
"aliases": [
"capture-screen",
"daymade",
"capture-screen",
"skill",
"スキル"
]
},
{
"id": "skill-daymade-claude-code-skills-cli-demo-generator",
"priority": 471,
"category": "community",
"type": "skill",
"want": "cli-demo-generator",
"feature": "daymade/claude-code-skills",
"summary": "Generates professional animated CLI demos as GIFs using VHS terminal recordings. Handles tape file creation, self-bootstrapping demos with hidden setup, output noise filtering, post-processing speed-up, and frame-level verification.",
"trigger": "Use when users want to create terminal demos, record CLI workflows as GIFs, generate animated documentation, build demo tapes for README files, or need to showcase any command-line tool visually. Also triggers on \"record terminal\", \"VHS tape\", \"demo GIF\", \"animate my CLI\", or any request to visually demonstrate shell commands.",
"commands": [
"npx skills add daymade/claude-code-skills@cli-demo-generator -g"
],
"install": "npx skills add daymade/claude-code-skills@cli-demo-generator -g",
"stars": 1348,
"repoUrl": "https://github.com/daymade/claude-code-skills",
"aliases": [
"cli-demo-generator",
"daymade",
"cli-demo-generator",
"skill",
"スキル"
]
},
{
"id": "skill-daymade-claude-code-skills-cloudflare-troubleshooting",
"priority": 472,
"category": "community",
"type": "skill",
"want": "cloudflare-troubleshooting",
"feature": "daymade/claude-code-skills",
"summary": "Investigate and resolve Cloudflare configuration issues using API-driven evidence gathering.",
"trigger": "Use when troubleshooting ERR_TOO_MANY_REDIRECTS, SSL errors, DNS issues, or any Cloudflare-related problems. Focus on systematic investigation using Cloudflare API to examine actual configuration rather than making assumptions.",
"commands": [
"npx skills add daymade/claude-code-skills@cloudflare-troubleshooting -g"
],
"install": "npx skills add daymade/claude-code-skills@cloudflare-troubleshooting -g",
"stars": 1348,
"repoUrl": "https://github.com/daymade/claude-code-skills",
"aliases": [
"cloudflare-troubleshooting",
"daymade",
"cloudflare-troubleshooting",
"skill",
"スキル"
]
},
{
"id": "skill-daymade-claude-code-skills-codex-image-gallery",
"priority": 473,
"category": "community",
"type": "skill",
"want": "codex-image-gallery",
"feature": "daymade/claude-code-skills",
"summary": "Start or reuse a self-contained local web gallery for browsing Codex-generated images.",
"trigger": "Use when the user asks to browse Codex generated images, open a local image gallery, inspect ~/.codex/generated_images, view a Codex image output folder, or browse image files produced by Codex.",
"commands": [
"npx skills add daymade/claude-code-skills@codex-image-gallery -g"
],
"install": "npx skills add daymade/claude-code-skills@codex-image-gallery -g",
"stars": 1348,
"repoUrl": "https://github.com/daymade/claude-code-skills",
"aliases": [
"codex-image-gallery",
"daymade",
"codex-image-gallery",
"skill",
"スキル"
]
},
{
"id": "skill-daymade-claude-code-skills-competitors-analysis",
"priority": 474,
"category": "community",
"type": "skill",
"want": "competitors-analysis",
"feature": "daymade/claude-code-skills",
"summary": "Discover, clone, update, and analyze competitor repositories with evidence-based competitive intelligence.",
"trigger": "Use when tracking competitors, reviewing competitor source code, adding a competitor repository, comparing product capabilities, building a competitor landscape, checking whether competitor code changed, or when the user says \"竞品分析\", \"竞品\", \"competitor scan\", \"latest competitor code\", \"analyze competitor\", or \"compare with X\". Repository-backed findings must come from local cloned code with file:line citations; market-landscape claims must cite their source and volatility.",
"commands": [
"npx skills add daymade/claude-code-skills@competitors-analysis -g"
],
"install": "npx skills add daymade/claude-code-skills@competitors-analysis -g",
"stars": 1348,
"repoUrl": "https://github.com/daymade/claude-code-skills",
"aliases": [
"competitors-analysis",
"daymade",
"competitors-analysis",
"skill",
"スキル"
]
},
{
"id": "skill-better-auth-better-icons-skills",
"priority": 475,
"category": "community",
"type": "skill",
"want": "better-icons",
"feature": "better-auth/better-icons",
"summary": "Use when working with icons in any project. Provides CLI for searching 200+ icon libraries (Iconify) and retrieving SVGs. Commands: `better-icons search <query>` to find icons, `better-icons get <id>` to get SVG. Also available as MCP server for AI agents.",
"trigger": "Use when working with icons in any project. Provides CLI for searching 200+ icon libraries (Iconify) and retrieving SVGs. Commands: `better-icons search <query>` to find icons, `better-icons get <id>` to get SVG. Also available as MCP server for AI agents.",
"commands": [
"npx skills add better-auth/better-icons -g"
],
"install": "npx skills add better-auth/better-icons -g",
"stars": 1254,
"repoUrl": "https://github.com/better-auth/better-icons",
"aliases": [
"skills",
"better-auth",
"better-icons",
"skill",
"スキル"
]
},
{
"id": "skill-alchaincyf-x-mentor-skill-x-mentor-skill",
"priority": 476,
"category": "community",
"type": "skill",
"want": "x-mastery-mentor",
"feature": "alchaincyf/x-mentor-skill",
"summary": "$10K/hr级X/Twitter运营导师。基于Nicolas Cole、Dickie Bush、Sahil Bloom、Justin Welsh、\nDan Koe、Alex Hormozi六位顶级创作者的方法论 + X开源算法深度分析 + AI/科技赛道专精策略，\n提炼6个核心心智模型、10条决策启发式、完整的选题-写作-增长操作手册。\n通用方法论为底座，AI/科技赛道为专精。\n当用户提到「X运营」「推特」「Twitter」「怎么写推文」「怎么涨粉」「X策略」「推特选题」「tweet」「thread」「X算法」时使用。\n即使用户只是说「这条推文怎么写」「帮我想个X内容」「推特增长」「发推」「write a tweet」「X account」「grow on X」也应触发。",
"trigger": "",
"commands": [
"npx skills add alchaincyf/x-mentor-skill -g"
],
"install": "npx skills add alchaincyf/x-mentor-skill -g",
"stars": 1175,
"repoUrl": "https://github.com/alchaincyf/x-mentor-skill",
"aliases": [
"x-mentor-skill",
"alchaincyf",
"x-mastery-mentor",
"skill",
"スキル"
]
},
{
"id": "skill-itsmostafa-aws-agent-skills-skills-api-gateway",
"priority": 477,
"category": "community",
"type": "skill",
"want": "api-gateway",
"feature": "itsmostafa/aws-agent-skills",
"summary": "AWS API Gateway for REST and HTTP API management.",
"trigger": "Use when creating APIs, configuring integrations, setting up authorization, managing stages, implementing rate limiting, or troubleshooting API issues.",
"commands": [
"npx skills add itsmostafa/aws-agent-skills@api-gateway -g"
],
"install": "npx skills add itsmostafa/aws-agent-skills@api-gateway -g",
"stars": 1147,
"repoUrl": "https://github.com/itsmostafa/aws-agent-skills",
"aliases": [
"api-gateway",
"itsmostafa",
"api-gateway",
"skill",
"スキル"
]
},
{
"id": "skill-itsmostafa-aws-agent-skills-skills-bedrock",
"priority": 478,
"category": "community",
"type": "skill",
"want": "bedrock",
"feature": "itsmostafa/aws-agent-skills",
"summary": "AWS Bedrock foundation models for generative AI.",
"trigger": "Use when invoking foundation models, building AI applications, creating embeddings, configuring model access, or implementing RAG patterns.",
"commands": [
"npx skills add itsmostafa/aws-agent-skills@bedrock -g"
],
"install": "npx skills add itsmostafa/aws-agent-skills@bedrock -g",
"stars": 1147,
"repoUrl": "https://github.com/itsmostafa/aws-agent-skills",
"aliases": [
"bedrock",
"itsmostafa",
"bedrock",
"skill",
"スキル"
]
},
{
"id": "skill-itsmostafa-aws-agent-skills-skills-cloudformation",
"priority": 479,
"category": "community",
"type": "skill",
"want": "cloudformation",
"feature": "itsmostafa/aws-agent-skills",
"summary": "AWS CloudFormation infrastructure as code for stack management.",
"trigger": "Use when writing templates, deploying stacks, managing drift, troubleshooting deployments, or organizing infrastructure with nested stacks.",
"commands": [
"npx skills add itsmostafa/aws-agent-skills@cloudformation -g"
],
"install": "npx skills add itsmostafa/aws-agent-skills@cloudformation -g",
"stars": 1147,
"repoUrl": "https://github.com/itsmostafa/aws-agent-skills",
"aliases": [
"cloudformation",
"itsmostafa",
"cloudformation",
"skill",
"スキル"
]
},
{
"id": "skill-itsmostafa-aws-agent-skills-skills-cloudwatch",
"priority": 480,
"category": "community",
"type": "skill",
"want": "cloudwatch",
"feature": "itsmostafa/aws-agent-skills",
"summary": "AWS CloudWatch monitoring for logs, metrics, alarms, and dashboards.",
"trigger": "Use when setting up monitoring, creating alarms, querying logs with Insights, configuring metric filters, building dashboards, or troubleshooting application issues.",
"commands": [
"npx skills add itsmostafa/aws-agent-skills@cloudwatch -g"
],
"install": "npx skills add itsmostafa/aws-agent-skills@cloudwatch -g",
"stars": 1147,
"repoUrl": "https://github.com/itsmostafa/aws-agent-skills",
"aliases": [
"cloudwatch",
"itsmostafa",
"cloudwatch",
"skill",
"スキル"
]
},
{
"id": "skill-itsmostafa-aws-agent-skills-skills-cognito",
"priority": 481,
"category": "community",
"type": "skill",
"want": "cognito",
"feature": "itsmostafa/aws-agent-skills",
"summary": "AWS Cognito user authentication and authorization service.",
"trigger": "Use when setting up user pools, configuring identity pools, implementing OAuth flows, managing user attributes, or integrating with social identity providers.",
"commands": [
"npx skills add itsmostafa/aws-agent-skills@cognito -g"
],
"install": "npx skills add itsmostafa/aws-agent-skills@cognito -g",
"stars": 1147,
"repoUrl": "https://github.com/itsmostafa/aws-agent-skills",
"aliases": [
"cognito",
"itsmostafa",
"cognito",
"skill",
"スキル"
]
},
{
"id": "skill-itsmostafa-aws-agent-skills-skills-dynamodb",
"priority": 482,
"category": "community",
"type": "skill",
"want": "dynamodb",
"feature": "itsmostafa/aws-agent-skills",
"summary": "AWS DynamoDB NoSQL database for scalable data storage.",
"trigger": "Use when designing table schemas, writing queries, configuring indexes, managing capacity, implementing single-table design, or troubleshooting performance issues.",
"commands": [
"npx skills add itsmostafa/aws-agent-skills@dynamodb -g"
],
"install": "npx skills add itsmostafa/aws-agent-skills@dynamodb -g",
"stars": 1147,
"repoUrl": "https://github.com/itsmostafa/aws-agent-skills",
"aliases": [
"dynamodb",
"itsmostafa",
"dynamodb",
"skill",
"スキル"
]
},
{
"id": "skill-itsmostafa-aws-agent-skills-skills-ec2",
"priority": 483,
"category": "community",
"type": "skill",
"want": "ec2",
"feature": "itsmostafa/aws-agent-skills",
"summary": "AWS EC2 virtual machine management — instances, security groups, key pairs, AMIs, EBS volumes, Auto Scaling Groups, Spot Instances, Session Manager, placement groups, and instance lifecycle automation.\nTrigger on ANY of these, even when EC2 isn't named explicitly: - Launching or provisioning: \"spin up a server\", \"create a VM\", \"new instance\", \"run-instances\", mention of instance types (t3, m5, c5, r6, g5, p4d, t4g, c7g, etc.) - SSH / connectivity problems: \"connection refused\", \"connection timed out\", \"permission denied publickey\", \"can't connect to my instance\", \"SSH not working\" - Instance management: resize, stop, start, terminate, reboot, change instance type - Cost optimization: stop dev instances overnight, save money on EC2, spot vs on-demand, reserved instances - Auto Scaling: ASG, launch template, mixed instances policy, scale to zero, scheduled scaling - Spot Instances: spot fleet, spot interruption, capacity-optimized, price-capacity-optimized - AMIs and backups: create image, custom AMI, EBS snapshot, DLM lifecycle policy, copy AMI - Monitoring: EC2 CPU utilization, CloudWatch metrics for instance, instance status checks, console output - Access methods: Session Manager, EC2 Instance Connect, bastion host, port forwarding - Security: IMDSv2, instance metadata, IAM role on instance, security group rules - User data and bootstrap scripts, cloud-init",
"trigger": "",
"commands": [
"npx skills add itsmostafa/aws-agent-skills@ec2 -g"
],
"install": "npx skills add itsmostafa/aws-agent-skills@ec2 -g",
"stars": 1147,
"repoUrl": "https://github.com/itsmostafa/aws-agent-skills",
"aliases": [
"ec2",
"itsmostafa",
"ec2",
"skill",
"スキル"
]
},
{
"id": "skill-itsmostafa-aws-agent-skills-skills-ecs",
"priority": 484,
"category": "community",
"type": "skill",
"want": "ecs",
"feature": "itsmostafa/aws-agent-skills",
"summary": "AWS ECS container orchestration for running Docker containers.",
"trigger": "Use when deploying containerized applications, configuring task definitions, setting up services, managing clusters, or troubleshooting container issues.",
"commands": [
"npx skills add itsmostafa/aws-agent-skills@ecs -g"
],
"install": "npx skills add itsmostafa/aws-agent-skills@ecs -g",
"stars": 1147,
"repoUrl": "https://github.com/itsmostafa/aws-agent-skills",
"aliases": [
"ecs",
"itsmostafa",
"ecs",
"skill",
"スキル"
]
},
{
"id": "skill-upstash-redis-js-skills",
"priority": 485,
"category": "community",
"type": "skill",
"want": "redis-js",
"feature": "upstash/redis-js",
"summary": "Work with the Upstash Redis JavaScript/TypeScript SDK for serverless Redis operations. Use for caching, session storage, rate limiting, leaderboards, full-text search (querying, filtering, aggregating with @upstash/redis search extension), and all Redis data structures. Supports automatic serialization/deserialization of JavaScript types. Search also available via @upstash/search-redis and @upstash/search-ioredis adapters for TCP clients.",
"trigger": "",
"commands": [
"npx skills add upstash/redis-js -g"
],
"install": "npx skills add upstash/redis-js -g",
"stars": 968,
"repoUrl": "https://github.com/upstash/redis-js",
"aliases": [
"skills",
"upstash",
"redis-js",
"skill",
"スキル"
]
},
{
"id": "skill-sethgammon-citadel-skills-architect",
"priority": 486,
"category": "community",
"type": "skill",
"want": "architect",
"feature": "SethGammon/Citadel",
"summary": "Given a PRD, produces an implementation architecture: file tree, component breakdown, data model, and a phased build plan with end conditions that Archon can execute directly. Multi-candidate evaluation for key decisions.",
"trigger": "",
"commands": [
"npx skills add SethGammon/Citadel@architect -g"
],
"install": "npx skills add SethGammon/Citadel@architect -g",
"stars": 910,
"repoUrl": "https://github.com/SethGammon/Citadel",
"aliases": [
"architect",
"SethGammon",
"architect",
"skill",
"スキル"
]
},
{
"id": "skill-sethgammon-citadel-skills-archon",
"priority": 487,
"category": "community",
"type": "skill",
"want": "archon",
"feature": "SethGammon/Citadel",
"summary": "Autonomous multi-session campaign agent. Decomposes large work into phases, delegates to sub-agents, reviews output, and maintains campaign state across context windows. Use for work that spans multiple sessions and needs persistent state, quality judgment, and strategic decomposition.",
"trigger": "",
"commands": [
"npx skills add SethGammon/Citadel@archon -g"
],
"install": "npx skills add SethGammon/Citadel@archon -g",
"stars": 910,
"repoUrl": "https://github.com/SethGammon/Citadel",
"aliases": [
"archon",
"SethGammon",
"archon",
"skill",
"スキル"
]
},
{
"id": "skill-sethgammon-citadel-skills-ascii-diagram",
"priority": 488,
"category": "community",
"type": "skill",
"want": "ascii-diagram",
"feature": "SethGammon/Citadel",
"summary": "Generate perfectly aligned ASCII diagrams — architecture, flow, sequence, box-and-arrow. Uses a programmatic character-grid approach so alignment is guaranteed by math, not token prediction. Includes post-render verification.",
"trigger": "",
"commands": [
"npx skills add SethGammon/Citadel@ascii-diagram -g"
],
"install": "npx skills add SethGammon/Citadel@ascii-diagram -g",
"stars": 910,
"repoUrl": "https://github.com/SethGammon/Citadel",
"aliases": [
"ascii-diagram",
"SethGammon",
"ascii-diagram",
"skill",
"スキル"
]
},
{
"id": "skill-sethgammon-citadel-skills-autopilot",
"priority": 489,
"category": "community",
"type": "skill",
"want": "autopilot",
"feature": "SethGammon/Citadel",
"summary": "Intake-to-delivery pipeline. Processes pending items from .planning/intake/: briefs new ideas, executes approved work through research → plan → build → verify. Drop a file in .planning/intake/ and invoke this skill.",
"trigger": "",
"commands": [
"npx skills add SethGammon/Citadel@autopilot -g"
],
"install": "npx skills add SethGammon/Citadel@autopilot -g",
"stars": 910,
"repoUrl": "https://github.com/SethGammon/Citadel",
"aliases": [
"autopilot",
"SethGammon",
"autopilot",
"skill",
"スキル"
]
},
{
"id": "skill-sethgammon-citadel-skills-cost",
"priority": 490,
"category": "community",
"type": "skill",
"want": "cost",
"feature": "SethGammon/Citadel",
"summary": "Deep cost exploration and transparency. Shows real token usage, session costs, campaign spend, burn rates, and model breakdown. Reads Claude Code's native session data for exact numbers. Complements /dashboard with focused cost views.",
"trigger": "",
"commands": [
"npx skills add SethGammon/Citadel@cost -g"
],
"install": "npx skills add SethGammon/Citadel@cost -g",
"stars": 910,
"repoUrl": "https://github.com/SethGammon/Citadel",
"aliases": [
"cost",
"SethGammon",
"cost",
"skill",
"スキル"
]
},
{
"id": "skill-sethgammon-citadel-skills-create-app",
"priority": 491,
"category": "community",
"type": "skill",
"want": "create-app",
"feature": "SethGammon/Citadel",
"summary": "End-to-end app creation from a single description. Five tiers: blank project, guided, templated, fully generated, or feature addition to existing codebase. Routes through PRD, architecture, and Archon campaign with verification at every step.",
"trigger": "",
"commands": [
"npx skills add SethGammon/Citadel@create-app -g"
],
"install": "npx skills add SethGammon/Citadel@create-app -g",
"stars": 910,
"repoUrl": "https://github.com/SethGammon/Citadel",
"aliases": [
"create-app",
"SethGammon",
"create-app",
"skill",
"スキル"
]
},
{
"id": "skill-sethgammon-citadel-skills-create-skill",
"priority": 492,
"category": "community",
"type": "skill",
"want": "create-skill",
"feature": "SethGammon/Citadel",
"summary": "Creates new skills from the user's repeating patterns. Interview-driven: discovers the task, analyzes failure modes, generates a production SKILL.md, installs it, tests it on a real target, and teaches the user how to use it.",
"trigger": "Use when a user wants to encode a repeating workflow; do NOT use for one-off tasks or modifying existing skills.",
"commands": [
"npx skills add SethGammon/Citadel@create-skill -g"
],
"install": "npx skills add SethGammon/Citadel@create-skill -g",
"stars": 910,
"repoUrl": "https://github.com/SethGammon/Citadel",
"aliases": [
"create-skill",
"SethGammon",
"create-skill",
"skill",
"スキル"
]
},
{
"id": "skill-sethgammon-citadel-skills-daemon",
"priority": 493,
"category": "community",
"type": "skill",
"want": "daemon",
"feature": "SethGammon/Citadel",
"summary": "Continuous autonomous operation mode. Keeps campaigns running 24/7 by chaining Claude Code sessions via RemoteTrigger. Each session picks up from the campaign's continuation state, works until context runs low or the phase completes, then schedules the next session. Auto-stops on campaign completion or budget exhaustion. The thing that makes Citadel run overnight.",
"trigger": "",
"commands": [
"npx skills add SethGammon/Citadel@daemon -g"
],
"install": "npx skills add SethGammon/Citadel@daemon -g",
"stars": 910,
"repoUrl": "https://github.com/SethGammon/Citadel",
"aliases": [
"daemon",
"SethGammon",
"daemon",
"skill",
"スキル"
]
},
{
"id": "skill-raphaelsalaja-userinterface-wiki-skills",
"priority": 494,
"category": "community",
"type": "skill",
"want": "userinterface-wiki",
"feature": "raphaelsalaja/userinterface-wiki",
"summary": "UI/UX best practices for web interfaces.",
"trigger": "Use when reviewing animations, CSS, audio, typography, UX patterns, prefetching, or icon implementations. Covers 11 categories from animation principles to typography. Outputs file:line findings.",
"commands": [
"npx skills add raphaelsalaja/userinterface-wiki -g"
],
"install": "npx skills add raphaelsalaja/userinterface-wiki -g",
"stars": 877,
"repoUrl": "https://github.com/raphaelsalaja/userinterface-wiki",
"aliases": [
"skills",
"raphaelsalaja",
"userinterface-wiki",
"skill",
"スキル"
]
},
{
"id": "skill-bhanunamikaze-agentic-seo-skill-agentic-seo-skill",
"priority": 495,
"category": "community",
"type": "skill",
"want": "seo",
"feature": "Bhanunamikaze/Agentic-SEO-Skill",
"summary": "Deterministic LLM-first SEO audits for websites, blog posts, and GitHub repositories.",
"trigger": "Use this when the user asks to \"perform SEO analysis\", \"run SEO audit\", \"analyze SEO\", \"check technical SEO\", \"review schema\", \"Core Web Vitals\", \"E-E-A-T\", \"hreflang\", \"GEO\", \"AEO\", or GitHub repository SEO optimization. For full/page/repo audits, run bundled scripts for evidence and return prioritized, confidence-labeled fixes.",
"commands": [
"npx skills add Bhanunamikaze/Agentic-SEO-Skill -g"
],
"install": "npx skills add Bhanunamikaze/Agentic-SEO-Skill -g",
"stars": 865,
"repoUrl": "https://github.com/Bhanunamikaze/Agentic-SEO-Skill",
"aliases": [
"Agentic-SEO-Skill",
"Bhanunamikaze",
"seo",
"skill",
"スキル"
]
},
{
"id": "skill-nexscope-ai-ecommerce-skills-affiliate-marketing-strategy",
"priority": 496,
"category": "community",
"type": "skill",
"want": "affiliate-marketing-strategy",
"feature": "nexscope-ai/eCommerce-Skills",
"summary": "E-commerce skills for AI agents — product research, marketing automation, supply chain optimization, and business analytics for online sellers across Amazon, Shopify, Etsy, TikTok Shop, and all platforms.",
"trigger": "",
"commands": [
"npx skills add nexscope-ai/eCommerce-Skills@affiliate-marketing-strategy -g"
],
"install": "npx skills add nexscope-ai/eCommerce-Skills@affiliate-marketing-strategy -g",
"stars": 782,
"repoUrl": "https://github.com/nexscope-ai/eCommerce-Skills",
"aliases": [
"affiliate-marketing-strategy",
"nexscope-ai",
"affiliate-marketing-strategy",
"skill",
"スキル"
]
},
{
"id": "skill-nexscope-ai-ecommerce-skills-api-monitoring",
"priority": 497,
"category": "community",
"type": "skill",
"want": "api-monitoring",
"feature": "nexscope-ai/eCommerce-Skills",
"summary": "E-commerce skills for AI agents — product research, marketing automation, supply chain optimization, and business analytics for online sellers across Amazon, Shopify, Etsy, TikTok Shop, and all platforms.",
"trigger": "",
"commands": [
"npx skills add nexscope-ai/eCommerce-Skills@api-monitoring -g"
],
"install": "npx skills add nexscope-ai/eCommerce-Skills@api-monitoring -g",
"stars": 782,
"repoUrl": "https://github.com/nexscope-ai/eCommerce-Skills",
"aliases": [
"api-monitoring",
"nexscope-ai",
"api-monitoring",
"skill",
"スキル"
]
},
{
"id": "skill-nexscope-ai-ecommerce-skills-brand-monitoring",
"priority": 498,
"category": "community",
"type": "skill",
"want": "brand-monitoring",
"feature": "nexscope-ai/eCommerce-Skills",
"summary": "Brand monitoring tool for tracking mentions across social media platforms. Monitor Reddit, Google News, YouTube, and DuckDuckGo for brand mentions. Includes sentiment analysis, trend tracking, crisis detection, and competitor comparison. No API key required for basic monitoring.",
"trigger": "",
"commands": [
"npx skills add nexscope-ai/eCommerce-Skills@brand-monitoring -g"
],
"install": "npx skills add nexscope-ai/eCommerce-Skills@brand-monitoring -g",
"stars": 782,
"repoUrl": "https://github.com/nexscope-ai/eCommerce-Skills",
"aliases": [
"brand-monitoring",
"nexscope-ai",
"brand-monitoring",
"skill",
"スキル"
]
},
{
"id": "skill-nexscope-ai-ecommerce-skills-brand-protection-brand-protection-amazon",
"priority": 499,
"category": "community",
"type": "skill",
"want": "brand-protection-amazon",
"feature": "nexscope-ai/eCommerce-Skills",
"summary": "Amazon brand protection toolkit. Detect hijackers, counterfeits, and unauthorized sellers. Includes MAP violation monitoring, trademark abuse detection, complaint templates for Brand Registry, and test buy evidence collection guides. No API key required.",
"trigger": "",
"commands": [
"npx skills add nexscope-ai/eCommerce-Skills@brand-protection-amazon -g"
],
"install": "npx skills add nexscope-ai/eCommerce-Skills@brand-protection-amazon -g",
"stars": 782,
"repoUrl": "https://github.com/nexscope-ai/eCommerce-Skills",
"aliases": [
"brand-protection-amazon",
"nexscope-ai",
"brand-protection-amazon",
"skill",
"スキル"
]
},
{
"id": "skill-nexscope-ai-ecommerce-skills-brand-protection-brand-protection-ebay",
"priority": 500,
"category": "community",
"type": "skill",
"want": "brand-protection-ebay",
"feature": "nexscope-ai/eCommerce-Skills",
"summary": "eBay brand protection toolkit. Detect unauthorized sellers, counterfeits, and VeRO violations. Includes price monitoring, trademark abuse detection, VeRO complaint templates, and enforcement guides. No API key required.",
"trigger": "",
"commands": [
"npx skills add nexscope-ai/eCommerce-Skills@brand-protection-ebay -g"
],
"install": "npx skills add nexscope-ai/eCommerce-Skills@brand-protection-ebay -g",
"stars": 782,
"repoUrl": "https://github.com/nexscope-ai/eCommerce-Skills",
"aliases": [
"brand-protection-ebay",
"nexscope-ai",
"brand-protection-ebay",
"skill",
"スキル"
]
},
{
"id": "skill-nexscope-ai-ecommerce-skills-brand-protection-brand-protection-shopify",
"priority": 501,
"category": "community",
"type": "skill",
"want": "brand-protection-shopify",
"feature": "nexscope-ai/eCommerce-Skills",
"summary": "Shopify/DTC brand protection toolkit. Detect counterfeit stores, unauthorized resellers, and trademark violations. Includes DMCA takedown templates, domain monitoring, and social media infringement detection. No API key required.",
"trigger": "",
"commands": [
"npx skills add nexscope-ai/eCommerce-Skills@brand-protection-shopify -g"
],
"install": "npx skills add nexscope-ai/eCommerce-Skills@brand-protection-shopify -g",
"stars": 782,
"repoUrl": "https://github.com/nexscope-ai/eCommerce-Skills",
"aliases": [
"brand-protection-shopify",
"nexscope-ai",
"brand-protection-shopify",
"skill",
"スキル"
]
},
{
"id": "skill-nexscope-ai-ecommerce-skills-brand-protection-brand-protection-tiktok",
"priority": 502,
"category": "community",
"type": "skill",
"want": "brand-protection-tiktok",
"feature": "nexscope-ai/eCommerce-Skills",
"summary": "TikTok Shop brand protection toolkit. Detect unauthorized sellers, counterfeit products, and affiliate abuse. Includes TikTok IP Protection reporting, influencer misuse detection, and complaint templates. No API key required.",
"trigger": "",
"commands": [
"npx skills add nexscope-ai/eCommerce-Skills@brand-protection-tiktok -g"
],
"install": "npx skills add nexscope-ai/eCommerce-Skills@brand-protection-tiktok -g",
"stars": 782,
"repoUrl": "https://github.com/nexscope-ai/eCommerce-Skills",
"aliases": [
"brand-protection-tiktok",
"nexscope-ai",
"brand-protection-tiktok",
"skill",
"スキル"
]
},
{
"id": "skill-nexscope-ai-ecommerce-skills-brand-protection-brand-protection-walmart",
"priority": 503,
"category": "community",
"type": "skill",
"want": "brand-protection-walmart",
"feature": "nexscope-ai/eCommerce-Skills",
"summary": "Walmart brand protection toolkit. Detect unauthorized sellers, counterfeits, and MAP violations. Includes Walmart Brand Portal reporting, WFS seller monitoring, and complaint templates. No API key required.",
"trigger": "",
"commands": [
"npx skills add nexscope-ai/eCommerce-Skills@brand-protection-walmart -g"
],
"install": "npx skills add nexscope-ai/eCommerce-Skills@brand-protection-walmart -g",
"stars": 782,
"repoUrl": "https://github.com/nexscope-ai/eCommerce-Skills",
"aliases": [
"brand-protection-walmart",
"nexscope-ai",
"brand-protection-walmart",
"skill",
"スキル"
]
},
{
"id": "skill-do1e-mijia-api-skills",
"priority": 504,
"category": "community",
"type": "skill",
"want": "mijia-api",
"feature": "Do1e/mijia-api",
"summary": "通过 `uvx mijiaAPI` CLI 控制米家智能设备。适用于：列出米家设备/家庭/场景/耗材、\n获取或设置设备属性、执行设备动作、查询统计数据、运行场景、通过小爱音箱执行自然语言命令。\n触发词包括\"控制米家设备\"、\"米家\"、\"mijia\"、\"列出设备\"、\"设置亮度\"、\"打开灯\"、\n\"执行动作\"、\"统计数据\"、\"耗电量\"、\"运行场景\"、\"小爱音箱\"、\"耗材\"、\"场景\"。",
"trigger": "",
"commands": [
"npx skills add Do1e/mijia-api -g"
],
"install": "npx skills add Do1e/mijia-api -g",
"stars": 744,
"repoUrl": "https://github.com/Do1e/mijia-api",
"aliases": [
"skills",
"Do1e",
"mijia-api",
"skill",
"スキル"
]
},
{
"id": "skill-denissergeevitch-repo-task-proof-loop-repo-task-proof-loop",
"priority": 505,
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
"id": "skill-talesofai-neta-skills-skills-neta",
"priority": 506,
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
"stars": 717,
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
"priority": 507,
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
"stars": 717,
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
"priority": 508,
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
"stars": 717,
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
"priority": 509,
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
"stars": 717,
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
"priority": 510,
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
"stars": 717,
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
"priority": 511,
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
"stars": 717,
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
"priority": 512,
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
"stars": 717,
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
"priority": 513,
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
"stars": 717,
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
"id": "skill-inline-chat-inline-plugins-inline-skills-inline",
"priority": 514,
"category": "community",
"type": "skill",
"want": "inline",
"feature": "inline-chat/inline",
"summary": "Find, read, summarize, and act in Inline work chats through Inline MCP, the Inline CLI, or a local-agent bridge. Use for Inline spaces, people, DMs, threads, unread messages, history, search, files, creating conversations, sending messages, or installing, authenticating, and operating the Inline CLI. Do not use for developing the Inline codebase, administering production infrastructure, or unrelated chat services.",
"trigger": "",
"commands": [
"npx skills add inline-chat/inline@inline -g"
],
"install": "npx skills add inline-chat/inline@inline -g",
"stars": 681,
"repoUrl": "https://github.com/inline-chat/inline",
"aliases": [
"inline",
"inline-chat",
"inline",
"skill",
"スキル"
]
},
{
"id": "skill-inline-chat-inline-skills-inline",
"priority": 515,
"category": "community",
"type": "skill",
"want": "inline",
"feature": "inline-chat/inline",
"summary": "Find, read, summarize, and act in Inline work chats through Inline MCP, the Inline CLI, or a local-agent bridge. Use for Inline spaces, people, DMs, threads, unread messages, history, search, files, creating conversations, sending messages, or installing, authenticating, and operating the Inline CLI. Do not use for developing the Inline codebase, administering production infrastructure, or unrelated chat services.",
"trigger": "",
"commands": [
"npx skills add inline-chat/inline@inline -g"
],
"install": "npx skills add inline-chat/inline@inline -g",
"stars": 681,
"repoUrl": "https://github.com/inline-chat/inline",
"aliases": [
"inline",
"inline-chat",
"inline",
"skill",
"スキル"
]
},
{
"id": "skill-inline-chat-inline-cli-skill",
"priority": 516,
"category": "community",
"type": "skill",
"want": "inline-cli",
"feature": "inline-chat/inline",
"summary": "Explain and use the Inline CLI (`inline`) for authentication, chats, users, spaces, messages, search, bots, typing, notifications, tasks, schema, attachments, downloads, JSON output, and configuration.",
"trigger": "Use when asked how to use the Inline CLI or its commands, flags, outputs, or workflows.",
"commands": [
"npx skills add inline-chat/inline@skill -g"
],
"install": "npx skills add inline-chat/inline@skill -g",
"stars": 681,
"repoUrl": "https://github.com/inline-chat/inline",
"aliases": [
"skill",
"inline-chat",
"inline-cli",
"skill",
"スキル"
]
},
{
"id": "skill-wechat-gggithub-wechat-claude-code-wechat-claude-code",
"priority": 517,
"category": "community",
"type": "skill",
"want": "wechat-claude-code",
"feature": "Wechat-ggGitHub/wechat-claude-code",
"summary": "微信消息桥接 - 在微信中与 Claude Code 聊天。支持文字对话、图片识别、实时进度推送、斜杠命令。",
"trigger": "",
"commands": [
"npx skills add Wechat-ggGitHub/wechat-claude-code -g"
],
"install": "npx skills add Wechat-ggGitHub/wechat-claude-code -g",
"stars": 672,
"repoUrl": "https://github.com/Wechat-ggGitHub/wechat-claude-code",
"aliases": [
"wechat-claude-code",
"Wechat-ggGitHub",
"wechat-claude-code",
"skill",
"スキル"
]
},
{
"id": "skill-mobiusquant-openmobius-skill-openmobius-skill",
"priority": 518,
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
"stars": 657,
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
"id": "skill-quantco-dataframely-skills",
"priority": 519,
"category": "community",
"type": "skill",
"want": "dataframely",
"feature": "Quantco/dataframely",
"summary": "Best practices for polars data processing with dataframely. Covers definitions of Schema and Collection, usage of .validate() and .filter(), type hints, and testing.",
"trigger": "Use when writing or modifying code involving dataframely or polars data frames.",
"commands": [
"npx skills add Quantco/dataframely -g"
],
"install": "npx skills add Quantco/dataframely -g",
"stars": 612,
"repoUrl": "https://github.com/Quantco/dataframely",
"aliases": [
"skills",
"Quantco",
"dataframely",
"skill",
"スキル"
]
}
];
