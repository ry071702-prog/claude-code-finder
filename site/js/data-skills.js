// 生成物: scripts/build_data.py が skills.jsonl + overrides.ja.json から作成。手で編集しない。
// GitHub の Claude Code Skills を非LLMで取り込み、日本語化 30/55 件（週次 ingest-skills.yml）。
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
"stars": 182240,
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
"stars": 182240,
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
"stars": 182240,
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
"stars": 182240,
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
"stars": 182240,
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
"stars": 182240,
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
"stars": 182240,
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
"stars": 182240,
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
"stars": 182240,
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
"stars": 182240,
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
"stars": 182240,
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
"stars": 182240,
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
"stars": 182240,
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
"stars": 182240,
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
"stars": 182240,
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
"stars": 182240,
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
"stars": 182240,
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
"stars": 182240,
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
"stars": 182240,
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
"stars": 32667,
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
"stars": 32667,
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
"stars": 32667,
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
"stars": 32667,
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
"stars": 32667,
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
"stars": 32667,
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
"stars": 32667,
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
"stars": 32667,
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
"stars": 32667,
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
"id": "skill-luoluoluo22-jianying-editor-skill-jianying-editor-skill",
"priority": 428,
"category": "community",
"type": "skill",
"want": "jianying-editor",
"feature": "luoluoluo22/jianying-editor-skill",
"summary": "剪映 (JianYing) AI自动化剪辑的高级封装 API (JyWrapper)，提供开箱即用的 Python 接口，支持录屏、素材导入、字幕生成、Web 动效合成及项目导出。全面适配 MacOS (Apple Silicon/Intel) 与 Windows，支持 v5.9+ (draft_info.json) 架构、工程自修复、智能配音字幕及录屏变焦。",
"trigger": "",
"commands": [
"npx skills add luoluoluo22/jianying-editor-skill -g"
],
"install": "npx skills add luoluoluo22/jianying-editor-skill -g",
"stars": 4304,
"repoUrl": "https://github.com/luoluoluo22/jianying-editor-skill",
"aliases": [
"jianying-editor-skill",
"luoluoluo22",
"jianying-editor",
"skill",
"スキル"
]
},
{
"id": "skill-op7418-claude-to-im-skill-claude-to-im-skill",
"priority": 429,
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
"stars": 2892,
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
"id": "skill-sheeki03-tirith-tirith",
"priority": 430,
"category": "community",
"type": "skill",
"want": "tirith",
"feature": "sheeki03/tirith",
"summary": "Terminal security analysis for shell environments.",
"trigger": "This skill should be used when checking commands for supply-chain attacks before execution, scanning repositories for hidden content or config poisoning, scoring URLs for homograph attacks, setting up AI tool protection, inspecting Python package artifacts, governing untrusted tasks or Web3 commands, auditing browser extensions, creating provenance receipts, downloading and executing scripts safely, investigating why tirith blocked a command, managing trusted patterns, running security audits, configuring MCP gateway proxies, or working with threat intelligence databases. Also use when the user mentions \"tirith\", \"pipe-to-shell\", \"homograph\", \"ANSI injection\", \"zero-width\", \"punycode\", \"terminal security\", \"shell hook\", \"cloaking detection\", \"supply chain attack\", \"bidi override\", \"invisible unicode\", or \"config poisoning\". Even if the user does not explicitly name tirith, use this skill when they ask about protecting shell environments, intercepting dangerous commands, or hardening AI agent tool execution.",
"commands": [
"npx skills add sheeki03/tirith -g"
],
"install": "npx skills add sheeki03/tirith -g",
"stars": 2757,
"repoUrl": "https://github.com/sheeki03/tirith",
"aliases": [
"tirith",
"sheeki03",
"tirith",
"skill",
"スキル"
]
},
{
"id": "skill-leilei926524-tech-anti-distill-anti-distill",
"priority": 431,
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
"stars": 2455,
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
"id": "skill-zakirkun-guardian-cli-guardian-cli",
"priority": 432,
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
"stars": 1896,
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
"priority": 433,
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
"stars": 1885,
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
"id": "skill-bayramannakov-claude-reflect-claude-reflect",
"priority": 434,
"category": "community",
"type": "skill",
"want": "claude-reflect",
"feature": "BayramAnnakov/claude-reflect",
"summary": "Self-learning system that captures corrections during sessions and reminds users to run /reflect to update CLAUDE.md.",
"trigger": "Use when discussing learnings, corrections, or when the user mentions remembering something for future sessions.",
"commands": [
"npx skills add BayramAnnakov/claude-reflect -g"
],
"install": "npx skills add BayramAnnakov/claude-reflect -g",
"stars": 1832,
"repoUrl": "https://github.com/BayramAnnakov/claude-reflect",
"aliases": [
"claude-reflect",
"BayramAnnakov",
"claude-reflect",
"skill",
"スキル"
]
},
{
"id": "skill-adamlyttleapps-claude-skill-aso-appstore-screenshots-claude-skill-aso-appstore-screenshots",
"priority": 435,
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
"stars": 1791,
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
"id": "skill-fujibee-agmsg-agmsg",
"priority": 436,
"category": "community",
"type": "skill",
"want": "agmsg",
"feature": "fujibee/agmsg",
"summary": "Cross-agent messaging via SQLite. Send messages between Claude Code, Codex, Gemini CLI, and other agents. No daemon, no network, no dependencies beyond bash and sqlite3.",
"trigger": "",
"commands": [
"npx skills add fujibee/agmsg -g"
],
"install": "npx skills add fujibee/agmsg -g",
"stars": 1557,
"repoUrl": "https://github.com/fujibee/agmsg",
"aliases": [
"agmsg",
"fujibee",
"agmsg",
"skill",
"スキル"
]
},
{
"id": "skill-denissergeevitch-repo-task-proof-loop-repo-task-proof-loop",
"priority": 437,
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
"stars": 730,
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
"id": "skill-xiaofenggan01-aigc-reduce-aigc-reduce",
"priority": 438,
"category": "community",
"type": "skill",
"want": "aigc-reduce",
"feature": "xiaofenggan01/aigc-reduce",
"summary": "降低学术论文的 AIGC 查重率和 AI 味。适用于 Claude Code 和 Codex。 基于知网、万方、PaperPass、PaperPure 等检测器原理，使用扫描定位、 确定性替换、句子级重构和 Anti-AI 审计，在保持学术语体、事实、数据、 引用和专业术语一致的前提下减少模板化 AI 痕迹。Use when 用户要求降 AI 味、 降低 AIGC 率、去 AI 检测、降低 AI 查重误判、让论文更像人写的，或提到 “去 AI 味”“降重”“AIGC 查重”。",
"trigger": "",
"commands": [
"npx skills add xiaofenggan01/aigc-reduce -g"
],
"install": "npx skills add xiaofenggan01/aigc-reduce -g",
"stars": 640,
"repoUrl": "https://github.com/xiaofenggan01/aigc-reduce",
"aliases": [
"aigc-reduce",
"xiaofenggan01",
"aigc-reduce",
"skill",
"スキル"
]
},
{
"id": "skill-ksimback-tech-debt-skill-tech-debt-skill",
"priority": 439,
"category": "community",
"type": "skill",
"want": "tech-debt-audit",
"feature": "ksimback/tech-debt-skill",
"summary": "Thorough, user-invoked tech debt and architecture audit of the current codebase. Produces TECH_DEBT_AUDIT.md with file-cited findings, severity, effort estimates, and a required \"looks bad but is actually fine\" section.",
"trigger": "Use when the user asks for a debt audit, codebase health check, architecture review, or code quality assessment of an entire repo. Does not auto-invoke.",
"commands": [
"npx skills add ksimback/tech-debt-skill -g"
],
"install": "npx skills add ksimback/tech-debt-skill -g",
"stars": 623,
"repoUrl": "https://github.com/ksimback/tech-debt-skill",
"aliases": [
"tech-debt-skill",
"ksimback",
"tech-debt-audit",
"skill",
"スキル"
]
},
{
"id": "skill-op7418-document-illustrator-skill-document-illustrator-skill",
"priority": 440,
"category": "community",
"type": "skill",
"want": "document-illustrator",
"feature": "op7418/Document-illustrator-skill",
"summary": "基于文档内容自动生成配图。AI 智能分析文档结构，归纳核心要点， 为每个主题生成符合特定风格的配图。支持封面图生成和自定义图片比例。 使用场景：当用户需要为文档、文章、笔记生成配图时。 关键词：配图、插图、illustration、generate images、document images",
"trigger": "",
"commands": [
"npx skills add op7418/Document-illustrator-skill -g"
],
"install": "npx skills add op7418/Document-illustrator-skill -g",
"stars": 604,
"repoUrl": "https://github.com/op7418/Document-illustrator-skill",
"aliases": [
"Document-illustrator-skill",
"op7418",
"document-illustrator",
"skill",
"スキル"
]
},
{
"id": "skill-browser-use-browser-harness-js-browser-harness-js",
"priority": 441,
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
"stars": 492,
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
"id": "skill-ali2000hos-persian-writing-persian-writing",
"priority": 442,
"category": "community",
"type": "skill",
"want": "persian-writing",
"feature": "ali2000hos/persian-writing",
"summary": "Write natural, human-sounding Persian (Farsi) and build correct right-to-left Persian deliverables. Use for ANY task involving Persian text or an Iranian audience: writing, editing, translating, humanizing, SEO content and copywriting (سئو، کپی‌رایتینگ، لندینگ), academic papers/theses, and Persian output in Word/.docx, PDF, PowerPoint, HTML, Excel, images/posters, emails, social posts. Covers register detection (رسمی/اداری/محاوره/علمی — errors here are costly), Persian AI-tell removal, orthography (نیم‌فاصله/ZWNJ، اعداد فارسی، «گیومه»), cleanup and spell-check (ویرایش، پاکسازی — bundled paknevis+davat toolkit), RTL layout/pagination fixes, and Persian fonts (Vazirmatn bundled). Trigger whenever you see Persian/Arabic script or words like فارسی, Farsi, Persian, Iran, RTL, راست‌چین, نیم‌فاصله, ویرایش, مقاله, پایان‌نامه, سئو, کپشن, Vazirmatn — even if the user never mentions this skill.",
"trigger": "",
"commands": [
"npx skills add ali2000hos/persian-writing -g"
],
"install": "npx skills add ali2000hos/persian-writing -g",
"stars": 385,
"repoUrl": "https://github.com/ali2000hos/persian-writing",
"aliases": [
"persian-writing",
"ali2000hos",
"persian-writing",
"skill",
"スキル"
]
},
{
"id": "skill-microprediction-precise-.claude-skills-assess-covariance-method",
"priority": 443,
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
"stars": 337,
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
"priority": 444,
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
"stars": 337,
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
"priority": 445,
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
"stars": 337,
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
"priority": 446,
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
"stars": 337,
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
"priority": 447,
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
"stars": 337,
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
"priority": 448,
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
"stars": 337,
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
"id": "skill-vivixiao980-xhs-cover-skill-xhs-cover-skill",
"priority": 449,
"category": "community",
"type": "skill",
"want": "xhs-cover",
"feature": "Vivixiao980/xhs-cover-skill",
"summary": "Generate Xiaohongshu (XHS / RedNote) cover images using GPT Image 2 / Codex image generation first, with the legacy Gemini CLI as fallback. Triggers for cover generation: \"生成封面\", \"小红书封面\", \"xhs封面\", \"制作封面\", \"帮我做张图\", \"XHS cover\", \"RedNote cover\". Triggers for cover editing: \"修改封面\", \"改一下封面\", \"上一张图基础上\", \"基于这张图调整\", \"不要重新做\", \"edit this cover\". Triggers for style learning: \"学习这个风格\", \"提取风格\", \"我想自定义风格\", \"这张图的风格\", \"learn this style\", \"extract style\". Always trigger this skill when user mentions 小红书/XHS/RedNote together with 封面/cover/图片, OR when user uploads a reference image and asks about creating a similar style.",
"trigger": "",
"commands": [
"npx skills add Vivixiao980/xhs-cover-skill -g"
],
"install": "npx skills add Vivixiao980/xhs-cover-skill -g",
"stars": 207,
"repoUrl": "https://github.com/Vivixiao980/xhs-cover-skill",
"aliases": [
"xhs-cover-skill",
"Vivixiao980",
"xhs-cover",
"skill",
"スキル"
]
},
{
"id": "skill-cslawyer1985-china-lawyer-analyst-china-lawyer-analyst",
"priority": 450,
"category": "community",
"type": "skill",
"want": "china-lawyer-analyst",
"feature": "CSlawyer1985/china-lawyer-analyst",
"summary": "通过中国法律视角分析事件，运用成文法解释、指导案例参照、请求权基础分析等方法，\n理解权利义务、评估责任风险、识别法律依据并推荐合规策略。\n**混合架构 v3.3**：三阶段自动化工作流程（初步分析→法律校验→反思修正）+ 静态核心 + 动态司法解释索引 + 智能检索增强 + 45类案件精确识别 + 六段式要件清单。",
"trigger": "",
"commands": [
"npx skills add CSlawyer1985/china-lawyer-analyst -g"
],
"install": "npx skills add CSlawyer1985/china-lawyer-analyst -g",
"stars": 200,
"repoUrl": "https://github.com/CSlawyer1985/china-lawyer-analyst",
"aliases": [
"china-lawyer-analyst",
"CSlawyer1985",
"china-lawyer-analyst",
"skill",
"スキル"
]
},
{
"id": "skill-marmbiz-humanizer-de-humanizer-de",
"priority": 451,
"category": "community",
"type": "skill",
"want": "humanizer-de",
"feature": "marmbiz/humanizer-de",
"summary": "Edit-Pass für bestehenden deutschen Text: Register/Rhythmus messen, belegtreu redigieren, Naturalness prüfen, KI-Schreibmuster/KI-Tells auditieren und entfernen; deutschen Text humanisieren; German AI Text Humanizer.",
"trigger": "",
"commands": [
"npx skills add marmbiz/humanizer-de@humanizer-de -g"
],
"install": "npx skills add marmbiz/humanizer-de@humanizer-de -g",
"stars": 182,
"repoUrl": "https://github.com/marmbiz/humanizer-de",
"aliases": [
"humanizer-de",
"marmbiz",
"humanizer-de",
"skill",
"スキル"
]
},
{
"id": "skill-marmbiz-humanizer-de-skills-humanizer-de",
"priority": 452,
"category": "community",
"type": "skill",
"want": "humanizer-de",
"feature": "marmbiz/humanizer-de",
"summary": "Edit-Pass für bestehenden deutschen Text: Register/Rhythmus messen, belegtreu redigieren, Naturalness prüfen, KI-Schreibmuster/KI-Tells auditieren und entfernen; deutschen Text humanisieren; German AI Text Humanizer.",
"trigger": "",
"commands": [
"npx skills add marmbiz/humanizer-de@humanizer-de -g"
],
"install": "npx skills add marmbiz/humanizer-de@humanizer-de -g",
"stars": 182,
"repoUrl": "https://github.com/marmbiz/humanizer-de",
"aliases": [
"humanizer-de",
"marmbiz",
"humanizer-de",
"skill",
"スキル"
]
},
{
"id": "skill-noahnan-max-chanlun-trading-system-chanlun-trading-system",
"priority": 453,
"category": "community",
"type": "skill",
"want": "chanlun-trading-system",
"feature": "noahnan-max/chanlun-trading-system",
"summary": "把缠论分析变成先定级别、再认结构、先写失效点的可执行研究流程。Use for A-share, HK-stock, ETF, index, or futures analysis with 中枢、分型、笔、线段、背驰、区间套、三类买卖点 and multi-level recursion, or for converting Chan theory into reproducible backtest rules. Research and study only; never issue stock tips or promise returns.",
"trigger": "",
"commands": [
"npx skills add noahnan-max/chanlun-trading-system -g"
],
"install": "npx skills add noahnan-max/chanlun-trading-system -g",
"stars": 79,
"repoUrl": "https://github.com/noahnan-max/chanlun-trading-system",
"aliases": [
"chanlun-trading-system",
"noahnan-max",
"chanlun-trading-system",
"skill",
"スキル"
]
},
{
"id": "skill-ry071702-prog-web-design-playbook-skills-web-design-playbook",
"priority": 454,
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
}
];
