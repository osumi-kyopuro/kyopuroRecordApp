FROM python:3.9

WORKDIR /code

COPY ./requirements.txt /code/requirements.txt

EXPOSE 3306

RUN pip install fastapi uvicorn
RUN pip install mysql-connector-python
RUN pip install python-dotenv
RUN apt update
RUN apt install iputils-ping net-tools -y
RUN pip install --upgrade sqlalchemy

CMD ["make", "sleep-and-migrate-up"]

# backendモジュールをコンテナ内にコピー
COPY ./backend /code/backend