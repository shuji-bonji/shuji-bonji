# 🔌 MCP Servers

[← README に戻る](../README.md) · 🌐 [English version](./mcp-servers.en.md)

AI エージェント（Claude 等）から外部仕様・データを扱えるようにする MCP サーバ群。
ドメイン横断で物語性のあるものは **family** として独立した見出しでまとめています。

## 📄 PDF family

**PDF を「正典 × 実体 × 真正性 × 生成」の四層で扱う MCP ファミリー**。読む・検証する・書く・仕様で裏付ける。
ISO 32000（PDF 2.0）/ PDF 1.7 / PDF/UA / TS 32001 系などの **仕様書そのものを構造化正典として LLM に提供する層**、PDF の **中身と位置（テキスト・表・タグ構造・bbox）を観測する層**、**電子署名・改ざん・規格準拠を判定する層**、そして **仕様を意識して PDF を生成・編集する層** で構成します。
全体像は **[PDF Agent Stack サイト](https://shuji-bonji.github.io/pdf-agent-stack/ja/)** ・ [ハブリポジトリ](https://github.com/shuji-bonji/pdf-agent-stack) を参照。

| MCPサーバ          | レイヤ               | 説明                                                                                                                                        | リンク                                                                                                                     |
| ------------------ | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| **pdf-spec-mcp**   | 仕様書層（正典）     | ISO 32000 系 PDF 仕様の構造化参照。セクション取得・要件抽出（shall / must）・定義参照・バージョン比較                                       | [npm](https://www.npmjs.com/package/@shuji-bonji/pdf-spec-mcp) · [GitHub](https://github.com/shuji-bonji/pdf-spec-mcp)     |
| **pdf-reader-mcp** | 実体層（観測）       | テキスト・表・タグ・フォント・署名フィールド・内部構造（オブジェクト・xref）の観測と、「それはどこに描かれているか」の位置特定（bbox）      | [npm](https://www.npmjs.com/package/@shuji-bonji/pdf-reader-mcp) · [GitHub](https://github.com/shuji-bonji/pdf-reader-mcp) |
| **pdf-verify-mcp** | 検証層（真正性・準拠性） | 電子署名の暗号学的検証・改ざん検知・PAdES ベースラインレベル観測・PDF/A / PDF/UA 検証・ISO 32000 条文検査・決定論的 4 値判定（evaluate_policy） | [npm](https://www.npmjs.com/package/@shuji-bonji/pdf-verify-mcp) · [GitHub](https://github.com/shuji-bonji/pdf-verify-mcp) |
| **pdf-writer-mcp** | 生成層（作成・編集） | text / Markdown / 表からの PDF 生成と 20 種の編集（結合・分割・注釈・しおり・フォーム・PDF/A / タグ付き宣言）。日本語フォント埋め込み対応   | [npm](https://www.npmjs.com/package/@shuji-bonji/pdf-writer-mcp) · [GitHub](https://github.com/shuji-bonji/pdf-writer-mcp) |

このファミリーを編成する Skill が 2 つあります（→ [Claude Skills](./claude-skills.md)）: 入口の [pdf-trust-skill](https://github.com/shuji-bonji/pdf-trust-skill)（受入監査 — 「この PDF は信用できるか」を監査し Trust Report を返す）と、出口の [pdf-publish-skill](https://github.com/shuji-bonji/pdf-publish-skill)（納品 — write → read-back → verify の品質ゲートを回し Publish Report 付きで納品する）。

| パッケージ          | 説明                                                                                                             | リンク                                                                                                                             |
| ------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| **pdf-constraints** | ISO 32000 条文を機械検査可能な制約テーブルへ写像したデータライブラリ。pdf-verify-mcp の条文検査（validate_clauses）が利用 | [npm](https://www.npmjs.com/package/@shuji-bonji/pdf-constraints) · [GitHub](https://github.com/shuji-bonji/pdf-constraints) |

> [!NOTE]
> **pdf-reader-mcp** が「PDF に _何が入っているか_」を答えるのに対し、**pdf-verify-mcp** は「その PDF が _本物かどうか_」を答えます。そして **pdf-writer-mcp** は「宣言は書けるが準拠は作れない」— 書いたら必ず verify で測る、という分業がファミリーの設計思想です（ジャッジはコード、ナラティブは LLM）。

> [!TIP]
> 多くの PDF 系 MCP が「テキストを抜く」抽出ツールに留まる中、本ファミリーは **PDF 仕様書を一次資料としてクエリ可能な状態に正典化し、実体観測・真正性検証・生成と双方向に参照する** ことを目的としています。電子署名・PDF/UA 準拠・PDF/A 検証・品質ゲート付き納品など、仕様準拠が問われるユースケース向け。

## 🌐 Web Spec family

**Web / Internet 標準を AI から構造化されたまま扱うための MCP ファミリー**。
IETF（RFC）・W3C / WHATWG（HTML / CSS / WebIDL / PWA 等）の **仕様書側** と、ブラウザ実装の **互換性データ（Baseline / BCD）** を、それぞれ専用 MCP として分離し、「仕様で何が要求されているか」と「いまブラウザで何が使えるか」を同じ会話の中で照合できるようにしています。

| MCPサーバ          | レイヤ               | 説明                                                                 | リンク                                                                                                                     |
| ------------------ | -------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| **rfcxml-mcp**     | IETF（仕様）         | IETF RFC（XML2RFC v3）の構造解析・要件抽出・RFC 間依存の参照         | [npm](https://www.npmjs.com/package/@shuji-bonji/rfcxml-mcp) · [GitHub](https://github.com/shuji-bonji/rfcxml-mcp)         |
| **w3c-mcp**        | W3C / WHATWG（仕様） | W3C / WHATWG 仕様（HTML 要素・CSS プロパティ・WebIDL・PWA 等）の参照 | [npm](https://www.npmjs.com/package/@shuji-bonji/w3c-mcp) · [GitHub](https://github.com/shuji-bonji/w3c-mcp)               |
| **web-compat-mcp** | 実装（互換性）       | Baseline / Browser Compat Data に基づくブラウザ互換性チェック        | [npm](https://www.npmjs.com/package/@shuji-bonji/web-compat-mcp) · [GitHub](https://github.com/shuji-bonji/web-compat-mcp) |

> [!TIP]
> 「仕様では MUST なのに、現実のブラウザでは Baseline 入りしていない」「この RFC は別の RFC を Update している」といった、**仕様 × 実装** の不一致を AI に検証させたいときに、3 件を同じ会話から呼び出して使うことを想定しています。

## 📚 houki-hub family

**法令・通達・実務情報を AI で扱うための統合エコシステム**。
MCP サーバ、TypeScript ライブラリ、Claude Skill、ドキュメントサイトをワンセットで提供することを目指しています。

| MCPサーバ          | 説明                                                                                                     | リンク                                                                                                                     |
| ------------------ | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| **houki-egov-mcp** | e-Gov 法令API v2 経由で憲法・法律・政令・省令・規則の本文／目次／改正履歴を取得                          | [npm](https://www.npmjs.com/package/@shuji-bonji/houki-egov-mcp) · [GitHub](https://github.com/shuji-bonji/houki-egov-mcp) |
| **houki-nta-mcp**  | 国税庁の基本通達・改正通達・事務運営指針・文書回答事例・Q&A・タックスアンサーを SQLite + FTS5 で全文検索 | [npm](https://www.npmjs.com/package/@shuji-bonji/houki-nta-mcp) · [GitHub](https://github.com/shuji-bonji/houki-nta-mcp)   |

| スキル                   | 説明                                                                                                                                      | リンク                                                        |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| **houki-research-skill** | houki-hub MCP family を横断する法令リサーチのオーケストレーション Skill（法律→政令→省令→通達→PDF→判例の参照順序・業法独占への配慮を内蔵） | [GitHub](https://github.com/shuji-bonji/houki-research-skill) |

| パッケージ              | 説明                                                                                      | リンク                                                                                                                               |
| ----------------------- | ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| **houki-abbreviations** | 日本の法令略称・通称の共有辞書（174 エントリ・6 分野）。houki-hub MCP family が共通で利用 | [npm](https://www.npmjs.com/package/@shuji-bonji/houki-abbreviations) · [GitHub](https://github.com/shuji-bonji/houki-abbreviations) |

## 🌍 DTIR family

**多言語混在ドキュメントを、書式・ページネーション・画像配置を壊さずに翻訳するパイプライン**。
1ファイルに複数言語が混在する `.docx` を、reader → translate → 品質評価 → writer の各段階を経て単一言語へ翻訳します。各 MCP が共有する中間表現 **DTIR**（Document Translation Intermediate Representation）を軸に構成しています。

| パッケージ                     | レイヤ       | 説明                                                                                        | リンク                                                              |
| ------------------------------ | ------------ | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| **doc-translation-ir**         | 契約（IR）   | 共有中間表現 DTIR の設計書・型定義・JSON Schema（v0.1）                                     | [GitHub](https://github.com/shuji-bonji/doc-translation-ir)         |
| **dtir-ooxml-reader-mcp**      | reader       | `.docx` を DTIR セグメント表へ変換。タグ × ローカル検出で言語を照合                         | [GitHub](https://github.com/shuji-bonji/dtir-ooxml-reader-mcp)      |
| **dtir-translate-mcp**         | translate    | DTIR の `translation` / `quality` を充填。`group` 単位バッチ、エンジン非依存（DeepL / LLM） | [GitHub](https://github.com/shuji-bonji/dtir-translate-mcp)         |
| **dtir-ooxml-writer-mcp**      | writer       | 翻訳済み DTIR から `id` 単位で原本にパッチし、翻訳版 `.docx` を生成                         | [GitHub](https://github.com/shuji-bonji/dtir-ooxml-writer-mcp)      |
| **dtir-docx-pipeline**         | pipeline     | reader → translate → writer を束ねるエンドツーエンドのハーネス                              | [GitHub](https://github.com/shuji-bonji/dtir-docx-pipeline)         |
| **local-llm-on-apple-silicon** | 支援（環境） | Apple Silicon 上のローカル LLM 実行環境（translate のローカルエンジン用）🚧 構築中          | [GitHub](https://github.com/shuji-bonji/local-llm-on-apple-silicon) |

## 🧰 Other MCP servers

ファミリーには属さない単発の MCP。

**Domain-specific** — 特定ドメインの仕様・データセットを構造化提供。

| MCPサーバ        | カテゴリ    | 説明                                             | リンク                                                                                                                 |
| ---------------- | ----------- | ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| **epsg-mcp**     | 地理空間    | EPSG 測地系（CRS）検索・変換推奨                 | [npm](https://www.npmjs.com/package/@shuji-bonji/epsg-mcp) · [GitHub](https://github.com/shuji-bonji/epsg-mcp)         |
| **ifc-core-mcp** | 建築（BIM） | IFC 4.3 エンティティ・継承関係・PropertySet 参照 | [npm](https://www.npmjs.com/package/@shuji-bonji/ifc-core-mcp) · [GitHub](https://github.com/shuji-bonji/ifc-core-mcp) |

**Quality / Dev tooling** — 品質評価・開発支援（npm スコープなし・命名揺れあり）。

| MCPサーバ             | カテゴリ      | 説明                                        | リンク                                                                                                                |
| --------------------- | ------------- | ------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| **xcomet-mcp-server** | 翻訳品質評価  | xCOMET による機械翻訳の品質評価・エラー検出 | [npm](https://www.npmjs.com/package/xcomet-mcp-server) · [GitHub](https://github.com/shuji-bonji/xcomet-mcp-server)   |
| **rxjs-mcp-server**   | RxJS 開発支援 | RxJS ストリームの実行・デバッグ・可視化     | [npm](https://www.npmjs.com/package/@shuji-bonji/rxjs-mcp) · [GitHub](https://github.com/shuji-bonji/rxjs-mcp-server) |

---

[← README に戻る](../README.md)
