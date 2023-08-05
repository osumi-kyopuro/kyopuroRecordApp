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
