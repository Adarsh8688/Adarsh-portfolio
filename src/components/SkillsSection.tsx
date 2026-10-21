"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import {
  Code2,
  LineChart,
  BrainCircuit,
  PieChart,
  Wrench,
  CheckCircle,
  Sparkles,
} from "lucide-react";

export function SkillsSection() {
  const { skills } = portfolioData;
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Programming":
        return <Code2 className="w-4 h-4 text-[#6F4E37] dark:text-[#E6E0F0]" />;
      case "Data Analysis":
        return <LineChart className="w-4 h-4 text-[#8C6549] dark:text-[#C8B8DB]" />;
      case "Machine Learning":
        return <BrainCircuit className="w-4 h-4 text-[#6F4E37] dark:text-[#E6E0F0]" />;
      case "Visualization":
        return <PieChart className="w-4 h-4 text-[#9E7355] dark:text-[#E6E0F0]" />;
      case "Tools and Technologies":
        return <Wrench className="w-4 h-4 text-[#6F4E37] dark:text-[#C8B8DB]" />;
      default:
        return <Sparkles className="w-4 h-4 text-[#6F4E37] dark:text-[#E6E0F0]" />;
    }
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E6E0F0]/40 dark:bg-[#6F4E37]/20 border border-[#E5E4E2] dark:border-[#3A2E26] text-[#6F4E37] dark:text-[#E6E0F0] text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <CheckCircle className="w-3.5 h-3.5" />
            <span>Verified Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-[#FAF8F6] mb-4 font-heading">
            Skills & Technical Stack
          </h2>
          <p className="text-slate-600 dark:text-[#E5E4E2]/80 text-base leading-relaxed">
            Organized into five structured domains. Every listed technology corresponds directly to demonstrated thesis research, published codebases, or formal certifications.
          </p>
        </div>

        {/* Category Navigation Pills */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          {skills.map((cat, idx) => (
            <button
              key={cat.category}
              type="button"
              onClick={() => setActiveCategoryIndex(idx)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                activeCategoryIndex === idx
                  ? "bg-[#6F4E37] text-white shadow-sm shadow-[#6F4E37]/30 scale-105"
                  : "bg-white dark:bg-[#1D1714] text-slate-600 dark:text-[#E5E4E2]/80 border border-[#E5E4E2] dark:border-[#3A2E26] hover:bg-stone-100 dark:hover:bg-[#2A201B] hover:text-slate-900 dark:hover:text-[#FAF8F6]"
              }`}
            >
              {getCategoryIcon(cat.category)}
              <span>{cat.category}</span>
            </button>
          ))}
        </div>

        {/* Active Category Display */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#1D1714] border border-[#E5E4E2] dark:border-[#3A2E26] backdrop-blur-xl shadow-sm dark:shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-[#E5E4E2] dark:border-[#3A2E26] gap-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-stone-50 dark:bg-[#140F0D] border border-[#E5E4E2] dark:border-[#3A2E26]">
                  {getCategoryIcon(skills[activeCategoryIndex].category)}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-[#FAF8F6] font-heading">
                    {skills[activeCategoryIndex].category}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-[#E5E4E2]/80">
                    {skills[activeCategoryIndex].description}
                  </p>
                </div>
              </div>

              <span className="text-[11px] font-mono text-[#6F4E37] dark:text-[#E6E0F0] bg-[#E6E0F0]/40 dark:bg-[#140F0D] px-3 py-1 rounded-full border border-[#E5E4E2] dark:border-[#3A2E26] w-fit">
                {skills[activeCategoryIndex].skills.length} Verified Competencies
              </span>
            </div>

            {/* Skills Grid for active category */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skills[activeCategoryIndex].skills.map((skill) => (
                <div
                  key={skill.name}
                  className="p-4 rounded-xl bg-stone-50 dark:bg-[#140F0D] border border-[#E5E4E2] dark:border-[#3A2E26] hover:border-[#6F4E37]/50 dark:hover:border-[#E6E0F0]/40 hover:bg-white dark:hover:bg-[#2A201B] transition-all"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-bold text-slate-900 dark:text-[#FAF8F6] tracking-tight font-heading">
                      {skill.name}
                    </span>
                    <span className="text-[10px] font-mono font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-white dark:bg-[#1D1714] text-[#6F4E37] dark:text-[#E6E0F0] border border-[#E5E4E2] dark:border-[#3A2E26]">
                      {skill.level}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-[#E5E4E2]/80 leading-relaxed">
                    {skill.context}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* All Categories Compact Overview Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {skills.map((cat, idx) => (
            <div
              key={cat.category}
              onClick={() => setActiveCategoryIndex(idx)}
              className={`p-4 rounded-xl border transition-all cursor-pointer ${
                activeCategoryIndex === idx
                  ? "bg-[#E6E0F0]/30 border-[#6F4E37]/60 dark:bg-[#2A201B] dark:border-[#E6E0F0]/40 shadow-sm"
                  : "bg-white dark:bg-[#1D1714] border-[#E5E4E2] dark:border-[#3A2E26] hover:bg-stone-50 dark:hover:bg-[#2A201B]/60"
              }`}
            >
              <div className="flex items-center gap-2 mb-2.5">
                {getCategoryIcon(cat.category)}
                <h4 className="text-xs font-bold text-slate-900 dark:text-[#FAF8F6] font-heading">{cat.category}</h4>
              </div>
              <div className="flex flex-wrap gap-1">
                {cat.skills.map((s) => (
                  <span
                    key={s.name}
                    className="text-[10px] font-mono text-slate-600 dark:text-[#E5E4E2]/80 bg-stone-50 dark:bg-[#140F0D] border border-[#E5E4E2] dark:border-[#3A2E26] px-1.5 py-0.5 rounded"
                  >
                    {s.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
