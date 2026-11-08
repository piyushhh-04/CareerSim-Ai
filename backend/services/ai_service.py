from __future__ import annotations

from pathlib import Path

try:
    from google import genai
    from google.genai import errors as genai_errors
    from google.genai import types as genai_types
except ImportError:  # pragma: no cover - optional dependency at import time
    genai = None  # type: ignore[assignment]
    genai_errors = None  # type: ignore[assignment]
    genai_types = None  # type: ignore[assignment]

from backend.config.settings import settings
from backend.schemas.simulation import SimulationRequest, SimulationResponse


class GeminiServiceError(RuntimeError):
    """Raised when Gemini cannot produce a valid simulation."""


class AIService:
    """Generate validated career simulations with Gemini."""

    def __init__(self, api_key: str | None = None) -> None:
        self.api_key = api_key or settings.gemini_api_key
        self.client = (
            genai.Client(
                api_key=self.api_key,
                http_options=genai_types.HttpOptions(api_version="v1beta"),
            )
            if self.api_key and genai is not None and genai_types is not None
            else None
        )

    def is_configured(self) -> bool:
        """Return whether the service has credentials available."""

        return self.client is not None

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

    def generate_simulation(self, payload: SimulationRequest) -> SimulationResponse:
        """Generate one structured simulation and validate it before returning it."""

        if not self.is_configured():
            raise GeminiServiceError("Gemini is not configured. Set GEMINI_API_KEY in backend/.env.")

        prompt = (
            f"{self.build_prompt(payload)}\n\n"
            "Return JSON matching the provided schema. Use exactly four timeline keys: "
            '"1 year", "3 year", "5 year", and "10 year". '
            "Include three decision points with years, title, pros, cons, and impact. "
            "Keep salary ranges directional and include a clear disclaimer that this is not "
            "financial or employment advice. Do not invent personal facts."
        )
        try:
            response = self.client.models.generate_content(
                model=settings.gemini_model,
                contents=prompt,
                config={
                    "temperature": 0.35,
                    "response_mime_type": "application/json",
                    "response_json_schema": SimulationResponse.model_json_schema(),
                },
            )
        except genai_errors.APIError as exc:
            raise GeminiServiceError(f"Gemini request failed: {exc.message}") from exc
        response_text = response.text
        if not response_text:
            raise GeminiServiceError("Gemini returned an empty response.")

        try:
            return SimulationResponse.model_validate_json(response_text)
        except ValueError as exc:
            raise GeminiServiceError("Gemini returned a response that did not match the simulation schema.") from exc
