# fudosan-koguchi-types

`fudosan-koguchi-api` の Prisma 生成型（`@prisma/client` の `index.d.ts`）を切り出して配布する**型専用パッケージ**。`../fudosan-koguchi-client` などの利用側が DB モデル型（`Prisma.ProjectKi` 等）を参照する。

ロジックは持たず、型宣言（`.d.ts`）のみを公開する。`package.json` の `main` / `files` は `types/` を指す。

## 更新手順（スキーマ変更ごと）

`fudosan-koguchi-api` で Prisma スキーマを変更しマイグレーションした後、以下で型を反映する。実績のある手順は PR #1〜#4 を参照。

1. **api で Prisma Client を再生成**
   ```sh
   cd ../fudosan-koguchi-api && pnpm db:generate
   ```
2. **生成された `index.d.ts` を `types/` と `dist/` にコピー**
   - 生成元: `../fudosan-koguchi-api/node_modules/.prisma/client/index.d.ts`
   - コピー先: `types/index.d.ts` と `dist/index.d.ts`（両方）
   - Windows は `copy.bat` も利用可。ただし相対パスは実際のリポジトリ配置に合わせること
3. **⚠️ runtime import を正規化する（必須・見落とし注意）**
   - 近年の Prisma は `import * as runtime from './runtime/library.js';`（相対パス）を出力する。
   - 本パッケージは `runtime/` を同梱しないため、相対パスのままだと**利用側で型解決が壊れる**。
   - `'@prisma/client/runtime/library.js'`（利用側の `@prisma/client` で解決される形）へ置換すること。既存の `index.d.ts` と同形。
4. **差分が対象スキーマ変更分のみ（additive）であることを確認**し、`feat/<変更内容>` ブランチで PR を作成する。
   - 例: 「ProjectKi に reportComment / reportNote を追加」の差分は、当該 2 列の追加と関連 union 型（`ProjectKiOmit` 等）への反映のみになる。

## 構成

| パス | 役割 |
|---|---|
| `types/index.d.ts` | 公開する型宣言（`package.json` の `main` / `files`） |
| `dist/index.d.ts` | 同内容のコピー |
| `copy.bat` | Windows 用コピー補助 |

## 注意

- DB カラムではない**派生フィールド**（例: `getDetailKiSimple` の `occupancyComment`）は Prisma 型に含まれないため、本パッケージにも乗らない。利用側で型を手動拡張する。
