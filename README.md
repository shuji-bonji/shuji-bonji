# shuji-bonji

🌐 [English version (README.en.md)](./README.en.md)

**最近は、AI エージェントが仕様・法令・ドキュメントの原文を引ける MCP と Skill をつくり、その道具で動くアプリと検証器を作っています。**

フロントエンドは TypeScript / Angular / RxJS / Svelte を主に使っています。
バックエンドは TypeScript / Node.js が中心で、.NET C# で Web API を書いた経験もあります。
もともとは運用とカスタマーエンジニアを長く務め、そこから開発に移りました。
2025 年 10 月からフリーランスとして、Angular / RxJS / NgRx を使うプロジェクトに参画しています。

公開しているものは、次の6つです。

1. **動くアプリ — [e-shiwake](https://github.com/shuji-bonji/e-shiwake)**（[デモ](https://shuji-bonji.github.io/e-shiwake/)）

   個人事業主向けに、仕訳帳と証憑管理をひとつにまとめた PWA です。
   - アプリの中に LLM エージェントの組み込み
     - ユーザーの契約しているLLMを利用します
       AIチャット機能の接続先は、ローカル LLM / OpenAI / Anthropic / Gemini / Grok です。
     - 17 個のツールを素の TypeScript 関数として書き、同じ定義を function calling と WebMCP の両方に渡しています。
     - Human-in-the-Loop (HITL)を採用  
       エージェントのループでは、アプリデータを書き換える操作は、実行前に人が承認する(HITL)方法を採用しています。
   - 請求書作成機能  
     v0.7.0 で、請求書と仕訳を紐づけ、入金の状態を仕訳から導けるようにしました。

2. **製品群 — [PDF Agent Stack](https://github.com/shuji-bonji/pdf-agent-stack) / [houki-hub](https://github.com/shuji-bonji/houki-hub)**  
   個別のサーバーではなく、系列で使います。
   - PDF：[サイト](https://shuji-bonji.github.io/pdf-agent-stack/ja/) — 読む / 調べる / 反証する / 書く。判定はコード、説明は LLM。
   - 法規：[サイト](https://shuji-bonji.github.io/houki-hub/) — e-Gov の法令と国税庁の通達・Q&A を、出典付きで引く。当てはめは系の外に置きます。
   - RFC は [rfcxml-mcp](https://shuji-bonji.github.io/rfcxml-mcp/) にまとめています。

3. **まとめて導入できる marketplace — [claude-plugins](https://github.com/shuji-bonji/claude-plugins)**
   下の MCP サーバーと Skill を、Claude Code から `/plugin install` で入れられるようにしたものです。

4. **一次資料をそのまま引くための MCP と Skill**
   AI エージェントが PDF / W3C / RFC / 日本の法令の原文に直接あたれるようにする [MCP サーバー](./docs/mcp-servers.md)と [Claude Skills](./docs/claude-skills.md) です。

5. **設計の根拠 — [AI Agent Architecture](https://shuji-bonji.github.io/ai-agent-architecture/ja/) / [Understanding LLMs](https://shuji-bonji.github.io/understanding-llm-through-claude-code/ja/)**  
   上の製品群を、なぜその層に分けたかの記録です。製品の使い方ではなく、制約と組み方です。  
   Architecture が五層（Doctrine / Agent / Skills / Memory / MCP）と配置。Understanding LLMs が、その前提になる LLM の構造的制約です。

6. **設計判断の支援 — [ai-design-advisor](https://github.com/shuji-bonji/ai-design-advisor)**
   生成 AI システムの構成を決めるときに、まだ決まっていないことを名指しして返す Skill です。
   入力が足りないときに推測で埋めないことを、設計の中心に置いています。

実装は Claude Code に任せ、設計方針と受け入れ条件は人が決める、という進め方をしています。

## ⚙️ 日常の AI 駆動開発

毎日の実装は Claude Code で進め、自作の MCP と Skill を開発の流れに組み込んでいます。詳しい手順は [AI-Assisted Development Guide](./docs/ai-assisted-development.md) にまとめました。

1. **規約を先に置く** — `AGENTS.md` / `CLAUDE.md` に設計方針とテスト手順を書いておき、毎回のプロンプトで指示し直さずに済むようにしています
2. **役割を分ける** — 調査・実装・レビュー・品質評価を、サブエージェントと Skill に分けて担当させます。要件と受け入れ条件は人が決めます
3. **調べ物は自作の MCP に任せる** — 仕様書の原文（PDF / Web 仕様 / 法令）と、実際のファイルや互換性データを突き合わせます
4. **品質ゲートを通す** — `Issue → 実装 → テスト → PR` を固定し、仕様との照合や xCOMET による自動評価をパイプラインに載せます

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
![Claude Code](https://img.shields.io/badge/Claude%20Code-D97757?style=flat&logo=claude&logoColor=white)
![Skills](https://img.shields.io/badge/Skills-Claude%20Skills-D97757?style=flat)
![GitHub Copilot](https://img.shields.io/badge/GitHub%20Copilot-000000?style=flat&logo=githubcopilot&logoColor=white)
![MCP](https://img.shields.io/badge/MCP-Model%20Context%20Protocol-000000?style=flat)
![Ollama](https://img.shields.io/badge/Ollama-000000?style=flat&logo=ollama&logoColor=white)

## 🗂 Contents

| カテゴリ                                                                                                                                                                       | 概要                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 📦 [Claude Plugins (Marketplace)](https://github.com/shuji-bonji/claude-plugins)                                                                                               | 自作 MCP / Skill / Slash Command / Sub-agent を `/plugin install` で導入できる marketplace                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 🔌 [MCP Servers](./docs/mcp-servers.md) [![npm](https://img.shields.io/badge/npm-shuji--bonji-CB3837?style=flat&logo=npm&logoColor=white)](https://www.npmjs.com/~shuji-bonji) | [PDF](https://github.com/shuji-bonji/shuji-bonji/blob/main/docs/mcp-servers.md#-pdf-family)（→ 全体像: [PDF Agent Stack](https://shuji-bonji.github.io/pdf-agent-stack/ja/)）, [Web Spec](https://github.com/shuji-bonji/shuji-bonji/blob/main/docs/mcp-servers.md#-web-spec-family), [houki-hub](https://github.com/shuji-bonji/shuji-bonji/blob/main/docs/mcp-servers.md#-houki-hub-family)（→ 全体像: [houki-hub](https://shuji-bonji.github.io/houki-hub/)）, [DTIR](https://github.com/shuji-bonji/shuji-bonji/blob/main/docs/mcp-servers.md#-dtir-family) の4つのファミリーと、単独の MCP サーバー（[epsg](https://www.npmjs.com/package/@shuji-bonji/epsg-mcp) / [ifc-core](https://www.npmjs.com/package/@shuji-bonji/ifc-core-mcp) / [xcomet](https://www.npmjs.com/package/xcomet-mcp-server) / [rxjs](https://www.npmjs.com/package/@shuji-bonji/rxjs-mcp)） |
| 🧩 [Claude Skills](./docs/claude-skills.md)                                                                                                                                    | [pdf-trust](https://github.com/shuji-bonji/pdf-trust-skill) / [pdf-publish](https://github.com/shuji-bonji/pdf-publish-skill) / [pdf-read](https://github.com/shuji-bonji/pdf-read-skill) / [ai-design-advisor](https://github.com/shuji-bonji/ai-design-advisor) / [houki-research](https://github.com/shuji-bonji/houki-research-skill) / [factcheck](https://github.com/shuji-bonji/factcheck-skill) / [media-literacycheck-skill](https://github.com/shuji-bonji/media-literacycheck-skill) / [spec-compliance-skills](https://github.com/shuji-bonji/spec-compliance-skills/) / [deepl-glossary-translation](https://github.com/shuji-bonji/deepl-glossary-translation) など、作業手順をそのまま再利用するための Skill                                                                                                                                             |
| 📱 [Web Apps & Tools](./docs/web-apps.md)                                                                                                                                      | [e-shiwake](https://github.com/shuji-bonji/e-shiwake) / [fact-checklist](https://github.com/shuji-bonji/fact-checklist) / [marble-to-svg](https://github.com/shuji-bonji/marble-to-svg) / [WebAPI Test Tool](https://github.com/shuji-bonji/WebAPI-Test-Execution-Tool-using-Step-CI-runner)などの PWA と実用ツール                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 🧠 [設計の根拠](./docs/ai-assisted-development.md)                                                                                                                             | 上に挙げた MCP・Skill・アプリを、なぜその構造にしたのかを書いた2つのサイト（[Claude Code を通じて LLM を理解する](https://shuji-bonji.github.io/understanding-llm-through-claude-code/ja/) / [AI Agent Architecture](https://shuji-bonji.github.io/ai-agent-architecture/ja/)）と、その考え方で日々どう実装しているかの手順です                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 📖 [Sites & Books](./docs/sites-books.md)                                                                                                                                      | [RxJS](https://shuji-bonji.github.io/RxJS-with-TypeScript/) / [Svelte 5 / SvelteKit](https://shuji-bonji.github.io/Svelte-and-SvelteKit-with-TypeScript/) / [Web Components](https://shuji-bonji.github.io/WebComponents-with-TypeScript/) / [TDD](https://shuji-bonji.github.io/Notes-on-Test-Driven-Development/) などの学習サイトと、[『AI駆動開発時代のNeovim』](https://zenn.dev/shuji_bonji/books/neovim-ide-on-mac) などの Zenn 書籍                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 📓 [Notes](./docs/notes.md)                                                                                                                                                    | デジタル署名・PWA・デザインパターン、ローカル LLM の実行環境、[Manifest of Authenticity](https://github.com/shuji-bonji/Manifest-of-Authenticity)（デジタル資産の真正性を記述するオープン仕様・Draft）、DTIR 翻訳パイプライン（PoC）などのノートとスターターキット                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

## 🧭 いま進めていること

どれも着手または検討の段階で、まだ形にはなっていません。

- **法規シリーズ（[houki-hub](https://shuji-bonji.github.io/houki-hub/)）に RAG を入れる** — いまは e-Gov 法令 API と国税庁のサイトを、そのつど検索して引いています。取りこぼしを減らすために RAG を入れたいと考えています。条文どうしの参照関係を保ったまま引く KAG（Knowledge Augmented Generation）も併せて検討中です
- **[normativepdf](https://github.com/shuji-bonji/normativepdf) を広げる** — ISO 32000 の条文と実装を1対1で対応させた、TypeScript 製の PDF ライブラリです。いま pdf-writer-mcp が `pdf-lib` に任せている部分をこれに置き換えて、条文違反を見つけても直せない、という状態をなくしたいと考えています
- **[ai-design-advisor](https://github.com/shuji-bonji/ai-design-advisor) を [HEXIS](https://github.com/shuji-bonji/HEXIS) / [Manifest of Authenticity](https://github.com/shuji-bonji/Manifest-of-Authenticity) につなぐ** — ai-design-advisor が返した設計判断を、判断の構造を記述する仕様（HEXIS）と、成果物の真正性を記述する仕様（MoA）に載せられないか検討しています

## 🏠 記念碑

[履歴書作成アプリ](https://github.com/shuji-bonji/resume_editting) — 2021 年、JavaScript を学びながら初めて作った Web アプリです。いま読み返すとソースはとても恥ずかしいのですが、ここが出発点でした。[公開中のアプリはこちら](https://shuji-bonji.github.io/resume_editting/)

## 📬 Contact

[![GitHub](https://img.shields.io/badge/GitHub-shuji--bonji-181717?style=flat&logo=github&logoColor=white)](https://github.com/shuji-bonji)
[![npm](https://img.shields.io/badge/npm-shuji--bonji-CB3837?style=flat&logo=npm&logoColor=white)](https://www.npmjs.com/~shuji-bonji)
[![Qiita](https://img.shields.io/badge/Qiita-shuji--bonji-55C500?style=flat&logo=qiita&logoColor=white)](https://qiita.com/shuji-bonji)
[![Zenn](https://img.shields.io/badge/Zenn-shuji__bonji-3EA8FF?style=flat&logo=zenn&logoColor=white)](https://zenn.dev/shuji_bonji)
