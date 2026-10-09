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
      {/* Soft, low-opacity blue and violet radial gradients */}
      <div className="radial-glow-cyan top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[320px] opacity-25" />
      <div className="radial-glow-blue top-1/3 right-10 w-[420px] h-[300px] opacity-20" />
      <div className="radial-glow-violet bottom-10 left-10 w-[380px] h-[260px] opacity-20" />

      <div className="max-w-5xl mx-auto w-full text-center relative z-10 flex flex-col items-center">
        {/* Status / Location Badge with Pulse */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#111827] border border-[#263449] backdrop-blur-md mb-8 hover:border-[#2563EB]/50 transition-all shadow-md shadow-black/30">
          <span className="flex h-2.5 w-2.5 relative shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22D3EE] opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#22D3EE]" />
          </span>
          <span className="text-xs font-mono font-medium text-[#A7B2C4] flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#22D3EE] shrink-0" />
            <span className="text-[#F8FAFC] font-semibold">{personal.location}</span>
            <span className="text-[#263449]">•</span>
            <span className="text-[#22D3EE] hidden sm:inline font-sans">University of Europe for Applied Sciences</span>
            <span className="text-[#22D3EE] sm:hidden">UE Berlin</span>
          </span>
        </div>

        {/* Name Heading with Space Grotesk */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight text-[#F8FAFC] mb-6 font-heading">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F8FAFC] via-slate-100 to-[#22D3EE]">
            {personal.name}
          </span>
        </h1>

        {/* Large Headline highlighting Data Science, Machine Learning, and Artificial Intelligence */}
        <div className="mb-6 max-w-4xl">
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#22D3EE] via-[#3B82F6] to-[#8B5CF6] font-heading">
            Data Science • Machine Learning • Artificial Intelligence
          </p>
          <p className="text-xs sm:text-sm font-mono text-[#A7B2C4] mt-2 tracking-wide uppercase">
            M.Sc. Postgraduate • Spatio-Temporal Modeling &amp; Big Data Systems
          </p>
        </div>

        {/* Concise Introduction */}
        <p className="text-sm sm:text-base md:text-lg text-[#A7B2C4] leading-relaxed max-w-2xl mx-auto mb-10 text-pretty">
          {personal.shortBio}
        </p>

        {/* Elegant Interactive Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mb-12">
          {/* AI Presenter Introduction Anchor */}
          <a
            href="#ai-presenter"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#2563EB] to-[#0284C7] hover:from-[#1D4ED8] hover:to-[#0369A1] border border-[#2563EB]/40 rounded-xl transition-all duration-200 shadow-lg shadow-[#2563EB]/25 hover:-translate-y-0.5"
          >
            <Bot className="w-4 h-4 text-white" />
            <span>AI Presenter Intro</span>
          </a>

          {/* View Projects */}
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-3.5 text-xs sm:text-sm font-semibold text-[#F8FAFC] bg-[#111827] hover:bg-[#1E293B] border border-[#263449] hover:border-[#22D3EE]/50 rounded-xl transition-all duration-200 backdrop-blur-sm shadow-md hover:-translate-y-0.5"
          >
            <span>View Projects</span>
            <ArrowDown className="w-4 h-4 text-[#22D3EE]" />
          </a>

          {/* Education */}
          <a
            href="#education"
            className="inline-flex items-center gap-2 px-5 py-3.5 text-xs sm:text-sm font-semibold text-[#F8FAFC] bg-[#111827] hover:bg-[#1E293B] border border-[#263449] hover:border-[#2563EB]/50 rounded-xl transition-all duration-200 backdrop-blur-sm hover:-translate-y-0.5"
          >
            <GraduationCap className="w-4 h-4 text-[#3B82F6]" />
            <span>Education</span>
          </a>

          {/* Contact */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-3.5 text-xs sm:text-sm font-semibold text-[#A7B2C4] hover:text-[#F8FAFC] bg-[#111827] hover:bg-[#1E293B] border border-[#263449] rounded-xl transition-all duration-200 hover:-translate-y-0.5"
          >
            <Mail className="w-4 h-4 text-[#8B5CF6]" />
            <span>Contact</span>
          </a>
        </div>

        {/* Social Links Bar */}
        <div className="flex items-center justify-center gap-3 text-[#A7B2C4] mb-12">
          <a
            href={social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#111827] border border-[#263449] hover:text-[#F8FAFC] hover:border-[#2563EB]/50 hover:bg-[#1E293B] transition-all text-xs font-medium"
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
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#111827] border border-[#263449] hover:text-[#F8FAFC] hover:border-[#22D3EE]/50 hover:bg-[#1E293B] transition-all text-xs font-medium"
          >
            <Linkedin className="w-4 h-4 text-[#22D3EE]" />
            <span>LinkedIn</span>
            <ExternalLink className="w-3 h-3 opacity-60" />
          </a>

          <a
            href={`mailto:${social.email}`}
            aria-label="Send direct email"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#111827] border border-[#263449] hover:text-[#F8FAFC] hover:border-emerald-500/50 hover:bg-[#1E293B] transition-all text-xs font-medium"
          >
            <Mail className="w-4 h-4 text-emerald-400" />
            <span>Email</span>
          </a>
        </div>

        {/* Proof Badges Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-[#263449]">
          <div className="flex items-center gap-3 p-4 rounded-xl bg-[#111827] border border-[#263449] text-left hover:border-[#2563EB]/40 transition-colors">
            <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
              <TrendingDown className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-[#F8FAFC] tracking-tight font-heading">18.4% Error Reduction</p>
              <p className="text-[11px] text-[#A7B2C4]">Master&apos;s Thesis • Spatio-Temporal GNN</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 rounded-xl bg-[#111827] border border-[#263449] text-left hover:border-[#2563EB]/40 transition-colors">
            <div className="p-2.5 rounded-lg bg-[#2563EB]/15 text-[#22D3EE] shrink-0">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-[#F8FAFC] tracking-tight font-heading">M.Sc. Data Science</p>
              <p className="text-[11px] text-[#A7B2C4]">Univ. of Europe for Applied Sciences</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 rounded-xl bg-[#111827] border border-[#263449] text-left hover:border-[#2563EB]/40 transition-colors">
            <div className="p-2.5 rounded-lg bg-[#8B5CF6]/15 text-[#A78BFA] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-[#F8FAFC] tracking-tight font-heading">GDPR Certified</p>
              <p className="text-[11px] text-[#A7B2C4]">Privacy-First Data Architecture</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
