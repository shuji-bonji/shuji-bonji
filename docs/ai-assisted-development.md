# 🤖 AI-Assisted Development Guide

[← README に戻る](../README.md) · 🌐 [English version](./ai-assisted-development.en.md)

AI エージェント（Claude / Claude Code / GitHub Copilot 等）と協働して開発を進めるためのワークフロー・ノウハウをまとめています。

- **設計指向**：AIに「何をどう作るか」を判断させすぎず、人間が仕様・アーキテクチャの責任を持つ
- **構造化ドキュメント**：MCP / Skill / 仕様書を、AI が読み解きやすい形で整備する
- **検証ループ**：プロンプト → 出力 → 仕様書チェック → 修正、を高速に回す

### 日常の回し方（Claude Code）

毎日の実装は Claude Code を主エンジンにしています。単発のチャット補完ではなく、次のループです。

1. **規約を先に置く** — リポジトリに `AGENTS.md` / `CLAUDE.md` を置き、設計方針・テスト手順・禁止事項を固定する。プロンプトを毎回発明しない。
2. **自作 MCP / Skill を接続する** — 仕様書（PDF / RFC / W3C / 法令）と実体（ファイル・互換性データ・通達）を family 単位で参照させる。調べ物をウェブ検索に丸投げしない。
3. **役割を分割する** — 調査・実装・レビュー・品質評価をカスタムサブエージェント + Skill に分担。人は要件の確定と受け入れ条件、設計レビューを手放さない。
4. **品質ゲートを通す** — `Issue → 実装 → テスト → PR` を固定し、仕様照合や xCOMET のような自動評価をパイプラインに載せる。閾値割れは再処理ループへ戻す。

公開アプリ（e-shiwake）では、開発に必要な MCP 自体を先に作り、その道具で本体を実装しています。「AI で作るための道具をまず作り、それを使って本物の資産を作る」は標語ではなく、作業手順です。

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
