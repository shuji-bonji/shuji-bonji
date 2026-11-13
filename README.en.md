# shuji-bonji

🌐 [日本語版 (README.md)](./README.md)

**I build MCP (Model Context Protocol) servers and Skills that let AI agents read the source text of specifications, statutes and technical documents, and check or produce documents against fixed rules — and then build the apps and validators that run on those tools.**

Frontend is mainly TypeScript / Angular / RxJS / Svelte.
Backend is TypeScript / Node.js, plus some .NET C# Web API experience.
I spent a long time in operations and customer engineering before moving into software development.
Since October 2025 I have worked as a freelancer on projects built with Angular / RxJS / NgRx.

What I publish falls into six parts.

1. **A working app — [e-shiwake](https://github.com/shuji-bonji/e-shiwake)** ([demo](https://shuji-bonji.github.io/e-shiwake/)) — a journal and voucher-management PWA for sole proprietors. Seventeen tools are passed to both function calling and WebMCP (a way to expose tools to an AI agent from inside the browser), and any operation that rewrites data is approved by a person before it runs (HITL: Human in the Loop).
2. **Product families — [PDF Agent Stack](https://shuji-bonji.github.io/pdf-agent-stack/) / [houki-hub](https://shuji-bonji.github.io/houki-hub/) / [s1000d-stack](https://shuji-bonji.github.io/s1000d-stack/)** — PDF, Japanese law and S1000D technical documents are handled as families, not as individual servers. Code decides, the LLM explains. Which of the 17 LLM constraints each product addresses is listed in [Discussion #14](https://github.com/shuji-bonji/zenn-articles/discussions/14) (Japanese). RFCs are collected in [rfcxml-mcp](https://shuji-bonji.github.io/rfcxml-mcp/).
3. **Marketplace — [claude-plugins](https://github.com/shuji-bonji/claude-plugins)** — installs the MCP servers and Skills below from Claude Code with `/plugin install`. This is the entry point.
4. **The tools — [MCP servers](./docs/mcp-servers.en.md) / [Claude Skills](./docs/claude-skills.en.md)** — they let AI agents go straight to the source text of PDF / W3C / RFC / Japanese law / S1000D.
5. **Design rationale — [AI Agent Architecture](https://shuji-bonji.github.io/ai-agent-architecture/ja/) / [Understanding LLMs](https://shuji-bonji.github.io/understanding-llm-through-claude-code/ja/)** — a record of why the products above are split into the layers they are. Not how to use the products, but the constraints and how the pieces are put together. Why LLMs fail is organized as [17 constraints](https://zenn.dev/shuji_bonji/articles/llm-17-constraints) (Japanese).
6. **Design-decision support — [ai-design-advisor](https://github.com/shuji-bonji/ai-design-advisor)** — a Skill that names what has not been decided yet when you are shaping a generative-AI system.

Claude Code does the implementation; design policy and acceptance criteria stay with the human. Once something is published, I use it again from another host such as Grok Build, through the same path a user would take, and turn what breaks into Issues.

## ⚙️ How I run AI-driven development

Claude Code is the main engine; my own MCP servers and Skills sit inside the development loop. Details live in the [AI-Assisted Development Guide](./docs/ai-assisted-development.en.md).

Each step is there to hold back one of the failures that LLMs cause by the way they work ([17 constraints](https://zenn.dev/shuji_bonji/articles/llm-17-constraints), Japanese). The constraints each step targets are named at the end of the step. Among the constraints the products do not address, those such as Context Rot and Non-determinism are mainly held back by these steps. Some failures, such as hallucination, remain whatever steps are in place, so a human checks the diffs and the test results.

1. **Rules first** — lock design and test procedure in `AGENTS.md` / `CLAUDE.md`; do not depend on one-off prompts (Instruction Decay, Prompt Sensitivity)
2. **Split the work** — research, implementation, review, and quality evaluation go to custom sub-agents + Skills. A human keeps the requirements and acceptance criteria (Self-Evaluation Bias, Context Rot)
3. **Knowledge via my MCP families** — cross-check the spec (canonical text: PDF / Web Spec / Japanese law / S1000D) against the actual files and compatibility data (Hallucination, Knowledge Boundary)
4. **Quality gates** — `Issue → implement → test → PR`, plus spec checks and automatic evaluators such as xCOMET (a model that scores translation quality) (Compounding Errors, Hallucination)
5. **Measure from outside after release** — run the published npm version end to end on another host, OS and distribution form, and feed the results back as Issues ([pdf-agent-stack eval](https://github.com/shuji-bonji/pdf-agent-stack/tree/main/eval)) (Non-determinism, Self-Evaluation Bias)

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

| Category | What is there |
| --- | --- |
| 📦 [Claude Plugins (Marketplace)](https://github.com/shuji-bonji/claude-plugins) | The entry point for installing my MCP / Skill / Slash Command / Sub-agent extensions with `/plugin install` |
| 🔌 [MCP Servers](./docs/mcp-servers.en.md) [![npm](https://img.shields.io/badge/npm-shuji--bonji-CB3837?style=flat&logo=npm&logoColor=white)](https://www.npmjs.com/~shuji-bonji) | Five families — PDF / Web Spec / houki-hub / S1000D / DTIR — and the standalone MCP servers |
| 🧩 [Claude Skills](./docs/claude-skills.en.md) | Skills that package a working procedure so it can be reused as is |
| 📱 [Web Apps & Tools](./docs/web-apps.en.md) | PWAs and practical tools |
| 🧠 [Design rationale](./docs/ai-assisted-development.en.md) | Why the MCP servers, Skills and apps are structured the way they are, and the day-to-day implementation procedure |
| 📖 [Sites & Books](./docs/sites-books.en.md) | Learning sites on RxJS / Svelte / Web Components / TDD, and Zenn books |
| 📓 [Notes](./docs/notes.en.md) | Notes on digital signatures, PWA, local LLMs, [Manifest of Authenticity](https://github.com/shuji-bonji/Manifest-of-Authenticity) (an open spec for describing digital-asset authenticity) and more |
| 🧭 [Now](./docs/now.en.md) | What I am working on, trying next, and considering |

## 🧭 What I am working on (as of November 2026)

- **[s1000d-stack](https://shuji-bonji.github.io/s1000d-stack/)** — a family of MCP servers and Skills that lets an LLM read S1000D data modules (the technical-publication standard used in aerospace and defence), check them against BREX (the customer's business rules), and produce them without letting the LLM write XML
- **Experiential-manual editor (SvelteKit / PWA)** — builds manuals you learn by operating a screen, and emits S1000D data modules from their JSON. Prototype stage
- **Measuring published versions from outside** — running them end to end on other hosts and OSes, and fixing what breaks through Issues

What I keep going, what I will try next and what is on hold are in [docs/now.en.md](./docs/now.en.md).

## 🏠 Monuments

- [Resume editor](https://github.com/shuji-bonji/resume_editting) — built in 2021 as my very first web app while learning JavaScript. The source is really embarrassing to look at now, but this is where it all started for me. [Live demo here](https://shuji-bonji.github.io/resume_editting/)
- Graduation piece from vocational training: [experience_based_operation_explanation](https://github.com/shuji-bonji/experience_based_operation_explanation) — a 2021 assignment that overlays button areas on screenshots of a ticket machine and lets you walk through screen transitions defined in JSON, in the browser. It is where today's experiential-manual editor started.

## 📬 Contact

[![GitHub](https://img.shields.io/badge/GitHub-shuji--bonji-181717?style=flat&logo=github&logoColor=white)](https://github.com/shuji-bonji)
[![npm](https://img.shields.io/badge/npm-shuji--bonji-CB3837?style=flat&logo=npm&logoColor=white)](https://www.npmjs.com/~shuji-bonji)
[![Qiita](https://img.shields.io/badge/Qiita-shuji--bonji-55C500?style=flat&logo=qiita&logoColor=white)](https://qiita.com/shuji-bonji)
[![Zenn](https://img.shields.io/badge/Zenn-shuji__bonji-3EA8FF?style=flat&logo=zenn&logoColor=white)](https://zenn.dev/shuji_bonji)
