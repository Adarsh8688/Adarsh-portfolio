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
  Target,
} from "lucide-react";
import { Github, Linkedin } from "@/components/Icons";

export function AboutSection() {
  const { personal, social } = portfolioData;

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E6E0F0]/50 dark:bg-[#1D1714] border border-[#6F4E37]/30 dark:border-[#3A2E26] text-[#6F4E37] dark:text-[#E6E0F0] text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <User className="w-3.5 h-3.5 text-[#6F4E37] dark:text-[#E6E0F0]" />
            <span>Background & Academic Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-[#FAF8F6] mb-4 font-heading">
            About Adarsh
          </h2>
          <p className="text-slate-600 dark:text-[#E5E4E2] text-base leading-relaxed">
            M.Sc. Data Science graduate based in Germany (completed August 2026), bridging mathematical modeling with production-grade data engineering.
          </p>
        </div>

        {/* Two Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-8 rounded-2xl bg-white dark:bg-[#1D1714] border border-[#E5E4E2] dark:border-[#3A2E26] backdrop-blur-xl shadow-sm dark:shadow-xl">
              <h3 className="text-xl font-bold text-slate-900 dark:text-[#FAF8F6] mb-4 flex items-center gap-2.5 font-heading">
                <Compass className="w-5 h-5 text-[#6F4E37] dark:text-[#E6E0F0]" />
                <span>Professional Focus & Data Philosophy</span>
              </h3>

              <div className="space-y-4 text-sm text-slate-600 dark:text-[#E5E4E2] leading-relaxed">
                {personal.longBio.map((paragraph, index) => (
                  <p key={index} className="text-pretty">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Status Banner */}
              <div className="mt-6 p-4 rounded-xl bg-slate-50 dark:bg-[#140F0D] border border-[#E5E4E2] dark:border-[#3A2E26] flex items-start gap-3">
                <Briefcase className="w-4 h-4 text-emerald-500 dark:text-emerald-400 mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-xs font-semibold text-slate-900 dark:text-[#FAF8F6] mb-1 font-heading">
                    Current Availability
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-[#E5E4E2]">
                    {personal.status}
                  </p>
                </div>
              </div>

              {/* Career Interests & Target Roles */}
              {personal.targetRoles && (
                <div className="mt-4 p-4 rounded-xl bg-slate-50 dark:bg-[#140F0D] border border-[#E5E4E2] dark:border-[#3A2E26]">
                  <h4 className="text-xs font-semibold text-slate-900 dark:text-[#FAF8F6] mb-2 font-heading flex items-center gap-2">
                    <Target className="w-3.5 h-3.5 text-[#6F4E37] dark:text-[#E6E0F0]" />
                    <span>Target Roles & Career Interests</span>
                  </h4>
                  {personal.careerInterests && (
                    <p className="text-xs text-slate-600 dark:text-[#E5E4E2] mb-3 leading-relaxed">
                      {personal.careerInterests}
                    </p>
                  )}
                  <div className="flex flex-wrap gap-1.5">
                    {personal.targetRoles.map((role) => (
                      <span
                        key={role}
                        className="px-2.5 py-1 text-[11px] font-mono font-medium rounded-lg bg-white dark:bg-[#1D1714] border border-[#E5E4E2] dark:border-[#3A2E26] text-[#6F4E37] dark:text-[#E6E0F0]"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Quick Profile Links */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-[#1D1714] hover:bg-slate-50 dark:hover:bg-[#2A201A] border border-[#E5E4E2] dark:border-[#3A2E26] hover:border-[#6F4E37]/50 text-xs font-semibold text-slate-700 dark:text-[#E5E4E2] hover:text-slate-900 dark:hover:text-[#FAF8F6] transition-colors shadow-sm"
              >
                <Github className="w-4 h-4 text-slate-800 dark:text-white" />
                <span>Follow on GitHub</span>
              </a>

              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-[#1D1714] hover:bg-slate-50 dark:hover:bg-[#2A201A] border border-[#E5E4E2] dark:border-[#3A2E26] hover:border-[#6F4E37]/50 text-xs font-semibold text-slate-700 dark:text-[#E5E4E2] hover:text-slate-900 dark:hover:text-[#FAF8F6] transition-colors shadow-sm"
              >
                <Linkedin className="w-4 h-4 text-[#6F4E37] dark:text-[#E6E0F0]" />
                <span>Connect on LinkedIn</span>
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#6F4E37] hover:bg-[#5C3E29] text-xs font-semibold text-white transition-colors shadow-sm shadow-[#6F4E37]/30"
              >
                <TrendingDown className="w-4 h-4" />
                <span>View Thesis Research</span>
              </a>
            </div>
          </div>

          {/* Cards & Credentials Column */}
          <div className="lg:col-span-5 space-y-4">
            {/* Education Card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#1D1714] border border-[#E5E4E2] dark:border-[#3A2E26] backdrop-blur-xl shadow-sm dark:shadow-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-[#6F4E37]/10 text-[#6F4E37] dark:text-[#E6E0F0] border border-[#6F4E37]/20">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-semibold">
                    Completed August 2026 • Postgraduate Degree
                  </span>
                  <h4 className="text-base font-bold text-slate-900 dark:text-[#FAF8F6] font-heading">
                    {personal.education.degree}
                  </h4>
                </div>
              </div>

              <div className="space-y-1.5 text-xs text-slate-600 dark:text-[#E5E4E2] pl-11">
                <p className="font-semibold text-slate-900 dark:text-[#FAF8F6]">
                  {personal.education.institution}
                </p>
                <p className="text-slate-600 dark:text-[#E5E4E2] flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#6F4E37] dark:text-[#E6E0F0]" />
                  {personal.education.location}
                </p>
                <p className="text-slate-600 dark:text-[#E5E4E2] pt-1">
                  <span className="font-semibold text-slate-900 dark:text-[#FAF8F6]">Graduated:</span> August 2026 • <span className="font-semibold text-slate-900 dark:text-[#FAF8F6]">Focus:</span> {personal.education.focus}
                </p>
              </div>
            </div>

            {/* Master's Thesis Achievement Card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#1D1714] border border-[#E5E4E2] dark:border-[#3A2E26] shadow-sm dark:shadow-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                  <TrendingDown className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-semibold">
                    Key Research Benchmark
                  </span>
                  <h4 className="text-base font-bold text-slate-900 dark:text-[#FAF8F6] font-heading">
                    Traffic Speed Forecasting (GNN)
                  </h4>
                </div>
              </div>

              <div className="space-y-2 text-xs text-slate-600 dark:text-[#E5E4E2] pl-11">
                <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-[#140F0D] border border-[#E5E4E2] dark:border-[#3A2E26]">
                  <p className="text-emerald-600 dark:text-emerald-400 font-semibold text-sm mb-0.5">
                    18.4% Error Reduction
                  </p>
                  <p className="text-slate-600 dark:text-[#E5E4E2] text-[11px]">
                    Reduced MAE from 3.8 to 3.1 using Spatio-Temporal Graph Neural Networks on METR-LA.
                  </p>
                </div>
                <p className="text-slate-500 dark:text-[#E5E4E2]/70 text-[11px]">
                  Implemented with PyTorch, NetworkX, dynamic adjacency topologies, and time-series sensor windows.
                </p>
              </div>
            </div>

            {/* Verified Certifications Card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#1D1714] border border-[#E5E4E2] dark:border-[#3A2E26] backdrop-blur-xl shadow-sm dark:shadow-xl">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#E6E0F0]/50 dark:bg-[#E6E0F0]/15 text-[#6F4E37] dark:text-[#E6E0F0] border border-[#6F4E37]/20">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#6F4E37] dark:text-[#E6E0F0] font-semibold">
                      Verified Credentials
                    </span>
                    <h4 className="text-base font-bold text-slate-900 dark:text-[#FAF8F6] font-heading">
                      Coursera &amp; GDPR Certified
                    </h4>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-[#E6E0F0]/60 dark:bg-[#E6E0F0]/15 text-[#6F4E37] dark:text-[#E6E0F0] border border-[#6F4E37]/20 dark:border-[#E6E0F0]/30">
                  {personal.certifications.length} Verified
                </span>
              </div>

              <div className="space-y-2 text-xs text-slate-600 dark:text-[#E5E4E2] pl-11">
                {personal.certifications.map((cert) => (
                  <div
                    key={cert.title}
                    className="p-2.5 rounded-xl bg-slate-50 dark:bg-[#140F0D] border border-[#E5E4E2] dark:border-[#3A2E26]"
                  >
                    <div className="flex items-center justify-between gap-1 mb-0.5">
                      <span className="font-semibold text-slate-900 dark:text-[#FAF8F6] text-xs">
                        {cert.title}
                      </span>
                      <span className="text-[10px] font-mono text-[#6F4E37] dark:text-[#E6E0F0] font-medium shrink-0">
                        {cert.issuer}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 dark:text-[#E5E4E2]/70 leading-tight">
                      {cert.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
