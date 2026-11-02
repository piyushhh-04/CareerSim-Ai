import sys
from pathlib import Path

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

PROJECT_ROOT = Path(__file__).resolve().parent.parent
if str(PROJECT_ROOT) not in sys.path:
    sys.path.insert(0, str(PROJECT_ROOT))

from backend.routes.career import router as career_router
from backend.routes.health import router as health_router
from backend.routes.simulation import router as simulation_router

app = FastAPI(
    title="CareerSim AI Backend",
    version="1.0.0",
    description="Modular FastAPI backend for career simulations and comparisons.",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(health_router)
app.include_router(career_router)
app.include_router(simulation_router)
