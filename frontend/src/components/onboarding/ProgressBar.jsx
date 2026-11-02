import { motion } from "framer-motion";

export default function ProgressBar({ currentStep, totalSteps }) {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="w-full space-y-4">
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#e7dccd]">
        <motion.div
          className="h-full rounded-full bg-[#c7774b]"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>

      <div className="flex items-center justify-between">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <motion.div
            key={index}
            className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold transition-all ${
              index < currentStep
                ? "bg-[#2d241e] text-[#f8f1ea]"
                : index === currentStep
                  ? "border-2 border-[#c7774b] bg-[#f5efe7] text-[#8b4e2a]"
                  : "bg-[#e7dccd] text-[#6b625b]"
            }`}
            animate={{
              scale: index === currentStep ? 1.08 : 1,
            }}
            transition={{ duration: 0.3 }}
          >
            {index + 1}
          </motion.div>
        ))}
      </div>

      <div className="text-center text-sm text-[#5d564f]">
        Step {currentStep} of {totalSteps}
      </div>
    </div>
  );
}
