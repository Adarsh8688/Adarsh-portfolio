"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import {
  ArrowDown,
  Mail,
  MapPin,
  TrendingDown,
  GraduationCap,
  ShieldCheck,
  ExternalLink,
  Sparkles,
  Bot,
  Binary,
  Cpu,
  Layers,
} from "lucide-react";
import { Github, Linkedin } from "@/components/Icons";

export function Hero() {
  const { personal, social } = portfolioData;

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Soft Futuristic Glowing Background Orbs */}
      <div className="glow-orb-cyan top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[400px]" />
      <div className="glow-orb-electric top-1/3 right-10 w-[500px] h-[350px]" />
      <div className="glow-orb-violet bottom-10 left-10 w-[450px] h-[300px]" />

      {/* Coordinate Grid Texture */}
      <div className="absolute inset-0 bg-ai-grid opacity-20 pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto w-full text-center relative z-10 flex flex-col items-center">
        {/* Status / Location Badge with Pulse */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-950/80 border border-cyan-500/30 backdrop-blur-md mb-8 hover:border-cyan-400/50 transition-all shadow-lg shadow-cyan-950/40">
          <span className="flex h-2.5 w-2.5 relative shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400" />
          </span>
          <span className="text-xs font-mono font-medium text-slate-300 flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <span className="text-white font-semibold">{personal.location}</span>
            <span className="text-slate-600">•</span>
            <span className="text-cyan-300 hidden sm:inline font-sans">University of Europe for Applied Sciences</span>
            <span className="text-cyan-300 sm:hidden">UE Berlin</span>
          </span>
        </div>

        {/* Name Heading with Space Grotesk */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight text-white mb-6 font-heading">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-100 to-cyan-400">
            {personal.name}
          </span>
        </h1>

        {/* Large Headline highlighting Data Science, Machine Learning, and Artificial Intelligence */}
        <div className="mb-6 max-w-4xl">
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 font-heading">
            Data Science • Machine Learning • Artificial Intelligence
          </p>
          <p className="text-xs sm:text-sm font-mono text-cyan-300/80 mt-2 tracking-wide uppercase">
            M.Sc. Postgraduate • Spatio-Temporal Modeling &amp; Big Data Systems
          </p>
        </div>

        {/* Concise Introduction */}
        <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10 text-pretty">
          {personal.shortBio}
        </p>

        {/* Elegant Interactive Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mb-12">
          {/* AI Presenter Introduction Anchor */}
          <a
            href="#ai-presenter"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-white rounded-xl transition-all duration-200 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 hover:-translate-y-0.5"
          >
            <Bot className="w-4 h-4 text-slate-950" />
            <span>AI Presenter Intro</span>
          </a>

          {/* View Projects */}
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-3.5 text-xs sm:text-sm font-semibold text-white bg-slate-900/90 hover:bg-slate-800 border border-cyan-500/30 hover:border-cyan-400/60 rounded-xl transition-all duration-200 backdrop-blur-sm shadow-md hover:-translate-y-0.5"
          >
            <span>View Projects</span>
            <ArrowDown className="w-4 h-4 text-cyan-400" />
          </a>

          {/* Education */}
          <a
            href="#education"
            className="inline-flex items-center gap-2 px-5 py-3.5 text-xs sm:text-sm font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-500 rounded-xl transition-all duration-200 backdrop-blur-sm hover:-translate-y-0.5"
          >
            <GraduationCap className="w-4 h-4 text-blue-400" />
            <span>Education</span>
          </a>

          {/* Contact */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-3.5 text-xs sm:text-sm font-semibold text-slate-300 hover:text-white bg-transparent hover:bg-slate-900 border border-slate-800 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
          >
            <Mail className="w-4 h-4 text-violet-400" />
            <span>Contact</span>
          </a>
        </div>

        {/* Social Links Bar */}
        <div className="flex items-center justify-center gap-3 text-slate-400 mb-12">
          <a
            href={social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-950/70 border border-slate-800 hover:text-white hover:border-cyan-500/40 hover:bg-slate-900 transition-all text-xs font-medium"
          >
            <Github className="w-4 h-4 text-white" />
            <span>GitHub</span>
            <ExternalLink className="w-3 h-3 opacity-60" />
          </a>

          <a
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-950/70 border border-slate-800 hover:text-white hover:border-cyan-500/40 hover:bg-slate-900 transition-all text-xs font-medium"
          >
            <Linkedin className="w-4 h-4 text-[#00f0ff]" />
            <span>LinkedIn</span>
            <ExternalLink className="w-3 h-3 opacity-60" />
          </a>

          <a
            href={`mailto:${social.email}`}
            aria-label="Send direct email"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-950/70 border border-slate-800 hover:text-white hover:border-emerald-500/40 hover:bg-slate-900 transition-all text-xs font-medium"
          >
            <Mail className="w-4 h-4 text-emerald-400" />
            <span>Email</span>
          </a>
        </div>

        {/* Futuristic Proof Badges Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-slate-800/80">
          <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 text-left hover:border-cyan-500/30 transition-colors">
            <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
              <TrendingDown className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-white tracking-tight font-heading">18.4% Error Reduction</p>
              <p className="text-[11px] text-slate-400">Master&apos;s Thesis • Spatio-Temporal GNN</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 text-left hover:border-cyan-500/30 transition-colors">
            <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-white tracking-tight font-heading">M.Sc. Data Science</p>
              <p className="text-[11px] text-slate-400">Univ. of Europe for Applied Sciences</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 text-left hover:border-cyan-500/30 transition-colors">
            <div className="p-2.5 rounded-lg bg-violet-500/10 text-violet-400 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-white tracking-tight font-heading">GDPR Certified</p>
              <p className="text-[11px] text-slate-400">Privacy-First Data Architecture</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
