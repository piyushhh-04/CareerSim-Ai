import { motion } from "framer-motion";

export default function StepCard({ children, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full max-w-2xl rounded-[2rem] border border-[#eadcc9] bg-[#fffaf4] p-8 shadow-[0_18px_40px_rgba(93,86,79,0.08)]"
    >
      <div className="space-y-3">
        <h2 className="text-3xl font-bold text-[#1f1b18]">{title}</h2>
        {description && <p className="text-[#5d564f]">{description}</p>}
      </div>

      <div className="mt-8 space-y-6">{children}</div>
    </motion.div>
  );
}
