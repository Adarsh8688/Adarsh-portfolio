"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import {
  GraduationCap,
  ShieldCheck,
  MapPin,
  TrendingDown,
  BookOpen,
  Award,
  Calendar,
  CheckCircle2,
} from "lucide-react";

export function EducationSection() {
  const { personal } = portfolioData;

  const coursework = [
    "Spatio-Temporal Graph Neural Networks",
    "Deep Learning & Optimization",
    "Advanced Machine Learning & Statistics",
    "Big Data Architecture (PySpark & Kafka)",
    "Relational SQL & PostgreSQL Database Design",
    "Data Privacy & GDPR Governance",
  ];

  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111827] border border-[#263449] text-[#22D3EE] text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm shadow-black/30">
            <GraduationCap className="w-3.5 h-3.5 text-[#22D3EE]" />
            <span>Academic Qualifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F8FAFC] tracking-tight mb-4 font-heading">
            Education &amp; Certifications
          </h2>
          <p className="text-[#A7B2C4] text-base leading-relaxed">
            Formal postgraduate education in Berlin focusing on predictive machine learning, deep learning research, and compliance-first data engineering.
          </p>
        </div>

        {/* Education & Certification Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Degree Card */}
          <div className="lg:col-span-7 rounded-2xl bg-[#111827] border border-[#263449] p-7 shadow-xl shadow-black/40 backdrop-blur-xl relative overflow-hidden">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-[#2563EB]/15 border border-[#2563EB]/30 text-[#22D3EE]">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#22D3EE] font-semibold block">
                    Postgraduate Degree
                  </span>
                  <h3 className="text-xl font-bold text-[#F8FAFC] font-heading">
                    {personal.education.degree}
                  </h3>
                </div>
              </div>

              <span className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#2563EB]/15 text-[#22D3EE] border border-[#2563EB]/30 shrink-0">
                Current
              </span>
            </div>

            <div className="space-y-2 text-sm text-[#A7B2C4] pl-1 mb-6">
              <p className="font-semibold text-[#F8FAFC] text-base">
                {personal.education.institution}
              </p>
              <p className="text-[#A7B2C4] text-xs flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#22D3EE]" />
                <span>{personal.education.location}</span>
                <span className="text-[#263449]">•</span>
                <span>Focus: {personal.education.focus}</span>
              </p>
            </div>

            {/* Master's Thesis Focus Highlight */}
            <div className="p-4 rounded-xl bg-[#0B1120] border border-[#263449] mb-6">
              <div className="flex items-center gap-2 mb-1.5">
                <TrendingDown className="w-4 h-4 text-emerald-400" />
                <h4 className="text-xs font-bold text-[#F8FAFC] font-heading uppercase tracking-wider">
                  Master&apos;s Thesis Research Focus
                </h4>
              </div>
              <p className="text-xs text-[#A7B2C4] leading-relaxed mb-2">
                <strong>Short-Term Traffic Speed Forecasting using Spatio-Temporal Graph Neural Networks:</strong> Formulated dynamic graph convolution models on the benchmark METR-LA highway sensor network.
              </p>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                  MAE: 3.8 → 3.1 (-18.4% Error Reduction)
                </span>
              </div>
            </div>

            {/* Coursework Tags */}
            <div>
              <h4 className="text-xs font-bold text-[#F8FAFC] uppercase tracking-wider mb-2.5 flex items-center gap-1.5 font-heading">
                <BookOpen className="w-3.5 h-3.5 text-[#22D3EE]" />
                Core Postgraduate Curriculum
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {coursework.map((c) => (
                  <span
                    key={c}
                    className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#0B1120] border border-[#263449] text-[#A7B2C4]"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Formal Certification & Standards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Certification Card */}
            <div className="rounded-2xl bg-[#111827] border border-[#263449] p-7 shadow-xl shadow-black/40 backdrop-blur-xl relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-semibold block">
                    Verified Certification
                  </span>
                  <h3 className="text-lg font-bold text-[#F8FAFC] font-heading">
                    {personal.certifications[0].title}
                  </h3>
                </div>
              </div>

              <p className="text-xs text-[#A7B2C4] leading-relaxed mb-4">
                {personal.certifications[0].description}
              </p>

              <div className="space-y-2 pt-3 border-t border-[#263449] text-xs text-[#A7B2C4]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Privacy-by-Design Architecture Principles</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Data Protection Regulation &amp; Pseudonymization</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Compliance-Grade Pipeline Documentation</span>
                </div>
              </div>
            </div>

            {/* Academic Environment Context */}
            <div className="rounded-2xl bg-[#111827] border border-[#263449] p-6 shadow-xl shadow-black/40">
              <h4 className="text-xs font-bold text-[#F8FAFC] font-heading uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Award className="w-4 h-4 text-[#22D3EE]" />
                Academic Environment
              </h4>
              <p className="text-xs text-[#A7B2C4] leading-relaxed">
                The University of Europe for Applied Sciences in Berlin provides an applied research environment centered on real-world industry problem solving, modern algorithmic pipelines, and international collaboration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
