# shuji-bonji

🌐 [日本語版 (README.md)](./README.md)
**Build the tools that let AI build — then use them to build things that last.**

Frontend is centered on Angular / RxJS / NgRx / Svelte.
Backend is TypeScript / Node.js, plus some .NET C# Web API experience.
I spent a long time in operations and customer engineering before moving into software development.

What I build now sits in three layers.

1. **Product** — e-shiwake
   A journal + voucher PWA for sole proprietors, with an in-app LLM agent.
   Seventeen tools are plain TypeScript functions. The same definitions feed WebMCP and function calling.
   The loop is hand-rolled. Destructive actions go through HITL. Providers: local LLMs / OpenAI / Anthropic / Gemini / Grok.
2. **Ports** — MCP servers and Claude Skills that let agents hit canonical sources directly
3. **Hub** — PDF Agent Stack

Claude Code is the implementation engine. Rules and acceptance criteria stay with the human.

## ⚙️ How I run AI-driven development

Claude Code is the main engine; my own MCP servers and Skills sit inside the development loop. Details live in the [AI-Assisted Development Guide](./docs/ai-assisted-development.en.md).

1. **Rules first** — lock design and test procedure in `AGENTS.md` / `CLAUDE.md`; do not depend on one-off prompts
2. **Split the work** — research, implementation, review, and quality evaluation go to custom sub-agents + Skills. A human keeps the requirements and acceptance criteria
3. **Knowledge via my MCP families** — cross-check the spec (canonical text) against the artifact (PDF / Web Spec / houki-hub)
4. **Quality gates** — `Issue → implement → test → PR`, plus spec checks and automatic evaluators such as xCOMET

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

| Category                                                                                                                                                                          | Overview                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 📱 [Web Apps & Tools](./docs/web-apps.en.md)                                                                                                                                      | PWAs and practical tools such as [e-shiwake](https://github.com/shuji-bonji/e-shiwake) / [fact-checklist](https://github.com/shuji-bonji/fact-checklist) / [marble-to-svg](https://github.com/shuji-bonji/marble-to-svg) / [WebAPI Test Tool](https://github.com/shuji-bonji/WebAPI-Test-Execution-Tool-using-Step-CI-runner)                                                                                                                                                                                                                                                                                                                                                                                   |
| 📖 [Sites & Books](./docs/sites-books.en.md)                                                                                                                                      | Learning sites on [RxJS](https://shuji-bonji.github.io/RxJS-with-TypeScript/) / [Svelte 5 / SvelteKit](https://shuji-bonji.github.io/Svelte-and-SvelteKit-with-TypeScript/) / [Web Components](https://shuji-bonji.github.io/WebComponents-with-TypeScript/) / [TDD](https://shuji-bonji.github.io/Notes-on-Test-Driven-Development/), plus the Zenn book [Neovim for the AI-Driven Development Era](https://zenn.dev/shuji_bonji/books/neovim-ide-on-mac)                                                                                                                                                                                                                                                |
| 🤖 [AI-Assisted Development Guide](./docs/ai-assisted-development.en.md)                                                                                                          | Workflows and notes for collaborating with AI agents — [Understanding LLMs through Claude Code](https://shuji-bonji.github.io/understanding-llm-through-claude-code/ja/) / [AI Agent Architecture](https://shuji-bonji.github.io/ai-agent-architecture/ja/) (both in Japanese)                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 📦 [Claude Plugins (Marketplace)](https://github.com/shuji-bonji/claude-plugins)                                                                                                  | Marketplace for installing my MCP / Skill / Slash Command / Sub-agent extensions via `/plugin install`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 🔌 [MCP Servers](./docs/mcp-servers.en.md) [![npm](https://img.shields.io/badge/npm-shuji--bonji-CB3837?style=flat&logo=npm&logoColor=white)](https://www.npmjs.com/~shuji-bonji) | Four families — [PDF](https://github.com/shuji-bonji/shuji-bonji/blob/main/docs/mcp-servers.en.md#-pdf-family) (→ [PDF Agent Stack](https://shuji-bonji.github.io/pdf-agent-stack/), the family hub), [Web Spec](https://github.com/shuji-bonji/shuji-bonji/blob/main/docs/mcp-servers.en.md#-web-spec-family), [houki-hub](https://github.com/shuji-bonji/shuji-bonji/blob/main/docs/mcp-servers.en.md#-houki-hub-family), [DTIR](https://github.com/shuji-bonji/shuji-bonji/blob/main/docs/mcp-servers.en.md#-dtir-family) — plus standalone MCPs ([epsg](https://www.npmjs.com/package/@shuji-bonji/epsg-mcp) / [ifc-core](https://www.npmjs.com/package/@shuji-bonji/ifc-core-mcp) / [xcomet](https://www.npmjs.com/package/xcomet-mcp-server) / [rxjs](https://www.npmjs.com/package/@shuji-bonji/rxjs-mcp)) |
| 🧩 [Claude Skills](./docs/claude-skills.en.md)                                                                                                                                    | Reusable workflow skills: [pdf-trust](https://github.com/shuji-bonji/pdf-trust-skill) , [pdf-publish](https://github.com/shuji-bonji/pdf-publish-skill) , [houki-research](https://github.com/shuji-bonji/houki-research-skill) , [factcheck](https://github.com/shuji-bonji/factcheck-skill) , [media-literacycheck-skill](https://github.com/shuji-bonji/media-literacycheck-skill) , [spec-compliance-skills](https://github.com/shuji-bonji/spec-compliance-skills/) , [deepl-glossary-translation](https://github.com/shuji-bonji/deepl-glossary-translation), and more                                                                                                                                                                                                      |
| 📓 [Notes](./docs/notes.en.md)                                                                                                                                                    | Notes and starter kits: digital signatures, PWA, design patterns, local-LLM infra, [Manifest of Authenticity](https://github.com/shuji-bonji/Manifest-of-Authenticity) (Draft — an open spec for describing digital-asset authenticity), and the DTIR translation pipeline (PoC)                                                                                                                                                                                                                                                                                                                                                              |

## 🏠 Monuments

[Resume editor](https://github.com/shuji-bonji/resume_editting) — built in 2021 as my very first web app while learning JavaScript. The source is really embarrassing to look at now, but this is where it all started for me. [Live demo here](https://shuji-bonji.github.io/resume_editting/)

## 📬 Contact

[![GitHub](https://img.shields.io/badge/GitHub-shuji--bonji-181717?style=flat&logo=github&logoColor=white)](https://github.com/shuji-bonji)
[![npm](https://img.shields.io/badge/npm-shuji--bonji-CB3837?style=flat&logo=npm&logoColor=white)](https://www.npmjs.com/~shuji-bonji)
[![Qiita](https://img.shields.io/badge/Qiita-shuji--bonji-55C500?style=flat&logo=qiita&logoColor=white)](https://qiita.com/shuji-bonji)
[![Zenn](https://img.shields.io/badge/Zenn-shuji__bonji-3EA8FF?style=flat&logo=zenn&logoColor=white)](https://zenn.dev/shuji_bonji)
