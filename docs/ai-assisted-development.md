# 🤖 AI-Assisted Development Guide

[← README に戻る](../README.md) · 🌐 [English version](./ai-assisted-development.en.md)

Claude / Claude Code / GitHub Copilot などの AI エージェントと一緒に開発を進めるための、手順とノウハウをまとめています。

- **設計は人が決める** — 何をどう作るかの判断を AI に預けすぎず、仕様とアーキテクチャの責任は人が持ちます
- **資料を構造化しておく** — MCP・Skill・仕様書を、AI が読み取りやすい形に整えます
- **短く回して確かめる** — プロンプト → 出力 → 仕様との照合 → 修正、を素早く繰り返します

### 日常の回し方（Claude Code）

毎日の実装は Claude Code で進めています。単発のチャットで補完させるのではなく、次の手順を繰り返します。

1. **規約を先に置く** — リポジトリに `AGENTS.md` / `CLAUDE.md` を置き、設計方針・テスト手順・してはいけないことを書いておきます。毎回プロンプトを考え直さずに済みます。
2. **自作の MCP / Skill をつなぐ** — 仕様書（PDF / RFC / W3C / 法令）と、実際のファイル・互換性データ・通達を、family 単位で参照させます。調べ物をウェブ検索任せにしません。
3. **役割を分ける** — 調査・実装・レビュー・品質評価を、サブエージェントと Skill に分担させます。要件の確定・受け入れ条件・設計レビューは人が持ちます。
4. **品質ゲートを通す** — `Issue → 実装 → テスト → PR` を固定し、仕様との照合や xCOMET による自動評価をパイプラインに載せます。基準に届かなければ、その工程からやり直します。

公開している e-shiwake では、開発に必要な MCP を先に作り、その道具で本体を実装しました。「AI で作るための道具をまず作り、それを使って本物の資産を作る」は標語ではなく、実際の作業手順です。

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
