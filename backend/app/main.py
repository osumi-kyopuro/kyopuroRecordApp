from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .api import user,record 
from .databases.database import engine,Base

app = FastAPI()
Base.metadata.create_all(bind=engine)

origins = [
    "http://localhost",
    "http://localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ユーザー情報APIのルーティングを追加
app.include_router(user.router, prefix="/api", tags=["userInfoAPI"])

# 精進記録APIのルーティングを追加
app.include_router(record.router, prefix="/api", tags=["recordAPI"])