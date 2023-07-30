# kyopuroRecordApp

## 作る経緯
- 競プロの精進記録をメモできるサービスがあるといいなと思ったから
- PythonのフレームワークFastAPIを使ってみたかったから
- 実務経験を積んで実際にどれだけ開発できるようになったか確かめたかったから


## アーキテクチャ
- バックエンド
  - Python3,fastAPI
- フロントエンド
    - TypeScript,Vue.js
- DB
    - MySQL
- ORMマッパー
    - SQLAlchemy
- インフラ
    - AWS

## Docker環境で起動する際のコマンド
```
1. docker-compose up mysql
2. docker-compose up kyopurorecordapp
```

## Docker環境で終了する際のコマンド
```
- docker-compose down
```
