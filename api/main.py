from fastapi import FastAPI
app = FastAPI()

@app.get("/hello")
async def getUserInfo():
    return {"message":"Hello fastAPI"}
