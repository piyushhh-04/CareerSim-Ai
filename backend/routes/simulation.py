from fastapi import APIRouter, Depends, HTTPException, status

from backend.schemas.simulation import (
    CompareRequest,
    CompareResponse,
    SimulationRequest,
    SimulationResponse,
)
from backend.services.ai_service import GeminiServiceError
from backend.services.simulation_service import SimulationService

router = APIRouter(tags=["simulation"])


def get_simulation_service() -> SimulationService:
    """Create a simulation service instance for dependency injection."""

    return SimulationService()


@router.post("/simulate", response_model=SimulationResponse)
def simulate(payload: SimulationRequest, service: SimulationService = Depends(get_simulation_service)) -> SimulationResponse:
    """Create a deterministic mock career simulation from the provided inputs."""

    try:
        return service.simulate(payload)
    except ValueError as exc:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=str(exc)) from exc
    except GeminiServiceError as exc:
        raise HTTPException(status_code=status.HTTP_503_SERVICE_UNAVAILABLE, detail=str(exc)) from exc


@router.post("/compare", response_model=CompareResponse)
def compare(payload: CompareRequest, service: SimulationService = Depends(get_simulation_service)) -> CompareResponse:
    """Compare multiple careers with a lightweight summary payload."""

    try:
        return service.compare(payload)
    except ValueError as exc:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=str(exc)) from exc
