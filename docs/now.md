# 🧭 いま進めていること（2026 年 11 月時点）

[← README に戻る](../README.md)

この文書は月に 1 回を目安に書き換えます。README には要点だけを置き、詳細はここに書きます。

## 手を動かしていること

- **[s1000d-stack](https://shuji-bonji.github.io/s1000d-stack/)** — 航空・防衛分野の技術文書規格 S1000D のデータモジュールを、LLM が読み、BREX（Business Rules Exchange。顧客ごとの業務ルールを書いた S1000D のデータモジュール）で検査し、XML を書かせずに作成するための MCP 4 本・[s1000d-core](https://github.com/shuji-bonji/s1000d-core)・Skill 4 つです。検査は core が決定論的に行い、LLM は文章と説明に限ります。2026 年 11 月は、実在の技術マニュアルと S1000D の公式サンプル（Bike Samples）で読み取りと変換を確かめ、足りなかった機能を足しています。s1000d-writer-mcp には 0.6.0 までに、既にあるデータモジュールの編集（`edit_data_module`）と、発行済みの版から作業中の版を始める改版（`start_revision`・`add_reason_for_update`）を入れました
- **[体験型マニュアル作成ツール](https://github.com/shuji-bonji/experiential-manual-editor)（SvelteKit / PWA）** — 画面の画像に押せる範囲（ホットスポット）を描き、操作を体験しながら学べるマニュアルを作ります。2021 年の [体験型操作説明](https://github.com/shuji-bonji/experience_based_operation_explanation) の再構築で、試作中です。マニュアルは画像ごと 1 つのファイル（`.emanual`）に保存でき、受け取った人がブラウザーで開くだけで読める 1 枚の HTML にも書き出せます。作った JSON は、s1000d-writer-mcp の `convert_manual` で S1000D のデータモジュールに変換します
- **[MutualSpec](https://github.com/shuji-bonji/mutualspec)** — 仕様を、業務の境界（DDD の境界づけられたコンテキスト）ごとに Markdown と YAML で書き、ルールに合っているかをツールが判定する、仕様駆動開発のフレームワークです。ルールの持ち方は S1000D の BREX を手本にし、要求の書き方は ISO/IEC/IEEE 29148 の特性で検査します。合否はツールが判定し、LLM は変更の提案を出し、人が承認します。2026-11-19 に、設計文書・JSON Schema・既定のルールセット・テンプレート・サンプルを公開しました。CLI の実装はこれからです
- **公開した版を外から測る** — PDF Agent Stack と s1000d-stack を Grok Build など別のホスト・OS で通しで使い、見つかった問題を Issue にして直しています（[TRIAL-PLAYBOOK](https://github.com/shuji-bonji/pdf-agent-stack/blob/main/eval/TRIAL-PLAYBOOK.md)）

## 続けていること

- **spec-ids を OpenSpec に対応させ、PDF シリーズに入れる** — [spec-ids](https://github.com/shuji-bonji/spec-ids) は、仕様書の要求とテスト名に同じ仕様 ID を付け、食い違いを CI で止める CLI です。[OpenSpec](https://github.com/Fission-AI/OpenSpec) の構成に対応させ、pdf-reader-mcp で先に適用しました。残り 3 本は上の試用のあとに進めます

## これから試すこと

- **S1000D の閲覧ソフト（IETP）** — 体験型マニュアルと S1000D のデータモジュールをブラウザーで読む閲覧ソフトです。s1000d-stack とは別のプロジェクトにし、体験型マニュアル作成ツールのあとに着手します。WebMCP に対応させ、[e-shiwake](https://github.com/shuji-bonji/e-shiwake) と同じように AI エージェントから操作できるようにします
- **ai-collab-platform の構築** — 複数の AI エージェントを 1 つの作業に分担させるための、自分用の作業基盤です。次の 4 つを組み合わせます
  - 会話の土台に [agentchattr](https://github.com/bcurts/agentchattr)（複数の AI コーディングエージェントを 1 つのチャットにつなぐツール）を使います
  - LLM への接続は [e-shiwake](https://github.com/shuji-bonji/e-shiwake) と同じ方式にします。OpenAI 互換の `/v1/chat/completions` を `baseUrl` と `apiKey` の設定で差し替え、API キーはブラウザーの中にだけ保存します。ローカル LLM・OpenAI・Anthropic・Gemini を設定で切り替えます
  - エージェント間の手順は [LangGraph](https://github.com/langchain-ai/langgraphjs) のワークフローとして書きます。ワークフローの仕様は [OpenSpec](https://github.com/Fission-AI/OpenSpec) の形式で書き、[spec-ids](https://github.com/shuji-bonji/spec-ids) で仕様とテストの食い違いを CI で止めます
  - 実行の流れ（どのエージェントが、どの入力で、何を返したか）は [LangSmith](https://www.langchain.com/langsmith) で見ます

## 検討中のこと（いまは手を止めています）

- **[houki-hub](https://shuji-bonji.github.io/houki-hub/) に RAG / KAG を入れる** — RAG は関連する文書を先に取り出してから LLM に渡す方法、KAG（Knowledge Augmented Generation）は条文どうしの参照関係も一緒に渡す方法です。そのつどの検索による取りこぼしを減らすため、条文の参照関係を保ったまま引く方法を検討しています
- **[normativepdf](https://github.com/shuji-bonji/normativepdf) を広げる** — ISO 32000 の条文と実装を 1 対 1 で対応させた PDF ライブラリです。pdf-writer-mcp が `pdf-lib` に任せている部分を置き換え、条文違反を見つけても直せない状態をなくします
- **[ai-design-advisor](https://github.com/shuji-bonji/ai-design-advisor) を [HEXIS](https://github.com/shuji-bonji/HEXIS) / [Manifest of Authenticity](https://github.com/shuji-bonji/Manifest-of-Authenticity) につなぐ** — 設計判断を、判断の構造の仕様（HEXIS）と成果物の真正性の仕様（MoA）に載せられないか検討しています
