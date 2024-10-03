# 不動産小口 API の型情報プロジェクト

当プロジェクトはメインの fudosan-koguchi-api 内で Prisma により生成された型情報ファイルを他のプロジェクトで使えるようにするためのプロジェクトである。新規に作る場合は、上記のプロジェクト内に作るとよい。

https://github.com/three-is-capital/fudosan-koguchi-types

## Prisma の情報が変わった場合の作業手順

1. 型情報をこのプロジェクト内にコピーする。

   ```sh
   bun run copy
   ```

1. package.json のバージョンを次の TAG に合わせて変更する
   - ここが更新されないと、利用先で認識されない。
1. Github に登録（Commit -> Push）
1. Tag を切る

   ```sh
   git tag -a v0.3.3 -m "Add completed in Ki"
   git push origin v0.3.2
   ```
