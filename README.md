# kyopuroRecordApp

## 作る経緯
- 競プロの精進記録をメモできるサービスがあるといいなと思ったから
- Pythonが直感的にかけて好きだから
- PythonのフレームワークFastAPIを使ってみたかったから
- 実務経験を積んで実際にどれだけ開発できるようになったか確かめたかったから


## アーキテクチャ
- バックエンド
  - Python3,fastAPI
- フロントエンド
    - TypeScript,Vue.js
- DB
    - MySQL
- ORM
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
docker-compose down
```

## ディレクトリ構成
```
kyopuroRecordApp
├── Dockerfile
├── LICENSE
├── README.md
├── backend
│   ├── app
│   │   ├── __init__.py
│   │   ├── api
│   │   │   ├── __init__.py
│   │   │   ├── record.py
│   │   │   └── user.py
│   │   ├── crud
│   │   │   ├── __init__.py
│   │   │   └── user.py
│   │   ├── databases
│   │   │   ├── __init__.py
│   │   │   └── database.py
│   │   ├── dependencies
│   │   │   ├── __init__.py
│   │   │   ├── authentication.py
│   │   │   ├── authorization.py
│   │   │   └── config.py
│   │   ├── main.py
│   │   ├── models
│   │   │   ├── __init__.py
│   │   │   ├── record.py
│   │   │   └── user.py
│   │   ├── schemas
│   │   │   ├── __init__.py
│   │   │   └── user.py
│   │   └── services
│   │       ├── __init__.py
│   │       ├── record_services.py
│   │       └── user_services.py
│   └── test
├── docker-compose.yml
├── document
│   ├── aws_architecture.drawio
│   ├── aws_architecture.svg
│   ├── screen_design_document.pdf
│   └── screen_design_document.xlsx
├── frontend
├── initdb
│   └── execute_query.sql
└── requirements.txt
```
# コーディング規約
- 基本的にはスネークケースで実装する
- modelやschemaの定義だけキャメルケースを使用する
