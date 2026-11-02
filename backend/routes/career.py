from fastapi import APIRouter, Depends

from backend.schemas.career import CareerItem
from backend.services.career_service import CareerService

router = APIRouter(tags=["careers"])


def get_career_service() -> CareerService:
    """Create a career service instance for dependency injection."""

    return CareerService()


@router.get("/careers", response_model=list[CareerItem])
def list_careers(service: CareerService = Depends(get_career_service)) -> list[CareerItem]:
    """Return the predefined careers available to the frontend."""

    return [CareerItem(id=career.id, name=career.name) for career in service.get_careers()]
