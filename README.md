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
docker-compose up --d
```

## Docker環境で終了する際のコマンド
```
docker-compose down
```

## ディレクトリ構成
```
kyopuroRecordApp/
│
├── backend/
│   ├── app/
│   │   ├── __init__.py
│   │   ├── api/
│   │   │   ├── __init__.py
│   │   │   ├── user.py
│   │   │   └── record.py
│   │   ├── models/
│   │   │   ├── __init__.py
│   │   │   ├── user.py
│   │   │   └── record.py
│   │   ├── services/
│   │   │   ├── __init__.py
│   │   │   ├── user_service.py
│   │   │   └── record_service.py
│   │   ├── databases/
│   │   │   ├── __init__.py
│   │   │   └── database.py
│   │   ├── dependencies/
│   │   │   ├── __init__.py
│   │   │   ├── authentication.py
│   │   │   └── authorization.py
│   │   └── main.py
│   │
│   ├── tests/
│   │   ├── __init__.py
│   │   ├── test_user.py
│   │   └── test_record.py
│   │
│   ├── .env
│   ├── .gitignore
│   ├── requirements.txt
│   ├── README.md
│   └── pyproject.toml
│
├── frontend/
│   ├── public/
│   │   ├── index.html
│   │   └── favicon.ico
│   │
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── views/
│   │   ├── api/
│   │   ├── services/
│   │   ├── router/
│   │   ├── store/
│   │   └── main.js
│   │
│   ├── .gitignore
│   ├── babel.config.js
│   ├── package.json
│   ├── package-lock.json
│   └── vue.config.js
│=====
└── README.md
```
