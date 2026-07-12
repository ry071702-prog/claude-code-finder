/* =====================================================================
 *  自分たち用の追加エントリ（基本データ data.js とは別に管理）
 * ---------------------------------------------------------------------
 *  ここに書いた項目は自動で「独自」タグが付き、上部の「◆ 独自」フィルタ
 *  で絞り込めます。基本データと同じ見た目・検索・モーダルにそのまま乗ります。
 *
 *  ▼ 書き方（1件コピーして増やすだけ）
 *  {
 *    id:"team-xxx",              // 重複しない一意なID（team- 接頭辞推奨）
 *    priority:500,              // 並び順。基本データは 1〜300 台。独自は 500+ で後ろにまとめる
 *    category:"change",         // 下の「カテゴリID」から1つ
 *    type:"command",            // command / cli / feature / tool / platform / config / admin / sdk
 *    want:"〜したい",            // 目的（カード見出し）
 *    feature:"/foo または コマンド名",   // 使う機能
 *    summary:"何をするものか1〜2文",
 *    commands:["/foo","foo --bar"],     // 表示するコマンド（先頭3つがカードに出る）
 *    aliases:["別名","検索で当てたい語"], // 検索ヒット率を上げる語
 *    steps:["手順1","手順2"],           // モーダルの「進め方」
 *    notes:["注意1"],                   // モーダルの「注意点」
 *    author:"自分の名前/チーム名",        // 出典チップに出る（任意）
 *    source:"commands",                 // 公式根拠ID（任意・下の一覧参照）。無ければ省略可
 *    extraSource:"features"             // 追加の根拠（任意）
 *  }
 *
 *  ▼ カテゴリID: start / understand / change / git / parallel / memory /
 *     safety / extend / platform / automation / admin / sdk / trouble
 *
 *  ▼ 公式根拠ID（source に使える値・任意）: overview / commands / cli /
 *     tools / permissions / features / memory / settings / hooks / mcp /
 *     sessions / platforms / web / desktop / sdk / llms
 *     ※ 自作Tipsなど根拠リンク不要なら source を省略（"社内ナレッジ" と表示）
 * ===================================================================== */

