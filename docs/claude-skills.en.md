# 🧩 Claude Skills

[← Back to README](../README.en.md) · 🌐 [日本語版](./claude-skills.md)

Skills callable from Claude / Claude Code to reuse domain-specific workflows.

| Skill                          | Description                                                                                                                                                                                               | Links                                                               |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| **pdf-trust-skill**            | Orchestrates the PDF family MCPs to audit PDF authenticity (signature verification, tamper detection, PAdES / PDF/A, legal cross-referencing) and returns a Trust Report with an explicit recommendation. | [GitHub](https://github.com/shuji-bonji/pdf-trust-skill)            |
| **houki-research-skill**       | Orchestration skill for legal research across the houki-hub MCP family. Encodes the lookup order (statute → cabinet order → ministerial order → notice → PDF → case law) and regulated-profession safeguards. | [GitHub](https://github.com/shuji-bonji/houki-research-skill)       |
| **factcheck-skill**            | Fact-checking skill for Claude Code / Cowork — evaluates information reliability scientifically.                                                                                                          | [GitHub](https://github.com/shuji-bonji/factcheck-skill)            |
| **media-literacycheck-skill**  | LLM skill that evaluates online information from a media-literacy perspective.                                                                                                                            | [GitHub](https://github.com/shuji-bonji/media-literacycheck-skill)  |
| **spec-compliance-skills**     | Cowork plugin for checking compliance against W3C / IETF specifications.                                                                                                                                  | [GitHub](https://github.com/shuji-bonji/spec-compliance-skills/)    |
| **deepl-glossary-translation** | Translation workflow for PDF specifications using DeepL with a shared glossary for term consistency.                                                                                                      | [GitHub](https://github.com/shuji-bonji/deepl-glossary-translation) |

> [!NOTE]
> **pdf-trust-skill** orchestrates the [PDF family](./mcp-servers.en.md#-pdf-family) MCPs, and **houki-research-skill** orchestrates the [houki-hub family](./mcp-servers.en.md#-houki-hub-family) MCPs.

---

[← Back to README](../README.en.md)
