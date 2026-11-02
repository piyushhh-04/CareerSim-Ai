from __future__ import annotations

import os
from pathlib import Path

from dotenv import load_dotenv


BASE_DIR = Path(__file__).resolve().parents[1]
load_dotenv(BASE_DIR / ".env")


class Settings:
    """Application settings loaded from environment variables."""

    def __init__(self) -> None:
        self.groq_api_key: str | None = os.getenv("GROQ_API_KEY")
        self.port: int = int(os.getenv("PORT", "8000"))


settings = Settings()
