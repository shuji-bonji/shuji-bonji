# Hi 👋 I'm shuji-bonji

**Building an AI agent tool ecosystem — MCP servers, agent skills, and orchestration architecture.**

TypeScript developer — Angular/RxJS frontend engineer & AI agent tooling builder.

> TypeScript / Node.js 開発者。AI エージェントが信頼できる仕様ドキュメントや開発者ワークフローにアクセスできるようにする構造化ツールの作成に重点を置いています。

## 🏗️ AI Orchestration Guide

Architecture guide for building reliable AI agent systems with MCP + Skills + orchestration patterns — including design patterns, roadmaps, and composition strategies.

> AIエージェント構成（MCP・Skills・Agent統合）に関する設計思想・アーキテクチャ・実践ノウハウをまとめたリポジトリ.

| | Links |
|---|---|
| **ai-agent-architecture** | [📖 Site](https://shuji-bonji.github.io/ai-agent-architecture/ja/) · [GitHub](https://github.com/shuji-bonji/ai-agent-architecture) |

> Includes: [MCP Roadmap](https://shuji-bonji.github.io/ai-agent-architecture/ja/strategy/mcp-roadmap) · [Skill Roadmap](https://shuji-bonji.github.io/ai-agent-architecture/ja/strategy/skill-roadmap) · [Composition Patterns](https://shuji-bonji.github.io/ai-agent-architecture/ja/strategy/composition-patterns)

> [!NOTE]
> ソフトウェア開発においてのAI利用方法は、それぞれシステムに関わる立場や視点によって異なってきます。
> まずは、既存のソフトウェアへの人の関与に関する、9つの視点を割り出してます。
> これにどのようにAIが関与していけば良いか？単純に当てはまるのではく、まるっきり変わってくることも含めて、確認して行こうと思います。
> - [ソフトウェアシステム・サービスのマネジメント](https://github.com/shuji-bonji/Management-of-software-systems-and-services)

## 🔧 MCP Servers

Structured access to specification documents and developer tools for LLMs.

### Standards & Specifications

| MCP Server | Description | Links |
|---|---|---|
| **pdf-spec-mcp** | Query ISO 32000 (PDF) spec — 8 tools, 17 docs, version comparison | [npm](https://www.npmjs.com/package/@shuji-bonji/pdf-spec-mcp) · [GitHub](https://github.com/shuji-bonji/pdf-spec-mcp) |
| **rfcxml-mcp** | Navigate IETF RFC specifications | [npm](https://www.npmjs.com/package/@shuji-bonji/rfcxml-mcp) · [GitHub](https://github.com/shuji-bonji/rfcxml-mcp) |
| **w3c-mcp** | Access W3C/WHATWG web standards | [npm](https://www.npmjs.com/package/@shuji-bonji/w3c-mcp) · [GitHub](https://github.com/shuji-bonji/w3c-mcp) |
| **epsg-mcp** | Query EPSG coordinate reference systems | [npm](https://www.npmjs.com/package/@shuji-bonji/epsg-mcp) · [GitHub](https://github.com/shuji-bonji/epsg-mcp) |
| **ifc-core-mcp** | IFC 4.3 (BIM) schema & entity search | [npm](https://www.npmjs.com/package/@shuji-bonji/ifc-core-mcp) · [GitHub](https://github.com/shuji-bonji/ifc-core-mcp) |

### Quality & Analysis Tools

| MCP Server | Description | Links |
|---|---|---|
| **pdf-reader-mcp** | Structure-aware PDF reading with semantic parsing | [npm](https://www.npmjs.com/package/@shuji-bonji/pdf-reader-mcp) · [GitHub](https://github.com/shuji-bonji/pdf-reader-mcp) |
| **xcomet-mcp-server** | Translation quality evaluation with xCOMET | [npm](https://www.npmjs.com/package/xcomet-mcp-server) · [GitHub](https://github.com/shuji-bonji/xcomet-mcp-server) |

### Developer Tools & Utilities

| MCP Server | Description | Links |
|---|---|---|
| **rxjs-mcp-server** | Execute, debug, and visualize RxJS streams | [npm](https://www.npmjs.com/package/rxjs-mcp-server) · [GitHub](https://github.com/shuji-bonji/rxjs-mcp-server) |


## 📋 Agent Skills

Translation workflow with glossary-enabled consistency.

| Skill | Description | Links |
|---|---|---|
| **deepl-glossary-translation** | PDF spec translation workflow (DeepL + glossary) | [GitHub](https://github.com/shuji-bonji/deepl-glossary-translation) |
| **spec-compliance-skills** | A Cowork plugin for W3C/IETF specification compliance checking.| [Github](https://github.com/shuji-bonji/spec-compliance-skills/) |

## 🌐 Web Apps & Tools

| Project | Description | Links |
|---|---|---|
| **e-shiwake**| フリーランス・個人事業主向けの仕訳帳 + 証憑管理 PWAアプリ | [📱 App](https://shuji-bonji.github.io/e-shiwake/) · [Github](https://github.com/shuji-bonji/e-shiwake)　|
| **e-shiwake-ai** | AIエージェントをフロントエンドとして利用した、e-shiwake |　 [Github](https://github.com/shuji-bonji/e-shiwake-ai)　|
| **fact-checklist** | 事実確認チェックシート — 情報の信頼性を評価するPWAアプリ | [📱 App](https://fact-checklist.vercel.app/) · [GitHub](https://github.com/shuji-bonji/fact-checklist) |
| **websocket-practical-guide** | WebSocket 実践ガイド — リアルタイムWebアプリ実践PWA | [📱 App](https://shuji-bonji.github.io/websocket-practical-guide/) · [GitHub](https://github.com/shuji-bonji/websocket-practical-guide) |
| **marble-to-svg** | RxJS マーブル記法 → SVG 変換ツール | [🔧 Tool](https://shuji-bonji.github.io/marble-to-svg/) · [GitHub](https://github.com/shuji-bonji/marble-to-svg) |
| **WebAPI Test Tool** | Step CI を利用した WebAPI テスト実行ツール | [GitHub](https://github.com/shuji-bonji/WebAPI-Test-Execution-Tool-using-Step-CI-runner) |


## 📚 Learning Sites & Notes

| Site | Links |
|---|---|
| TypeScriptで学ぶ Svelte 5 / SvelteKit | [📖 Site](https://shuji-bonji.github.io/Svelte-and-SvelteKit-with-TypeScript/) · [GitHub](https://github.com/shuji-bonji/Svelte-and-SvelteKit-with-TypeScript) |
| TypeScript で RxJS | [📖 Site](https://shuji-bonji.github.io/RxJS-with-TypeScript/) · [GitHub](https://github.com/shuji-bonji/RxJS-with-TypeScript) |
| TypeScript で Web Components | [📖 Site](https://shuji-bonji.github.io/WebComponents-with-TypeScript/) · [GitHub](https://github.com/shuji-bonji/WebComponents-with-TypeScript) |
| TypeScriptで学ぶ SOLID設計原則 | [📖 Site](https://shuji-bonji.github.io/Notes-on-SOLID-Principle/) · [GitHub](https://github.com/shuji-bonji/Notes-on-SOLID-Principle) |
| TypeScript で テスト駆動開発(TDD) | [📖 Site](https://shuji-bonji.github.io/Notes-on-Test-Driven-Development/) · [GitHub](https://github.com/shuji-bonji/Notes-on-Test-Driven-Development) |
| 状況認識と意思決定 | [📖 Site](https://shuji-bonji.github.io/Situational-Awareness-and-Decision-Making/) · [GitHub](https://github.com/shuji-bonji/Situational-Awareness-and-Decision-Making) |

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


## 🛠 Tech Stack

[![TypeScript](https://img.shields.io/badge/-TypeScript-3178c6?logo=typescript&logoColor=fff)](https://www.typescriptlang.org/)
[![Angular](https://img.shields.io/badge/-Angular-DD0031?logo=angular&logoColor=white)](https://angular.dev/)
[![RxJS](https://img.shields.io/badge/-RxJS-B7178C?logo=reactivex&logoColor=fff)](https://rxjs.dev/)
[![Svelte](https://img.shields.io/badge/-Svelte-FF3E00?logo=svelte&logoColor=fff)](https://svelte.dev/)
[![Node.js](https://img.shields.io/badge/-Node.js-339933?logo=node.js&logoColor=fff)](https://nodejs.org/)
[![Docker](https://img.shields.io/badge/-Docker-2496ED?logo=docker&logoColor=fff)](https://www.docker.com/)

**AI Tools:**

[![Claude](https://img.shields.io/badge/-Claude-6B5B95?logo=claude&logoColor=fff)](https://claude.ai/)
[![Claude Code](https://img.shields.io/badge/-Claude_Code-6B5B95?logoColor=fff)](https://docs.anthropic.com/en/docs/claude-code)
[![GitHub Copilot](https://img.shields.io/badge/-GitHub_Copilot-181717?logo=githubcopilot&logoColor=fff)](https://github.com/features/copilot)



## 🏠 記念碑

<details>
<summary>僕のプログラミングの原点</summary>

[履歴書作成アプリ](https://github.com/shuji-bonji/resume_editting) — 2021年、JavaScriptを学び初めて作ったWebアプリ。ソースは今見るととても恥ずかしいですが、ここが僕にとってスタート地点です。

</details>
