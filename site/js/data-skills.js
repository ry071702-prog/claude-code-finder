// 生成物: scripts/build_data.py が skills.jsonl + overrides.ja.json から作成。手で編集しない。
// GitHub の Claude Code Skills を非LLMで取り込み、日本語化 56/120 件（週次 ingest-skills.yml）。
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
"stars": 176320,
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
"stars": 176320,
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
"stars": 176320,
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
"stars": 176320,
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
"stars": 176320,
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
"stars": 176320,
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
"stars": 176320,
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
"stars": 176320,
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
"stars": 176320,
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
"stars": 176320,
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
"stars": 176320,
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
"stars": 176320,
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
"stars": 176320,
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
"stars": 176320,
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
"stars": 176320,
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
"stars": 176320,
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
"stars": 176320,
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
"stars": 176320,
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
"stars": 176320,
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
"id": "skill-alibaba-arthas-skills",
"priority": 419,
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
"stars": 37536,
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
"priority": 420,
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
"stars": 37536,
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
"priority": 421,
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
"stars": 37536,
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
"priority": 422,
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
"stars": 37536,
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
"priority": 423,
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
"stars": 31194,
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
"priority": 424,
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
"stars": 31194,
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
"priority": 425,
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
"stars": 31194,
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
"priority": 426,
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
"stars": 31194,
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
"priority": 427,
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
"stars": 31194,
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
"priority": 428,
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
"stars": 31194,
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
"priority": 429,
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
"stars": 31194,
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
"priority": 430,
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
"stars": 31194,
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
"priority": 431,
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
"stars": 31194,
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
"id": "skill-abiosoft-colima-skills",
"priority": 432,
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
"stars": 30811,
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
"id": "skill-weifeng2333-videocaptioner-skills",
"priority": 433,
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
"stars": 15985,
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
"priority": 434,
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
"stars": 8157,
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
"priority": 435,
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
"stars": 8157,
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
"priority": 436,
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
"stars": 7546,
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
"priority": 437,
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
"stars": 7269,
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
"priority": 438,
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
"stars": 7269,
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
"priority": 439,
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
"stars": 7269,
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
"priority": 440,
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
"stars": 7269,
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
"priority": 441,
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
"stars": 7269,
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
"priority": 442,
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
"stars": 7269,
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
"priority": 443,
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
"stars": 7269,
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
"priority": 444,
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
"stars": 7269,
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
"id": "skill-alchaincyf-darwin-skill-darwin-skill",
"priority": 445,
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
"stars": 5983,
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
"priority": 446,
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
"stars": 4844,
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
"priority": 447,
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
"stars": 4844,
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
"id": "skill-paper2poster-paper2poster-skills",
"priority": 448,
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
"stars": 3944,
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
"id": "skill-butterbase-ai-butterbase-butterbase",
"priority": 449,
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
"stars": 3518,
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
"priority": 450,
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
"stars": 2879,
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
"priority": 451,
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
"stars": 2749,
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
"priority": 452,
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
"stars": 2749,
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
"priority": 453,
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
"stars": 2749,
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
"priority": 454,
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
"stars": 2749,
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
"priority": 455,
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
"stars": 2749,
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
"priority": 456,
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
"stars": 2749,
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
"priority": 457,
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
"stars": 2749,
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
"priority": 458,
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
"stars": 2749,
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
"id": "skill-sheeki03-tirith-tirith",
"priority": 459,
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
"stars": 2721,
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
"id": "skill-op7418-youtube-clipper-skill-youtube-clipper-skill",
"priority": 460,
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
"stars": 2206,
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
"id": "skill-wondelai-skills-37signals-way",
"priority": 461,
"category": "community",
"type": "skill",
"want": "37signals-way",
"feature": "wondelai/skills",
"summary": "Build lean, opinionated products using the 37signals philosophy from \"Getting Real\", \"Rework\", and \"Shape Up\".",
"trigger": "Use when the user mentions \"Getting Real\", \"Rework\", \"Shape Up\", \"37signals\", \"Basecamp method\", \"six-week cycles\", \"fixed time variable scope\", \"appetite vs estimates\", \"betting table\", \"breadboarding\", \"fat marker sketch\", \"build less\", \"underdo the competition\", \"opinionated software\", \"we have too many meetings\", \"how do we ship faster\", or \"stop overbuilding\". Also trigger when cutting scope to ship sooner, running a small team, or avoiding long-term roadmaps. Covers shaping, betting, building, and the art of saying no. For MVP validation, see lean-startup. For design sprints, see design-sprint.",
"commands": [
"npx skills add wondelai/skills@37signals-way -g"
],
"install": "npx skills add wondelai/skills@37signals-way -g",
"stars": 2174,
"repoUrl": "https://github.com/wondelai/skills",
"aliases": [
"37signals-way",
"wondelai",
"37signals-way",
"skill",
"スキル"
]
},
{
"id": "skill-wondelai-skills-architecture-optimization",
"priority": 462,
"category": "community",
"type": "skill",
"want": "architecture-optimization",
"feature": "wondelai/skills",
"summary": "Guided journey from a working codebase grown slow and tangled to one measurably fast, cleanly bounded, and readable. Orchestrates eight skills phase by phase - working-with-legacy-code, clean-architecture, software-design-philosophy, refactoring-patterns, system-design, ddia-systems, release-it, pragmatic-programmer - every phase carries its method inline so it runs standalone, asking the user questions at every decision point and recording results in the project docs/ folder (PERFORMANCE.md, ARCHITECTURE.md, ARCHITECTURE-OPTIMIZATION-PLAN.md) so the journey resumes across sessions.",
"trigger": "Use when the user wants to make an app faster, untangle drifted boundaries, fix slow endpoints and queries, or says 'it works but it is slow and getting worse'. For an untested prototype, improve-code-quality; for an aged codebase you fear to touch, remove-technical-debt; for greenfield structure, design-code-architecture; for marketing-site page speed, improve-website. For one framework in isolation, invoke that skill directly.",
"commands": [
"npx skills add wondelai/skills@architecture-optimization -g"
],
"install": "npx skills add wondelai/skills@architecture-optimization -g",
"stars": 2174,
"repoUrl": "https://github.com/wondelai/skills",
"aliases": [
"architecture-optimization",
"wondelai",
"architecture-optimization",
"skill",
"スキル"
]
},
{
"id": "skill-wondelai-skills-blue-ocean-strategy",
"priority": 463,
"category": "community",
"type": "skill",
"want": "blue-ocean-strategy",
"feature": "wondelai/skills",
"summary": "Create uncontested market space using value innovation instead of competing head-to-head.",
"trigger": "Use when the user mentions \"blue ocean\", \"red ocean\", \"strategy canvas\", \"ERRC framework\", \"value innovation\", \"non-customers\", \"buyer utility map\", \"the market is too crowded\", \"how do we stand out\", or \"escape the price war\". Also trigger when exploring a new market category, or finding underserved or non-customers. Covers the Four Actions Framework, Six Paths, buyer utility map, and value-cost trade-offs. For real strategy formulation and bad-strategy detection, see good-strategy-bad-strategy. For tech adoption strategy, see crossing-the-chasm. For product positioning, see obviously-awesome.",
"commands": [
"npx skills add wondelai/skills@blue-ocean-strategy -g"
],
"install": "npx skills add wondelai/skills@blue-ocean-strategy -g",
"stars": 2174,
"repoUrl": "https://github.com/wondelai/skills",
"aliases": [
"blue-ocean-strategy",
"wondelai",
"blue-ocean-strategy",
"skill",
"スキル"
]
},
{
"id": "skill-wondelai-skills-clean-architecture",
"priority": 464,
"category": "community",
"type": "skill",
"want": "clean-architecture",
"feature": "wondelai/skills",
"summary": "Structure software around the Dependency Rule: source code dependencies point inward from frameworks to use cases to entities.",
"trigger": "Use when the user mentions \"architecture layers\", \"dependency rule\", \"ports and adapters (hexagonal)\", \"onion architecture\", \"screaming architecture\", \"where should business logic go\", \"decouple from the database\", \"swap the framework without a rewrite\", or \"keep business rules independent\". Also trigger when deciding which layer code belongs in, isolating core logic from infrastructure, defining module boundaries, or debating whether the framework should call your code or the reverse. Covers component principles, boundaries, and SOLID. For code-level quality, see clean-code. For domain modeling, see domain-driven-design.",
"commands": [
"npx skills add wondelai/skills@clean-architecture -g"
],
"install": "npx skills add wondelai/skills@clean-architecture -g",
"stars": 2174,
"repoUrl": "https://github.com/wondelai/skills",
"aliases": [
"clean-architecture",
"wondelai",
"clean-architecture",
"skill",
"スキル"
]
},
{
"id": "skill-wondelai-skills-clean-code",
"priority": 465,
"category": "community",
"type": "skill",
"want": "clean-code",
"feature": "wondelai/skills",
"summary": "Write readable, maintainable code through disciplined naming, small functions, and clean error handling.",
"trigger": "Use when the user mentions \"clean up this code\", \"this function is too long\", \"code smells\", \"naming conventions\", \"boy scout rule\", \"single responsibility\", or \"unit test quality\". Also trigger when reviewing a pull request for readability, untangling a messy function, debating comment styles, or improving error-handling patterns. Covers SRP, comment discipline, formatting, and unit testing. For refactoring techniques, see refactoring-patterns. For architecture and dependency rules, see clean-architecture.",
"commands": [
"npx skills add wondelai/skills@clean-code -g"
],
"install": "npx skills add wondelai/skills@clean-code -g",
"stars": 2174,
"repoUrl": "https://github.com/wondelai/skills",
"aliases": [
"clean-code",
"wondelai",
"clean-code",
"skill",
"スキル"
]
},
{
"id": "skill-wondelai-skills-cold-start-problem",
"priority": 466,
"category": "community",
"type": "skill",
"want": "cold-start-problem",
"feature": "wondelai/skills",
"summary": "Start and scale networked products using Andrew Chen's \"The Cold Start Problem\" framework for network effects.",
"trigger": "Use when the user mentions \"network effects\", \"chicken and egg\", \"cold start\", \"two-sided marketplace\", \"atomic network\", \"hard side\", \"liquidity\", \"critical mass\", \"invite-only launch\", \"how do I get my first users\", or \"the marketplace has no buyers or sellers\". Also trigger when launching a marketplace, social, or collaboration product that is worthless without other users, deciding launch sequencing and seeding tactics, or diagnosing stalled network growth at scale. Covers the five stages: cold start, tipping point, escape velocity, hitting the ceiling, and the moat. For word-of-mouth virality, see contagious. For habit-driven retention, see hooked-ux.",
"commands": [
"npx skills add wondelai/skills@cold-start-problem -g"
],
"install": "npx skills add wondelai/skills@cold-start-problem -g",
"stars": 2174,
"repoUrl": "https://github.com/wondelai/skills",
"aliases": [
"cold-start-problem",
"wondelai",
"cold-start-problem",
"skill",
"スキル"
]
},
{
"id": "skill-wondelai-skills-contagious",
"priority": 467,
"category": "community",
"type": "skill",
"want": "contagious",
"feature": "wondelai/skills",
"summary": "Engineer word-of-mouth and virality using the STEPPS framework (Social Currency, Triggers, Emotion, Public, Practical Value, Stories).",
"trigger": "Use when the user mentions \"go viral\", \"word of mouth\", \"shareable content\", \"social currency\", \"why people share\", \"referral program\", \"nobody is sharing it\", or \"make this spread\". Also trigger when designing shareable features, crafting social campaigns, or building products that spread through peer recommendation. Covers environmental triggers and high-arousal emotional content. For sticky messaging, see made-to-stick. For persuasion tactics, see influence-psychology.",
"commands": [
"npx skills add wondelai/skills@contagious -g"
],
"install": "npx skills add wondelai/skills@contagious -g",
"stars": 2174,
"repoUrl": "https://github.com/wondelai/skills",
"aliases": [
"contagious",
"wondelai",
"contagious",
"skill",
"スキル"
]
},
{
"id": "skill-wondelai-skills-continuous-discovery",
"priority": 468,
"category": "community",
"type": "skill",
"want": "continuous-discovery",
"feature": "wondelai/skills",
"summary": "Build a weekly cadence of customer touchpoints using Opportunity Solution Trees, assumption mapping, and interview snapshots.",
"trigger": "Use when the user mentions \"continuous discovery\", \"opportunity solution tree\", \"weekly interviews\", \"assumption testing\", \"discovery habits\", \"product trio\", \"outcome-based roadmap\", \"how do I talk to customers regularly\", \"we keep building things nobody uses\", or \"connect research to the roadmap\". Also trigger when setting up regular customer feedback loops, prioritizing which experiments to run, or tying discovery insights to delivery work. Covers experience mapping, co-creation, and prioritizing opportunities. For interview technique, see mom-test. For team structure, see inspired-product.",
"commands": [
"npx skills add wondelai/skills@continuous-discovery -g"
],
"install": "npx skills add wondelai/skills@continuous-discovery -g",
"stars": 2174,
"repoUrl": "https://github.com/wondelai/skills",
"aliases": [
"continuous-discovery",
"wondelai",
"continuous-discovery",
"skill",
"スキル"
]
},
{
"id": "skill-upstash-ratelimit-js-skills",
"priority": 469,
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
"id": "skill-spacezephyr-creator-buddy-gzh-skills-baokuan-article-analysis",
"priority": 470,
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
"stars": 1437,
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
"priority": 471,
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
"stars": 1437,
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
"priority": 472,
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
"stars": 1437,
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
"priority": 473,
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
"stars": 1437,
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
"priority": 474,
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
"stars": 1437,
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
"priority": 475,
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
"stars": 1437,
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
"priority": 476,
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
"stars": 1437,
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
"priority": 477,
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
"stars": 1437,
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
"id": "skill-bayramannakov-claude-reflect-claude-reflect",
"priority": 478,
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
"stars": 1431,
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
"id": "skill-litellm-labs-litellm-agent-control-plane-skills",
"priority": 479,
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
"stars": 1287,
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
"id": "skill-alchaincyf-x-mentor-skill-x-mentor-skill",
"priority": 480,
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
"stars": 1211,
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
"priority": 481,
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
"stars": 1155,
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
"priority": 482,
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
"stars": 1155,
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
"priority": 483,
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
"stars": 1155,
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
"priority": 484,
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
"stars": 1155,
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
"priority": 485,
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
"stars": 1155,
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
"priority": 486,
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
"stars": 1155,
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
"priority": 487,
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
"stars": 1155,
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
"priority": 488,
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
"stars": 1155,
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
"id": "skill-datadog-pup-skills-dd-apm",
"priority": 489,
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
"stars": 1009,
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
"priority": 490,
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
"stars": 1009,
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
"priority": 491,
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
"stars": 1009,
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
"priority": 492,
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
"stars": 1009,
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
"priority": 493,
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
"stars": 1009,
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
"priority": 494,
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
"stars": 1009,
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
"priority": 495,
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
"stars": 1009,
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
"priority": 496,
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
"stars": 1009,
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
"id": "skill-upstash-redis-js-skills",
"priority": 497,
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
"stars": 972,
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
"id": "skill-nexscope-ai-ecommerce-skills-affiliate-marketing-strategy",
"priority": 498,
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
"stars": 930,
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
"priority": 499,
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
"stars": 930,
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
"priority": 500,
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
"stars": 930,
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
"priority": 501,
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
"stars": 930,
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
"priority": 502,
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
"stars": 930,
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
"priority": 503,
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
"stars": 930,
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
"priority": 504,
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
"stars": 930,
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
"priority": 505,
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
"stars": 930,
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
"priority": 506,
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
"stars": 896,
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
"id": "skill-do1e-mijia-api-skills",
"priority": 507,
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
"stars": 798,
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
"priority": 508,
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
"stars": 731,
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
"priority": 509,
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
"stars": 729,
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
"priority": 510,
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
"stars": 729,
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
"priority": 511,
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
"stars": 729,
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
"priority": 512,
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
"stars": 729,
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
"priority": 513,
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
"stars": 729,
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
"priority": 514,
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
"stars": 729,
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
"priority": 515,
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
"stars": 729,
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
"priority": 516,
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
"stars": 729,
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
"id": "skill-quantco-dataframely-skills",
"priority": 517,
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
"priority": 518,
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
"priority": 519,
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
"stars": 594,
"repoUrl": "https://github.com/ksimback/tech-debt-skill",
"aliases": [
"tech-debt-skill",
"ksimback",
"tech-debt-audit",
"skill",
"スキル"
]
}
];
