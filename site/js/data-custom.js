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
  }

];

/* 独自カテゴリを足したい場合はここに（任意・通常は不要）
 * window.CCF_CUSTOM_CATEGORIES = [
 *   {id:"ops", name:"運用・社内", icon:"groups", description:"チーム独自の運用ルールやTips。"}
 * ];
 */
