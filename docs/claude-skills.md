# 🧩 Claude Skills

[← README に戻る](../README.md) · 🌐 [English version](./claude-skills.en.md)

Claude / Claude Code から呼び出して、特定領域の作業ワークフローを再利用するための Skill 群。

| スキル                         | 説明                                                                                                                                     | リンク                                                              |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| **pdf-trust-skill**            | PDF family MCP 群を編成し、PDF の真正性（署名検証・改ざん検知・PAdES / PDF/A・法令照合）を監査して推奨判定付き Trust Report を返すスキル | [GitHub](https://github.com/shuji-bonji/pdf-trust-skill)            |
| **houki-research-skill**       | houki-hub MCP family を横断する法令リサーチのオーケストレーション Skill（法律→政令→省令→通達→PDF→判例の参照順序・業法独占への配慮を内蔵） | [GitHub](https://github.com/shuji-bonji/houki-research-skill)       |
| **factcheck-skill**            | 情報の信頼性を科学的・体系的に評価する、Claude Code / Cowork 用ファクトチェック・スキル                                                  | [GitHub](https://github.com/shuji-bonji/factcheck-skill)            |
| **media-literacycheck-skill**  | インターネット上の情報の信頼性を メディアリテラシー の観点から体系的に評価する、LLM 用スキル                                             | [GitHub](https://github.com/shuji-bonji/media-literacycheck-skill)  |
| **spec-compliance-skills**     | W3C/IETF仕様への準拠性をチェックするためのCoworkプラグイン                                                                               | [GitHub](https://github.com/shuji-bonji/spec-compliance-skills/)    |
| **deepl-glossary-translation** | PDF仕様書翻訳ワークフロー（DeepL＋用語集）                                                                                               | [GitHub](https://github.com/shuji-bonji/deepl-glossary-translation) |

> [!NOTE]
> **pdf-trust-skill** は [PDF family](./mcp-servers.md#-pdf-family)、**houki-research-skill** は [houki-hub family](./mcp-servers.md#-houki-hub-family) の MCP 群を編成するオーケストレーション Skill です。

---

[← README に戻る](../README.md)
