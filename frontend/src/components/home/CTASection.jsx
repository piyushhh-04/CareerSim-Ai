import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import PrimaryButton from "../common/PrimaryButton";

export default function CTASection() {
  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="rounded-[2rem] border border-[#eadcc9] bg-[#fffaf4] p-10 text-center shadow-[0_18px_40px_rgba(93,86,79,0.08)] sm:p-12"
        >
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="mb-4 text-3xl font-semibold text-[#1f1b18] sm:text-4xl"
          >
            Ready to explore your next step?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mx-auto mb-8 max-w-2xl text-lg text-[#5d564f]"
          >
            Start with a simple simulation and see the path ahead in a clearer, more grounded way.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <PrimaryButton to="/onboarding" size="lg">
              Start now
              <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
            </PrimaryButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
