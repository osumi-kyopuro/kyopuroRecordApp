import mysql.connector
from fastapi import APIRouter ,HTTPException
from os.path import dirname, abspath
import sys

router = APIRouter()

# READ
@router.get("/userInfo/")
async def getUserInfo():
    pass

# CREATE
@router.post("/userInfo/")
async def createUserInfo():
    pass

# UPDATE
@router.put("/userInfo/{userId}")
async def updateUserInfo(userId: int):
    pass

# DELETE
@router.delete("/userInfo/{userId}")
async def deleteUserInfo(userId: int):
    pass

# UPDATE
@router.put("/userInfo/{userId}/done")
async def updateUserInfoAsDone(userId: int):
    pass

# DELETE
@router.delete("/userInfo/{userId}/done")
async def deleteUserInfoAsDone(userId: int):
    pass










    


