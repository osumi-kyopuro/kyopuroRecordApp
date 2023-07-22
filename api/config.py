import os
from dataclasses import dataclass

from dotenv import load_dotenv

load_dotenv()


def getenv(env_name: str):
    ret = os.getenv(env_name)
    if ret:
        return ret
    raise RuntimeError("TODO")


@dataclass(frozen=True)
class DbConfig:
    user: str
    password: str
    host: str
    database: str

    @staticmethod
    def get() -> "DbConfig":
        return DbConfig(
            getenv("user"), getenv("password"), getenv("host"), getenv("database")
        )


if __name__ == "__main__":
    print(DbConfig.get())
