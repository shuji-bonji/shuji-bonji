# 🤖 AI-Assisted Development Guide

[← README に戻る](../README.md) · 🌐 [English version](./ai-assisted-development.en.md)

AI エージェント（Claude / Claude Code / GitHub Copilot 等）と協働して開発を進めるためのワークフロー・ノウハウをまとめています。

- **設計指向**：AIに「何をどう作るか」を判断させすぎず、人間が仕様・アーキテクチャの責任を持つ
- **構造化ドキュメント**：MCP / Skill / 仕様書を、AI が読み解きやすい形で整備する
- **検証ループ**：プロンプト → 出力 → 仕様書チェック → 修正、を高速に回す

| Phase | プロジェクト                                    | 説明                                                                                                                                                 | リンク                                                                                                                                                           |
| :---: | :---------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   1   | **understanding-llm-through-claude-code**       | LLM の構造的制約を理解し、Claude Code の設計思想から「なぜそう設定するのか」を学ぶ                                                                   | [Site](https://shuji-bonji.github.io/understanding-llm-through-claude-code/ja/) · [GitHub](https://github.com/shuji-bonji/understanding-llm-through-claude-code) |
|   2   | **ai-agent-architecture**                       | MCP・Skills・Agent 統合の設計思想・アーキテクチャ・実践ノウハウ                                                                                      | [Site](https://shuji-bonji.github.io/ai-agent-architecture/ja/) · [GitHub](https://github.com/shuji-bonji/ai-agent-architecture)                                 |
|   3   | **Management-of-software-systems-and-services** | 先人達が培ってきた[ソフトウェアシステム・サービス開発・管理](https://github.com/shuji-bonji/Management-of-software-systems-and-services)へ AI を適用 | <!-- [GitHub](https://github.com/shuji-bonji/Management-of-software-systems-and-services) -->                                                                    |

<!--
> [!NOTE]
> ソフトウェア開発におけるAI活用は、関わる立場・役割によって大きく異なります。
> まずは、既存のソフトウェアへの人の関与に関する、9つの視点を整理しています。
> これにどのようにAIが関与していけば良いか？単純に当てはまるのではく、まるっきり変わってくることも含めて、確認して行こうと思います。
> - [ソフトウェアシステム・サービスのマネジメント](https://github.com/shuji-bonji/Management-of-software-systems-and-services)
-->

---

[← README に戻る](../README.md)
