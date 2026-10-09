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
        return <Code2 className="w-4 h-4 text-sky-500" />;
      case "Data Analysis":
        return <LineChart className="w-4 h-4 text-indigo-500" />;
      case "Machine Learning":
        return <BrainCircuit className="w-4 h-4 text-emerald-500" />;
      case "Visualization":
        return <PieChart className="w-4 h-4 text-amber-500" />;
      case "Tools and Technologies":
        return <Wrench className="w-4 h-4 text-teal-500" />;
      default:
        return <Sparkles className="w-4 h-4 text-sky-500" />;
    }
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-[#111827] border border-emerald-200 dark:border-[#263449] text-emerald-600 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <CheckCircle className="w-3.5 h-3.5" />
            <span>Verified Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-[#F8FAFC] mb-4 font-heading">
            Skills & Technical Stack
          </h2>
          <p className="text-slate-600 dark:text-[#A7B2C4] text-base leading-relaxed">
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
                  ? "bg-[#2563EB] text-white shadow-sm shadow-[#2563EB]/30 scale-105"
                  : "bg-white dark:bg-[#111827] text-slate-600 dark:text-[#A7B2C4] border border-slate-200 dark:border-[#263449] hover:bg-slate-100 dark:hover:bg-[#1E293B] hover:text-slate-900 dark:hover:text-[#F8FAFC]"
              }`}
            >
              {getCategoryIcon(cat.category)}
              <span>{cat.category}</span>
            </button>
          ))}
        </div>

        {/* Active Category Display */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-[#263449] backdrop-blur-xl shadow-sm dark:shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-slate-200 dark:border-[#263449] gap-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#0B1120] border border-slate-200 dark:border-[#263449]">
                  {getCategoryIcon(skills[activeCategoryIndex].category)}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-[#F8FAFC] font-heading">
                    {skills[activeCategoryIndex].category}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-[#A7B2C4]">
                    {skills[activeCategoryIndex].description}
                  </p>
                </div>
              </div>

              <span className="text-[11px] font-mono text-blue-600 dark:text-[#22D3EE] bg-blue-50 dark:bg-[#0B1120] px-3 py-1 rounded-full border border-blue-200 dark:border-[#263449] w-fit">
                {skills[activeCategoryIndex].skills.length} Verified Competencies
              </span>
            </div>

            {/* Skills Grid for active category */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skills[activeCategoryIndex].skills.map((skill) => (
                <div
                  key={skill.name}
                  className="p-4 rounded-xl bg-slate-50 dark:bg-[#0B1120] border border-slate-200 dark:border-[#263449] hover:border-blue-500/40 dark:hover:border-[#2563EB]/40 hover:bg-white dark:hover:bg-[#162032] transition-all"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-bold text-slate-900 dark:text-[#F8FAFC] tracking-tight font-heading">
                      {skill.name}
                    </span>
                    <span className="text-[10px] font-mono font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-white dark:bg-[#111827] text-blue-600 dark:text-[#22D3EE] border border-slate-200 dark:border-[#263449]">
                      {skill.level}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-[#A7B2C4] leading-relaxed">
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
                  ? "bg-blue-50/80 border-blue-500/60 dark:bg-[#1E293B] dark:border-[#2563EB]/60 shadow-sm"
                  : "bg-white dark:bg-[#111827] border-slate-200 dark:border-[#263449] hover:bg-slate-50 dark:hover:bg-[#1E293B]/60"
              }`}
            >
              <div className="flex items-center gap-2 mb-2.5">
                {getCategoryIcon(cat.category)}
                <h4 className="text-xs font-bold text-slate-900 dark:text-[#F8FAFC] font-heading">{cat.category}</h4>
              </div>
              <div className="flex flex-wrap gap-1">
                {cat.skills.map((s) => (
                  <span
                    key={s.name}
                    className="text-[10px] font-mono text-slate-600 dark:text-[#A7B2C4] bg-slate-50 dark:bg-[#0B1120] border border-slate-200 dark:border-[#263449] px-1.5 py-0.5 rounded"
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
