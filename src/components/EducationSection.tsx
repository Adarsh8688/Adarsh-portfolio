"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import {
  GraduationCap,
  ShieldCheck,
  MapPin,
  TrendingDown,
  BookOpen,
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-[#111827] border border-blue-200 dark:border-[#263449] text-blue-600 dark:text-[#22D3EE] text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <GraduationCap className="w-3.5 h-3.5 text-blue-600 dark:text-[#22D3EE]" />
            <span>Academic Qualifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-[#F8FAFC] tracking-tight mb-4 font-heading">
            Education &amp; Certifications
          </h2>
          <p className="text-slate-600 dark:text-[#A7B2C4] text-base leading-relaxed">
            Formal postgraduate education in Berlin focusing on predictive machine learning, deep learning research, and compliance-first data engineering.
          </p>
        </div>

        {/* Education & Certification Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Degree Card */}
          <div className="lg:col-span-7 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-[#263449] p-7 shadow-sm dark:shadow-xl backdrop-blur-xl relative overflow-hidden">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-[#22D3EE]">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-blue-600 dark:text-[#22D3EE] font-semibold block">
                    Postgraduate Degree
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-[#F8FAFC] font-heading">
                    {personal.education.degree}
                  </h3>
                </div>
              </div>

              <span className="px-2.5 py-1 rounded-md text-xs font-mono bg-blue-50 text-blue-600 dark:bg-[#2563EB]/15 dark:text-[#22D3EE] border border-blue-200 dark:border-[#2563EB]/30 shrink-0">
                Current
              </span>
            </div>

            <div className="space-y-2 text-sm text-slate-600 dark:text-[#A7B2C4] pl-1 mb-6">
              <p className="font-semibold text-slate-900 dark:text-[#F8FAFC] text-base">
                {personal.education.institution}
              </p>
              <p className="text-slate-600 dark:text-[#A7B2C4] text-xs flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-blue-600 dark:text-[#22D3EE]" />
                <span>{personal.education.location}</span>
                <span className="text-slate-300 dark:text-[#263449]">•</span>
                <span>Focus: {personal.education.focus}</span>
              </p>
            </div>

            {/* Master's Thesis Focus Highlight */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#0B1120] border border-slate-200 dark:border-[#263449] mb-6">
              <div className="flex items-center gap-2 mb-1.5">
                <TrendingDown className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
                <h4 className="text-xs font-bold text-slate-900 dark:text-[#F8FAFC] font-heading uppercase tracking-wider">
                  Master&apos;s Thesis Research Focus
                </h4>
              </div>
              <p className="text-xs text-slate-600 dark:text-[#A7B2C4] leading-relaxed mb-2">
                <strong>Short-Term Traffic Speed Forecasting using Spatio-Temporal Graph Neural Networks:</strong> Formulated dynamic graph convolution models on the benchmark METR-LA highway sensor network.
              </p>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border border-emerald-500/30">
                  MAE: 3.8 → 3.1 (-18.4% Error Reduction)
                </span>
              </div>
            </div>

            {/* Coursework Tags */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <BookOpen className="w-4 h-4 text-blue-600 dark:text-[#22D3EE]" />
                <span className="text-xs font-bold text-slate-900 dark:text-[#F8FAFC] uppercase tracking-wider font-heading">
                  Key Postgraduate Coursework
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {coursework.map((course) => (
                  <span
                    key={course}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-50 dark:bg-[#0B1120] border border-slate-200 dark:border-[#263449] text-slate-700 dark:text-[#A7B2C4] flex items-center gap-1.5"
                  >
                    <CheckCircle2 className="w-3 h-3 text-blue-600 dark:text-[#22D3EE]" />
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Certification & Timeline Card */}
          <div className="lg:col-span-5 space-y-6">
            {/* Verified Certifications Container */}
            <div className="rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-[#263449] p-6 shadow-sm dark:shadow-xl backdrop-blur-xl">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200 dark:border-[#263449]">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-[#22D3EE]">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-blue-600 dark:text-[#22D3EE] font-semibold block">
                      Professional Credentials
                    </span>
                    <h3 className="text-base font-bold text-slate-900 dark:text-[#F8FAFC] font-heading">
                      Verified Certifications
                    </h3>
                  </div>
                </div>

                <span className="px-2.5 py-1 rounded text-[11px] font-mono font-semibold bg-blue-50 dark:bg-[#2563EB]/15 text-blue-600 dark:text-[#22D3EE] border border-blue-200 dark:border-[#2563EB]/30">
                  {personal.certifications.length} Verified
                </span>
              </div>

              {/* List of all certifications */}
              <div className="space-y-3">
                {personal.certifications.map((cert) => (
                  <div
                    key={cert.title}
                    className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#0B1120] border border-slate-200 dark:border-[#263449] hover:border-blue-500/40 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <h4 className="text-xs font-bold text-slate-900 dark:text-[#F8FAFC] font-heading">
                          {cert.title}
                        </h4>
                      </div>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-white dark:bg-[#111827] text-blue-600 dark:text-[#22D3EE] border border-slate-200 dark:border-[#263449] shrink-0">
                        {cert.issuer}
                      </span>
                    </div>

                    <p className="text-[11px] text-slate-600 dark:text-[#A7B2C4] leading-relaxed mb-2 pl-5">
                      {cert.description}
                    </p>

                    {cert.skills && (
                      <div className="flex flex-wrap gap-1 pl-5">
                        {cert.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-white dark:bg-[#111827] text-slate-600 dark:text-[#A7B2C4] border border-slate-200/80 dark:border-[#263449]"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Academic Journey Timeline Overview */}
            <div className="rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-[#263449] p-6 shadow-sm dark:shadow-xl">
              <h4 className="text-xs font-bold text-slate-900 dark:text-[#F8FAFC] uppercase tracking-wider font-heading mb-4 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-blue-600 dark:text-[#22D3EE]" />
                <span>Academic &amp; Research Milestones</span>
              </h4>

              <div className="space-y-4 border-l-2 border-slate-200 dark:border-[#263449] pl-4 ml-2">
                <div>
                  <span className="text-[10px] font-mono text-blue-600 dark:text-[#22D3EE] block">Present</span>
                  <p className="text-xs font-bold text-slate-900 dark:text-[#F8FAFC]">Master of Science in Data Science</p>
                  <p className="text-[11px] text-slate-500 dark:text-[#A7B2C4]">Univ. of Europe for Applied Sciences, Berlin</p>
                </div>

                <div>
                  <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 block">Research Benchmark</span>
                  <p className="text-xs font-bold text-slate-900 dark:text-[#F8FAFC]">Spatio-Temporal GNN Thesis Formulation</p>
                  <p className="text-[11px] text-slate-500 dark:text-[#A7B2C4]">18.4% MAE reduction on METR-LA road sensors</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
