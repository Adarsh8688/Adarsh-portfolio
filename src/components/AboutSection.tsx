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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111827] border border-[#263449] text-[#22D3EE] text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm shadow-black/30">
            <User className="w-3.5 h-3.5 text-[#22D3EE]" />
            <span>Background & Academic Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F8FAFC] mb-4 font-heading">
            About Adarsh
          </h2>
          <p className="text-[#A7B2C4] text-base leading-relaxed">
            Data Science postgraduate based in Berlin, bridging mathematical modeling with production-grade data engineering.
          </p>
        </div>

        {/* Two Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-8 rounded-2xl bg-[#111827] border border-[#263449] backdrop-blur-xl shadow-xl shadow-black/40">
              <h3 className="text-xl font-bold text-[#F8FAFC] mb-4 flex items-center gap-2.5 font-heading">
                <Compass className="w-5 h-5 text-[#22D3EE]" />
                <span>Professional Focus & Data Philosophy</span>
              </h3>

              <div className="space-y-4 text-sm text-[#A7B2C4] leading-relaxed">
                {personal.longBio.map((paragraph, index) => (
                  <p key={index} className="text-pretty">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Status Banner */}
              <div className="mt-6 p-4 rounded-xl bg-[#0B1120] border border-[#263449] flex items-start gap-3">
                <Briefcase className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-xs font-semibold text-[#F8FAFC] mb-1 font-heading">
                    Current Availability
                  </h4>
                  <p className="text-xs text-[#A7B2C4]">
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
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#111827] hover:bg-[#1E293B] border border-[#263449] hover:border-[#2563EB]/50 text-xs font-semibold text-[#A7B2C4] hover:text-[#F8FAFC] transition-colors"
              >
                <Github className="w-4 h-4 text-white" />
                <span>Follow on GitHub</span>
              </a>

              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#111827] hover:bg-[#1E293B] border border-[#263449] hover:border-[#22D3EE]/50 text-xs font-semibold text-[#A7B2C4] hover:text-[#F8FAFC] transition-colors"
              >
                <Linkedin className="w-4 h-4 text-[#22D3EE]" />
                <span>Connect on LinkedIn</span>
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-xs font-semibold text-white transition-colors shadow-sm shadow-[#2563EB]/30"
              >
                <TrendingDown className="w-4 h-4" />
                <span>View Thesis Research</span>
              </a>
            </div>
          </div>

          {/* Cards & Credentials Column */}
          <div className="lg:col-span-5 space-y-4">
            {/* Education Card */}
            <div className="p-6 rounded-2xl bg-[#111827] border border-[#263449] backdrop-blur-xl shadow-xl shadow-black/40">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-[#2563EB]/15 text-[#22D3EE] border border-[#2563EB]/30">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#22D3EE] font-semibold">
                    Postgraduate Education
                  </span>
                  <h4 className="text-base font-bold text-[#F8FAFC] font-heading">
                    {personal.education.degree}
                  </h4>
                </div>
              </div>

              <div className="space-y-1.5 text-xs text-[#A7B2C4] pl-11">
                <p className="font-semibold text-[#F8FAFC]">
                  {personal.education.institution}
                </p>
                <p className="text-[#A7B2C4] flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#22D3EE]" />
                  {personal.education.location}
                </p>
                <p className="text-[#A7B2C4] pt-1">
                  <span className="font-semibold text-[#F8FAFC]">Specialization:</span> {personal.education.focus}
                </p>
              </div>
            </div>

            {/* Master's Thesis Achievement Card */}
            <div className="p-6 rounded-2xl bg-[#111827] border border-[#263449] shadow-xl shadow-black/40">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  <TrendingDown className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-semibold">
                    Key Research Benchmark
                  </span>
                  <h4 className="text-base font-bold text-[#F8FAFC] font-heading">
                    Traffic Speed Forecasting (GNN)
                  </h4>
                </div>
              </div>

              <div className="space-y-2 text-xs text-[#A7B2C4] pl-11">
                <div className="p-2.5 rounded-lg bg-[#0B1120] border border-[#263449]">
                  <p className="text-emerald-400 font-semibold text-sm mb-0.5">
                    18.4% Error Reduction
                  </p>
                  <p className="text-[#A7B2C4] text-[11px]">
                    Reduced MAE from 3.8 to 3.1 using Spatio-Temporal Graph Neural Networks on METR-LA.
                  </p>
                </div>
                <p className="text-[#A7B2C4] text-[11px]">
                  Implemented with PyTorch, NetworkX, dynamic adjacency topologies, and time-series sensor windows.
                </p>
              </div>
            </div>

            {/* Certification Card */}
            <div className="p-6 rounded-2xl bg-[#111827] border border-[#263449] backdrop-blur-xl shadow-xl shadow-black/40">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-[#8B5CF6]/15 text-[#A78BFA] border border-[#8B5CF6]/30">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#A78BFA] font-semibold">
                    Verified Certification
                  </span>
                  <h4 className="text-base font-bold text-[#F8FAFC] font-heading">
                    {personal.certifications[0].title}
                  </h4>
                </div>
              </div>

              <div className="space-y-1.5 text-xs text-[#A7B2C4] pl-11">
                <p className="font-medium text-[#F8FAFC]">
                  {personal.certifications[0].issuer}
                </p>
                <p className="text-[#A7B2C4]">
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
