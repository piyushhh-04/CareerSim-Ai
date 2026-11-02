import { motion } from "framer-motion";
import { Sparkles, TrendingUp, ShieldCheck } from "lucide-react";

export default function CareerOverview({ overview }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="rounded-[2rem] border border-[#eadcc9] bg-[#fffaf4] p-8 shadow-[0_18px_40px_rgba(93,86,79,0.08)]"
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#e8d7c8] bg-[#f5ebdf] px-3 py-1 text-sm text-[#7b4d39]">
            <Sparkles size={16} />
            Career Overview
          </div>
          <h2 className="text-3xl font-semibold text-[#1f1b18]">{overview.careerName}</h2>
          <p className="mt-4 text-lg text-[#4c443f]">{overview.summary}</p>
          <p className="mt-4 text-sm text-[#6b625b]">{overview.profileSummary}</p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl border border-[#eadcc9] bg-[#f5efe7] p-4">
            <div className="flex items-center gap-2 text-[#8b4e2a]">
              <TrendingUp size={16} />
              <span className="text-sm">Confidence Score</span>
            </div>
            <p className="mt-3 text-3xl font-semibold text-[#1f1b18]">{overview.confidenceScore}%</p>
          </div>
          <div className="rounded-2xl border border-[#eadcc9] bg-[#f5efe7] p-4">
            <div className="flex items-center gap-2 text-[#2f6a4a]">
              <ShieldCheck size={16} />
              <span className="text-sm">Estimated Accuracy</span>
            </div>
            <p className="mt-3 text-3xl font-semibold text-[#1f1b18]">{overview.estimatedAccuracy}%</p>
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-[#eadcc9] bg-[#f5efe7] p-4 text-sm text-[#5d564f]">
        {overview.disclaimer}
      </div>
    </motion.section>
  );
}
