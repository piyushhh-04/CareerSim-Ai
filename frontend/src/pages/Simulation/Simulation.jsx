import { useMemo } from "react";
import MainLayout from "../../layouts/MainLayout";
import CareerOverview from "../../components/simulation/CareerOverview";
import TimelineCard from "../../components/simulation/TimelineCard";
import DecisionCard from "../../components/simulation/DecisionCard";
import Charts from "../../components/simulation/Charts";
import Insights from "../../components/simulation/Insights";
import { generateSimulation } from "../../services/simulationService";

const STORAGE_KEY = "careersim.selectedCareer";

export default function Simulation() {
  const careerName = useMemo(() => {
    if (typeof window === "undefined") return "Software Engineer";
    return window.localStorage.getItem(STORAGE_KEY) || "Software Engineer";
  }, []);

  const onboardingData = useMemo(() => {
    if (typeof window === "undefined") return {};
    const raw = window.localStorage.getItem("careersim.onboardingData");
    return raw ? JSON.parse(raw) : {};
  }, []);

  const simulation = useMemo(() => generateSimulation(careerName, onboardingData), [careerName, onboardingData]);

  return (
    <MainLayout>
      <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(199,119,75,0.12),_transparent_35%)] px-6 py-16 text-[#1f1b18]">
        <div className="mx-auto flex max-w-7xl flex-col gap-8">
          <CareerOverview overview={simulation.overview} />

          <section className="rounded-[2rem] border border-[#eadcc9] bg-[#fffaf4] p-8 shadow-[0_18px_40px_rgba(93,86,79,0.08)]">
            <div className="mb-6 flex flex-col gap-2">
              <p className="text-sm uppercase tracking-[0.3em] text-[#8b4e2a]">Timeline</p>
              <h2 className="text-3xl font-semibold text-[#1f1b18]">Projected career progression</h2>
            </div>
            <div className="grid gap-6 xl:grid-cols-2">
              {simulation.timeline.map((item) => (
                <TimelineCard key={item.years} item={item} />
              ))}
            </div>
          </section>

          <section className="rounded-[2rem] border border-[#eadcc9] bg-[#fffaf4] p-8 shadow-[0_18px_40px_rgba(93,86,79,0.08)]">
            <div className="mb-6 flex flex-col gap-2">
              <p className="text-sm uppercase tracking-[0.3em] text-[#8b4e2a]">Decision Points</p>
              <h2 className="text-3xl font-semibold text-[#1f1b18]">Key choices that shape your path</h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {simulation.decisions.map((decision) => (
                <DecisionCard key={decision.title} decision={decision} />
              ))}
            </div>
          </section>

          <section className="rounded-[2rem] border border-[#eadcc9] bg-[#fffaf4] p-8 shadow-[0_18px_40px_rgba(93,86,79,0.08)]">
            <div className="mb-6 flex flex-col gap-2">
              <p className="text-sm uppercase tracking-[0.3em] text-[#8b4e2a]">Charts</p>
              <h2 className="text-3xl font-semibold text-[#1f1b18]">Visual outlook</h2>
            </div>
            <Charts data={simulation.chartData} />
          </section>

          <section className="rounded-[2rem] border border-[#eadcc9] bg-[#fffaf4] p-8 shadow-[0_18px_40px_rgba(93,86,79,0.08)]">
            <div className="mb-6 flex flex-col gap-2">
              <p className="text-sm uppercase tracking-[0.3em] text-[#8b4e2a]">Insights</p>
              <h2 className="text-3xl font-semibold text-[#1f1b18]">What to watch closely</h2>
            </div>
            <Insights insights={simulation.insights} />
          </section>
        </div>
      </div>
    </MainLayout>
  );
}
