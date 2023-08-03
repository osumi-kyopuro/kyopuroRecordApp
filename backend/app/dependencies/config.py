import os
from dataclasses import asdict, dataclass

from dotenv import load_dotenv

load_dotenv()


def getenv(env_name: str) -> str:
    ret = os.getenv(env_name)
    if ret:
        return ret
    raise RuntimeError(f"{env_name}が環境変数に登録されていません．")


@dataclass(frozen=True)
class DbConfig:
    """RDS接続情報"""

    user: str
    password: str
    host: str
    database: str
    port: str

    @staticmethod
    def get() -> "DbConfig":
        return DbConfig(
            getenv("user"), getenv("password"), getenv("host"), getenv("database"),getenv("port")
        )

    def to_dict(self) -> dict:
        return asdict(self)
