from fastapi import FastAPI
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

from ..dependencies.config import DbConfig

app = FastAPI()
db_config = DbConfig.get()

# MySQL接続用のURLを作成します
SQLALCHEMY_DATABASE_URL = f"mysql+mysqlconnector://{db_config.user}:{db_config.password}@{db_config.host}:{db_config.port}/{db_config.database}"

# SQLAlchemyのエンジンを作成します
engine = create_engine(SQLALCHEMY_DATABASE_URL)

# セッションを作成するためのクラスを作成します
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()


# @app.on_event("startup")
# async def startup_db_client():
#     # MySQLクライアントを初期化
#     app.db_connection = mysql.connector.connect(**db_config.to_dict())
#     app.db_cursor = app.db_connection.cursor()


    


# @app.on_event("shutdown")
# async def shutdown_db_client():
#     # アプリケーションの終了時にMySQLクライアントをクローズ
#     app.db_cursor.close()
#     app.db_connection.close()
