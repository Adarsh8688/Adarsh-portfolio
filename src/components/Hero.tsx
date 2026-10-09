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
} from "lucide-react";
import { Github, Linkedin } from "@/components/Icons";

export function Hero() {
  const { personal, social } = portfolioData;

  return (
    <section
      id="hero"
      className="relative min-h-[95vh] flex items-center justify-center pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Full-bleed Anime / Animation Artwork Background (inspired by Oorja Kapoor) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <Image
          src="/images/hero-landscape.jpg"
          alt="Adarsh - Data Science & AI Animation Landscape"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[78%_20%] sm:object-[80%_center] filter brightness-100 dark:brightness-95 transition-all duration-700"
        />
        {/* Soft bottom vignette transitioning into the page background */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#F8FAFC] via-[#F8FAFC]/25 to-transparent dark:from-[#0B1120] dark:via-[#0B1120]/35 dark:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/15 via-transparent to-transparent dark:from-[#0B1120]/40 dark:via-transparent dark:to-transparent" />
      </div>

      {/* Ambient Radial Lighting Accents */}
      <div className="radial-glow-cyan top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[320px] pointer-events-none" />
      <div className="radial-glow-blue top-1/3 right-10 w-[420px] h-[300px] pointer-events-none" />
      <div className="radial-glow-violet bottom-10 left-10 w-[380px] h-[260px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col">
        {/* Main Hero Grid: Left Content Column (6 cols) + Right Space for Character (6 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[60vh] mb-8">
          {/* Left Hero Narrative: Oorja Kapoor style typography with frosted glass */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-start text-left p-6 sm:p-8 rounded-3xl bg-white/80 dark:bg-[#0B1120]/80 backdrop-blur-xl border border-slate-200/80 dark:border-[#263449]/70 shadow-2xl">
            {/* Status / Location Badge with Pulse */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white dark:bg-[#111827] border border-slate-200 dark:border-[#263449] mb-6 hover:border-[#2563EB]/50 transition-all shadow-sm">
              <span className="flex h-2.5 w-2.5 relative shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 dark:bg-[#22D3EE] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600 dark:bg-[#22D3EE]" />
              </span>
              <span className="text-xs font-mono font-medium text-slate-600 dark:text-[#A7B2C4] flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-blue-600 dark:text-[#22D3EE] shrink-0" />
                <span className="text-slate-900 dark:text-[#F8FAFC] font-semibold">{personal.location}</span>
                <span className="text-slate-300 dark:text-[#263449]">•</span>
                <span className="text-blue-600 dark:text-[#22D3EE] font-sans">Univ. of Europe for Applied Sciences</span>
              </span>
            </div>

            {/* Name Heading with Space Grotesk */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-[#F8FAFC] mb-4 font-heading">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-700 to-blue-600 dark:from-[#F8FAFC] dark:via-slate-100 dark:to-[#22D3EE]">
                {personal.name}
              </span>
            </h1>

            {/* Large Headline highlighting Data Science, Machine Learning, and Artificial Intelligence */}
            <div className="mb-4">
              <p className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 dark:from-[#22D3EE] dark:via-[#3B82F6] dark:to-[#8B5CF6] font-heading">
                Data Science • Machine Learning • Artificial Intelligence
              </p>
              <p className="text-xs sm:text-sm font-mono text-slate-500 dark:text-[#A7B2C4] mt-1.5 tracking-wide uppercase">
                M.Sc. Data Science Graduate (August 2026) • Spatio-Temporal Modeling &amp; Big Data Systems
              </p>
            </div>

            {/* Concise Introduction */}
            <p className="text-sm sm:text-base text-slate-600 dark:text-[#A7B2C4] leading-relaxed mb-8 text-pretty">
              {personal.shortBio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              {/* AI Presenter Introduction Anchor */}
              <a
                href="#ai-presenter"
                className="inline-flex items-center gap-2.5 px-5 py-3 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#2563EB] to-[#0284C7] hover:from-[#1D4ED8] hover:to-[#0369A1] rounded-xl transition-all duration-200 shadow-md shadow-[#2563EB]/25 hover:-translate-y-0.5"
              >
                <Bot className="w-4 h-4 text-white" />
                <span>AI Presenter Intro</span>
              </a>

              {/* View Projects */}
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-4 py-3 text-xs sm:text-sm font-semibold text-slate-800 dark:text-[#F8FAFC] bg-white dark:bg-[#111827] hover:bg-slate-50 dark:hover:bg-[#1E293B] border border-slate-200 dark:border-[#263449] hover:border-blue-500/50 dark:hover:border-[#22D3EE]/50 rounded-xl transition-all duration-200 shadow-sm hover:-translate-y-0.5"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4 text-blue-600 dark:text-[#22D3EE]" />
              </a>

              {/* Education */}
              <a
                href="#education"
                className="inline-flex items-center gap-2 px-4 py-3 text-xs sm:text-sm font-semibold text-slate-800 dark:text-[#F8FAFC] bg-white dark:bg-[#111827] hover:bg-slate-50 dark:hover:bg-[#1E293B] border border-slate-200 dark:border-[#263449] hover:border-blue-500/50 dark:hover:border-[#2563EB]/50 rounded-xl transition-all duration-200 shadow-sm hover:-translate-y-0.5"
              >
                <GraduationCap className="w-4 h-4 text-blue-600 dark:text-[#3B82F6]" />
                <span>Education</span>
              </a>

              {/* Contact */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-3 text-xs sm:text-sm font-semibold text-slate-600 hover:text-slate-900 dark:text-[#A7B2C4] dark:hover:text-[#F8FAFC] bg-white dark:bg-[#111827] hover:bg-slate-50 dark:hover:bg-[#1E293B] border border-slate-200 dark:border-[#263449] rounded-xl transition-all duration-200 shadow-sm hover:-translate-y-0.5"
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
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white dark:bg-[#111827] border border-slate-200 dark:border-[#263449] hover:text-slate-900 dark:hover:text-[#F8FAFC] hover:border-blue-500/50 hover:bg-slate-50 dark:hover:bg-[#1E293B] transition-all text-xs font-medium shadow-sm"
              >
                <Github className="w-3.5 h-3.5 text-slate-800 dark:text-white" />
                <span>GitHub</span>
                <ExternalLink className="w-2.5 h-2.5 opacity-60" />
              </a>

              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white dark:bg-[#111827] border border-slate-200 dark:border-[#263449] hover:text-slate-900 dark:hover:text-[#F8FAFC] hover:border-blue-500/50 hover:bg-slate-50 dark:hover:bg-[#1E293B] transition-all text-xs font-medium shadow-sm"
              >
                <Linkedin className="w-3.5 h-3.5 text-[#0284C7] dark:text-[#22D3EE]" />
                <span>LinkedIn</span>
                <ExternalLink className="w-2.5 h-2.5 opacity-60" />
              </a>

              <a
                href={`mailto:${social.email}`}
                aria-label="Send direct email"
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white dark:bg-[#111827] border border-slate-200 dark:border-[#263449] hover:text-slate-900 dark:hover:text-[#F8FAFC] hover:border-emerald-500/50 hover:bg-slate-50 dark:hover:bg-[#1E293B] transition-all text-xs font-medium shadow-sm"
              >
                <Mail className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Right Column: Open space for the illustrated anime character Adarsh */}
          <div className="hidden lg:block lg:col-span-6 xl:col-span-6 h-full pointer-events-none" />
        </div>

        {/* Proof Badges Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-slate-200 dark:border-[#263449]">
          <div className="flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-[#263449] text-left hover:border-blue-500/40 transition-colors shadow-sm">
            <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0">
              <TrendingDown className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900 dark:text-[#F8FAFC] tracking-tight font-heading">18.4% Error Reduction</p>
              <p className="text-[11px] text-slate-500 dark:text-[#A7B2C4]">Master&apos;s Thesis • Spatio-Temporal GNN</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-[#263449] text-left hover:border-blue-500/40 transition-colors shadow-sm">
            <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-600 dark:text-[#22D3EE] shrink-0">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900 dark:text-[#F8FAFC] tracking-tight font-heading">M.Sc. Data Science</p>
              <p className="text-[11px] text-slate-500 dark:text-[#A7B2C4]">Completed Aug 2026 • UE Berlin</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 rounded-xl bg-white/90 dark:bg-[#111827]/90 border border-slate-200 dark:border-[#263449] text-left hover:border-blue-500/40 transition-colors shadow-sm backdrop-blur-md">
            <div className="p-2.5 rounded-lg bg-purple-500/10 text-purple-600 dark:text-[#A78BFA] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900 dark:text-[#F8FAFC] tracking-tight font-heading">Coursera & GDPR Certified</p>
              <p className="text-[11px] text-slate-500 dark:text-[#A7B2C4]">Verified SQL, Python & Data Science</p>
            </div>
          </div>
        </div>

        {/* Oorja Kapoor inspired Scroll Down Indicator */}
        <div className="mt-10 flex flex-col items-center">
          <a
            href="#ai-presenter"
            className="group inline-flex flex-col items-center gap-1.5 text-[11px] font-mono tracking-widest uppercase text-slate-600 hover:text-blue-600 dark:text-[#A7B2C4] dark:hover:text-[#22D3EE] transition-colors"
          >
            <span>Scroll Down</span>
            <ArrowDown className="w-4 h-4 animate-bounce text-blue-600 dark:text-[#22D3EE]" />
          </a>
        </div>
      </div>
    </section>
  );
}
