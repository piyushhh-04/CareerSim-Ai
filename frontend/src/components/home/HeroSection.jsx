import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import DashboardMockup from "./DashboardMockup";
import PrimaryButton from "../common/PrimaryButton";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function HeroSection() {
  const scrollToFeatures = () => {
    document.getElementById("features")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="relative min-h-screen overflow-hidden px-6 py-20 pt-28">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mx-auto max-w-7xl"
      >
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-7">
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#e4d4c3] bg-[#f7efe6] px-4 py-2 shadow-sm">
                <span className="h-2.5 w-2.5 rounded-full bg-[#c7774b]" />
                <span className="text-sm font-medium text-[#5b4d43]">
                  A sharper way to explore what comes next
                </span>
              </div>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-[#1f1b18]">
              Design your next move
              <span className="mt-2 block text-[#5a504b]">with clarity and intent.</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="max-w-2xl text-lg leading-relaxed text-[#5d564f]"
            >
              Compare career paths, understand the tradeoffs, and make decisions with a calmer, more informed perspective.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 pt-2">
              <PrimaryButton to="/onboarding">
                Start your first simulation
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </PrimaryButton>

              <button
                type="button"
                onClick={scrollToFeatures}
                className="rounded-full border border-[#d9c9bb] bg-[#fffaf4] px-8 py-4 font-semibold text-[#2b241f] transition hover:border-[#c7774b] hover:bg-[#f6ebdf]"
              >
                Learn more
              </button>
            </motion.div>
          </div>

          <motion.div variants={itemVariants}>
            <DashboardMockup />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
