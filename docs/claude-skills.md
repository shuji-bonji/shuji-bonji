# 🧩 Claude Skills

[← README に戻る](../README.md) · 🌐 [English version](./claude-skills.en.md)

Claude / Claude Code から呼び出して、特定の分野の作業手順をそのまま再利用するための Skill です。

| スキル                         | 説明                                                                                                                                     | リンク                                                              |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| **pdf-trust-skill**            | PDF family の MCP サーバーをまとめて動かし、PDF の真正性（署名の検証・改ざんの検知・PAdES / PDF/A・法令との照合）を監査して、推奨する対応を添えた Trust Report を返す | [GitHub](https://github.com/shuji-bonji/pdf-trust-skill)            |
| **pdf-publish-skill**          | PDF family の MCP サーバーで、書く → 読み戻す → 検証する、という順に品質を確かめてから、Publish Report を添えて納品する             | [GitHub](https://github.com/shuji-bonji/pdf-publish-skill)          |
| **pdf-read-skill**             | 大きな PDF・読めない PDF から必要な箇所だけを取り出す読み取りオーケストレーション Skill。ページ数・タグ・暗号化・テキスト抽出の可否を先に測り、構造／絞り込み／画像のいずれかの経路で読む | [GitHub](https://github.com/shuji-bonji/pdf-read-skill)             |
| **houki-research-skill**       | houki-hub の MCP サーバーを横断して法令を調べる。法律 → 政令 → 省令 → 通達 → PDF → 判例という参照の順序と、業務独占資格の範囲への配慮を組み込んでいる | [GitHub](https://github.com/shuji-bonji/houki-research-skill)       |
| **ai-design-advisor**          | 生成 AI システムの設計判断を支援する Skill。ユースケースを入力すると、決まっていないことを名指しし、canonical に書かれた範囲だけを返す。入力が足りないときに推測で埋めない | [GitHub](https://github.com/shuji-bonji/ai-design-advisor)          |
| **factcheck-skill**            | 記事・URL・主張の信頼性を、決められた評価項目に沿って点検する（Claude Code / Cowork 用）                                                  | [GitHub](https://github.com/shuji-bonji/factcheck-skill)            |
| **media-literacycheck-skill**  | インターネット上の情報を、メディアリテラシーの観点から点検する                                             | [GitHub](https://github.com/shuji-bonji/media-literacycheck-skill)  |
| **spec-compliance-skills**     | W3C / IETF の仕様に沿っているかを点検する Cowork プラグイン                                                                               | [GitHub](https://github.com/shuji-bonji/spec-compliance-skills/)    |
| **deepl-glossary-translation** | DeepL と用語集を組み合わせて、PDF の仕様書を用語を揃えたまま翻訳する                                                                                               | [GitHub](https://github.com/shuji-bonji/deepl-glossary-translation) |

> [!NOTE]
> **pdf-trust-skill**（受け取った PDF の監査）・**pdf-publish-skill**（PDF の納品）・**pdf-read-skill**（PDF の読み取り）は [PDF family](./mcp-servers.md#-pdf-family) の、**houki-research-skill** は [houki-hub family](./mcp-servers.md#-houki-hub-family) の MCP サーバーをまとめて動かします。単体のツールを呼ぶのではなく、どの順で何を呼ぶかを Skill 側が決めます。

---

[← README に戻る](../README.md)
