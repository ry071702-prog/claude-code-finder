// 生成物: scripts/build_data.py が skills.jsonl + overrides.ja.json から作成。手で編集しない。
// GitHub の Claude Code Skills を非LLMで取り込み、日本語化 42/120 件（週次 ingest-skills.yml）。
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
"stars": 178824,
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
"stars": 178824,
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
"stars": 178824,
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
"stars": 178824,
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
"stars": 178824,
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
"stars": 178824,
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
"stars": 178824,
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
"stars": 178824,
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
"stars": 178824,
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
"stars": 178824,
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
"stars": 178824,
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
"stars": 178824,
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
"stars": 178824,
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
"stars": 178824,
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
"stars": 178824,
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
"stars": 178824,
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
"stars": 178824,
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
"stars": 178824,
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
"stars": 178824,
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
"stars": 31682,
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
"stars": 31682,
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
"stars": 31682,
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
"stars": 31682,
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
"stars": 31682,
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
"stars": 31682,
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
"stars": 31682,
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
"stars": 31682,
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
"stars": 31682,
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
"stars": 8161,
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
"stars": 8161,
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
"priority": 430,
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
"stars": 7573,
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
"id": "skill-dgiot-dgiot-skills-fde-ontology",
"priority": 431,
"category": "community",
"type": "skill",
"want": "fde-ontology",
"feature": "dgiot/dgiot",
"summary": "Open Source Industrial IoT Platform | 300+ protocols | 6-min deploy | Modbus OPC UA MQTT | 12K Stars",
"trigger": "",
"commands": [
"npx skills add dgiot/dgiot@fde-ontology -g"
],
"install": "npx skills add dgiot/dgiot@fde-ontology -g",
"stars": 4849,
"repoUrl": "https://github.com/dgiot/dgiot",
"aliases": [
"fde-ontology",
"dgiot",
"fde-ontology",
"skill",
"スキル"
]
},
{
"id": "skill-dgiot-dgiot-skills",
"priority": 432,
"category": "community",
"type": "skill",
"want": "skills",
"feature": "dgiot/dgiot",
"summary": "Open Source Industrial IoT Platform | 300+ protocols | 6-min deploy | Modbus OPC UA MQTT | 12K Stars",
"trigger": "",
"commands": [
"npx skills add dgiot/dgiot@skills -g"
],
"install": "npx skills add dgiot/dgiot@skills -g",
"stars": 4849,
"repoUrl": "https://github.com/dgiot/dgiot",
"aliases": [
"skills",
"dgiot",
"skills",
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
"stars": 4066,
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
"stars": 4066,
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
"id": "skill-butterbase-ai-butterbase-butterbase",
"priority": 435,
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
"stars": 3690,
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
"id": "skill-op7418-claude-to-im-skill-claude-to-im-skill",
"priority": 436,
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
"stars": 2882,
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
"priority": 437,
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
"stars": 2751,
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
"priority": 438,
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
"stars": 2751,
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
"priority": 439,
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
"stars": 2751,
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
"priority": 440,
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
"stars": 2751,
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
"priority": 441,
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
"stars": 2751,
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
"priority": 442,
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
"stars": 2751,
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
"priority": 443,
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
"stars": 2751,
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
"priority": 444,
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
"stars": 2751,
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
"id": "skill-upstash-ratelimit-js-skills",
"priority": 445,
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
"stars": 2046,
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
"id": "skill-better-auth-better-icons-skills",
"priority": 446,
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
"stars": 1293,
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
"id": "skill-nexscope-ai-ecommerce-skills-affiliate-marketing-strategy",
"priority": 447,
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
"stars": 1001,
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
"priority": 448,
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
"stars": 1001,
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
"priority": 449,
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
"stars": 1001,
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
"priority": 450,
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
"stars": 1001,
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
"priority": 451,
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
"stars": 1001,
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
"priority": 452,
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
"stars": 1001,
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
"priority": 453,
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
"stars": 1001,
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
"priority": 454,
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
"stars": 1001,
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
"id": "skill-raphaelsalaja-userinterface-wiki-skills",
"priority": 455,
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
"stars": 898,
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
"id": "skill-denissergeevitch-repo-task-proof-loop-repo-task-proof-loop",
"priority": 456,
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
"stars": 732,
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
"id": "skill-netaart-neta-skills-skills-neta",
"priority": 457,
"category": "community",
"type": "skill",
"want": "neta",
"feature": "netaart/neta-skills",
"summary": "Neta capability index and routing skill - help choose the appropriate Neta-related skill (neta-space / neta-creative / neta-adventure / neta-community / neta-suggest). Use this skill when you need to understand Neta's overall capabilities, decide which skill fits the current task, or migrate from older documentation that referenced the monolithic neta skill.",
"trigger": "",
"commands": [
"npx skills add netaart/neta-skills@neta -g"
],
"install": "npx skills add netaart/neta-skills@neta -g",
"stars": 726,
"repoUrl": "https://github.com/netaart/neta-skills",
"aliases": [
"neta",
"netaart",
"neta",
"skill",
"スキル"
]
},
{
"id": "skill-netaart-neta-skills-skills-neta-adventure",
"priority": 458,
"category": "community",
"type": "skill",
"want": "neta-adventure",
"feature": "netaart/neta-skills",
"summary": "Neta Adventure Campaign skill - Create and play AI-driven interactive story adventures. Adventure campaigns provide story-crafting and story-telling modes where agents act as DM and roleplay characters following plot, rules, and special guidelines.",
"trigger": "",
"commands": [
"npx skills add netaart/neta-skills@neta-adventure -g"
],
"install": "npx skills add netaart/neta-skills@neta-adventure -g",
"stars": 726,
"repoUrl": "https://github.com/netaart/neta-skills",
"aliases": [
"neta-adventure",
"netaart",
"neta-adventure",
"skill",
"スキル"
]
},
{
"id": "skill-netaart-neta-skills-skills-neta-character",
"priority": 459,
"category": "community",
"type": "skill",
"want": "neta-character",
"feature": "netaart/neta-skills",
"summary": "Neta Character Forging Skill - Guides users through creating or updating anime/cultural IP/original character (OC) VTokens (Virtual Tokens, TCP). Includes visual preview, character documentation, backstory confirmation, and complete creative workflow. Use this skill when users want to create new characters, modify existing ones, or begin character design.",
"trigger": "",
"commands": [
"npx skills add netaart/neta-skills@neta-character -g"
],
"install": "npx skills add netaart/neta-skills@neta-character -g",
"stars": 726,
"repoUrl": "https://github.com/netaart/neta-skills",
"aliases": [
"neta-character",
"netaart",
"neta-character",
"skill",
"スキル"
]
},
{
"id": "skill-netaart-neta-skills-skills-neta-community",
"priority": 460,
"category": "community",
"type": "skill",
"want": "neta-community",
"feature": "netaart/neta-skills",
"summary": "Neta API community skill — browse interactive feeds, view collection details, like and interact with content, and browse content by tags and characters in a community context. Use this skill when the user wants to “see what people are making”, “scroll the feed”, or “interact with works”. Do not use it for taxonomy/keyword‑level research (handled by neta-suggest) or for generating images/videos/songs (handled by neta-creative).",
"trigger": "",
"commands": [
"npx skills add netaart/neta-skills@neta-community -g"
],
"install": "npx skills add netaart/neta-skills@neta-community -g",
"stars": 726,
"repoUrl": "https://github.com/netaart/neta-skills",
"aliases": [
"neta-community",
"netaart",
"neta-community",
"skill",
"スキル"
]
},
{
"id": "skill-netaart-neta-skills-skills-neta-creative",
"priority": 461,
"category": "community",
"type": "skill",
"want": "neta-creative",
"feature": "netaart/neta-skills",
"summary": "Neta API creative skill — generate images, videos, songs, and MVs, and deconstruct creative ideas from existing works. Use this skill when the user wants to create or edit images/videos/songs/MVs, or create based on character settings and existing works. Do not use it for feed browsing or tag/category research (those are handled by neta-community and neta-suggest).",
"trigger": "",
"commands": [
"npx skills add netaart/neta-skills@neta-creative -g"
],
"install": "npx skills add netaart/neta-skills@neta-creative -g",
"stars": 726,
"repoUrl": "https://github.com/netaart/neta-skills",
"aliases": [
"neta-creative",
"netaart",
"neta-creative",
"skill",
"スキル"
]
},
{
"id": "skill-netaart-neta-skills-skills-neta-elementum",
"priority": 462,
"category": "community",
"type": "skill",
"want": "neta-elementum",
"feature": "netaart/neta-skills",
"summary": "Neta Elementum Alchemy Skill - Guides users through creating or updating style element (Elementum) VTokens (Virtual Tokens, TCP). Elementum encapsulates a visual concept (scene, prop, clothing, weapon, pose, atmosphere, meme, etc.) and can be referenced in make_image via /ElementName after creation. Use this skill when users want to create new Elementa, encapsulate visual styles or concepts, or modify existing Elementa.",
"trigger": "",
"commands": [
"npx skills add netaart/neta-skills@neta-elementum -g"
],
"install": "npx skills add netaart/neta-skills@neta-elementum -g",
"stars": 726,
"repoUrl": "https://github.com/netaart/neta-skills",
"aliases": [
"neta-elementum",
"netaart",
"neta-elementum",
"skill",
"スキル"
]
},
{
"id": "skill-netaart-neta-skills-skills-neta-space",
"priority": 463,
"category": "community",
"type": "skill",
"want": "neta-space",
"feature": "netaart/neta-skills",
"summary": "Neta API space and world‑view browsing skill — browse worldbuilding, sub‑spaces, and playable content by space/hashtag. Use this skill when the user talks about worlds/spaces/universes/scenes, or wants to browse characters and gameplay based on space and activity structure. Do not use it for concrete media creation (handled by neta-creative).",
"trigger": "",
"commands": [
"npx skills add netaart/neta-skills@neta-space -g"
],
"install": "npx skills add netaart/neta-skills@neta-space -g",
"stars": 726,
"repoUrl": "https://github.com/netaart/neta-skills",
"aliases": [
"neta-space",
"netaart",
"neta-space",
"skill",
"スキル"
]
},
{
"id": "skill-netaart-neta-skills-skills-neta-suggest",
"priority": 464,
"category": "community",
"type": "skill",
"want": "neta-suggest",
"feature": "netaart/neta-skills",
"summary": "Neta API research and recommendation skill — provide keyword/tag/category suggestions, validate taxonomy paths, and power multi‑mode content feeds, supporting progressive exploration from broad to precise. Use this skill when the user has no clear goal, wants topic/idea suggestions, or needs systematic content filtering by keywords/categories. It does not directly generate media (handled by neta-creative); community interactions are handled by neta-community.",
"trigger": "",
"commands": [
"npx skills add netaart/neta-skills@neta-suggest -g"
],
"install": "npx skills add netaart/neta-skills@neta-suggest -g",
"stars": 726,
"repoUrl": "https://github.com/netaart/neta-skills",
"aliases": [
"neta-suggest",
"netaart",
"neta-suggest",
"skill",
"スキル"
]
},
{
"id": "skill-quantco-dataframely-skills",
"priority": 465,
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
"stars": 618,
"repoUrl": "https://github.com/Quantco/dataframely",
"aliases": [
"skills",
"Quantco",
"dataframely",
"skill",
"スキル"
]
},
{
"id": "skill-ahmadawais-ramadan-cli-skills",
"priority": 466,
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
"stars": 602,
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
"id": "skill-butterbase-ai-butterbase-skills-skills-agents",
"priority": 467,
"category": "community",
"type": "skill",
"want": "agents",
"feature": "butterbase-ai/butterbase-skills",
"summary": "Use when designing, deploying, or debugging a Butterbase Agent (declarative LLM/tool graph), registering an MCP server for tool use, or wiring access controls and rate limits. Agents are first-class app resources defined by a `graph_spec` and invoked over `/v1/<app_id>/agents/<name>/runs`.",
"trigger": "Use when designing, deploying, or debugging a Butterbase Agent (declarative LLM/tool graph), registering an MCP server for tool use, or wiring access controls and rate limits. Agents are first-class app resources defined by a `graph_spec` and invoked over `/v1/<app_id>/agents/<name>/runs`.",
"commands": [
"npx skills add butterbase-ai/butterbase-skills@agents -g"
],
"install": "npx skills add butterbase-ai/butterbase-skills@agents -g",
"stars": 533,
"repoUrl": "https://github.com/butterbase-ai/butterbase-skills",
"aliases": [
"agents",
"butterbase-ai",
"agents",
"skill",
"スキル"
]
},
{
"id": "skill-butterbase-ai-butterbase-skills-skills-ai",
"priority": 468,
"category": "community",
"type": "skill",
"want": "ai",
"feature": "butterbase-ai/butterbase-skills",
"summary": "Use when calling the app's AI gateway from agent tools — chat completions, embeddings, listing models, configuring defaults or BYOK, reading token/cost usage",
"trigger": "Use when calling the app's AI gateway from agent tools — chat completions, embeddings, listing models, configuring defaults or BYOK, reading token/cost usage",
"commands": [
"npx skills add butterbase-ai/butterbase-skills@ai -g"
],
"install": "npx skills add butterbase-ai/butterbase-skills@ai -g",
"stars": 533,
"repoUrl": "https://github.com/butterbase-ai/butterbase-skills",
"aliases": [
"ai",
"butterbase-ai",
"ai",
"skill",
"スキル"
]
},
{
"id": "skill-butterbase-ai-butterbase-skills-skills-auth-setup",
"priority": 469,
"category": "community",
"type": "skill",
"want": "auth-setup",
"feature": "butterbase-ai/butterbase-skills",
"summary": "Use when configuring OAuth providers (Google/GitHub/Apple/X/etc.), setting up post-login auth hooks, tuning JWT lifetimes, or generating service API keys",
"trigger": "Use when configuring OAuth providers (Google/GitHub/Apple/X/etc.), setting up post-login auth hooks, tuning JWT lifetimes, or generating service API keys",
"commands": [
"npx skills add butterbase-ai/butterbase-skills@auth-setup -g"
],
"install": "npx skills add butterbase-ai/butterbase-skills@auth-setup -g",
"stars": 533,
"repoUrl": "https://github.com/butterbase-ai/butterbase-skills",
"aliases": [
"auth-setup",
"butterbase-ai",
"auth-setup",
"skill",
"スキル"
]
},
{
"id": "skill-butterbase-ai-butterbase-skills-skills-build-app",
"priority": 470,
"category": "community",
"type": "skill",
"want": "build-app",
"feature": "butterbase-ai/butterbase-skills",
"summary": "Use when building a new Butterbase app from scratch, creating a full-stack application, or when the user asks to set up a complete backend with database, auth, and deployment",
"trigger": "Use when building a new Butterbase app from scratch, creating a full-stack application, or when the user asks to set up a complete backend with database, auth, and deployment",
"commands": [
"npx skills add butterbase-ai/butterbase-skills@build-app -g"
],
"install": "npx skills add butterbase-ai/butterbase-skills@build-app -g",
"stars": 533,
"repoUrl": "https://github.com/butterbase-ai/butterbase-skills",
"aliases": [
"build-app",
"butterbase-ai",
"build-app",
"skill",
"スキル"
]
},
{
"id": "skill-butterbase-ai-butterbase-skills-butterbase-skills",
"priority": 471,
"category": "community",
"type": "skill",
"want": "butterbase-skills",
"feature": "butterbase-ai/butterbase-skills",
"summary": "Claude Code plugin for Butterbase — 30+ guided skills and auto-configured MCP for the AI-native backend-as-a-service.",
"trigger": "",
"commands": [
"npx skills add butterbase-ai/butterbase-skills@butterbase-skills -g"
],
"install": "npx skills add butterbase-ai/butterbase-skills@butterbase-skills -g",
"stars": 533,
"repoUrl": "https://github.com/butterbase-ai/butterbase-skills",
"aliases": [
"butterbase-skills",
"butterbase-ai",
"butterbase-skills",
"skill",
"スキル"
]
},
{
"id": "skill-butterbase-ai-butterbase-skills-skills-contributing",
"priority": 472,
"category": "community",
"type": "skill",
"want": "contributing",
"feature": "butterbase-ai/butterbase-skills",
"summary": "Use when contributing to the Butterbase codebase, adding new MCP tools, creating API routes, writing migrations, or understanding the monorepo architecture",
"trigger": "Use when contributing to the Butterbase codebase, adding new MCP tools, creating API routes, writing migrations, or understanding the monorepo architecture",
"commands": [
"npx skills add butterbase-ai/butterbase-skills@contributing -g"
],
"install": "npx skills add butterbase-ai/butterbase-skills@contributing -g",
"stars": 533,
"repoUrl": "https://github.com/butterbase-ai/butterbase-skills",
"aliases": [
"contributing",
"butterbase-ai",
"contributing",
"skill",
"スキル"
]
},
{
"id": "skill-butterbase-ai-butterbase-skills-skills-debug-rls",
"priority": 473,
"category": "community",
"type": "skill",
"want": "debug-rls",
"feature": "butterbase-ai/butterbase-skills",
"summary": "Use when users report access denied errors, see wrong data, RLS policies are not working, or when troubleshooting Row-Level Security issues in Butterbase",
"trigger": "Use when users report access denied errors, see wrong data, RLS policies are not working, or when troubleshooting Row-Level Security issues in Butterbase",
"commands": [
"npx skills add butterbase-ai/butterbase-skills@debug-rls -g"
],
"install": "npx skills add butterbase-ai/butterbase-skills@debug-rls -g",
"stars": 533,
"repoUrl": "https://github.com/butterbase-ai/butterbase-skills",
"aliases": [
"debug-rls",
"butterbase-ai",
"debug-rls",
"skill",
"スキル"
]
},
{
"id": "skill-butterbase-ai-butterbase-skills-skills-deploy-frontend",
"priority": 474,
"category": "community",
"type": "skill",
"want": "deploy-frontend",
"feature": "butterbase-ai/butterbase-skills",
"summary": "Use when deploying a frontend (React, Next.js, or static HTML) to a live URL on Butterbase, or when troubleshooting deployment issues like MIME type errors or blank pages",
"trigger": "Use when deploying a frontend (React, Next.js, or static HTML) to a live URL on Butterbase, or when troubleshooting deployment issues like MIME type errors or blank pages",
"commands": [
"npx skills add butterbase-ai/butterbase-skills@deploy-frontend -g"
],
"install": "npx skills add butterbase-ai/butterbase-skills@deploy-frontend -g",
"stars": 533,
"repoUrl": "https://github.com/butterbase-ai/butterbase-skills",
"aliases": [
"deploy-frontend",
"butterbase-ai",
"deploy-frontend",
"skill",
"スキル"
]
},
{
"id": "skill-thereddeveloper-ply-engine-ply-engine",
"priority": 475,
"category": "community",
"type": "skill",
"want": "ply-engine",
"feature": "TheRedDeveloper/ply-engine",
"summary": "Complete implementation and design guide for Ply. Use this skill whenever a task involves ply-engine APIs, plyx workflows, or building UI in Rust with Ply.",
"trigger": "",
"commands": [
"npx skills add TheRedDeveloper/ply-engine -g"
],
"install": "npx skills add TheRedDeveloper/ply-engine -g",
"stars": 503,
"repoUrl": "https://github.com/TheRedDeveloper/ply-engine",
"aliases": [
"ply-engine",
"TheRedDeveloper",
"ply-engine",
"skill",
"スキル"
]
},
{
"id": "skill-browser-use-browser-harness-js-browser-harness-js",
"priority": 476,
"category": "community",
"type": "skill",
"want": "cdp",
"feature": "browser-use/browser-harness-js",
"summary": "Drive Chrome via the DevTools Protocol from JavaScript. Run JS snippets through the `browser-harness-js` CLI — it auto-spawns a long-lived bun HTTP server holding a fully-typed CDP `Session`, and every call (`browser-harness-js 'await session.Page.navigate(...)'`) executes against the same persistent connection. Session, active target, and globals survive across calls.",
"trigger": "Use when the user wants to automate, script, or inspect a Chrome browser via CDP — single tab or multi-tab, attach to existing Chrome or to a new one launched with --remote-debugging-port.",
"commands": [
"npx skills add browser-use/browser-harness-js -g"
],
"install": "npx skills add browser-use/browser-harness-js -g",
"stars": 489,
"repoUrl": "https://github.com/browser-use/browser-harness-js",
"aliases": [
"browser-harness-js",
"browser-use",
"cdp",
"skill",
"スキル"
]
},
{
"id": "skill-paraschopra-make-pages-interactive-make-pages-interactive",
"priority": 477,
"category": "community",
"type": "skill",
"want": "make-pages-interactive",
"feature": "paraschopra/make-pages-interactive",
"summary": "Turn a directory of static HTML pages into a live commenting surface. Injects a feedback library, starts a tiny server, and routes user comments into a JSONL inbox that the agent monitors and responds to by editing the pages. Trigger phrases — \"make this page interactive\", \"make these pages interactive\", \"let me comment on this page\", \"add feedback to these pages\".",
"trigger": "",
"commands": [
"npx skills add paraschopra/make-pages-interactive -g"
],
"install": "npx skills add paraschopra/make-pages-interactive -g",
"stars": 478,
"repoUrl": "https://github.com/paraschopra/make-pages-interactive",
"aliases": [
"make-pages-interactive",
"paraschopra",
"make-pages-interactive",
"skill",
"スキル"
]
},
{
"id": "skill-agentsope-skillalchemy-skills-agentsop-agent-topology-selection",
"priority": 478,
"category": "community",
"type": "skill",
"want": "agentsop-agent-topology-selection",
"feature": "agentsope/SkillAlchemy",
"summary": "Cross-framework enhancement overlay for choosing a multi-agent topology BEFORE writing any agent. A binary-question rubric — is single-agent + tools enough? do agents need to know about each other? does the output need one voice? — maps the answer to single-agent / supervisor / swarm / sequential / hierarchical. Activates when a coder agent is tempted to \"split the work into roles\" or reaches for a multi-agent framework. Encodes the *selection rubric* that the per-framework skills assume but never surface. Search keywords: when to use multi-agent, single vs multi agent, do I need multiple agents, supervisor vs swarm, multi-agent vs single agent, agent team design.",
"trigger": "",
"commands": [
"npx skills add agentsope/SkillAlchemy@agentsop-agent-topology-selection -g"
],
"install": "npx skills add agentsope/SkillAlchemy@agentsop-agent-topology-selection -g",
"stars": 438,
"repoUrl": "https://github.com/agentsope/SkillAlchemy",
"aliases": [
"agentsop-agent-topology-selection",
"agentsope",
"agentsop-agent-topology-selection",
"skill",
"スキル"
]
},
{
"id": "skill-agentsope-skillalchemy-skills-agentsop-aider",
"priority": 479,
"category": "community",
"type": "skill",
"want": "agentsop-aider",
"feature": "agentsope/SkillAlchemy",
"summary": "SOP for terminal-based, git-native AI pair programming with Aider (git work-tree + tree-sitter repo-map + edit-format + human-in-loop REPL).",
"trigger": "Use when editing code in an existing git repo via an LLM, when you need to converge a change to 2-5 files, pick an edit format that fits the model, run architect+editor mode, or wire an auto-test loop.",
"commands": [
"npx skills add agentsope/SkillAlchemy@agentsop-aider -g"
],
"install": "npx skills add agentsope/SkillAlchemy@agentsop-aider -g",
"stars": 438,
"repoUrl": "https://github.com/agentsope/SkillAlchemy",
"aliases": [
"agentsop-aider",
"agentsope",
"agentsop-aider",
"skill",
"スキル"
]
},
{
"id": "skill-agentsope-skillalchemy-skills-agentsop-bio-fraud-forensics",
"priority": 480,
"category": "community",
"type": "skill",
"want": "agentsop-bio-fraud-forensics",
"feature": "agentsope/SkillAlchemy",
"summary": "Screens biomedical / life-science papers for signs of data fabrication, image manipulation, and statistical anomalies, using the detection techniques distilled from the field's canonical exposure platforms (PubPeer, Data Colada, Science Integrity Digest, For Better Science) and tools (ImageTwin/Proofig, statcheck, GRIM/GRIMMER, Problematic Paper Screener, Seek & Blastn).",
"trigger": "Use when asked to check a paper/figure for image duplication, blot splicing, impossible statistics, paper-mill or tortured-phrase signals, research integrity, or \"is this data faked\"; or when a user shares a figure, Western blot, supplementary dataset, or DOI and asks whether it looks manipulated. Reports observable anomalies as questions for clarification — it never accuses anyone of fraud.",
"commands": [
"npx skills add agentsope/SkillAlchemy@agentsop-bio-fraud-forensics -g"
],
"install": "npx skills add agentsope/SkillAlchemy@agentsop-bio-fraud-forensics -g",
"stars": 438,
"repoUrl": "https://github.com/agentsope/SkillAlchemy",
"aliases": [
"agentsop-bio-fraud-forensics",
"agentsope",
"agentsop-bio-fraud-forensics",
"skill",
"スキル"
]
},
{
"id": "skill-agentsope-skillalchemy-skills-agentsop-bounded-loop",
"priority": 481,
"category": "community",
"type": "skill",
"want": "agentsop-bounded-loop",
"feature": "agentsope/SkillAlchemy",
"summary": "Universal discipline for any LM-driven loop — agent retries, plan-act-observe, multi-agent handoffs, optimiser passes, test-fix cycles. Encodes the one rule every framework documents quietly and every team relearns expensively: the LM in the loop is NEVER a reliable terminator. Termination must be provided by an explicit counter + exit predicate + stagnation signal + escalation path that live OUTSIDE the LM's control. This is a tool- level, framework-agnostic skill. It maps onto LangGraph (recursion_limit + state counter + interrupt), CrewAI (max_iter + max_rpm + human_input), Claude / OpenAI SDKs (max_iterations + tool_use_budget), DSPy (declared evaluation budget), Aider (REPL + explicit retry cap), and AutoGen (max_consecutive_auto_reply). Search keywords: infinite loop, recursion limit, recursion_limit, GraphRecursionError, max iterations, max_iter, agent stuck, agent won't stop, runaway agent, ReAct loop not terminating, agent repeating itself.",
"trigger": "",
"commands": [
"npx skills add agentsope/SkillAlchemy@agentsop-bounded-loop -g"
],
"install": "npx skills add agentsope/SkillAlchemy@agentsop-bounded-loop -g",
"stars": 438,
"repoUrl": "https://github.com/agentsope/SkillAlchemy",
"aliases": [
"agentsop-bounded-loop",
"agentsope",
"agentsop-bounded-loop",
"skill",
"スキル"
]
},
{
"id": "skill-agentsope-skillalchemy-skills-agentsop-code-execution-decision",
"priority": 482,
"category": "community",
"type": "skill",
"want": "agentsop-code-execution-decision",
"feature": "agentsope/SkillAlchemy",
"summary": "Decision rubric for when an LM agent should write-and-run code (Program-of-Thought / code interpreter) versus reason in natural language: classify each step as deterministic- computable (emit + execute code, feed the result back) vs judgment (stay in prose).",
"trigger": "Use when designing or debugging an agent step that does arithmetic/parsing/data transforms, when prose reasoning hallucinates a computation (under-coding), or when a sandbox round- trip is wasted on a judgment task (over-coding). Search keywords: code interpreter, agent does math wrong, calculator hallucination, when to run code vs reason, program of thought, PoT, tool vs reasoning.",
"commands": [
"npx skills add agentsope/SkillAlchemy@agentsop-code-execution-decision -g"
],
"install": "npx skills add agentsope/SkillAlchemy@agentsop-code-execution-decision -g",
"stars": 438,
"repoUrl": "https://github.com/agentsope/SkillAlchemy",
"aliases": [
"agentsop-code-execution-decision",
"agentsope",
"agentsop-code-execution-decision",
"skill",
"スキル"
]
},
{
"id": "skill-agentsope-skillalchemy-skills-leap",
"priority": 483,
"category": "community",
"type": "skill",
"want": "LEAP",
"feature": "agentsope/SkillAlchemy",
"summary": "LEAP builds skills through two pipelines: Branch A distills a skill from raw\ndata, while Branch B combines multiple skills into one. It is called by the\nmain SkillAlchemy workflow.",
"trigger": "Use when SkillAlchemy requires distillation or fusion.",
"commands": [
"npx skills add agentsope/SkillAlchemy@LEAP -g"
],
"install": "npx skills add agentsope/SkillAlchemy@LEAP -g",
"stars": 438,
"repoUrl": "https://github.com/agentsope/SkillAlchemy",
"aliases": [
"LEAP",
"agentsope",
"LEAP",
"skill",
"スキル"
]
},
{
"id": "skill-agentsope-skillalchemy-skills-lens",
"priority": 484,
"category": "community",
"type": "skill",
"want": "Lens",
"feature": "agentsope/SkillAlchemy",
"summary": "Lens — Add a cognitive lens to any problem. It accepts a task description and\nproduces an enhanced description that surfaces hidden dimensions, prerequisites,\nand lines of inquiry—the things you do not know you do not know.",
"trigger": "Use when the user asks to brainstorm, analyze, generate a skill, distill, or fuse,\nor when the input is too simple and needs to be expanded.",
"commands": [
"npx skills add agentsope/SkillAlchemy@Lens -g"
],
"install": "npx skills add agentsope/SkillAlchemy@Lens -g",
"stars": 438,
"repoUrl": "https://github.com/agentsope/SkillAlchemy",
"aliases": [
"Lens",
"agentsope",
"Lens",
"skill",
"スキル"
]
},
{
"id": "skill-agentsope-skillalchemy-skillalchemy",
"priority": 485,
"category": "community",
"type": "skill",
"want": "SkillAlchemy",
"feature": "agentsope/SkillAlchemy",
"summary": "SkillAlchemy — One thought conceived, one goal achieved. Accept any idea or\ndistillation target and produce an installable SKILL.md.\nIt uses Lens to clarify the problem and LEAP to run distillation or fusion.\nThis is the sole user-facing entry point.",
"trigger": "Use when the user asks to distill, generate a skill, fuse skills, or says,\n\"I want to build X, but I do not know where to start.\"",
"commands": [
"npx skills add agentsope/SkillAlchemy@SkillAlchemy -g"
],
"install": "npx skills add agentsope/SkillAlchemy@SkillAlchemy -g",
"stars": 438,
"repoUrl": "https://github.com/agentsope/SkillAlchemy",
"aliases": [
"SkillAlchemy",
"agentsope",
"SkillAlchemy",
"skill",
"スキル"
]
},
{
"id": "skill-eric-yibo-shen-zhangxuefeng-skillset-zhangxuefeng-skillset",
"priority": 486,
"category": "community",
"type": "skill",
"want": "gaokao-mentor",
"feature": "Eric-Yibo-Shen/zhangxuefeng-skillset",
"summary": "张雪峰高考志愿填报顾问 AI。用张雪峰的说话方式和思维逻辑，替普通家庭消除志愿填报信息差。\n核心框架：城市>学校>专业；就业倒推法；四步决策流程（可行集→目标倒推→AI时代校正→冲稳保三方案）。\n涵盖：专业选择、院校推荐、就业前景、新高考选科、大学规划、AI时代风险校正。\n安装：npx skills add eric-yibo-shen/zhangxuefeng",
"trigger": "",
"commands": [
"npx skills add Eric-Yibo-Shen/zhangxuefeng-skillset -g"
],
"install": "npx skills add Eric-Yibo-Shen/zhangxuefeng-skillset -g",
"stars": 386,
"repoUrl": "https://github.com/Eric-Yibo-Shen/zhangxuefeng-skillset",
"aliases": [
"zhangxuefeng-skillset",
"Eric-Yibo-Shen",
"gaokao-mentor",
"skill",
"スキル"
]
},
{
"id": "skill-joeseesun-qiaomu-meta-skill-qiaomu-meta-skill",
"priority": 487,
"category": "community",
"type": "skill",
"want": "qiaomu-meta-skill",
"feature": "joeseesun/qiaomu-meta-skill",
"summary": "Research, create, improve, migrate, evaluate, package, install-check, govern, and safely publish qiaomu-flavored agent skills from workflows, prompts, transcripts, docs, SOPs, runbooks, scripts, or notes. Use for new or existing skills, prior-art synthesis, routing/trigger boundaries, trigger or output evals, Skill IR, release gates, README/Profile preparation, GitHub repository and pull-request publication, versioned Releases, clean npx installation, team reuse, and create-and-publish flows. The publication path is self-contained and forbids direct default-branch pushes. Exclude one-off summaries, translations, ordinary docs, non-skill package publishing, and tasks that explicitly should not become a skill.",
"trigger": "",
"commands": [
"npx skills add joeseesun/qiaomu-meta-skill -g"
],
"install": "npx skills add joeseesun/qiaomu-meta-skill -g",
"stars": 385,
"repoUrl": "https://github.com/joeseesun/qiaomu-meta-skill",
"aliases": [
"qiaomu-meta-skill",
"joeseesun",
"qiaomu-meta-skill",
"skill",
"スキル"
]
},
{
"id": "skill-glebis-claude-skills-agency-docs-updater",
"priority": 488,
"category": "community",
"type": "skill",
"want": "agency-docs-updater",
"feature": "glebis/claude-skills",
"summary": "End-to-end pipeline for publishing Claude Code lab meetings. Accepts optional args: date (YYYYMMDD, \"yesterday\", \"today\") and lab number (e.g. \"04\"). Examples: \"yesterday 04\", \"20260420 05\", \"04\" (today, lab 04), \"\" (today, auto-detect lab).",
"trigger": "",
"commands": [
"npx skills add glebis/claude-skills@agency-docs-updater -g"
],
"install": "npx skills add glebis/claude-skills@agency-docs-updater -g",
"stars": 383,
"repoUrl": "https://github.com/glebis/claude-skills",
"aliases": [
"agency-docs-updater",
"glebis",
"agency-docs-updater",
"skill",
"スキル"
]
},
{
"id": "skill-glebis-claude-skills-agency-meetup-publish",
"priority": 489,
"category": "community",
"type": "skill",
"want": "agency-meetup-publish",
"feature": "glebis/claude-skills",
"summary": "End-to-end pipeline for publishing AGENCY Community meetup recordings to YouTube. Downloads Zoom recording, adds intro/outro, generates thumbnail, creates description with timecodes, uploads to YouTube, sets thumbnail, and adds to the AGENCY Community playlist. Use this skill when the user wants to publish a meetup, says \"upload the meetup\", \"publish the recording\", \"process the Zoom recording for YouTube\", or mentions uploading an AGENCY Community session. Also triggers on requests to add intro/outro to a meeting recording and upload it.",
"trigger": "",
"commands": [
"npx skills add glebis/claude-skills@agency-meetup-publish -g"
],
"install": "npx skills add glebis/claude-skills@agency-meetup-publish -g",
"stars": 383,
"repoUrl": "https://github.com/glebis/claude-skills",
"aliases": [
"agency-meetup-publish",
"glebis",
"agency-meetup-publish",
"skill",
"スキル"
]
},
{
"id": "skill-glebis-claude-skills-agency-socials",
"priority": 490,
"category": "community",
"type": "skill",
"want": "agency-socials",
"feature": "glebis/claude-skills",
"summary": "Generate social media covers and assets for AGENCY Community events, meetups, and YouTube recordings.",
"trigger": "Use when creating event covers, YouTube thumbnails, or social posts for the AGENCY Community.",
"commands": [
"npx skills add glebis/claude-skills@agency-socials -g"
],
"install": "npx skills add glebis/claude-skills@agency-socials -g",
"stars": 383,
"repoUrl": "https://github.com/glebis/claude-skills",
"aliases": [
"agency-socials",
"glebis",
"agency-socials",
"skill",
"スキル"
]
},
{
"id": "skill-glebis-claude-skills-agent-cli",
"priority": 491,
"category": "community",
"type": "skill",
"want": "agent-cli",
"feature": "glebis/claude-skills",
"summary": "Add agent-friendly --json NDJSON output to Python CLI scripts, or scaffold a complete cli_utils package for a project. Use this skill when the user wants to make scripts machine-readable for AI agents, add --json flags, convert print statements to structured JSON, build a CLI helper library, create an open-source CLI-for-agents package, add structured logging, or make CLI output machine-readable. Also.",
"trigger": "use when the user mentions NDJSON, structured CLI output, agent-friendly CLI, non-interactive scripts, or JSON I/O for automation.",
"commands": [
"npx skills add glebis/claude-skills@agent-cli -g"
],
"install": "npx skills add glebis/claude-skills@agent-cli -g",
"stars": 383,
"repoUrl": "https://github.com/glebis/claude-skills",
"aliases": [
"agent-cli",
"glebis",
"agent-cli",
"skill",
"スキル"
]
},
{
"id": "skill-glebis-claude-skills-app-release",
"priority": 492,
"category": "community",
"type": "skill",
"want": "app-release",
"feature": "glebis/claude-skills",
"summary": "End-to-end pipeline for releasing an iOS / watchOS app to TestFlight and the App Store.",
"trigger": "Use when the user wants to publish, ship, or release an iOS/watchOS app, get a build onto TestFlight, archive and upload via xcodebuild, deploy a CloudKit schema to Production, set App Privacy or export compliance, mint a Distribution certificate, or work through App Store Connect / Apple Developer portal steps. Triggers on 'continue publishing', 'ship the app to TestFlight', 'release the iOS app', 'upload a build', 'deploy CloudKit to production', 'App Privacy labels', 'distribution signing', or any cryptic Apple upload error (cloud signing, 90057 missing CFBundleShortVersionString, 90474 orientation). macOS and Xcode only.",
"commands": [
"npx skills add glebis/claude-skills@app-release -g"
],
"install": "npx skills add glebis/claude-skills@app-release -g",
"stars": 383,
"repoUrl": "https://github.com/glebis/claude-skills",
"aliases": [
"app-release",
"glebis",
"app-release",
"skill",
"スキル"
]
},
{
"id": "skill-glebis-claude-skills-automation-advisor",
"priority": 493,
"category": "community",
"type": "skill",
"want": "automation-advisor",
"feature": "glebis/claude-skills",
"summary": "Interactive automation decision advisor using the Automation Decision Matrix framework.",
"trigger": "Use when the user asks \"should I automate this?\", wants to evaluate an automation opportunity, calculate automation ROI or break-even, or requests an automation decision analysis. Guides a structured questionnaire, scores four dimensions, applies override checks, and generates an Obsidian-formatted report with a visual decision diagram.",
"commands": [
"npx skills add glebis/claude-skills@automation-advisor -g"
],
"install": "npx skills add glebis/claude-skills@automation-advisor -g",
"stars": 383,
"repoUrl": "https://github.com/glebis/claude-skills",
"aliases": [
"automation-advisor",
"glebis",
"automation-advisor",
"skill",
"スキル"
]
},
{
"id": "skill-glebis-claude-skills-balanced",
"priority": 494,
"category": "community",
"type": "skill",
"want": "balanced",
"feature": "glebis/claude-skills",
"summary": "Constructive, evidence-based dialogue mode that avoids sycophancy.",
"trigger": "This skill should be used when the user wants balanced multi-perspective analysis, critical feedback, or rigorous challenge of their ideas. Triggers on \"/balanced\" or requests for honest/critical/balanced feedback. Supports passive, interactive, tldr, steelman, and decision modes.",
"commands": [
"npx skills add glebis/claude-skills@balanced -g"
],
"install": "npx skills add glebis/claude-skills@balanced -g",
"stars": 383,
"repoUrl": "https://github.com/glebis/claude-skills",
"aliases": [
"balanced",
"glebis",
"balanced",
"skill",
"スキル"
]
},
{
"id": "skill-glebis-claude-skills-brand-agency",
"priority": 495,
"category": "community",
"type": "skill",
"want": "brand-agency",
"feature": "glebis/claude-skills",
"summary": "Applies Agency brand colors and typography to artifacts including presentations, SVG graphics, documents, and web interfaces.",
"trigger": "This skill should be used when brand colors, visual formatting, neobrutalism style, or Agency design standards apply. Keywords - branding, corporate identity, visual identity, styling, brand colors, typography, visual formatting, visual design, neobrutalism.",
"commands": [
"npx skills add glebis/claude-skills@brand-agency -g"
],
"install": "npx skills add glebis/claude-skills@brand-agency -g",
"stars": 383,
"repoUrl": "https://github.com/glebis/claude-skills",
"aliases": [
"brand-agency",
"glebis",
"brand-agency",
"skill",
"スキル"
]
},
{
"id": "skill-physiclaw-physiclaw-skills-jd",
"priority": 496,
"category": "community",
"type": "skill",
"want": "jd",
"feature": "physiclaw/PhysiClaw",
"summary": "Shop on the 京东 (JD) app.",
"trigger": "Use whenever the user wants to buy, order, or price something on 京东 / JD, including 京东七鲜 fresh groceries, or names the 京东 app.",
"commands": [
"npx skills add physiclaw/PhysiClaw@jd -g"
],
"install": "npx skills add physiclaw/PhysiClaw@jd -g",
"stars": 381,
"repoUrl": "https://github.com/physiclaw/PhysiClaw",
"aliases": [
"jd",
"physiclaw",
"jd",
"skill",
"スキル"
]
},
{
"id": "skill-physiclaw-physiclaw-src-physiclaw-agent-claude-skills-jobs",
"priority": 497,
"category": "community",
"type": "skill",
"want": "jobs",
"feature": "physiclaw/PhysiClaw",
"summary": "Use when the task involves scheduling future work — any \"remind me at …\", \"every weekday …\", \"check again in 30 min\", or closing a fired cron job. Also use to reschedule or list jobs. NOT for one-off in-session waits. NEVER edit jobs.md by hand (the cron parser is strict).",
"trigger": "Use when the task involves scheduling future work — any \"remind me at …\", \"every weekday …\", \"check again in 30 min\", or closing a fired cron job. Also use to reschedule or list jobs. NOT for one-off in-session waits. NEVER edit jobs.md by hand (the cron parser is strict).",
"commands": [
"npx skills add physiclaw/PhysiClaw@jobs -g"
],
"install": "npx skills add physiclaw/PhysiClaw@jobs -g",
"stars": 381,
"repoUrl": "https://github.com/physiclaw/PhysiClaw",
"aliases": [
"jobs",
"physiclaw",
"jobs",
"skill",
"スキル"
]
},
{
"id": "skill-physiclaw-physiclaw-src-physiclaw-agent-claude-skills-screen-layout",
"priority": 498,
"category": "community",
"type": "skill",
"want": "screen-layout",
"feature": "physiclaw/PhysiClaw",
"summary": "First-run setup — learn the bboxes of your three key input boxes (Spotlight search, chat input keyboard-down, chat input keyboard-up) plus the keyboard keys and Paste buttons. Run once when SYSTEM shows the first-run notice, before opening apps by search or sending messages. Screenshot each page, read the box coordinates off the returned elements, save them with the screen_layout.py CLI.",
"trigger": "",
"commands": [
"npx skills add physiclaw/PhysiClaw@screen-layout -g"
],
"install": "npx skills add physiclaw/PhysiClaw@screen-layout -g",
"stars": 381,
"repoUrl": "https://github.com/physiclaw/PhysiClaw",
"aliases": [
"screen-layout",
"physiclaw",
"screen-layout",
"skill",
"スキル"
]
},
{
"id": "skill-physiclaw-physiclaw-skills-taobao",
"priority": 499,
"category": "community",
"type": "skill",
"want": "taobao",
"feature": "physiclaw/PhysiClaw",
"summary": "Shop on the 淘宝 (Taobao) app.",
"trigger": "Use whenever the user wants to buy, order, or price something on 淘宝 / Taobao / 淘宝闪购, or names the Taobao app.",
"commands": [
"npx skills add physiclaw/PhysiClaw@taobao -g"
],
"install": "npx skills add physiclaw/PhysiClaw@taobao -g",
"stars": 381,
"repoUrl": "https://github.com/physiclaw/PhysiClaw",
"aliases": [
"taobao",
"physiclaw",
"taobao",
"skill",
"スキル"
]
},
{
"id": "skill-floe-labs-floe-guard-floe-guard",
"priority": 500,
"category": "community",
"type": "skill",
"want": "floe-guard",
"feature": "Floe-Labs/floe-guard",
"summary": "Know what every AI call really costs — floe-guard meters STT + TTS + LLM + telephony per call (Pipecat, LiveKit — Python & TypeScript), keeps a live ledger of real spend, and hard-stops the next turn before it crosses a USD ceiling. Free Coverage Score + 7-day history on connect.",
"trigger": "Use when an agent's spend must be seen and capped in-process with no account or telemetry; also guards any LLM agent and paid tool calls.",
"commands": [
"npx skills add Floe-Labs/floe-guard -g"
],
"install": "npx skills add Floe-Labs/floe-guard -g",
"stars": 360,
"repoUrl": "https://github.com/Floe-Labs/floe-guard",
"aliases": [
"floe-guard",
"Floe-Labs",
"floe-guard",
"skill",
"スキル"
]
},
{
"id": "skill-microprediction-precise-.claude-skills-assess-covariance-method",
"priority": 501,
"category": "community",
"type": "skill",
"want": "assess-covariance-method",
"feature": "microprediction/precise",
"summary": "Rigorously and honestly assess a NEW or proposed covariance / correlation / precision estimator, or a new covariance scoring rule, using precise.",
"trigger": "Use when someone proposes, asks to evaluate, or wants to compare a covariance methodology. Covers implementing it to the contract, conformance, benchmarking against the registry, out-of-sample validation, and statistically defensible inference.",
"commands": [
"npx skills add microprediction/precise@assess-covariance-method -g"
],
"install": "npx skills add microprediction/precise@assess-covariance-method -g",
"stars": 336,
"repoUrl": "https://github.com/microprediction/precise",
"aliases": [
"assess-covariance-method",
"microprediction",
"assess-covariance-method",
"skill",
"スキル"
]
},
{
"id": "skill-microprediction-precise-.claude-skills-choose-covariance-estimator",
"priority": 502,
"category": "community",
"type": "skill",
"want": "choose-covariance-estimator",
"feature": "microprediction/precise",
"summary": "Pick which precise covariance estimator to use for a given dataset.",
"trigger": "Use when you have data X and are unsure which estimator fits its dimension, conditioning, or tail behavior. Wraps precise.suggest() and covariance_features().",
"commands": [
"npx skills add microprediction/precise@choose-covariance-estimator -g"
],
"install": "npx skills add microprediction/precise@choose-covariance-estimator -g",
"stars": 336,
"repoUrl": "https://github.com/microprediction/precise",
"aliases": [
"choose-covariance-estimator",
"microprediction",
"choose-covariance-estimator",
"skill",
"スキル"
]
},
{
"id": "skill-microprediction-precise-.claude-skills-estimate-online-covariance",
"priority": 503,
"category": "community",
"type": "skill",
"want": "estimate-online-covariance",
"feature": "microprediction/precise",
"summary": "Estimate a covariance / correlation / precision matrix incrementally with precise.",
"trigger": "Use when data arrives as a stream and you want the matrix updated per observation, or when you want an online (partial_fit) drop-in for sklearn.covariance, which is batch-only.",
"commands": [
"npx skills add microprediction/precise@estimate-online-covariance -g"
],
"install": "npx skills add microprediction/precise@estimate-online-covariance -g",
"stars": 336,
"repoUrl": "https://github.com/microprediction/precise",
"aliases": [
"estimate-online-covariance",
"microprediction",
"estimate-online-covariance",
"skill",
"スキル"
]
},
{
"id": "skill-microprediction-precise-.claude-skills-keyed-dynamic-universe",
"priority": 504,
"category": "community",
"type": "skill",
"want": "keyed-dynamic-universe",
"feature": "microprediction/precise",
"summary": "Maintain an online covariance over named series whose set changes over time (e.g. assets entering and leaving).",
"trigger": "Use when observations arrive as dicts keyed by name rather than fixed-length vectors. Wraps precise's keyed / FixedUniverse / DynamicUniverse adapters.",
"commands": [
"npx skills add microprediction/precise@keyed-dynamic-universe -g"
],
"install": "npx skills add microprediction/precise@keyed-dynamic-universe -g",
"stars": 336,
"repoUrl": "https://github.com/microprediction/precise",
"aliases": [
"keyed-dynamic-universe",
"microprediction",
"keyed-dynamic-universe",
"skill",
"スキル"
]
},
{
"id": "skill-microprediction-precise-precise",
"priority": 505,
"category": "community",
"type": "skill",
"want": "precise",
"feature": "microprediction/precise",
"summary": "Online (incremental) covariance, correlation, and precision estimation in Python — the streaming complement to sklearn.covariance.",
"trigger": "Use when code needs a covariance/correlation matrix updated per observation, recomputes np.cov/np.corrcoef in a rolling loop, must judge or compare covariance estimates, or proposes a new covariance methodology. Points to task-specific skills.",
"commands": [
"npx skills add microprediction/precise@precise -g"
],
"install": "npx skills add microprediction/precise@precise -g",
"stars": 336,
"repoUrl": "https://github.com/microprediction/precise",
"aliases": [
"precise",
"microprediction",
"precise",
"skill",
"スキル"
]
},
{
"id": "skill-microprediction-precise-.claude-skills-score-covariance-estimate",
"priority": 506,
"category": "community",
"type": "skill",
"want": "score-covariance-estimate",
"feature": "microprediction/precise",
"summary": "Score and compare covariance estimates with precise's assessor panel.",
"trigger": "Use when you need to judge an estimate out-of-sample or rank competing estimators — and especially in high dimensions, where the plain held-out likelihood is misleading.",
"commands": [
"npx skills add microprediction/precise@score-covariance-estimate -g"
],
"install": "npx skills add microprediction/precise@score-covariance-estimate -g",
"stars": 336,
"repoUrl": "https://github.com/microprediction/precise",
"aliases": [
"score-covariance-estimate",
"microprediction",
"score-covariance-estimate",
"skill",
"スキル"
]
},
{
"id": "skill-sigcli-sigcli-skills-bilibili",
"priority": 507,
"category": "community",
"type": "skill",
"want": "bilibili",
"feature": "sigcli/sigcli",
"summary": "Interact with Bilibili (B站) — browse trending videos, view video details, read comments, search videos and users, view user profiles, like, coin, and favorite videos. Use this skill whenever the user mentions Bilibili, B站, wants to browse Bilibili content, search Bilibili videos, read Bilibili comments, look up Bilibili users, or interact with Bilibili content. Also trigger when the user pastes a Bilibili URL (e.g. bilibili.com/video/BV...) or mentions a BV ID.",
"trigger": "",
"commands": [
"npx skills add sigcli/sigcli@bilibili -g"
],
"install": "npx skills add sigcli/sigcli@bilibili -g",
"stars": 293,
"repoUrl": "https://github.com/sigcli/sigcli",
"aliases": [
"bilibili",
"sigcli",
"bilibili",
"skill",
"スキル"
]
},
{
"id": "skill-sigcli-sigcli-skills-douyin",
"priority": 508,
"category": "community",
"type": "skill",
"want": "douyin",
"feature": "sigcli/sigcli",
"summary": "Provide authenticated cookies for Douyin (抖音/TikTok China) — two providers: douyin (www.douyin.com for scraping) and douyin-live (live.douyin.com for livestream). Use this skill whenever the user needs Douyin cookies for scraping tools like DouYin_Spider, or needs to authenticate with Douyin services. Trigger when the user mentions 抖音, Douyin, TikTok China, douyin cookies, or wants to use tools that require Douyin login cookies.",
"trigger": "",
"commands": [
"npx skills add sigcli/sigcli@douyin -g"
],
"install": "npx skills add sigcli/sigcli@douyin -g",
"stars": 293,
"repoUrl": "https://github.com/sigcli/sigcli",
"aliases": [
"douyin",
"sigcli",
"douyin",
"skill",
"スキル"
]
},
{
"id": "skill-sigcli-sigcli-skills-hackernews",
"priority": 509,
"category": "community",
"type": "skill",
"want": "hackernews",
"feature": "sigcli/sigcli",
"summary": "Interact with Hacker News (news.ycombinator.com) — browse top, new, and best stories, read item details and comment threads, look up user profiles, and search posts via Algolia. Use this skill whenever the user mentions Hacker News, HN, YCombinator news, ycombinator.com, news.ycombinator.com, wants to browse tech news, read HN discussions, search HN posts, or look up HN users. Also trigger when the user pastes an HN URL (e.g. news.ycombinator.com/item?id=12345). Keywords: Hacker News, HN, YC, ycombinator, tech news, Show HN, Ask HN, HN front page.",
"trigger": "",
"commands": [
"npx skills add sigcli/sigcli@hackernews -g"
],
"install": "npx skills add sigcli/sigcli@hackernews -g",
"stars": 293,
"repoUrl": "https://github.com/sigcli/sigcli",
"aliases": [
"hackernews",
"sigcli",
"hackernews",
"skill",
"スキル"
]
},
{
"id": "skill-sigcli-sigcli-skills-linkedin",
"priority": 510,
"category": "community",
"type": "skill",
"want": "linkedin",
"feature": "sigcli/sigcli",
"summary": "Interact with LinkedIn — view your profile, browse other profiles, read the feed, search jobs/posts/people, get job details, create posts, like/unlike posts, comment, send connection requests, and follow/unfollow users. Use this skill whenever the user mentions LinkedIn, wants to search for jobs or people, read their LinkedIn feed, view a profile, get job details, create a post, like or comment on content, send a connection request, or follow someone. Also trigger when the user pastes a LinkedIn URL (e.g. linkedin.com/in/..., linkedin.com/jobs/view/...) or mentions LinkedIn networking.",
"trigger": "",
"commands": [
"npx skills add sigcli/sigcli@linkedin -g"
],
"install": "npx skills add sigcli/sigcli@linkedin -g",
"stars": 293,
"repoUrl": "https://github.com/sigcli/sigcli",
"aliases": [
"linkedin",
"sigcli",
"linkedin",
"skill",
"スキル"
]
},
{
"id": "skill-sigcli-sigcli-skills-msteams",
"priority": 511,
"category": "community",
"type": "skill",
"want": "msteams",
"feature": "sigcli/sigcli",
"summary": "Interact with Microsoft Teams — send and read messages, search conversations, look up people, check calendar, get meeting transcripts, and manage chats. Use this skill whenever the user mentions Teams, MS Teams, Microsoft Teams, wants to send a message, read chat history, search conversations, look up a colleague, check their calendar, find meeting recordings or transcripts, see direct reports or manager, or do anything involving Teams communication. Also trigger when the user asks about scheduling, org chart, people search, or wants to message someone.",
"trigger": "",
"commands": [
"npx skills add sigcli/sigcli@msteams -g"
],
"install": "npx skills add sigcli/sigcli@msteams -g",
"stars": 293,
"repoUrl": "https://github.com/sigcli/sigcli",
"aliases": [
"msteams",
"sigcli",
"msteams",
"skill",
"スキル"
]
},
{
"id": "skill-sigcli-sigcli-skills-outlook",
"priority": 512,
"category": "community",
"type": "skill",
"want": "outlook",
"feature": "sigcli/sigcli",
"summary": "Interact with Outlook email — read inbox, send emails, search messages, reply/forward, manage folders, download attachments. Use this skill whenever the user mentions email, Outlook, inbox, mail, send email, check email, unread messages, email search, attachments, reply to email, forward email, 邮件, 收件箱, or wants to read, send, search, reply to, forward, or manage emails.",
"trigger": "",
"commands": [
"npx skills add sigcli/sigcli@outlook -g"
],
"install": "npx skills add sigcli/sigcli@outlook -g",
"stars": 293,
"repoUrl": "https://github.com/sigcli/sigcli",
"aliases": [
"outlook",
"sigcli",
"outlook",
"skill",
"スキル"
]
},
{
"id": "skill-sigcli-sigcli-skills-reddit",
"priority": 513,
"category": "community",
"type": "skill",
"want": "reddit",
"feature": "sigcli/sigcli",
"summary": "Interact with Reddit — browse subreddits, read posts and comments, search content, view user profiles, post comments, vote, save posts, subscribe to subreddits. Use this skill whenever the user mentions Reddit, r/, subreddit, wants to browse Reddit posts, read Reddit discussions, search Reddit, look up Reddit users, or interact with Reddit content. Also trigger when the user pastes a Reddit URL (e.g. reddit.com/r/programming/...) or mentions a subreddit name.",
"trigger": "",
"commands": [
"npx skills add sigcli/sigcli@reddit -g"
],
"install": "npx skills add sigcli/sigcli@reddit -g",
"stars": 293,
"repoUrl": "https://github.com/sigcli/sigcli",
"aliases": [
"reddit",
"sigcli",
"reddit",
"skill",
"スキル"
]
},
{
"id": "skill-sigcli-sigcli-skills-sigcli",
"priority": 514,
"category": "community",
"type": "skill",
"want": "sigcli",
"feature": "sigcli/sigcli",
"summary": "Guide Claude to use SigCLI correctly — check auth, login, get credentials, configure providers, and onboard new websites. Trigger when using sig commands, editing ~/.sig/config.yaml, or needing authenticated API access.",
"trigger": "",
"commands": [
"npx skills add sigcli/sigcli@sigcli -g"
],
"install": "npx skills add sigcli/sigcli@sigcli -g",
"stars": 293,
"repoUrl": "https://github.com/sigcli/sigcli",
"aliases": [
"sigcli",
"sigcli",
"sigcli",
"skill",
"スキル"
]
},
{
"id": "skill-upstash-qstash-js-skills",
"priority": 515,
"category": "community",
"type": "skill",
"want": "qstash-js",
"feature": "upstash/qstash-js",
"summary": "Work with the QStash JavaScript/TypeScript SDK for serverless messaging, scheduling.",
"trigger": "Use when publishing messages to HTTP endpoints, creating schedules, managing queues, verifying incoming messages in serverless environments.",
"commands": [
"npx skills add upstash/qstash-js -g"
],
"install": "npx skills add upstash/qstash-js -g",
"stars": 267,
"repoUrl": "https://github.com/upstash/qstash-js",
"aliases": [
"skills",
"upstash",
"qstash-js",
"skill",
"スキル"
]
},
{
"id": "skill-xwtro0tk1t-cloud-harness-bundled-skills-android-vuln-analyzer",
"priority": 516,
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
"stars": 265,
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
"priority": 517,
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
"stars": 265,
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
"priority": 518,
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
"stars": 265,
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
"priority": 519,
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
"stars": 265,
"repoUrl": "https://github.com/xwtro0tk1t-cloud/harness",
"aliases": [
"graph",
"xwtro0tk1t-cloud",
"graph",
"skill",
"スキル"
]
}
];
