from pydantic import BaseModel

class RecordRequestBody(BaseModel):
    user_name:str
    category:str
    question_number:str
    question_name:str
    code_link:str
    memo:str
    ac_day:str


class Record(RecordRequestBody):
    record_id:int