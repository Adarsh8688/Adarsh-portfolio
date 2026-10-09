"use client";

import React, { useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolioData";
import {
  Menu,
  X,
  Mail,
  ChevronRight,
  Sun,
  Moon,
} from "lucide-react";
import { Github, Linkedin } from "@/components/Icons";
import { useTheme } from "@/context/ThemeContext";

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = [
        "hero",
        "ai-presenter",
        "about",
        "education",
        "research-lab",
        "projects",
        "skills",
        "contact",
      ];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Overview", href: "#hero", id: "hero" },
    { name: "AI Presenter", href: "#ai-presenter", id: "ai-presenter" },
    { name: "About", href: "#about", id: "about" },
    { name: "Education", href: "#education", id: "education" },
    { name: "Research Lab", href: "#research-lab", id: "research-lab" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-[#0B1120]/90 backdrop-blur-md border-b border-slate-200 dark:border-[#263449] shadow-sm dark:shadow-lg dark:shadow-black/50 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            className="group flex items-center gap-2.5 text-lg font-bold tracking-tight text-slate-900 dark:text-[#F8FAFC] focus:outline-none focus:ring-2 focus:ring-[#22D3EE] rounded-lg p-1"
          >
            <div className="w-9 h-9 rounded-xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-[#263449] flex items-center justify-center text-slate-900 dark:text-[#F8FAFC] shadow-sm dark:shadow-md dark:shadow-black/30 group-hover:border-[#2563EB]/60 group-hover:scale-105 transition-all">
              <span className="font-mono text-base font-semibold text-blue-600 dark:text-[#22D3EE]">A</span>
            </div>
            <div className="flex flex-col">
              <span className="leading-tight flex items-center gap-1.5 font-heading text-slate-900 dark:text-[#F8FAFC]">
                {portfolioData.personal.name}
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              </span>
              <span className="text-[10px] text-slate-500 dark:text-[#A7B2C4] font-normal tracking-wide uppercase">
                Data Science • Berlin
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-white/90 dark:bg-[#111827]/90 border border-slate-200 dark:border-[#263449] rounded-full px-3 py-1.5 backdrop-blur-md shadow-sm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? "bg-blue-50 text-blue-600 border border-blue-200 dark:bg-[#1E293B] dark:text-[#22D3EE] dark:border-[#263449] font-semibold shadow-sm"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-[#A7B2C4] dark:hover:text-[#F8FAFC] dark:hover:bg-[#1E293B]/60"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Quick Actions, Theme Toggle & Socials */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Interactive Theme Toggle Button */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={theme === "light" ? "Switch to Midnight Navy theme" : "Switch to Bright Light theme"}
              title={theme === "light" ? "Switch to Midnight Navy mode" : "Switch to Bright Light mode"}
              className="p-2 text-slate-600 hover:text-slate-900 dark:text-[#A7B2C4] dark:hover:text-[#F8FAFC] bg-slate-100 hover:bg-slate-200 dark:bg-[#111827] dark:hover:bg-[#1E293B] border border-slate-200 dark:border-[#263449] rounded-xl transition-all shadow-sm flex items-center justify-center cursor-pointer"
            >
              {theme === "light" ? (
                <Moon className="w-4 h-4 text-slate-700 transition-transform duration-200 hover:-rotate-12" />
              ) : (
                <Sun className="w-4 h-4 text-[#22D3EE] transition-transform duration-200 hover:rotate-45" />
              )}
            </button>

            <a
              href={portfolioData.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 text-slate-600 hover:text-slate-900 dark:text-[#A7B2C4] dark:hover:text-[#F8FAFC] bg-slate-100 hover:bg-slate-200 dark:bg-[#111827] dark:hover:bg-[#1E293B] border border-slate-200 dark:border-[#263449] rounded-xl transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={portfolioData.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 text-slate-600 hover:text-slate-900 dark:text-[#A7B2C4] dark:hover:text-[#F8FAFC] bg-slate-100 hover:bg-slate-200 dark:bg-[#111827] dark:hover:bg-[#1E293B] border border-slate-200 dark:border-[#263449] rounded-xl transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-full transition-all duration-200 shadow-sm shadow-[#2563EB]/30 hover:shadow-[#2563EB]/50"
            >
              <span>Get in Touch</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu & Theme Controls */}
          <div className="flex md:hidden items-center gap-2">
            {/* Theme Toggle Button Mobile */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={theme === "light" ? "Switch to Midnight Navy theme" : "Switch to Bright Light theme"}
              className="p-2 text-slate-600 dark:text-[#A7B2C4] bg-slate-100 dark:bg-[#111827] border border-slate-200 dark:border-[#263449] rounded-lg transition-colors cursor-pointer"
            >
              {theme === "light" ? (
                <Moon className="w-4 h-4 text-slate-700" />
              ) : (
                <Sun className="w-4 h-4 text-[#22D3EE]" />
              )}
            </button>

            <a
              href="#contact"
              className="px-3 py-1.5 text-xs font-medium text-white bg-[#2563EB] rounded-full"
            >
              Contact
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 dark:text-[#A7B2C4] dark:hover:text-[#F8FAFC] bg-slate-100 dark:bg-[#111827] border border-slate-200 dark:border-[#263449] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#22D3EE]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-[#0B1120] border-b border-slate-200 dark:border-[#263449] backdrop-blur-xl px-4 pt-3 pb-6 animate-in slide-in-from-top-2 duration-200 shadow-lg">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? "bg-blue-50 text-blue-600 border-l-2 border-[#2563EB] dark:bg-[#111827] dark:text-[#22D3EE]"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-[#A7B2C4] dark:hover:bg-[#111827] dark:hover:text-[#F8FAFC]"
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="mt-4 pt-4 border-t border-slate-200 dark:border-[#263449] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <a
                href={portfolioData.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-600 hover:text-slate-900 dark:text-[#A7B2C4] dark:hover:text-[#F8FAFC] bg-slate-100 dark:bg-[#111827] rounded-lg border border-slate-200 dark:border-[#263449]"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={portfolioData.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-600 hover:text-slate-900 dark:text-[#A7B2C4] dark:hover:text-[#F8FAFC] bg-slate-100 dark:bg-[#111827] rounded-lg border border-slate-200 dark:border-[#263449]"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${portfolioData.social.email}`}
                className="p-2 text-slate-600 hover:text-slate-900 dark:text-[#A7B2C4] dark:hover:text-[#F8FAFC] bg-slate-100 dark:bg-[#111827] rounded-lg border border-slate-200 dark:border-[#263449]"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs font-mono font-medium text-blue-600 dark:text-[#22D3EE] hover:underline"
            >
              {portfolioData.social.email}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
