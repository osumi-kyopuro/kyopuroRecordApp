from sqlalchemy.orm import Session
from ..models.user import UserInfo
from ..schemas.user import UserBase
from fastapi.responses import JSONResponse
from passlib.context import CryptContext

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def get_users(db: Session, skip: int = 0, limit: int = 10):
    return db.query(UserInfo).offset(skip).limit(limit).all()

def get_user(db: Session, user_name: str):
    return db.query(UserInfo).filter(UserInfo.user_name == user_name).first()

def create_user(db: Session, user: UserBase):
    db_user = db.query(UserInfo).filter(UserInfo.user_name == user.user_name).first()
    if not db_user:
        db_user = UserInfo(
            user_name=user.user_name,
            user_password=get_password_hash(user.user_password)
        )
        db.add(db_user)
        db.commit()
        db.refresh(db_user)
        return db_user
    return JSONResponse(status_code=500, content={"detail": f"user_name exists in database"})

def update_user(db: Session, user_name: str, user: UserBase):
    db_user = db.query(UserInfo).filter(UserInfo.user_name == user_name).first()
    if db_user:
        for _, value in user.dict().items():
            setattr(db_user,_,value)
        db.commit()
        db.refresh(db_user)
    return db_user

def delete_user(db: Session, user_name: str):
    db_user = db.query(UserInfo).filter(UserInfo.user_name == user_name).first()
    if db_user:
        db.delete(db_user)
        db.commit()
    return {"message":"User deleted successfully"}


def authenticate_password(db: Session,user_name: str,user_password:str):
    user = get_user(db, user_name)
    if not user:
        return False
    if not verify_password(user.user_password,user_password):
        return False
    return True

def get_password_hash(password: str):
    return pwd_context.hash(password)

def verify_password(hashed_password, plain_password):
    return pwd_context.verify(plain_password, hashed_password)
