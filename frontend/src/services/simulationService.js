const CAREER_PROFILES = {
  "Software Engineer": {
    summary: "Builds reliable digital products, scales systems, and turns product ideas into production-ready software.",
    confidenceScore: 92,
    estimatedAccuracy: 89,
    disclaimer: "Forecasts are directional and based on common market patterns across mid-career technology roles.",
    timeline: [
      {
        years: 1,
        title: "Junior Software Engineer",
        salary: "$78k - $102k",
        skills: ["Python", "JavaScript", "Testing", "Git"],
        workLifeBalance: 7,
        stress: 6,
        demand: "High",
        explanation: "Early growth focuses on shipping features, learning architecture patterns, and becoming dependable in a product team."
      },
      {
        years: 3,
        title: "Software Engineer II",
        salary: "$110k - $145k",
        skills: ["System Design", "Cloud Services", "API Design", "Mentoring"],
        workLifeBalance: 6,
        stress: 7,
        demand: "Very High",
        explanation: "You begin owning larger modules, contributing to technical strategy, and influencing team delivery quality."
      },
      {
        years: 5,
        title: "Senior Software Engineer",
        salary: "$140k - $185k",
        skills: ["Distributed Systems", "Leadership", "Performance Tuning", "Architecture"],
        workLifeBalance: 5,
        stress: 8,
        demand: "High",
        explanation: "Career upside grows through system ownership, cross-team influence, and strong execution under pressure."
      },
      {
        years: 10,
        title: "Principal / Engineering Lead",
        salary: "$180k - $240k",
        skills: ["Strategy", "Platform Thinking", "Executive Communication", "Innovation"],
        workLifeBalance: 4,
        stress: 9,
        demand: "Strong",
        explanation: "At this stage, your impact broadens into platform decisions, hiring initiatives, and long-term technical direction."
      }
    ],
    decisions: [
      { years: 1, title: "Learn AI-assisted development", pros: ["Faster output", "Higher relevance"], cons: ["Tool dependency", "Learning curve"], impact: "Boosts productivity and marketability." },
      { years: 3, title: "Switch to a product-led company", pros: ["Broader scope", "Better growth"], cons: ["More ambiguity", "Higher ownership"], impact: "Accelerates visibility and promotion readiness." },
      { years: 5, title: "Move into leadership", pros: ["Higher pay", "Strategic influence"], cons: ["Less coding", "More meetings"], impact: "Shifts your value from execution to orchestration." }
    ],
    insights: {
      strengths: ["Strong fundamentals", "Good long-term demand", "Transferable across industries"],
      weaknesses: ["Can become too tool-focused", "Promotion path can be political"],
      risks: ["Market saturation in entry-level roles", "Burnout in high-pressure teams"],
      opportunities: ["AI-native product engineering", "Platform and infrastructure growth"]
    }
  },
  "AI Engineer": {
    summary: "Designs intelligent systems, integrates models into products, and turns AI research into real-world utility.",
    confidenceScore: 94,
    estimatedAccuracy: 91,
    disclaimer: "AI roles evolve quickly; the simulation reflects the strongest recurring patterns in applied AI teams.",
    timeline: [
      {
        years: 1,
        title: "AI Engineer Intern / Associate",
        salary: "$90k - $125k",
        skills: ["Python", "ML Pipelines", "Prompt Design", "Data Wrangling"],
        workLifeBalance: 6,
        stress: 7,
        demand: "Very High",
        explanation: "You build practical AI workflows, evaluate models, and support experimentation with strong product context."
      },
      {
        years: 3,
        title: "Applied AI Engineer",
        salary: "$125k - $165k",
        skills: ["Model Evaluation", "MLOps", "LLM Systems", "Deployment"],
        workLifeBalance: 5,
        stress: 8,
        demand: "Very High",
        explanation: "Your work shifts toward production reliability, optimization, and shipping AI experiences at scale."
      },
      {
        years: 5,
        title: "Senior AI Engineer",
        salary: "$160k - $210k",
        skills: ["Architecture", "Research Translation", "Team Leadership", "Security"],
        workLifeBalance: 4,
        stress: 8,
        demand: "High",
        explanation: "You lead model strategy, improve execution quality, and define how AI features evolve across products."
      },
      {
        years: 10,
        title: "AI Platform / Principal Engineer",
        salary: "$200k - $280k",
        skills: ["Strategy", "Responsible AI", "Platform Building", "Governance"],
        workLifeBalance: 4,
        stress: 9,
        demand: "Strong",
        explanation: "At this stage, your impact expands to platform-level AI systems and long-term organizational adoption."
      }
    ],
    decisions: [
      { years: 1, title: "Specialize in LLM systems", pros: ["Strong demand", "High upside"], cons: ["Rapid change", "Technical depth needed"], impact: "Improves positioning in the most competitive AI segment." },
      { years: 3, title: "Build domain expertise", pros: ["Premium value", "Better product fit"], cons: ["Slower breadth", "Narrower mobility"], impact: "Makes you essential in regulated or complex industries." },
      { years: 5, title: "Move into AI strategy", pros: ["Broader influence", "Higher pay"], cons: ["Less hands-on", "More stakeholder management"], impact: "Elevates your impact beyond implementation. " }
    ],
    insights: {
      strengths: ["Excellent growth curve", "High market demand", "Cross-functional relevance"],
      weaknesses: ["Fast-moving field", "Can over-index on hype"],
      risks: ["Tool and model shifts", "Ethical and compliance complexity"],
      opportunities: ["Enterprise adoption", "Autonomous workflows", "AI agents"]
    }
  },
  "Data Scientist": {
    summary: "Turns data into insight, products, and measurable business value through analysis, experimentation, and communication.",
    confidenceScore: 90,
    estimatedAccuracy: 87,
    disclaimer: "The simulation reflects common analytics and experimentation career paths in data-centric companies.",
    timeline: [
      {
        years: 1,
        title: "Data Scientist I",
        salary: "$85k - $115k",
        skills: ["SQL", "Statistics", "Python", "Visualization"],
        workLifeBalance: 7,
        stress: 6,
        demand: "High",
        explanation: "You learn to answer recurring business questions and build trustworthy analytical workflows."
      },
      {
        years: 3,
        title: "Senior Data Scientist",
        salary: "$120k - $155k",
        skills: ["Experiment Design", "Product Analytics", "Communication", "Forecasting"],
        workLifeBalance: 6,
        stress: 7,
        demand: "High",
        explanation: "You connect analysis to decision-making and begin shaping product or business strategy."
      },
      {
        years: 5,
        title: "Lead Data Scientist",
        salary: "$150k - $195k",
        skills: ["Leadership", "Causal Inference", "Stakeholder Management", "Strategy"],
        workLifeBalance: 5,
        stress: 8,
        demand: "Strong",
        explanation: "You lead experiments, mentor teams, and guide high-stakes analytical programs."
      },
      {
        years: 10,
        title: "Principal Scientist / Analytics Director",
        salary: "$190k - $250k",
        skills: ["Research Direction", "Team Building", "Executive Communication", "Innovation"],
        workLifeBalance: 4,
        stress: 8,
        demand: "Strong",
        explanation: "You transform the analysis function into a strategic capability with deeper organizational influence."
      }
    ],
    decisions: [
      { years: 1, title: "Focus on business storytelling", pros: ["Higher visibility", "Career momentum"], cons: ["Less technical depth", "More presentation work"], impact: "Makes your insights actionable for executives." },
      { years: 3, title: "Specialize in experimentation", pros: ["Premium skill", "Strong demand"], cons: ["Harder to generalize", "Complexity"], impact: "Creates a differentiated profile in product teams." },
      { years: 5, title: "Move into analytics leadership", pros: ["Higher compensation", "Broader influence"], cons: ["More management", "Less hands-on analysis"], impact: "Raises impact beyond your individual projects." }
    ],
    insights: {
      strengths: ["Strong analytical rigor", "Valuable across industries", "Clear business relevance"],
      weaknesses: ["Can be overly model-centric", "Communication gaps can limit influence"],
      risks: ["Tool fatigue", "Data quality issues"],
      opportunities: ["Decision intelligence", "AI-assisted analytics", "Operational optimization"]
    }
  },
  "Data Analyst": {
    summary: "Creates clarity from operational data, helping teams measure performance and improve everyday decisions.",
    confidenceScore: 88,
    estimatedAccuracy: 85,
    disclaimer: "This outlook reflects common analyst tracks in fast-moving business and product organizations.",
    timeline: [
      {
        years: 1,
        title: "Junior Data Analyst",
        salary: "$65k - $85k",
        skills: ["Excel", "SQL", "Dashboarding", "Reporting"],
        workLifeBalance: 8,
        stress: 5,
        demand: "High",
        explanation: "You build a strong foundation in reporting, data hygiene, and concise communication."
      },
      {
        years: 3,
        title: "Data Analyst II",
        salary: "$85k - $110k",
        skills: ["BI Tools", "Business Metrics", "Automation", "Stakeholder Management"],
        workLifeBalance: 7,
        stress: 6,
        demand: "High",
        explanation: "You move from ad hoc work to scalable analytics and repeatable reporting systems."
      },
      {
        years: 5,
        title: "Senior Data Analyst",
        salary: "$110k - $140k",
        skills: ["Strategy", "Experimentation", "Product Metrics", "Leadership"],
        workLifeBalance: 6,
        stress: 7,
        demand: "Strong",
        explanation: "You become a trusted advisor who translates metrics into business direction."
      },
      {
        years: 10,
        title: "Analytics Manager / Lead",
        salary: "$135k - $175k",
        skills: ["People Leadership", "Planning", "Data Governance", "Cross-functional Influence"],
        workLifeBalance: 5,
        stress: 8,
        demand: "Strong",
        explanation: "You transition from execution to guiding entire analytics functions and priorities."
      }
    ],
    decisions: [
      { years: 1, title: "Learn BI automation", pros: ["Higher leverage", "Less manual work"], cons: ["Time investment", "Tool complexity"], impact: "Improves your long-term efficiency and output quality." },
      { years: 3, title: "Specialize in product analytics", pros: ["Greater relevance", "Better growth"], cons: ["Narrower scope", "More ambiguity"], impact: "Connects your work directly to product decisions." },
      { years: 5, title: "Move into management", pros: ["Broader influence", "Higher pay"], cons: ["Less hands-on", "People management"], impact: "Expands how much impact you can have across teams." }
    ],
    insights: {
      strengths: ["Stable career path", "Strong business utility", "Good work-life balance"],
      weaknesses: ["Can be seen as reactive", "Less glamorized than ML roles"],
      risks: ["Automation pressure", "Ad hoc reporting overload"],
      opportunities: ["BI modernization", "Self-service analytics", "AI copilots"]
    }
  },
  "Cybersecurity Engineer": {
    summary: "Protects systems, data, and infrastructure through secure engineering, threat detection, and resilience planning.",
    confidenceScore: 93,
    estimatedAccuracy: 90,
    disclaimer: "Security outlooks are shaped by regulatory pressure, risk exposure, and strong enterprise demand.",
    timeline: [
      {
        years: 1,
        title: "Security Analyst / Engineer I",
        salary: "$85k - $115k",
        skills: ["Network Security", "Cloud Security", "SIEM", "Threat Analysis"],
        workLifeBalance: 6,
        stress: 7,
        demand: "Very High",
        explanation: "You learn to protect systems, monitor incidents, and respond to recurring risks with discipline."
      },
      {
        years: 3,
        title: "Security Engineer",
        salary: "$115k - $150k",
        skills: ["Identity", "Hardening", "Automation", "Detection Engineering"],
        workLifeBalance: 5,
        stress: 8,
        demand: "Very High",
        explanation: "You begin owning more complex controls and improving enterprise resilience at scale."
      },
      {
        years: 5,
        title: "Senior Security Engineer",
        salary: "$145k - $190k",
        skills: ["Architecture", "Leadership", "Incident Response", "Risk Analysis"],
        workLifeBalance: 4,
        stress: 9,
        demand: "High",
        explanation: "Your role grows into trust, architecture, and cross-functional decision making under pressure."
      },
      {
        years: 10,
        title: "Principal / Security Director",
        salary: "$180k - $240k",
        skills: ["Strategy", "Governance", "Executive Communication", "Program Management"],
        workLifeBalance: 4,
        stress: 9,
        demand: "Strong",
        explanation: "You influence security posture, budgets, and organizational resilience at a leadership level."
      }
    ],
    decisions: [
      { years: 1, title: "Specialize in cloud security", pros: ["Strong demand", "High leverage"], cons: ["More complexity", "Tool sprawl"], impact: "Makes you especially valuable in modern infrastructure teams." },
      { years: 3, title: "Move into detection engineering", pros: ["High visibility", "Advanced skill growth"], cons: ["Intense pace", "Response pressure"], impact: "Boosts your ability to shape proactive defense." },
      { years: 5, title: "Step into leadership", pros: ["Strategic influence", "Higher compensation"], cons: ["Less hands-on", "More coordination"], impact: "Expands your influence beyond individual protection work." }
    ],
    insights: {
      strengths: ["Essential function", "Strong demand", "Good long-term stability"],
      weaknesses: ["High stress", "Constantly evolving threat landscape"],
      risks: ["Alert fatigue", "Compliance complexity"],
      opportunities: ["Zero trust", "Cloud-native security", "AI-driven defense"]
    }
  },
  "Cloud Engineer": {
    summary: "Builds scalable, reliable cloud platforms and helps organizations move faster with modern infrastructure.",
    confidenceScore: 91,
    estimatedAccuracy: 88,
    disclaimer: "Cloud career outlook reflects broad demand across startups, enterprise, and platform teams.",
    timeline: [
      {
        years: 1,
        title: "Cloud Engineer I",
        salary: "$80k - $110k",
        skills: ["AWS", "Azure", "Terraform", "Linux"],
        workLifeBalance: 6,
        stress: 6,
        demand: "Very High",
        explanation: "You begin deploying infrastructure, supporting reliability, and learning modern platform practices."
      },
      {
        years: 3,
        title: "Cloud Platform Engineer",
        salary: "$110k - $145k",
        skills: ["Kubernetes", "Networking", "Automation", "Security"],
        workLifeBalance: 5,
        stress: 7,
        demand: "Very High",
        explanation: "Your work shifts toward platform reliability, automation, and operating systems at scale."
      },
      {
        years: 5,
        title: "Senior Cloud Engineer",
        salary: "$140k - $185k",
        skills: ["Architecture", "Cost Optimization", "Observability", "Leadership"],
        workLifeBalance: 5,
        stress: 8,
        demand: "High",
        explanation: "You shape architecture decisions and become a go-to owner for resilient cloud systems."
      },
      {
        years: 10,
        title: "Principal Platform Engineer",
        salary: "$180k - $240k",
        skills: ["Strategy", "Platform Governance", "Executive Alignment", "Innovation"],
        workLifeBalance: 4,
        stress: 8,
        demand: "Strong",
        explanation: "You drive platform standards and influence how the organization scales technology."
      }
    ],
    decisions: [
      { years: 1, title: "Learn Kubernetes deeply", pros: ["High demand", "Better platform leverage"], cons: ["Steeper learning curve", "Operational complexity"], impact: "Makes you valuable in modern cloud-native organizations." },
      { years: 3, title: "Focus on cost and reliability", pros: ["Strong business value", "Broad relevance"], cons: ["Can be very operational", "Less glamorous"], impact: "Improves platform efficiency and trust." },
      { years: 5, title: "Move toward platform leadership", pros: ["Higher compensation", "Influence"], cons: ["Less hands-on", "More planning"], impact: "Broadens your reach across engineering teams." }
    ],
    insights: {
      strengths: ["High demand", "Strong cross-industry relevance", "Excellent growth in modern stacks"],
      weaknesses: ["Can become operations-heavy", "Tooling changes quickly"],
      risks: ["Cost overruns", "Complex outages"],
      opportunities: ["FinOps", "Multi-cloud strategy", "Platform engineering"]
    }
  },
  "DevOps Engineer": {
    summary: "Connects development and operations to deliver faster, more reliable releases through automation and tooling.",
    confidenceScore: 89,
    estimatedAccuracy: 86,
    disclaimer: "DevOps outcomes are shaped by delivery maturity, tooling, and team operating rhythms.",
    timeline: [
      {
        years: 1,
        title: "DevOps Engineer I",
        salary: "$80k - $108k",
        skills: ["CI/CD", "Linux", "Scripting", "Monitoring"],
        workLifeBalance: 6,
        stress: 7,
        demand: "High",
        explanation: "You build release automation, improve observability, and support a smoother engineering workflow."
      },
      {
        years: 3,
        title: "DevOps Engineer II",
        salary: "$105k - $140k",
        skills: ["Infrastructure as Code", "Cloud", "Security", "Reliability"],
        workLifeBalance: 5,
        stress: 8,
        demand: "High",
        explanation: "You become central to ownership of deployment pipelines and system reliability."
      },
      {
        years: 5,
        title: "Senior DevOps Engineer",
        salary: "$135k - $180k",
        skills: ["Platform Engineering", "Systems Design", "Leadership", "Cost Control"],
        workLifeBalance: 4,
        stress: 8,
        demand: "Strong",
        explanation: "You broaden your influence into architecture, delivery standards, and operational excellence."
      },
      {
        years: 10,
        title: "Principal / Platform Lead",
        salary: "$170k - $225k",
        skills: ["Strategy", "Governance", "People Leadership", "Innovation"],
        workLifeBalance: 4,
        stress: 9,
        demand: "Strong",
        explanation: "Your impact expands into platform strategy, internal tooling, and cross-team enablement."
      }
    ],
    decisions: [
      { years: 1, title: "Learn automation deeply", pros: ["High leverage", "Immediate value"], cons: ["Repetitive work", "Tool maintenance"], impact: "Makes your contributions visible early and often." },
      { years: 3, title: "Specialize in reliability", pros: ["High importance", "Career durability"], cons: ["On-call pressure", "Operational complexity"], impact: "Positions you as critical to business continuity." },
      { years: 5, title: "Shift into platform engineering", pros: ["Stronger compensation", "Broader influence"], cons: ["Less immediate delivery", "More planning"], impact: "Turns your work into an organizational multiplier." }
    ],
    insights: {
      strengths: ["Strong operational relevance", "Broad applicability", "Good leverage over delivery"],
      weaknesses: ["Can be very reactive", "On-call pressure can be draining"],
      risks: ["Tool sprawl", "Burnout from incidents"],
      opportunities: ["Developer experience", "AI-assisted operations", "Platform modernization"]
    }
  },
  "UI/UX Designer": {
    summary: "Shapes how products feel and work, combining craft, research, and systems thinking to create intuitive experiences.",
    confidenceScore: 87,
    estimatedAccuracy: 84,
    disclaimer: "Design outcomes vary by company maturity, portfolio strength, and product type.",
    timeline: [
      {
        years: 1,
        title: "Junior Product Designer",
        salary: "$70k - $95k",
        skills: ["Figma", "Research", "UI Systems", "Communication"],
        workLifeBalance: 7,
        stress: 6,
        demand: "High",
        explanation: "You learn to turn research and feedback into polished product experiences."
      },
      {
        years: 3,
        title: "Product Designer",
        salary: "$95k - $130k",
        skills: ["Design Systems", "User Flows", "Prototyping", "Strategy"],
        workLifeBalance: 6,
        stress: 7,
        demand: "Strong",
        explanation: "You begin owning end-to-end experience decisions and shaping product direction."
      },
      {
        years: 5,
        title: "Senior Product Designer",
        salary: "$125k - $165k",
        skills: ["Leadership", "Research Ops", "Design Strategy", "Mentorship"],
        workLifeBalance: 5,
        stress: 8,
        demand: "Strong",
        explanation: "You influence product strategy and create design systems that scale across teams."
      },
      {
        years: 10,
        title: "Design Director / Principal",
        salary: "$155k - $220k",
        skills: ["Vision", "Leadership", "Design Operations", "Executive Influence"],
        workLifeBalance: 4,
        stress: 8,
        demand: "Strong",
        explanation: "You guide experience strategy, team craft, and cross-functional execution at scale."
      }
    ],
    decisions: [
      { years: 1, title: "Learn motion and interaction design", pros: ["Higher differentiation", "Modern skillset"], cons: ["More craft work", "Time intensive"], impact: "Adds polish and perceived seniority to your work." },
      { years: 3, title: "Build a strong design system", pros: ["Reusability", "Team leverage"], cons: ["Less visible output", "Maintenance burden"], impact: "Makes you essential in product organizations." },
      { years: 5, title: "Move into design leadership", pros: ["Broader influence", "Higher compensation"], cons: ["Less craft", "More management"], impact: "Elevates your contribution beyond individual designs." }
    ],
    insights: {
      strengths: ["Strong creative value", "High empathy", "Broad product relevance"],
      weaknesses: ["Portfolio quality matters a lot", "Can be hard to quantify impact"],
      risks: ["Rapid trend shifts", "Design maturity gaps"],
      opportunities: ["AI-assisted UX", "Accessibility", "Design systems"]
    }
  },
  "Product Manager": {
    summary: "Aligns strategy, teams, and execution to deliver customer value with clear priorities and strong product leadership.",
    confidenceScore: 92,
    estimatedAccuracy: 89,
    disclaimer: "Product management paths vary widely, but this simulation reflects common growth in high-growth companies.",
    timeline: [
      {
        years: 1,
        title: "Associate Product Manager",
        salary: "$85k - $110k",
        skills: ["Roadmapping", "Prioritization", "Research", "Communication"],
        workLifeBalance: 6,
        stress: 7,
        demand: "High",
        explanation: "You learn to connect customer needs, business goals, and execution trade-offs."
      },
      {
        years: 3,
        title: "Product Manager",
        salary: "$115k - $150k",
        skills: ["Strategy", "Analytics", "Stakeholder Management", "Execution"],
        workLifeBalance: 5,
        stress: 8,
        demand: "High",
        explanation: "You begin owning measurable outcomes and navigating more ambiguous priorities."
      },
      {
        years: 5,
        title: "Senior Product Manager",
        salary: "$145k - $190k",
        skills: ["Leadership", "Cross-functional Alignment", "Planning", "Influence"],
        workLifeBalance: 4,
        stress: 8,
        demand: "Strong",
        explanation: "Your role expands into larger bets, greater ambiguity, and stronger organizational influence."
      },
      {
        years: 10,
        title: "Director / Group Product Lead",
        salary: "$180k - $240k",
        skills: ["Vision", "People Leadership", "Strategy", "Executive Communication"],
        workLifeBalance: 4,
        stress: 9,
        demand: "Strong",
        explanation: "You guide product strategy across teams and translate market opportunity into clear outcomes."
      }
    ],
    decisions: [
      { years: 1, title: "Build strong analytical habits", pros: ["Better decision quality", "Higher credibility"], cons: ["More data work", "Less speed"], impact: "Improves your ability to defend priorities and trade-offs." },
      { years: 3, title: "Specialize in a growth area", pros: ["Deeper expertise", "Better market value"], cons: ["Narrower flexibility", "Potentially less broad"], impact: "Creates a stronger profile in a valuable product niche." },
      { years: 5, title: "Move into broader platform leadership", pros: ["Higher pay", "More leverage"], cons: ["Less day-to-day detail", "More coordination"], impact: "Expands your influence beyond a single product line." }
    ],
    insights: {
      strengths: ["High strategic value", "Broad career mobility", "Strong compensation ceiling"],
      weaknesses: ["Can be very ambiguous", "Stakeholder management is demanding"],
      risks: ["Scope creep", "Low clarity on priorities"],
      opportunities: ["AI products", "B2B platforms", "Enterprise transformation"]
    }
  },
  "Business Analyst": {
    summary: "Connects business goals, data, and operations to improve processes, decisions, and execution outcomes.",
    confidenceScore: 86,
    estimatedAccuracy: 83,
    disclaimer: "Business analyst career growth varies by sector, but this path reflects strong cross-functional demand.",
    timeline: [
      {
        years: 1,
        title: "Junior Business Analyst",
        salary: "$65k - $85k",
        skills: ["Requirements Gathering", "Process Mapping", "Excel", "Communication"],
        workLifeBalance: 7,
        stress: 5,
        demand: "High",
        explanation: "You learn to translate business needs into clear requirements and process improvements."
      },
      {
        years: 3,
        title: "Business Analyst",
        salary: "$85k - $115k",
        skills: ["Stakeholder Alignment", "Data Analysis", "Workflow Design", "Documentation"],
        workLifeBalance: 6,
        stress: 6,
        demand: "High",
        explanation: "You grow into a core partner for operations, delivery, and cross-team coordination."
      },
      {
        years: 5,
        title: "Senior Business Analyst",
        salary: "$110k - $145k",
        skills: ["Strategy", "Process Optimization", "Leadership", "Systems Thinking"],
        workLifeBalance: 5,
        stress: 7,
        demand: "Strong",
        explanation: "You lead major process changes and help teams solve higher-value business problems."
      },
      {
        years: 10,
        title: "Principal Analyst / Business Operations Lead",
        salary: "$135k - $180k",
        skills: ["Planning", "Change Management", "Governance", "Executive Influence"],
        workLifeBalance: 5,
        stress: 8,
        demand: "Strong",
        explanation: "You become central to operational modernization, organizational alignment, and growth strategy."
      }
    ],
    decisions: [
      { years: 1, title: "Learn process automation", pros: ["Higher leverage", "More impact"], cons: ["Tooling effort", "Change management"], impact: "Makes your analysis more scalable and valuable." },
      { years: 3, title: "Move into operations strategy", pros: ["Broader scope", "Higher visibility"], cons: ["Less tactical work", "More ambiguity"], impact: "Expands your contribution beyond single projects." },
      { years: 5, title: "Step into people leadership", pros: ["Higher pay", "Broader influence"], cons: ["Less direct analysis", "People management"], impact: "Transforms your role from execution to leadership." }
    ],
    insights: {
      strengths: ["Strong business relevance", "Clear cross-functional value", "Good stability"],
      weaknesses: ["Can be undervalued if poorly framed", "Role scope can shift quickly"],
      risks: ["Change fatigue", "Overly process-heavy teams"],
      opportunities: ["Automation", "Digital transformation", "AI-enabled operations"]
    }
  }
};

