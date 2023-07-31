import mysql.connector
from fastapi import FastAPI

from ..dependencies.config import DbConfig

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
