import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PrimaryButton from "../common/PrimaryButton";

export default function Navbar() {
  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "How it Works", href: "#how" },
    { label: "Compare", href: "/compare", isRouter: true },
  ];

  return (
    <motion.nav
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.45 }}
      className="sticky top-0 z-50 border-b border-[#e5d9ca] bg-[#f9f5ef]/80 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2 text-lg font-semibold text-[#1f1b18]">
          <span className="text-xl">🧭</span>
          <span>CareerSim</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.isRouter ? (
              <Link key={link.label} to={link.href} className="text-[#5d564f] transition hover:text-[#c7774b]">
                {link.label}
              </Link>
            ) : (
              <a key={link.label} href={link.href} className="text-[#5d564f] transition hover:text-[#c7774b]">
                {link.label}
              </a>
            )
          )}
        </div>

        <PrimaryButton to="/onboarding" size="sm">Start Simulation</PrimaryButton>
      </div>
    </motion.nav>
  );
}
