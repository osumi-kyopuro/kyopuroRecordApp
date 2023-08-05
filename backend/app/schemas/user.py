from pydantic import BaseModel

class UserBase(BaseModel):
    user_name:str
    user_password: str 


class UserInfo(UserBase):
    user_id: int

