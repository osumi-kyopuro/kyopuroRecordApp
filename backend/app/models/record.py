from sqlalchemy import Column,String,Integer
from ..databases.database import Base

class Record(Base):
    __tablename__ = 'record'

    record_id=Column(Integer,primary_key=True,autoincrement=True,unique=True)
    user_name=Column(String(200),unique=True)
    question_number=Column(String(200))
    question_name=Column(String(200))
    code_link=Column(String(200))
    memo=Column(String(200))
    ac_day=Column(String(200))
    