window.CCF_CUSTOM_ENTRIES = [

  /* ---- サンプル（消してOK・そのまま増やす雛形として使えます） ---- */
  {
    id:"team-sample",
    priority:500,
    category:"change",
    type:"feature",
    want:"チーム独自のTipsをここに足したい",
    feature:"data-custom.js に追記",
    summary:"基本データ(data.js)とは別に、社内で見つけた使い方や運用ルールをこのファイルに書き足せます。保存して再読み込みするだけで反映されます。",
    commands:["js/data-custom.js を編集"],
    aliases:["独自","社内","チーム","カスタム","追加"],
    steps:["この配列に1件コピーして値を書き換える。","ブラウザを再読み込みする。","上部の「◆ 独自」で自分たちの追加分だけ絞り込める。"],
    notes:["idは他と重複しない値にする。","基本データ data.js とは分けて管理する（別々に更新できる）。"],
    author:"サンプル"
  },

  {
    id:"cc-finder-plugin",
    priority:501,
    category:"extend",
    type:"feature",
    want:"Claude Code の使い方を目的から逆引きしたい",
    feature:"claude-code-finder プラグイン（MCP lookup）",
    summary:"この辞典を Claude Code に常駐させ、セッション内から目的で機能・コマンド・導入skillを引ける。オフライン（同梱データ）で動く。",
    commands:["/plugin marketplace add ry071702-prog/claude-code-finder","/plugin install claude-code-finder@claude-code-finder","lookup(\"PRを直したい\")"],
    aliases:["逆引き","lookup","plugin","mcp","常駐"],
    steps:["marketplace を追加して install する。","迷ったら lookup(\"やりたいこと\") を呼ぶ。","単体skillだけなら npx skills add ry071702-prog/claude-code-finder -g。"],
    notes:["MCPサーバは依存なしのローカル実装（非LLM・低コスト）。"],
    install:"npx skills add ry071702-prog/claude-code-finder -g",
    author:"claude-code-finder"
  },
  {
    id:"cc-finder-discover-skills",
    priority:502,
    category:"extend",
    type:"feature",
    want:"良さそうな Skill を見つけて自分の Claude Code に入れたい",
    feature:"コミュニティSkills タブ → npx skills add",
    summary:"GitHub の高星 Claude Code Skills を週次で取り込んで一覧。各カードの導入コマンドをコピーして実行すれば自分の環境に入る。",
    commands:["npx skills add <owner>/<repo> -g","npx skills find <keyword>"],
    aliases:["skill 探す","導入","npx skills","コミュニティ"],
    steps:["「◆ Skills」で絞り込む or 検索する。","カードの導入コマンドをコピーして実行する。","skill は任意コード実行なので、入れる前に repo の中身を確認する。"],
    notes:["提出→掲載は人手モデレート（提出＝掲載ではない）。"],
    author:"claude-code-finder"
  },

  {
    id:"pat-debug",
    priority:510,
    category:"change",
    type:"feature",
    want:"バグを推測で直さず体系的に調べたい",
    feature:"体系的デバッグ（再現→仮説→検証→修正→報告）",
    summary:"いきなり直さず、最小再現を固め→仮説を2〜3個立て→値で検証→根本原因を修正→再発防止テスト、の順で進める作業フロー。",
    commands:["/debug 相当の手順を指示に含める"],
    aliases:["debug","デバッグ","再現","仮説","根本原因","reproduce"],
    steps:["最小再現手順を確定（再現できないバグは推測で直さない）。","原因仮説を2〜3個、検証しやすい順に潰す。","print/breakpointで予想値と実測を照合。","根本原因を直し、grepで同種バグを再発防止＋失敗テスト追加。","原因/経緯/修正/再発防止を報告。"],
    notes:["自作skillの手順（未公開・指示に写せば誰でも再現可能）。"],
    author:"ry071702-prog"
  },
  {
    id:"pat-refactor",
    priority:511,
    category:"change",
    type:"feature",
    want:"動作を変えずに安全に小さくリファクタしたい",
    feature:"テスト保護下の小刻みリファクタ",
    summary:"動作不変を前提に、テストで守りながら小さな単位で整理する。振る舞いを変える変更と混ぜない。",
    commands:["/refactor 相当を指示に含める"],
    aliases:["refactor","リファクタ","整理","動作不変"],
    steps:["対象と『動作は変えない』ことを明示。","テストが緑なのを確認してから着手。","小さな単位でコミット可能に刻む。","各ステップ後にテストで退行がないか確認。"],
    notes:["正しさのバグ検出は別途 /code-review。自作skillパターン（未公開）。"],
    author:"ry071702-prog"
  },
  {
    id:"pat-tests-gen",
    priority:512,
    category:"change",
    type:"feature",
    want:"既存スタイルに合わせてテストを生成したい",
    feature:"スタイル追従テスト生成",
    summary:"リポジトリのテストフレームワーク（pytest/Vitest/Jest 等）と既存の書き方を踏襲してテストを足す。",
    commands:["/tests-gen 相当を指示に含める"],
    aliases:["test","テスト生成","pytest","vitest","jest"],
    steps:["対象ファイル/関数と期待挙動を渡す。","既存テストの命名・構造に合わせる。","境界値・異常系も入れる。","実行して緑を確認。"],
    notes:["自作skillパターン（未公開）。"],
    author:"ry071702-prog"
  },
  {
    id:"pat-explain",
    priority:513,
    category:"understand",
    type:"feature",
    want:"コードを平易な日本語で解説してほしい",
    feature:"アーキ→詳細の順で解説",
    summary:"指定ファイル/ディレクトリ/関数を、全体像→責務→詳細の順に噛み砕いて説明する。初見理解に使う。",
    commands:["/explain 相当を指示に含める"],
    aliases:["explain","解説","理解","オンボーディング"],
    steps:["対象と『何を知りたいか』を伝える。","まず全体構成と責務を説明させる。","要所だけ詳細に掘る。"],
    notes:["自作skillパターン（未公開）。"],
    author:"ry071702-prog"
  },

  /* ===== コード不要・仕事で使える（非エンジニア向け） =====
     ターミナルやコードを触らなくても、Claude に「頼む」だけでできる日常業務。
     ブラウザ(claude.ai)・デスクトップアプリ・モバイルでも同じことができます。 */
  {
    id:"work-start-noterminal",
    priority:520,
    category:"cowork",
    type:"platform",
    want:"コードを書かない・ターミナルを使わずに始めたい",
    feature:"Claude アプリ（Web / デスクトップ / モバイル）",
    summary:"エンジニアでなくても、ブラウザ（claude.ai）やデスクトップ/モバイルアプリから普通のチャットで頼むだけで使えます。以下の仕事はコードの知識ゼロでOKです。",
    commands:["claude.ai を開いて日本語で頼むだけ"],
    prompt:"あなたは私の仕事のアシスタントです\n専門用語はできるだけ使わず、わからない点があれば先に質問してください\n\nこれからお願いしたいこと: 【やりたいことを書く】\n\nまず、何をどの順でやればいいか手順を3つに分けて教えてください",
    aliases:["非エンジニア","初心者","ターミナル不要","コード不要","アプリ","ブラウザ","claude.ai","cowork","事務","文系"],
    steps:["claude.ai かデスクトップ/モバイルアプリを開く。","やりたいことを普通の日本語で書く（例: 『この資料を3行で要約して』）。","結果を確認して、直したい所を追加で頼む。"],
    notes:["機密情報の扱いは社内ルールに従う。","コードを書く人向けの機能は他カテゴリを参照。"],
    author:"claude-code-finder"
  },
  {
    id:"work-slides",
    priority:521,
    category:"cowork",
    type:"feature",
    want:"プレゼン資料・スライドのたたき台を作りたい",
    feature:"資料ドラフト（構成→本文）",
    summary:"テーマ・目的・伝えたい相手を伝えると、スライドの構成案から各ページの見出し・本文まで作ってくれます。PowerPoint 生成に対応した Skill を入れれば .pptx で書き出すこともできます。",
    commands:["\"新入社員向けにセキュリティ研修のスライド構成を10枚で\"","\"この内容をスライドの箇条書きに整えて\""],
    prompt:"【対象者】向けに「【テーマ】」のスライドを【10】枚で作りたいです\n目的は【伝えたいこと】です\n\nいきなり本文は書かず、まず目次（各ページの見出し）だけを箇条書きで提案してください\n方向性を決めてから本文に展開します",
    aliases:["スライド","資料","パワポ","ppt","pptx","プレゼン","提案資料","デッキ","slide","powerpoint"],
    steps:["テーマ・目的・対象者・枚数を伝える。","まず構成案（目次）を出させて方向を決める。","各ページの本文・箇条書きに展開させる。","必要なら pptx 生成 Skill で書き出す。"],
    notes:["社外に出す資料は事実確認を必ず自分で行う。"],
    author:"claude-code-finder"
  },
  {
    id:"work-doc",
    priority:522,
    category:"cowork",
    type:"feature",
    want:"報告書・提案書・お知らせなどの文書を書きたい",
    feature:"文書ドラフト（Word 等）",
    summary:"要点や箇条書きのメモを渡すと、体裁の整った文章に仕上げてくれます。Word 生成 Skill を入れれば .docx でも出力できます。",
    commands:["\"この箇条書きから週報を書いて\"","\"提案書の骨子を作って（背景・課題・提案・効果）\""],
    prompt:"【報告書 / 提案書 / お知らせ】を書きたいです\n\n読み手: 【相手】\n目的: 【何を伝えて、どう動いてほしいか】\n分量: 【A4 1枚】程度\nトーン: 硬すぎない敬体\n\nまず構成案を出して、私がOKしてから本文を書いてください",
    aliases:["文書","報告書","提案書","レポート","ドキュメント","word","docx","お知らせ","案内文","作文"],
    steps:["伝えたい要点・読み手・トーンを渡す。","構成（見出し）を先に決める。","本文を書かせて、固い/柔らかいを調整する。"],
    notes:["数字・固有名詞は自分で裏取りする。"],
    author:"claude-code-finder"
  },
  {
    id:"work-sheet",
    priority:523,
    category:"cowork",
    type:"feature",
    want:"Excel・スプレッドシートの表や集計を作りたい",
    feature:"表・集計・関数の相談",
    summary:"「こういう集計がしたい」を伝えると、表の作り方・必要な関数（SUMIF/VLOOKUP 等）・手順を教えてくれます。Excel 生成 Skill を入れれば .xlsx を直接作ることもできます。",
    commands:["\"日付ごとの売上を月別に集計する関数は？\"","\"この表を見やすく整形して合計列を足して\""],
    prompt:"次のデータから【集計したいこと】の表を作ってください\n\n列: 【列名】\n行: 【行の単位】\n\n表で見せたあと、そのままコピーできるCSV形式でも出力してください\n\n--- データ ---\n【ここに貼る】",
    aliases:["エクセル","excel","xlsx","スプレッドシート","表","集計","関数","vlookup","sumif","計算","グラフ"],
    steps:["元データの形と、出したい集計を伝える。","関数か手順を教えてもらう。","うまくいかない時はエラー内容を貼って相談する。"],
    notes:["重要な計算は結果を自分で検算する。"],
    author:"claude-code-finder"
  },
  {
    id:"work-pdf",
    priority:524,
    category:"cowork",
    type:"feature",
    want:"長いPDFや資料を読んで要点だけ知りたい",
    feature:"PDF・資料の要約と質問",
    summary:"PDF や長文を渡すと、要点の要約・重要ポイントの抽出・「ここどういう意味？」への回答をしてくれます。契約書・仕様書・論文などの下読みに便利です。",
    commands:["\"このPDFを3つのポイントに要約して\"","\"この資料でリスクに触れている箇所を教えて\""],
    prompt:"添付の資料を読んで、次の3つを教えてください\n\n1. 全体の要点を5行で\n2. 私が判断するうえで重要な数字・条件・期限\n3. 注意すべきリスクや、資料からは読み取れない点\n\n専門用語には短い説明を添えてください",
    aliases:["pdf","要約","資料","読む","下読み","契約書","仕様書","論文","まとめ","抽出"],
    steps:["PDF/文書を添付するか本文を貼る。","『要点3つ』『ToDoだけ』など出力の形を指定する。","気になる箇所を追加で質問する。"],
    notes:["機密文書のアップロードは社内ルールを確認する。"],
    author:"claude-code-finder"
  },
  {
    id:"work-minutes",
    priority:525,
    category:"cowork",
    type:"feature",
    want:"会議の文字起こしから議事録を作りたい",
    feature:"議事録・ToDo 抽出",
    summary:"文字起こしや長いメモを渡すと、決定事項・宿題（担当と期限）・論点を整理した議事録にまとめてくれます。",
    commands:["\"この文字起こしを議事録に（決定事項/ToDo/保留）\"","\"担当と期限つきでToDoだけ抜き出して\""],
    prompt:"次の文字起こしから議事録を作ってください\n\n次の3つに分けてまとめてください\n・決定事項\n・保留 / 持ち帰り\n・ネクストアクション（担当者と期限つき）\n\n雑談や言い直しは削って、決まったことだけを残してください\n\n--- 文字起こし ---\n【ここに貼る】",
    aliases:["議事録","会議","文字起こし","ミーティング","メモ","todo","ネクストアクション","要約","まとめ"],
    steps:["文字起こし/メモを貼る。","出力の型（決定事項・ToDo・論点）を指定する。","担当・期限が抜けていれば補ってもらう。"],
    notes:["参加者名や社外秘の扱いに注意する。"],
    author:"claude-code-finder"
  },
  {
    id:"work-translate",
    priority:526,
    category:"cowork",
    type:"feature",
    want:"翻訳・敬語・言い回しの調整をしたい",
    feature:"翻訳・リライト・トーン調整",
    summary:"英訳・和訳はもちろん、「もっと丁寧に」「やわらかく」「短く」などトーンの調整や言い換えも得意です。海外向けメールや社外文の推敲に。",
    commands:["\"この文章を自然な英語に翻訳して\"","\"この返信をもう少し丁寧なトーンにして\""],
    prompt:"次の文章を【英語 / 日本語】にしてください\n\n読み手: 【相手】\nトーン: 【丁寧め / カジュアル】\n\n直訳ではなく自然な言い回しにしてください\n訳し方に迷う箇所は、候補を2つ出して違いを説明してください\n\n--- 原文 ---\n【ここに貼る】",
    aliases:["翻訳","英訳","和訳","言い換え","リライト","敬語","トーン","推敲","校正","英語","translate"],
    steps:["原文と『誰向け・どんなトーンか』を伝える。","訳文/言い換えを出させる。","硬さ・長さを微調整する。"],
    notes:["重要文書は最終確認を人がする。"],
    author:"claude-code-finder"
  },
  {
    id:"work-message",
    priority:527,
    category:"cowork",
    type:"feature",
    want:"メールやチャットの返信を下書きしたい",
    feature:"メール・Slack 文面ドラフト",
    summary:"状況と伝えたいことを渡すと、角の立たない文面を下書きしてくれます。お礼・お詫び・催促・日程調整など、書き出しに迷う場面に。",
    commands:["\"納期遅延のお詫びメールを丁寧に下書きして\"","\"この予定調整の返信を3案作って\""],
    prompt:"次のメッセージへの返信を下書きしてください\n\n相手: 【相手】\n伝えたいこと: 【要件】\n\n角が立たない言い方で、長くなりすぎないようにしてください\nトーンの違う候補を2つ出してください\n\n--- 元のメッセージ ---\n【ここに貼る】",
    aliases:["メール","返信","文面","slack","チャット","下書き","お礼","お詫び","催促","日程調整","文章作成"],
    steps:["相手・状況・伝えたい要点を渡す。","1案またはトーン違いで複数案を出させる。","自分の言葉に少し直して送る。"],
    notes:["送信前に固有名詞・日時を必ず確認する。"],
    author:"claude-code-finder"
  },
  {
    id:"work-research",
    priority:528,
    category:"cowork",
    type:"feature",
    want:"あるテーマを調べて比較・整理したい",
    feature:"リサーチ整理・比較表づくり",
    summary:"「〇〇について調べて」「A社とB社を比較して」のように頼むと、要点を整理したり比較表にまとめてくれます。企画の下調べや情報収集の叩き台に。",
    commands:["\"この3つのツールを料金と機能で比較表にして\"","\"このテーマの基本と最近の動向を整理して\""],
    prompt:"「【テーマ】」について調べて整理してください\n\n比較する観点: 【観点1】【観点2】【観点3】\n\n最後に表でまとめて、それぞれ出典のURLを付けてください\n確証が持てない情報は「要確認」と明記してください（推測で埋めないでください）",
    aliases:["リサーチ","調べる","調査","比較","比較表","情報収集","下調べ","まとめ","整理","research"],
    steps:["調べたいテーマと『何を知りたいか』を明確にする。","比較なら軸（料金/機能 等）を指定する。","出典が要る場合はWeb検索対応の環境で頼む。"],
    notes:["事実は必ず一次情報で裏取りする（AIは誤る事がある）。"],
    author:"claude-code-finder"
  },
  {
    id:"work-brainstorm",
    priority:529,
    category:"cowork",
    type:"feature",
    want:"アイデア出し・ネーミングの壁打ちをしたい",
    feature:"ブレスト相手・企画の壁打ち",
    summary:"企画の切り口、キャッチコピー、ネーミング、イベント案などを一緒に発散・整理してくれます。一人で煮詰まった時の相談相手に。",
    commands:["\"社内イベントの企画を10案、狙い付きで\"","\"この商品のキャッチコピーを5案\""],
    prompt:"「【テーマ】」について壁打ちをお願いします\n\nまず案を10個、方向性がばらけるように出してください\nありきたりな案は避けて、それぞれ一言で狙いを添えてください\n\n私が気になったものを選ぶので、そのあと一緒に深掘りします",
    aliases:["アイデア","壁打ち","ブレスト","ネーミング","企画","コピー","発想","相談","ブレインストーミング"],
    steps:["テーマ・制約・狙いを伝える。","まず数を出させる（10案など）。","良さそうな案を選んで深掘りさせる。"],
    notes:["最終判断は人がする。案は種として使う。"],
    author:"claude-code-finder"
  }

];

/* 独自カテゴリ: 上の cowork エントリ用に「コード不要・仕事で使える」を追加 */
window.CCF_CUSTOM_CATEGORIES = [
  {id:"cowork", name:"コード不要・仕事で使える", icon:"work_outline",
   description:"エンジニアでなくても、Claude に頼むだけでできる日常業務（資料・文書・表・PDF要約・議事録・翻訳・メール・リサーチ）。ブラウザ/アプリでOK。"}
];

/* 独自カテゴリを足したい場合はここに（任意・通常は不要）
 * window.CCF_CUSTOM_CATEGORIES = [
 *   {id:"ops", name:"運用・社内", icon:"groups", description:"チーム独自の運用ルールやTips。"}
 * ];
 */
