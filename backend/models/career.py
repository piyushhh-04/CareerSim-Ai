from __future__ import annotations

from pydantic import BaseModel, Field


class CareerOption(BaseModel):
    """Represents a single career option exposed by the API."""

    id: int = Field(..., ge=1)
    name: str = Field(..., min_length=2, max_length=80)


DEFAULT_CAREERS: tuple[str, ...] = (
    "Software Engineer",
    "AI Engineer",
    "Data Scientist",
    "Data Analyst",
    "Cybersecurity Engineer",
    "Cloud Engineer",
    "Product Manager",
    "UX Designer",
    "Operations Analyst",
    "DevOps Engineer",
)


def get_default_career_names() -> list[str]:
    """Return the predefined careers used for validation and responses."""

    return list(DEFAULT_CAREERS)
