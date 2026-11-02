from __future__ import annotations

from pydantic import BaseModel, Field


class CareerItem(BaseModel):
    """Schema for an individual career entry returned by the careers endpoint."""

    id: int = Field(..., ge=1)
    name: str = Field(..., min_length=2, max_length=80)
