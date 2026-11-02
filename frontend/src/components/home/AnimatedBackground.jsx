import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#f5f0e8]">
      <motion.div
        animate={{ y: [0, -10, 0], x: [0, 8, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-16 -top-16 h-72 w-72 rounded-full bg-[#f3d9c5]/80 blur-3xl"
      />

      <motion.div
        animate={{ y: [0, 12, 0], x: [0, -7, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-[#e4d2b8]/70 blur-3xl"
      />

      <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#f0d7bf]/70 blur-3xl" />
    </div>
  );
}
