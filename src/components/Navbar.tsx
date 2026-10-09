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
    { name: "Home", href: "#hero", id: "hero" },
    { name: "About", href: "#about", id: "about" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-[#0B1120]/90 backdrop-blur-md border-b border-slate-200 dark:border-[#263449] shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo: </> Portfolio */}
          <a
            href="#hero"
            className="flex items-center gap-2 text-xl font-bold tracking-tight text-slate-900 dark:text-[#F8FAFC] focus:outline-none rounded-lg p-1 font-heading"
          >
            <span className="text-blue-600 dark:text-[#22D3EE] font-mono text-2xl font-bold tracking-tighter">&lt;/&gt;</span>
            <span>Portfolio</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative py-1 text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "text-blue-600 dark:text-[#22D3EE] font-semibold"
                      : "text-slate-600 hover:text-slate-900 dark:text-[#A7B2C4] dark:hover:text-[#F8FAFC]"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 dark:bg-[#22D3EE] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Quick Actions, Theme Toggle & Socials */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={portfolioData.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 text-slate-600 hover:text-slate-900 dark:text-[#A7B2C4] dark:hover:text-[#F8FAFC] hover:bg-slate-100 dark:hover:bg-[#1E293B] rounded-xl transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={portfolioData.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 text-slate-600 hover:text-slate-900 dark:text-[#A7B2C4] dark:hover:text-[#F8FAFC] hover:bg-slate-100 dark:hover:bg-[#1E293B] rounded-xl transition-colors"
            >
              <Linkedin className="w-5 h-5 text-blue-600 dark:text-[#22D3EE]" />
            </a>
            <a
              href={`mailto:${portfolioData.social.email}`}
              aria-label="Send direct email"
              className="p-2 text-slate-600 hover:text-slate-900 dark:text-[#A7B2C4] dark:hover:text-[#F8FAFC] hover:bg-slate-100 dark:hover:bg-[#1E293B] rounded-xl transition-colors"
            >
              <Mail className="w-5 h-5 text-slate-700 dark:text-slate-200" />
            </a>

            {/* Interactive Theme Toggle Button */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={theme === "light" ? "Switch to Midnight Navy theme" : "Switch to Bright Light theme"}
              title={theme === "light" ? "Switch to Midnight Navy mode" : "Switch to Bright Light mode"}
              className="p-2 text-slate-600 hover:text-slate-900 dark:text-[#A7B2C4] dark:hover:text-[#F8FAFC] hover:bg-slate-100 dark:hover:bg-[#1E293B] border border-slate-200 dark:border-[#263449] rounded-xl transition-all shadow-sm flex items-center justify-center cursor-pointer ml-1"
            >
              {theme === "light" ? (
                <Moon className="w-4 h-4 text-slate-700 transition-transform duration-200 hover:-rotate-12" />
              ) : (
                <Sun className="w-4 h-4 text-[#22D3EE] transition-transform duration-200 hover:rotate-45" />
              )}
            </button>
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
