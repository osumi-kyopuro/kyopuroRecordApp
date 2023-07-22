import os
from dataclasses import asdict, dataclass

from dotenv import load_dotenv

load_dotenv()


def getenv(env_name: str):
    ret = os.getenv(env_name)
    if ret:
        return ret
    raise RuntimeError("TODO")


@dataclass(frozen=True)
class DbConfig:
    """RDS接続情報"""

    user: str
    password: str
    host: str
    database: str

    @staticmethod
    def get() -> "DbConfig":
        return DbConfig(
            getenv("user"), getenv("password"), getenv("host"), getenv("database")
        )

    def to_dict(self) -> dict:
        return asdict(self)


if __name__ == "__main__":
    d = DbConfig.get()
    print(d)
    print(d.to_dict())
