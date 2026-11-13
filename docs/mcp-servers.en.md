# 🔌 MCP Servers

[← Back to README](../README.en.md) · 🌐 [日本語版](./mcp-servers.md)

MCP servers that let AI agents (Claude, etc.) interact with external specs and data sources.
Cross-domain groupings with a coherent story are split out as **families** under their own headings.
Which of the 17 LLM constraints each server addresses, and how, is listed in [Discussion #14](https://github.com/shuji-bonji/zenn-articles/discussions/14) (Japanese).

> [!NOTE]
> The published MCP servers run on MCP SDK v2 (`@modelcontextprotocol/server` 2.x): the 13 servers published through 2025 were migrated, and the four S1000D family servers were written on v2 from the start. The DTIR family and localllm-mcp are still on v1.

## 📄 PDF family

**A four-layer MCP family that treats PDF as "canon × substance × authenticity × creation"**. Read, verify, write — grounded in the spec.
One layer **delivers the PDF specifications themselves — ISO 32000 (PDF 2.0), PDF 1.7, PDF/UA, the TS 32001 series — as a structured canonical reference for LLMs**, another **observes what is inside a PDF and where it is drawn (text, tables, tag structure, bboxes)**, a third **verifies signatures, detects tampering, and validates conformance**, and a fourth **creates and edits PDFs with the spec in mind**.
See the **[PDF Agent Stack site](https://shuji-bonji.github.io/pdf-agent-stack/)** and the [hub repository](https://github.com/shuji-bonji/pdf-agent-stack) for the full picture.

| MCP Server         | Layer                                       | Description                                                                                                                                                                        | Links                                                                                                                      |
| ------------------ | ------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| **pdf-spec-mcp**   | Spec layer (canon)                          | Structured access to the ISO 32000-series PDF specification. Section retrieval, requirement extraction (shall / must), definition lookup, version comparison.                      | [npm](https://www.npmjs.com/package/@shuji-bonji/pdf-spec-mcp) · [GitHub](https://github.com/shuji-bonji/pdf-spec-mcp)     |
| **pdf-reader-mcp** | Substance layer (observation)               | Observe text, tables, tags, fonts, signature fields, and internal structure (objects, xref), plus locate content on the page (bboxes).                                             | [npm](https://www.npmjs.com/package/@shuji-bonji/pdf-reader-mcp) · [GitHub](https://github.com/shuji-bonji/pdf-reader-mcp) |
| **pdf-verify-mcp** | Verification layer (authenticity & conformance) | Cryptographic signature verification, tamper detection, PAdES baseline level observation, PDF/A / PDF/UA validation, ISO 32000 clause checks, deterministic four-value verdicts (evaluate_policy). | [npm](https://www.npmjs.com/package/@shuji-bonji/pdf-verify-mcp) · [GitHub](https://github.com/shuji-bonji/pdf-verify-mcp) |
| **pdf-writer-mcp** | Creation layer (create & edit)              | Create PDFs from text / Markdown / tables and edit them with 20 tools (merge, split, annotations, bookmarks, forms, PDF/A / tagged declarations). CJK font embedding built in.      | [npm](https://www.npmjs.com/package/@shuji-bonji/pdf-writer-mcp) · [GitHub](https://github.com/shuji-bonji/pdf-writer-mcp) |

Two Skills orchestrate this family (→ [Claude Skills](./claude-skills.en.md)): [pdf-trust-skill](https://github.com/shuji-bonji/pdf-trust-skill) at the intake gate (audits "can I trust this PDF?" and returns a Trust Report) and [pdf-publish-skill](https://github.com/shuji-bonji/pdf-publish-skill) at the delivery gate (runs the write → read-back → verify quality loop and delivers with a Publish Report).

| Package             | Description                                                                                                                     | Links                                                                                                                        |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| **pdf-constraints** | A data library mapping ISO 32000 clauses to machine-checkable constraint tables, used by pdf-verify-mcp's clause checks (validate_clauses). | [npm](https://www.npmjs.com/package/@shuji-bonji/pdf-constraints) · [GitHub](https://github.com/shuji-bonji/pdf-constraints) |
| **normativepdf** 🚧 | A pure-TypeScript PDF library where every behaviour is tied to a clause of the ISO specifications, measured against veraPDF release by release. Intended to replace the part of pdf-writer-mcp that delegates to `pdf-lib` (early development). | [GitHub](https://github.com/shuji-bonji/normativepdf) |

> [!NOTE]
> Where **pdf-reader-mcp** tells you _what is in_ a PDF, **pdf-verify-mcp** tells you _whether it is genuine_. And **pdf-writer-mcp** "can write a claim of conformance but cannot make a file conform" — whatever it writes, verify measures. That division of labour is the family's design philosophy: the judge is code, the narrative is the LLM.

> [!TIP]
> Most PDF MCPs stop at "extract text". This family **canonicalizes the PDF specification itself as a first-class queryable reference and cross-links it with substance observation, authenticity verification, and creation**. Aimed at use cases where spec compliance actually matters: digital signatures, PDF/UA conformance, PDF/A validation, quality-gated delivery, and so on.

## 🌐 Web Spec family

**An MCP family for handling Web / Internet standards as structured data, accessible from AI**.
The **spec side** (IETF RFCs and W3C / WHATWG — HTML / CSS / WebIDL / PWA, etc.) and the **implementation compatibility data (Baseline / BCD)** are separated into dedicated MCPs, so "what the spec requires" and "what browsers actually support today" can be cross-referenced within the same conversation.

| MCP Server         | Layer                   | Description                                                                                    | Links                                                                                                                      |
| ------------------ | ----------------------- | ---------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| **rfcxml-mcp**     | IETF (spec)             | IETF RFC (XML2RFC v3) — structure parsing, requirement extraction, RFC dependency lookups.     | [Site](https://shuji-bonji.github.io/rfcxml-mcp/) · [npm](https://www.npmjs.com/package/@shuji-bonji/rfcxml-mcp) · [GitHub](https://github.com/shuji-bonji/rfcxml-mcp) |
| **w3c-mcp**        | W3C / WHATWG (spec)     | Lookups across W3C / WHATWG specifications (HTML elements, CSS properties, WebIDL, PWA, etc.). | [npm](https://www.npmjs.com/package/@shuji-bonji/w3c-mcp) · [GitHub](https://github.com/shuji-bonji/w3c-mcp)               |
| **web-compat-mcp** | Implementation (compat) | Browser compatibility checks based on Baseline / Browser Compat Data.                          | [npm](https://www.npmjs.com/package/@shuji-bonji/web-compat-mcp) · [GitHub](https://github.com/shuji-bonji/web-compat-mcp) |

> [!TIP]
> Useful when you want AI to surface **spec × implementation** discrepancies — "the spec says MUST but the feature isn't in Baseline yet", "this RFC Updates that other RFC" — by invoking all three MCPs from the same conversation.

## 📚 houki-hub family

**An integrated ecosystem for handling Japanese laws, regulations, and authority notices with AI.**
Each family member aims to ship as a one-set bundle: an MCP server, a TypeScript library, a Claude Skill, and a documentation site.
Coverage today: all fields of statute law (via the e-Gov Law API v2), and notices and Q&A from the National Tax Agency only. Other ministries will be added one MCP at a time, each built to the same shape.
See the **[houki-hub site](https://shuji-bonji.github.io/houki-hub/)** (published 2026-09-08) and the [hub repository](https://github.com/shuji-bonji/houki-hub) for the full picture.

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

## 🛫 S1000D family

An MCP family that lets an LLM read, check and produce data modules of S1000D, the technical-publication standard used in aerospace and defence.
Everything that can be checked deterministically — XSD, BREX (Business Rules Exchange: a data module carrying the customer's business rules), references and applicability — is done by the shared library s1000d-core; the LLM is limited to prose and explanation. The LLM never writes XML.
Because the specification, the XSDs and the default BREX cannot be redistributed, the servers point at the copies the user obtains from s1000d.org.
The overall layout is explained on the [s1000d-stack site](https://shuji-bonji.github.io/s1000d-stack/) and in the [hub repository](https://github.com/shuji-bonji/s1000d-stack).

| MCP server | Layer | Description | Links |
| --- | --- | --- | --- |
| **s1000d-brex-mcp** | Rules (BREX) | Reads BREX data modules and checks data modules against them. Lookups for SNS, notations and values | [npm](https://www.npmjs.com/package/@shuji-bonji/s1000d-brex-mcp) · [GitHub](https://github.com/shuji-bonji/s1000d-stack/tree/main/mcp/s1000d-brex-mcp) |
| **s1000d-verify-mcp** | Verification | Schema validation with the user's own XSDs, BREX checks, reference integrity, applicability, reconciliation with the DML, fix suggestions (suggest_fixes) and whole-CSDB verification | [npm](https://www.npmjs.com/package/@shuji-bonji/s1000d-verify-mcp) · [GitHub](https://github.com/shuji-bonji/s1000d-stack/tree/main/mcp/s1000d-verify-mcp) |
| **s1000d-reader-mcp** | Observation | Reads data modules and publication modules as structure (sections, steps, warnings, figures, references). ICN metadata, reference resolution, applicability explained in words | [npm](https://www.npmjs.com/package/@shuji-bonji/s1000d-reader-mcp) · [GitHub](https://github.com/shuji-bonji/s1000d-stack/tree/main/mcp/s1000d-reader-mcp) |
| **s1000d-writer-mcp** | Authoring / repair | Builds data modules from a structured draft, applies fix candidates, extracts and re-applies segments for translation, converts experiential manuals (JSON), creates comment DMs | [npm](https://www.npmjs.com/package/@shuji-bonji/s1000d-writer-mcp) · [GitHub](https://github.com/shuji-bonji/s1000d-stack/tree/main/mcp/s1000d-writer-mcp) |

| Package | Description | Links |
| --- | --- | --- |
| **s1000d-core** | The library shared by the four servers: DMC / ICN parsing, the identification and status section, the XML / XPath layer | [npm](https://www.npmjs.com/package/@shuji-bonji/s1000d-core) · [GitHub](https://github.com/shuji-bonji/s1000d-stack/tree/main/lib/s1000d-core) |
| **experiential-manual-model** | Data model for experiential manuals (screens with hotspots, screen flows, procedures, troubleshooting): TypeScript types and JSON Schema | [npm](https://www.npmjs.com/package/@shuji-bonji/experiential-manual-model) · [GitHub](https://github.com/shuji-bonji/s1000d-stack/tree/main/lib/experiential-manual-model) |

Four Skills orchestrate this family (→ [Claude Skills](./claude-skills.en.md)): conversion from experiential manuals (experience-to-s1000d), authoring (s1000d-publish), review (s1000d-review) and translation (s1000d-translate).

> [!NOTE]
> **s1000d-reader-mcp** answers "what does this data module say"; **s1000d-verify-mcp** answers "does it conform to the standard and the BREX".
> **s1000d-writer-mcp** assembles the XML but does not judge conformance. After writing, s1000d-verify-mcp always checks the result.

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
| **local-llm-on-mac**           | Support (env) | Local LLM runtime on a Mac (for translate's local engine). 🚧 In progress.                             | [GitHub](https://github.com/shuji-bonji/local-llm-on-mac) |

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
