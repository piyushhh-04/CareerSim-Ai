from __future__ import annotations

import os
from pathlib import Path

from dotenv import load_dotenv


BASE_DIR = Path(__file__).resolve().parents[1]
load_dotenv(BASE_DIR / ".env")


class Settings:
    """Application settings loaded from environment variables."""

    def __init__(self) -> None:
        self.gemini_api_key: str | None = os.getenv("GEMINI_API_KEY")
        self.gemini_model: str = os.getenv("GEMINI_MODEL", "gemini-2.5-flash")
        self.port: int = int(os.getenv("PORT", "8000"))


settings = Settings()
