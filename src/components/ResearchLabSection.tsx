"use client";

import React from "react";
import { IntroductionAnimation } from "@/components/IntroductionAnimation";
import {
  BrainCircuit,
  TrendingDown,
  Layers,
  Sparkles,
  ExternalLink,
} from "lucide-react";

export function ResearchLabSection() {
  return (
    <section id="research-lab" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      {/* Background ambient lighting */}
      <div className="radial-glow-cyan top-1/3 left-1/3 w-[450px] h-[300px] -translate-x-1/2" />
      <div className="radial-glow-blue bottom-10 right-10 w-[400px] h-[300px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-[#111827] border border-blue-200 dark:border-[#263449] text-blue-600 dark:text-[#22D3EE] text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <BrainCircuit className="w-3.5 h-3.5 text-blue-600 dark:text-[#22D3EE]" />
            <span>Interactive Thesis Laboratory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-[#F8FAFC] tracking-tight mb-4 font-heading">
            Spatio-Temporal Graph Neural Network
          </h2>
          <p className="text-slate-600 dark:text-[#A7B2C4] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Live interactive simulation demonstrating Adarsh&apos;s Master&apos;s thesis methodology on the METR-LA highway sensor network, capturing topological spatial connectivity alongside temporal speed dynamics.
          </p>
        </div>

        {/* The Interactive Simulation Container */}
        <div className="max-w-4xl mx-auto mb-10">
          <IntroductionAnimation />
        </div>

        {/* Thesis Methodology Highlights Grid */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-[#263449] shadow-sm dark:shadow-md">
            <div className="flex items-center gap-2 text-blue-600 dark:text-[#22D3EE] text-xs font-bold font-heading uppercase mb-1">
              <TrendingDown className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
              18.4% Error Drop
            </div>
            <p className="text-xs text-slate-600 dark:text-[#A7B2C4] leading-relaxed">
              Reduced Mean Absolute Error from 3.8 to 3.1 over standard baseline models on highway speeds.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-[#263449] shadow-sm dark:shadow-md">
            <div className="flex items-center gap-2 text-blue-600 dark:text-[#22D3EE] text-xs font-bold font-heading uppercase mb-1">
              <Layers className="w-4 h-4 text-blue-600 dark:text-[#3B82F6]" />
              Dynamic Adjacency
            </div>
            <p className="text-xs text-slate-600 dark:text-[#A7B2C4] leading-relaxed">
              Gaussian distance thresholding to build adjacency matrices representing actual road network topology.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-[#263449] shadow-sm dark:shadow-md">
            <div className="flex items-center gap-2 text-blue-600 dark:text-[#22D3EE] text-xs font-bold font-heading uppercase mb-1">
              <Sparkles className="w-4 h-4 text-purple-600 dark:text-[#8B5CF6]" />
              PyTorch Architecture
            </div>
            <p className="text-xs text-slate-600 dark:text-[#A7B2C4] leading-relaxed">
              Spatial Graph Convolutions intertwined with Gated Temporal Convolutions for multi-step forecasting.
            </p>
          </div>
        </div>

        <div className="text-center mt-8">
          <a
            href="https://github.com/Adarsh8688/Short-Term-Traffic-Speed-Forecasting"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white dark:bg-[#111827] hover:bg-slate-50 dark:hover:bg-[#1E293B] text-slate-700 dark:text-[#A7B2C4] hover:text-slate-900 dark:hover:text-[#F8FAFC] border border-slate-200 dark:border-[#263449] hover:border-blue-500/50 text-xs font-semibold transition-all shadow-sm"
          >
            <span>View Thesis Codebase on GitHub</span>
            <ExternalLink className="w-3.5 h-3.5 text-blue-600 dark:text-[#22D3EE]" />
          </a>
        </div>
      </div>
    </section>
  );
}
