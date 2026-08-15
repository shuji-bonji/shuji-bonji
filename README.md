# shuji-bonji

🌐 [English version (README.en.md)](./README.en.md)

**AI で作るための道具をまず作り、それを使って本物の資産を作る。**

TypeScript / Node.js で、AI エージェントが信頼できる仕様・法令・ドキュメントにアクセスするための MCP / Skill をつくり、その道具でアプリ・学習サイト・書籍を形にしています。フロントは Angular / RxJS / Svelte、バックは Node.js。Claude Code を日常の実装エンジンにし、顧客の要件整理から実装・品質ゲートまでを AI 駆動で一気通貫します。

コーディング中心の案件が減り、AI エージェント組み込みとインフラ・適用設計が増えるいま、自分の活動はその「増える仕事」側にあります。公開した Skills / MCP の設計解説と、状況認識・意思決定の整理は、2026年8月時点でも検索と Bing AI 引用の主軸として参照されています。

## ⚙️ 日常の AI 駆動開発

Claude Code を主エンジンに、自作 MCP / Skill を開発フローへ組み込んで回しています。詳細は [AI-Assisted Development Guide](./docs/ai-assisted-development.md) にまとめています。

1. **規約を先に置く** — `AGENTS.md` / `CLAUDE.md` で設計方針・テスト手順を固定し、単発プロンプトに依存しない
2. **役割を分ける** — 調査・実装・レビュー・品質評価をカスタムサブエージェント + Skill で分担。人は要件と受け入れ条件を握る
3. **知識源は自作 MCP Family** — 仕様書側（正典）と実体側を双方向に照合（PDF / Web Spec / houki-hub）
4. **品質ゲートを通す** — `Issue → 実装 → テスト → PR` に加え、仕様照合や xCOMET などの自動評価をパイプラインに載せる

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

| カテゴリ                                                                                                                                                                       | 概要                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 📱 [Web Apps & Tools](./docs/web-apps.md)                                                                                                                                      | [e-shiwake](https://github.com/shuji-bonji/e-shiwake) / [fact-checklist](https://github.com/shuji-bonji/fact-checklist) / [marble-to-svg](https://github.com/shuji-bonji/marble-to-svg) / [WebAPI Test Tool](https://github.com/shuji-bonji/WebAPI-Test-Execution-Tool-using-Step-CI-runner)などの PWA・実用ツール                                                                                                                                                                                                                                                                                                                                                                                 |
| 📖 [Sites & Books](./docs/sites-books.md)                                                                                                                                      | [RxJS](https://shuji-bonji.github.io/RxJS-with-TypeScript/) / [Svelte 5 / SvelteKit](https://shuji-bonji.github.io/Svelte-and-SvelteKit-with-TypeScript/) / [Web Components](https://shuji-bonji.github.io/WebComponents-with-TypeScript/) / [TDD](https://shuji-bonji.github.io/Notes-on-Test-Driven-Development/) などの学習サイトと Zenn 書籍                                                                                                                                                                                                                                                                                                                                                   |
| 🤖 [AI-Assisted Development Guide](./docs/ai-assisted-development.md)                                                                                                          | [Claude Code を通じて LLMを理解する](https://shuji-bonji.github.io/understanding-llm-through-claude-code/ja/) / [AI Agent Architecture](https://shuji-bonji.github.io/ai-agent-architecture/ja/) 等、AI エージェントと協働開発するためのワークフロー・ノウハウ                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 📦 [Claude Plugins (Marketplace)](https://github.com/shuji-bonji/claude-plugins)                                                                                               | 自作 MCP / Skill / Slash Command / Sub-agent を `/plugin install` で導入できる marketplace                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 🔌 [MCP Servers](./docs/mcp-servers.md) [![npm](https://img.shields.io/badge/npm-shuji--bonji-CB3837?style=flat&logo=npm&logoColor=white)](https://www.npmjs.com/~shuji-bonji) | [PDF](https://github.com/shuji-bonji/shuji-bonji/blob/main/docs/mcp-servers.md#-pdf-family)（→ [PDF Agent Stack サイト](https://shuji-bonji.github.io/pdf-agent-stack/ja/)）, [Web Spec](https://github.com/shuji-bonji/shuji-bonji/blob/main/docs/mcp-servers.md#-web-spec-family), [houki-hub](https://github.com/shuji-bonji/shuji-bonji/blob/main/docs/mcp-servers.md#-houki-hub-family), [DTIR](https://github.com/shuji-bonji/shuji-bonji/blob/main/docs/mcp-servers.md#-dtir-family) の4ファミリー + 単発 MCP（[epsg](https://www.npmjs.com/package/@shuji-bonji/epsg-mcp) / [ifc-core](https://www.npmjs.com/package/@shuji-bonji/ifc-core-mcp) / [xcomet](https://www.npmjs.com/package/xcomet-mcp-server) / [rxjs](https://www.npmjs.com/package/@shuji-bonji/rxjs-mcp)） |
| 🧩 [Claude Skills](./docs/claude-skills.md)                                                                                                                                    | [pdf-trust](https://github.com/shuji-bonji/pdf-trust-skill) / [pdf-publish](https://github.com/shuji-bonji/pdf-publish-skill) / [houki-research](https://github.com/shuji-bonji/houki-research-skill) / [factcheck](https://github.com/shuji-bonji/factcheck-skill) / [media-literacycheck-skill](https://github.com/shuji-bonji/media-literacycheck-skill) / [spec-compliance-skills](https://github.com/shuji-bonji/spec-compliance-skills/) / [deepl-glossary-translation](https://github.com/shuji-bonji/deepl-glossary-translation) など、作業ワークフローを再利用する Skill 群                                                                                                                                                                                 |
| 📓 [Notes](./docs/notes.md)                                                                                                                                                    | デジタル署名・PWA・デザインパターン、ローカルLLM基盤、PoC（DTIR 翻訳パイプライン）などのノート・スターターキット                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |

## 🏠 記念碑

[履歴書作成アプリ](https://github.com/shuji-bonji/resume_editting) — 2021年、JavaScriptを学び初めて作ったWebアプリ。ソースは今見るととても恥ずかしいですが、ここが僕にとってスタート地点です。[こちらで提供](https://shuji-bonji.github.io/resume_editting/)

## 📬 Contact

[![GitHub](https://img.shields.io/badge/GitHub-shuji--bonji-181717?style=flat&logo=github&logoColor=white)](https://github.com/shuji-bonji)
[![npm](https://img.shields.io/badge/npm-shuji--bonji-CB3837?style=flat&logo=npm&logoColor=white)](https://www.npmjs.com/~shuji-bonji)
[![Qiita](https://img.shields.io/badge/Qiita-shuji--bonji-55C500?style=flat&logo=qiita&logoColor=white)](https://qiita.com/shuji-bonji)
[![Zenn](https://img.shields.io/badge/Zenn-shuji__bonji-3EA8FF?style=flat&logo=zenn&logoColor=white)](https://zenn.dev/shuji_bonji)
