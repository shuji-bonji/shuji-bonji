# 🧭 いま進めていること（2026 年 11 月時点）

[← README に戻る](../README.md)

この文書は月に 1 回を目安に書き換えます。README には要点だけを置き、詳細はここに書きます。

## 手を動かしていること

- **[s1000d-stack](https://shuji-bonji.github.io/s1000d-stack/)** — 航空・防衛分野の技術文書規格 S1000D のデータモジュールを、LLM が読み、BREX（Business Rules Exchange。顧客ごとの業務ルールを書いた S1000D のデータモジュール）で検査し、XML を書かせずに作成するための MCP 4 本・[s1000d-core](https://github.com/shuji-bonji/s1000d-core)・Skill 4 つです。検査は core が決定論的に行い、LLM は文章と説明に限ります
- **体験型マニュアル作成ツール（SvelteKit / PWA）** — 操作を体験しながら学べるマニュアルを作り、その JSON から S1000D のデータモジュールを出します。2021 年の [体験型操作説明](https://github.com/shuji-bonji/experience_based_operation_explanation) の再構築で、試作中です
- **公開した版を外から測る** — PDF Agent Stack と s1000d-stack を Grok Build など別のホスト・OS で通しで使い、見つかった問題を Issue にして直しています（[TRIAL-PLAYBOOK](https://github.com/shuji-bonji/pdf-agent-stack/blob/main/eval/TRIAL-PLAYBOOK.md)）

## 続けていること

- **spec-ids を OpenSpec に対応させ、PDF シリーズに入れる** — [spec-ids](https://github.com/shuji-bonji/spec-ids) は、仕様書の要求とテスト名に同じ仕様 ID を付け、食い違いを CI で止める CLI です。[OpenSpec](https://github.com/Fission-AI/OpenSpec) の構成に対応させ、pdf-reader-mcp で先に適用しました。残り 3 本は上の試用のあとに進めます

## これから試すこと

- **S1000D の閲覧ソフト（IETP）** — 体験型マニュアルと S1000D のデータモジュールをブラウザーで読む閲覧ソフトです。WebMCP に対応させ、[e-shiwake](https://github.com/shuji-bonji/e-shiwake) と同じように AI エージェントから操作できるようにします
- **[agentchattr](https://github.com/bcurts/agentchattr) のブラウザー画面の自前実装** — 複数の AI コーディングエージェントを 1 つのチャットにつなぐツールの画面を作り直し、利用者が設定した LLM をブラウザーから使えるようにします

## 検討中のこと（いまは手を止めています）

- **[houki-hub](https://shuji-bonji.github.io/houki-hub/) に RAG / KAG を入れる** — RAG は関連する文書を先に取り出してから LLM に渡す方法、KAG（Knowledge Augmented Generation）は条文どうしの参照関係も一緒に渡す方法です。そのつどの検索による取りこぼしを減らすため、条文の参照関係を保ったまま引く方法を検討しています
- **[normativepdf](https://github.com/shuji-bonji/normativepdf) を広げる** — ISO 32000 の条文と実装を 1 対 1 で対応させた PDF ライブラリです。pdf-writer-mcp が `pdf-lib` に任せている部分を置き換え、条文違反を見つけても直せない状態をなくします
- **[ai-design-advisor](https://github.com/shuji-bonji/ai-design-advisor) を [HEXIS](https://github.com/shuji-bonji/HEXIS) / [Manifest of Authenticity](https://github.com/shuji-bonji/Manifest-of-Authenticity) につなぐ** — 設計判断を、判断の構造の仕様（HEXIS）と成果物の真正性の仕様（MoA）に載せられないか検討しています
