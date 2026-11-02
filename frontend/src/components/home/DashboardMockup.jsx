import { motion } from "framer-motion";

export default function DashboardMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative"
    >
      <div className="relative overflow-hidden rounded-[1.75rem] border border-[#eadcc9] bg-[#fffaf4] p-6 shadow-[0_22px_55px_rgba(93,86,79,0.12)]">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-[#7b6b60]">Career outlook</p>
              <p className="mt-1 text-2xl font-semibold text-[#1f1b18]">Software Engineer</p>
            </div>
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f3d9c5] text-sm font-semibold text-[#8b4e2a]">
              SE
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-[#6b625b]">Salary growth</span>
              <span className="font-semibold text-[#8b4e2a]">+24%</span>
            </div>
            <div className="flex h-12 items-end gap-1 rounded-xl bg-[#f3e9df] p-2">
              {[0.3, 0.5, 0.7, 0.85, 0.95, 1].map((height, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${height * 100}%` }}
                  transition={{ duration: 0.8, delay: 0.08 * i }}
                  className="flex-1 rounded-sm bg-[#c7774b]"
                />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {[
              { label: "Stress", value: "45%", tone: "bg-[#f6e5d7] text-[#8b4e2a]" },
              { label: "Work-life", value: "72%", tone: "bg-[#e6f2e8] text-[#2f6a4a]" },
              { label: "Demand", value: "89%", tone: "bg-[#e8eef7] text-[#486b8c]" },
            ].map((metric) => (
              <div key={metric.label} className="rounded-xl border border-[#e8ddcf] bg-[#f5efe7] p-3">
                <p className="text-xs text-[#7b6b60]">{metric.label}</p>
                <p className="mt-1 text-lg font-semibold text-[#1f1b18]">{metric.value}</p>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[#efe5d9]">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: metric.value }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className={`h-full rounded-full ${metric.tone}`}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-2 pt-2">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#7b6b60]">Timeline</p>
            <div className="flex gap-2">
              {['Year 1', 'Year 3', 'Year 5'].map((year) => (
                <div key={year} className="flex-1 rounded-xl border border-[#e8ddcf] bg-[#f5efe7] p-3 text-center">
                  <p className="text-sm font-medium text-[#3b322d]">{year}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
