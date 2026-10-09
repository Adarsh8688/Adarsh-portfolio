"use client";

import React from "react";
import Image from "next/image";
import { portfolioData } from "@/data/portfolioData";
import {
  ArrowDown,
  ArrowRight,
  Mail,
  MapPin,
  TrendingDown,
  GraduationCap,
  ShieldCheck,
  Target,
} from "lucide-react";
import { Github } from "@/components/Icons";

export function Hero() {
  const { personal, social } = portfolioData;

  const targetRoles = personal.targetRoles || [
    "Junior Data Analyst",
    "Junior Business Intelligence Analyst",
    "Junior Data Scientist",
    "Machine Learning Intern",
    "Data Science Intern",
    "Working Student — Data Analytics",
    "Junior Power BI Analyst",
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 sm:pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-theme-page"
    >
      {/* Subtle modern ambient background lighting accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-gradient-to-tr from-[#3B82F6]/12 via-[#22D3EE]/8 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[300px] bg-[#3B82F6]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[280px] bg-[#22D3EE]/6 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col">
        {/* Main Hero: Layout matching uploaded reference */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-12">
          {/* Left Column: Headline, Bio, Action Buttons & Target Roles (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Bold Headline: Hello, I'm Adarsh Mamidala */}
            <h1 className="text-4xl sm:text-6xl lg:text-[62px] font-extrabold tracking-tight leading-[1.1] mb-2 font-heading">
              <span className="block text-slate-900 dark:text-white">
                Hello, I&apos;m
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] via-[#60A5FA] to-[#A855F7]">
                Adarsh Mamidala
              </span>
            </h1>

            {/* Professional Headline */}
            <h2 className="text-lg sm:text-2xl font-bold text-slate-900 dark:text-white mt-2 mb-3 font-heading">
              Data Science | Machine Learning | Data Analytics
            </h2>

            {/* Concise Mission / Bio */}
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 font-normal leading-relaxed mb-8 max-w-xl">
              Turning data into insights and building practical machine learning solutions.
            </p>

            {/* Action Buttons: View Projects & Contact Me */}
            <div className="flex flex-wrap items-center gap-3.5 mb-2">
              {/* Primary View Projects */}
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-xl shadow-lg shadow-[#2563EB]/25 hover:shadow-[#2563EB]/40 transition-all hover:-translate-y-0.5"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 ml-0.5" />
              </a>

              {/* Secondary Contact Me */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-slate-800 dark:text-white bg-white dark:bg-[#111827]/90 hover:bg-slate-50 dark:hover:bg-[#1E293B] border border-slate-200 dark:border-slate-700/80 rounded-xl transition-all hover:-translate-y-0.5 shadow-sm"
              >
                <span>Contact Me</span>
                <Mail className="w-4 h-4 ml-0.5 text-blue-600 dark:text-cyan-400" />
              </a>
            </div>

            {/* Target Roles Pills */}
            <div className="mt-8 pt-2 w-full">
              <span className="text-[11px] font-mono tracking-widest uppercase text-slate-500 dark:text-slate-400 font-bold block mb-3">
                TARGET ROLES:
              </span>
              <div className="flex flex-wrap gap-2">
                {targetRoles.map((role) => (
                  <span
                    key={role}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white dark:bg-[#111827]/90 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors shadow-sm"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Circular Portrait & Overlapping Glassmorphic Info Card (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end mt-4 lg:mt-0">
            <div className="relative flex items-center justify-center">
              {/* Decorative Dot Matrix on Left Behind Avatar */}
              <div className="hidden sm:grid absolute -left-8 sm:-left-12 top-1/3 grid-cols-4 gap-2 opacity-35 pointer-events-none z-0">
                {Array.from({ length: 24 }).map((_, i) => (
                  <span key={i} className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                ))}
              </div>

              {/* Ambient Glow Aura */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 via-indigo-500/15 to-purple-500/15 blur-3xl scale-125 pointer-events-none" />

              {/* Orbital Ring Container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full flex items-center justify-center">
                {/* Thin outer orbital ring */}
                <div className="absolute -inset-3.5 sm:-inset-4 rounded-full border border-blue-400/35 dark:border-blue-500/30 pointer-events-none" />

                {/* Circular Portrait Photo */}
                <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl border-4 border-white dark:border-[#0B1120] ring-1 ring-blue-500/20 z-10">
                  <Image
                    src="/images/adarsh.png"
                    alt="Adarsh Mamidala - Data Science & Machine Learning"
                    fill
                    priority
                    sizes="(max-width: 768px) 280px, 400px"
                    className="object-cover object-center"
                  />
                </div>
              </div>

              {/* Floating Overlapping Card (Focus / Projects / Based in) */}
              <div className="absolute -right-2 sm:-right-4 lg:-right-6 bottom-0 sm:bottom-4 z-20 bg-white/95 dark:bg-[#0F172A]/95 backdrop-blur-xl border border-slate-200 dark:border-slate-700/80 rounded-2xl p-4 sm:p-5 shadow-2xl shadow-blue-950/20 flex flex-col gap-3.5 min-w-[195px] sm:min-w-[210px]">
                {/* Focus: Data Science */}
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/80 border border-blue-200 dark:border-blue-800/50 text-blue-600 dark:text-cyan-400 flex items-center justify-center shrink-0">
                    <Target className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-medium text-slate-400 dark:text-slate-400 uppercase tracking-wider">Focus</p>
                    <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white font-heading">
                      Data Science
                    </p>
                  </div>
                </div>

                {/* Projects: GitHub */}
                <a
                  href={social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group/link hover:opacity-90 transition-opacity"
                >
                  <div className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700/70 text-slate-800 dark:text-white flex items-center justify-center shrink-0 group-hover/link:border-blue-500/60">
                    <Github className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-medium text-slate-400 dark:text-slate-400 uppercase tracking-wider">Projects</p>
                    <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white font-heading group-hover/link:text-blue-600 dark:group-hover/link:text-cyan-400 transition-colors">
                      GitHub
                    </p>
                  </div>
                </a>

                {/* Based in: Germany */}
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-cyan-50 dark:bg-cyan-950/80 border border-cyan-200 dark:border-cyan-800/50 text-cyan-600 dark:text-cyan-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-medium text-slate-400 dark:text-slate-400 uppercase tracking-wider">Based in</p>
                    <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white font-heading">
                      {personal.location || "Germany"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Proof Badges Grid (18.4% Thesis, M.Sc. Data Science, Coursera & GDPR) */}
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
