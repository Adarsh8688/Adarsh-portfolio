"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { Mail, ArrowUp, Heart } from "lucide-react";
import { Github, Linkedin } from "@/components/Icons";

export function Footer() {
  const { personal, social } = portfolioData;
  const [currentYear, setCurrentYear] = React.useState(2026);

  React.useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#06080e] py-12 px-4 sm:px-6 lg:px-8 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Branding & Role */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-white tracking-tight">
              {personal.fullName}
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-indigo-400 font-medium">Berlin, Germany</span>
          </div>
          <p className="text-slate-400 text-[11px]">
            M.Sc. Data Science • University of Europe for Applied Sciences
          </p>
        </div>

        {/* Center: Social Links */}
        <div className="flex items-center gap-3">
          <a
            href={social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.06] hover:text-white hover:border-white/[0.15] hover:bg-white/[0.06] transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>

          <a
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.06] hover:text-white hover:border-indigo-400/30 hover:bg-white/[0.06] transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <a
            href={`mailto:${social.email}`}
            aria-label="Send Email"
            className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.06] hover:text-white hover:border-violet-400/30 hover:bg-white/[0.06] transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Right: Copyright & Back to Top */}
        <div className="flex items-center gap-4 text-center md:text-right">
          <p className="text-slate-400 text-[11px]">
            &copy; {currentYear} {personal.name}. All rights reserved.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-400 hover:text-white transition-colors"
            title="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
