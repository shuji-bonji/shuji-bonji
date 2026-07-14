# 🤖 AI-Assisted Development Guide

[← Back to README](../README.en.md) · 🌐 [日本語版](./ai-assisted-development.md)

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

---

[← Back to README](../README.en.md)
