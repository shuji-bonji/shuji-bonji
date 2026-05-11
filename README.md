# shuji-bonji

🌐 [English version (README.en.md)](./README.en.md)

**TypeScript / Node.js で構造化ツールをつくる開発者**。AI エージェントが信頼できる仕様ドキュメントや開発者ワークフローにアクセスできるようにすることに重点を置いています。

## 🛠 Tech Stack

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=flat&logo=sass&logoColor=white)
![C#](https://img.shields.io/badge/C%23-512BD4?style=flat&logo=c-sharp&logoColor=white)
![Angular](https://img.shields.io/badge/Angular-DD0031?style=flat&logo=angular&logoColor=white)
![RxJS](https://img.shields.io/badge/RxJS-B7178C?style=flat&logo=reactivex&logoColor=white)
![NgRx](https://img.shields.io/badge/NgRx-BA2BD2?style=flat&logo=ngrx&logoColor=white)
![Svelte](https://img.shields.io/badge/Svelte-FF3E00?style=flat&logo=svelte&logoColor=white)
![SvelteKit](https://img.shields.io/badge/SvelteKit-FF3E00?style=flat&logo=svelte&logoColor=white)
![PWA](https://img.shields.io/badge/PWA-5A0FC8?style=flat&logo=pwa&logoColor=white)
![Jasmine](https://img.shields.io/badge/Jasmine-8A4182?style=flat&logo=jasmine&logoColor=white)
![Vitest](https://img.shields.io/badge/Vitest-6E9F18?style=flat&logo=vitest&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)
![Claude](https://img.shields.io/badge/Claude-D97757?style=flat&logo=anthropic&logoColor=white)
![Skills](https://img.shields.io/badge/Skills-Claude%20Skills-D97757?style=flat)
![GitHub Copilot](https://img.shields.io/badge/GitHub%20Copilot-000000?style=flat&logo=githubcopilot&logoColor=white)
![MCP](https://img.shields.io/badge/MCP-Model%20Context%20Protocol-000000?style=flat)

## 🤖 AI-Assisted Development Guide

AI エージェント（Claude / Claude Code / GitHub Copilot 等）と協働して開発を進めるためのワークフロー・ノウハウをまとめています。

- **設計指向**：AIに「何をどう作るか」を判断させすぎず、人間が仕様・アーキテクチャの責任を持つ
- **構造化ドキュメント**：MCP / Skill / 仕様書を、AI が読み解きやすい形で整備する
- **検証ループ**：プロンプト → 出力 → 仕様書チェック → 修正、を高速に回す

| Phase | プロジェクト                                    | 説明                                                                                                                                                 | リンク                                                                                                                                                           |
| :---: | :---------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   1   | **understanding-llm-through-claude-code**       | LLM の構造的制約を理解し、Claude Code の設計思想から「なぜそう設定するのか」を学ぶ                                                                   | [Site](https://shuji-bonji.github.io/understanding-llm-through-claude-code/ja/) · [GitHub](https://github.com/shuji-bonji/understanding-llm-through-claude-code) |
|   2   | **ai-agent-architecture**                       | MCP・Skills・Agent 統合の設計思想・アーキテクチャ・実践ノウハウ                                                                                      | [Site](https://shuji-bonji.github.io/ai-agent-architecture/ja/) · [GitHub](https://github.com/shuji-bonji/ai-agent-architecture)                                 |
|   3   | **Management-of-software-systems-and-services** | 先人達が培ってきた[ソフトウェアシステム・サービス開発・管理](https://github.com/shuji-bonji/Management-of-software-systems-and-services)へ AI を適用 | <!-- [GitHub](https://github.com/shuji-bonji/Management-of-software-systems-and-services) -->                                                                    |

<!--
> [!NOTE]
> ソフトウェア開発におけるAI活用は、関わる立場・役割によって大きく異なります。
> まずは、既存のソフトウェアへの人の関与に関する、9つの視点を整理しています。
> これにどのようにAIが関与していけば良いか？単純に当てはまるのではく、まるっきり変わってくることも含めて、確認して行こうと思います。
> - [ソフトウェアシステム・サービスのマネジメント](https://github.com/shuji-bonji/Management-of-software-systems-and-services)
-->

## 📦 Claude Plugins (Marketplace)

自作の MCP / Skill / Slash Command / Sub-agent を Claude Code・Cowork から `/plugin install` で導入できる marketplace。Anthropic 公式 ([`anthropics/claude-plugins-official`](https://github.com/anthropics/claude-plugins-official)) と同じ form factor。

| Marketplace                    | 説明                                                                                                          | リンク                                                  |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| **shuji-bonji/claude-plugins** | shuji-bonji 製 plugin の catalog（houki / web-spec / quality-tools / domain-specific / dev-meta の5カテゴリ） | [GitHub](https://github.com/shuji-bonji/claude-plugins) |

### インストール

```bash
# Claude Code
/plugin marketplace add shuji-bonji/claude-plugins
/plugin install houki-research@shuji-bonji
```

Cowork mode の場合、Settings → Plugins に `https://github.com/shuji-bonji/claude-plugins` を marketplace として追加。

### 収録 plugin

| Plugin             | カテゴリ | 状態      | リンク                                                        |
| ------------------ | -------- | --------- | ------------------------------------------------------------- |
| **houki-research** | houki    | ✅ v0.1.0 | [GitHub](https://github.com/shuji-bonji/houki-research-skill) |

収録予定 plugin（19件、🚧 計画中）の一覧は [marketplace の README](https://github.com/shuji-bonji/claude-plugins#収録予定-plugin-計画中) を参照してください。

## 🔌 MCP Servers

AI エージェント（Claude 等）から外部仕様・データを扱えるようにする MCP サーバ群

| MCPサーバ             | カテゴリ     | 説明                                             | リンク                                                                                                                     |
| --------------------- | ------------ | ------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------- |
| **rfcxml-mcp**        | 標準・仕様   | IETF RFC（XML2RFC v3）の構造解析・要件抽出       | [npm](https://www.npmjs.com/package/@shuji-bonji/rfcxml-mcp) · [GitHub](https://github.com/shuji-bonji/rfcxml-mcp)         |
| **pdf-spec-mcp**      | 標準・仕様   | PDF 仕様（ISO 32000 系）の構造化参照             | [npm](https://www.npmjs.com/package/@shuji-bonji/pdf-spec-mcp) · [GitHub](https://github.com/shuji-bonji/pdf-spec-mcp)     |
| **w3c-mcp**           | 標準・仕様   | W3C / WHATWG Web 標準(HTML / CSS / WebIDL 等)    | [npm](https://www.npmjs.com/package/@shuji-bonji/w3c-mcp) · [GitHub](https://github.com/shuji-bonji/w3c-mcp)               |
| **web-compat-mcp**    | 標準・仕様   | Web 互換性（Baseline / BCD）チェック             | [npm](https://www.npmjs.com/package/@shuji-bonji/web-compat-mcp) · [GitHub](https://github.com/shuji-bonji/web-compat-mcp) |
| **pdf-reader-mcp**    | ファイル処理 | PDF テキスト・表・署名・タグ抽出                 | [npm](https://www.npmjs.com/package/@shuji-bonji/pdf-reader-mcp) · [GitHub](https://github.com/shuji-bonji/pdf-reader-mcp) |
| **epsg-mcp**          | 地理空間     | EPSG 測地系（CRS）検索・変換推奨                 | [npm](https://www.npmjs.com/package/@shuji-bonji/epsg-mcp) · [GitHub](https://github.com/shuji-bonji/epsg-mcp)             |
| **ifc-core-mcp**      | 建築 (BIM)   | IFC 4.3 エンティティ・継承関係・PropertySet 参照 | [npm](https://www.npmjs.com/package/@shuji-bonji/ifc-core-mcp) · [GitHub](https://github.com/shuji-bonji/ifc-core-mcp)     |
| **xcomet-mcp-server** | 翻訳評価     | xCOMET による機械翻訳の品質評価・エラー検出      | [npm](https://www.npmjs.com/package/xcomet-mcp-server) · [GitHub](https://github.com/shuji-bonji/xcomet-mcp-server)        |
| **rxjs-mcp-server**   | 開発支援     | RxJS ストリームの実行・デバッグ・可視化          | [npm](https://www.npmjs.com/package/rxjs-mcp-server) · [GitHub](https://github.com/shuji-bonji/rxjs-mcp-server)            |

## 🧩 Claude Skills

Claude / Claude Code から呼び出して、特定領域の作業ワークフローを再利用するための Skill

| スキル                         | 説明                                                                                         | リンク                                                              |
| ------------------------------ | -------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| **deepl-glossary-translation** | PDF仕様書翻訳ワークフロー（DeepL＋用語集）                                                   | [GitHub](https://github.com/shuji-bonji/deepl-glossary-translation) |
| **spec-compliance-skills**     | W3C/IETF仕様への準拠性をチェックするためのCoworkプラグイン                                   | [GitHub](https://github.com/shuji-bonji/spec-compliance-skills/)    |
| **factcheck-skill**            | 情報の信頼性を科学的・体系的に評価する、Claude Code / Cowork 用ファクトチェック・スキル      | [GitHub](https://github.com/shuji-bonji/factcheck-skill)            |
| **media-literacycheck-skill**  | インターネット上の情報の信頼性を メディアリテラシー の観点から体系的に評価する、LLM 用スキル | [GitHub](https://github.com/shuji-bonji/media-literacycheck-skill)  |

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

## 📱 Web Apps & Tools

実用ツール・自作プロダクト群

| プロジェクト                  | 説明                                                      | リンク                                                                                                                                           |
| ----------------------------- | --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| **e-shiwake**                 | フリーランス・個人事業主向けの仕訳帳 + 証憑管理 PWAアプリ | [📱 App](https://shuji-bonji.github.io/e-shiwake/) · [GitHub](https://github.com/shuji-bonji/e-shiwake)                                          |
| **e-shiwake-ai**              | AIエージェントをフロントエンドとして利用した、e-shiwake   | [GitHub](https://github.com/shuji-bonji/e-shiwake-ai)                                                                                            |
| **fact-checklist**            | 事実確認チェックシート — 情報の信頼性を評価するPWAアプリ  | [📱 App](https://fact-checklist.vercel.app) · [GitHub](https://github.com/shuji-bonji/fact-checklist)                                            |
| **websocket-practical-guide** | WebSocket 実践ガイド — リアルタイムWebアプリ実践PWA       | 工事中🏗️ [📱 App](https://shuji-bonji.github.io/websocket-practical-guide/) · [GitHub](https://github.com/shuji-bonji/websocket-practical-guide) |
| **marble-to-svg**             | RxJS マーブル記法 → SVG 変換ツール                        | [🔧 Tool](https://shuji-bonji.github.io/marble-to-svg/) · [GitHub](https://github.com/shuji-bonji/marble-to-svg)                                 |
| **WebAPI Test Tool**          | Step CI を利用した WebAPI テスト実行ツール                | [GitHub](https://github.com/shuji-bonji/WebAPI-Test-Execution-Tool-using-Step-CI-runner)                                                         |

## 📖 Learning Sites & Notes

学習中・整備中のドキュメントサイト／公開ノート

| サイト                                | リンク                                                                                                                                                                   |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| TypeScriptで学ぶ Svelte 5 / SvelteKit | [📖 Site](https://shuji-bonji.github.io/Svelte-and-SvelteKit-with-TypeScript/) · [GitHub](https://github.com/shuji-bonji/Svelte-and-SvelteKit-with-TypeScript)           |
| TypeScript で RxJS                    | [📖 Site](https://shuji-bonji.github.io/RxJS-with-TypeScript/) · [GitHub](https://github.com/shuji-bonji/RxJS-with-TypeScript)                                           |
| TypeScript で Web Components          | [📖 Site](https://shuji-bonji.github.io/WebComponents-with-TypeScript/) · [GitHub](https://github.com/shuji-bonji/WebComponents-with-TypeScript)                         |
| TypeScriptで学ぶ SOLID設計原則        | [📖 Site](https://shuji-bonji.github.io/Notes-on-SOLID-Principle/) · [GitHub](https://github.com/shuji-bonji/Notes-on-SOLID-Principle)                                   |
| TypeScript で テスト駆動開発(TDD)     | [📖 Site](https://shuji-bonji.github.io/Notes-on-Test-Driven-Development/) · [GitHub](https://github.com/shuji-bonji/Notes-on-Test-Driven-Development)                   |
| 状況認識と意思決定                    | [📖 Site](https://shuji-bonji.github.io/Situational-Awareness-and-Decision-Making/) · [GitHub](https://github.com/shuji-bonji/Situational-Awareness-and-Decision-Making) |

<details>
<summary>📓 その他のノート・テンプレート</summary>

- [ソフトウェアシステム・サービスのマネジメント](https://github.com/shuji-bonji/Management-of-software-systems-and-services)
- [デジタル署名ノート](https://github.com/shuji-bonji/Notes-about-Digital-Signatures-and-Timestamps)
- [PWAノート](https://github.com/shuji-bonji/Notes-on-PWA)
- [デザインパターンノート](https://github.com/shuji-bonji/Notes-about-Design-Patterns)
- [現実世界の自動化における課題](https://github.com/shuji-bonji/Real-World-Automation-Challenges)
- [rxjs-with-typescript-starter-kit](https://github.com/shuji-bonji/rxjs-with-typescript-starter-kit)
- [typescript-webcomponents-starter-kit](https://github.com/shuji-bonji/typescript-webcomponents-starter-kit)

</details>

## 🏠 記念碑

<details>
<summary>僕のプログラミングの原点</summary>

[履歴書作成アプリ](https://github.com/shuji-bonji/resume_editting) — 2021年、JavaScriptを学び初めて作ったWebアプリ。ソースは今見るととても恥ずかしいですが、ここが僕にとってスタート地点です。

</details>

## 📬 Contact

[![GitHub](https://img.shields.io/badge/GitHub-shuji--bonji-181717?style=flat&logo=github&logoColor=white)](https://github.com/shuji-bonji)
[![npm](https://img.shields.io/badge/npm-shuji--bonji-CB3837?style=flat&logo=npm&logoColor=white)](https://www.npmjs.com/~shuji-bonji)
[![Qiita](https://img.shields.io/badge/Qiita-shuji--bonji-55C500?style=flat&logo=qiita&logoColor=white)](https://qiita.com/shuji-bonji)
[![Zenn](https://img.shields.io/badge/Zenn-shuji__bonji-3EA8FF?style=flat&logo=zenn&logoColor=white)](https://zenn.dev/shuji_bonji)
