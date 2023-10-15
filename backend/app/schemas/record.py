from pydantic import BaseModel
from datetime import date
from typing import Optional

class RecordRequestBody(BaseModel):
    user_name:str
    category:str
    question_number:str
    question_name:str
    code_link:str
    memo: str
    ac_day: Optional[date]=None


class Record(RecordRequestBody):
    record_id:int