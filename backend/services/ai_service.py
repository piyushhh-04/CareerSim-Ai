from __future__ import annotations

from pathlib import Path
from typing import Any

try:
    from openai import OpenAI  # type: ignore
except ImportError:  # pragma: no cover - optional dependency at import time
    OpenAI = None  # type: ignore[assignment]

from backend.config.settings import settings
from backend.schemas.simulation import SimulationRequest


class AIService:
    """Placeholder service for future Groq/OpenAI-backed enhancements."""

    def __init__(self, api_key: str | None = None) -> None:
        self.api_key = api_key or settings.groq_api_key
        self.client = None
        if self.api_key and OpenAI is not None:
            self.client = OpenAI(api_key=self.api_key, base_url="https://api.groq.com/openai/v1")

    def is_configured(self) -> bool:
        """Return whether the service has credentials available."""

        return bool(self.api_key)

    def build_prompt(self, payload: SimulationRequest) -> str:
        """Prepare a prompt for future AI generation workflows."""

        prompt_path = Path(__file__).resolve().parents[1] / "prompts" / "simulation_prompt.txt"
        template = prompt_path.read_text(encoding="utf-8")
        return template.format(
            career=payload.career,
            age=payload.age,
            education=payload.education,
            skills=", ".join(payload.skills),
            interests=", ".join(payload.interests),
            risk_tolerance=payload.riskTolerance,
        )

    def generate_simulation(self, payload: SimulationRequest) -> dict[str, Any]:
        """Return a placeholder response until AI integration is enabled."""

        if not self.is_configured():
            return {
                "status": "not_configured",
                "message": "Groq/OpenAI credentials are not configured yet.",
            }
        raise NotImplementedError("AI integration is not enabled yet; deterministic mock data is used instead.")
