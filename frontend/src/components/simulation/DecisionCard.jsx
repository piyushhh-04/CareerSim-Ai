import { motion } from "framer-motion";

export default function DecisionCard({ decision }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="rounded-3xl border border-[#eadcc9] bg-[#fffaf4] p-6 shadow-[0_12px_30px_rgba(93,86,79,0.05)]"
    >
      <div className="mb-4 flex items-center justify-between gap-3">
        <h4 className="text-lg font-semibold text-[#1f1b18]">{decision.title}</h4>
        <span className="rounded-full border border-[#d7b39b] bg-[#f3d9c5] px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-[#8b4e2a]">
          {decision.years}Y decision
        </span>
      </div>

      <div className="space-y-4 text-sm text-[#4c443f]">
        <div>
          <p className="mb-2 font-medium text-[#352f2a]">Pros</p>
          <ul className="space-y-1">
            {decision.pros.map((pro) => (
              <li key={pro} className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#2f6a4a]" />
                <span>{pro}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-2 font-medium text-[#352f2a]">Cons</p>
          <ul className="space-y-1">
            {decision.cons.map((con) => (
              <li key={con} className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#b9544f]" />
                <span>{con}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-[#eadcc9] bg-[#f5efe7] p-3 text-[#352f2a]">
          <p className="text-xs uppercase tracking-[0.2em] text-[#7b6b60]">Impact</p>
          <p className="mt-2">{decision.impact}</p>
        </div>
      </div>
    </motion.div>
  );
}
