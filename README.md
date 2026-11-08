# CareerSim AI

CareerSim AI is an interactive career-planning simulator that helps users explore possible career paths based on their background, skills, interests, and risk tolerance. It turns a short onboarding profile into a structured career outlook with milestones, salary ranges, market demand, work-life balance, stress indicators, decision points, and actionable insights.

## What it includes

- Guided onboarding for age, education, skills, interests, and risk tolerance
- Curated career selection and career-profile views
- Timeline-based simulations across early-, mid-, and long-term milestones
- Salary, market-demand, stress, and work-life-balance indicators
- Decision cards that highlight key career trade-offs
- Side-by-side career comparison
- Responsive React interface with animated UI components and data visualizations
- FastAPI endpoints for careers, simulations, comparisons, and health checks

> **Current implementation:** Simulation results are deterministic and based on the career profiles included in the repository. The backend contains a Groq/OpenAI-compatible service scaffold for future AI-generated enhancements, but live model generation is not enabled yet.

## Technology stack

### Frontend

- React 19
- Vite
- React Router
- Recharts
- Framer Motion
- Lucide React

### Backend

- Python 3.10+
- FastAPI
- Pydantic
- Uvicorn
- Optional Groq/OpenAI-compatible client support

## Project structure

```text
.
├── backend/
│   ├── routes/       # API route handlers
│   ├── schemas/      # Request and response validation
│   ├── services/     # Career and simulation logic
│   ├── models/       # Career data models
│   └── prompts/      # Prompt templates for future AI workflows
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── router/
│   └── public/
├── .env.example
└── netlify.toml
```

## Getting started

### Prerequisites

- Node.js 18+
- Python 3.10+
- `pip`

### 1. Clone the repository

```bash
git clone https://github.com/piyushhh-04/CareerSim-Ai.git
cd CareerSim-Ai
```

### 2. Run the frontend

```bash
cd frontend
npm install
npm run dev
```

The Vite development server will print the local URL, normally `http://localhost:5173`.

### 3. Run the backend

From the repository root, create and activate a virtual environment, then install the backend dependencies:

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r backend/requirements.txt
uvicorn backend.app:app --reload --port 8000
```

The API will be available at `http://localhost:8000`. Interactive API documentation is available at `http://localhost:8000/docs`.

### Environment variables

Copy `.env.example` to `.env` when environment configuration is needed:

```bash
cp .env.example .env
```

`GEMINI_API_KEY` enables Gemini-powered simulation generation. `GEMINI_MODEL` defaults to `gemini-2.5-flash` and can be changed when a different supported Gemini model is preferred.

The API key is loaded only by the backend. Never place it in frontend environment variables, commit it to Git, or expose it in browser code.

## API overview

| Method | Endpoint | Purpose |
| --- | --- | --- |
| `GET` | `/health` | Check backend availability |
| `GET` | `/careers` | List supported career options |
| `POST` | `/simulate` | Generate a career simulation |
| `POST` | `/compare` | Compare selected careers |

When `GEMINI_API_KEY` is configured, `/simulate` generates a structured personalized response with Gemini and validates it against the backend schema. Without a key, predefined careers use the repository's deterministic profiles.

## Frontend commands

Run these commands from `frontend/`:

```bash
npm run dev      # Start the development server
npm run build    # Create a production build in dist/
npm run preview  # Preview the production build locally
npm run lint     # Run ESLint
```

## Deployment

The repository includes a `netlify.toml` configured to build the frontend from `frontend/` and publish `frontend/dist`. It also includes an SPA redirect for client-side routing.

The backend is not configured with a hosting provider in this repository. For a production deployment, the frontend and FastAPI backend must be hosted separately unless the backend is added to a compatible service.

## License

No license has been specified for this repository yet.
