# 🤖 AI-Assisted Development Guide

[← Back to README](../README.en.md) · 🌐 [日本語版](./ai-assisted-development.md)

The sites that explain why the MCP servers, Skills, and apps I publish are structured the way they are, and how I implement day to day on that basis — the workflows and notes for developing together with AI agents such as Claude / Claude Code / GitHub Copilot.

## Ground rules for development

- **Humans decide the design** — the call on what to build and how is not handed over to AI; the spec and the architecture stay a human responsibility
- **Keep the material structured** — MCP servers, Skills, and specs are arranged so that AI can read them reliably
- **Verify in short cycles** — prompt → output → check against the spec → fix, repeated quickly

## Daily loop (Claude Code)

Day-to-day implementation runs on Claude Code. Rather than completing things in a one-off chat, I repeat the following steps.

1. **Rules first** — put `AGENTS.md` / `CLAUDE.md` in the repository, recording the design policy, the test procedure, and what must not be done. That removes the need to rethink the prompt every time.
2. **Connect my own MCP servers / Skills** — let agents read the source text of specifications (PDF / RFC / W3C / statutes) alongside actual files, compatibility data, and circulars, family by family. Research is not left to a web search.
3. **Split the roles** — research, implementation, review, and quality evaluation are shared out across sub-agents and Skills. Fixing the requirements, the acceptance criteria, and the design review stays with the human.
4. **Pass the quality gates** — fix the flow as `Issue → implement → test → PR`, and put spec checks and automatic evaluation such as xCOMET on the pipeline. If a result falls short of the criteria, the work goes back to that step.

## The rationale behind what I publish

For e-shiwake, I built the MCP servers the work needed first, then implemented the product itself with those tools. "Build the tools that let AI build, then use them to build things that last" is a working procedure, not a slogan.

| Phase | Role | Project                                         | Description                                                                                                                                                                              | Links                                                                                                                                                            |
| :---: | :--- | :---------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   1   | Why  | **understanding-llm-through-claude-code**       | Understand the structural constraints of LLMs and learn the design philosophy of Claude Code — _why_ a setting is what it is.                                                            | [Site](https://shuji-bonji.github.io/understanding-llm-through-claude-code/ja/) · [GitHub](https://github.com/shuji-bonji/understanding-llm-through-claude-code) |
|   2   | How  | **ai-agent-architecture**                       | Design philosophy, architecture, and field notes for integrating MCP, Skills, and AI agents.                                                                                             | [Site](https://shuji-bonji.github.io/ai-agent-architecture/ja/) · [GitHub](https://github.com/shuji-bonji/ai-agent-architecture)                                 |
|   3   |      | **Management-of-software-systems-and-services** | Apply AI to the body of [software systems & services management](https://github.com/shuji-bonji/Management-of-software-systems-and-services) practice that engineers built up before us. | <!-- [GitHub](https://github.com/shuji-bonji/Management-of-software-systems-and-services) -->                                                                    |

<!--
> [!NOTE]
> The way AI is leveraged in software development depends heavily on the role and stance involved.
> I'm starting by organizing nine perspectives on how humans engage with existing software,
> and looking at how AI can plug in — not as a drop-in replacement, but possibly as something that reshapes the picture entirely.
> - [Software Systems & Services Management](https://github.com/shuji-bonji/Management-of-software-systems-and-services)
-->

---

[← Back to README](../README.en.md)
