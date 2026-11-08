from __future__ import annotations

from typing import Any

from backend.services.ai_service import AIService, GeminiServiceError
from backend.schemas.simulation import CompareRequest, CompareResponse, ComparisonCareer, SimulationRequest, SimulationResponse


class SimulationService:
    """Service layer for deterministic mock career simulations and comparisons."""

    def __init__(self, ai_service: AIService | None = None) -> None:
        self.ai_service = ai_service or AIService()
        self._career_profiles: dict[str, dict[str, Any]] = {
            "Software Engineer": {
                "confidence": 92,
                "salary": "$78k - $102k",
                "skills": ["Python", "System Design", "Testing", "Cloud"],
                "stress": 6,
                "work_life_balance": 7,
                "market_demand": "High",
                "timeline": {
                    "1 year": {
                        "title": "Junior Software Engineer",
                        "salary": "$78k - $102k",
                        "skills": ["Python", "Testing", "Git"],
                        "workLifeBalance": 7,
                        "stress": 6,
                        "marketDemand": "High",
                        "explanation": "You build product confidence through shipping reliable features and learning core engineering practices.",
                    },
                    "3 year": {
                        "title": "Software Engineer II",
                        "salary": "$110k - $145k",
                        "skills": ["System Design", "Cloud Services", "API Design"],
                        "workLifeBalance": 6,
                        "stress": 7,
                        "marketDemand": "Very High",
                        "explanation": "You begin owning larger modules and contributing to technical strategy with stronger independence.",
                    },
                    "5 year": {
                        "title": "Senior Software Engineer",
                        "salary": "$140k - $185k",
                        "skills": ["Architecture", "Leadership", "Performance Tuning"],
                        "workLifeBalance": 5,
                        "stress": 8,
                        "marketDemand": "High",
                        "explanation": "Your path becomes more strategic as you influence platform direction and team execution quality.",
                    },
                    "10 year": {
                        "title": "Principal Engineer",
                        "salary": "$180k - $240k",
                        "skills": ["Strategy", "Platform Thinking", "Executive Communication"],
                        "workLifeBalance": 4,
                        "stress": 9,
                        "marketDemand": "Strong",
                        "explanation": "At this stage you are shaping engineering direction, mentoring leaders, and driving long-term impact.",
                    },
                },
                "decision_points": [
                    {"year": 1, "title": "Learn AI-assisted development", "impact": "Boosts productivity and marketability."},
                    {"year": 3, "title": "Move to a product-led company", "impact": "Expands visibility and ownership."},
                    {"year": 5, "title": "Lean into leadership", "impact": "Strengthens compensation and influence."},
                ],
                "insights": [
                    "Strong long-term demand across industries.",
                    "High upside for engineers who grow into system ownership.",
                    "Stress rises as scope and responsibility increase.",
                ],
            },
            "AI Engineer": {
                "confidence": 94,
                "salary": "$90k - $125k",
                "skills": ["Python", "LLM Systems", "Model Evaluation", "MLOps"],
                "stress": 7,
                "work_life_balance": 6,
                "market_demand": "Very High",
                "timeline": {
                    "1 year": {
                        "title": "AI Engineer Associate",
                        "salary": "$90k - $125k",
                        "skills": ["Python", "Prompt Design", "Data Wrangling"],
                        "workLifeBalance": 6,
                        "stress": 7,
                        "marketDemand": "Very High",
                        "explanation": "You learn to build practical AI workflows and translate experimentation into reliable product features.",
                    },
                    "3 year": {
                        "title": "Applied AI Engineer",
                        "salary": "$125k - $165k",
                        "skills": ["MLOps", "Evaluation", "Deployment"],
                        "workLifeBalance": 5,
                        "stress": 8,
                        "marketDemand": "Very High",
                        "explanation": "Your work becomes more production-focused as you optimize reliable AI experiences for users.",
                    },
                    "5 year": {
                        "title": "Senior AI Engineer",
                        "salary": "$160k - $210k",
                        "skills": ["Architecture", "Security", "Research Translation"],
                        "workLifeBalance": 4,
                        "stress": 8,
                        "marketDemand": "High",
                        "explanation": "You guide model strategy, shipping quality, and cross-functional alignment around AI systems.",
                    },
                    "10 year": {
                        "title": "AI Platform Lead",
                        "salary": "$200k - $280k",
                        "skills": ["Strategy", "Responsible AI", "Platform Building"],
                        "workLifeBalance": 4,
                        "stress": 9,
                        "marketDemand": "Strong",
                        "explanation": "You influence platform-level systems and create durable frameworks that accelerate AI adoption.",
                    },
                },
                "decision_points": [
                    {"year": 1, "title": "Specialize in LLM systems", "impact": "Improves positioning in the fastest-growing segment."},
                    {"year": 3, "title": "Build domain expertise", "impact": "Creates strong differentiation in regulated industries."},
                    {"year": 5, "title": "Move into AI strategy", "impact": "Broadens influence and compensation potential."},
                ],
                "insights": [
                    "Excellent short-term demand with high upside.",
                    "The field evolves quickly, so continuous learning matters.",
                    "Strong fit for people who enjoy experimentation and fast iteration.",
                ],
            },
            "Data Scientist": {
                "confidence": 90,
                "salary": "$85k - $115k",
                "skills": ["Python", "Statistics", "SQL", "Experiment Design"],
                "stress": 6,
                "work_life_balance": 7,
                "market_demand": "High",
                "timeline": {
                    "1 year": {
                        "title": "Data Scientist I",
                        "salary": "$85k - $115k",
                        "skills": ["Python", "SQL", "Visualization"],
                        "workLifeBalance": 7,
                        "stress": 6,
                        "marketDemand": "High",
                        "explanation": "You build trusted analysis workflows and learn how to connect data to business questions.",
                    },
                    "3 year": {
                        "title": "Senior Data Scientist",
                        "salary": "$120k - $155k",
                        "skills": ["Experiment Design", "Product Analytics", "Communication"],
                        "workLifeBalance": 6,
                        "stress": 7,
                        "marketDemand": "High",
                        "explanation": "Your work becomes more strategic as you shape product and business decisions with evidence.",
                    },
                    "5 year": {
                        "title": "Lead Data Scientist",
                        "salary": "$150k - $195k",
                        "skills": ["Leadership", "Causal Inference", "Strategy"],
                        "workLifeBalance": 5,
                        "stress": 8,
                        "marketDemand": "Strong",
                        "explanation": "You navigate larger initiatives and influence how teams use data to make decisions.",
                    },
                    "10 year": {
                        "title": "Principal Scientist",
                        "salary": "$190k - $250k",
                        "skills": ["Research Direction", "Team Building", "Executive Communication"],
                        "workLifeBalance": 4,
                        "stress": 8,
                        "marketDemand": "Strong",
                        "explanation": "You build analytical capability at an organizational level and guide broader strategic choices.",
                    },
                },
                "decision_points": [
                    {"year": 1, "title": "Focus on business storytelling", "impact": "Makes your insights more influential."},
                    {"year": 3, "title": "Specialize in experimentation", "impact": "Creates stronger differentiation."},
                    {"year": 5, "title": "Move into analytics leadership", "impact": "Expands career leverage."},
                ],
                "insights": [
                    "Broadly valuable across industries and functions.",
                    "Communication quality strongly affects career growth.",
                    "Good fit for analytically minded people who enjoy structured problem solving.",
                ],
            },
            "Data Analyst": {
                "confidence": 88,
                "salary": "$65k - $85k",
                "skills": ["SQL", "Excel", "Dashboarding", "Reporting"],
                "stress": 5,
                "work_life_balance": 8,
                "market_demand": "High",
                "timeline": {
                    "1 year": {
                        "title": "Junior Data Analyst",
                        "salary": "$65k - $85k",
                        "skills": ["Excel", "SQL", "Reporting"],
                        "workLifeBalance": 8,
                        "stress": 5,
                        "marketDemand": "High",
                        "explanation": "You establish a strong foundation in reporting, metrics, and data quality.",
                    },
                    "3 year": {
                        "title": "Data Analyst II",
                        "salary": "$85k - $110k",
                        "skills": ["BI Tools", "Business Metrics", "Automation"],
                        "workLifeBalance": 7,
                        "stress": 6,
                        "marketDemand": "High",
                        "explanation": "Your work becomes more scalable and strategic as you improve reporting systems.",
                    },
                    "5 year": {
                        "title": "Senior Data Analyst",
                        "salary": "$110k - $140k",
                        "skills": ["Strategy", "Experimentation", "Product Metrics"],
                        "workLifeBalance": 6,
                        "stress": 7,
                        "marketDemand": "Strong",
                        "explanation": "You transition into a trusted advisory role with increasing business influence.",
                    },
                    "10 year": {
                        "title": "Analytics Manager",
                        "salary": "$135k - $175k",
                        "skills": ["People Leadership", "Planning", "Governance"],
                        "workLifeBalance": 5,
                        "stress": 8,
                        "marketDemand": "Strong",
                        "explanation": "You guide broader analytics priorities and lead teams that deliver durable reporting and insight.",
                    },
                },
                "decision_points": [
                    {"year": 1, "title": "Learn BI automation", "impact": "Increases leverage and efficiency."},
                    {"year": 3, "title": "Specialize in product analytics", "impact": "Makes your work more visible and impactful."},
                    {"year": 5, "title": "Move into management", "impact": "Broadens influence and pay."},
                ],
                "insights": [
                    "Stable and practical career path.",
                    "Strong business value with healthy work-life balance potential.",
                    "Good fit for people who enjoy operational clarity and structured analysis.",
                ],
            },
            "Cybersecurity Engineer": {
                "confidence": 93,
                "salary": "$85k - $115k",
                "skills": ["Network Security", "Cloud Security", "SIEM", "Threat Analysis"],
                "stress": 7,
                "work_life_balance": 6,
                "market_demand": "Very High",
                "timeline": {
                    "1 year": {
                        "title": "Security Analyst",
                        "salary": "$85k - $115k",
                        "skills": ["Network Security", "SIEM", "Threat Analysis"],
                        "workLifeBalance": 6,
                        "stress": 7,
                        "marketDemand": "Very High",
                        "explanation": "You learn to detect and respond to practical security issues with discipline and care.",
                    },
                    "3 year": {
                        "title": "Security Engineer",
                        "salary": "$115k - $150k",
                        "skills": ["Identity", "Hardening", "Automation"],
                        "workLifeBalance": 5,
                        "stress": 8,
                        "marketDemand": "Very High",
                        "explanation": "You deepen your ownership of controls and improve resilience at scale.",
                    },
                    "5 year": {
                        "title": "Senior Security Engineer",
                        "salary": "$145k - $190k",
                        "skills": ["Architecture", "Leadership", "Risk Analysis"],
                        "workLifeBalance": 4,
                        "stress": 9,
                        "marketDemand": "High",
                        "explanation": "Your influence expands as you tackle system-level security decisions and incident readiness.",
                    },
                    "10 year": {
                        "title": "Security Director",
                        "salary": "$180k - $240k",
                        "skills": ["Strategy", "Governance", "Executive Communication"],
                        "workLifeBalance": 4,
                        "stress": 9,
                        "marketDemand": "Strong",
                        "explanation": "You shape organizational risk posture and drive strategic security programs.",
                    },
                },
                "decision_points": [
                    {"year": 1, "title": "Specialize in cloud security", "impact": "High leverage in modern infrastructure."},
                    {"year": 3, "title": "Move into detection engineering", "impact": "Improves visibility and growth."},
                    {"year": 5, "title": "Step into leadership", "impact": "Broadens your influence and pay."},
                ],
                "insights": [
                    "Demand remains durable due to regulatory and technical pressures.",
                    "High-stakes work can be intense but highly valued.",
                    "Great fit for people who enjoy problem solving under pressure.",
                ],
            },
            "Cloud Engineer": {
                "confidence": 91,
                "salary": "$80k - $110k",
                "skills": ["AWS", "Terraform", "Linux", "Kubernetes"],
                "stress": 6,
                "work_life_balance": 6,
                "market_demand": "High",
                "timeline": {
                    "1 year": {
                        "title": "Cloud Engineer I",
                        "salary": "$80k - $110k",
                        "skills": ["AWS", "Linux", "Terraform"],
                        "workLifeBalance": 6,
                        "stress": 6,
                        "marketDemand": "High",
                        "explanation": "You learn to deploy and manage environment foundations that support modern products.",
                    },
                    "3 year": {
                        "title": "Cloud Engineer II",
                        "salary": "$110k - $145k",
                        "skills": ["Kubernetes", "Networking", "Automation"],
                        "workLifeBalance": 5,
                        "stress": 7,
                        "marketDemand": "High",
                        "explanation": "You begin owning more complex systems and improving automation and reliability.",
                    },
                    "5 year": {
                        "title": "Senior Cloud Engineer",
                        "salary": "$140k - $185k",
                        "skills": ["Architecture", "Observability", "Leadership"],
                        "workLifeBalance": 5,
                        "stress": 8,
                        "marketDemand": "Strong",
                        "explanation": "You shape architecture decisions and guide teams toward durable cloud operations.",
                    },
                    "10 year": {
                        "title": "Cloud Platform Lead",
                        "salary": "$180k - $240k",
                        "skills": ["Strategy", "Platform Governance", "Executive Alignment"],
                        "workLifeBalance": 4,
                        "stress": 8,
                        "marketDemand": "Strong",
                        "explanation": "You influence platform standards at scale and create leverage for the wider organization.",
                    },
                },
                "decision_points": [
                    {"year": 1, "title": "Learn infrastructure as code", "impact": "Improves speed and reliability."},
                    {"year": 3, "title": "Specialize in Kubernetes", "impact": "Strengthens your market value."},
                    {"year": 5, "title": "Move toward platform architecture", "impact": "Raises strategic scope."},
                ],
                "insights": [
                    "High demand in companies modernizing infrastructure.",
                    "Strong fit for people who enjoy systems thinking and operations.",
                    "Platform work can be highly rewarding but operationally intensive.",
                ],
            },
            "Product Manager": {
                "confidence": 89,
                "salary": "$85k - $115k",
                "skills": ["Roadmapping", "Prioritization", "Research", "Communication"],
                "stress": 7,
                "work_life_balance": 6,
                "market_demand": "High",
                "timeline": {
                    "1 year": {
                        "title": "Associate Product Manager",
                        "salary": "$85k - $115k",
                        "skills": ["Roadmapping", "Research", "Communication"],
                        "workLifeBalance": 6,
                        "stress": 7,
                        "marketDemand": "High",
                        "explanation": "You learn to connect customer needs, business priorities, and delivery realities.",
                    },
                    "3 year": {
                        "title": "Product Manager",
                        "salary": "$115k - $150k",
                        "skills": ["Strategy", "Analytics", "Stakeholder Management"],
                        "workLifeBalance": 5,
                        "stress": 8,
                        "marketDemand": "High",
                        "explanation": "You gain more ownership over product direction and cross-functional execution.",
                    },
                    "5 year": {
                        "title": "Senior Product Manager",
                        "salary": "$145k - $190k",
                        "skills": ["Leadership", "Planning", "Influence"],
                        "workLifeBalance": 4,
                        "stress": 8,
                        "marketDemand": "Strong",
                        "explanation": "You lead larger bets and are accountable for outcomes across multiple teams.",
                    },
                    "10 year": {
                        "title": "Director of Product",
                        "salary": "$180k - $240k",
                        "skills": ["Vision", "People Leadership", "Strategy"],
                        "workLifeBalance": 4,
                        "stress": 9,
                        "marketDemand": "Strong",
                        "explanation": "You shape product strategy at an organizational level and guide leadership teams.",
                    },
                },
                "decision_points": [
                    {"year": 1, "title": "Learn product analytics", "impact": "Improves decision quality."},
                    {"year": 3, "title": "Deepen domain expertise", "impact": "Adds credibility in complex markets."},
                    {"year": 5, "title": "Move into broader platform roles", "impact": "Raises strategic scope."},
                ],
                "insights": [
                    "High-value role for people who enjoy customer and business strategy.",
                    "Strong communication and prioritization skills matter a lot.",
                    "This path often brings meaningful leadership opportunities.",
                ],
            },
            "UX Designer": {
                "confidence": 87,
                "salary": "$70k - $95k",
                "skills": ["Figma", "Research", "UI Systems", "Communication"],
                "stress": 6,
                "work_life_balance": 7,
                "market_demand": "Moderate",
                "timeline": {
                    "1 year": {
                        "title": "Junior UX Designer",
                        "salary": "$70k - $95k",
                        "skills": ["Figma", "Research", "UI Systems"],
                        "workLifeBalance": 7,
                        "stress": 6,
                        "marketDemand": "Moderate",
                        "explanation": "You build product intuition and learn to make interfaces clearer and more useful.",
                    },
                    "3 year": {
                        "title": "UX Designer",
                        "salary": "$95k - $130k",
                        "skills": ["Design Systems", "User Flows", "Prototyping"],
                        "workLifeBalance": 6,
                        "stress": 7,
                        "marketDemand": "Moderate",
                        "explanation": "You gain more autonomy and deepen your influence over product experience decisions.",
                    },
                    "5 year": {
                        "title": "Senior UX Designer",
                        "salary": "$125k - $165k",
                        "skills": ["Leadership", "Research Ops", "Design Strategy"],
                        "workLifeBalance": 5,
                        "stress": 8,
                        "marketDemand": "Strong",
                        "explanation": "You become more strategic and guide richer, more durable user experiences.",
                    },
                    "10 year": {
                        "title": "Design Director",
                        "salary": "$155k - $220k",
                        "skills": ["Vision", "Leadership", "Executive Influence"],
                        "workLifeBalance": 4,
                        "stress": 8,
                        "marketDemand": "Strong",
                        "explanation": "You shape design culture and influence experience standards across broader initiatives.",
                    },
                },
                "decision_points": [
                    {"year": 1, "title": "Learn motion design", "impact": "Boosts differentiation and craft maturity."},
                    {"year": 3, "title": "Expand into strategy", "impact": "Makes your work more visible to leadership."},
                    {"year": 5, "title": "Lead a design system", "impact": "Creates strong organizational leverage."},
                ],
                "insights": [
                    "Best for people who enjoy empathy, creativity, and visual problem solving.",
                    "Design value increases when it is tied to measurable product outcomes.",
                    "The field benefits from strong systems thinking and collaboration.",
                ],
            },
            "Operations Analyst": {
                "confidence": 86,
                "salary": "$65k - $85k",
                "skills": ["Requirements Gathering", "Process Mapping", "Excel", "Communication"],
                "stress": 5,
                "work_life_balance": 7,
                "market_demand": "Moderate",
                "timeline": {
                    "1 year": {
                        "title": "Junior Operations Analyst",
                        "salary": "$65k - $85k",
                        "skills": ["Requirements Gathering", "Process Mapping", "Excel"],
                        "workLifeBalance": 7,
                        "stress": 5,
                        "marketDemand": "Moderate",
                        "explanation": "You learn to improve workflows, collect requirements, and support more reliable execution.",
                    },
                    "3 year": {
                        "title": "Operations Analyst II",
                        "salary": "$85k - $115k",
                        "skills": ["Stakeholder Alignment", "Workflow Design", "Documentation"],
                        "workLifeBalance": 6,
                        "stress": 6,
                        "marketDemand": "Moderate",
                        "explanation": "Your work becomes more structured as you support process improvements at scale.",
                    },
                    "5 year": {
                        "title": "Senior Operations Analyst",
                        "salary": "$110k - $145k",
                        "skills": ["Strategy", "Optimization", "Leadership"],
                        "workLifeBalance": 5,
                        "stress": 7,
                        "marketDemand": "Strong",
                        "explanation": "You transition into more strategic planning and influence how work flows across teams.",
                    },
                    "10 year": {
                        "title": "Operations Manager",
                        "salary": "$135k - $180k",
                        "skills": ["Planning", "Change Management", "Governance"],
                        "workLifeBalance": 5,
                        "stress": 8,
                        "marketDemand": "Strong",
                        "explanation": "You formalize operating systems and help teams scale without losing execution quality.",
                    },
                },
                "decision_points": [
                    {"year": 1, "title": "Learn process automation", "impact": "Improves leverage and speed."},
                    {"year": 3, "title": "Develop analytical rigor", "impact": "Makes your recommendations stronger."},
                    {"year": 5, "title": "Move into management", "impact": "Increases scope and compensation."},
                ],
                "insights": [
                    "High usefulness in mature organizations.",
                    "Practical path with strong long-term relevance.",
                    "Good fit for people who enjoy systems and coordination.",
                ],
            },
            "DevOps Engineer": {
                "confidence": 84,
                "salary": "$70k - $95k",
                "skills": ["CI/CD", "Linux", "Scripting", "Monitoring"],
                "stress": 6,
                "work_life_balance": 7,
                "market_demand": "High",
                "timeline": {
                    "1 year": {
                        "title": "Junior DevOps Engineer",
                        "salary": "$70k - $95k",
                        "skills": ["CI/CD", "Linux", "Scripting"],
                        "workLifeBalance": 7,
                        "stress": 6,
                        "marketDemand": "High",
                        "explanation": "You build strong fundamentals in release automation, reliability, and operational support.",
                    },
                    "3 year": {
                        "title": "DevOps Engineer",
                        "salary": "$105k - $140k",
                        "skills": ["Infrastructure as Code", "Cloud", "Security"],
                        "workLifeBalance": 5,
                        "stress": 8,
                        "marketDemand": "High",
                        "explanation": "You expand into delivery reliability and resilient platform automation.",
                    },
                    "5 year": {
                        "title": "Senior DevOps Engineer",
                        "salary": "$135k - $180k",
                        "skills": ["Platform Engineering", "Systems Design", "Leadership"],
                        "workLifeBalance": 4,
                        "stress": 8,
                        "marketDemand": "Strong",
                        "explanation": "You improve platform maturity and help teams move faster with fewer incidents.",
                    },
                    "10 year": {
                        "title": "Platform Director",
                        "salary": "$170k - $225k",
                        "skills": ["Strategy", "Governance", "People Leadership"],
                        "workLifeBalance": 4,
                        "stress": 9,
                        "marketDemand": "Strong",
                        "explanation": "You guide platform strategy and unlock leverage for the broader engineering organization.",
                    },
                },
                "decision_points": [
                    {"year": 1, "title": "Build strong automation habits", "impact": "Creates compounding career leverage."},
                    {"year": 3, "title": "Invest in cloud reliability", "impact": "Improves your market value."},
                    {"year": 5, "title": "Move into platform engineering", "impact": "Expands scope and influence."},
                ],
                "insights": [
                    "Useful across nearly every modern engineering team.",
                    "Great fit for people who enjoy reliability and delivery systems.",
                    "This role often becomes more strategic as systems mature.",
                ],
            },
        }

    def simulate(self, payload: SimulationRequest) -> SimulationResponse:
        """Generate a Gemini simulation when configured, otherwise use local profiles."""

        if self.ai_service.is_configured():
            try:
                return self.ai_service.generate_simulation(payload)
            except GeminiServiceError:
                # Keep the product usable when the provider is unavailable or rate-limited.
                pass

        profile = self._career_profiles.get(payload.career)
        if profile is None:
            raise ValueError(f"Unsupported career: {payload.career}")

        timeline = {
            key: {
                **value,
                "skills": list(value["skills"]),
                "explanation": value["explanation"],
            }
            for key, value in profile["timeline"].items()
        }

        return SimulationResponse(
            career=payload.career,
            confidence=profile["confidence"],
            timeline=timeline,
            salary=profile["salary"],
            skills=profile["skills"],
            stress=profile["stress"],
            workLifeBalance=profile["work_life_balance"],
            marketDemand=profile["market_demand"],
            decisionPoints=profile["decision_points"],
            insights=profile["insights"],
        )

    def compare(self, payload: CompareRequest) -> CompareResponse:
        """Create a simple comparison across multiple careers."""

        careers: list[ComparisonCareer] = []
        for career_name in payload.careers:
            profile = self._career_profiles.get(career_name)
            if profile is None:
                continue
            careers.append(
                ComparisonCareer(
                    career=career_name,
                    confidence=profile["confidence"],
                    salary=profile["salary"],
                    stress=profile["stress"],
                    workLifeBalance=profile["work_life_balance"],
                    marketDemand=profile["market_demand"],
                )
            )

        summary = []
        if careers:
            summary.append(
                f"{careers[0].career} offers a {careers[0].marketDemand.lower()} market demand outlook."
            )
            summary.append(
                f"Best balance appears in {max(careers, key=lambda item: item.workLifeBalance).career}."
            )
        return CompareResponse(careers=careers, summary=summary)
