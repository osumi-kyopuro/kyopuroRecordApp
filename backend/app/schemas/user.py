from pydantic import BaseModel

class UserInfo(BaseModel):
    user_id: int
    user_name:str
    user_password: str 