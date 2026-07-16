/* スポンサー設定 — ここに ID を書くだけで有効化される (未設定なら何も起きない)
 *
 * 有効化手順:
 *  1. Amazonアソシエイト承認後: AMAZON_TAG にトラッキングID (例 "ry071702-22") を設定
 *     → 本棚リンクに ?tag= が自動付与され、アソシエイト開示文が表示される
 *  2. AdSense 承認後: ADSENSE.client / ADSENSE.slot を設定
 *     → 本棚セクション下に広告スロットが1枠だけ描画される (未設定時は DOM ごと非表示)
 *
 * SHELF_ITEMS は 2026-07-16 に Web 調査で実在確認済みの書籍 (出版社ページ等 複数ソース照合)。
 * title は表示用に短縮している場合がある (正式名は desc やリンク先参照)。
 * tag 付与は sponsors.js が amazon.co.jp の URL にだけ自動で行う。
 */
const SPONSOR_CONFIG = {
  AMAZON_TAG: "",           // 例: "ry071702-22"  未設定 = リンクは素の Amazon リンク
  ADSENSE: {
    client: "",             // 例: "ca-pub-XXXXXXXXXXXXXXXX"
    slot: "",               // 例: "1234567890"
  },
};

const SHELF_ITEMS = [
  {
    icon: "menu_book",
    title: "Claude Codeによる<br>AI駆動開発入門",
    desc: "基礎からWebアプリ構築までハンズオンで学ぶ実践書 (技術評論社)",
    href: "https://www.amazon.co.jp/dp/4297152754",
  },
  {
    icon: "psychology",
    title: "実践Claude Code入門",
    desc: "スペック駆動開発でLLM時代のエンジニアリングを体系化 (技術評論社)",
    href: "https://www.amazon.co.jp/dp/4297153548",
  },
  {
    icon: "speed",
    title: "Claude Code 実用入門",
    desc: "初歩から迷わず始められる定番入門 (マイナビ出版)",
    href: "https://www.amazon.co.jp/dp/4839990204",
  },
  {
    icon: "smart_toy",
    title: "RAG・AIエージェント<br>実践入門",
    desc: "LangChain/LangGraphでRAGからエージェント設計まで (技術評論社)",
    href: "https://www.amazon.co.jp/dp/4297145308",
  },
  {
    icon: "settings_suggest",
    title: "AIエージェント<br>開発／運用入門",
    desc: "LangGraphやMCP、運用 (LLMOps) まで現場目線で (SBクリエイティブ)",
    href: "https://www.amazon.co.jp/dp/4815636605",
  },
  {
    icon: "edit_note",
    title: "プロンプト<br>エンジニアリング",
    desc: "生成AIに通用し続ける普遍的な入力原則 (オライリー)",
    href: "https://www.amazon.co.jp/dp/4814401248",
  },
];
