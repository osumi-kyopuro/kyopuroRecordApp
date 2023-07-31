from typing import Union
from fastapi import FastAPI
from pydantic import BaseModel

class UserInfo(BaseModel):
    user_id:int
    user_name:str
    password:str

