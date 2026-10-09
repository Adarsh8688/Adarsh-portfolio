"use client";

import React from "react";
import Image from "next/image";
import { portfolioData } from "@/data/portfolioData";
import {
  ArrowRight,
  Mail,
  MapPin,
  Target,
  ArrowDown,
  TrendingDown,
  GraduationCap,
  ShieldCheck,
} from "lucide-react";
import { Github, Linkedin } from "@/components/Icons";

export function Hero() {
  const { personal, social } = portfolioData;

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-theme-page"
    >
      {/* Soft atmospheric background glow accents */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-blue-400/10 via-indigo-400/10 to-purple-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[400px] h-[400px] bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col">
        {/* Main Hero: Recreated identically from user's reference image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-12">
          {/* Left Column: Headline, Subtitle, Description, CTA Buttons */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status Pill: 🔵 Open to Opportunities */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/40 text-blue-700 dark:text-[#22D3EE] text-xs font-semibold mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-[#22D3EE] shrink-0" />
              <span>Open to Opportunities</span>
            </div>

            {/* Main Headline: Hello, I’m Adarsh Mamidala */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-[#F8FAFC] leading-[1.12] mb-3 font-heading">
              Hello, I’m <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2563EB] via-[#3B82F6] to-[#7C3AED]">
                {personal.fullName || "Adarsh Mamidala"}
              </span>
            </h1>

            {/* Subtitle: Data Science | Machine Learning | Data Analytics */}
            <p className="text-xl sm:text-2xl font-bold text-slate-700 dark:text-slate-200 mb-4 font-heading">
              {personal.headline || "Data Science | Machine Learning | Data Analytics"}
            </p>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-[#A7B2C4] leading-relaxed mb-8 max-w-xl">
              Turning data into insights and building practical machine learning solutions.
            </p>

            {/* Action Buttons: [View Projects ->] [Contact Me ✉] */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-sm shadow-lg shadow-blue-500/25 transition-all hover:-translate-y-0.5"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white dark:bg-[#111827] hover:bg-slate-50 dark:hover:bg-[#1E293B] border border-blue-200 dark:border-[#263449] hover:border-blue-500 text-slate-800 dark:text-[#F8FAFC] font-semibold text-sm shadow-sm transition-all hover:-translate-y-0.5"
              >
                <span>Contact Me</span>
                <Mail className="w-4 h-4 text-blue-600 dark:text-[#22D3EE]" />
              </a>
            </div>

            {/* Career Target Roles (Requested by User) */}
            <div className="pt-6 border-t border-slate-200 dark:border-[#263449]/70 w-full">
              <p className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 dark:text-[#A7B2C4] mb-2.5">
                Target Roles:
              </p>
              <div className="flex flex-wrap gap-2">
                {personal.targetRoles?.map((role) => (
                  <span
                    key={role}
                    className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-[#111827] border border-slate-200 dark:border-[#263449] text-slate-700 dark:text-slate-300 hover:border-blue-500/40 transition-colors"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Signature Circular Portrait & Floating Glassmorphic Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative flex items-center justify-center">
              {/* Decorative Dot Matrix on Left Behind Avatar */}
              <div className="hidden sm:grid absolute -left-12 top-1/3 grid-cols-5 gap-2 opacity-35 pointer-events-none z-0">
                {Array.from({ length: 25 }).map((_, i) => (
                  <span key={i} className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                ))}
              </div>

              {/* Ambient Glow Aura */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-400/25 via-indigo-400/25 to-purple-400/25 blur-3xl scale-125 pointer-events-none" />

              {/* Orbital Ring Container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full flex items-center justify-center">
                {/* Orbital tech ring with satellite node */}
                <div className="absolute inset-[-14px] sm:inset-[-20px] rounded-full border border-blue-400/35 dark:border-blue-500/30 pointer-events-none">
                  <span className="absolute top-1/2 -right-2 w-3.5 h-3.5 rounded-full bg-blue-600 border-2 border-white dark:border-[#0B1120] shadow-md shadow-blue-500/70" />
                </div>

                {/* Circular Photo */}
                <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl border-4 border-white dark:border-[#111827] z-10">
                  <Image
                    src="/images/adarsh-real-photo.png"
                    alt="Adarsh Mamidala - Data Science & Machine Learning"
                    fill
                    priority
                    sizes="(max-width: 768px) 280px, 400px"
                    className="object-cover object-center"
                  />
                </div>
              </div>

              {/* Floating Glassmorphic Card (Target / GitHub / Based in Germany) */}
              <div className="absolute -right-2 sm:-right-6 lg:-right-8 bottom-0 sm:bottom-4 z-20 bg-white/95 dark:bg-[#111827]/95 backdrop-blur-xl border border-slate-200/90 dark:border-[#263449] rounded-2xl sm:rounded-3xl p-4 sm:p-5 shadow-2xl shadow-blue-900/10 flex flex-col gap-3 sm:gap-4 min-w-[195px] sm:min-w-[215px]">
                {/* Focus: Data Science */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-[#22D3EE] flex items-center justify-center shrink-0">
                    <Target className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-medium text-slate-400 dark:text-[#A7B2C4]">Focus</p>
                    <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-[#F8FAFC] font-heading">
                      Data Science
                    </p>
                  </div>
                </div>

                {/* Projects: GitHub */}
                <a
                  href={social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group/link hover:opacity-80 transition-opacity"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-[#22D3EE] flex items-center justify-center shrink-0">
                    <Github className="w-5 h-5 text-slate-800 dark:text-white" />
                  </div>
                  <div>
                    <p className="text-[11px] font-medium text-slate-400 dark:text-[#A7B2C4]">Projects</p>
                    <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-[#F8FAFC] font-heading group-hover/link:text-blue-600 dark:group-hover/link:text-[#22D3EE]">
                      GitHub
                    </p>
                  </div>
                </a>

                {/* Based in: Germany */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-50 dark:bg-cyan-950/60 text-cyan-600 dark:text-[#22D3EE] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-medium text-slate-400 dark:text-[#A7B2C4]">Based in</p>
                    <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-[#F8FAFC] font-heading">
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
        <div className="mt-8 flex flex-col items-center">
          <a
            href="#about"
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
