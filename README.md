# kyopuroRecordApp

## 作る経緯
- 競プロの精進記録をメモできるサービスがあるといいなと思ったから
- Pythonが直感的に書けて好きだから
- PythonのフレームワークFastAPIを使ってみたかったから
- SPA開発をしてみたかったから
- 一通りWebアプリケーションを作れるか確認してみたかったから
- 実務経験を積んで実際にどれだけ開発できるようになったか確かめたかったから


## アーキテクチャ
- バックエンド
    - Python3,FastAPI
- フロントエンド
    - React
- DB
    - MySQL
- ORM
    - SQLAlchemy
- インフラ
    - AWS

## Docker環境で起動する際のコマンド
```
docker-compose up -d
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
├── Makefile
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
│   │   │   ├── record.py
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
│   │   │   ├── record.py
│   │   │   └── user.py
│   │   └── services
│   │       ├── __init__.py
│   │       ├── record_services.py
│   │       └── user_services.py
│   └── test
├── db
│   └── migrate
│       ├── XXXXXX_user_info.down.sql
│       └── XXXXXX_user_info.up.sql
├── docker-compose.yml
├── document
│   ├── aws_architecture.drawio
│   ├── aws_architecture.svg
│   ├── screen_design_document.pdf
│   ├── screen_design_document.xlsx
│   ├── table_document.pdf
│   └── table_document.xlsx
├── frontend
├── my.cnf
└── requirements.txt
```
# コーディング規約
- 基本的にはスネークケースで実装する
- modelやschemaの定義、ルーティングのパスだけキャメルケースを使用する