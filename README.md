# shuji-bonji

🌐 [English version (README.en.md)](./README.en.md)

**AI エージェントが仕様・法令・技術文書の原文を引き、決められたルールに沿って検査・作成できるようにする MCP（Model Context Protocol）サーバーと Skill をつくり、その道具で動くアプリと検証器を作っています。**

フロントエンドは TypeScript / Angular / RxJS / Svelte を主に使っています。  
バックエンドは TypeScript / Node.js が中心で、.NET C# で Web API を書いた経験もあります。  
もともとは運用とカスタマーエンジニアを長く務め、そこから開発に移りました。  
2025 年 10 月からフリーランスとして、Angular / RxJS / NgRx を使うプロジェクトに参画しています。  

公開しているものは、次の 6 つです。

1. **動くアプリ — [e-shiwake](https://github.com/shuji-bonji/e-shiwake)**（[デモ](https://shuji-bonji.github.io/e-shiwake/)） — 個人事業主向けの仕訳帳・証憑管理 PWA。17 個のツールを function calling と WebMCP（ブラウザーの中で AI エージェントにツールを渡す仕組み）の両方に渡し、データを書き換える操作は実行前に人が承認します（HITL: Human in the Loop）
2. **製品群 — [PDF Agent Stack](https://shuji-bonji.github.io/pdf-agent-stack/ja/) / [houki-hub](https://shuji-bonji.github.io/houki-hub/) / [s1000d-stack](https://shuji-bonji.github.io/s1000d-stack/)** — PDF、日本の法令、S1000D の技術文書を、個別のサーバーではなく系列で扱います。判定はコード、説明は LLM。RFC は [rfcxml-mcp](https://shuji-bonji.github.io/rfcxml-mcp/) にまとめています。
3. **marketplace — [claude-plugins](https://github.com/shuji-bonji/claude-plugins)** — 下の MCP サーバーと Skill を、Claude Code から `/plugin install` で入れられます。導入の入口です。
4. **道具 — [MCP サーバー](./docs/mcp-servers.md) / [Claude Skills](./docs/claude-skills.md)** — AI エージェントが PDF / W3C / RFC / 日本の法令 / S1000D の原文に直接あたるためのものです。
5. **設計の根拠 — [AI Agent Architecture](https://shuji-bonji.github.io/ai-agent-architecture/ja/) / [Understanding LLMs](https://shuji-bonji.github.io/understanding-llm-through-claude-code/ja/)** — 上の製品群を、なぜその層に分けたかの記録です。製品の使い方ではなく、制約と組み方です。LLM が失敗する理由は [17 の制約](https://zenn.dev/shuji_bonji/articles/llm-17-constraints) に整理しています。
6. **設計判断の支援 — [ai-design-advisor](https://github.com/shuji-bonji/ai-design-advisor)** — 生成 AI システムの構成を決めるとき、まだ決まっていないことを名指しして返す Skill です。

実装は Claude Code に任せ、設計方針と受け入れ条件は人が決める、という進め方をしています。公開したものは、Grok Build など別のホストで利用者と同じ経路から使い直し、見つかった問題を Issue にして直しています。

## ⚙️ 日常の AI 駆動開発

毎日の実装は Claude Code で進め、自作の MCP と Skill を開発の流れに組み込んでいます。詳しい手順は [AI-Assisted Development Guide](./docs/ai-assisted-development.md) にまとめました。

どの手順も、LLM が仕組みの上で起こす失敗（[17 の制約](https://zenn.dev/shuji_bonji/articles/llm-17-constraints)）のどれかを抑えるために置いています。各手順の末尾に、抑えたい制約の名前を書きました。Hallucination のように手順を組んでも残る失敗があるため、差分とテスト結果は人が確かめます。

1. **規約を先に置く** — `AGENTS.md` / `CLAUDE.md` に設計方針とテスト手順を書いておき、毎回のプロンプトで指示し直さずに済むようにしています（Instruction Decay・Prompt Sensitivity）
2. **役割を分ける** — 調査・実装・レビュー・品質評価を、サブエージェントと Skill に分けて担当させます。要件と受け入れ条件は人が決めます（Self-Evaluation Bias・Context Rot）
3. **調べ物は自作の MCP に任せる** — 仕様書の原文（PDF / Web 仕様 / 法令 / S1000D）と、実際のファイルや互換性データを突き合わせます（Hallucination・Knowledge Boundary）
4. **品質ゲートを通す** — `Issue → 実装 → テスト → PR` を固定し、仕様との照合や xCOMET（翻訳の品質を採点するモデル）による自動評価をパイプラインに載せます（Compounding Errors・Hallucination）
5. **公開後に外から測る** — npm に公開した版を、別のホスト・OS・配布の形で通しで使う試用を行い、結果を Issue に戻します（[pdf-agent-stack の eval](https://github.com/shuji-bonji/pdf-agent-stack/tree/main/eval)）（Non-determinism・Self-Evaluation Bias）

## 🛠 Tech Stack

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=flat&logo=sass&logoColor=white)
![C#](https://img.shields.io/badge/C%23-512BD4?style=flat&logo=c-sharp&logoColor=white)
![Angular](https://img.shields.io/badge/Angular-DD0031?style=flat&logo=angular&logoColor=white)
![RxJS](https://img.shields.io/badge/RxJS-B7178C?style=flat&logo=reactivex&logoColor=white)
![NgRx](https://img.shields.io/badge/NgRx-BA2BD2?style=flat&logo=ngrx&logoColor=white)
![Svelte](https://img.shields.io/badge/Svelte-FF3E00?style=flat&logo=svelte&logoColor=white)
![SvelteKit](https://img.shields.io/badge/SvelteKit-FF3E00?style=flat&logo=svelte&logoColor=white)
![PWA](https://img.shields.io/badge/PWA-5A0FC8?style=flat&logo=pwa&logoColor=white)
![Jasmine](https://img.shields.io/badge/Jasmine-8A4182?style=flat&logo=jasmine&logoColor=white)
![Vitest](https://img.shields.io/badge/Vitest-6E9F18?style=flat&logo=vitest&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)
![Claude](https://img.shields.io/badge/Claude-D97757?style=flat&logo=anthropic&logoColor=white)
![Claude Code](https://img.shields.io/badge/Claude%20Code-D97757?style=flat&logo=claude&logoColor=white)
![Skills](https://img.shields.io/badge/Skills-Claude%20Skills-D97757?style=flat)
![GitHub Copilot](https://img.shields.io/badge/GitHub%20Copilot-000000?style=flat&logo=githubcopilot&logoColor=white)
![MCP](https://img.shields.io/badge/MCP-Model%20Context%20Protocol-000000?style=flat)
![Ollama](https://img.shields.io/badge/Ollama-000000?style=flat&logo=ollama&logoColor=white)

## 🗂 Contents

| カテゴリ | 内容 |
| --- | --- |
| 📦 [Claude Plugins (Marketplace)](https://github.com/shuji-bonji/claude-plugins) | 自作の MCP / Skill / Slash Command / Sub-agent を `/plugin install` で導入する入口 |
| 🔌 [MCP Servers](./docs/mcp-servers.md) [![npm](https://img.shields.io/badge/npm-shuji--bonji-CB3837?style=flat&logo=npm&logoColor=white)](https://www.npmjs.com/~shuji-bonji) | PDF / Web Spec / houki-hub / S1000D / DTIR の 5 ファミリーと、単独の MCP サーバーの一覧 |
| 🧩 [Claude Skills](./docs/claude-skills.md) | 作業手順をそのまま再利用するための Skill の一覧 |
| 📱 [Web Apps & Tools](./docs/web-apps.md) | PWA と実用ツールの一覧 |
| 🧠 [設計の根拠](./docs/ai-assisted-development.md) | MCP・Skill・アプリをなぜその構造にしたのかの記録と、日々の実装手順 |
| 📖 [Sites & Books](./docs/sites-books.md) | RxJS / Svelte / Web Components / TDD などの学習サイトと、Zenn 書籍 |
| 📓 [Notes](./docs/notes.md) | デジタル署名・PWA・ローカル LLM・[Manifest of Authenticity](https://github.com/shuji-bonji/Manifest-of-Authenticity)（デジタル資産の真正性を記述するオープン仕様）などのノート |
| 🧭 [Now](./docs/now.md) | いま進めていること・これから試すこと・検討中のこと |

## 🧭 いま進めていること（2026 年 11 月時点）

- **[s1000d-stack](https://shuji-bonji.github.io/s1000d-stack/)** — 航空・防衛分野の技術文書規格 S1000D のデータモジュールを、LLM が読み、BREX（顧客ごとの業務ルール）で検査し、XML を書かせずに作成する MCP・Skill の系列です
- **体験型マニュアル作成ツール（SvelteKit / PWA）** — 操作を体験しながら学べるマニュアルを作り、その JSON から S1000D のデータモジュールを出します。試作中です
- **公開した版を外から測る** — 別のホスト・OS で通しで使い、見つかった問題を Issue にして直しています

続けていること・これから試すこと・検討中のことは [docs/now.md](./docs/now.md) に書いています。

## 🏠 記念碑

- [履歴書作成アプリ](https://github.com/shuji-bonji/resume_editting) — 2021 年、JavaScript を学びながら初めて作った Web アプリです。いま読み返すとソースはとても恥ずかしいのですが、ここが出発点でした。[公開中のアプリはこちら](https://shuji-bonji.github.io/resume_editting/)
- 職業訓練時の卒業作品: [体験型操作説明](https://github.com/shuji-bonji/experience_based_operation_explanation) — 券売機の画面画像にボタン領域を重ね、JSON で定義した画面遷移をブラウザーで疑似体験できるようにした 2021 年の制作課題です。いまの体験型マニュアル作成ツールの原点です。

## 📬 Contact

[![GitHub](https://img.shields.io/badge/GitHub-shuji--bonji-181717?style=flat&logo=github&logoColor=white)](https://github.com/shuji-bonji)
[![npm](https://img.shields.io/badge/npm-shuji--bonji-CB3837?style=flat&logo=npm&logoColor=white)](https://www.npmjs.com/~shuji-bonji)
[![Qiita](https://img.shields.io/badge/Qiita-shuji--bonji-55C500?style=flat&logo=qiita&logoColor=white)](https://qiita.com/shuji-bonji)
[![Zenn](https://img.shields.io/badge/Zenn-shuji__bonji-3EA8FF?style=flat&logo=zenn&logoColor=white)](https://zenn.dev/shuji_bonji)

[![LAPRAS](https://img.shields.io/badge/LAPRAS-Profile-1E6FD9?style=flat)](https://lapras.com/public/PTFYSXV)
[![Findy](https://img.shields.io/badge/Findy-Profile-1E6FD9?style=flat)](https://findy-code.io/skills-share/K6nIWB9j24YY8)
[![Gitty Code](https://img.shields.io/badge/Gitty-Code-1E6FD9?style=flat)](https://gitty-code.com/user/shuji-bonji)
