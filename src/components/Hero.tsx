"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { AIVideoPlayer } from "@/components/AIVideoPlayer";
import {
  ArrowDown,
  Mail,
  Sparkles,
  MapPin,
  TrendingDown,
  GraduationCap,
  ShieldCheck,
  ExternalLink,
} from "lucide-react";
import { Github, Linkedin } from "@/components/Icons";

export function Hero() {
  const { personal, social } = portfolioData;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Subtle Ambient Glows */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-600/15 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[350px] bg-violet-600/12 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[250px] bg-sky-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full">
        {/* Split Grid: Left Details + Right AI Video Introduction */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Heading & Intro */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status & Location Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md mb-6 hover:border-indigo-500/40 transition-colors">
              <span className="flex h-2 w-2 relative shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs font-medium text-slate-300 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                <span>{personal.location}</span>
                <span className="text-slate-600">•</span>
                <span className="text-indigo-300 hidden sm:inline">University of Europe for Applied Sciences</span>
                <span className="text-indigo-300 sm:hidden">UE Berlin</span>
              </span>
            </div>

            {/* Main Greeting */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-4">
              Hi, I&apos;m{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-200 to-indigo-400">
                {personal.name}
              </span>
            </h1>

            {/* Headline */}
            <p className="text-xl sm:text-2xl font-semibold text-indigo-300/95 mb-4 tracking-tight">
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
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl transition-all duration-200 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:-translate-y-0.5"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-slate-200 bg-white/[0.05] hover:bg-white/[0.09] border border-white/[0.1] rounded-xl transition-all duration-200 backdrop-blur-sm hover:-translate-y-0.5"
              >
                <span>About Me</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-slate-300 hover:text-white bg-transparent hover:bg-white/[0.05] border border-white/[0.08] rounded-xl transition-all duration-200 hover:-translate-y-0.5"
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
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.06] hover:text-white hover:border-white/[0.15] hover:bg-white/[0.06] transition-all text-xs font-medium"
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
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.06] hover:text-white hover:border-indigo-400/30 hover:bg-white/[0.06] transition-all text-xs font-medium"
              >
                <Linkedin className="w-3.5 h-3.5 text-[#0077b5]" />
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>

              <a
                href={`mailto:${social.email}`}
                aria-label="Send direct email"
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.06] hover:text-white hover:border-violet-400/30 hover:bg-white/[0.06] transition-all text-xs font-medium"
              >
                <Mail className="w-3.5 h-3.5 text-violet-400" />
                <span>Email</span>
              </a>
            </div>

            {/* Proof Badges Grid */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-white/[0.06]">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 shrink-0">
                  <TrendingDown className="w-3.5 h-3.5" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-white tracking-tight">18% MAE Error Reduction</p>
                  <p className="text-[10px] text-slate-400">Master&apos;s Thesis • ST-GNN</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <div className="p-2 rounded-lg bg-violet-500/10 text-violet-400 shrink-0">
                  <GraduationCap className="w-3.5 h-3.5" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-white tracking-tight">M.Sc. Data Science</p>
                  <p className="text-[10px] text-slate-400">UE Berlin</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-white tracking-tight">GDPR Fundamentals</p>
                  <p className="text-[10px] text-slate-400">Certified Compliance</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: AI Video Introduction Player */}
          <div className="lg:col-span-5 w-full">
            <AIVideoPlayer />
          </div>
        </div>
      </div>
    </section>
  );
}
