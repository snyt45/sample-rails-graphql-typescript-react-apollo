# sample-rails-graphql-typescript-react-apollo

これは、Rails + GraphQL + React + TypeScript + Apolloを使って作成したTODOサンプルアプリケーションです。
TODO一覧が表示できて、TODOの登録・編集・削除ができます。

## 構成
- ServerSide(on Docker)
  - Rails (API)
  - GraphQL
- FrontEnd(on Host)
  - React
  - TypeScript
  - Apollo

## 前提条件
次のライブラリやツールが必要になるため、事前にインストールしておいてください。

- Docker
- Node.js、Yarn

## セットアップ

```
// TODO: 1コマンドでセットアップできるようにする
docker compose build
docker compose run --rm api bundle install
docker compose run --rm api rails db:create
docker compose run --rm api rails db:migrate db:seed
docker compose up -d

cd frontend && yarn install
cd frontend && yarn dev --host
```