function normalizeCareerName(name) {
  if (!name) return "Software Engineer";
  return name.trim();
}

function getProfile(name) {
  const normalized = normalizeCareerName(name);
  return CAREER_PROFILES[normalized] || {
    summary: `${normalized} is a career path that rewards strong execution, strategic thinking, and continuous skill growth.`,
    confidenceScore: 84,
    estimatedAccuracy: 81,
    disclaimer: "This forecast is a structured placeholder based on the career goal you selected.",
    timeline: [
      { years: 1, title: `Early ${normalized}`, salary: "$70k - $95k", skills: ["Foundational Skills"], workLifeBalance: 7, stress: 6, demand: "Moderate", explanation: "Early years focus on building core expertise and confidence in your chosen field." },
      { years: 3, title: `${normalized} II`, salary: "$95k - $130k", skills: ["Execution", "Communication"], workLifeBalance: 6, stress: 7, demand: "Moderate", explanation: "You begin taking on broader ownership and delivering higher-value work." },
      { years: 5, title: `Senior ${normalized}`, salary: "$125k - $170k", skills: ["Leadership", "Strategy"], workLifeBalance: 5, stress: 8, demand: "Strong", explanation: "Your growth becomes more strategic and your impact expands across teams." },
      { years: 10, title: `Principal ${normalized}`, salary: "$160k - $220k", skills: ["Vision", "Influence"], workLifeBalance: 4, stress: 8, demand: "Strong", explanation: "You influence direction, standards, and long-term outcomes at scale." }
    ],
    decisions: [
      { years: 1, title: "Invest in core skill depth", pros: ["Strong foundation"], cons: ["Takes time"], impact: "Improves long-term mobility." },
      { years: 3, title: "Broaden your domain expertise", pros: ["Higher relevance"], cons: ["Less focus"], impact: "Makes you more adaptable." },
      { years: 5, title: "Move into leadership", pros: ["More influence"], cons: ["Less hands-on"], impact: "Raises your strategic value." }
    ],
    insights: {
      strengths: ["Adaptable career path", "Strong upside"],
      weaknesses: ["Needs consistent growth"],
      risks: ["Market shifts"],
      opportunities: ["Broader industry adoption"]
    }
  };
}

