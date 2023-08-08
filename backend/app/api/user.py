from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from ..schemas.user import UserInfo,UserBase
from ..crud.user import get_user, get_users, create_user, update_user, delete_user
from ..databases.database import SessionLocal, engine,Base

Base.metadata.create_all(bind=engine)
router = APIRouter()

# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/userInfo/", response_model=UserInfo)
def create_new_user(user: UserBase, db: Session = Depends(get_db)):
    db_user = create_user(db, user)
    return db_user

@router.get("/userInfo/", response_model=List[UserInfo])
def read_users(skip: int = 0, limit: int = 10, db: Session = Depends(get_db)):
    users = get_users(db, skip=skip, limit=limit)
    return users

@router.get("/userInfo/user/{user_name}", response_model=UserInfo)
def read_user(user_name: str, db: Session = Depends(get_db)):
    db_user = get_user(db, user_name=user_name)
    if db_user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return db_user

@router.put("/userInfo/user/{user_name}", response_model=UserInfo)
def update_existing_user(user_name: str, user: UserBase, db: Session = Depends(get_db)):
    db_user = get_user(db, user_name=user_name)
    if db_user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return update_user(db, user_name=db_user.user_name, user=user)

@router.delete("/userInfo/user/{user_name}")
def delete_existing_user(user_name: str, db: Session = Depends(get_db)):
    db_user = get_user(db, user_name=user_name)
    if db_user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return delete_user(db, user_name=db_user.user_name)
