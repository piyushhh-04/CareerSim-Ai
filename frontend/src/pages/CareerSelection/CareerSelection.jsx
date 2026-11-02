import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Search, Sparkles } from "lucide-react";
import MainLayout from "../../layouts/MainLayout";

const CAREERS = [
  "Software Engineer",
  "AI Engineer",
  "Data Scientist",
  "Data Analyst",
  "Cybersecurity Engineer",
  "Cloud Engineer",
  "DevOps Engineer",
  "UI/UX Designer",
  "Product Manager",
  "Business Analyst",
  "Custom Career Goal",
];

const STORAGE_KEY = "careersim.selectedCareer";
const GOAL_KEY = "careersim.customGoal";

export default function CareerSelection() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [selectedCareer, setSelectedCareer] = useState(() => {
    if (typeof window === "undefined") return "Software Engineer";
    return window.localStorage.getItem(STORAGE_KEY) || "Software Engineer";
  });
  const [customGoal, setCustomGoal] = useState(() => {
    if (typeof window === "undefined") return "";
    return window.localStorage.getItem(GOAL_KEY) || "";
  });

  const filteredCareers = useMemo(() => {
    const query = search.toLowerCase().trim();
    if (!query) return CAREERS;
    return CAREERS.filter((career) => career.toLowerCase().includes(query));
  }, [search]);

  const handleSelect = (career) => {
    setSelectedCareer(career);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, career);
    }
  };

  const handleGenerate = () => {
    const finalGoal = selectedCareer === "Custom Career Goal" && customGoal.trim()
      ? customGoal.trim()
      : selectedCareer;

    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, finalGoal);
      window.localStorage.setItem(GOAL_KEY, customGoal.trim());
    }

    navigate("/simulation");
  };

  return (
    <MainLayout>
      <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(199,119,75,0.12),_transparent_40%)] px-6 py-16 text-[#1f1b18]">
        <div className="mx-auto flex max-w-7xl flex-col gap-10">
          <motion.section
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="rounded-[2rem] border border-[#eadcc9] bg-[#fffaf4] p-8 shadow-[0_18px_40px_rgba(93,86,79,0.08)]"
          >
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#e8d7c8] bg-[#f5ebdf] px-3 py-1 text-sm text-[#7b4d39]">
                  <Sparkles size={16} />
                  Career Selection
                </div>
                <h1 className="text-4xl font-semibold sm:text-5xl text-[#1f1b18]">Choose the path you want to simulate.</h1>
                <p className="mt-4 text-lg text-[#5d564f]">
                  Pick a role that matches your ambition, or describe your own objective and we will shape a custom projection around it.
                </p>
              </div>

              <div className="rounded-2xl border border-[#eadcc9] bg-[#f7efe6] px-5 py-4 text-sm text-[#4c443f]">
                <p className="font-medium text-[#1f1b18]">Selected path</p>
                <p className="mt-2 text-lg text-[#8b4e2a]">{selectedCareer === "Custom Career Goal" ? customGoal || "Custom Career Goal" : selectedCareer}</p>
              </div>
            </div>
          </motion.section>

          <div className="rounded-[2rem] border border-[#eadcc9] bg-[#fffaf4] p-6 shadow-[0_18px_40px_rgba(93,86,79,0.08)]">
            <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="relative w-full lg:max-w-md">
                <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#7b6b60]" />
                <input
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search careers"
                  className="w-full rounded-2xl border border-[#e7dccd] bg-[#f5efe7] py-3 pl-11 pr-4 text-sm text-[#1f1b18] outline-none transition focus:border-[#c7774b]"
                />
              </div>

              <button
                onClick={handleGenerate}
                className="rounded-2xl bg-[#2d241e] px-6 py-3 font-semibold text-[#f8f1ea] transition hover:bg-[#3b2e28]"
              >
                Generate Simulation
              </button>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              <AnimatePresence>
                {filteredCareers.map((career) => {
                  const isSelected = selectedCareer === career || (career === "Custom Career Goal" && selectedCareer === "Custom Career Goal");
                  const isCustom = career === "Custom Career Goal";

                  return (
                    <motion.button
                      layout
                      key={career}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      whileHover={{ y: -6, scale: 1.01 }}
                      onClick={() => handleSelect(career)}
                      className={`rounded-[1.5rem] border p-5 text-left transition-all ${
                        isSelected
                          ? "border-[#d7b39b] bg-[#f6ebdf] shadow-[0_8px_20px_rgba(93,86,79,0.04)]"
                          : "border-[#eadcc9] bg-[#fffaf4] hover:border-[#d7b39b] hover:bg-[#f8f1e7]"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <h3 className="text-lg font-semibold text-[#1f1b18]">{career}</h3>
                        {isSelected ? <span className="rounded-full border border-[#d7b39b] bg-[#f3d9c5] px-3 py-1 text-xs text-[#8b4e2a]">Selected</span> : null}
                      </div>
                      <p className="mt-3 text-sm text-[#5d564f]">
                        {isCustom
                          ? "Describe your ideal future role and receive a tailored simulation."
                          : "A structured projection with growth, decision points, and outlook insights."}
                      </p>
                    </motion.button>
                  );
                })}
              </AnimatePresence>
            </div>

            {selectedCareer === "Custom Career Goal" ? (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 rounded-[1.5rem] border border-[#eadcc9] bg-[#f5efe7] p-5"
              >
                <label className="mb-3 block text-sm font-medium text-[#352f2a]" htmlFor="customGoal">
                  Describe your career goal
                </label>
                <input
                  id="customGoal"
                  value={customGoal}
                  onChange={(event) => setCustomGoal(event.target.value)}
                  placeholder="e.g. AI Product Strategist"
                  className="w-full rounded-2xl border border-[#e7dccd] bg-[#fffaf4] px-4 py-3 text-sm text-[#1f1b18] outline-none transition focus:border-[#c7774b]"
                />
              </motion.div>
            ) : null}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