function buildChartData(timeline) {
  return timeline.map((item) => ({
    name: `${item.years}Y`,
    salary: parseSalaryRange(item.salary),
    stress: item.stress,
    balance: item.workLifeBalance,
    demand: item.demand === "Very High" ? 5 : item.demand === "High" ? 4 : 3,
  }));
}

function parseSalaryRange(salary) {
  const amounts = String(salary).match(/\d+(?:,\d{3})*(?:\.\d+)?/g)?.map((amount) => Number(amount.replace(/,/g, ""))) || [];
  if (!amounts.length) return 0;

  const midpoint = amounts.length > 1 ? (amounts[0] + amounts[1]) / 2 : amounts[0];
  return Math.round(midpoint >= 1000 ? midpoint / 1000 : midpoint);
}

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

function formatApiError(detail, status) {
  if (typeof detail === "string" && detail.trim()) return detail;
  if (Array.isArray(detail)) {
    const messages = detail.map((item) => {
      if (typeof item === "string") return item;
      if (item?.msg && Array.isArray(item.loc)) {
        return `${item.loc.at(-1)}: ${item.msg}`;
      }
      return item?.msg || "The server rejected the simulation request.";
    });
    return messages.join(" ");
  }
  if (detail && typeof detail === "object" && detail.msg) return detail.msg;
  return `Simulation request failed (${status}).`;
}

