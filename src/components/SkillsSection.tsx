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
        return <Code2 className="w-4 h-4 text-sky-400" />;
      case "Data Analysis":
        return <LineChart className="w-4 h-4 text-indigo-400" />;
      case "Machine Learning":
        return <BrainCircuit className="w-4 h-4 text-emerald-400" />;
      case "Visualization":
        return <PieChart className="w-4 h-4 text-amber-400" />;
      case "Tools and Technologies":
        return <Wrench className="w-4 h-4 text-teal-400" />;
      default:
        return <Sparkles className="w-4 h-4 text-sky-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <CheckCircle className="w-3.5 h-3.5" />
            <span>Verified Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Skills & Technical Stack
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
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
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                activeCategoryIndex === idx
                  ? "bg-sky-600 text-white shadow-sm shadow-sky-600/30 scale-105"
                  : "bg-slate-900/80 text-slate-300 border border-slate-800 hover:bg-slate-800 hover:text-white"
              }`}
            >
              {getCategoryIcon(cat.category)}
              <span>{cat.category}</span>
            </button>
          ))}
        </div>

        {/* Active Category Display */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-slate-800 backdrop-blur-xl shadow-xl shadow-black/40">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-slate-800 gap-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-slate-800 border border-slate-700/60">
                  {getCategoryIcon(skills[activeCategoryIndex].category)}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {skills[activeCategoryIndex].category}
                  </h3>
                  <p className="text-xs text-slate-400">
                    {skills[activeCategoryIndex].description}
                  </p>
                </div>
              </div>

              <span className="text-[11px] font-mono text-sky-400 bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20 w-fit">
                {skills[activeCategoryIndex].skills.length} Verified Competencies
              </span>
            </div>

            {/* Skills Grid for active category */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skills[activeCategoryIndex].skills.map((skill) => (
                <div
                  key={skill.name}
                  className="p-4 rounded-xl bg-slate-800/40 border border-slate-800 hover:border-slate-700 hover:bg-slate-800/70 transition-all"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-bold text-white tracking-tight">
                      {skill.name}
                    </span>
                    <span className="text-[10px] font-mono font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-800 text-sky-300 border border-slate-700">
                      {skill.level}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
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
                  ? "bg-slate-850 border-sky-500/40"
                  : "bg-slate-900/60 border-slate-800 hover:bg-slate-850 hover:border-slate-700"
              }`}
            >
              <div className="flex items-center gap-2 mb-2.5">
                {getCategoryIcon(cat.category)}
                <h4 className="text-xs font-bold text-white">{cat.category}</h4>
              </div>
              <div className="flex flex-wrap gap-1">
                {cat.skills.map((s) => (
                  <span
                    key={s.name}
                    className="text-[10px] font-mono text-slate-400 bg-black/40 px-1.5 py-0.5 rounded"
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
