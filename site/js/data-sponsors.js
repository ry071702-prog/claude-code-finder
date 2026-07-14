/* スポンサー設定 — ここに ID を書くだけで有効化される (未設定なら何も起きない)
 *
 * 有効化手順:
 *  1. Amazonアソシエイト承認後: AMAZON_TAG にトラッキングID (例 "ry071702-22") を設定
 *     → 本棚リンクに ?tag= が自動付与され、アソシエイト開示文が表示される
 *  2. AdSense 承認後: ADSENSE.client / ADSENSE.slot を設定
 *     → 本棚セクション下に広告スロットが1枠だけ描画される (未設定時は DOM ごと非表示)
 *
 * SHELF_ITEMS の href は Amazon 検索リンク (実在保証のため)。
 * 具体的な商品を推したくなったら href を商品ページ URL に差し替えるだけでよい
 * (tag 付与は sponsors.js が URL を見て自動で行う)。
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
    title: "Claude Code の本",
    desc: "実践入門・活用テクニック系  逆引きと併読すると定着が速い",
    href: "https://www.amazon.co.jp/s?k=Claude+Code+%E6%9C%AC",
  },
  {
    icon: "smart_toy",
    title: "AIエージェント開発の本",
    desc: "Subagents / MCP / Hooks の設計思想を体系的に押さえる",
    href: "https://www.amazon.co.jp/s?k=AI%E3%82%A8%E3%83%BC%E3%82%B8%E3%82%A7%E3%83%B3%E3%83%88+%E9%96%8B%E7%99%BA",
  },
  {
    icon: "edit_note",
    title: "プロンプト設計の本",
    desc: "CLAUDE.md や Skill の書き方の土台になる指示設計の基礎",
    href: "https://www.amazon.co.jp/s?k=%E3%83%97%E3%83%AD%E3%83%B3%E3%83%97%E3%83%88%E3%82%A8%E3%83%B3%E3%82%B8%E3%83%8B%E3%82%A2%E3%83%AA%E3%83%B3%E3%82%B0",
  },
];
