"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { IntroductionAnimation } from "@/components/IntroductionAnimation";
import {
  ArrowDown,
  Mail,
  MapPin,
  TrendingDown,
  GraduationCap,
  ShieldCheck,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import { Github, Linkedin } from "@/components/Icons";

export function Hero() {
  const { personal, social } = portfolioData;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Soft, Natural Ambient Atmosphere Glows */}
      <div className="ambient-glow-cyan top-1/4 left-1/4 w-[500px] h-[350px] -translate-x-1/2 -translate-y-1/2" />
      <div className="ambient-glow-indigo top-1/3 right-10 w-[450px] h-[350px]" />
      <div className="ambient-glow-emerald bottom-10 left-10 w-[400px] h-[250px]" />

      {/* Subtle Coordinate Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full">
        {/* Split Grid: Left Details + Right Introduction Motion Animation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Heading & Intro */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status & Location Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/60 backdrop-blur-md mb-6 hover:border-slate-500 transition-colors">
              <span className="flex h-2 w-2 relative shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs font-medium text-slate-300 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <span>{personal.location}</span>
                <span className="text-slate-600">•</span>
                <span className="text-slate-300 hidden sm:inline">University of Europe for Applied Sciences</span>
                <span className="text-slate-300 sm:hidden">UE Berlin</span>
              </span>
            </div>

            {/* Main Greeting */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-4">
              Hi, I&apos;m{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-sky-300">
                {personal.name}
              </span>
            </h1>

            {/* Headline */}
            <p className="text-xl sm:text-2xl font-semibold text-sky-300/90 mb-4 tracking-tight">
              {personal.headline}
            </p>

            {/* Introduction Paragraph */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mb-8 text-pretty">
              {personal.shortBio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 mb-8 w-full sm:w-auto">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-xl transition-all duration-200 shadow-lg shadow-sky-600/25 hover:shadow-sky-600/40 hover:-translate-y-0.5"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 rounded-xl transition-all duration-200 backdrop-blur-sm hover:-translate-y-0.5"
              >
                <span>About Me</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-slate-300 hover:text-white bg-transparent hover:bg-slate-900 border border-slate-800 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span>Contact</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 text-slate-400 mb-8">
              <a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900/70 border border-slate-800 hover:text-white hover:border-slate-700 hover:bg-slate-850 transition-all text-xs font-medium"
              >
                <Github className="w-3.5 h-3.5 text-white" />
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>

              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900/70 border border-slate-800 hover:text-white hover:border-sky-500/30 hover:bg-slate-850 transition-all text-xs font-medium"
              >
                <Linkedin className="w-3.5 h-3.5 text-[#0a66c2]" />
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>

              <a
                href={`mailto:${social.email}`}
                aria-label="Send direct email"
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900/70 border border-slate-800 hover:text-white hover:border-emerald-500/30 hover:bg-slate-850 transition-all text-xs font-medium"
              >
                <Mail className="w-3.5 h-3.5 text-emerald-400" />
                <span>Email</span>
              </a>
            </div>

            {/* Proof Badges Grid */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-slate-800/80">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
                  <TrendingDown className="w-3.5 h-3.5" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-white tracking-tight">18% Error Reduction</p>
                  <p className="text-[10px] text-slate-400">Master&apos;s Thesis • ST-GNN</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400 shrink-0">
                  <GraduationCap className="w-3.5 h-3.5" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-white tracking-tight">M.Sc. Data Science</p>
                  <p className="text-[10px] text-slate-400">UE Berlin</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 shrink-0">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-white tracking-tight">GDPR Certified</p>
                  <p className="text-[10px] text-slate-400">Privacy-First Data</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Introduction Motion Graphic Animation */}
          <div className="lg:col-span-5 w-full">
            <IntroductionAnimation />
          </div>
        </div>
      </div>
    </section>
  );
}
