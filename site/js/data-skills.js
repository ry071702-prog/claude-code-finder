// 生成物: scripts/build_data.py が skills.jsonl + overrides.ja.json から作成。手で編集しない。
// GitHub の Claude Code Skills を非LLMで取り込み、日本語化 29/75 件（週次 ingest-skills.yml）。
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
"stars": 191217,
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
"stars": 191217,
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
"stars": 191217,
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
"stars": 191217,
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
"stars": 191217,
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
"stars": 191217,
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
"stars": 191217,
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
"stars": 191217,
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
"stars": 191217,
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
"stars": 191217,
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
"stars": 191217,
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
"stars": 191217,
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
"stars": 191217,
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
"stars": 191217,
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
"stars": 191217,
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
"stars": 191217,
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
"stars": 191217,
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
"stars": 191217,
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
"stars": 191217,
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
"stars": 33792,
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
"stars": 33792,
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
"stars": 33792,
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
"stars": 33792,
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
"stars": 33792,
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
"stars": 33792,
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
"stars": 33792,
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
"stars": 33792,
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
"stars": 33792,
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
"id": "skill-alchaincyf-darwin-skill-darwin-skill",
"priority": 428,
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
"stars": 6867,
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
"id": "skill-butterbase-ai-butterbase-butterbase",
"priority": 429,
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
"stars": 3030,
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
"id": "skill-kokiainet-anti-distill-anti-distill",
"priority": 430,
"category": "community",
"type": "skill",
"want": "anti-distill",
"feature": "kokiainet/anti-distill",
"summary": "Anti-distillation for employee Skills. Clean your skill files — looks complete, but core knowledge removed. | 反蒸馏：清洗你被迫写的 Skill 文件，看起来完整，但核心知识已被抽掉。",
"trigger": "",
"commands": [
"npx skills add kokiainet/anti-distill -g"
],
"install": "npx skills add kokiainet/anti-distill -g",
"stars": 2483,
"repoUrl": "https://github.com/kokiainet/anti-distill",
"aliases": [
"anti-distill",
"kokiainet",
"anti-distill",
"skill",
"スキル"
]
},
{
"id": "skill-op7418-youtube-clipper-skill-youtube-clipper-skill",
"priority": 431,
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
"stars": 2298,
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
"id": "skill-youmind-openlab-nano-banana-pro-prompts-recommend-skill-nano-banana-pro-prompts-recommend-skill",
"priority": 432,
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
"stars": 1904,
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
"id": "skill-spacezephyr-creator-buddy-gzh-skills-baokuan-article-analysis",
"priority": 433,
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
"stars": 1865,
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
"priority": 434,
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
"stars": 1865,
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
"priority": 435,
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
"stars": 1865,
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
"priority": 436,
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
"stars": 1865,
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
"priority": 437,
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
"stars": 1865,
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
"priority": 438,
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
"stars": 1865,
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
"priority": 439,
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
"stars": 1865,
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
"priority": 440,
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
"stars": 1865,
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
"id": "skill-adamlyttleapps-claude-skill-aso-appstore-screenshots-claude-skill-aso-appstore-screenshots",
"priority": 441,
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
"stars": 1825,
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
"id": "skill-shadcnspace-shadcnspace-.agents-skills-shadcnspace",
"priority": 442,
"category": "community",
"type": "skill",
"want": "shadcnspace",
"feature": "shadcnspace/shadcnspace",
"summary": "Production UI component library with MCP server integration, 100+ blocks, templates, and dashboard layouts. Use this skill when building modern React and Next.js UI, designing landing pages, selecting dashboard layouts, creating marketing sections, or replacing generic shadcn/ui components with production-grade ShadcnSpace blocks.",
"trigger": "",
"commands": [
"npx skills add shadcnspace/shadcnspace@shadcnspace -g"
],
"install": "npx skills add shadcnspace/shadcnspace@shadcnspace -g",
"stars": 795,
"repoUrl": "https://github.com/shadcnspace/shadcnspace",
"aliases": [
"shadcnspace",
"shadcnspace",
"shadcnspace",
"skill",
"スキル"
]
},
{
"id": "skill-shadcnspace-shadcnspace-shadcnspace",
"priority": 443,
"category": "community",
"type": "skill",
"want": "shadcnspace",
"feature": "shadcnspace/shadcnspace",
"summary": "Production UI component library with MCP server integration, 100+ blocks, templates, and dashboard layouts. Use this skill when building modern React and Next.js UI, designing landing pages, selecting dashboard layouts, creating marketing sections, or replacing generic shadcn/ui components with production-grade ShadcnSpace blocks.",
"trigger": "",
"commands": [
"npx skills add shadcnspace/shadcnspace@shadcnspace -g"
],
"install": "npx skills add shadcnspace/shadcnspace@shadcnspace -g",
"stars": 795,
"repoUrl": "https://github.com/shadcnspace/shadcnspace",
"aliases": [
"shadcnspace",
"shadcnspace",
"shadcnspace",
"skill",
"スキル"
]
},
{
"id": "skill-shadcnspace-shadcnspace-public",
"priority": 444,
"category": "community",
"type": "skill",
"want": "shadcnspace",
"feature": "shadcnspace/shadcnspace",
"summary": "Production UI component library with MCP server integration, 100+ blocks, templates, and dashboard layouts. Use this skill when building modern React and Next.js UI, designing landing pages, selecting dashboard layouts, creating marketing sections, or replacing generic shadcn/ui components with production-grade ShadcnSpace blocks.",
"trigger": "",
"commands": [
"npx skills add shadcnspace/shadcnspace@public -g"
],
"install": "npx skills add shadcnspace/shadcnspace@public -g",
"stars": 795,
"repoUrl": "https://github.com/shadcnspace/shadcnspace",
"aliases": [
"public",
"shadcnspace",
"shadcnspace",
"skill",
"スキル"
]
},
{
"id": "skill-shadcnspace-shadcnspace-skills-shadcnspace",
"priority": 445,
"category": "community",
"type": "skill",
"want": "shadcnspace",
"feature": "shadcnspace/shadcnspace",
"summary": "Production UI component library with MCP server integration, 100+ blocks, templates, and dashboard layouts. Use this skill when building modern React and Next.js UI, designing landing pages, selecting dashboard layouts, creating marketing sections, or replacing generic shadcn/ui components with production-grade ShadcnSpace blocks.",
"trigger": "",
"commands": [
"npx skills add shadcnspace/shadcnspace@shadcnspace -g"
],
"install": "npx skills add shadcnspace/shadcnspace@shadcnspace -g",
"stars": 795,
"repoUrl": "https://github.com/shadcnspace/shadcnspace",
"aliases": [
"shadcnspace",
"shadcnspace",
"shadcnspace",
"skill",
"スキル"
]
},
{
"id": "skill-denissergeevitch-repo-task-proof-loop-repo-task-proof-loop",
"priority": 446,
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
"id": "skill-op7418-document-illustrator-skill-document-illustrator-skill",
"priority": 447,
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
"stars": 609,
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
"priority": 448,
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
"stars": 498,
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
"priority": 449,
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
"stars": 420,
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
"id": "skill-cosmoblk-email-marketing-bible-email-marketing-bible",
"priority": 450,
"category": "community",
"type": "skill",
"want": "email-marketing-bible",
"feature": "CosmoBlk/email-marketing-bible",
"summary": "Email marketing operating manual for AI agents, with hard send-safety gates.",
"trigger": "Use when someone plans, writes, designs, audits or sends an email campaign, newsletter, welcome series, abandoned-cart, post-purchase or win-back flow; builds a list or segment; drives Klaviyo, Mailchimp, Brevo, Kit or any ESP through MCP, an API or a connector; asks to warm up my domain, migrate from Klaviyo, Mailchimp or Brevo, or why am I in spam (bounces, complaints, DMARC, falling opens); checks GDPR, CAN-SPAM, CASL, PECR or Spam Act rules; wants email copy that does not sound like AI; picks an ESP; or needs benchmarks. Also cold email, SMS, RCS and WhatsApp. Load it before any agent stages, schedules or sends email to more than one person. Not for transactional email API code or parsing inbound mail.",
"commands": [
"npx skills add CosmoBlk/email-marketing-bible@email-marketing-bible -g"
],
"install": "npx skills add CosmoBlk/email-marketing-bible@email-marketing-bible -g",
"stars": 368,
"repoUrl": "https://github.com/CosmoBlk/email-marketing-bible",
"aliases": [
"email-marketing-bible",
"CosmoBlk",
"email-marketing-bible",
"skill",
"スキル"
]
},
{
"id": "skill-cosmoblk-email-marketing-bible-skills-email-marketing-bible",
"priority": 451,
"category": "community",
"type": "skill",
"want": "email-marketing-bible",
"feature": "CosmoBlk/email-marketing-bible",
"summary": "Email marketing operating manual for AI agents, with hard send-safety gates.",
"trigger": "Use when someone plans, writes, designs, audits or sends an email campaign, newsletter, welcome series, abandoned-cart, post-purchase or win-back flow; builds a list or segment; drives Klaviyo, Mailchimp, Brevo, Kit or any ESP through MCP, an API or a connector; asks to warm up my domain, migrate from Klaviyo, Mailchimp or Brevo, or why am I in spam (bounces, complaints, DMARC, falling opens); checks GDPR, CAN-SPAM, CASL, PECR or Spam Act rules; wants email copy that does not sound like AI; picks an ESP; or needs benchmarks. Also cold email, SMS, RCS and WhatsApp. Load it before any agent stages, schedules or sends email to more than one person. Not for transactional email API code or parsing inbound mail.",
"commands": [
"npx skills add CosmoBlk/email-marketing-bible@email-marketing-bible -g"
],
"install": "npx skills add CosmoBlk/email-marketing-bible@email-marketing-bible -g",
"stars": 368,
"repoUrl": "https://github.com/CosmoBlk/email-marketing-bible",
"aliases": [
"email-marketing-bible",
"CosmoBlk",
"email-marketing-bible",
"skill",
"スキル"
]
},
{
"id": "skill-microprediction-precise-.claude-skills-assess-covariance-method",
"priority": 452,
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
"priority": 453,
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
"priority": 454,
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
"priority": 455,
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
"priority": 456,
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
"priority": 457,
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
"id": "skill-chenhg5-agencycli-skills-agency-messaging",
"priority": 458,
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
"priority": 459,
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
"priority": 460,
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
"priority": 461,
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
"id": "skill-xenitv1-claude-code-maestro-skills-backend-design",
"priority": 462,
"category": "community",
"type": "skill",
"want": "backend-design",
"feature": "xenitV1/claude-code-maestro",
"summary": "Elite Tier Backend standards, including Vertical Slice Architecture, Zero Trust Security, and High-Performance API protocols.",
"trigger": "",
"commands": [
"npx skills add xenitV1/claude-code-maestro@backend-design -g"
],
"install": "npx skills add xenitV1/claude-code-maestro@backend-design -g",
"stars": 229,
"repoUrl": "https://github.com/xenitV1/claude-code-maestro",
"aliases": [
"backend-design",
"xenitV1",
"backend-design",
"skill",
"スキル"
]
},
{
"id": "skill-xenitv1-claude-code-maestro-skills-brainstorming",
"priority": 463,
"category": "community",
"type": "skill",
"want": "brainstorming",
"feature": "xenitV1/claude-code-maestro",
"summary": "Design-first methodology. Explore user intent, requirements and design before implementation. Turn ideas into fully formed specs through collaborative dialogue.",
"trigger": "",
"commands": [
"npx skills add xenitV1/claude-code-maestro@brainstorming -g"
],
"install": "npx skills add xenitV1/claude-code-maestro@brainstorming -g",
"stars": 229,
"repoUrl": "https://github.com/xenitV1/claude-code-maestro",
"aliases": [
"brainstorming",
"xenitV1",
"brainstorming",
"skill",
"スキル"
]
},
{
"id": "skill-xenitv1-claude-code-maestro-skills-browser-extension",
"priority": 464,
"category": "community",
"type": "skill",
"want": "browser-extension",
"feature": "xenitV1/claude-code-maestro",
"summary": "Master specialized skill for building 2025/2026-grade browser extensions. Deep expertise in Manifest v3, Service Worker persistence (Alarms, Offscreen API), Side Panel API, and Cross-Browser compatibility.",
"trigger": "",
"commands": [
"npx skills add xenitV1/claude-code-maestro@browser-extension -g"
],
"install": "npx skills add xenitV1/claude-code-maestro@browser-extension -g",
"stars": 229,
"repoUrl": "https://github.com/xenitV1/claude-code-maestro",
"aliases": [
"browser-extension",
"xenitV1",
"browser-extension",
"skill",
"スキル"
]
},
{
"id": "skill-xenitv1-claude-code-maestro-skills-clean-code",
"priority": 465,
"category": "community",
"type": "skill",
"want": "clean-code",
"feature": "xenitV1/claude-code-maestro",
"summary": "The Foundation Skill. LLM Firewall + 2025 Security + Cross-Skill Coordination. Use for ALL code output - prevents hallucinations, enforces security, ensures quality.",
"trigger": "",
"commands": [
"npx skills add xenitV1/claude-code-maestro@clean-code -g"
],
"install": "npx skills add xenitV1/claude-code-maestro@clean-code -g",
"stars": 229,
"repoUrl": "https://github.com/xenitV1/claude-code-maestro",
"aliases": [
"clean-code",
"xenitV1",
"clean-code",
"skill",
"スキル"
]
},
{
"id": "skill-xenitv1-claude-code-maestro-skills-debug-mastery",
"priority": 466,
"category": "community",
"type": "skill",
"want": "debug-mastery",
"feature": "xenitV1/claude-code-maestro",
"summary": "Systematic debugging methodology with 4-phase process, root cause tracing, and elite observability standards. No fixes without investigation.",
"trigger": "",
"commands": [
"npx skills add xenitV1/claude-code-maestro@debug-mastery -g"
],
"install": "npx skills add xenitV1/claude-code-maestro@debug-mastery -g",
"stars": 229,
"repoUrl": "https://github.com/xenitV1/claude-code-maestro",
"aliases": [
"debug-mastery",
"xenitV1",
"debug-mastery",
"skill",
"スキル"
]
},
{
"id": "skill-xenitv1-claude-code-maestro-skills-frontend-design",
"priority": 467,
"category": "community",
"type": "skill",
"want": "frontend-design",
"feature": "xenitV1/claude-code-maestro",
"summary": "Elite Tier Web UI standards, including pixel-perfect retro aesthetics, immersive layouts, and UX psychology protocols.",
"trigger": "",
"commands": [
"npx skills add xenitV1/claude-code-maestro@frontend-design -g"
],
"install": "npx skills add xenitV1/claude-code-maestro@frontend-design -g",
"stars": 229,
"repoUrl": "https://github.com/xenitV1/claude-code-maestro",
"aliases": [
"frontend-design",
"xenitV1",
"frontend-design",
"skill",
"スキル"
]
},
{
"id": "skill-xenitv1-claude-code-maestro-skills-git-worktrees",
"priority": 468,
"category": "community",
"type": "skill",
"want": "git-worktrees",
"feature": "xenitV1/claude-code-maestro",
"summary": "Create isolated git workspaces for feature development. Smart directory selection, safety verification, and cross-platform support (Windows/Unix).",
"trigger": "",
"commands": [
"npx skills add xenitV1/claude-code-maestro@git-worktrees -g"
],
"install": "npx skills add xenitV1/claude-code-maestro@git-worktrees -g",
"stars": 229,
"repoUrl": "https://github.com/xenitV1/claude-code-maestro",
"aliases": [
"git-worktrees",
"xenitV1",
"git-worktrees",
"skill",
"スキル"
]
},
{
"id": "skill-xenitv1-claude-code-maestro-claude-code-maestro",
"priority": 469,
"category": "community",
"type": "skill",
"want": "maestro",
"feature": "xenitV1/claude-code-maestro",
"summary": "Use when you need to act as an Elite Software Architect (Maestro) to manage complex repositories. It enforces a \"Why over How\" philosophy, maintains a persistent project memory (Brain), and orchestrates specialized sub-skills through a Plan-Act-Verify lifecycle.",
"trigger": "Use when you need to act as an Elite Software Architect (Maestro) to manage complex repositories. It enforces a \"Why over How\" philosophy, maintains a persistent project memory (Brain), and orchestrates specialized sub-skills through a Plan-Act-Verify lifecycle.",
"commands": [
"npx skills add xenitV1/claude-code-maestro@claude-code-maestro -g"
],
"install": "npx skills add xenitV1/claude-code-maestro@claude-code-maestro -g",
"stars": 229,
"repoUrl": "https://github.com/xenitV1/claude-code-maestro",
"aliases": [
"claude-code-maestro",
"xenitV1",
"maestro",
"skill",
"スキル"
]
},
{
"id": "skill-vivixiao980-xhs-cover-skill-xhs-cover-skill",
"priority": 470,
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
"stars": 222,
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
"priority": 471,
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
"stars": 206,
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
"id": "skill-noahnan-max-chanlun-trading-system-chanlun-trading-system",
"priority": 472,
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
"stars": 80,
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
"id": "skill-elliottech-lighter-agent-kit-lighter-agent-kit",
"priority": 473,
"category": "community",
"type": "skill",
"want": "lighter-agent-kit",
"feature": "elliottech/lighter-agent-kit",
"summary": "Query Lighter DEX market data on Lighter and Robinhood Lighter (orderbooks, trades, candles, funding rates) and execute trades (limit and market orders, modify, cancel, leverage, margin, withdraw, spot and perp transfers) on perpetual and spot markets.",
"trigger": "Use when the user mentions Lighter, zkLighter, perps, perpetual futures, or wants to check positions or PnL or place orders on Lighter.",
"commands": [
"npx skills add elliottech/lighter-agent-kit -g"
],
"install": "npx skills add elliottech/lighter-agent-kit -g",
"stars": 73,
"repoUrl": "https://github.com/elliottech/lighter-agent-kit",
"aliases": [
"lighter-agent-kit",
"elliottech",
"lighter-agent-kit",
"skill",
"スキル"
]
},
{
"id": "skill-ry071702-prog-web-design-playbook-skills-web-design-playbook",
"priority": 474,
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
