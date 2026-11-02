import { motion } from "framer-motion";

export default function Insights({ insights }) {
  const cards = [
    { title: "Strengths", items: insights.strengths, accent: "border-[#cfe7d9] bg-[#edf7f1] text-[#2f6a4a]" },
    { title: "Weaknesses", items: insights.weaknesses, accent: "border-[#f0d8b3] bg-[#fbf1e4] text-[#8b4e2a]" },
    { title: "Risk Factors", items: insights.risks, accent: "border-[#f0cbd0] bg-[#fbecef] text-[#9d4d52]" },
    { title: "Opportunities", items: insights.opportunities, accent: "border-[#dfe7f6] bg-[#eef4fb] text-[#486b8c]" },
  ];

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {cards.map((card, index) => (
        <motion.div
          key={card.title}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          className={`rounded-[2rem] border p-6 shadow-[0_12px_28px_rgba(93,86,79,0.05)] ${card.accent}`}
        >
          <h3 className="mb-4 text-xl font-semibold text-[#1f1b18]">{card.title}</h3>
          <ul className="space-y-3 text-sm text-[#352f2a]">
            {card.items.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#1f1b18]/70" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}
