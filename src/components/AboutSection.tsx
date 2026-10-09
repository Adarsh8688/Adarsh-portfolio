"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import {
  GraduationCap,
  MapPin,
  TrendingDown,
  ShieldCheck,
  Compass,
  Briefcase,
  User,
} from "lucide-react";
import { Github, Linkedin } from "@/components/Icons";

export function AboutSection() {
  const { personal, social } = portfolioData;

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <User className="w-3.5 h-3.5" />
            <span>Background & Academic Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            About Adarsh
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Data Science postgraduate based in Berlin, bridging mathematical modeling with production-grade data engineering.
          </p>
        </div>

        {/* Two Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-xl">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2.5">
                <Compass className="w-5 h-5 text-sky-400" />
                <span>Professional Focus & Data Philosophy</span>
              </h3>

              <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
                {personal.longBio.map((paragraph, index) => (
                  <p key={index} className="text-pretty">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Status Banner */}
              <div className="mt-6 p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-start gap-3">
                <Briefcase className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-xs font-semibold text-white mb-1">
                    Current Availability
                  </h4>
                  <p className="text-xs text-slate-300">
                    {personal.status}
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Profile Links */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-850 hover:bg-slate-800 border border-slate-800 text-xs font-semibold text-slate-200 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>Follow on GitHub</span>
              </a>

              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-850 hover:bg-slate-800 border border-slate-800 text-xs font-semibold text-slate-200 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-[#0a66c2]" />
                <span>Connect on LinkedIn</span>
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-xs font-semibold text-white transition-colors"
              >
                <TrendingDown className="w-4 h-4" />
                <span>View Thesis Research</span>
              </a>
            </div>
          </div>

          {/* Cards & Credentials Column */}
          <div className="lg:col-span-5 space-y-4">
            {/* Education Card */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-sky-400 font-semibold">
                    Postgraduate Education
                  </span>
                  <h4 className="text-base font-bold text-white">
                    {personal.education.degree}
                  </h4>
                </div>
              </div>

              <div className="space-y-1.5 text-xs text-slate-300 pl-11">
                <p className="font-medium text-slate-200">
                  {personal.education.institution}
                </p>
                <p className="text-slate-400 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-sky-400" />
                  {personal.education.location}
                </p>
                <p className="text-slate-400 pt-1">
                  <span className="font-semibold text-slate-300">Specialization:</span> {personal.education.focus}
                </p>
              </div>
            </div>

            {/* Master's Thesis Achievement Card */}
            <div className="p-6 rounded-2xl bg-slate-900/90 border border-emerald-500/30">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400">
                  <TrendingDown className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-semibold">
                    Key Research Benchmark
                  </span>
                  <h4 className="text-base font-bold text-white">
                    Traffic Speed Forecasting (GNN)
                  </h4>
                </div>
              </div>

              <div className="space-y-2 text-xs text-slate-300 pl-11">
                <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                  <p className="text-emerald-400 font-semibold text-sm mb-0.5">
                    18% Error Reduction
                  </p>
                  <p className="text-slate-400 text-[11px]">
                    Reduced MAE from 3.8 to 3.1 using Spatio-Temporal Graph Neural Networks on METR-LA.
                  </p>
                </div>
                <p className="text-slate-400 text-[11px]">
                  Implemented with PyTorch, NetworkX, dynamic adjacency topologies, and time-series sensor windows.
                </p>
              </div>
            </div>

            {/* Certification Card */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-indigo-400 font-semibold">
                    Verified Certification
                  </span>
                  <h4 className="text-base font-bold text-white">
                    {personal.certifications[0].title}
                  </h4>
                </div>
              </div>

              <div className="space-y-1.5 text-xs text-slate-300 pl-11">
                <p className="font-medium text-slate-200">
                  {personal.certifications[0].issuer}
                </p>
                <p className="text-slate-400">
                  {personal.certifications[0].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
