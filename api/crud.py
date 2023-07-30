import mysql.connector
from fastapi import FastAPI
from os.path import dirname, abspath
import sys

# crud.pyから1つ上のディレクトリの絶対パスを取得し、sys.pathに登録する
parent_dir = dirname(abspath(__file__)) # 追加
if parent_dir not in sys.path: # 追加
    sys.path.append(parent_dir) # 追加

from config import DbConfig



app = FastAPI()
db_config = DbConfig.get()


@app.on_event("startup")
async def startup_db_client():
    # MySQLクライアントを初期化
    app.db_connection = mysql.connector.connect(**db_config.to_dict())

    app.db_cursor = app.db_connection.cursor()


@app.on_event("shutdown")
async def shutdown_db_client():
    # アプリケーションの終了時にMySQLクライアントをクローズ
    app.db_cursor.close()
    app.db_connection.close()


@app.get("/getUserInfo/{userName}")
async def getUserInfo(userName: str):
    try:
        # テーブルのデータを取得
        query = "SELECT * FROM user_info where user_name = %s"
        app.db_cursor.execute(query, (userName,))
        data = app.db_cursor.fetchall()
        return {"data": data}
    except Exception as e:
        return {"error": str(e)}


@app.get("/getUserInfo")
async def getAllUserInfo():
    try:
        # テーブルのデータを取得
        query = "SELECT * FROM user_info"
        app.db_cursor.execute(query)
        data = app.db_cursor.fetchall()
        return {"data": data}
    except Exception as e:
        return {"error": str(e)}