function normalizeList(value, fallback) {
  if (Array.isArray(value)) {
    const items = value.filter((item) => item !== null && item !== undefined).map(String);
    return items.length ? items : fallback;
  }
  if (typeof value === "string" && value.trim()) return [value.trim()];
  return fallback;
}

function normalizeApiSimulation(response, careerName, onboardingData) {
  const timeline = Object.entries(response.timeline).map(([label, item]) => ({
    years: Number.parseInt(label, 10) || 0,
    title: item.title,
    salary: item.salary,
    skills: item.skills,
    requiredSkills: item.skills.join(", "),
    workLifeBalance: item.workLifeBalance,
    stress: item.stress,
    demand: item.marketDemand,
    explanation: item.explanation,
  }));
  const decisions = response.decisionPoints.map((decision) => ({
    years: decision.years ?? decision.year ?? 0,
    title: decision.title || "Career decision",
    pros: normalizeList(decision.pros, ["Potential for meaningful growth"]),
    cons: normalizeList(decision.cons, ["Requires thoughtful trade-offs"]),
    impact: decision.impact || "This choice can influence your long-term trajectory.",
  }));
  const insightItems = normalizeList(response.insights, []);
  const fallbackInsights = {
    strengths: ["Your profile supports steady growth in this career path."],
    weaknesses: ["This path requires continuous skill development and adaptation."],
    risks: ["Market conditions and role expectations can change over time."],
    opportunities: ["Build specialized expertise and practical experience to expand your options."],
  };
  const insights = {
    strengths: insightItems.slice(0, 2).length ? insightItems.slice(0, 2) : fallbackInsights.strengths,
    weaknesses: insightItems.slice(2, 3).length ? insightItems.slice(2, 3) : fallbackInsights.weaknesses,
    risks: insightItems.slice(3, 4).length ? insightItems.slice(3, 4) : fallbackInsights.risks,
    opportunities: insightItems.slice(4).length ? insightItems.slice(4) : fallbackInsights.opportunities,
  };

  return {
    overview: {
      careerName: response.career || careerName,
      summary: `A Gemini-generated career outlook for ${response.career || careerName}.`,
      confidenceScore: response.confidence,
      estimatedAccuracy: Math.max(response.confidence - 4, 60),
      disclaimer: "This AI-generated forecast is directional and is not financial or employment advice.",
      profileSummary: onboardingData?.skills?.length
        ? `Personalized using your ${onboardingData.skills.length} skills, ${onboardingData.interests?.length || 0} interests, and risk tolerance.`
        : "This simulation reflects the information provided during onboarding.",
    },
    timeline,
    decisions,
    chartData: buildChartData(timeline),
    insights,
  };
}

