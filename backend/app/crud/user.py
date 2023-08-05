from sqlalchemy.orm import Session
from ..models.user import UserInfo
from ..schemas.user import UserInfo as UserInfoSchema

def get_users(db: Session, skip: int = 0, limit: int = 10):
    return db.query(UserInfo).offset(skip).limit(limit).all()

def get_user(db: Session, user_id: int):
    return db.query(UserInfo).filter(UserInfo.user_id == user_id).first()

def create_user(db: Session, user: UserInfoSchema):
    db_user = UserInfo(**user.dict())
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

def update_user(db: Session, user_id: int, user: UserInfoSchema):
    db_user = db.query(UserInfo).filter(UserInfo.user_id == user_id).first()
    if db_user:
        for key, value in user.dict().items():
            setattr(db_user, key, value)
        db.commit()
        db.refresh(db_user)
    return db_user

def delete_user(db: Session, user_id: int):
    db_user = db.query(UserInfo).filter(UserInfo.user_id == user_id).first()
    if db_user:
        db.delete(db_user)
        db.commit()
    return {"message":"User deleted successfully"}
