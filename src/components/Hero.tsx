"use client";

import React from "react";
import Image from "next/image";
import { portfolioData } from "@/data/portfolioData";
import {
  ArrowDown,
  Mail,
  MapPin,
  TrendingDown,
  GraduationCap,
  ShieldCheck,
  ExternalLink,
  Bot,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { Github, Linkedin } from "@/components/Icons";

export function Hero() {
  const { personal, social } = portfolioData;

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-theme-page"
    >
      {/* Subtle modern ambient background lighting accents (no busy illustration) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-gradient-to-tr from-[#3B82F6]/10 via-[#22D3EE]/8 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[300px] bg-[#3B82F6]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[280px] bg-[#22D3EE]/6 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col">
        {/* Main Hero: André Rodrigues style bold editorial typography & natural profile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-12">
          {/* Left Column: Bold Editorial Typography Headline (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status / Location Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white dark:bg-[#111827] border border-slate-200 dark:border-[#263449] mb-8 hover:border-[#3B82F6]/50 transition-all shadow-sm">
              <span className="flex h-2.5 w-2.5 relative shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-xs font-mono font-medium text-slate-600 dark:text-[#A7B2C4] flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-blue-600 dark:text-[#22D3EE] shrink-0" />
                <span className="text-slate-900 dark:text-[#F8FAFC] font-semibold">{personal.location}</span>
                <span className="text-slate-300 dark:text-[#263449]">•</span>
                <span className="text-blue-600 dark:text-[#22D3EE]">Univ. of Europe for Applied Sciences (Aug 2026)</span>
              </span>
            </div>

            {/* André Rodrigues Style Bold Statement Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-bold tracking-tight text-slate-900 dark:text-[#F8FAFC] leading-[1.15] mb-6 font-heading">
              Hi, I&apos;m{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22D3EE] via-[#3B82F6] to-[#60A5FA]">
                {personal.name}
              </span>
              . An{" "}
              <span className="text-slate-900 dark:text-white font-extrabold">
                M.Sc. Data Science graduate
              </span>{" "}
              based in Germany.
            </h1>

            {/* Editorial Narrative */}
            <p className="text-lg sm:text-xl text-slate-600 dark:text-[#A7B2C4] font-normal leading-relaxed mb-6 font-sans">
              Transforming complex multi-dimensional data into{" "}
              <strong className="text-slate-900 dark:text-white font-semibold">
                predictive intelligence
              </strong>{" "}
              with deep learning,{" "}
              <strong className="text-slate-900 dark:text-white font-semibold">
                spatio-temporal graph neural networks
              </strong>
              , and scalable machine learning systems.
            </p>

            {/* Focus Domains Bar (Inspired by André Rodrigues) */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 py-3 border-y border-slate-200 dark:border-[#263449]/70 w-full mb-8 text-xs font-mono font-medium text-slate-500 dark:text-[#A7B2C4]">
              <span className="text-blue-600 dark:text-[#22D3EE] font-bold">FOCUS</span>
              <span className="text-slate-300 dark:text-[#263449]">•</span>
              <span>Machine Learning</span>
              <span className="text-slate-300 dark:text-[#263449]">•</span>
              <span>Spatio-Temporal GNNs</span>
              <span className="text-slate-300 dark:text-[#263449]">•</span>
              <span>Predictive Analytics</span>
              <span className="text-slate-300 dark:text-[#263449]">•</span>
              <span>Big Data Pipelines</span>
              <span className="text-slate-300 dark:text-[#263449]">•</span>
              <span>Data Governance</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              {/* Explore Projects */}
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-bold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-xl transition-all duration-200 shadow-lg shadow-[#2563EB]/25 hover:-translate-y-0.5"
              >
                <span>Explore Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              {/* AI Presenter Introduction Anchor */}
              <a
                href="#ai-presenter"
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold text-slate-800 dark:text-[#F8FAFC] bg-white dark:bg-[#111827] hover:bg-slate-50 dark:hover:bg-[#1E293B] border border-slate-200 dark:border-[#263449] hover:border-[#22D3EE]/50 rounded-xl transition-all duration-200 shadow-sm hover:-translate-y-0.5"
              >
                <Bot className="w-4 h-4 text-blue-600 dark:text-[#22D3EE]" />
                <span>AI Presenter Intro</span>
              </a>

              {/* Contact */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold text-slate-600 hover:text-slate-900 dark:text-[#A7B2C4] dark:hover:text-[#F8FAFC] bg-white dark:bg-[#111827] hover:bg-slate-50 dark:hover:bg-[#1E293B] border border-slate-200 dark:border-[#263449] rounded-xl transition-all duration-200 shadow-sm hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4 text-violet-600 dark:text-[#8B5CF6]" />
                <span>Contact</span>
              </a>
            </div>

            {/* Social Links Bar */}
            <div className="flex flex-wrap items-center gap-3 text-slate-600 dark:text-[#A7B2C4]">
              <a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-[#111827] border border-slate-200 dark:border-[#263449] hover:text-slate-900 dark:hover:text-[#F8FAFC] hover:border-blue-500/50 hover:bg-slate-50 dark:hover:bg-[#1E293B] transition-all text-xs font-medium shadow-sm"
              >
                <Github className="w-4 h-4 text-slate-800 dark:text-white" />
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>

              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-[#111827] border border-slate-200 dark:border-[#263449] hover:text-slate-900 dark:hover:text-[#F8FAFC] hover:border-blue-500/50 hover:bg-slate-50 dark:hover:bg-[#1E293B] transition-all text-xs font-medium shadow-sm"
              >
                <Linkedin className="w-4 h-4 text-[#0284C7] dark:text-[#22D3EE]" />
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>

              <a
                href={`mailto:${social.email}`}
                aria-label="Send direct email"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-[#111827] border border-slate-200 dark:border-[#263449] hover:text-slate-900 dark:hover:text-[#F8FAFC] hover:border-emerald-500/50 hover:bg-slate-50 dark:hover:bg-[#1E293B] transition-all text-xs font-medium shadow-sm"
              >
                <Mail className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
                <span>{social.email}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Natural Photographic Portrait Card (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-md rounded-3xl p-3 bg-white dark:bg-[#111827] border border-slate-200 dark:border-[#263449] shadow-2xl transition-all duration-300 hover:border-[#3B82F6]/50 group">
              {/* Photo Container */}
              <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-slate-900">
                <Image
                  src="/images/adarsh-natural-portrait.jpg"
                  alt="Adarsh - Natural Professional Portrait"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-cover object-center group-hover:scale-102 transition-transform duration-500"
                />
                {/* Subtle vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                {/* Status Overlay at Bottom of Photo */}
                <div className="absolute bottom-4 left-4 right-4 z-10 flex flex-col gap-1 text-white">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-mono font-semibold tracking-wide text-emerald-300 uppercase">
                      Open to Work • Germany
                    </span>
                  </div>
                  <p className="text-base font-bold font-heading text-[#F8FAFC]">
                    Mamidala Adarsh
                  </p>
                  <p className="text-xs text-slate-300">
                    M.Sc. Data Science Graduate (August 2026)
                  </p>
                </div>
              </div>

              {/* Verified Credential Badges beneath photo */}
              <div className="pt-3 px-2 flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-[#A7B2C4]">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 dark:text-[#22D3EE]" />
                  <span>4 Verified Certifications</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5 text-purple-500 dark:text-[#A78BFA]" />
                  <span>UE Alumni • Germany</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Proof Badges Grid (André Rodrigues style spacious proof cards) */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-slate-200 dark:border-[#263449]">
          <div className="flex items-center gap-3.5 p-4 rounded-xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-[#263449] text-left hover:border-emerald-500/40 transition-colors shadow-sm">
            <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0">
              <TrendingDown className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900 dark:text-[#F8FAFC] tracking-tight font-heading">
                18.4% Error Reduction
              </p>
              <p className="text-[11px] text-slate-500 dark:text-[#A7B2C4]">
                Master&apos;s Thesis • METR-LA Spatio-Temporal GNN
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-4 rounded-xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-[#263449] text-left hover:border-blue-500/40 transition-colors shadow-sm">
            <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-600 dark:text-[#22D3EE] shrink-0">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900 dark:text-[#F8FAFC] tracking-tight font-heading">
                M.Sc. Data Science
              </p>
              <p className="text-[11px] text-slate-500 dark:text-[#A7B2C4]">
                Completed August 2026 • UE Germany
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-4 rounded-xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-[#263449] text-left hover:border-purple-500/40 transition-colors shadow-sm">
            <div className="p-2.5 rounded-lg bg-purple-500/10 text-purple-600 dark:text-[#A78BFA] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900 dark:text-[#F8FAFC] tracking-tight font-heading">
                Coursera &amp; GDPR Certified
              </p>
              <p className="text-[11px] text-slate-500 dark:text-[#A7B2C4]">
                Verified SQL, Python, DS &amp; Privacy Law
              </p>
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="mt-10 flex flex-col items-center">
          <a
            href="#ai-presenter"
            className="group inline-flex flex-col items-center gap-1.5 text-[11px] font-mono tracking-widest uppercase text-slate-500 hover:text-blue-600 dark:text-[#A7B2C4] dark:hover:text-[#22D3EE] transition-colors"
          >
            <span>Scroll Down</span>
            <ArrowDown className="w-4 h-4 animate-bounce text-blue-600 dark:text-[#22D3EE]" />
          </a>
        </div>
      </div>
    </section>
  );
}
