import { motion } from "framer-motion";

export default function TimelineCard({ item }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      whileHover={{ y: -6, scale: 1.01 }}
      className="rounded-3xl border border-[#eadcc9] bg-[#fffaf4] p-6 shadow-[0_14px_30px_rgba(93,86,79,0.05)]"
    >
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-[#8b4e2a]">{item.years} Year</p>
          <h3 className="mt-2 text-xl font-semibold text-[#1f1b18]">{item.title}</h3>
        </div>
        <div className="rounded-full border border-[#d7b39b] bg-[#f3d9c5] px-3 py-1 text-sm font-medium text-[#8b4e2a]">
          {item.salary}
        </div>
      </div>

      <div className="space-y-4 text-sm text-[#4c443f]">
        <div>
          <p className="mb-2 font-medium text-[#352f2a]">Required Skills</p>
          <div className="flex flex-wrap gap-2">
            {item.requiredSkills.split(", ").map((skill) => (
              <span key={skill} className="rounded-full border border-[#e7dccd] bg-[#f5efe7] px-3 py-1 text-xs text-[#352f2a]">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl border border-[#eadcc9] bg-[#f5efe7] p-3">
            <p className="text-xs uppercase tracking-[0.2em] text-[#7b6b60]">Work-Life Balance</p>
            <p className="mt-2 text-lg font-semibold text-[#1f1b18]">{item.workLifeBalance}/10</p>
          </div>
          <div className="rounded-2xl border border-[#eadcc9] bg-[#f5efe7] p-3">
            <p className="text-xs uppercase tracking-[0.2em] text-[#7b6b60]">Stress Level</p>
            <p className="mt-2 text-lg font-semibold text-[#1f1b18]">{item.stress}/10</p>
          </div>
        </div>

        <div className="rounded-2xl border border-[#eadcc9] bg-[#f5efe7] p-3">
          <p className="text-xs uppercase tracking-[0.2em] text-[#7b6b60]">Market Demand</p>
          <p className="mt-2 font-semibold text-[#1f1b18]">{item.demand}</p>
        </div>

        <p className="rounded-2xl border border-[#e8d7c8] bg-[#f5ebdf] p-3 text-[#352f2a]">
          {item.explanation}
        </p>
      </div>
    </motion.div>
  );
}
