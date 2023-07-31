from fastapi import FastAPI
from .api import user, record

app = FastAPI()

# ユーザー情報APIのルーティングを追加
app.include_router(user.router, prefix="/api", tags=["users"])

# 精進記録APIのルーティングを追加
#app.include_router(record.router, prefix="/api", tags=["records"])