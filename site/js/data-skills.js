// 生成物: scripts/build_data.py が skills.jsonl + overrides.ja.json から作成。手で編集しない。
// GitHub の Claude Code Skills を非LLMで取り込み、日本語化 38/120 件（週次 ingest-skills.yml）。
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
"stars": 186813,
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
"stars": 186813,
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
"stars": 186813,
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
"stars": 186813,
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
"stars": 186813,
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
"stars": 186813,
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
"stars": 186813,
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
"stars": 186813,
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
"stars": 186813,
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
"stars": 186813,
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
"stars": 186813,
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
"stars": 186813,
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
"stars": 186813,
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
"stars": 186813,
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
"stars": 186813,
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
"stars": 186813,
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
"stars": 186813,
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
"stars": 186813,
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
"stars": 186813,
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
"stars": 33427,
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
"stars": 33427,
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
"stars": 33427,
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
"stars": 33427,
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
"stars": 33427,
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
"stars": 33427,
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
"stars": 33427,
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
"stars": 33427,
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
"stars": 33427,
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
"stars": 8160,
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
"stars": 8160,
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
"id": "skill-alchaincyf-darwin-skill-darwin-skill",
"priority": 430,
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
"stars": 6768,
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
"stars": 4862,
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
"stars": 4862,
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
"stars": 4077,
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
"stars": 4077,
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
"stars": 4033,
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
"id": "skill-foryourhealth111-pixel-vibe-skills-bundled-skills-adaptyv",
"priority": 436,
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
"stars": 3788,
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
"priority": 437,
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
"stars": 3788,
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
"priority": 438,
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
"stars": 3788,
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
"priority": 439,
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
"stars": 3788,
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
"priority": 440,
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
"stars": 3788,
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
"priority": 441,
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
"stars": 3788,
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
"priority": 442,
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
"stars": 3788,
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
"priority": 443,
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
"stars": 3788,
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
"stars": 3034,
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
"priority": 445,
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
"stars": 2471,
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
"id": "skill-auth0-nextjs-auth0-skills-mfa",
"priority": 446,
"category": "community",
"type": "skill",
"want": "mfa",
"feature": "auth0/nextjs-auth0",
"summary": "Multi-factor authentication with @auth0/nextjs-auth0 v4: redirect step-up via Universal Login (amr gating), server-side step-up on mfa_required, the MFA management API (getAuthenticators, enroll, challenge, verify), and reactive step-up via mfa.challengeWithPopup(). Covers the beforeSessionSaved amr hook, the secure mfa_token handoff, and MFA error classes.",
"trigger": "",
"commands": [
"npx skills add auth0/nextjs-auth0@mfa -g"
],
"install": "npx skills add auth0/nextjs-auth0@mfa -g",
"stars": 2313,
"repoUrl": "https://github.com/auth0/nextjs-auth0",
"aliases": [
"mfa",
"auth0",
"mfa",
"skill",
"スキル"
]
},
{
"id": "skill-auth0-nextjs-auth0-skills",
"priority": 447,
"category": "community",
"type": "skill",
"want": "nextjs-auth0",
"feature": "auth0/nextjs-auth0",
"summary": "Add authentication to Next.js applications using @auth0/nextjs-auth0 v4 (App Router + Pages Router): install, Auth0Client singleton, middleware/proxy route mounting, env config, useUser, getSession/getAccessToken, protecting pages and API routes, and step-up MFA. Entry point for all nextjs-auth0 skills.",
"trigger": "",
"commands": [
"npx skills add auth0/nextjs-auth0@skills -g"
],
"install": "npx skills add auth0/nextjs-auth0@skills -g",
"stars": 2313,
"repoUrl": "https://github.com/auth0/nextjs-auth0",
"aliases": [
"skills",
"auth0",
"nextjs-auth0",
"skill",
"スキル"
]
},
{
"id": "skill-auth0-nextjs-auth0-skills-organizations",
"priority": 448,
"category": "community",
"type": "skill",
"want": "organizations",
"feature": "auth0/nextjs-auth0",
"summary": "Auth0 Organizations (multi-tenant B2B) with @auth0/nextjs-auth0 v4: pass organization at login via authorizationParameters / the /auth/login query param / startInteractiveLogin, read org_id back from the session, validate it on the backend, accept invitations, and configure orgs/connections via the Auth0 CLI or Terraform.",
"trigger": "",
"commands": [
"npx skills add auth0/nextjs-auth0@organizations -g"
],
"install": "npx skills add auth0/nextjs-auth0@organizations -g",
"stars": 2313,
"repoUrl": "https://github.com/auth0/nextjs-auth0",
"aliases": [
"organizations",
"auth0",
"organizations",
"skill",
"スキル"
]
},
{
"id": "skill-auth0-nextjs-auth0-skills-passkeys",
"priority": 449,
"category": "community",
"type": "skill",
"want": "passkeys",
"feature": "auth0/nextjs-auth0",
"summary": "Passkey (WebAuthn) flows with @auth0/nextjs-auth0 v4: signup, sign-in, and My Account enrollment using the server-side auth0.passkey.* API inside App Router route handlers or server actions, with navigator.credentials and serializeCredential in the browser.",
"trigger": "",
"commands": [
"npx skills add auth0/nextjs-auth0@passkeys -g"
],
"install": "npx skills add auth0/nextjs-auth0@passkeys -g",
"stars": 2313,
"repoUrl": "https://github.com/auth0/nextjs-auth0",
"aliases": [
"passkeys",
"auth0",
"passkeys",
"skill",
"スキル"
]
},
{
"id": "skill-op7418-youtube-clipper-skill-youtube-clipper-skill",
"priority": 450,
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
"stars": 2273,
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
"id": "skill-opendatalab-omnidocbench-skills",
"priority": 451,
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
"stars": 2141,
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
"id": "skill-upstash-ratelimit-js-skills",
"priority": 452,
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
"stars": 2050,
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
"id": "skill-carapace-sh-carapace-bin-skills-brew",
"priority": 453,
"category": "community",
"type": "skill",
"want": "brew",
"feature": "carapace-sh/carapace-bin",
"summary": "Use when working with Homebrew (`brew`) — the package manager for macOS and Linux. Covers the command structure, formula and cask DSLs, taps, bottles, the Cellar, services, bundle/Brewfile, environment variables, installation internals, and developer commands. Triggers on: \"brew\", \"homebrew\", \"brew install\", \"brew uninstall\", \"brew update\", \"brew upgrade\", \"brew search\", \"brew tap\", \"brew cask\", \"brew bottle\", \"brew services\", \"brew bundle\", \"brew cleanup\", \"brew doctor\", \"brew audit\", \"brew livecheck\", \"brew test-bot\", \"brew bump-formula-pr\", \"Brewfile\", \"HOMEBREW_PREFIX\", \"HOMEBREW_CELLAR\", \"HOMEBREW_NO_INSTALL_FROM_API\", \"HOMEBREW_CASK_OPTS\", \"HOMEBREW_BOTTLE_DOMAIN\", \"Formula\", \"Cask\", \"Cellar\", \"Caskroom\", \"keg\", \"rack\", \"tap\", \"bottle\", \"superenv\", \"Formulary\", \"FormulaInstaller\", \"shellenv\", \"restart_service\", \"keg-only\", \"brew deps\", \"brew uses\", \"brew leaves\", \"brew outdated\", \"brew pin\", \"brew fetch\", \"brew create\", \"brew edit\", \"livecheck\", \"auto_updates\", \"depends_on\".",
"trigger": "Use when working with Homebrew (`brew`) — the package manager for macOS and Linux. Covers the command structure, formula and cask DSLs, taps, bottles, the Cellar, services, bundle/Brewfile, environment variables, installation internals, and developer commands. Triggers on: \"brew\", \"homebrew\", \"brew install\", \"brew uninstall\", \"brew update\", \"brew upgrade\", \"brew search\", \"brew tap\", \"brew cask\", \"brew bottle\", \"brew services\", \"brew bundle\", \"brew cleanup\", \"brew doctor\", \"brew audit\", \"brew livecheck\", \"brew test-bot\", \"brew bump-formula-pr\", \"Brewfile\", \"HOMEBREW_PREFIX\", \"HOMEBREW_CELLAR\", \"HOMEBREW_NO_INSTALL_FROM_API\", \"HOMEBREW_CASK_OPTS\", \"HOMEBREW_BOTTLE_DOMAIN\", \"Formula\", \"Cask\", \"Cellar\", \"Caskroom\", \"keg\", \"rack\", \"tap\", \"bottle\", \"superenv\", \"Formulary\", \"FormulaInstaller\", \"shellenv\", \"restart_service\", \"keg-only\", \"brew deps\", \"brew uses\", \"brew leaves\", \"brew outdated\", \"brew pin\", \"brew fetch\", \"brew create\", \"brew edit\", \"livecheck\", \"auto_updates\", \"depends_on\".",
"commands": [
"npx skills add carapace-sh/carapace-bin@brew -g"
],
"install": "npx skills add carapace-sh/carapace-bin@brew -g",
"stars": 2009,
"repoUrl": "https://github.com/carapace-sh/carapace-bin",
"aliases": [
"brew",
"carapace-sh",
"brew",
"skill",
"スキル"
]
},
{
"id": "skill-carapace-sh-carapace-bin-skills-bubbletea",
"priority": 454,
"category": "community",
"type": "skill",
"want": "bubbletea",
"feature": "carapace-sh/carapace-bin",
"summary": "Use when working with Bubble Tea (charmbracelet/bubbletea) — the Elm Architecture TUI framework for Go. Covers the Model/Update/View cycle, commands, messages, the View struct, renderer, input handling, program lifecycle, testing, component composition, integration with the Charm ecosystem (lipgloss, bubbles, huh, glamour), and production design patterns. Triggers on: \"bubbletea\", \"bubble tea\", \"tea.Model\", \"tea.Cmd\", \"tea.Msg\", \"tea.Program\", \"tea.View\", \"tea.KeyPressMsg\", \"tea.WindowSizeMsg\", \"tea.MouseMsg\", \"tea.Batch\", \"tea.Sequence\", \"tea.Quit\", \"Elm Architecture\", \"charmbracelet\", \"Bubble Tea v2\", \"tea.NewProgram\", \"tea.Send\", \"tea.Tick\", \"tea.Every\", \"cursedRenderer\", \"ultraviolet\", \"ScreenBuffer\", \"ProgramContext\", \"compositor\".",
"trigger": "Use when working with Bubble Tea (charmbracelet/bubbletea) — the Elm Architecture TUI framework for Go. Covers the Model/Update/View cycle, commands, messages, the View struct, renderer, input handling, program lifecycle, testing, component composition, integration with the Charm ecosystem (lipgloss, bubbles, huh, glamour), and production design patterns. Triggers on: \"bubbletea\", \"bubble tea\", \"tea.Model\", \"tea.Cmd\", \"tea.Msg\", \"tea.Program\", \"tea.View\", \"tea.KeyPressMsg\", \"tea.WindowSizeMsg\", \"tea.MouseMsg\", \"tea.Batch\", \"tea.Sequence\", \"tea.Quit\", \"Elm Architecture\", \"charmbracelet\", \"Bubble Tea v2\", \"tea.NewProgram\", \"tea.Send\", \"tea.Tick\", \"tea.Every\", \"cursedRenderer\", \"ultraviolet\", \"ScreenBuffer\", \"ProgramContext\", \"compositor\".",
"commands": [
"npx skills add carapace-sh/carapace-bin@bubbletea -g"
],
"install": "npx skills add carapace-sh/carapace-bin@bubbletea -g",
"stars": 2009,
"repoUrl": "https://github.com/carapace-sh/carapace-bin",
"aliases": [
"bubbletea",
"carapace-sh",
"bubbletea",
"skill",
"スキル"
]
},
{
"id": "skill-carapace-sh-carapace-bin-skills-bun",
"priority": 455,
"category": "community",
"type": "skill",
"want": "bun",
"feature": "carapace-sh/carapace-bin",
"summary": "Use when working with the bun CLI — Bun's all-in-one JavaScript runtime and toolkit. Covers the CLI command reference (install, add, remove, run, build, test, x, create, init, pm, upgrade, link, unlink), bunfig.toml configuration, environment variables, the package manager and lockfile, the test runner, the bundler, the Bun runtime API (Bun.serve, Bun.file, Bun.spawn, Bun.write, hashing, transpiler), the Bun shell ($ template literal), module resolution and loaders, and globals. Triggers on: \"bun\", \"bunx\", \"bun install\", \"bun add\", \"bun remove\", \"bun run\", \"bun build\", \"bun test\", \"bun x\", \"bun create\", \"bun init\", \"bun pm\", \"bun upgrade\", \"bun link\", \"bun unlink\", \"bunfig.toml\", \"bun.lock\", \"Bun.serve\", \"Bun.file\", \"Bun.write\", \"Bun.spawn\", \"Bun.hash\", \"Bun.password\", \"bun:test\", \"Bun.build\", \"Bun.Transpiler\", \"bun shell\", \"$ template\", \"import.meta\", \"JavaScriptCore\", \"Bun.serve\", \"HTMLRewriter\", \"Bun.SQL\", \"Bun.RedisClient\", \"Bun.Glob\", \"Bun.plugin\", \"bun:ffi\".",
"trigger": "Use when working with the bun CLI — Bun's all-in-one JavaScript runtime and toolkit. Covers the CLI command reference (install, add, remove, run, build, test, x, create, init, pm, upgrade, link, unlink), bunfig.toml configuration, environment variables, the package manager and lockfile, the test runner, the bundler, the Bun runtime API (Bun.serve, Bun.file, Bun.spawn, Bun.write, hashing, transpiler), the Bun shell ($ template literal), module resolution and loaders, and globals. Triggers on: \"bun\", \"bunx\", \"bun install\", \"bun add\", \"bun remove\", \"bun run\", \"bun build\", \"bun test\", \"bun x\", \"bun create\", \"bun init\", \"bun pm\", \"bun upgrade\", \"bun link\", \"bun unlink\", \"bunfig.toml\", \"bun.lock\", \"Bun.serve\", \"Bun.file\", \"Bun.write\", \"Bun.spawn\", \"Bun.hash\", \"Bun.password\", \"bun:test\", \"Bun.build\", \"Bun.Transpiler\", \"bun shell\", \"$ template\", \"import.meta\", \"JavaScriptCore\", \"Bun.serve\", \"HTMLRewriter\", \"Bun.SQL\", \"Bun.RedisClient\", \"Bun.Glob\", \"Bun.plugin\", \"bun:ffi\".",
"commands": [
"npx skills add carapace-sh/carapace-bin@bun -g"
],
"install": "npx skills add carapace-sh/carapace-bin@bun -g",
"stars": 2009,
"repoUrl": "https://github.com/carapace-sh/carapace-bin",
"aliases": [
"bun",
"carapace-sh",
"bun",
"skill",
"スキル"
]
},
{
"id": "skill-carapace-sh-carapace-bin-skills-but",
"priority": 456,
"category": "community",
"type": "skill",
"want": "but",
"feature": "carapace-sh/carapace-bin",
"summary": "Use when working with the GitButler CLI (`but`) — virtual branches, stacked branches, workspace model, commit editing (rub, amend, squash, reword), CLI IDs, forge integration, PRs, operations log, conflict resolution, TUI, AI agent setup, skills, aliases, configuration. Triggers on: \"but\", \"gitbutler\", \"but rub\", \"but commit\", \"but status\", \"but branch\", \"but apply\", \"but unapply\", \"but push\", \"but pull\", \"but pr\", \"but oplog\", \"but undo\", \"but redo\", \"but resolve\", \"but stage\", \"but squash\", \"but amend\", \"but reword\", \"but config\", \"but alias\", \"but setup\", \"but teardown\", \"but tui\", \"but diff\", \"but show\", \"but agent\", \"but skill\", \"but clean\", \"but move\", \"but pick\", \"but absorb\", \"but update\", \"but completions\", \"virtual branch\", \"stacked branch\", \"integration branch\", \"gitbutler workspace\", \"but oplog restore\", \"but oplog snapshot\", \"CLI ID\", \"hunk ID\".",
"trigger": "Use when working with the GitButler CLI (`but`) — virtual branches, stacked branches, workspace model, commit editing (rub, amend, squash, reword), CLI IDs, forge integration, PRs, operations log, conflict resolution, TUI, AI agent setup, skills, aliases, configuration. Triggers on: \"but\", \"gitbutler\", \"but rub\", \"but commit\", \"but status\", \"but branch\", \"but apply\", \"but unapply\", \"but push\", \"but pull\", \"but pr\", \"but oplog\", \"but undo\", \"but redo\", \"but resolve\", \"but stage\", \"but squash\", \"but amend\", \"but reword\", \"but config\", \"but alias\", \"but setup\", \"but teardown\", \"but tui\", \"but diff\", \"but show\", \"but agent\", \"but skill\", \"but clean\", \"but move\", \"but pick\", \"but absorb\", \"but update\", \"but completions\", \"virtual branch\", \"stacked branch\", \"integration branch\", \"gitbutler workspace\", \"but oplog restore\", \"but oplog snapshot\", \"CLI ID\", \"hunk ID\".",
"commands": [
"npx skills add carapace-sh/carapace-bin@but -g"
],
"install": "npx skills add carapace-sh/carapace-bin@but -g",
"stars": 2009,
"repoUrl": "https://github.com/carapace-sh/carapace-bin",
"aliases": [
"but",
"carapace-sh",
"but",
"skill",
"スキル"
]
},
{
"id": "skill-carapace-sh-carapace-bin-skills-carapace",
"priority": 457,
"category": "community",
"type": "skill",
"want": "carapace",
"feature": "carapace-sh/carapace-bin",
"summary": "Use when working with carapace shell completion — integrating into CLIs, writing YAML specs, creating custom actions, building completion-aware lexers for DSLs, looking up macros, setting up shell completion, configuring choices/bridges, using the MCP server, or adding man page documentation.",
"trigger": "Use when working with carapace shell completion — integrating into CLIs, writing YAML specs, creating custom actions, building completion-aware lexers for DSLs, looking up macros, setting up shell completion, configuring choices/bridges, using the MCP server, or adding man page documentation.",
"commands": [
"npx skills add carapace-sh/carapace-bin@carapace -g"
],
"install": "npx skills add carapace-sh/carapace-bin@carapace -g",
"stars": 2009,
"repoUrl": "https://github.com/carapace-sh/carapace-bin",
"aliases": [
"carapace",
"carapace-sh",
"carapace",
"skill",
"スキル"
]
},
{
"id": "skill-carapace-sh-carapace-bin-skills-cargo",
"priority": 458,
"category": "community",
"type": "skill",
"want": "cargo",
"feature": "carapace-sh/carapace-bin",
"summary": "Use when working with the cargo CLI — Rust's package manager. Covers the manifest format (Cargo.toml), dependencies, features, workspaces, build profiles, build scripts, configuration (.cargo/config.toml), registries and publishing, environment variables, the lockfile and cache, and the command reference. Triggers on: \"cargo\", \"cargo build\", \"cargo check\", \"cargo test\", \"cargo run\", \"cargo add\", \"cargo update\", \"cargo publish\", \"cargo new\", \"cargo init\", \"cargo install\", \"cargo doc\", \"cargo bench\", \"cargo tree\", \"cargo metadata\", \"Cargo.toml\", \"Cargo.lock\", \"crate\", \"workspace\", \"feature\", \"profile\", \"build script\", \"build.rs\", \"registry\", \"crates.io\", \"CARGO_HOME\", \"rustc\", \"rustdoc\", \"rust-version\", \"edition\".",
"trigger": "Use when working with the cargo CLI — Rust's package manager. Covers the manifest format (Cargo.toml), dependencies, features, workspaces, build profiles, build scripts, configuration (.cargo/config.toml), registries and publishing, environment variables, the lockfile and cache, and the command reference. Triggers on: \"cargo\", \"cargo build\", \"cargo check\", \"cargo test\", \"cargo run\", \"cargo add\", \"cargo update\", \"cargo publish\", \"cargo new\", \"cargo init\", \"cargo install\", \"cargo doc\", \"cargo bench\", \"cargo tree\", \"cargo metadata\", \"Cargo.toml\", \"Cargo.lock\", \"crate\", \"workspace\", \"feature\", \"profile\", \"build script\", \"build.rs\", \"registry\", \"crates.io\", \"CARGO_HOME\", \"rustc\", \"rustdoc\", \"rust-version\", \"edition\".",
"commands": [
"npx skills add carapace-sh/carapace-bin@cargo -g"
],
"install": "npx skills add carapace-sh/carapace-bin@cargo -g",
"stars": 2009,
"repoUrl": "https://github.com/carapace-sh/carapace-bin",
"aliases": [
"cargo",
"carapace-sh",
"cargo",
"skill",
"スキル"
]
},
{
"id": "skill-carapace-sh-carapace-bin-skills-cobra",
"priority": 459,
"category": "community",
"type": "skill",
"want": "cobra",
"feature": "carapace-sh/carapace-bin",
"summary": "Use when building CLI applications with spf13/cobra — creating commands, defining flags, argument validation, lifecycle hooks, help/usage customization, shell completions, or Viper integration. Triggers on: \"cobra\", \"cobra command\", \"cobra flag\", \"cobra subcommand\", \"cobra completion\", \"cobra help\", \"cobra usage\", \"cobra hook\", \"cobra viper\", \"AddCommand\", \"PersistentFlags\", \"LocalFlags\", \"MarkFlagRequired\", \"RunE\", \"PreRun\", \"PostRun\", \"PersistentPreRun\", \"ValidArgs\", \"ValidArgsFunction\", \"RegisterFlagCompletionFunc\", \"ShellCompDirective\", \"ExactArgs\", \"NoArgs\", \"MinimumNArgs\", \"MatchAll\", \"MarkFlagsRequiredTogether\", \"MarkFlagsMutuallyExclusive\", \"cobra-cli\", \"cobra completion\", \"cobra active help\", \"cobra plugin\".",
"trigger": "Use when building CLI applications with spf13/cobra — creating commands, defining flags, argument validation, lifecycle hooks, help/usage customization, shell completions, or Viper integration. Triggers on: \"cobra\", \"cobra command\", \"cobra flag\", \"cobra subcommand\", \"cobra completion\", \"cobra help\", \"cobra usage\", \"cobra hook\", \"cobra viper\", \"AddCommand\", \"PersistentFlags\", \"LocalFlags\", \"MarkFlagRequired\", \"RunE\", \"PreRun\", \"PostRun\", \"PersistentPreRun\", \"ValidArgs\", \"ValidArgsFunction\", \"RegisterFlagCompletionFunc\", \"ShellCompDirective\", \"ExactArgs\", \"NoArgs\", \"MinimumNArgs\", \"MatchAll\", \"MarkFlagsRequiredTogether\", \"MarkFlagsMutuallyExclusive\", \"cobra-cli\", \"cobra completion\", \"cobra active help\", \"cobra plugin\".",
"commands": [
"npx skills add carapace-sh/carapace-bin@cobra -g"
],
"install": "npx skills add carapace-sh/carapace-bin@cobra -g",
"stars": 2009,
"repoUrl": "https://github.com/carapace-sh/carapace-bin",
"aliases": [
"cobra",
"carapace-sh",
"cobra",
"skill",
"スキル"
]
},
{
"id": "skill-carapace-sh-carapace-bin-skills-dnf5",
"priority": 460,
"category": "community",
"type": "skill",
"want": "dnf5",
"feature": "carapace-sh/carapace-bin",
"summary": "Use when working with dnf5 — the next-generation RPM package manager for Fedora/RHEL. Covers CLI commands and options, configuration, plugin system (dnf5 active plugins and libdnf5 passive plugins), dnf5daemon D-Bus API, execution workflow, package specs (NEVRA), modularity, caching, migration from DNF4, libdnf5 library architecture, build system, and command-line aliases. Triggers on: \"dnf5\", \"dnf\", \"libdnf5\", \"libdnf\", \"dnf5daemon\", \"dnf5-plugins\", \"libdnf5-plugins\", \"dnf5.conf\", \"repoquery\", \"versionlock\", \"distro-sync\", \"offline upgrade\", \"system-upgrade\", \"advisory\", \"comps\", \"modulemd\", \"NEVRA\", \"installroot\", \"forcearch\", \"repo variables\", \"metadata_expire\", \"setopt\", \"setvar\", \"config-manager\", \"repofrompath\", \"releasever\", \"basearch\", \"pluginpath\".",
"trigger": "Use when working with dnf5 — the next-generation RPM package manager for Fedora/RHEL. Covers CLI commands and options, configuration, plugin system (dnf5 active plugins and libdnf5 passive plugins), dnf5daemon D-Bus API, execution workflow, package specs (NEVRA), modularity, caching, migration from DNF4, libdnf5 library architecture, build system, and command-line aliases. Triggers on: \"dnf5\", \"dnf\", \"libdnf5\", \"libdnf\", \"dnf5daemon\", \"dnf5-plugins\", \"libdnf5-plugins\", \"dnf5.conf\", \"repoquery\", \"versionlock\", \"distro-sync\", \"offline upgrade\", \"system-upgrade\", \"advisory\", \"comps\", \"modulemd\", \"NEVRA\", \"installroot\", \"forcearch\", \"repo variables\", \"metadata_expire\", \"setopt\", \"setvar\", \"config-manager\", \"repofrompath\", \"releasever\", \"basearch\", \"pluginpath\".",
"commands": [
"npx skills add carapace-sh/carapace-bin@dnf5 -g"
],
"install": "npx skills add carapace-sh/carapace-bin@dnf5 -g",
"stars": 2009,
"repoUrl": "https://github.com/carapace-sh/carapace-bin",
"aliases": [
"dnf5",
"carapace-sh",
"dnf5",
"skill",
"スキル"
]
},
{
"id": "skill-bayramannakov-claude-reflect-claude-reflect",
"priority": 461,
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
"stars": 1916,
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
"id": "skill-zakirkun-guardian-cli-guardian-cli",
"priority": 462,
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
"stars": 1902,
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
"priority": 463,
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
"stars": 1894,
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
"priority": 464,
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
"stars": 1811,
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
"id": "skill-spacezephyr-creator-buddy-gzh-skills-baokuan-article-analysis",
"priority": 465,
"category": "community",
"type": "skill",
"want": "baokuan-article-analysis",
"feature": "SpaceZephyr/creator-buddy",
"summary": "Fetch and analyze WeChat Official Account hot articles / 公众号爆款文章 by sector or keywords.",
"trigger": "Use when the user asks for 爆款文章分析, 赛道爆款, 公众号爆款数据, reading counts, likes, shares, comments, title patterns, writing style, 爆款原因分析, or writing references for content creation.",
"commands": [
"npx skills add SpaceZephyr/creator-buddy@baokuan-article-analysis -g"
],
"install": "npx skills add SpaceZephyr/creator-buddy@baokuan-article-analysis -g",
"stars": 1792,
"repoUrl": "https://github.com/SpaceZephyr/creator-buddy",
"aliases": [
"baokuan-article-analysis",
"SpaceZephyr",
"baokuan-article-analysis",
"skill",
"スキル"
]
},
{
"id": "skill-spacezephyr-creator-buddy-gzh-skills-baokuan-title-generator",
"priority": 466,
"category": "community",
"type": "skill",
"want": "baokuan-title-generator",
"feature": "SpaceZephyr/creator-buddy",
"summary": "科技/AI/互联网领域的公众号 10 万+ 爆款标题生成器。输入一篇文章、一段内容或一个主题，先建内容简报，再按多种方法产出多个候选标题，逐个评分、标风险、按用途分角色推荐，并给 A/B 测试建议。当用户说\"起标题\"\"想个爆款标题\"\"这篇文章叫什么好\"\"标题优化\"\"标题改写\"\"多组标题\"\"标题评分\"\"10万+标题\"时触发。方法论提炼自 100 篇真实科技类爆文标题。",
"trigger": "",
"commands": [
"npx skills add SpaceZephyr/creator-buddy@baokuan-title-generator -g"
],
"install": "npx skills add SpaceZephyr/creator-buddy@baokuan-title-generator -g",
"stars": 1792,
"repoUrl": "https://github.com/SpaceZephyr/creator-buddy",
"aliases": [
"baokuan-title-generator",
"SpaceZephyr",
"baokuan-title-generator",
"skill",
"スキル"
]
},
{
"id": "skill-spacezephyr-creator-buddy-creator-buddy",
"priority": 467,
"category": "community",
"type": "skill",
"want": "creator-buddy",
"feature": "SpaceZephyr/creator-buddy",
"summary": "创作者全域内容搜索总控 Skill。用户发送平台名+关键词、平台链接，或要求分析博主、文章风格、热度、点赞、收藏、评论、爆款原因、选题方向时触发；根据平台和任务自动路由到小红书热门笔记、全域内容搜索、公众号爆款搜索、公众号赛道分析等分支 Skill。",
"trigger": "",
"commands": [
"npx skills add SpaceZephyr/creator-buddy@creator-buddy -g"
],
"install": "npx skills add SpaceZephyr/creator-buddy@creator-buddy -g",
"stars": 1792,
"repoUrl": "https://github.com/SpaceZephyr/creator-buddy",
"aliases": [
"creator-buddy",
"SpaceZephyr",
"creator-buddy",
"skill",
"スキル"
]
},
{
"id": "skill-spacezephyr-creator-buddy-gzh-skills-global-content-search",
"priority": 468,
"category": "community",
"type": "skill",
"want": "global-content-search",
"feature": "SpaceZephyr/creator-buddy",
"summary": "全域内容搜索｜当提到小红书/B站/抖音关键词搜索、笔记/视频详情、评论、博主/UP主作品监控时使用。优先基于 Agent Reach / OpenCLI / bili-cli / 公开只读接口访问；Agent Reach 不可用时，小红书可用 Guaikei API 作为最后兜底。",
"trigger": "",
"commands": [
"npx skills add SpaceZephyr/creator-buddy@global-content-search -g"
],
"install": "npx skills add SpaceZephyr/creator-buddy@global-content-search -g",
"stars": 1792,
"repoUrl": "https://github.com/SpaceZephyr/creator-buddy",
"aliases": [
"global-content-search",
"SpaceZephyr",
"global-content-search",
"skill",
"スキル"
]
},
{
"id": "skill-spacezephyr-creator-buddy-gzh-skills-gzh-explosive-content-detector",
"priority": 469,
"category": "community",
"type": "skill",
"want": "gzh-explosive-content-detector",
"feature": "SpaceZephyr/creator-buddy",
"summary": "为公众号文章创作打造的专业数据洞察工具。全网持续收录每日爆款文章，收录依据：低粉高阅读、阅读靠前、数据增长中、原创靠前，助力号主获取数据参考。",
"trigger": "",
"commands": [
"npx skills add SpaceZephyr/creator-buddy@gzh-explosive-content-detector -g"
],
"install": "npx skills add SpaceZephyr/creator-buddy@gzh-explosive-content-detector -g",
"stars": 1792,
"repoUrl": "https://github.com/SpaceZephyr/creator-buddy",
"aliases": [
"gzh-explosive-content-detector",
"SpaceZephyr",
"gzh-explosive-content-detector",
"skill",
"スキル"
]
},
{
"id": "skill-spacezephyr-creator-buddy-gzh-skills-gzh-longform-writer",
"priority": 470,
"category": "community",
"type": "skill",
"want": "gzh-longform-writer",
"feature": "SpaceZephyr/creator-buddy",
"summary": "公众号长文写作（1500–4000 字）。先诊断作者手上已有什么（一个念头 / 一堆素材 / 半篇草稿 / 一份大纲 / 一篇不满意的成稿），再路由到对应的六种写法之一，产出成稿并过公众号专属质检。当用户说\"写篇公众号\"\"帮我写文章\"\"这个主题怎么写\"\"我有一堆素材不知道怎么组织\"\"帮我扩写\"\"这篇改一下\"\"写不下去了\"\"长文\"\"深度文\"时触发。",
"trigger": "",
"commands": [
"npx skills add SpaceZephyr/creator-buddy@gzh-longform-writer -g"
],
"install": "npx skills add SpaceZephyr/creator-buddy@gzh-longform-writer -g",
"stars": 1792,
"repoUrl": "https://github.com/SpaceZephyr/creator-buddy",
"aliases": [
"gzh-longform-writer",
"SpaceZephyr",
"gzh-longform-writer",
"skill",
"スキル"
]
},
{
"id": "skill-spacezephyr-creator-buddy-gzh-skills-gzh-positioning",
"priority": 471,
"category": "community",
"type": "skill",
"want": "gzh-positioning",
"feature": "SpaceZephyr/creator-buddy",
"summary": "公众号定位分析 + 三件套设计（账号简介 / 关注后自动回复 / 自定义菜单）。先通过分层访谈和历史文章反推，收敛出一句话定位，再派生出可直接粘贴进公众号后台的三份内容，全部带字数校验。当用户说\"公众号定位\"\"账号简介怎么写\"\"功能介绍\"\"公众号介绍\"\"关注后回复\"\"欢迎语\"\"自动回复\"\"菜单怎么设计\"\"菜单栏\"\"公众号装修\"\"新号怎么起步\"\"号没人关注\"时触发。",
"trigger": "",
"commands": [
"npx skills add SpaceZephyr/creator-buddy@gzh-positioning -g"
],
"install": "npx skills add SpaceZephyr/creator-buddy@gzh-positioning -g",
"stars": 1792,
"repoUrl": "https://github.com/SpaceZephyr/creator-buddy",
"aliases": [
"gzh-positioning",
"SpaceZephyr",
"gzh-positioning",
"skill",
"スキル"
]
},
{
"id": "skill-spacezephyr-creator-buddy-gzh-skills-gzh-short-post",
"priority": 472,
"category": "community",
"type": "skill",
"want": "gzh-short-post",
"feature": "SpaceZephyr/creator-buddy",
"summary": "公众号短文写作（1000 字以内，纯文字不配图）。把一个观察、一次实测、一段思考写成短平快的推送，或把长文/素材压成短文。核心是一套风格规则：第一人称不说教、去 AI 腔、靠分段做节奏、收尾落到具体画面。当用户说\"写个短的\"\"公众号短文\"\"一千字以内\"\"随手写一条\"\"这事写个短篇\"\"压成短文\"\"不配图那种\"时触发。",
"trigger": "",
"commands": [
"npx skills add SpaceZephyr/creator-buddy@gzh-short-post -g"
],
"install": "npx skills add SpaceZephyr/creator-buddy@gzh-short-post -g",
"stars": 1792,
"repoUrl": "https://github.com/SpaceZephyr/creator-buddy",
"aliases": [
"gzh-short-post",
"SpaceZephyr",
"gzh-short-post",
"skill",
"スキル"
]
},
{
"id": "skill-litellm-labs-litellm-agent-control-plane-skills",
"priority": 473,
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
"stars": 1326,
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
"id": "skill-langchat-langchat-skills",
"priority": 474,
"category": "community",
"type": "skill",
"want": "vben",
"feature": "LangChat/langchat",
"summary": "Vben Admin 5.0 前端框架开发技能。用于开发基于 Vue3、Vite、TypeScript 的中后台管理系统。",
"trigger": "",
"commands": [
"npx skills add LangChat/langchat -g"
],
"install": "npx skills add LangChat/langchat -g",
"stars": 1322,
"repoUrl": "https://github.com/LangChat/langchat",
"aliases": [
"skills",
"LangChat",
"vben",
"skill",
"スキル"
]
},
{
"id": "skill-itsmostafa-aws-agent-skills-skills-api-gateway",
"priority": 475,
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
"stars": 1171,
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
"priority": 476,
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
"stars": 1171,
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
"priority": 477,
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
"stars": 1171,
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
"priority": 478,
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
"stars": 1171,
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
"priority": 479,
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
"stars": 1171,
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
"priority": 480,
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
"stars": 1171,
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
"priority": 481,
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
"stars": 1171,
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
"priority": 482,
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
"stars": 1171,
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
"priority": 483,
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
"stars": 983,
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
"id": "skill-do1e-mijia-api-skills",
"priority": 484,
"category": "community",
"type": "skill",
"want": "mijia-api",
"feature": "Do1e/mijia-api",
"summary": "通过 `uvx mijiaAPI` CLI 控制米家智能设备。适用于：列出米家设备/家庭/场景/耗材、\n获取或设置设备属性、执行设备动作、查询统计数据、运行场景、通过小爱音箱执行自然语言命令或播放文本。\n触发词包括\"控制米家设备\"、\"米家\"、\"mijia\"、\"列出设备\"、\"设置亮度\"、\"打开灯\"、\n\"执行动作\"、\"统计数据\"、\"耗电量\"、\"运行场景\"、\"小爱音箱\"、\"耗材\"、\"场景\"。",
"trigger": "",
"commands": [
"npx skills add Do1e/mijia-api -g"
],
"install": "npx skills add Do1e/mijia-api -g",
"stars": 958,
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
"id": "skill-raphaelsalaja-userinterface-wiki-skills",
"priority": 485,
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
"stars": 940,
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
"id": "skill-coreyhaines31-makerskills-skills-business-brainstorm",
"priority": 486,
"category": "community",
"type": "skill",
"want": "business-brainstorm",
"feature": "coreyhaines31/makerskills",
"summary": "When you want to pressure-test a potential new business, product, or side project against the serial-founder filter. Not \"marketing ideas for a product\" (that's marketing-skills:marketing-ideas) — this is \"should this business exist + can you win it.\" Runs the idea through a structured framework (problem, audience, wedge, monetization, moat, portfolio fit, distribution, energy fit, opportunity cost), checks domain availability via /domain, optionally triggers /deep-research for market validation, and outputs a viability brief: build / sleep on it / pass. Archives every idea to ~/.config/makerskills/business-brainstorm/archive/ so past work is searchable. Triggers on \"/business-brainstorm,\" \"/brainstorm,\" \"new business idea,\" \"should I build X,\" \"pressure test this idea,\" \"validate this idea,\" \"is X a good business,\" \"what about a [type] for [audience].\"",
"trigger": "",
"commands": [
"npx skills add coreyhaines31/makerskills@business-brainstorm -g"
],
"install": "npx skills add coreyhaines31/makerskills@business-brainstorm -g",
"stars": 880,
"repoUrl": "https://github.com/coreyhaines31/makerskills",
"aliases": [
"business-brainstorm",
"coreyhaines31",
"business-brainstorm",
"skill",
"スキル"
]
},
{
"id": "skill-coreyhaines31-makerskills-skills-company-brain",
"priority": 487,
"category": "community",
"type": "skill",
"want": "company-brain",
"feature": "coreyhaines31/makerskills",
"summary": "Your team's shared, AI-ready knowledge base — people, companies, meetings, SOPs, and decisions structured so an agent can answer on your team's behalf. Team-scope sibling to second-brain — personal notes go there, not here. Modes — capture, compile (wiki pages + INDEX.md), query (trust-weighted, saved to outputs/), review (verify / deprecate / supersede stale captures), lint, connect, search. Structured raw dirs (people/, companies/, meetings/, sops/, decisions/, customer-language/, sales-objections/). Every capture stamps author, timestamp, and trust status. Optional sync from call transcripts, Slack/email exports, CRM. Vault at ${COMPANY_BRAIN_VAULT:-$HOME/Documents/CompanyBrain}/. Triggers on \"/company-brain,\" \"/cb,\" \"capture this into the team brain,\" \"log this meeting,\" \"save this SOP,\" \"compile the company wiki,\" \"query the team brain,\" \"what does the team know about X,\" \"review the company brain,\" \"lint the company brain,\" \"who's the internal expert on X.\"",
"trigger": "",
"commands": [
"npx skills add coreyhaines31/makerskills@company-brain -g"
],
"install": "npx skills add coreyhaines31/makerskills@company-brain -g",
"stars": 880,
"repoUrl": "https://github.com/coreyhaines31/makerskills",
"aliases": [
"company-brain",
"coreyhaines31",
"company-brain",
"skill",
"スキル"
]
},
{
"id": "skill-coreyhaines31-makerskills-skills-company-cfo",
"priority": 488,
"category": "community",
"type": "skill",
"want": "company-cfo",
"feature": "coreyhaines31/makerskills",
"summary": "Monthly CFO workflow for a company or agency — pull raw data from bank + payment processor + payroll + expense management, categorize and reconcile, compute end-of-month cash via transaction-sum method, update a scenario projector for forward forecasting, write the monthly snapshot report, surface decisions to leadership. Modes — monthly (default; the standing report), weekly (thin cash pulse), scenario (ad-hoc modeling in the projector), pickup (resume where the prior run left off). Anonymized team-scope sibling to personal-cfo (which handles personal household finances). Composes with company-brain (report gets stored + wiki-indexed there), toolify (wire company-specific data sources), loopify (schedule the monthly + weekly runs). Triggers on \"/company-cfo,\" \"/cfo,\" \"monthly cash report,\" \"do the CFO snapshot,\" \"CFO monthly,\" \"let's run CFO,\" \"cash projection,\" \"runway forecast,\" \"monthly financials,\" \"cash pulse.\"",
"trigger": "",
"commands": [
"npx skills add coreyhaines31/makerskills@company-cfo -g"
],
"install": "npx skills add coreyhaines31/makerskills@company-cfo -g",
"stars": 880,
"repoUrl": "https://github.com/coreyhaines31/makerskills",
"aliases": [
"company-cfo",
"coreyhaines31",
"company-cfo",
"skill",
"スキル"
]
},
{
"id": "skill-coreyhaines31-makerskills-skills-decide",
"priority": 489,
"category": "community",
"type": "skill",
"want": "decide",
"feature": "coreyhaines31/makerskills",
"summary": "When you have a decision to make and want a structured workflow that picks the load-bearing questions, walks through them, reaches a call (or \"wait\"), and archives the rationale for future reference. Based on the 37signals Guide to Making Decisions (38 questions) plus house additions like Q39 opportunity cost (\"what does saying yes displace?\"). Triages to 6–8 relevant questions per decision instead of forcing the full set. Archives every decision to ~/.config/makerskills/decide/archive/ with a revisit date so you can check later whether the call was right. Triggers on \"/decide,\" \"help me decide,\" \"should I [X],\" \"I need to make a decision about,\" \"stuck on a decision,\" \"deciding between,\" \"go/no-go on,\" \"what should I do about.\" This is both the decision-making workflow AND the decision log — making the decision is the act of logging it.",
"trigger": "",
"commands": [
"npx skills add coreyhaines31/makerskills@decide -g"
],
"install": "npx skills add coreyhaines31/makerskills@decide -g",
"stars": 880,
"repoUrl": "https://github.com/coreyhaines31/makerskills",
"aliases": [
"decide",
"coreyhaines31",
"decide",
"skill",
"スキル"
]
},
{
"id": "skill-coreyhaines31-makerskills-skills-deep-research",
"priority": 490,
"category": "community",
"type": "skill",
"want": "deep-research",
"feature": "coreyhaines31/makerskills",
"summary": "When you want multi-source, multi-step research on a topic — competitor research before a sales call, market research for a new business idea, positioning angles, due diligence on a partnership or podcast guest, tech decision research (which DB, which auth), or any \"I need to actually understand X.\" Combines web search, URL fetch, agent-browser, last30days (Reddit/X/YouTube/HN/web recency), memory, and Notion. Outputs a structured brief with citations, contradictions, gaps, and recommended next steps. Archives every research run to ~/.config/makerskills/deep-research/archive/ so past work is searchable. Triggers on \"/deep-research,\" \"research X,\" \"investigate X,\" \"do a deep dive on X,\" \"look into X,\" \"what's actually happening with X,\" \"due diligence on X,\" \"validate this market.\" Differs from a one-shot web search: this is multi-pass with verification. Not for standing monitoring (radar) or pulling one post or video (social-fetch, watch-video).",
"trigger": "",
"commands": [
"npx skills add coreyhaines31/makerskills@deep-research -g"
],
"install": "npx skills add coreyhaines31/makerskills@deep-research -g",
"stars": 880,
"repoUrl": "https://github.com/coreyhaines31/makerskills",
"aliases": [
"deep-research",
"coreyhaines31",
"deep-research",
"skill",
"スキル"
]
},
{
"id": "skill-coreyhaines31-makerskills-skills-domain",
"priority": 491,
"category": "community",
"type": "skill",
"want": "domain",
"feature": "coreyhaines31/makerskills",
"summary": "When you want to brainstorm and check available .com domains for a new project — brand naming, aftermarket pricing (HugeDomains / Afternic / Sedo / Dan), USPTO trademark screening, and social handle availability. Built on Laura Roeder's \"work backwards from availability\" method. Combines Vercel CLI, whois, Domainr, Namecheap, and agent-browser, each for what it reliably does. Workflow: budget → brainstorm → availability check → whois cross-check → price → aftermarket sweep (plus liveness probe and drop-watch) → bucket → negotiate → trademark + socials → buy. Triggers on \"/domain,\" \"find a domain,\" \"check domain availability,\" \"brainstorm a domain,\" \"what .com is available for X,\" \"domain hunt,\" \"name my project,\" \"is X.com available,\" \"aftermarket price on X.com,\" \"trademark check for X.\"",
"trigger": "",
"commands": [
"npx skills add coreyhaines31/makerskills@domain -g"
],
"install": "npx skills add coreyhaines31/makerskills@domain -g",
"stars": 880,
"repoUrl": "https://github.com/coreyhaines31/makerskills",
"aliases": [
"domain",
"coreyhaines31",
"domain",
"skill",
"スキル"
]
},
{
"id": "skill-coreyhaines31-makerskills-skills-ingest",
"priority": 492,
"category": "community",
"type": "skill",
"want": "ingest",
"feature": "coreyhaines31/makerskills",
"summary": "When you paste raw human input — a call transcript (Grain, Zoom, Granola, Fathom), a text or email from a client/partner/friend, a voice-memo dump, or meeting notes — and want it converted into structured work. Extracts decisions, action items (yours vs theirs), bugs/feature requests, and facts worth keeping; files GitHub issues in the right repo, captures to the second-brain vault, and drafts (never sends) the reply. Triggers on \"/ingest\", \"ingest this\", \"here's my call with X,\" \"here's the transcript,\" \"this is from [person],\" \"[person] asked me this,\" \"from [person]:\", a pasted transcript with speaker labels, or a forwarded client message that clearly expects processing. Person→project routing lives in a private config; unknown senders get asked about once, then remembered.",
"trigger": "",
"commands": [
"npx skills add coreyhaines31/makerskills@ingest -g"
],
"install": "npx skills add coreyhaines31/makerskills@ingest -g",
"stars": 880,
"repoUrl": "https://github.com/coreyhaines31/makerskills",
"aliases": [
"ingest",
"coreyhaines31",
"ingest",
"skill",
"スキル"
]
},
{
"id": "skill-coreyhaines31-makerskills-skills-jab-hook",
"priority": 493,
"category": "community",
"type": "skill",
"want": "jab-hook",
"feature": "coreyhaines31/makerskills",
"summary": "Gary Vaynerchuk's jab-jab-jab-right-hook framework applied to a personal portfolio rotation on X and LinkedIn. Jabs = build-in-public + educational (value). Hooks = promo (the ask). Each property in the user's configured portfolio (see `~/.config/makerskills/jab-hook/properties.yaml`) gets a hook at least once every ~3 weeks; jabs fill the rest. Drafts go into the user's Typefully workspace via MCP. Modes — plan (7-day plan), pick-next (single post), audit (coverage report), draft (specific post). Triggers on \"/jab-hook,\" \"what should I post,\" \"plan my socials,\" \"next promo,\" \"next jab,\" \"next hook,\" \"social rotation,\" \"promote [property],\" \"BIP post,\" \"audit my socials,\" \"what haven't I posted about.\"",
"trigger": "",
"commands": [
"npx skills add coreyhaines31/makerskills@jab-hook -g"
],
"install": "npx skills add coreyhaines31/makerskills@jab-hook -g",
"stars": 880,
"repoUrl": "https://github.com/coreyhaines31/makerskills",
"aliases": [
"jab-hook",
"coreyhaines31",
"jab-hook",
"skill",
"スキル"
]
},
{
"id": "skill-denissergeevitch-repo-task-proof-loop-repo-task-proof-loop",
"priority": 494,
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
"stars": 726,
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
"id": "skill-genomoncology-biomcp-skills",
"priority": 495,
"category": "community",
"type": "skill",
"want": "biomcp",
"feature": "genomoncology/biomcp",
"summary": "Search and retrieve biomedical data - genes, variants, clinical trials, diagnostic tests, articles, drugs, diseases, pathways, proteins, adverse events, pharmacogenomics, and phenotype-disease matching. Use for gene function, variant pathogenicity, trials, diagnostics, drug safety, pathway context, disease workups, and literature evidence.",
"trigger": "",
"commands": [
"npx skills add genomoncology/biomcp@skills -g"
],
"install": "npx skills add genomoncology/biomcp@skills -g",
"stars": 671,
"repoUrl": "https://github.com/genomoncology/biomcp",
"aliases": [
"skills",
"genomoncology",
"biomcp",
"skill",
"スキル"
]
},
{
"id": "skill-genomoncology-biomcp-sdlc-archive-skills-biomcp-research",
"priority": 496,
"category": "community",
"type": "skill",
"want": "biomcp-research",
"feature": "genomoncology/biomcp",
"summary": "Do biomedical literature and variant research with the BioMCP CLI, and file what you learn about the tool itself as issues in the biomcp repo.",
"trigger": "",
"commands": [
"npx skills add genomoncology/biomcp@biomcp-research -g"
],
"install": "npx skills add genomoncology/biomcp@biomcp-research -g",
"stars": 671,
"repoUrl": "https://github.com/genomoncology/biomcp",
"aliases": [
"biomcp-research",
"genomoncology",
"biomcp-research",
"skill",
"スキル"
]
},
{
"id": "skill-quantco-dataframely-skills",
"priority": 497,
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
"stars": 624,
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
"id": "skill-op7418-document-illustrator-skill-document-illustrator-skill",
"priority": 498,
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
"stars": 608,
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
"id": "skill-ahmadawais-ramadan-cli-skills",
"priority": 499,
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
"stars": 603,
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
"id": "skill-browser-use-browser-harness-js-browser-harness-js",
"priority": 500,
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
"stars": 496,
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
"id": "skill-w3c-web-performance-skills",
"priority": 501,
"category": "community",
"type": "skill",
"want": "bikeshed-conversion",
"feature": "w3c/web-performance",
"summary": "Guidelines for converting W3C specs to Bikeshed format. Covers anchor ID preservation, dfn handling, and common pitfalls. Read this before any Bikeshed conversion or migration work.",
"trigger": "",
"commands": [
"npx skills add w3c/web-performance@skills -g"
],
"install": "npx skills add w3c/web-performance@skills -g",
"stars": 430,
"repoUrl": "https://github.com/w3c/web-performance",
"aliases": [
"skills",
"w3c",
"bikeshed-conversion",
"skill",
"スキル"
]
},
{
"id": "skill-w3c-web-performance-skills-bikeshed-conversion",
"priority": 502,
"category": "community",
"type": "skill",
"want": "bikeshed-conversion",
"feature": "w3c/web-performance",
"summary": "Convert a W3C spec from ReSpec (index.html) to Bikeshed (index.bs), keeping its anchors and exported terms stable",
"trigger": "",
"commands": [
"npx skills add w3c/web-performance@bikeshed-conversion -g"
],
"install": "npx skills add w3c/web-performance@bikeshed-conversion -g",
"stars": 430,
"repoUrl": "https://github.com/w3c/web-performance",
"aliases": [
"bikeshed-conversion",
"w3c",
"bikeshed-conversion",
"skill",
"スキル"
]
},
{
"id": "skill-w3c-web-performance-skills-publish-wg-minutes",
"priority": 503,
"category": "community",
"type": "skill",
"want": "publish-wg-minutes",
"feature": "w3c/web-performance",
"summary": "Process and publish WebPerfWG meeting minutes from Google Docs zip exports. Read this before handling any WebPerfWG meeting minute zip files.",
"trigger": "",
"commands": [
"npx skills add w3c/web-performance@publish-wg-minutes -g"
],
"install": "npx skills add w3c/web-performance@publish-wg-minutes -g",
"stars": 430,
"repoUrl": "https://github.com/w3c/web-performance",
"aliases": [
"publish-wg-minutes",
"w3c",
"publish-wg-minutes",
"skill",
"スキル"
]
},
{
"id": "skill-ali2000hos-persian-writing-persian-writing",
"priority": 504,
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
"stars": 410,
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
"priority": 505,
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
"stars": 338,
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
"priority": 506,
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
"stars": 338,
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
"priority": 507,
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
"stars": 338,
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
"priority": 508,
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
"stars": 338,
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
"priority": 509,
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
"stars": 338,
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
"priority": 510,
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
"stars": 338,
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
"id": "skill-sixian-li-knowledge-base-kit-skills-kb",
"priority": 511,
"category": "community",
"type": "skill",
"want": "kb",
"feature": "Sixian-Li/knowledge-base-kit",
"summary": "Read and answer questions from this workspace's local knowledge base. Start at its catalog, read matching summaries and expand to full documents when needed.",
"trigger": "",
"commands": [
"npx skills add Sixian-Li/knowledge-base-kit@kb -g"
],
"install": "npx skills add Sixian-Li/knowledge-base-kit@kb -g",
"stars": 274,
"repoUrl": "https://github.com/Sixian-Li/knowledge-base-kit",
"aliases": [
"kb",
"Sixian-Li",
"kb",
"skill",
"スキル"
]
},
{
"id": "skill-sixian-li-knowledge-base-kit-skills-process_docs",
"priority": 512,
"category": "community",
"type": "skill",
"want": "process_docs",
"feature": "Sixian-Li/knowledge-base-kit",
"summary": "Ingest documents into this local knowledge workspace, preserving source content, drafting full text and summaries, validating, classifying and updating the catalog. Also supports check, batch, group, delete and teach requests.",
"trigger": "",
"commands": [
"npx skills add Sixian-Li/knowledge-base-kit@process_docs -g"
],
"install": "npx skills add Sixian-Li/knowledge-base-kit@process_docs -g",
"stars": 274,
"repoUrl": "https://github.com/Sixian-Li/knowledge-base-kit",
"aliases": [
"process_docs",
"Sixian-Li",
"process_docs",
"skill",
"スキル"
]
},
{
"id": "skill-chenhg5-agencycli-skills-agency-messaging",
"priority": 513,
"category": "community",
"type": "skill",
"want": "agency-messaging",
"feature": "chenhg5/agencycli",
"summary": "Discover all agents in the current agency and send/receive async messages between agents and the human owner via the inbox system.",
"trigger": "",
"commands": [
"npx skills add chenhg5/agencycli@agency-messaging -g"
],
"install": "npx skills add chenhg5/agencycli@agency-messaging -g",
"stars": 242,
"repoUrl": "https://github.com/chenhg5/agencycli",
"aliases": [
"agency-messaging",
"chenhg5",
"agency-messaging",
"skill",
"スキル"
]
},
{
"id": "skill-chenhg5-agencycli-agencycli",
"priority": 514,
"category": "community",
"type": "skill",
"want": "agencycli",
"feature": "chenhg5/agencycli",
"summary": "Manage AI agent teams with agencycli — a CLI tool for organising AI agents (Claude Code, Codex, Gemini, Cursor, etc.) into hierarchical teams (Agency → Team → Role → Project → Agent). Key capabilities: create agencies and teams, hire agents with merged context layers, assign and run tasks with priority queues, manage autonomous playbooks (wakeup.md), send async inbox messages between human and agents, configure heartbeat schedules and cron jobs, run agents inside Docker sandboxes, forward/confirm tasks via inbox, manage templates, and more. Use this skill whenever you need to: create or manage an agencycli workspace, hire/fire/sync agents, add/run/cancel tasks, check inbox confirmations, send messages, configure heartbeats or crons, start the scheduler, or work with agency templates.",
"trigger": "",
"commands": [
"npx skills add chenhg5/agencycli@agencycli -g"
],
"install": "npx skills add chenhg5/agencycli@agencycli -g",
"stars": 242,
"repoUrl": "https://github.com/chenhg5/agencycli",
"aliases": [
"agencycli",
"chenhg5",
"agencycli",
"skill",
"スキル"
]
},
{
"id": "skill-chenhg5-agencycli-skills-agencycli-usage",
"priority": 515,
"category": "community",
"type": "skill",
"want": "agencycli-usage",
"feature": "chenhg5/agencycli",
"summary": "Operate the agencycli tool — create agencies, teams, projects, and hire AI agents into working directories.",
"trigger": "",
"commands": [
"npx skills add chenhg5/agencycli@agencycli-usage -g"
],
"install": "npx skills add chenhg5/agencycli@agencycli-usage -g",
"stars": 242,
"repoUrl": "https://github.com/chenhg5/agencycli",
"aliases": [
"agencycli-usage",
"chenhg5",
"agencycli-usage",
"skill",
"スキル"
]
},
{
"id": "skill-chenhg5-agencycli-skills-task-management",
"priority": 516,
"category": "community",
"type": "skill",
"want": "task-management",
"feature": "chenhg5/agencycli",
"summary": "Create, assign, monitor, and close tasks across agents. Covers full task lifecycle — add, priority, dependencies, confirm-request, retry, cancel, bulk ops, and cross-agent search.",
"trigger": "",
"commands": [
"npx skills add chenhg5/agencycli@task-management -g"
],
"install": "npx skills add chenhg5/agencycli@task-management -g",
"stars": 242,
"repoUrl": "https://github.com/chenhg5/agencycli",
"aliases": [
"task-management",
"chenhg5",
"task-management",
"skill",
"スキル"
]
},
{
"id": "skill-vivixiao980-xhs-cover-skill-xhs-cover-skill",
"priority": 517,
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
"stars": 218,
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
"id": "skill-dageno-agents-geo-content-writer-geo-content-writer",
"priority": 518,
"category": "community",
"type": "skill",
"want": "content-writer",
"feature": "dageno-agents/geo-content-writer",
"summary": "Use when the user wants to turn [Dageno](https://dageno.ai/?utm_source=github&utm_medium=social&utm_campaign=official) GEO opportunities into a real-fanout backlog and then write one publish-ready article from one selected fanout item. Produces a backlog-row-first GEO workflow with fanout extraction, editorial brief generation, draft and review contracts, and publish-ready article output. For broad SEO article generation from keywords without [Dageno](https://dageno.ai/?utm_source=github&utm_medium=social&utm_campaign=official) opportunity data, see a keyword-first SEO content workflow instead.",
"trigger": "Use when the user wants to turn [Dageno](https://dageno.ai/?utm_source=github&utm_medium=social&utm_campaign=official) GEO opportunities into a real-fanout backlog and then write one publish-ready article from one selected fanout item. Produces a backlog-row-first GEO workflow with fanout extraction, editorial brief generation, draft and review contracts, and publish-ready article output. For broad SEO article generation from keywords without [Dageno](https://dageno.ai/?utm_source=github&utm_medium=social&utm_campaign=official) opportunity data, see a keyword-first SEO content workflow instead.",
"commands": [
"npx skills add dageno-agents/geo-content-writer -g"
],
"install": "npx skills add dageno-agents/geo-content-writer -g",
"stars": 217,
"repoUrl": "https://github.com/dageno-agents/geo-content-writer",
"aliases": [
"geo-content-writer",
"dageno-agents",
"content-writer",
"skill",
"スキル"
]
},
{
"id": "skill-engenheirodevideo-get-brolls-get-brolls",
"priority": 519,
"category": "community",
"type": "skill",
"want": "get-brolls",
"feature": "engenheirodevideo/get-brolls",
"summary": "Coleta, pré-visualiza e entrega B-rolls com revisão humana e origem registrada. Use quando alguém pedir b-roll, vídeos de apoio, imagens de apoio, cutaways, inserts, footage, \"um corte do X falando Y\", um print da tela de um site ou de uma notícia, ou material para ilustrar um vídeo, Reel ou aula — buscando em YouTube, Instagram, TikTok, Wikimedia Commons, NASA ou bancos (Pexels, Pixabay), gerando prévias para revisão humana e entregando os trechos com origem e condições de uso. Also in English: collect B-roll, cutaways, inserts, supporting footage, stock video, screen grabs. Não serve para editar, montar ou renderizar o vídeo final. Not for editing or rendering the finished video.",
"trigger": "",
"commands": [
"npx skills add engenheirodevideo/get-brolls@get-brolls -g"
],
"install": "npx skills add engenheirodevideo/get-brolls@get-brolls -g",
"stars": 192,
"repoUrl": "https://github.com/engenheirodevideo/get-brolls",
"aliases": [
"get-brolls",
"engenheirodevideo",
"get-brolls",
"skill",
"スキル"
]
}
];
