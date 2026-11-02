import { motion } from "framer-motion";
import {
  Zap,
  Brain,
  GitBranch,
  TrendingUp,
  BarChart3,
  Clock,
} from "lucide-react";
import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: Zap,
    title: "Career Simulation",
    description: "Try out realistic paths and see how different choices might shape your future.",
  },
  {
    icon: Brain,
    title: "Thoughtful Insights",
    description: "Get clear, grounded guidance that helps you reflect on what matters most.",
  },
  {
    icon: GitBranch,
    title: "Decision Points",
    description: "Explore different branches and understand how each one could change the story.",
  },
  {
    icon: TrendingUp,
    title: "Salary Outlook",
    description: "Look at long-term earning potential without losing sight of the bigger picture.",
  },
  {
    icon: BarChart3,
    title: "Easy Comparisons",
    description: "Compare options side by side in a way that feels simple and practical.",
  },
  {
    icon: Clock,
    title: "A Clear Timeline",
    description: "Follow your path over time and see how progress can unfold naturally.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

export default function FeaturesSection() {
  return (
    <section id="features" className="relative px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-semibold text-white sm:text-4xl">
            A practical way to think about what comes next
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-400">
            The right kind of context can make a big decision feel a little more manageable.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
