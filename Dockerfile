FROM python:3.9

WORKDIR /code

COPY ./requirements.txt /code/requirements.txt

EXPOSE 3306

RUN pip install --no-cache-dir --upgrade -r /code/requirements.txt
RUN pip install fastapi uvicorn
RUN pip install mysql-connector-python
RUN pip install python-dotenv

# apiモジュールをコンテナ内にコピー
COPY ./api /code/api


# 初期パスワードを設定する
ENV MYSQL_ROOT_PASSWORD="mysql"

# ここから下は任意の項目

# データベース名
ENV MYSQL_DATABASE="db"
# ユーザー名
ENV MYSQL_USER="root"
# パスワード
ENV MYSQL_PASSWORD="password"


CMD ["uvicorn", "api.crud:app", "--host", "0.0.0.0", "--port", "80"]