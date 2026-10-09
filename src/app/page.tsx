import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { VideoSection } from "@/components/VideoSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#080b11] text-slate-100 flex flex-col selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Background radial gradient layers */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="ambient-glow-blue top-[-10%] left-[-10%] w-[50vw] h-[50vw] opacity-70" />
        <div className="ambient-glow-violet top-[30%] right-[-10%] w-[45vw] h-[45vw] opacity-50" />
        <div className="ambient-glow-blue bottom-[-10%] left-[20%] w-[40vw] h-[40vw] opacity-40" />
      </div>

      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10 flex-1">
        {/* Section 1: Hero */}
        <Hero />

        {/* Section 2: AI Introduction Video */}
        <VideoSection />

        {/* Section 3: Featured Projects */}
        <ProjectsSection />

        {/* Section 4: Skills & Technical Stack */}
        <SkillsSection />

        {/* Section 5: About Me */}
        <AboutSection />

        {/* Section 6: Contact & Opportunities */}
        <ContactSection />
      </main>

      {/* Section 7: Footer */}
      <Footer />
    </div>
  );
}