export async function generateSimulationFromApi(careerName, onboardingData = {}, signal) {
  const response = await fetch(`${API_BASE_URL}/simulate`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    signal,
    body: JSON.stringify({
      career: careerName,
      age: Number(onboardingData.age),
      education: onboardingData.education,
      skills: onboardingData.skills,
      interests: onboardingData.interests,
      riskTolerance: onboardingData.riskTolerance,
    }),
  });

  if (!response.ok) {
    const body = await response.json().catch(() => ({}));
    throw new Error(formatApiError(body.detail, response.status));
  }

  return normalizeApiSimulation(await response.json(), careerName, onboardingData);
}

export function generateSimulation(careerName, onboardingData = {}) {
  const profile = getProfile(careerName);
  const timeline = profile.timeline.map((item) => ({
    ...item,
    requiredSkills: item.skills.join(", "),
  }));

  const overview = {
    careerName: careerName || "Software Engineer",
    summary: profile.summary,
    confidenceScore: profile.confidenceScore,
    estimatedAccuracy: profile.estimatedAccuracy,
    disclaimer: profile.disclaimer,
    profileSummary: onboardingData?.skills?.length
      ? `Based on your profile with ${onboardingData.skills.length} skills and ${onboardingData.interests?.length || 0} interests, this path is a strong fit for your current trajectory.`
      : "This simulation reflects a balanced and realistic career outlook for your chosen path.",
  };

  return {
    overview,
    timeline,
    decisions: profile.decisions,
    chartData: buildChartData(timeline),
    insights: profile.insights,
  };
}
