import { motion } from "framer-motion";
import { User, Briefcase, BarChart3, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: User,
    number: "01",
    title: "Share a bit about yourself",
    description: "Tell us your background, strengths, and goals so we can build a clearer picture.",
  },
  {
    icon: Briefcase,
    number: "02",
    title: "Choose the paths you want to compare",
    description: "Pick a few directions you’re curious about and see how they differ.",
  },
  {
    icon: BarChart3,
    number: "03",
    title: "Review the outlook together",
    description: "Look at the tradeoffs, timeline, and fit in a way that feels practical and calm.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="relative px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-semibold text-[#1f1b18] sm:text-4xl">
            A simple way to explore what’s next
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-[#5d564f]">
            Three thoughtful steps that help you understand your options without overcomplicating things.
          </p>
        </motion.div>

        <div className="relative">
          <div className="grid gap-8 lg:grid-cols-3">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="rounded-2xl border border-[#eadcc9] bg-[#fffaf4] p-8 shadow-[0_10px_30px_rgba(93,86,79,0.06)] transition hover:border-[#d7b39b]">
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#f3d9c5] text-sm font-semibold text-[#8b4e2a]">
                    {step.number}
                  </div>

                  <div className="mb-4 text-[#8b4e2a]">
                    <step.icon className="h-7 w-7" />
                  </div>

                  <h3 className="mb-3 text-xl font-semibold text-[#1f1b18]">{step.title}</h3>
                  <p className="leading-relaxed text-[#5d564f]">{step.description}</p>
                </div>

                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.07 }}
                    viewport={{ once: true }}
                    className="hidden lg:block absolute -right-4 top-1/3 z-10"
                  >
                    <ArrowRight className="h-6 w-6 text-[#c7774b]/70" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
