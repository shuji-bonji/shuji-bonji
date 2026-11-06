# 🧭 What I am working on (as of November 2026)

[← Back to README](../README.en.md)

I rewrite this page roughly once a month. The README keeps only the headlines; the details are here.

## Hands-on now

- **[s1000d-stack](https://shuji-bonji.github.io/s1000d-stack/)** — four MCP servers, the shared library [s1000d-core](https://github.com/shuji-bonji/s1000d-core) and four Skills that let an LLM read S1000D data modules (the technical-publication standard used in aerospace and defence), check them against BREX (Business Rules Exchange — a data module that carries the customer's business rules) and produce them without letting the LLM write XML. Everything that can be checked deterministically is done by core; the LLM is limited to prose and explanation
- **Experiential-manual editor (SvelteKit / PWA)** — builds manuals you learn by operating a screen, and emits S1000D data modules from their JSON. A rebuild of my 2021 piece [experience_based_operation_explanation](https://github.com/shuji-bonji/experience_based_operation_explanation); prototype stage
- **Measuring published versions from outside** — running PDF Agent Stack and s1000d-stack end to end on other hosts and OSes such as Grok Build, and fixing what breaks through Issues ([TRIAL-PLAYBOOK](https://github.com/shuji-bonji/pdf-agent-stack/blob/main/eval/TRIAL-PLAYBOOK.md))

## Keeping going

- **Adapting spec-ids to OpenSpec and bringing it to the PDF series** — [spec-ids](https://github.com/shuji-bonji/spec-ids) is a CLI that gives each requirement in a spec and its tests the same spec ID and lets CI block the PR when they disagree. It now reads the [OpenSpec](https://github.com/Fission-AI/OpenSpec) layout and has been applied to pdf-reader-mcp first. The remaining three servers follow once the trials above settle

## Trying next

- **An S1000D viewer (IETP)** — a browser viewer for experiential manuals and S1000D data modules. It will support WebMCP so that, as in [e-shiwake](https://github.com/shuji-bonji/e-shiwake), an AI agent can operate it
- **My own browser UI for [agentchattr](https://github.com/bcurts/agentchattr)** — a tool that puts several AI coding agents into one chat. I will rebuild its UI so the user can call the LLMs they have configured from the browser

## On hold

- **RAG / KAG for [houki-hub](https://shuji-bonji.github.io/houki-hub/)** — RAG retrieves related documents before handing them to the LLM; KAG (Knowledge Augmented Generation) also hands over the references between provisions. The aim is to reduce the misses of per-query search
- **Extending [normativepdf](https://github.com/shuji-bonji/normativepdf)** — a TypeScript PDF library where every behaviour is tied to an ISO 32000 clause. It will replace the part of pdf-writer-mcp that delegates to `pdf-lib`, so that a clause violation can be fixed and not merely reported
- **Connecting [ai-design-advisor](https://github.com/shuji-bonji/ai-design-advisor) to [HEXIS](https://github.com/shuji-bonji/HEXIS) / [Manifest of Authenticity](https://github.com/shuji-bonji/Manifest-of-Authenticity)** — placing a design decision on a spec for decision structure (HEXIS) and a spec for the authenticity of the result (MoA)
