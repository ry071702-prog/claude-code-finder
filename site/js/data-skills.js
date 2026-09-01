// 生成物: scripts/build_data.py が skills.jsonl + overrides.ja.json から作成。手で編集しない。
// GitHub の Claude Code Skills を非LLMで取り込み、日本語化 46/120 件（週次 ingest-skills.yml）。
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
"stars": 172815,
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
"stars": 172815,
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
"stars": 172815,
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
"stars": 172815,
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
"stars": 172815,
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
"stars": 172815,
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
"stars": 172815,
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
"stars": 172815,
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
"stars": 172815,
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
"stars": 172815,
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
"stars": 172815,
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
"stars": 172815,
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
"stars": 172815,
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
"stars": 172815,
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
"stars": 172815,
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
"stars": 172815,
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
"stars": 172815,
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
"stars": 172815,
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
"stars": 172815,
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
"stars": 30676,
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
"stars": 30676,
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
"stars": 30676,
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
"stars": 30676,
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
"stars": 30676,
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
"stars": 30676,
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
"stars": 30676,
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
"stars": 30676,
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
"stars": 30676,
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
"stars": 8153,
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
"stars": 8153,
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
"stars": 8149,
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
"priority": 431,
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
"stars": 5179,
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
"priority": 432,
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
"stars": 4057,
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
"priority": 433,
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
"stars": 4057,
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
"id": "skill-brycewang-stanford-auto-empirical-research-skills-auto-empirical-research-skills",
"priority": 434,
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
"stars": 3628,
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
"priority": 435,
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
"stars": 3628,
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
"priority": 436,
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
"stars": 3628,
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
"priority": 437,
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
"stars": 3628,
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
"priority": 438,
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
"stars": 3628,
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
"priority": 439,
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
"stars": 3628,
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
"priority": 440,
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
"stars": 3628,
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
"priority": 441,
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
"stars": 3628,
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
"priority": 442,
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
"stars": 3376,
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
"id": "skill-stellarlinkco-myclaude-skills-browser",
"priority": 443,
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
"stars": 2747,
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
"priority": 444,
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
"stars": 2747,
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
"priority": 445,
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
"stars": 2747,
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
"priority": 446,
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
"stars": 2747,
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
"priority": 447,
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
"stars": 2747,
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
"priority": 448,
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
"stars": 2747,
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
"priority": 449,
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
"stars": 2747,
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
"priority": 450,
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
"stars": 2747,
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
"priority": 451,
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
"stars": 2406,
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
"priority": 452,
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
"stars": 2170,
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
"priority": 453,
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
"priority": 454,
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
"stars": 1859,
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
"priority": 455,
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
"stars": 1838,
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
"id": "skill-daymade-claude-code-skills-daymade-audio-asr-transcribe-to-text",
"priority": 456,
"category": "community",
"type": "skill",
"want": "asr-transcribe-to-text",
"feature": "daymade/claude-code-skills",
"summary": "Transcribe audio/video to speaker-labeled text — who-said-what by default, plain-text opt-out; MLX-local on Apple Silicon or remote; local files, media URLs. Use for transcribing recordings/podcasts/lectures/meetings, ASR, speech-to-text, 转录, 语音转文字, 录音转文字, speaker diarization/说话人分离/识别/谁在说话, timestamps 字幕/时间戳/音画对齐, CAM++ voiceprint ID. This skill ALSO owns audio PREPROCESSING for ASR as a first-class trigger, even without transcription: convert any audio/video into an ASR-ready file (转换成适合 ASR 的格式, 转格式, convert/prepare audio for ASR, 音频预处理), downsample to 16kHz mono 16-bit (降采样, 重采样, 单声道, 归一化), merge multi-segment recorder dumps (多段合并/拼接, DJI TX01/TX02), transcode to small M4A + pitch-preserved speedup to cut metered-ASR billed minutes (转 M4A, 压缩上传, 加速, 1.3x, 飞书妙记/Feishu Minutes). Trigger even when it looks like a trivial one-line ffmpeg — the skill owns sample-rate/bit-depth/channel, merge-order, speed-vs-WER, format choices + a blessed prepare_asr_input.py.",
"trigger": "",
"commands": [
"npx skills add daymade/claude-code-skills@asr-transcribe-to-text -g"
],
"install": "npx skills add daymade/claude-code-skills@asr-transcribe-to-text -g",
"stars": 1366,
"repoUrl": "https://github.com/daymade/claude-code-skills",
"aliases": [
"asr-transcribe-to-text",
"daymade",
"asr-transcribe-to-text",
"skill",
"スキル"
]
},
{
"id": "skill-daymade-claude-code-skills-auto-repo-setup",
"priority": 457,
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
"stars": 1366,
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
"id": "skill-daymade-claude-code-skills-bilibili-source",
"priority": 458,
"category": "community",
"type": "skill",
"want": "bilibili-source",
"feature": "daymade/claude-code-skills",
"summary": "Fetch comprehensive, login-free data for any Bilibili (B站) video — title, UP name and follower count, publish date, partition, tags, per-part cids, live stats (view, like, coin, favorite, share, reply, danmaku), and full danmaku (bullet-comment) text. Use this skill whenever working with a Bilibili video and needing real, citable numbers or metadata — ingesting a Bilibili source into a knowledge base, analyzing why a video performed, verifying a creator's claimed metrics, building a case study, or any time a Bilibili view/like/favorite count is about to be written into a document — fetch it, never hand-type or estimate it. Accepts BVID, av numbers, b23.tv short links, or full URLs. Subtitles and favorites-folder (收藏夹) enumeration are also covered but require the user's Bilibili login.",
"trigger": "",
"commands": [
"npx skills add daymade/claude-code-skills@bilibili-source -g"
],
"install": "npx skills add daymade/claude-code-skills@bilibili-source -g",
"stars": 1366,
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
"id": "skill-daymade-claude-code-skills-cli-demo-generator",
"priority": 459,
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
"stars": 1366,
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
"priority": 460,
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
"stars": 1366,
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
"id": "skill-daymade-claude-code-skills-competitors-analysis",
"priority": 461,
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
"stars": 1366,
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
"id": "skill-daymade-claude-code-skills-daymade-audio-meeting-minutes-taker",
"priority": 462,
"category": "community",
"type": "skill",
"want": "meeting-minutes-taker",
"feature": "daymade/claude-code-skills",
"summary": "Transforms raw meeting transcripts into high-fidelity, structured meeting minutes (notes / summaries).",
"trigger": "Use when (1) a meeting transcript is provided and meeting minutes, notes, or a summary are requested; (2) multiple versions of minutes must be merged without losing content; (3) existing minutes need review against the original transcript for missing items; (4) the transcript has anonymous speakers like \"Speaker 1/2/3\" or \"发言人1\" that need identifying (optionally mapped via a context.md team directory). Triggers on 会议纪要 / 会议记录 / 整理纪要 / 妙记转纪要, \"write meeting minutes\", \"summarize this meeting\", \"merge these minutes\", \"what's missing from these notes\". For fixing ASR/STT recognition errors in the raw transcript first, use transcript-fixer; this skill structures clean transcripts into minutes.",
"commands": [
"npx skills add daymade/claude-code-skills@meeting-minutes-taker -g"
],
"install": "npx skills add daymade/claude-code-skills@meeting-minutes-taker -g",
"stars": 1366,
"repoUrl": "https://github.com/daymade/claude-code-skills",
"aliases": [
"meeting-minutes-taker",
"daymade",
"meeting-minutes-taker",
"skill",
"スキル"
]
},
{
"id": "skill-daymade-claude-code-skills-daymade-audio-stepfun-asr",
"priority": 463,
"category": "community",
"type": "skill",
"want": "stepfun-asr",
"feature": "daymade/claude-code-skills",
"summary": "Transcribe audio with StepFun's stepaudio-2.5-asr — an SSE endpoint (NOT /v1/audio/transcriptions) with 32K context, ~85-101x RTF on long audio, and a single-call ceiling around 30 minutes (no client-side chunking).",
"trigger": "Use when transcribing Chinese / English audio with StepFun, when long-form recordings (5-30 min) need to land in one request, when migrating from step-asr / step-asr-1.1, or when hitting the misleading `model stepaudio-2.5-asr not supported` error (which actually means wrong endpoint). Triggers on 阶跃 ASR, StepFun ASR, stepaudio-2.5-asr, 转录, 语音识别, 长音频转写, 语音转文字. For TTS with the sibling stepaudio-2.5-tts model, use the stepfun-tts skill instead.",
"commands": [
"npx skills add daymade/claude-code-skills@stepfun-asr -g"
],
"install": "npx skills add daymade/claude-code-skills@stepfun-asr -g",
"stars": 1366,
"repoUrl": "https://github.com/daymade/claude-code-skills",
"aliases": [
"stepfun-asr",
"daymade",
"stepfun-asr",
"skill",
"スキル"
]
},
{
"id": "skill-better-auth-better-icons-skills",
"priority": 464,
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
"stars": 1257,
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
"id": "skill-itsmostafa-aws-agent-skills-skills-api-gateway",
"priority": 465,
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
"stars": 1150,
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
"priority": 466,
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
"stars": 1150,
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
"priority": 467,
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
"stars": 1150,
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
"priority": 468,
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
"stars": 1150,
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
"priority": 469,
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
"stars": 1150,
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
"priority": 470,
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
"stars": 1150,
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
"priority": 471,
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
"stars": 1150,
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
"priority": 472,
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
"stars": 1150,
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
"id": "skill-spacezephyr-creator-buddy-gzh-skills-baokuan-article-analysis",
"priority": 473,
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
"stars": 1072,
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
"priority": 474,
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
"stars": 1072,
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
"priority": 475,
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
"stars": 1072,
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
"priority": 476,
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
"stars": 1072,
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
"priority": 477,
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
"stars": 1072,
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
"priority": 478,
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
"stars": 1072,
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
"priority": 479,
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
"stars": 1072,
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
"priority": 480,
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
"stars": 1072,
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
"id": "skill-upstash-redis-js-skills",
"priority": 481,
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
"stars": 967,
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
"id": "skill-feicaiclub-video-spec-builder-video-spec-builder",
"priority": 482,
"category": "community",
"type": "skill",
"want": "video-spec-builder",
"feature": "feicaiclub/video-spec-builder",
"summary": "当用户说想做一个视频、宣传片、产品演示、动画短片、抖音/YouTube 内容，或者说要改分镜、调节奏、换镜头、调字幕、加配音、改转场时使用。通过苏格拉底式追问收集视频需求，主动激发渲染层的全部能力（TTS / 字幕 / 3D / shader / 音频反应等），输出标准化的 video-spec.md 用于渲染。",
"trigger": "",
"commands": [
"npx skills add feicaiclub/video-spec-builder -g"
],
"install": "npx skills add feicaiclub/video-spec-builder -g",
"stars": 939,
"repoUrl": "https://github.com/feicaiclub/video-spec-builder",
"aliases": [
"video-spec-builder",
"feicaiclub",
"video-spec-builder",
"skill",
"スキル"
]
},
{
"id": "skill-sethgammon-citadel-skills-architect",
"priority": 483,
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
"stars": 912,
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
"priority": 484,
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
"stars": 912,
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
"priority": 485,
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
"stars": 912,
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
"priority": 486,
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
"stars": 912,
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
"priority": 487,
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
"stars": 912,
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
"priority": 488,
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
"stars": 912,
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
"priority": 489,
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
"stars": 912,
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
"priority": 490,
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
"stars": 912,
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
"priority": 491,
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
"stars": 884,
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
"priority": 492,
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
"stars": 880,
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
"priority": 493,
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
"stars": 829,
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
"priority": 494,
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
"stars": 829,
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
"priority": 495,
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
"stars": 829,
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
"priority": 496,
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
"stars": 829,
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
"priority": 497,
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
"stars": 829,
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
"priority": 498,
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
"stars": 829,
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
"priority": 499,
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
"stars": 829,
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
"priority": 500,
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
"stars": 829,
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
"priority": 501,
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
"stars": 760,
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
"priority": 502,
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
"id": "skill-talesofai-neta-skills-skills-neta",
"priority": 503,
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
"stars": 719,
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
"priority": 504,
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
"stars": 719,
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
"priority": 505,
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
"stars": 719,
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
"priority": 506,
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
"stars": 719,
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
"priority": 507,
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
"stars": 719,
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
"priority": 508,
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
"stars": 719,
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
"priority": 509,
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
"stars": 719,
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
"priority": 510,
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
"stars": 719,
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
"id": "skill-mobiusquant-openmobius-skill-openmobius-skill",
"priority": 511,
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
"stars": 669,
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
"priority": 512,
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
"stars": 616,
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
"priority": 513,
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
"id": "skill-ksimback-tech-debt-skill-tech-debt-skill",
"priority": 514,
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
"stars": 589,
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
"priority": 515,
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
"stars": 587,
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
"id": "skill-butterbase-ai-butterbase-skills-skills-agents",
"priority": 516,
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
"priority": 517,
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
"priority": 518,
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
"priority": 519,
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
}
];
