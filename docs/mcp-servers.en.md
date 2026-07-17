# 🔌 MCP Servers

[← Back to README](../README.en.md) · 🌐 [日本語版](./mcp-servers.md)

MCP servers that let AI agents (Claude, etc.) interact with external specs and data sources.
Cross-domain groupings with a coherent story are split out as **families** under their own headings.

## 📄 PDF family

**A three-layer MCP family that treats PDF as "canon × substance × authenticity"**.
One layer **delivers the PDF specifications themselves — ISO 32000 (PDF 2.0), PDF 1.7, PDF/UA, the TS 32001 series — as a structured canonical reference for LLMs**, another **inspects the internals of actual PDF files at a low level (objects, xref tables, streams, tag structure)**, and a third **cryptographically verifies digital signatures and detects tampering**. Combined, they enable PDF analysis and verification that is genuinely aware of spec compliance.

| MCP Server         | Layer                             | Description                                                                                                                                                   | Links                                                                                                                      |
| ------------------ | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| **pdf-spec-mcp**   | Spec layer (canon)                | Structured access to the ISO 32000-series PDF specification. Section retrieval, requirement extraction (shall / must), definition lookup, version comparison. | [npm](https://www.npmjs.com/package/@shuji-bonji/pdf-spec-mcp) · [GitHub](https://github.com/shuji-bonji/pdf-spec-mcp)     |
| **pdf-reader-mcp** | Substance layer (parsing)         | Extract text, tables, signatures, tags, fonts, and metadata, plus inspect internal structure (objects, xref tables, etc.).                                    | [npm](https://www.npmjs.com/package/@shuji-bonji/pdf-reader-mcp) · [GitHub](https://github.com/shuji-bonji/pdf-reader-mcp) |
| **pdf-verify-mcp** | Verification layer (authenticity) | Cryptographic signature verification, tamper detection, PAdES baseline level detection, PDF/A / PDF/UA conformance identification and validation.             | [npm](https://www.npmjs.com/package/@shuji-bonji/pdf-verify-mcp) · [GitHub](https://github.com/shuji-bonji/pdf-verify-mcp) |

[pdf-trust-skill](https://github.com/shuji-bonji/pdf-trust-skill) is the Skill that orchestrates this family to audit "can I trust this PDF?" (→ [Claude Skills](./claude-skills.en.md)).

> [!NOTE]
> Where **pdf-reader-mcp** tells you _what is in_ a PDF, **pdf-verify-mcp** tells you _whether it is genuine_ — cryptographic signature verification, detection of changes after signing, and LTV (B-LT / B-LTA) assessment.

> [!TIP]
> Most PDF MCPs stop at "extract text". This family **canonicalizes the PDF specification itself as a first-class queryable reference and cross-links it with substance-level analysis and authenticity verification**. Aimed at use cases where spec compliance actually matters: digital signatures, PDF/UA conformance, PDF/A validation, and so on.

## 🌐 Web Spec family

**An MCP family for handling Web / Internet standards as structured data, accessible from AI**.
The **spec side** (IETF RFCs and W3C / WHATWG — HTML / CSS / WebIDL / PWA, etc.) and the **implementation compatibility data (Baseline / BCD)** are separated into dedicated MCPs, so "what the spec requires" and "what browsers actually support today" can be cross-referenced within the same conversation.

| MCP Server         | Layer                   | Description                                                                                    | Links                                                                                                                      |
| ------------------ | ----------------------- | ---------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| **rfcxml-mcp**     | IETF (spec)             | IETF RFC (XML2RFC v3) — structure parsing, requirement extraction, RFC dependency lookups.     | [npm](https://www.npmjs.com/package/@shuji-bonji/rfcxml-mcp) · [GitHub](https://github.com/shuji-bonji/rfcxml-mcp)         |
| **w3c-mcp**        | W3C / WHATWG (spec)     | Lookups across W3C / WHATWG specifications (HTML elements, CSS properties, WebIDL, PWA, etc.). | [npm](https://www.npmjs.com/package/@shuji-bonji/w3c-mcp) · [GitHub](https://github.com/shuji-bonji/w3c-mcp)               |
| **web-compat-mcp** | Implementation (compat) | Browser compatibility checks based on Baseline / Browser Compat Data.                          | [npm](https://www.npmjs.com/package/@shuji-bonji/web-compat-mcp) · [GitHub](https://github.com/shuji-bonji/web-compat-mcp) |

> [!TIP]
> Useful when you want AI to surface **spec × implementation** discrepancies — "the spec says MUST but the feature isn't in Baseline yet", "this RFC Updates that other RFC" — by invoking all three MCPs from the same conversation.

## 📚 houki-hub family

**An integrated ecosystem for handling Japanese laws, regulations, and authority notices with AI.**
Each family member aims to ship as a one-set bundle: an MCP server, a TypeScript library, a Claude Skill, and a documentation site.

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

| Package                        | Layer         | Description                                                                                            | Links                                                               |
| ------------------------------ | ------------- | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------- |
| **doc-translation-ir**         | Contract (IR) | Design doc, type definitions, and JSON Schema (v0.1) for DTIR, the shared intermediate representation. | [GitHub](https://github.com/shuji-bonji/doc-translation-ir)         |
| **dtir-ooxml-reader-mcp**      | reader        | Converts `.docx` into a DTIR segment table; reconciles language via tag × local detection.             | [GitHub](https://github.com/shuji-bonji/dtir-ooxml-reader-mcp)      |
| **dtir-translate-mcp**         | translate     | Fills DTIR `translation`/`quality`. Per-`group` batching, engine-agnostic (DeepL / LLM).               | [GitHub](https://github.com/shuji-bonji/dtir-translate-mcp)         |
| **dtir-ooxml-writer-mcp**      | writer        | Generates the translated `.docx` by patching the original by `id` from translated DTIR.                | [GitHub](https://github.com/shuji-bonji/dtir-ooxml-writer-mcp)      |
| **dtir-docx-pipeline**         | pipeline      | End-to-end harness binding reader → translate → writer together.                                       | [GitHub](https://github.com/shuji-bonji/dtir-docx-pipeline)         |
| **local-llm-on-apple-silicon** | Support (env) | Local LLM runtime on Apple Silicon (for translate's local engine). 🚧 In progress.                     | [GitHub](https://github.com/shuji-bonji/local-llm-on-apple-silicon) |

## 🧰 Other MCP servers

Standalone MCPs that don't belong to a family.

**Domain-specific** — structured access to specifications and datasets in specific domains.

| MCP Server       | Category           | Description                                           | Links                                                                                                                  |
| ---------------- | ------------------ | ----------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| **epsg-mcp**     | Geospatial         | EPSG CRS lookup and transformation suggestions        | [npm](https://www.npmjs.com/package/@shuji-bonji/epsg-mcp) · [GitHub](https://github.com/shuji-bonji/epsg-mcp)         |
| **ifc-core-mcp** | Architecture (BIM) | IFC 4.3 entities, inheritance, and PropertySet lookup | [npm](https://www.npmjs.com/package/@shuji-bonji/ifc-core-mcp) · [GitHub](https://github.com/shuji-bonji/ifc-core-mcp) |

**Quality / Dev tooling** — quality evaluation and developer support (no npm scope — naming differs from the others).

| MCP Server            | Category         | Description                                              | Links                                                                                                                 |
| --------------------- | ---------------- | -------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| **xcomet-mcp-server** | MT quality       | Machine translation quality evaluation powered by xCOMET | [npm](https://www.npmjs.com/package/xcomet-mcp-server) · [GitHub](https://github.com/shuji-bonji/xcomet-mcp-server)   |
| **rxjs-mcp-server**   | RxJS dev tooling | Execute, debug, and visualize RxJS streams               | [npm](https://www.npmjs.com/package/@shuji-bonji/rxjs-mcp) · [GitHub](https://github.com/shuji-bonji/rxjs-mcp-server) |

---

[← Back to README](../README.en.md)
