import { motion } from "framer-motion";

export default function FeatureCard({ icon: Icon, title, description, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      viewport={{ once: true }}
      whileHover={{ y: -3, scale: 1.01 }}
      className="group relative rounded-2xl border border-[#eadcc9] bg-[#fffaf4] p-6 shadow-[0_10px_30px_rgba(93,86,79,0.06)] transition hover:border-[#d7b39b]"
    >
      <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#f3d9c5] text-[#8b4e2a]">
        <Icon className="h-5 w-5" />
      </div>

      <h3 className="mb-2 text-lg font-semibold text-[#1f1b18]">{title}</h3>
      <p className="text-sm leading-relaxed text-[#5d564f]">{description}</p>
    </motion.div>
  );
}
