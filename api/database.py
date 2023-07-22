# main.py
from fastapi import FastAPI
import mysql.connector

app = FastAPI()


@app.on_event("startup")
async def startup_db_client():
    # MySQLクライアントを初期化
    app.db_connection = mysql.connector.connect(**db_config)
    app.db_cursor = app.db_connection.cursor()

@app.on_event("shutdown")
async def shutdown_db_client():
    # アプリケーションの終了時にMySQLクライアントをクローズ
    app.db_cursor.close()
    app.db_connection.close()

@app.get("/get_data_from_table")
async def get_data_from_table():
    try:
        # テーブルのデータを取得
        query = "SELECT * FROM user_info"
        app.db_cursor.execute(query)
        data = app.db_cursor.fetchall()
        return {"data": data}
    except Exception as e:
        return {"error": str(e)}