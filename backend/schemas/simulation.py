from __future__ import annotations

from typing import Any, Literal

from pydantic import BaseModel, ConfigDict, Field, field_validator

from backend.models.career import DEFAULT_CAREERS


class SimulationRequest(BaseModel):
    """Input payload required to simulate a career path."""

    model_config = ConfigDict(str_strip_whitespace=True)

    age: int = Field(..., ge=16, le=70)
    education: str = Field(..., min_length=2, max_length=60)
    skills: list[str] = Field(..., min_length=1, max_length=10)
    interests: list[str] = Field(..., min_length=1, max_length=10)
    riskTolerance: Literal["Low", "Medium", "High"] = Field(...)
    career: str = Field(..., min_length=2, max_length=80)

    @field_validator("education")
    @classmethod
    def validate_education(cls, value: str) -> str:
        allowed_values = {
            "high school": "High School",
            "bachelors": "Bachelor's",
            "bachelor's": "Bachelor's",
            "master's": "Master's",
            "masters": "Master's",
            "phd": "PhD",
            "vocational": "Vocational",
        }
        normalized = " ".join(value.split()).lower()
        if normalized not in allowed_values:
            raise ValueError("education must be one of: High School, Bachelor's, Master's, PhD, Vocational")
        return allowed_values[normalized]

    @field_validator("skills", "interests")
    @classmethod
    def validate_string_arrays(cls, value: list[str]) -> list[str]:
        cleaned = [item.strip() for item in value if item and item.strip()]
        if not cleaned:
            raise ValueError("at least one non-empty item is required")
        return cleaned

    @field_validator("career")
    @classmethod
    def validate_career(cls, value: str) -> str:
        normalized = " ".join(value.split())
        if normalized not in DEFAULT_CAREERS:
            raise ValueError("career must be one of the predefined options")
        return normalized


class TimelineMilestone(BaseModel):
    """A single milestone in a simulated timeline."""

    title: str
    salary: str
    skills: list[str]
    workLifeBalance: int = Field(..., ge=1, le=10)
    stress: int = Field(..., ge=1, le=10)
    marketDemand: str
    explanation: str


class SimulationResponse(BaseModel):
    """Response payload for a single simulation."""

    career: str
    confidence: int = Field(..., ge=0, le=100)
    timeline: dict[str, TimelineMilestone]
    salary: str
    skills: list[str]
    stress: int = Field(..., ge=1, le=10)
    workLifeBalance: int = Field(..., ge=1, le=10)
    marketDemand: str
    decisionPoints: list[dict[str, Any]]
    insights: list[str]


class CompareRequest(BaseModel):
    """Request payload for comparing multiple careers."""

    model_config = ConfigDict(str_strip_whitespace=True)

    careers: list[str] = Field(..., min_length=1, max_length=4)

    @field_validator("careers")
    @classmethod
    def validate_careers(cls, value: list[str]) -> list[str]:
        cleaned: list[str] = []
        for item in value:
            normalized = " ".join(item.split())
            if normalized not in DEFAULT_CAREERS:
                raise ValueError("all careers must be predefined options")
            cleaned.append(normalized)
        return cleaned


class ComparisonCareer(BaseModel):
    """A single career summary in a comparison response."""

    career: str
    confidence: int = Field(..., ge=0, le=100)
    salary: str
    stress: int = Field(..., ge=1, le=10)
    workLifeBalance: int = Field(..., ge=1, le=10)
    marketDemand: str


class CompareResponse(BaseModel):
    """Response payload for the compare endpoint."""

    careers: list[ComparisonCareer]
    summary: list[str]
