# statue-site-r3f

3DCGモデル「Spaceship」を React Three Fiber (R3F) で表示するポートフォリオサイトです。スクロールに連動して3Dモデルの視点が変化します。

## 技術スタック

- **フレームワーク**: Next.js 16 / React 19
- **3D**: Three.js, React Three Fiber, @react-three/drei
- **スタイル**: Tailwind CSS 4
- **アニメーション**: Motion

## 機能

- **3Dシーン**: GLB形式のスペースシップモデルを Canvas 上で表示
- **スクロール連動**: スクロール進捗に応じてモデルの位置・回転が4段階で切り替わり、複数のアングルから鑑賞可能
- **セクション**: Hero（AURORA DYNAMICS）、About、Ability、Model Info など
- **照明**: RectAreaLight による6面照明、環境光・指向性光

## セットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバー起動
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてください。

## スクリプト

| コマンド | 説明 |
|----------|------|
| `npm run dev` | 開発サーバー起動 |
| `npm run build` | 本番ビルド |
| `npm run start` | 本番サーバー起動 |
| `npm run lint` | ESLint 実行 |

## プロジェクト構成（主要）

```
src/
├── app/
│   ├── page.tsx      # トップページ（スクロール連動のメイン）
│   ├── preview/      # プレビューページ
│   └── layout.tsx
├── components/
│   ├── Scene.tsx     # R3F Canvas と照明
│   ├── Spaceship.tsx # GLB 読み込み・スクロール連動の位置/回転
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Ability.tsx
│   ├── Info.tsx      # Model Info（Maya / Substance Painter 等）
│   └── Header.tsx
public/
└── spaceship.glb     # 3Dモデル
```

## 3Dモデルについて

- **ツール**: Autodesk Maya, Adobe Substance Painter
- **形式**: GLB（`public/spaceship.glb`）
- Model Info セクションで AO / ワイヤーフレーム / レンダー画像を掲載

## ライセンス

private リポジトリです。
