# upwork-radar

Upwork の案件を **収集 → 選別 → 通知 → 提案文の下書き** まで自動化する。
**送信はしない。** 下書きを読んで直して Upwork の画面から送るのは人間の仕事。

## なぜ送信まで自動化しないのか

Upwork は完全自動の提案送信を規約で明確に禁止している。禁止されているのは:

- 人間が「送信」を押さずに提案を出すこと（自動入札 / オートビッダー）
- Selenium・Puppeteer 等で応募フローを操作すること
- ジョブフィードやクライアント情報の一括スクレイピング

違反した場合は警告なしの永久停止・契約の停止・出金の保留で、実質的に異議申立ての
手段がない。一方 **「AI が下書きを作り、人間がレビューして送信する」は明示的に
許可されている**（[Upwork Help: Use bots and other automation properly](https://support.upwork.com/hc/en-us/articles/43342677368467-Use-bots-and-other-automation-properly)）。

このツールはその線の内側だけを自動化する。公式 GraphQL API にもそもそも提案を
送る口は存在しない。`tests/test_no_submission.py` が、送信系の操作やブラウザ自動化
ライブラリが混入していないことを CI で検査し続ける。

**稼げるかどうかを決めるのは納品の質であって、応募の速さではない。** このツールが
短縮するのは「探す」「選ぶ」「書き出す」の時間だけで、それ以上のことはしない。

## できること

```
収集元 (差し替え可能)          正規化        選別            出力
┌─────────────────┐
│ gmail  アラートメール │──┐
│ api    公式 GraphQL  │──┼──▶  Job  ──▶ hard filter ──▶ 通知 (Slack / Markdown)
│ eml    .eml ファイル  │──┤            + 重み付けスコア     +
│ local  手貼り JSON   │──┘                              提案文の下書き (Claude)
└─────────────────┘                                      ↓
                                                    人間が読んで送信
```

- **収集元は差し替え可能**。API キーの承認待ちの間は Gmail だけで回り、承認後は
  `--source api` を足すだけで移行が終わる。使えない収集元は自動で飛ばす。
- **選別は LLM を使わない**。同じ入力なら必ず同じ点が出て、理由が全部言語化される。
- **LLM を使うのは提案文の下書きだけ**。プロフィールに書いていない実績は生成しない。

## 収集元の選び方

| 収集元 | 前提 | 遅延 | 取れる情報 |
|---|---|---|---|
| `gmail` | Gmail のアプリパスワード | 20分〜2時間 | 題名・予算・国・応募者数・決済確認（メールに載る範囲） |
| `api` | Upwork API キー（申請制・約1週間） | ほぼリアルタイム | 上記＋クライアント累計支出・評価・スキルタグ |
| `eml` | `.eml` を手で置く | — | `gmail` と同じ（オフライン検証用） |
| `local` | `jobs.json` を手で書く | — | 書いた分だけ（スコアリングの調整用） |

RSS フィードは 2024-08-20 に廃止済みで選択肢に入らない
（[RSS deprecation](https://support.upwork.com/hc/en-us/articles/52052528243731-RSS-deprecation)）。

## セットアップ

```bash
python3 -m pip install -e ".[draft]"     # 下書き生成に anthropic SDK を使う場合
cp config/profile.example.toml config/profile.toml
cp config/filters.example.toml config/filters.toml
$EDITOR config/profile.toml config/filters.toml
```

`config/profile.toml` に書いた事実だけが提案文に使われる。書いていない実績は
生成されない — 足りなければ下書きの「Needs your input」に出る。

### gmail 収集元

1. Upwork で検索条件を保存し、メール通知を有効にする
2. Google アカウントで**アプリパスワード**を発行する（通常のパスワードでは IMAP に入れない）
3. 環境変数を設定する:

```bash
export UPWORK_RADAR_IMAP_USER='you@gmail.com'
export UPWORK_RADAR_IMAP_PASSWORD='xxxx xxxx xxxx xxxx'   # アプリパスワード
# 任意: UPWORK_RADAR_IMAP_HOST (既定 imap.gmail.com) / UPWORK_RADAR_IMAP_MAILBOX (既定 INBOX)
```

IMAP は必ず readonly で開く。既読フラグを含め、メールボックスを一切変更しない。

### api 収集元

1. [Upwork に API キーを申請](https://support.upwork.com/hc/en-us/articles/115015857647-How-to-request-an-API-key-from-Upwork)する（回答まで約1週間）
2. 認可コードフローでリフレッシュトークンを取得する
3. 環境変数を設定する:

```bash
export UPWORK_CLIENT_ID='...' UPWORK_CLIENT_SECRET='...' UPWORK_REFRESH_TOKEN='...'
export UPWORK_SEARCH_QUERY='python airflow'
```

**初回実行の前に** `config/upwork_query.example.graphql` を
`config/upwork_query.graphql` にコピーし、Upwork の GQL Explorer でクエリが通ることを
確認する。GraphQL のスキーマは変わることがあり、承認済みキーがないと検証できない。
フィールド名が違えばこのファイルを直すだけでよく、コードには触らない
（マッパは欠けたフィールドを「不明」として扱う）。

### 下書き生成

```bash
export ANTHROPIC_API_KEY='sk-ant-...'
```

未設定なら下書きは雛形（見出しだけ）になり、他の機能はそのまま動く。

## 使い方

```bash
upwork-radar sources                    # 収集元と資格情報の状況
upwork-radar run --dry-run -v           # 保存も通知もせず、選別結果だけ見る
upwork-radar run                        # 収集 → 選別 → 保存 → 通知 → 下書き
upwork-radar run --source gmail --source api
upwork-radar list                       # 保存済みの案件
upwork-radar draft '~021...'            # 指定案件の下書きを作り直す
```

まずは `--dry-run` でフィルタを詰めるのがよい。`config/filters.toml` の
`[hard]` を緩めすぎると通知がノイズになり、締めすぎると何も来なくなる。

Slack に流す場合:

```bash
export UPWORK_RADAR_SLACK_WEBHOOK='https://hooks.slack.com/services/...'
```

新着が無ければ何も送らない。

## スコアリングの仕組み

**1. hard filter** — 1 つでも違反したら即除外。スコアは計算しない。
除外理由は全部記録されるので、`--dry-run` で「なぜ落ちたか」が読める。

**2. 重み付けスコア** — 5 つの部分点を 0..1 で出し、重みで合成して 0..100 にする。

| 部分点 | 何を見るか |
|---|---|
| `skill_match` | プロフィールのスキルとの一致（**題名に出たものは本文だけの一致の 2 倍**） |
| `budget` | `[targets]` の水準に対する比。時給案件と固定案件は別々の目標と比べる |
| `client_quality` | 決済確認・累計支出（対数）・評価の平均 |
| `competition` | 応募者数が少ないほど高い |
| `recency` | 掲載直後が満点、`recency_hours` で 0 |

**情報が無い項目は 0 点ではなく中立 (0.5) にする。** Gmail のアラートメールには
クライアントの支出履歴が載らないので、0 にすると「メール由来の案件が一律で沈む」
という壊れ方をする。不明だったことは理由欄に明記される。

## 開発

```bash
python3 -m pip install -e ".[dev]"
python3 -m pytest -q
```

`tests/test_no_submission.py` は、送信系の操作名とブラウザ自動化ライブラリが
パッケージに入り込んでいないことを毎回検査する。ここを緑に保つこと。

## 制約

- Gmail 経由は Upwork のバッチ送信に依存するので 20 分〜2 時間遅れる。速さで勝ちたい
  案件には向かない。API キーが下りるまでの繋ぎと考える。
- アラートメールの HTML 構造は Upwork 側の都合で変わる。パーサは壊れたときに
  **推測で埋めず 0 件を返す**設計なので、`run -v` の取得件数が急に 0 になったら
  パーサを疑う。
- `api` 収集元の GraphQL クエリは承認済みキーがないと検証できない。同梱のクエリは
  公式ドキュメント準拠だが、初回は必ず GQL Explorer で通してから使う。
