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
    <footer className="border-t border-slate-200 dark:border-[#263449] bg-white dark:bg-[#0B1120] py-12 px-4 sm:px-6 lg:px-8 text-slate-500 dark:text-[#A7B2C4] text-xs transition-colors duration-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Branding & Role */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-slate-900 dark:text-[#F8FAFC] tracking-tight font-heading">
              {personal.fullName}
            </span>
            <span className="text-slate-300 dark:text-[#263449]">•</span>
            <span className="text-blue-600 dark:text-[#22D3EE] font-medium">Germany</span>
          </div>
          <p className="text-slate-500 dark:text-[#A7B2C4] text-[11px]">
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
            className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-[#111827] border border-slate-200 dark:border-[#263449] text-slate-700 hover:text-slate-900 dark:text-[#A7B2C4] dark:hover:text-[#F8FAFC] hover:border-blue-500/50 transition-colors"
          >
            <Github className="w-4 h-4 text-slate-800 dark:text-white" />
          </a>

          <a
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-[#111827] border border-slate-200 dark:border-[#263449] text-slate-700 hover:text-slate-900 dark:text-[#A7B2C4] dark:hover:text-[#F8FAFC] hover:border-blue-500/50 transition-colors"
          >
            <Linkedin className="w-4 h-4 text-[#0284C7] dark:text-[#22D3EE]" />
          </a>

          <a
            href={`mailto:${social.email}`}
            aria-label="Send Email"
            className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-[#111827] border border-slate-200 dark:border-[#263449] text-slate-700 hover:text-slate-900 dark:text-[#A7B2C4] dark:hover:text-[#F8FAFC] hover:border-emerald-500/50 transition-colors"
          >
            <Mail className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
          </a>
        </div>

        {/* Right: Copyright & Back to Top */}
        <div className="flex items-center gap-4 text-center md:text-right">
          <p className="text-slate-500 dark:text-[#A7B2C4] text-[11px]">
            &copy; {currentYear} {personal.name}. All rights reserved.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-[#111827] dark:hover:bg-[#1E293B] border border-slate-200 dark:border-[#263449] text-slate-700 dark:text-[#A7B2C4] hover:text-slate-900 dark:hover:text-[#F8FAFC] transition-colors cursor-pointer"
            title="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
