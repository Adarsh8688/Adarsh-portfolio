"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { Mail, ArrowUp } from "lucide-react";
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
    <footer className="border-t border-[#263449] bg-[#0B1120] py-12 px-4 sm:px-6 lg:px-8 text-[#A7B2C4] text-xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Branding & Role */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-[#F8FAFC] tracking-tight font-heading">
              {personal.fullName}
            </span>
            <span className="text-[#263449]">•</span>
            <span className="text-[#22D3EE] font-medium">Berlin, Germany</span>
          </div>
          <p className="text-[#A7B2C4] text-[11px]">
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
            className="p-2 rounded-lg bg-[#111827] border border-[#263449] text-[#A7B2C4] hover:text-[#F8FAFC] hover:border-[#2563EB]/50 transition-colors"
          >
            <Github className="w-4 h-4 text-white" />
          </a>

          <a
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 rounded-lg bg-[#111827] border border-[#263449] text-[#A7B2C4] hover:text-[#F8FAFC] hover:border-[#22D3EE]/50 transition-colors"
          >
            <Linkedin className="w-4 h-4 text-[#22D3EE]" />
          </a>

          <a
            href={`mailto:${social.email}`}
            aria-label="Send Email"
            className="p-2 rounded-lg bg-[#111827] border border-[#263449] text-[#A7B2C4] hover:text-[#F8FAFC] hover:border-emerald-500/50 transition-colors"
          >
            <Mail className="w-4 h-4 text-emerald-400" />
          </a>
        </div>

        {/* Right: Copyright & Back to Top */}
        <div className="flex items-center gap-4 text-center md:text-right">
          <p className="text-[#A7B2C4] text-[11px]">
            &copy; {currentYear} {personal.name}. All rights reserved.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="p-2 rounded-lg bg-[#111827] hover:bg-[#1E293B] border border-[#263449] text-[#A7B2C4] hover:text-[#F8FAFC] transition-colors"
            title="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
