# 🔌 MCP Servers

[← README に戻る](../README.md) · 🌐 [English version](./mcp-servers.en.md)

Claude などの AI エージェントから、外部の仕様書やデータを扱えるようにする MCP サーバーです。
複数のサーバーが役割を分担してひとつの流れを作っているものは、**family** としてまとめています。

> [!NOTE]
> 公開中の MCP サーバー 13 本は、MCP SDK v2（`@modelcontextprotocol/server` 2.x）に移行しました。DTIR family と localllm-mcp は v1 のままです。

## 📄 PDF family

PDF を4つの層に分けて扱う MCP ファミリーです。仕様書を引く層、PDF の中身を読む層、真正性を検証する層、PDF を書く層で構成しています。
ISO 32000（PDF 2.0）・PDF 1.7・PDF/UA・TS 32001 系の仕様書そのものを LLM が引ける形にし、実際の PDF から読み取った内容と突き合わせられるようにしました。
全体の構成は [PDF Agent Stack サイト](https://shuji-bonji.github.io/pdf-agent-stack/ja/)と[ハブリポジトリ](https://github.com/shuji-bonji/pdf-agent-stack)で説明しています。

| MCPサーバ          | レイヤ               | 説明                                                                                                                                        | リンク                                                                                                                     |
| ------------------ | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| **pdf-spec-mcp**   | 仕様書層（正典）     | ISO 32000 系 PDF 仕様の構造化参照。セクション取得・要件抽出（shall / must）・定義参照・バージョン比較                                       | [npm](https://www.npmjs.com/package/@shuji-bonji/pdf-spec-mcp) · [GitHub](https://github.com/shuji-bonji/pdf-spec-mcp)     |
| **pdf-reader-mcp** | 実体層（観測）       | テキスト・表・タグ・フォント・署名フィールド・内部構造（オブジェクト・xref）の観測と、「それはどこに描かれているか」の位置特定（bbox）      | [npm](https://www.npmjs.com/package/@shuji-bonji/pdf-reader-mcp) · [GitHub](https://github.com/shuji-bonji/pdf-reader-mcp) |
| **pdf-verify-mcp** | 検証層（真正性・準拠性） | 電子署名の暗号学的検証・改ざん検知・PAdES ベースラインレベル観測・PDF/A / PDF/UA 検証・ISO 32000 条文検査・決定論的 4 値判定（evaluate_policy） | [npm](https://www.npmjs.com/package/@shuji-bonji/pdf-verify-mcp) · [GitHub](https://github.com/shuji-bonji/pdf-verify-mcp) |
| **pdf-writer-mcp** | 生成層（作成・編集） | text / Markdown / 表からの PDF 生成と 20 種の編集（結合・分割・注釈・しおり・フォーム・PDF/A / タグ付き宣言）。日本語フォント埋め込み対応   | [npm](https://www.npmjs.com/package/@shuji-bonji/pdf-writer-mcp) · [GitHub](https://github.com/shuji-bonji/pdf-writer-mcp) |

このファミリーをまとめて動かす Skill が2つあります（→ [Claude Skills](./claude-skills.md)）。受け取る側の [pdf-trust-skill](https://github.com/shuji-bonji/pdf-trust-skill) は「この PDF は信用してよいか」を監査して Trust Report を返し、送り出す側の [pdf-publish-skill](https://github.com/shuji-bonji/pdf-publish-skill) は書く → 読み戻す → 検証する、という順で品質を確かめてから Publish Report 付きで納品します。

| パッケージ          | 説明                                                                                                             | リンク                                                                                                                             |
| ------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| **pdf-constraints** | ISO 32000 の条文を、機械が検査できる制約の表に置き換えたデータライブラリ。pdf-verify-mcp の条文検査（validate_clauses）が使う | [npm](https://www.npmjs.com/package/@shuji-bonji/pdf-constraints) · [GitHub](https://github.com/shuji-bonji/pdf-constraints) |
| **normativepdf** 🚧 | ISO 32000 の条文と実装を1対1で対応させた TypeScript 製の PDF ライブラリ。出力が veraPDF を通ることをリリースごとに測る。pdf-writer-mcp が `pdf-lib` に任せている部分の置き換えを目指す（開発初期） | [GitHub](https://github.com/shuji-bonji/normativepdf) |

> [!NOTE]
> **pdf-reader-mcp** は「その PDF に何が入っているか」を答え、**pdf-verify-mcp** は「その PDF が本物かどうか」を答えます。
> **pdf-writer-mcp** は PDF/A や PDF/UA に準拠していると宣言する記述を書けますが、実際に準拠しているかどうかまでは保証できません。だから書いたあとに必ず pdf-verify-mcp で測ります。
> 合否の判定はコードが下し、その結果を人に説明するのが LLM の役割、という分担にしています。

> [!TIP]
> PDF を扱う MCP の多くは、テキストの抽出までで終わります。このファミリーは、PDF の仕様書そのものを検索できる形にしたうえで、実際の PDF の読み取り・検証・生成と行き来できるようにすることを目指しています。
> 電子署名の確認、PDF/UA への準拠、PDF/A の検証、品質を確かめたうえでの納品など、仕様に従っているかどうかが問われる場面を想定しています。

## 🌐 Web Spec family

Web と Internet の標準を、構造を保ったまま AI から扱えるようにする MCP ファミリーです。
IETF の RFC を扱うサーバー、W3C / WHATWG の仕様（HTML 要素・CSS プロパティ・WebIDL・PWA など）を扱うサーバー、ブラウザの実装状況（Baseline / Browser Compat Data）を扱うサーバーに分けています。
「仕様は何を要求しているか」と「いまブラウザで何が使えるか」を、同じ会話の中で突き合わせられます。

| MCPサーバ          | レイヤ               | 説明                                                                 | リンク                                                                                                                     |
| ------------------ | -------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| **rfcxml-mcp**     | IETF（仕様）         | IETF RFC（XML2RFC v3）の構造解析・要件抽出・RFC 間依存の参照         | [サイト](https://shuji-bonji.github.io/rfcxml-mcp/) · [npm](https://www.npmjs.com/package/@shuji-bonji/rfcxml-mcp) · [GitHub](https://github.com/shuji-bonji/rfcxml-mcp) |
| **w3c-mcp**        | W3C / WHATWG（仕様） | W3C / WHATWG 仕様（HTML 要素・CSS プロパティ・WebIDL・PWA 等）の参照 | [npm](https://www.npmjs.com/package/@shuji-bonji/w3c-mcp) · [GitHub](https://github.com/shuji-bonji/w3c-mcp)               |
| **web-compat-mcp** | 実装（互換性）       | Baseline / Browser Compat Data に基づくブラウザ互換性チェック        | [npm](https://www.npmjs.com/package/@shuji-bonji/web-compat-mcp) · [GitHub](https://github.com/shuji-bonji/web-compat-mcp) |

> [!TIP]
> 「仕様では MUST なのに、ブラウザではまだ Baseline に入っていない」「この RFC は別の RFC を Update している」といった食い違いを確かめたいときに、3つを同じ会話から呼び出して使います。

## 📚 houki-hub family

日本の法令・通達・行政解釈を、AI から出典付きで引けるようにする一群です。MCP サーバー、TypeScript ライブラリ、Claude Skill、ドキュメントサイトをひとそろいで提供することを目指しています。
いま引けるのは、法令は全分野（e-Gov 法令 API v2）、通達と Q&A は国税庁のものだけです。他省庁については、同じ作りの MCP サーバーを1つずつ足して広げていきます。
全体の構成は [houki-hub サイト](https://shuji-bonji.github.io/houki-hub/)（2026-09-08 公開）と[ハブリポジトリ](https://github.com/shuji-bonji/houki-hub)で説明しています。

| MCPサーバ          | 説明                                                                                                     | リンク                                                                                                                     |
| ------------------ | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| **houki-egov-mcp** | e-Gov 法令API v2 経由で憲法・法律・政令・省令・規則の本文／目次／改正履歴を取得                          | [npm](https://www.npmjs.com/package/@shuji-bonji/houki-egov-mcp) · [GitHub](https://github.com/shuji-bonji/houki-egov-mcp) |
| **houki-nta-mcp**  | 国税庁の基本通達・改正通達・事務運営指針・文書回答事例・Q&A・タックスアンサーを SQLite + FTS5 で全文検索 | [npm](https://www.npmjs.com/package/@shuji-bonji/houki-nta-mcp) · [GitHub](https://github.com/shuji-bonji/houki-nta-mcp)   |

| スキル                   | 説明                                                                                                                                      | リンク                                                        |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| **houki-research-skill** | houki-hub の MCP サーバーを横断して法令を調べる Skill。法律 → 政令 → 省令 → 通達 → PDF → 判例という参照の順序と、業務独占資格の範囲への配慮を組み込んでいる | [GitHub](https://github.com/shuji-bonji/houki-research-skill) |

| パッケージ              | 説明                                                                                      | リンク                                                                                                                               |
| ----------------------- | ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| **houki-abbreviations** | 日本の法令略称・通称の共有辞書（174 エントリ・6 分野）。houki-hub MCP family が共通で利用 | [npm](https://www.npmjs.com/package/@shuji-bonji/houki-abbreviations) · [GitHub](https://github.com/shuji-bonji/houki-abbreviations) |

## 🌍 DTIR family

複数の言語が混ざった文書を、書式・改ページ・画像の配置を崩さずに翻訳するパイプラインです。
1つの `.docx` の中に複数の言語が混在していても、reader → translate → 品質評価 → writer の順に処理して、ひとつの言語に揃えます。各 MCP は **DTIR**（Document Translation Intermediate Representation）という共通の中間表現をやり取りします。

| パッケージ                     | レイヤ       | 説明                                                                                        | リンク                                                              |
| ------------------------------ | ------------ | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| **doc-translation-ir**         | 契約（IR）   | 共通の中間表現 DTIR の設計書・型定義・JSON Schema（v0.1）                                     | [GitHub](https://github.com/shuji-bonji/doc-translation-ir)         |
| **dtir-ooxml-reader-mcp**      | reader       | `.docx` を DTIR のセグメント表に変換。XML のタグと本文からの検出を突き合わせて言語を判定                         | [GitHub](https://github.com/shuji-bonji/dtir-ooxml-reader-mcp)      |
| **dtir-translate-mcp**         | translate    | DTIR の `translation` / `quality` を埋める。`group` ごとにまとめて処理し、翻訳エンジン（DeepL / LLM）を選ばない | [GitHub](https://github.com/shuji-bonji/dtir-translate-mcp)         |
| **dtir-ooxml-writer-mcp**      | writer       | 翻訳済みの DTIR を `id` ごとに原本へ書き戻し、翻訳版の `.docx` を出力                         | [GitHub](https://github.com/shuji-bonji/dtir-ooxml-writer-mcp)      |
| **dtir-docx-pipeline**         | pipeline     | reader → translate → writer を通しで実行する一式                              | [GitHub](https://github.com/shuji-bonji/dtir-docx-pipeline)         |
| **local-llm-on-mac**           | 支援（環境） | Mac 上のローカル LLM 実行環境（translate のローカルエンジン用）🚧 構築中                    | [GitHub](https://github.com/shuji-bonji/local-llm-on-mac) |

## 🧰 Other MCP servers

ファミリーに属さない、単独の MCP サーバーです。

**特定分野向け** — その分野の仕様やデータセットを、構造化した形で提供します。

| MCPサーバ        | カテゴリ    | 説明                                             | リンク                                                                                                                 |
| ---------------- | ----------- | ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| **epsg-mcp**     | 地理空間    | EPSG 測地系（CRS）検索・変換推奨                 | [npm](https://www.npmjs.com/package/@shuji-bonji/epsg-mcp) · [GitHub](https://github.com/shuji-bonji/epsg-mcp)         |
| **ifc-core-mcp** | 建築（BIM） | IFC 4.3 エンティティ・継承関係・PropertySet 参照 | [npm](https://www.npmjs.com/package/@shuji-bonji/ifc-core-mcp) · [GitHub](https://github.com/shuji-bonji/ifc-core-mcp) |

**品質評価・開発支援** — 翻訳品質の評価と、RxJS の開発支援です。xcomet-mcp-server だけは npm のスコープが付かない名前で公開しています。

| MCPサーバ             | カテゴリ      | 説明                                        | リンク                                                                                                                |
| --------------------- | ------------- | ------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| **xcomet-mcp-server** | 翻訳品質評価  | xCOMET による機械翻訳の品質評価・エラー検出 | [npm](https://www.npmjs.com/package/xcomet-mcp-server) · [GitHub](https://github.com/shuji-bonji/xcomet-mcp-server)   |
| **rxjs-mcp-server**   | RxJS 開発支援 | RxJS ストリームの実行・デバッグ・可視化     | [npm](https://www.npmjs.com/package/@shuji-bonji/rxjs-mcp) · [GitHub](https://github.com/shuji-bonji/rxjs-mcp-server) |

---

[← README に戻る](../README.md)
