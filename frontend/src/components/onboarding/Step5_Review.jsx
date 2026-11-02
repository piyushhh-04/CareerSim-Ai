import { motion } from "framer-motion";
import { useOnboarding } from "../../context/OnboardingContext";
import StepCard from "./StepCard";
import { Edit2 } from "lucide-react";

export default function Step5_Review() {
  const { data } = useOnboarding();

  const riskLabels = {
    low: "Low Risk",
    medium: "Medium Risk",
    high: "High Risk",
  };

  const reviewItems = [
    {
      label: "Age",
      value: data.age,
      icon: "👤",
    },
    {
      label: "Education",
      value: data.education,
      icon: "🎓",
    },
    {
      label: "Skills",
      value: data.skills.length,
      items: data.skills,
      icon: "💼",
    },
    {
      label: "Interests",
      value: data.interests.length,
      items: data.interests,
      icon: "⭐",
    },
    {
      label: "Risk Tolerance",
      value: riskLabels[data.riskTolerance],
      icon: "📊",
    },
  ];

  return (
    <StepCard
      title="Review your profile"
      description="Make sure everything looks good before we generate your simulation"
    >
      <div className="space-y-4">
        {reviewItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="rounded-2xl border border-[#eadcc9] bg-[#f5efe7] p-4"
          >
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{item.icon}</span>
                  <h4 className="font-semibold text-[#352f2a]">{item.label}</h4>
                </div>

                {item.items ? (
                  <div className="flex flex-wrap gap-2">
                    {item.items.map((i, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center rounded-full bg-[#f3d9c5] px-3 py-1 text-xs text-[#8b4e2a]"
                      >
                        {i}
                      </span>
                    ))}
                  </div>
                ) : (
                  <p className="text-[#1f1b18]">{item.value}</p>
                )}
              </div>

              <button className="text-[#7b6b60] transition hover:text-[#8b4e2a]">
                <Edit2 size={18} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="rounded-2xl border border-[#e8d7c8] bg-[#f5ebdf] p-4"
      >
        <p className="text-sm text-[#3f352f]">
          ✓ Your profile is complete! Click "Generate Simulation" to explore your career paths.
        </p>
      </motion.div>
    </StepCard>
  );
}
