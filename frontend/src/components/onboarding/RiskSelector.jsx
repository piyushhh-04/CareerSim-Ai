import { motion } from "framer-motion";
import { TrendingUp, AlertCircle, Shield } from "lucide-react";

const riskOptions = [
  {
    id: "low",
    label: "Low Risk",
    icon: Shield,
    description: "Stable income, predictable growth, work-life balance",
    color: "from-green-500/20 to-emerald-500/20",
    borderColor: "border-green-500/30 group-hover:border-green-500",
  },
  {
    id: "medium",
    label: "Medium Risk",
    icon: AlertCircle,
    description: "Balanced growth, moderate challenges, reasonable security",
    color: "from-yellow-500/20 to-amber-500/20",
    borderColor: "border-yellow-500/30 group-hover:border-yellow-500",
  },
  {
    id: "high",
    label: "High Risk",
    icon: TrendingUp,
    description: "Aggressive growth, high challenges, uncertainty & opportunity",
    color: "from-red-500/20 to-orange-500/20",
    borderColor: "border-red-500/30 group-hover:border-red-500",
  },
];

export default function RiskSelector({ selected, onChange }) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {riskOptions.map((option) => {
        const Icon = option.icon;
        const isSelected = selected === option.id;

        return (
          <motion.button
            key={option.id}
            onClick={() => onChange(option.id)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`group relative rounded-2xl border p-6 text-left transition-all duration-300 ${option.borderColor} ${
              isSelected
                ? "ring-2 ring-offset-2 ring-offset-[#f5f0e8] " +
                  (option.id === "low"
                    ? "ring-[#2f6a4a]"
                    : option.id === "medium"
                      ? "ring-[#c7774b]"
                      : "ring-[#b9544f]")
                : "border-[#eadcc9]"
            }`}
          >
            <div
              className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${option.color} opacity-0 transition-opacity ${
                isSelected ? "opacity-100" : "group-hover:opacity-60"
              }`}
            />

            <div className="relative z-10 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-[#1f1b18]">{option.label}</h3>
                <Icon size={24} className="text-[#5d564f]" />
              </div>

              <p className="text-sm text-[#5d564f]">{option.description}</p>

              {isSelected && (
                <motion.div
                  layoutId="risk-indicator"
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#2d241e] px-3 py-1 text-xs font-medium text-[#f8f1ea]"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  ✓ Selected
                </motion.div>
              )}
            </div>
          </motion.button>
        );
      })}
    </div>
  );
}
