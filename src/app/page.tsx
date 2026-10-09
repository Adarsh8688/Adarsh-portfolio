import React from "react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AIPresenterSection } from "@/components/AIPresenterSection";
import { AboutSection } from "@/components/AboutSection";
import { EducationSection } from "@/components/EducationSection";
import { ResearchLabSection } from "@/components/ResearchLabSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-theme-page text-theme-primary flex flex-col transition-colors duration-200">
      {/* Ambient Animation Illustration Atmosphere (inspired by Oorja Kapoor) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-10 dark:opacity-20 transition-opacity duration-300">
        <Image
          src="/images/hero-landscape.jpg"
          alt="Adarsh Portfolio Atmospheric Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[80%_center] filter blur-[2px] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F8FAFC]/85 to-[#F8FAFC] dark:via-[#0B1120]/85 dark:to-[#0B1120]" />
      </div>

      {/* Soft futuristic background lighting accents */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="radial-glow-cyan top-[-8%] left-[-8%] w-[45vw] h-[45vw]" />
        <div className="radial-glow-blue top-[35%] right-[-8%] w-[40vw] h-[40vw]" />
        <div className="radial-glow-violet bottom-[-8%] left-[20%] w-[35vw] h-[35vw]" />
      </div>

      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10 flex-1">
        {/* 1. Hero: Visually striking, large headline, Space Grotesk */}
        <Hero />

        {/* 2. AI-Generated Presenter Introduction: Animated persona with narration */}
        <AIPresenterSection />

        {/* 3. About Me: Professional journey & background */}
        <AboutSection />

        {/* 4. Education: M.Sc. Data Science, thesis focus & GDPR certification */}
        <EducationSection />

        {/* 5. Interactive Research Lab: Spatio-Temporal GNN thesis simulation */}
        <ResearchLabSection />

        {/* 6. Featured Projects: Stylish cards, neon-blue borders, verified repos */}
        <ProjectsSection />

        {/* 7. Skills: 5 verified technical stack categories */}
        <SkillsSection />

        {/* 8. Contact: Direct note composer & contact hub */}
        <ContactSection />
      </main>

      {/* 9. Footer */}
      <Footer />
    </div>
  );
}
