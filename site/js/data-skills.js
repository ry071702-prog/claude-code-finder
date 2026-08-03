// 生成物: scripts/build_data.py が skills.jsonl + overrides.ja.json から作成。手で編集しない。
// GitHub の Claude Code Skills を非LLMで取り込み、日本語化 53/120 件（週次 ingest-skills.yml）。
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
"stars": 166028,
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
"stars": 166028,
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
"stars": 166028,
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
"stars": 166028,
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
"stars": 166028,
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
"stars": 166028,
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
"stars": 166028,
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
"stars": 166028,
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
"stars": 166028,
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
"stars": 166028,
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
"stars": 166028,
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
"stars": 166028,
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
"stars": 166028,
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
"stars": 166028,
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
"stars": 166028,
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
"stars": 166028,
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
"stars": 166028,
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
"stars": 29718,
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
"stars": 29718,
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
"stars": 29718,
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
"stars": 29718,
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
"stars": 29718,
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
"stars": 29718,
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
"stars": 29718,
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
"stars": 29718,
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
"stars": 29718,
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
"id": "skill-lewislulu-html-ppt-skill-html-ppt-skill",
"priority": 428,
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
"stars": 7595,
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
"id": "skill-antvis-l7-skills-l7-single",
"priority": 429,
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
"stars": 4044,
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
"priority": 430,
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
"stars": 4044,
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
"priority": 431,
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
"stars": 2965,
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
"priority": 432,
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
"stars": 2965,
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
"priority": 433,
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
"stars": 2965,
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
"priority": 434,
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
"stars": 2965,
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
"priority": 435,
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
"stars": 2965,
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
"priority": 436,
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
"stars": 2965,
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
"priority": 437,
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
"stars": 2965,
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
"priority": 438,
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
"stars": 2965,
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
"id": "skill-butterbase-ai-butterbase-butterbase",
"priority": 439,
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
"stars": 2894,
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
"id": "skill-openstatushq-data-table-filters-.agents-skills-emil-design-eng",
"priority": 440,
"category": "community",
"type": "skill",
"want": "UIの磨き込みや細部の作り込みの指針を得たい",
"feature": "openstatusHQ/data-table-filters",
"summary": "Emil Kowalski のUI磨き込み・コンポーネント設計・アニメーション判断・細部の作り込みの考え方をまとめる。",
"trigger": "",
"commands": [
"npx skills add openstatusHQ/data-table-filters@emil-design-eng -g"
],
"install": "npx skills add openstatusHQ/data-table-filters@emil-design-eng -g",
"stars": 2175,
"repoUrl": "https://github.com/openstatusHQ/data-table-filters",
"aliases": [
"emil-design-eng",
"openstatusHQ",
"emil-design-eng",
"skill",
"スキル"
]
},
{
"id": "skill-openstatushq-data-table-filters-.agents-skills-frontend-design",
"priority": 441,
"category": "community",
"type": "skill",
"want": "量産型に見えないフロントエンドUIを作りたい",
"feature": "openstatusHQ/data-table-filters",
"summary": "既視感のあるAIっぽいデザインを避け、本番水準で個性のあるフロントエンドUIとコードを作る。",
"trigger": "Webコンポーネント・ページ・ダッシュボード・LP・ポスター等の構築やUIの装飾を頼まれたとき。",
"commands": [
"npx skills add openstatusHQ/data-table-filters@frontend-design -g"
],
"install": "npx skills add openstatusHQ/data-table-filters@frontend-design -g",
"stars": 2175,
"repoUrl": "https://github.com/openstatusHQ/data-table-filters",
"aliases": [
"frontend-design",
"openstatusHQ",
"frontend-design",
"skill",
"スキル"
]
},
{
"id": "skill-openstatushq-data-table-filters-.agents-skills-game-changing-features",
"priority": 442,
"category": "community",
"type": "skill",
"want": "効き目の大きい機能や打ち手を見つけたい",
"feature": "openstatusHQ/data-table-filters",
"summary": "プロダクトを大きく伸ばす機会や、少ない労力で効き目の大きい改善案を戦略的に洗い出す。",
"trigger": "戦略的なプロダクト思考や「10x」「次に何を作るべきか」を求められたとき。",
"commands": [
"npx skills add openstatusHQ/data-table-filters@game-changing-features -g"
],
"install": "npx skills add openstatusHQ/data-table-filters@game-changing-features -g",
"stars": 2175,
"repoUrl": "https://github.com/openstatusHQ/data-table-filters",
"aliases": [
"game-changing-features",
"openstatusHQ",
"game-changing-features",
"skill",
"スキル"
]
},
{
"id": "skill-openstatushq-data-table-filters-.agents-skills-grill-me",
"priority": 443,
"category": "community",
"type": "skill",
"want": "計画や設計を厳しく問い詰めて検証したい",
"feature": "openstatusHQ/data-table-filters",
"summary": "計画や設計について、決定木の各分岐が埋まるまで容赦なく質問を重ね、共通理解に至らせる。",
"trigger": "計画をストレステストしたい、設計を問い詰めてほしい、「grill me」と言われたとき。",
"commands": [
"npx skills add openstatusHQ/data-table-filters@grill-me -g"
],
"install": "npx skills add openstatusHQ/data-table-filters@grill-me -g",
"stars": 2175,
"repoUrl": "https://github.com/openstatusHQ/data-table-filters",
"aliases": [
"grill-me",
"openstatusHQ",
"grill-me",
"skill",
"スキル"
]
},
{
"id": "skill-openstatushq-data-table-filters-.agents-skills-improve",
"priority": 444,
"category": "community",
"type": "skill",
"want": "コードベースを診断して改善計画を作りたい",
"feature": "openstatusHQ/data-table-filters",
"summary": "シニア顧問としてコードベースを調べ、他のエージェントが実行できる優先順位付きの実装計画を作る。ソースは読むだけ。",
"trigger": "コードベースの監査・改善点の洗い出し・別エージェント向けの引き継ぎ計画づくりを頼まれたとき。",
"commands": [
"npx skills add openstatusHQ/data-table-filters@improve -g"
],
"install": "npx skills add openstatusHQ/data-table-filters@improve -g",
"stars": 2175,
"repoUrl": "https://github.com/openstatusHQ/data-table-filters",
"aliases": [
"improve",
"openstatusHQ",
"improve",
"skill",
"スキル"
]
},
{
"id": "skill-openstatushq-data-table-filters-.agents-skills-improve-codebase-architecture",
"priority": 445,
"category": "community",
"type": "skill",
"want": "アーキテクチャの改善余地を見つけたい",
"feature": "openstatusHQ/data-table-filters",
"summary": "浅いモジュールを深めてテストしやすくする観点で、コードベースのアーキテクチャ改善の余地を探す。",
"trigger": "アーキテクチャ改善・リファクタ余地の発見・密結合モジュールの整理をしたいとき。",
"commands": [
"npx skills add openstatusHQ/data-table-filters@improve-codebase-architecture -g"
],
"install": "npx skills add openstatusHQ/data-table-filters@improve-codebase-architecture -g",
"stars": 2175,
"repoUrl": "https://github.com/openstatusHQ/data-table-filters",
"aliases": [
"improve-codebase-architecture",
"openstatusHQ",
"improve-codebase-architecture",
"skill",
"スキル"
]
},
{
"id": "skill-openstatushq-data-table-filters-.agents-skills-mcp-builder",
"priority": 446,
"category": "community",
"type": "skill",
"want": "MCPサーバーを作りたい",
"feature": "openstatusHQ/data-table-filters",
"summary": "外部サービスとLLMをつなぐMCPサーバーの作り方を、Python(FastMCP)やNode/TypeScript(MCP SDK)で案内する。",
"trigger": "外部APIやサービスを連携するMCPサーバーを作るとき。",
"commands": [
"npx skills add openstatusHQ/data-table-filters@mcp-builder -g"
],
"install": "npx skills add openstatusHQ/data-table-filters@mcp-builder -g",
"stars": 2175,
"repoUrl": "https://github.com/openstatusHQ/data-table-filters",
"aliases": [
"mcp-builder",
"openstatusHQ",
"mcp-builder",
"skill",
"スキル"
]
},
{
"id": "skill-openstatushq-data-table-filters-.agents-skills-next-best-practices",
"priority": 447,
"category": "community",
"type": "skill",
"want": "Next.jsのベストプラクティスに沿いたい",
"feature": "openstatusHQ/data-table-filters",
"summary": "ファイル規約・RSC境界・データ取得・メタデータ・エラー処理など、Next.jsの定石をまとめる。",
"trigger": "",
"commands": [
"npx skills add openstatusHQ/data-table-filters@next-best-practices -g"
],
"install": "npx skills add openstatusHQ/data-table-filters@next-best-practices -g",
"stars": 2175,
"repoUrl": "https://github.com/openstatusHQ/data-table-filters",
"aliases": [
"next-best-practices",
"openstatusHQ",
"next-best-practices",
"skill",
"スキル"
]
},
{
"id": "skill-op7418-youtube-clipper-skill-youtube-clipper-skill",
"priority": 448,
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
"stars": 2095,
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
"priority": 449,
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
"priority": 450,
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
"stars": 1939,
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
"priority": 451,
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
"stars": 1809,
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
"priority": 452,
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
"stars": 1760,
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
"priority": 453,
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
"stars": 1631,
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
"id": "skill-daymade-claude-code-skills-auto-repo-setup",
"priority": 454,
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
"stars": 1314,
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
"priority": 455,
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
"stars": 1314,
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
"priority": 456,
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
"stars": 1314,
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
"priority": 457,
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
"stars": 1314,
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
"priority": 458,
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
"stars": 1314,
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
"priority": 459,
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
"stars": 1314,
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
"priority": 460,
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
"stars": 1314,
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
"stars": 1314,
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
"id": "skill-bayramannakov-claude-reflect-claude-reflect",
"priority": 462,
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
"stars": 1282,
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
"priority": 463,
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
"stars": 1213,
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
"priority": 464,
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
"stars": 1139,
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
"priority": 465,
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
"stars": 1139,
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
"priority": 466,
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
"stars": 1139,
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
"priority": 467,
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
"stars": 1139,
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
"priority": 468,
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
"stars": 1139,
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
"priority": 469,
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
"stars": 1139,
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
"priority": 470,
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
"stars": 1139,
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
"priority": 471,
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
"stars": 1139,
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
"id": "skill-alchaincyf-x-mentor-skill-x-mentor-skill",
"priority": 472,
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
"stars": 1132,
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
"id": "skill-datadog-pup-skills-dd-apm",
"priority": 473,
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
"stars": 967,
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
"priority": 474,
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
"stars": 967,
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
"priority": 475,
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
"stars": 967,
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
"priority": 476,
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
"stars": 967,
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
"priority": 477,
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
"stars": 967,
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
"priority": 478,
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
"stars": 967,
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
"priority": 479,
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
"stars": 967,
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
"priority": 480,
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
"stars": 967,
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
"stars": 959,
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
"priority": 482,
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
"stars": 861,
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
"priority": 483,
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
"stars": 828,
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
"priority": 484,
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
"stars": 828,
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
"priority": 485,
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
"stars": 828,
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
"priority": 486,
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
"stars": 828,
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
"priority": 487,
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
"stars": 828,
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
"priority": 488,
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
"stars": 828,
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
"priority": 489,
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
"stars": 828,
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
"priority": 490,
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
"stars": 828,
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
"priority": 491,
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
"stars": 813,
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
"id": "skill-leokemp223-embed-ai-tool-skills-build-cmake",
"priority": 492,
"category": "community",
"type": "skill",
"want": "build-cmake",
"feature": "LeoKemp223/embed-ai-tool",
"summary": "当需要配置或构建基于 CMake 的嵌入式固件工程，调用自带脚本执行构建并定位固件产物时使用。",
"trigger": "",
"commands": [
"npx skills add LeoKemp223/embed-ai-tool@build-cmake -g"
],
"install": "npx skills add LeoKemp223/embed-ai-tool@build-cmake -g",
"stars": 792,
"repoUrl": "https://github.com/LeoKemp223/embed-ai-tool",
"aliases": [
"build-cmake",
"LeoKemp223",
"build-cmake",
"skill",
"スキル"
]
},
{
"id": "skill-leokemp223-embed-ai-tool-skills-build-iar",
"priority": 493,
"category": "community",
"type": "skill",
"want": "build-iar",
"feature": "LeoKemp223/embed-ai-tool",
"summary": "当需要通过 IAR Embedded Workbench 命令行编译嵌入式工程，调用自带脚本解析工程文件、执行构建并定位固件产物时使用。",
"trigger": "",
"commands": [
"npx skills add LeoKemp223/embed-ai-tool@build-iar -g"
],
"install": "npx skills add LeoKemp223/embed-ai-tool@build-iar -g",
"stars": 792,
"repoUrl": "https://github.com/LeoKemp223/embed-ai-tool",
"aliases": [
"build-iar",
"LeoKemp223",
"build-iar",
"skill",
"スキル"
]
},
{
"id": "skill-leokemp223-embed-ai-tool-skills-build-idf",
"priority": 494,
"category": "community",
"type": "skill",
"want": "build-idf",
"feature": "LeoKemp223/embed-ai-tool",
"summary": "当需要配置或构建基于 ESP-IDF 的固件工程，调用自带脚本执行 idf.py build 并定位固件产物时使用。",
"trigger": "",
"commands": [
"npx skills add LeoKemp223/embed-ai-tool@build-idf -g"
],
"install": "npx skills add LeoKemp223/embed-ai-tool@build-idf -g",
"stars": 792,
"repoUrl": "https://github.com/LeoKemp223/embed-ai-tool",
"aliases": [
"build-idf",
"LeoKemp223",
"build-idf",
"skill",
"スキル"
]
},
{
"id": "skill-leokemp223-embed-ai-tool-skills-build-keil",
"priority": 495,
"category": "community",
"type": "skill",
"want": "build-keil",
"feature": "LeoKemp223/embed-ai-tool",
"summary": "当需要通过 Keil MDK 命令行编译嵌入式工程，调用自带脚本解析工程文件、执行构建并定位固件产物时使用。",
"trigger": "",
"commands": [
"npx skills add LeoKemp223/embed-ai-tool@build-keil -g"
],
"install": "npx skills add LeoKemp223/embed-ai-tool@build-keil -g",
"stars": 792,
"repoUrl": "https://github.com/LeoKemp223/embed-ai-tool",
"aliases": [
"build-keil",
"LeoKemp223",
"build-keil",
"skill",
"スキル"
]
},
{
"id": "skill-leokemp223-embed-ai-tool-skills-build-makefile",
"priority": 496,
"category": "community",
"type": "skill",
"want": "build-makefile",
"feature": "LeoKemp223/embed-ai-tool",
"summary": "当需要编译基于裸 Makefile 的嵌入式固件工程（无 CMake/IDE），调用自带脚本解析 Makefile、执行 make 并定位固件产物时使用。",
"trigger": "",
"commands": [
"npx skills add LeoKemp223/embed-ai-tool@build-makefile -g"
],
"install": "npx skills add LeoKemp223/embed-ai-tool@build-makefile -g",
"stars": 792,
"repoUrl": "https://github.com/LeoKemp223/embed-ai-tool",
"aliases": [
"build-makefile",
"LeoKemp223",
"build-makefile",
"skill",
"スキル"
]
},
{
"id": "skill-leokemp223-embed-ai-tool-skills-build-platformio",
"priority": 497,
"category": "community",
"type": "skill",
"want": "build-platformio",
"feature": "LeoKemp223/embed-ai-tool",
"summary": "当需要通过 PlatformIO 命令行编译嵌入式工程，调用自带脚本解析环境配置、执行构建并定位固件产物时使用。",
"trigger": "",
"commands": [
"npx skills add LeoKemp223/embed-ai-tool@build-platformio -g"
],
"install": "npx skills add LeoKemp223/embed-ai-tool@build-platformio -g",
"stars": 792,
"repoUrl": "https://github.com/LeoKemp223/embed-ai-tool",
"aliases": [
"build-platformio",
"LeoKemp223",
"build-platformio",
"skill",
"スキル"
]
},
{
"id": "skill-leokemp223-embed-ai-tool-skills-can-debug",
"priority": 498,
"category": "community",
"type": "skill",
"want": "can-debug",
"feature": "LeoKemp223/embed-ai-tool",
"summary": "当需要调试 CAN 总线通信时使用，支持通过 USB-CAN 适配器监听、发送 CAN 帧和扫描节点。",
"trigger": "",
"commands": [
"npx skills add LeoKemp223/embed-ai-tool@can-debug -g"
],
"install": "npx skills add LeoKemp223/embed-ai-tool@can-debug -g",
"stars": 792,
"repoUrl": "https://github.com/LeoKemp223/embed-ai-tool",
"aliases": [
"can-debug",
"LeoKemp223",
"can-debug",
"skill",
"スキル"
]
},
{
"id": "skill-leokemp223-embed-ai-tool-embed-ai-tool",
"priority": 499,
"category": "community",
"type": "skill",
"want": "embed-ai-tool",
"feature": "LeoKemp223/embed-ai-tool",
"summary": "嵌入式开发技能集的总控入口。负责两类任务：(1) 用户请求安装本仓库 skill 时，引导选择全部或按需安装；(2) 用户发出模糊指令（如\"烧录\"、\"编译\"、\"调试\"）且无法自动判断应使用哪个具体 skill 时，列出同分类下的候选 skill 供用户选择。",
"trigger": "",
"commands": [
"npx skills add LeoKemp223/embed-ai-tool@embed-ai-tool -g"
],
"install": "npx skills add LeoKemp223/embed-ai-tool@embed-ai-tool -g",
"stars": 792,
"repoUrl": "https://github.com/LeoKemp223/embed-ai-tool",
"aliases": [
"embed-ai-tool",
"LeoKemp223",
"embed-ai-tool",
"skill",
"スキル"
]
},
{
"id": "skill-talesofai-neta-skills-skills-neta",
"priority": 500,
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
"stars": 770,
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
"priority": 501,
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
"stars": 770,
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
"priority": 502,
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
"stars": 770,
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
"priority": 503,
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
"stars": 770,
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
"priority": 504,
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
"stars": 770,
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
"priority": 505,
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
"stars": 770,
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
"priority": 506,
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
"stars": 770,
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
"priority": 507,
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
"stars": 770,
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
"id": "skill-do1e-mijia-api-skills",
"priority": 508,
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
"stars": 696,
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
"priority": 509,
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
"stars": 689,
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
"priority": 510,
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
"stars": 689,
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
"priority": 511,
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
"stars": 689,
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
"id": "skill-wechat-gggithub-wechat-claude-code-wechat-claude-code",
"priority": 512,
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
"stars": 643,
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
"priority": 514,
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
"stars": 581,
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
"priority": 515,
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
"stars": 581,
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
"priority": 516,
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
"stars": 581,
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
"priority": 517,
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
"stars": 581,
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
"priority": 518,
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
"stars": 581,
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
"priority": 519,
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
"stars": 581,
"repoUrl": "https://github.com/barefootford/buttercut",
"aliases": [
"create-library",
"barefootford",
"create-library",
"skill",
"スキル"
]
}
];
