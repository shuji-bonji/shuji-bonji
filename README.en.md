# shuji-bonji

🌐 [日本語版 (README.md)](./README.md)

**TypeScript / Node.js developer building structured tooling**, focused on giving AI agents reliable access to specification documents and developer workflows.

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

A collection of workflows and notes for collaborating with AI agents (Claude / Claude Code / GitHub Copilot, etc.) during development.

- **Design-first**: humans stay responsible for spec and architecture; AI is not asked to make those calls.
- **Structured documentation**: MCP servers, Skills, and specs are organized so AI can read them reliably.
- **Tight verification loop**: prompt → output → spec check → fix, iterated quickly.

| Phase | Project                                         | Description                                                                                                                                                                              | Links                                                                                                                                                            |
| :---: | :---------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   1   | **understanding-llm-through-claude-code**       | Understand the structural constraints of LLMs and learn the design philosophy of Claude Code — _why_ a setting is what it is.                                                            | [Site](https://shuji-bonji.github.io/understanding-llm-through-claude-code/ja/) · [GitHub](https://github.com/shuji-bonji/understanding-llm-through-claude-code) |
|   2   | **ai-agent-architecture**                       | Design philosophy, architecture, and field notes for integrating MCP, Skills, and AI agents.                                                                                             | [Site](https://shuji-bonji.github.io/ai-agent-architecture/ja/) · [GitHub](https://github.com/shuji-bonji/ai-agent-architecture)                                 |
|   3   | **Management-of-software-systems-and-services** | Apply AI to the body of [software systems & services management](https://github.com/shuji-bonji/Management-of-software-systems-and-services) practice that engineers built up before us. | <!-- [GitHub](https://github.com/shuji-bonji/Management-of-software-systems-and-services) -->                                                                    |

<!--
> [!NOTE]
> The way AI is leveraged in software development depends heavily on the role and stance involved.
> I'm starting by organizing nine perspectives on how humans engage with existing software,
> and looking at how AI can plug in — not as a drop-in replacement, but possibly as something that reshapes the picture entirely.
> - [Software Systems & Services Management](https://github.com/shuji-bonji/Management-of-software-systems-and-services)
-->

## 📦 Claude Plugins (Marketplace)

A marketplace for installing my MCP / Skill / Slash Command / Sub-agent extensions from Claude Code or Cowork via `/plugin install`. Same form factor as Anthropic's official marketplace ([`anthropics/claude-plugins-official`](https://github.com/anthropics/claude-plugins-official)).

| Marketplace                    | Description                                                                                                  | Links                                                   |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------- |
| **shuji-bonji/claude-plugins** | Catalog of shuji-bonji plugins (5 categories: houki / web-spec / quality-tools / domain-specific / dev-meta) | [GitHub](https://github.com/shuji-bonji/claude-plugins) |

### Install

```bash
# Claude Code
/plugin marketplace add shuji-bonji/claude-plugins
/plugin install houki-research@shuji-bonji
```

For Cowork mode, add `https://github.com/shuji-bonji/claude-plugins` as a marketplace under Settings → Plugins.

### Available plugins

| Plugin             | Category | Status    | Links                                                         |
| ------------------ | -------- | --------- | ------------------------------------------------------------- |
| **houki-research** | houki    | ✅ v0.1.0 | [GitHub](https://github.com/shuji-bonji/houki-research-skill) |

See the [marketplace README](https://github.com/shuji-bonji/claude-plugins#収録予定-plugin-計画中) for the list of 19 planned plugins (🚧 in progress).

## 🔌 MCP Servers

MCP servers that let AI agents (Claude, etc.) interact with external specs and data sources.
Cross-domain groupings with a coherent story are split out as **families** under their own subheadings.

### 📄 PDF family

**A two-layer MCP family that treats PDF as "canon × substance"**.
One layer **delivers the PDF specifications themselves — ISO 32000 (PDF 2.0), PDF 1.7, PDF/UA, the TS 32001 series — as a structured canonical reference for LLMs**, while the other **inspects the internals of actual PDF files at a low level (objects, xref tables, streams, tag structure)**. Combined, they enable PDF analysis and verification that is genuinely aware of spec compliance.

| MCP Server         | Layer                       | Description                                                                                                                                                   | Links                                                                                                                      |
| ------------------ | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| **pdf-spec-mcp**   | Spec layer (canon)          | Structured access to the ISO 32000-series PDF specification. Section retrieval, requirement extraction (shall / must), definition lookup, version comparison. | [npm](https://www.npmjs.com/package/@shuji-bonji/pdf-spec-mcp) · [GitHub](https://github.com/shuji-bonji/pdf-spec-mcp)     |
| **pdf-reader-mcp** | Substance layer (parsing)   | Extract text, tables, signatures, tags, fonts, and metadata, plus inspect internal structure (objects, xref tables, etc.).                                    | [npm](https://www.npmjs.com/package/@shuji-bonji/pdf-reader-mcp) · [GitHub](https://github.com/shuji-bonji/pdf-reader-mcp) |

> [!TIP]
> Most PDF MCPs stop at "extract text". This family **canonicalizes the PDF specification itself as a first-class queryable reference and cross-links it with substance-level analysis**. Aimed at use cases where spec compliance actually matters: digital signatures, PDF/UA conformance, PDF/A validation, and so on.

### 🌐 Web Spec family

**An MCP family for handling Web / Internet standards as structured data, accessible from AI**.
The **spec side** (IETF RFCs and W3C / WHATWG — HTML / CSS / WebIDL / PWA, etc.) and the **implementation compatibility data (Baseline / BCD)** are separated into dedicated MCPs, so "what the spec requires" and "what browsers actually support today" can be cross-referenced within the same conversation.

| MCP Server         | Layer                      | Description                                                                                            | Links                                                                                                                      |
| ------------------ | -------------------------- | ------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------- |
| **rfcxml-mcp**     | IETF (spec)                | IETF RFC (XML2RFC v3) — structure parsing, requirement extraction, RFC dependency lookups.             | [npm](https://www.npmjs.com/package/@shuji-bonji/rfcxml-mcp) · [GitHub](https://github.com/shuji-bonji/rfcxml-mcp)         |
| **w3c-mcp**        | W3C / WHATWG (spec)        | Lookups across W3C / WHATWG specifications (HTML elements, CSS properties, WebIDL, PWA, etc.).         | [npm](https://www.npmjs.com/package/@shuji-bonji/w3c-mcp) · [GitHub](https://github.com/shuji-bonji/w3c-mcp)               |
| **web-compat-mcp** | Implementation (compat)    | Browser compatibility checks based on Baseline / Browser Compat Data.                                  | [npm](https://www.npmjs.com/package/@shuji-bonji/web-compat-mcp) · [GitHub](https://github.com/shuji-bonji/web-compat-mcp) |

> [!TIP]
> Useful when you want AI to surface **spec × implementation** discrepancies — "the spec says MUST but the feature isn't in Baseline yet", "this RFC Updates that other RFC" — by invoking all three MCPs from the same conversation.

### 🧰 Other MCP servers

Standalone MCPs that don't belong to a family.

**Domain-specific** — structured access to specifications and datasets in specific domains.

| MCP Server       | Category           | Description                                            | Links                                                                                                                  |
| ---------------- | ------------------ | ------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| **epsg-mcp**     | Geospatial         | EPSG CRS lookup and transformation suggestions         | [npm](https://www.npmjs.com/package/@shuji-bonji/epsg-mcp) · [GitHub](https://github.com/shuji-bonji/epsg-mcp)         |
| **ifc-core-mcp** | Architecture (BIM) | IFC 4.3 entities, inheritance, and PropertySet lookup  | [npm](https://www.npmjs.com/package/@shuji-bonji/ifc-core-mcp) · [GitHub](https://github.com/shuji-bonji/ifc-core-mcp) |

**Quality / Dev tooling** — quality evaluation and developer support (no npm scope — naming differs from the others).

| MCP Server            | Category           | Description                                              | Links                                                                                                               |
| --------------------- | ------------------ | -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| **xcomet-mcp-server** | MT quality         | Machine translation quality evaluation powered by xCOMET | [npm](https://www.npmjs.com/package/xcomet-mcp-server) · [GitHub](https://github.com/shuji-bonji/xcomet-mcp-server) |
| **rxjs-mcp-server**   | RxJS dev tooling   | Execute, debug, and visualize RxJS streams               | [npm](https://www.npmjs.com/package/rxjs-mcp-server) · [GitHub](https://github.com/shuji-bonji/rxjs-mcp-server)     |

## 🧩 Claude Skills

Skills callable from Claude / Claude Code to reuse domain-specific workflows.

| Skill                          | Description                                                                                          | Links                                                               |
| ------------------------------ | ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| **deepl-glossary-translation** | Translation workflow for PDF specifications using DeepL with a shared glossary for term consistency. | [GitHub](https://github.com/shuji-bonji/deepl-glossary-translation) |
| **spec-compliance-skills**     | Cowork plugin for checking compliance against W3C / IETF specifications.                             | [GitHub](https://github.com/shuji-bonji/spec-compliance-skills/)    |
| **factcheck-skill**            | Fact-checking skill for Claude Code / Cowork — evaluates information reliability scientifically.     | [GitHub](https://github.com/shuji-bonji/factcheck-skill)            |
| **media-literacycheck-skill**  | LLM skill that evaluates online information from a media-literacy perspective.                       | [GitHub](https://github.com/shuji-bonji/media-literacycheck-skill)  |

## 📚 houki-hub family

**An integrated ecosystem for handling Japanese laws, regulations, and authority notices with AI.**
Each family member ships as a one-set bundle: an MCP server, a TypeScript library, a Claude Skill, and a documentation site.

| MCP Server         | Description                                                                                                                                                                   | Links                                                                                                                      |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| **houki-egov-mcp** | Fetch the body, table of contents, and revision history of Japanese constitutions, laws, cabinet/ministerial orders, and rules via the e-Gov Law API v2.                      | [npm](https://www.npmjs.com/package/@shuji-bonji/houki-egov-mcp) · [GitHub](https://github.com/shuji-bonji/houki-egov-mcp) |
| **houki-nta-mcp**  | Full-text search (SQLite + FTS5) over the National Tax Agency's basic notices, amendment notices, administrative guidelines, written-answer cases, Q&A, and Tax Answer pages. | [npm](https://www.npmjs.com/package/@shuji-bonji/houki-nta-mcp) · [GitHub](https://github.com/shuji-bonji/houki-nta-mcp)   |

| Skill                    | Description                                                                                                                                                                                                                           | Links                                                         |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| **houki-research-skill** | Orchestration skill for legal research across the houki-hub MCP family. Encodes the lookup order (statute → cabinet order → ministerial order → notice → PDF → case law) and built-in safeguards for regulated-profession boundaries. | [GitHub](https://github.com/shuji-bonji/houki-research-skill) |

| Package                 | Description                                                                                                                                | Links                                                                                                                                |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| **houki-abbreviations** | Shared dictionary of Japanese statute abbreviations and common names (174 entries across 6 domains). Used across the houki-hub MCP family. | [npm](https://www.npmjs.com/package/@shuji-bonji/houki-abbreviations) · [GitHub](https://github.com/shuji-bonji/houki-abbreviations) |

## 🌍 DTIR family

**A pipeline that translates mixed-language documents without breaking their formatting, pagination, or image placement.**
A `.docx` containing several languages in one file is translated into a single language through reader → translate → quality check → writer stages, anchored by **DTIR** (Document Translation Intermediate Representation), the shared intermediate representation across each MCP.

| Package                        | Layer        | Description                                                                                  | Links                                                              |
| ------------------------------ | ------------ | -------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| **doc-translation-ir**         | Contract (IR)| Design doc, type definitions, and JSON Schema (v0.1) for DTIR, the shared intermediate representation. | [GitHub](https://github.com/shuji-bonji/doc-translation-ir)         |
| **dtir-ooxml-reader-mcp**      | reader       | Converts `.docx` into a DTIR segment table; reconciles language via tag × local detection.   | [GitHub](https://github.com/shuji-bonji/dtir-ooxml-reader-mcp)      |
| **dtir-translate-mcp**         | translate    | Fills DTIR `translation`/`quality`. Per-`group` batching, engine-agnostic (DeepL / LLM).     | [GitHub](https://github.com/shuji-bonji/dtir-translate-mcp)         |
| **dtir-ooxml-writer-mcp**      | writer       | Generates the translated `.docx` by patching the original by `id` from translated DTIR.       | [GitHub](https://github.com/shuji-bonji/dtir-ooxml-writer-mcp)      |
| **dtir-docx-pipeline**         | pipeline     | End-to-end harness binding reader → translate → writer together.                              | [GitHub](https://github.com/shuji-bonji/dtir-docx-pipeline)         |
| **local-llm-on-apple-silicon** | Support (env)| Local LLM runtime on Apple Silicon (for translate's local engine). 🚧 In progress.           | [GitHub](https://github.com/shuji-bonji/local-llm-on-apple-silicon) |

## 📱 Web Apps & Tools

Practical tools and personal products.

| Project                       | Description                                                                | Links                                                                                                                                                         |
| ----------------------------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **e-shiwake**                 | Bookkeeping + receipt management PWA for freelancers and sole proprietors. | [📱 App](https://shuji-bonji.github.io/e-shiwake/) · [GitHub](https://github.com/shuji-bonji/e-shiwake)                                                       |
| **e-shiwake-ai**              | An AI-agent-fronted variant of e-shiwake.                                  | [GitHub](https://github.com/shuji-bonji/e-shiwake-ai)                                                                                                         |
| **fact-checklist**            | Fact-check worksheet — a PWA for evaluating information reliability.       | [📱 App](https://fact-checklist.vercel.app) · [GitHub](https://github.com/shuji-bonji/fact-checklist)                                                         |
| **websocket-practical-guide** | WebSocket Practical Guide — a hands-on PWA for real-time web apps.         | Under construction 🏗️ [📱 App](https://shuji-bonji.github.io/websocket-practical-guide/) · [GitHub](https://github.com/shuji-bonji/websocket-practical-guide) |
| **marble-to-svg**             | Convert RxJS marble notation into SVG diagrams.                            | [🔧 Tool](https://shuji-bonji.github.io/marble-to-svg/) · [GitHub](https://github.com/shuji-bonji/marble-to-svg)                                              |
| **WebAPI Test Tool**          | WebAPI test runner powered by Step CI.                                     | [GitHub](https://github.com/shuji-bonji/WebAPI-Test-Execution-Tool-using-Step-CI-runner)                                                                      |

## 📖 Learning Sites & Notes

Documentation sites and public notes — many under active development.

| Site                                          | Links                                                                                                                                                                    |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Svelte 5 / SvelteKit with TypeScript          | [📖 Site](https://shuji-bonji.github.io/Svelte-and-SvelteKit-with-TypeScript/) · [GitHub](https://github.com/shuji-bonji/Svelte-and-SvelteKit-with-TypeScript)           |
| RxJS with TypeScript                          | [📖 Site](https://shuji-bonji.github.io/RxJS-with-TypeScript/) · [GitHub](https://github.com/shuji-bonji/RxJS-with-TypeScript)                                           |
| Web Components with TypeScript                | [📖 Site](https://shuji-bonji.github.io/WebComponents-with-TypeScript/) · [GitHub](https://github.com/shuji-bonji/WebComponents-with-TypeScript)                         |
| SOLID Design Principles with TypeScript       | [📖 Site](https://shuji-bonji.github.io/Notes-on-SOLID-Principle/) · [GitHub](https://github.com/shuji-bonji/Notes-on-SOLID-Principle)                                   |
| Test-Driven Development (TDD) with TypeScript | [📖 Site](https://shuji-bonji.github.io/Notes-on-Test-Driven-Development/) · [GitHub](https://github.com/shuji-bonji/Notes-on-Test-Driven-Development)                   |
| Situational Awareness and Decision Making     | [📖 Site](https://shuji-bonji.github.io/Situational-Awareness-and-Decision-Making/) · [GitHub](https://github.com/shuji-bonji/Situational-Awareness-and-Decision-Making) |

<details>
<summary>📓 Other notes & templates</summary>

- [Software Systems & Services Management](https://github.com/shuji-bonji/Management-of-software-systems-and-services)
- [Notes about Digital Signatures and Timestamps](https://github.com/shuji-bonji/Notes-about-Digital-Signatures-and-Timestamps)
- [Notes on PWA](https://github.com/shuji-bonji/Notes-on-PWA)
- [Notes about Design Patterns](https://github.com/shuji-bonji/Notes-about-Design-Patterns)
- [Real-World Automation Challenges](https://github.com/shuji-bonji/Real-World-Automation-Challenges)
- [rxjs-with-typescript-starter-kit](https://github.com/shuji-bonji/rxjs-with-typescript-starter-kit)
- [typescript-webcomponents-starter-kit](https://github.com/shuji-bonji/typescript-webcomponents-starter-kit)

</details>

## 🏠 Monuments

<details>
<summary>The origin of my programming journey</summary>

[Resume editor](https://github.com/shuji-bonji/resume_editting) — built in 2021 as my very first web app while learning JavaScript. The source is genuinely embarrassing to look at now, but this is where it all started for me.

</details>

## 📬 Contact

[![GitHub](https://img.shields.io/badge/GitHub-shuji--bonji-181717?style=flat&logo=github&logoColor=white)](https://github.com/shuji-bonji)
[![npm](https://img.shields.io/badge/npm-shuji--bonji-CB3837?style=flat&logo=npm&logoColor=white)](https://www.npmjs.com/~shuji-bonji)
[![Qiita](https://img.shields.io/badge/Qiita-shuji--bonji-55C500?style=flat&logo=qiita&logoColor=white)](https://qiita.com/shuji-bonji)
[![Zenn](https://img.shields.io/badge/Zenn-shuji__bonji-3EA8FF?style=flat&logo=zenn&logoColor=white)](https://zenn.dev/shuji_bonji)
