from sqlalchemy import Column,String,Integer,Date
from ..databases.database import Base

class Record(Base):
    __tablename__ = 'record'

    __table_args__={
        "mysql_default_charset": "utf8mb4",
        "mysql_collate": "utf8mb4_general_ci",
    }

    record_id=Column(Integer,primary_key=True,autoincrement=True,unique=True)
    user_name=Column(String(20))
    category=Column(String(20,collation='utf8mb4_general_ci'))
    question_number=Column(String(20))
    question_name=Column(String(20))
    code_link=Column(String(20))
    memo=Column(String(40))
    ac_day=Column(Date)
    
