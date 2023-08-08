from sqlalchemy.orm import Session
from ..models.record import Record
from ..schemas.record import RecordRequestBody

def get_records(db:Session,user_name:str):
    return db.query(Record).filter(Record.user_name == user_name).all()


def get_record(db:Session,record_id:int):
    return db.query(Record).filter(Record.record_id == record_id).first()

def create_record(db:Session,record:RecordRequestBody):
    db_record=Record(**record.dict())
    db.add(db_record)
    db.commit()
    db.refresh(db_record)
    return db_record


def update_record(db:Session,record_id:int,record:RecordRequestBody):
    db_record = db.query(Record).filter(Record.record_id == record_id).first()
    if db_record:
        for i,value in record.dict().items():
            setattr(db_record,i,value)
        db.commit()
        db.refresh(db_record)
    return db_record


def delete_record(db:Session,record_id:int):
    db_record = db.query(Record).filter(Record.record_id == record_id).first()
    if db_record:
        db.delete(db_record)
        db.commit()
    return {"message":"Record deleted successfully"}
