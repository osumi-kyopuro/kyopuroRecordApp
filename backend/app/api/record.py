from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from ..schemas.record import Record,RecordRequestBody
from ..crud.record import get_records,get_record,create_record,update_record,delete_record
from ..databases.database import SessionLocal,engine,Base
from fastapi.responses import JSONResponse

Base.metadata.create_all(bind=engine,)
router=APIRouter()


def get_db():
    db=SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.post("/record/",response_model=Record)
def create_new_record(record:RecordRequestBody,db:Session=Depends(get_db)):
    db_record=create_record(db,record=record)
    return db_record


@router.get("/record/user/{user_name}",response_model=List[Record])
def read_records(user_name:str,db:Session=Depends(get_db)):
    records=get_records(db,user_name=user_name)
    print(records)
    return records

@router.get("/record/id/{record_id}",response_model=Record)
def read_record(record_id:int,db:Session=Depends(get_db)):
    db_record=get_record(db,record_id=record_id)
    return db_record


@router.put("/record/id/{record_id}",response_model=Record)
def update_existing_record(record_id:int,record:RecordRequestBody,db:Session=Depends(get_db)):
    db_record=get_record(db,record_id=record_id)
    if db_record is None:
        raise HTTPException(status_code=404,detail="Record not found")
    return update_record(db,record_id=record_id,record=record)


@router.delete("/record/id/{record_id}")
def delete_existing_record(record_id:int,db:Session=Depends(get_db)):
    db_record=get_record(db,record_id=record_id)
    if db_record is None:
        raise HTTPException(status_code=404,detail="Record not found")
    return delete_record(db,record_id=record_id)
