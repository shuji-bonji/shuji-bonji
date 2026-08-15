# 🤖 AI-Assisted Development Guide

[← Back to README](../README.en.md) · 🌐 [日本語版](./ai-assisted-development.md)

A collection of workflows and notes for collaborating with AI agents (Claude / Claude Code / GitHub Copilot, etc.) during development.

- **Design-first**: humans stay responsible for spec and architecture; AI is not asked to make those calls.
- **Structured documentation**: MCP servers, Skills, and specs are organized so AI can read them reliably.
- **Tight verification loop**: prompt → output → spec check → fix, iterated quickly.

### Daily loop (Claude Code)

Day-to-day implementation runs on Claude Code. This is not one-off chat completion; it is a loop.

1. **Rules first** — put `AGENTS.md` / `CLAUDE.md` in the repo so design, tests, and prohibitions stay fixed. Do not invent a new prompt every time.
2. **Connect my own MCP / Skills** — let agents read specs (PDF / RFC / W3C / statutes) and artifacts (files, compat data, tax circulars) as families. Do not outsource research to a web search.
3. **Split the roles** — research, implementation, review, and quality evaluation go to custom sub-agents + Skills. A human keeps requirements, acceptance criteria, and design review.
4. **Pass quality gates** — lock `Issue → implement → test → PR`, and put spec checks and automatic evaluators such as xCOMET on the pipeline. Failures go back into the loop.

On the public app (e-shiwake), I build the MCP the work needs first, then use that tool to build the product. “Build the tools that let AI build — then use them to build things that last” is a procedure, not a slogan.

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

---

[← Back to README](../README.en.md)
