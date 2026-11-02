import { Link } from "react-router-dom";
import { Code, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[#e5d9ca] bg-[#f9f5ef]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🧭</span>
              <span className="text-lg font-semibold text-[#1f1b18]">CareerSim</span>
            </div>
            <p className="text-sm leading-relaxed text-[#5d564f]">
              A thoughtful way to explore your next move and make sense of the possibilities ahead.
            </p>
            <div className="flex gap-3 pt-2">
              <a href="#" className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#2d241e] text-[#f8f1ea] shadow-sm transition hover:bg-[#3b2e28]">
                <Code className="h-5 w-5" />
              </a>
              <a href="#" className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#2d241e] text-[#f8f1ea] shadow-sm transition hover:bg-[#3b2e28]">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-[#1f1b18]">Product</h3>
            <ul className="space-y-2 text-sm text-[#5d564f]">
              <li><a href="#features" className="transition hover:text-[#c7774b]">Features</a></li>
              <li><a href="#how" className="transition hover:text-[#c7774b]">How it Works</a></li>
              <li><Link to="/compare" className="transition hover:text-[#c7774b]">Compare</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-[#1f1b18]">Company</h3>
            <ul className="space-y-2 text-sm text-[#5d564f]">
              <li><a href="#" className="transition hover:text-[#c7774b]">About</a></li>
              <li><a href="#" className="transition hover:text-[#c7774b]">Blog</a></li>
              <li><a href="#" className="transition hover:text-[#c7774b]">Careers</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-[#1f1b18]">Legal</h3>
            <ul className="space-y-2 text-sm text-[#5d564f]">
              <li><a href="#" className="transition hover:text-[#c7774b]">Privacy Policy</a></li>
              <li><a href="#" className="transition hover:text-[#c7774b]">Terms of Service</a></li>
              <li><a href="#" className="transition hover:text-[#c7774b]">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="my-8 border-t border-[#e5d9ca]" />

        <div className="flex flex-col gap-2 text-sm text-[#5d564f] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 CareerSim. All rights reserved.</p>
          <p>Built with React, FastAPI, and Tailwind</p>
        </div>
      </div>
    </footer>
  );
}
