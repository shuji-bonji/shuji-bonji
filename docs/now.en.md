# 🧭 What I am working on (as of November 2026)

[← Back to README](../README.en.md)

I rewrite this page roughly once a month. The README keeps only the headlines; the details are here.

## Hands-on now

- **[s1000d-stack](https://shuji-bonji.github.io/s1000d-stack/)** — four MCP servers, the shared library [s1000d-core](https://github.com/shuji-bonji/s1000d-core) and four Skills that let an LLM read S1000D data modules (the technical-publication standard used in aerospace and defence), check them against BREX (Business Rules Exchange — a data module that carries the customer's business rules) and produce them without letting the LLM write XML. Everything that can be checked deterministically is done by core; the LLM is limited to prose and explanation. In November 2026 I have been checking reading and conversion against a real technical manual and the official S1000D samples (Bike Samples), and adding what was missing. Up to 0.6.0, s1000d-writer-mcp gained editing of existing data modules (`edit_data_module`) and revisions that start an in-work issue from a released one (`start_revision`, `add_reason_for_update`)
- **[Experiential-manual editor](https://github.com/shuji-bonji/experiential-manual-editor) (SvelteKit / PWA)** — you draw clickable areas (hotspots) on screenshots and build manuals that are learned by operating the screen. A rebuild of my 2021 piece [experience_based_operation_explanation](https://github.com/shuji-bonji/experience_based_operation_explanation); prototype stage. A manual is saved with its images as one file (`.emanual`) and can be exported as a single HTML file that the recipient only has to open in a browser. Its JSON is converted to S1000D data modules by `convert_manual` in s1000d-writer-mcp
- **[MutualSpec](https://github.com/shuji-bonji/mutualspec)** — a spec-driven development framework: specs are written in Markdown and YAML per business boundary (a bounded context in DDD), and a tool decides whether they follow the rules. The rule model follows S1000D BREX, and requirements are checked against the characteristics of ISO/IEC/IEEE 29148. The tool decides pass or fail, the LLM proposes changes, and a person approves. The design documents, JSON Schemas, default rule set, templates and a sample were published on 2026-11-19 (JST). The CLI is not implemented yet
- **Measuring published versions from outside** — running PDF Agent Stack and s1000d-stack end to end on other hosts and OSes such as Grok Build, and fixing what breaks through Issues ([TRIAL-PLAYBOOK](https://github.com/shuji-bonji/pdf-agent-stack/blob/main/eval/TRIAL-PLAYBOOK.md))

## Keeping going

- **Adapting spec-ids to OpenSpec and bringing it to the PDF series** — [spec-ids](https://github.com/shuji-bonji/spec-ids) is a CLI that gives each requirement in a spec and its tests the same spec ID and lets CI block the PR when they disagree. It now reads the [OpenSpec](https://github.com/Fission-AI/OpenSpec) layout and has been applied to pdf-reader-mcp first. The remaining three servers follow once the trials above settle

## Trying next

- **An S1000D viewer (IETP)** — a browser viewer for experiential manuals and S1000D data modules. It is a project separate from s1000d-stack and starts after the experiential-manual editor. It will support WebMCP so that, as in [e-shiwake](https://github.com/shuji-bonji/e-shiwake), an AI agent can operate it
- **Building ai-collab-platform** — my own workbench for splitting one task across several AI agents. It combines four parts
  - [agentchattr](https://github.com/bcurts/agentchattr), a tool that puts several AI coding agents into one chat, as the conversation layer
  - LLM connections in the same way as [e-shiwake](https://github.com/shuji-bonji/e-shiwake): an OpenAI-compatible `/v1/chat/completions` endpoint selected by `baseUrl` and `apiKey` settings, with API keys stored only in the browser. Local LLMs, OpenAI, Anthropic and Gemini are switched in settings
  - the steps between agents written as a [LangGraph](https://github.com/langchain-ai/langgraphjs) workflow. The workflow spec is written in the [OpenSpec](https://github.com/Fission-AI/OpenSpec) layout, and [spec-ids](https://github.com/shuji-bonji/spec-ids) blocks the CI when the spec and the tests disagree
  - the execution trace (which agent ran, with what input, and what it returned) viewed in [LangSmith](https://www.langchain.com/langsmith)

## On hold

- **RAG / KAG for [houki-hub](https://shuji-bonji.github.io/houki-hub/)** — RAG retrieves related documents before handing them to the LLM; KAG (Knowledge Augmented Generation) also hands over the references between provisions. The aim is to reduce the misses of per-query search
- **Extending [normativepdf](https://github.com/shuji-bonji/normativepdf)** — a TypeScript PDF library where every behaviour is tied to an ISO 32000 clause. It will replace the part of pdf-writer-mcp that delegates to `pdf-lib`, so that a clause violation can be fixed and not merely reported
- **Connecting [ai-design-advisor](https://github.com/shuji-bonji/ai-design-advisor) to [HEXIS](https://github.com/shuji-bonji/HEXIS) / [Manifest of Authenticity](https://github.com/shuji-bonji/Manifest-of-Authenticity)** — placing a design decision on a spec for decision structure (HEXIS) and a spec for the authenticity of the result (MoA)
