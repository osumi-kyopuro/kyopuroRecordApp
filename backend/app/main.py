from fastapi import FastAPI
from .api import user 
from .databases.database import engine,Base

app = FastAPI()
Base.metadata.create_all(bind=engine)

# ユーザー情報APIのルーティングを追加
app.include_router(user.router, prefix="/api", tags=["userInfoAPI"])

# 精進記録APIのルーティングを追加
#app.include_router(record.router, prefix="/api", tags=["records"])