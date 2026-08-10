// 生成物: scripts/build_data.py が skills.jsonl + overrides.ja.json から作成。手で編集しない。
// GitHub の Claude Code Skills を非LLMで取り込み、日本語化 43/120 件（週次 ingest-skills.yml）。
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
"stars": 167483,
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
"stars": 167483,
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
"stars": 167483,
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
"stars": 167483,
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
"stars": 167483,
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
"stars": 167483,
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
"stars": 167483,
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
"stars": 167483,
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
"stars": 167483,
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
"stars": 167483,
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
"stars": 167483,
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
"stars": 167483,
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
"stars": 167483,
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
"stars": 167483,
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
"stars": 167483,
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
"stars": 167483,
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
"stars": 167483,
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
"priority": 417,
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
"stars": 29929,
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
"priority": 418,
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
"stars": 29929,
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
"priority": 419,
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
"stars": 29929,
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
"priority": 420,
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
"stars": 29929,
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
"priority": 421,
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
"stars": 29929,
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
"priority": 422,
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
"stars": 29929,
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
"priority": 423,
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
"stars": 29929,
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
"priority": 424,
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
"stars": 29929,
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
"priority": 425,
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
"stars": 29929,
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
"priority": 426,
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
"priority": 427,
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
"id": "skill-antvis-l7-skills-l7-single",
"priority": 428,
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
"stars": 4047,
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
"priority": 429,
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
"stars": 4047,
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
"id": "skill-norman-bury-research-writing-skill-skills-brainstorming-research",
"priority": 430,
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
"stars": 3010,
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
"priority": 431,
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
"stars": 3010,
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
"priority": 432,
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
"stars": 3010,
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
"priority": 433,
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
"stars": 3010,
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
"priority": 434,
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
"stars": 3010,
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
"priority": 435,
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
"stars": 3010,
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
"priority": 436,
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
"stars": 3010,
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
"priority": 437,
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
"stars": 3010,
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
"id": "skill-op7418-youtube-clipper-skill-youtube-clipper-skill",
"priority": 438,
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
"stars": 2100,
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
"priority": 439,
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
"stars": 2043,
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
"priority": 440,
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
"stars": 1964,
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
"id": "skill-youmind-openlab-nano-banana-pro-prompts-recommend-skill-nano-banana-pro-prompts-recommend-skill",
"priority": 441,
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
"stars": 1821,
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
"priority": 442,
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
"stars": 1762,
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
"id": "skill-adamlyttleapps-claude-skill-aso-appstore-screenshots-claude-skill-aso-appstore-screenshots",
"priority": 443,
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
"stars": 1654,
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
"id": "skill-bayramannakov-claude-reflect-claude-reflect",
"priority": 444,
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
"stars": 1292,
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
"id": "skill-better-auth-better-icons-skills",
"priority": 445,
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
"stars": 1227,
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
"priority": 446,
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
"stars": 1150,
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
"priority": 447,
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
"stars": 1142,
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
"priority": 448,
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
"stars": 1142,
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
"priority": 449,
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
"stars": 1142,
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
"priority": 450,
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
"stars": 1142,
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
"priority": 451,
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
"stars": 1142,
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
"priority": 452,
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
"stars": 1142,
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
"priority": 453,
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
"stars": 1142,
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
"priority": 454,
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
"stars": 1142,
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
"priority": 455,
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
"stars": 977,
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
"priority": 456,
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
"stars": 977,
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
"priority": 457,
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
"stars": 977,
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
"priority": 458,
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
"stars": 977,
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
"priority": 459,
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
"stars": 977,
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
"priority": 460,
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
"stars": 977,
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
"priority": 461,
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
"stars": 977,
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
"priority": 462,
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
"stars": 977,
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
"priority": 463,
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
"stars": 963,
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
"id": "skill-raphaelsalaja-userinterface-wiki-skills",
"priority": 464,
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
"stars": 869,
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
"id": "skill-free-the-ai-free-ai-ui-laws-skills-main-skills-main-skills-animation-vocabulary",
"priority": 465,
"category": "community",
"type": "skill",
"want": "animation-vocabulary",
"feature": "Free-The-Ai/free-ai",
"summary": "Reverse-lookup glossary that turns a vague description of a web animation or motion effect into its exact term (\"the bouncy thing when a popover opens\" → Pop in; \"the iOS rubber-band scroll\" → Rubber-banding).",
"trigger": "Use when the user asks \"what's it called when…\", or describes a motion effect without knowing its name and wants the right word to prompt an AI or designer with. For naming an effect, not designing or building one.",
"commands": [
"npx skills add Free-The-Ai/free-ai@animation-vocabulary -g"
],
"install": "npx skills add Free-The-Ai/free-ai@animation-vocabulary -g",
"stars": 835,
"repoUrl": "https://github.com/Free-The-Ai/free-ai",
"aliases": [
"animation-vocabulary",
"Free-The-Ai",
"animation-vocabulary",
"skill",
"スキル"
]
},
{
"id": "skill-free-the-ai-free-ai-ui-laws-skills-main-skills-main-skills-emil-design-eng",
"priority": 466,
"category": "community",
"type": "skill",
"want": "emil-design-eng",
"feature": "Free-The-Ai/free-ai",
"summary": "This skill encodes Emil Kowalski's philosophy on UI polish, component design, animation decisions, and the invisible details that make software feel great.",
"trigger": "",
"commands": [
"npx skills add Free-The-Ai/free-ai@emil-design-eng -g"
],
"install": "npx skills add Free-The-Ai/free-ai@emil-design-eng -g",
"stars": 835,
"repoUrl": "https://github.com/Free-The-Ai/free-ai",
"aliases": [
"emil-design-eng",
"Free-The-Ai",
"emil-design-eng",
"skill",
"スキル"
]
},
{
"id": "skill-free-the-ai-free-ai-ui-laws-skills-main-skills-emil-design-eng",
"priority": 467,
"category": "community",
"type": "skill",
"want": "emil-design-eng",
"feature": "Free-The-Ai/free-ai",
"summary": "This skill encodes Emil Kowalski's philosophy on UI polish, component design, animation decisions, and the invisible details that make software feel great.",
"trigger": "",
"commands": [
"npx skills add Free-The-Ai/free-ai@emil-design-eng -g"
],
"install": "npx skills add Free-The-Ai/free-ai@emil-design-eng -g",
"stars": 835,
"repoUrl": "https://github.com/Free-The-Ai/free-ai",
"aliases": [
"emil-design-eng",
"Free-The-Ai",
"emil-design-eng",
"skill",
"スキル"
]
},
{
"id": "skill-free-the-ai-free-ai-free-ai",
"priority": 468,
"category": "community",
"type": "skill",
"want": "freetheai-api",
"feature": "Free-The-Ai/free-ai",
"summary": "Help AI agents connect apps, SDKs, coding tools, and chat clients to FreeTheAi, the free OpenAI-compatible API at https://api.freetheai.xyz/v1. Use this skill when a user wants a free AI API key, a custom OpenAI/Anthropic base URL, setup help for AI clients, or examples for chat, tools, images, TTS, or STT.",
"trigger": "",
"commands": [
"npx skills add Free-The-Ai/free-ai@free-ai -g"
],
"install": "npx skills add Free-The-Ai/free-ai@free-ai -g",
"stars": 835,
"repoUrl": "https://github.com/Free-The-Ai/free-ai",
"aliases": [
"free-ai",
"Free-The-Ai",
"freetheai-api",
"skill",
"スキル"
]
},
{
"id": "skill-free-the-ai-free-ai-ui-laws-make-interfaces-feel-better-main-skills-make-interfaces-feel-better",
"priority": 469,
"category": "community",
"type": "skill",
"want": "make-interfaces-feel-better",
"feature": "Free-The-Ai/free-ai",
"summary": "Design engineering principles for making interfaces feel polished.",
"trigger": "Use when building UI components, reviewing frontend code, implementing animations, hover states, shadows, borders, typography, micro-interactions, enter/exit animations, or any visual detail work. Triggers on UI polish, design details, \"make it feel better\", \"feels off\", stagger animations, border radius, optical alignment, font smoothing, tabular numbers, image outlines, box shadows.",
"commands": [
"npx skills add Free-The-Ai/free-ai@make-interfaces-feel-better -g"
],
"install": "npx skills add Free-The-Ai/free-ai@make-interfaces-feel-better -g",
"stars": 835,
"repoUrl": "https://github.com/Free-The-Ai/free-ai",
"aliases": [
"make-interfaces-feel-better",
"Free-The-Ai",
"make-interfaces-feel-better",
"skill",
"スキル"
]
},
{
"id": "skill-free-the-ai-free-ai-ui-laws-oklch-skill-main-skills-oklch-skill",
"priority": 470,
"category": "community",
"type": "skill",
"want": "oklch-skill",
"feature": "Free-The-Ai/free-ai",
"summary": "OKLCH color space for web projects. Convert hex/rgb/hsl to oklch, generate palettes, check contrast, handle gamut boundaries, and theme with Tailwind v4. Triggers on oklch, color conversion, palette generation, contrast ratio, gamut, display p3, design tokens, hue drift, chroma, dark mode colors.",
"trigger": "",
"commands": [
"npx skills add Free-The-Ai/free-ai@oklch-skill -g"
],
"install": "npx skills add Free-The-Ai/free-ai@oklch-skill -g",
"stars": 835,
"repoUrl": "https://github.com/Free-The-Ai/free-ai",
"aliases": [
"oklch-skill",
"Free-The-Ai",
"oklch-skill",
"skill",
"スキル"
]
},
{
"id": "skill-free-the-ai-free-ai-ui-laws-skills-main-skills-main-skills-review-animations",
"priority": 471,
"category": "community",
"type": "skill",
"want": "review-animations",
"feature": "Free-The-Ai/free-ai",
"summary": "Reviews animation and motion code against a high craft bar derived from Emil Kowalski's design engineering philosophy. Default to flagging; approval is earned.",
"trigger": "",
"commands": [
"npx skills add Free-The-Ai/free-ai@review-animations -g"
],
"install": "npx skills add Free-The-Ai/free-ai@review-animations -g",
"stars": 835,
"repoUrl": "https://github.com/Free-The-Ai/free-ai",
"aliases": [
"review-animations",
"Free-The-Ai",
"review-animations",
"skill",
"スキル"
]
},
{
"id": "skill-free-the-ai-free-ai-ui-laws-skills-main-skills-review-animations",
"priority": 472,
"category": "community",
"type": "skill",
"want": "review-animations",
"feature": "Free-The-Ai/free-ai",
"summary": "Reviews animation and motion code against a high craft bar derived from Emil Kowalski's design engineering philosophy. Default to flagging; approval is earned.",
"trigger": "",
"commands": [
"npx skills add Free-The-Ai/free-ai@review-animations -g"
],
"install": "npx skills add Free-The-Ai/free-ai@review-animations -g",
"stars": 835,
"repoUrl": "https://github.com/Free-The-Ai/free-ai",
"aliases": [
"review-animations",
"Free-The-Ai",
"review-animations",
"skill",
"スキル"
]
},
{
"id": "skill-bhanunamikaze-agentic-seo-skill-agentic-seo-skill",
"priority": 473,
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
"stars": 832,
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
"id": "skill-do1e-mijia-api-skills",
"priority": 474,
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
"stars": 701,
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
"id": "skill-nvidia-torch-harmonics-.skills-disco-kernel-dev",
"priority": 475,
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
"stars": 691,
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
"priority": 476,
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
"stars": 691,
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
"priority": 477,
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
"stars": 691,
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
"priority": 478,
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
"id": "skill-barefootford-buttercut-skills-analyze-video",
"priority": 479,
"category": "community",
"type": "skill",
"want": "analyze-video",
"feature": "barefootford/buttercut",
"summary": "Internal sub-procedure (not a standalone entry point) — the shared footage-analysis pipeline that produces audio transcripts, contact sheets, and Sonnet-written summaries. Invoked end-to-end by the process-library and reprocess-with-contact-sheets skills; don't trigger it on its own.",
"trigger": "",
"commands": [
"npx skills add barefootford/buttercut@analyze-video -g"
],
"install": "npx skills add barefootford/buttercut@analyze-video -g",
"stars": 586,
"repoUrl": "https://github.com/barefootford/buttercut",
"aliases": [
"analyze-video",
"barefootford",
"analyze-video",
"skill",
"スキル"
]
},
{
"id": "skill-barefootford-buttercut-skills-backup-library",
"priority": 480,
"category": "community",
"type": "skill",
"want": "backup-library",
"feature": "barefootford/buttercut",
"summary": "Backs up user libraries and all their contents (external video excluded). This skill can also be useful when you need to restore a library.",
"trigger": "",
"commands": [
"npx skills add barefootford/buttercut@backup-library -g"
],
"install": "npx skills add barefootford/buttercut@backup-library -g",
"stars": 586,
"repoUrl": "https://github.com/barefootford/buttercut",
"aliases": [
"backup-library",
"barefootford",
"backup-library",
"skill",
"スキル"
]
},
{
"id": "skill-barefootford-buttercut-skills-bc",
"priority": 481,
"category": "community",
"type": "skill",
"want": "bc",
"feature": "barefootford/buttercut",
"summary": "The ButterCut home menu — welcome the user back, then ask what they'd like to do (start a new cut, add footage to a library, a one-off task, or something else) and hand off to the right skill. Use as the front door when the user opens ButterCut, types \"buttercut\" or \"bc\", or asks \"where do I start\", \"what can you do\", or \"help me get started\".",
"trigger": "",
"commands": [
"npx skills add barefootford/buttercut@bc -g"
],
"install": "npx skills add barefootford/buttercut@bc -g",
"stars": 586,
"repoUrl": "https://github.com/barefootford/buttercut",
"aliases": [
"bc",
"barefootford",
"bc",
"skill",
"スキル"
]
},
{
"id": "skill-barefootford-buttercut-skills-buttercut",
"priority": 482,
"category": "community",
"type": "skill",
"want": "buttercut",
"feature": "barefootford/buttercut",
"summary": "The ButterCut home menu — welcome the user back, then ask what they'd like to do (start a new cut, add footage to a library, a one-off task, or something else) and hand off to the right skill. Use as the front door when the user opens ButterCut, types \"buttercut\" or \"bc\", or asks \"where do I start\", \"what can you do\", or \"help me get started\".",
"trigger": "",
"commands": [
"npx skills add barefootford/buttercut@buttercut -g"
],
"install": "npx skills add barefootford/buttercut@buttercut -g",
"stars": 586,
"repoUrl": "https://github.com/barefootford/buttercut",
"aliases": [
"buttercut",
"barefootford",
"buttercut",
"skill",
"スキル"
]
},
{
"id": "skill-barefootford-buttercut-skills-contact-sheet",
"priority": 483,
"category": "community",
"type": "skill",
"want": "contact-sheet",
"feature": "barefootford/buttercut",
"summary": "Builds a contact sheet from a video clip — evenly spaced frames laid out in a single grid image, each with its hh:mm:ss timestamp burned in.",
"trigger": "Use when the user asks for a \"contact sheet\", \"grid\", \"film strip\", or wants a one-image overview of part of a clip.",
"commands": [
"npx skills add barefootford/buttercut@contact-sheet -g"
],
"install": "npx skills add barefootford/buttercut@contact-sheet -g",
"stars": 586,
"repoUrl": "https://github.com/barefootford/buttercut",
"aliases": [
"contact-sheet",
"barefootford",
"contact-sheet",
"skill",
"スキル"
]
},
{
"id": "skill-barefootford-buttercut-skills-create-library",
"priority": 484,
"category": "community",
"type": "skill",
"want": "create-library",
"feature": "barefootford/buttercut",
"summary": "Create a new ButterCut library. Gather library info (name, footage location, language, transcript proofreading) and scaffold the library.",
"trigger": "Use when the user wants to start a **new** library. Libraries are containers of footage and footage analysis (transcripts, contact sheets, etc). User's may also refer to Libraries as \"projects\" or similiar. Ask them to confirm if they want a new Library (footage container) or just a new cut (roughcut, select, etc) if unsure.",
"commands": [
"npx skills add barefootford/buttercut@create-library -g"
],
"install": "npx skills add barefootford/buttercut@create-library -g",
"stars": 586,
"repoUrl": "https://github.com/barefootford/buttercut",
"aliases": [
"create-library",
"barefootford",
"create-library",
"skill",
"スキル"
]
},
{
"id": "skill-barefootford-buttercut-skills-cut",
"priority": 485,
"category": "community",
"type": "skill",
"want": "cut",
"feature": "barefootford/buttercut",
"summary": "Build a cut from a library — scene, selects, roughcut, custom task, or an edit from a written script. Starts by asking what kind of cut the user wants, then works with them to determine what they want to create.",
"trigger": "Use when the user asks for a \"roughcut\", \"sequence\", \"scene\", \"selects\", \"edit from a script\", or any other cut-shaped output.",
"commands": [
"npx skills add barefootford/buttercut@cut -g"
],
"install": "npx skills add barefootford/buttercut@cut -g",
"stars": 586,
"repoUrl": "https://github.com/barefootford/buttercut",
"aliases": [
"cut",
"barefootford",
"cut",
"skill",
"スキル"
]
},
{
"id": "skill-barefootford-buttercut-skills-full-transcript",
"priority": 486,
"category": "community",
"type": "skill",
"want": "full-transcript",
"feature": "barefootford/buttercut",
"summary": "Exports all dialogue from every clip in a library into a single text file. One clip per block — filename, then its spoken words.",
"trigger": "Use when the user asks for a \"full transcript\", \"full script\", or wants all the dialogue from a library in one place.",
"commands": [
"npx skills add barefootford/buttercut@full-transcript -g"
],
"install": "npx skills add barefootford/buttercut@full-transcript -g",
"stars": 586,
"repoUrl": "https://github.com/barefootford/buttercut",
"aliases": [
"full-transcript",
"barefootford",
"full-transcript",
"skill",
"スキル"
]
},
{
"id": "skill-op7418-document-illustrator-skill-document-illustrator-skill",
"priority": 487,
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
"stars": 577,
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
"id": "skill-mobiusquant-openmobius-skill-openmobius-skill",
"priority": 488,
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
"stars": 569,
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
"id": "skill-ksimback-tech-debt-skill-tech-debt-skill",
"priority": 489,
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
"stars": 545,
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
"id": "skill-enderfga-claw-orchestrator-skills",
"priority": 490,
"category": "community",
"type": "skill",
"want": "claw-orchestrator",
"feature": "Enderfga/claw-orchestrator",
"summary": "Manage persistent coding sessions across Claude Code, Codex, Antigravity (agy), Cursor, and OpenCode engines.",
"trigger": "Use when orchestrating multi-engine coding agents, starting/sending/stopping sessions, running multi-agent council collaborations, cross-session messaging, ultraplan deep planning, ultrareview parallel code review, autoloop autonomous workspace iteration, ultraapp building deployable web apps from a structured Q&A interview, switching models/tools at runtime, or exposing the orchestrator's 65 tools as an MCP server to Hermes Agent / Claude Desktop / Cursor / Cline / Continue / Zed / Windsurf / Goose. Triggers on \"start a session\", \"send to session\", \"run council\", \"ultraplan\", \"ultrareview\", \"autoloop\", \"ultraapp\", \"Forge tab\", \"build a web app\", \"one-click app\", \"AppSpec\", \"autonomous iteration\", \"iterate until goal\", \"deep paper review\", \"auto research\", \"switch model\", \"multi-agent\", \"coding session\", \"session inbox\", \"cursor agent\", \"opencode\", \"mcp server\", \"clawo-mcp\", \"hermes mcp\", \"model context protocol\", \"ultracode\", \"dynamic workflow\", \"fanout\", \"fan-out\", \"best-of-N\", \"steer turn\", \"interrupt turn\", \"fork thread\", \"rollback turns\".",
"commands": [
"npx skills add Enderfga/claw-orchestrator@skills -g"
],
"install": "npx skills add Enderfga/claw-orchestrator@skills -g",
"stars": 545,
"repoUrl": "https://github.com/Enderfga/claw-orchestrator",
"aliases": [
"skills",
"Enderfga",
"claw-orchestrator",
"skill",
"スキル"
]
},
{
"id": "skill-enderfga-claw-orchestrator-skills-claw-orchestrator",
"priority": 491,
"category": "community",
"type": "skill",
"want": "claw-orchestrator",
"feature": "Enderfga/claw-orchestrator",
"summary": "Run Claude Code, Codex, Gemini, Cursor Agent and custom coding CLIs as one unified runtime for claw-style agent systems. Runs standalone, with first-class OpenClaw plugin support.",
"trigger": "",
"commands": [
"npx skills add Enderfga/claw-orchestrator@claw-orchestrator -g"
],
"install": "npx skills add Enderfga/claw-orchestrator@claw-orchestrator -g",
"stars": 545,
"repoUrl": "https://github.com/Enderfga/claw-orchestrator",
"aliases": [
"claw-orchestrator",
"Enderfga",
"claw-orchestrator",
"skill",
"スキル"
]
},
{
"id": "skill-enderfga-claw-orchestrator-skills-ultraapp",
"priority": 492,
"category": "community",
"type": "skill",
"want": "ultraapp-interview",
"feature": "Enderfga/claw-orchestrator",
"summary": "Use when the user opens a Forge tab in the claw-orchestrator dashboard to start building a new ultraapp. Drives a structured Q&A interview that produces a complete AppSpec, then signals readiness to build.",
"trigger": "Use when the user opens a Forge tab in the claw-orchestrator dashboard to start building a new ultraapp. Drives a structured Q&A interview that produces a complete AppSpec, then signals readiness to build.",
"commands": [
"npx skills add Enderfga/claw-orchestrator@ultraapp -g"
],
"install": "npx skills add Enderfga/claw-orchestrator@ultraapp -g",
"stars": 545,
"repoUrl": "https://github.com/Enderfga/claw-orchestrator",
"aliases": [
"ultraapp",
"Enderfga",
"ultraapp-interview",
"skill",
"スキル"
]
},
{
"id": "skill-butterbase-ai-butterbase-skills-skills-agents",
"priority": 493,
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
"stars": 532,
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
"priority": 494,
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
"stars": 532,
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
"priority": 495,
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
"stars": 532,
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
"priority": 496,
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
"stars": 532,
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
"priority": 497,
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
"stars": 532,
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
"priority": 498,
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
"stars": 532,
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
"priority": 499,
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
"stars": 532,
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
"priority": 500,
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
"stars": 532,
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
"id": "skill-paraschopra-make-pages-interactive-make-pages-interactive",
"priority": 501,
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
"id": "skill-browser-use-browser-harness-js-browser-harness-js",
"priority": 502,
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
"stars": 476,
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
"priority": 503,
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
"stars": 431,
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
"priority": 504,
"category": "community",
"type": "skill",
"want": "bikeshed-conversion",
"feature": "w3c/web-performance",
"summary": "Guidelines for converting W3C specs to Bikeshed format. Covers anchor ID preservation, dfn handling, and common pitfalls. Read this before any Bikeshed conversion or migration work.",
"trigger": "",
"commands": [
"npx skills add w3c/web-performance@bikeshed-conversion -g"
],
"install": "npx skills add w3c/web-performance@bikeshed-conversion -g",
"stars": 431,
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
"priority": 505,
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
"stars": 431,
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
"id": "skill-microprediction-precise-.claude-skills-assess-covariance-method",
"priority": 506,
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
"stars": 333,
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
"priority": 507,
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
"stars": 333,
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
"priority": 508,
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
"stars": 333,
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
"priority": 509,
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
"stars": 333,
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
"priority": 510,
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
"stars": 333,
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
"priority": 511,
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
"stars": 333,
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
"id": "skill-xwtro0tk1t-cloud-harness-bundled-skills-android-vuln-analyzer",
"priority": 512,
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
"stars": 289,
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
"priority": 513,
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
"stars": 289,
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
"priority": 514,
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
"stars": 289,
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
"priority": 515,
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
"stars": 289,
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
"priority": 516,
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
"stars": 289,
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
"priority": 517,
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
"stars": 289,
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
"priority": 518,
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
"stars": 289,
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
"priority": 519,
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
"stars": 289,
"repoUrl": "https://github.com/xwtro0tk1t-cloud/harness",
"aliases": [
"harness-guide",
"xwtro0tk1t-cloud",
"harness-guide",
"skill",
"スキル"
]
}
];
