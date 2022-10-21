# sample-rails-graphql-typescript-react-apollo

これは、Rails + GraphQL + React + TypeScript + Apolloを使って作成したTODOサンプルアプリケーションです。
TODO一覧が表示できて、TODOの登録・編集・削除ができます。

## 構成
- ServerSide(on Docker)
  - Rails (API)
  - GraphQL
- FrontEnd(on Docker)
  - React
  - TypeScript
  - Apollo

## 前提条件
次のライブラリやツールが必要になるため、事前にインストールしておいてください。

- Docker

## セットアップ

```
docker compose build
docker compose run --rm api rails bin/setup db:migrate db:seed
docker compose up -d
```

サーバー側は、 http://localhost:3000/ にアクセスしてRailsの画面が表示されれば成功です。
フロント側は、 http://localhost:3030/ にアクセスしてTODO一覧が表示されれば成功です。
