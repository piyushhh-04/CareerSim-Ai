from __future__ import annotations

from backend.models.career import CareerOption, get_default_career_names


class CareerService:
    """Service layer for retrieving predefined career options."""

    def __init__(self) -> None:
        self._careers = [
            CareerOption(id=index, name=name)
            for index, name in enumerate(get_default_career_names(), start=1)
        ]

    def get_careers(self) -> list[CareerOption]:
        """Return the predefined careers available to the user."""

        return self._careers
