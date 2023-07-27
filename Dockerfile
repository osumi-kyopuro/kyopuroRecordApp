FROM python:3.9

WORKDIR /code

COPY ./requirements.txt /code/requirements.txt

RUN pip install --no-cache-dir --upgrade -r /code/requirements.txt
RUN pip install fastapi uvicorn
RUN pip install mysql-connector-python
RUN pip install python-dotenv

# apiモジュールをコンテナ内にコピー
COPY ./api /code/api

CMD ["uvicorn", "api.crud:app", "--host", "0.0.0.0", "--port", "80"]
