"use client";

import React, { useState } from "react";
import { portfolioData, Project } from "@/data/portfolioData";
import {
  ExternalLink,
  Layers,
  TrendingDown,
  Search,
  CheckCircle2,
  Filter,
  ArrowUpRight,
  Globe,
  X,
} from "lucide-react";
import { Github } from "@/components/Icons";

export function ProjectsSection() {
  const { projects } = portfolioData;

  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ["All", "Machine Learning", "Data Analytics", "Data Engineering", "Business Analytics"];

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      selectedCategory === "All" || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111827] border border-[#263449] text-[#22D3EE] text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm shadow-black/30">
              <Layers className="w-3.5 h-3.5" />
              <span>Public GitHub Repositories</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F8FAFC] mb-4 font-heading">
              Featured Data Science & ML Projects
            </h2>
            <p className="text-[#A7B2C4] text-base leading-relaxed">
              Curated from verified public repositories, prioritizing deep learning research on Spatio-Temporal Graph Neural Networks, end-to-end analytics pipelines, and interactive deployment tools.
            </p>
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="w-4 h-4 text-[#A7B2C4] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search tech or project..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#111827] border border-[#263449] rounded-xl pl-9 pr-3 py-2.5 text-xs text-[#F8FAFC] placeholder-[#A7B2C4]/60 focus:outline-none focus:ring-1 focus:ring-[#22D3EE] transition-colors"
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 overflow-x-auto">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 whitespace-nowrap ${
                selectedCategory === category
                  ? "bg-[#2563EB] text-white shadow-sm shadow-[#2563EB]/30 font-semibold"
                  : "bg-[#111827] text-[#A7B2C4] border border-[#263449] hover:bg-[#1E293B] hover:text-[#F8FAFC]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => {
            const isFeatured = project.featured;

            return (
              <div
                key={project.id}
                className={`flex flex-col justify-between rounded-2xl p-6 transition-all duration-300 relative group bg-[#111827] border border-[#263449] shadow-xl shadow-black/40 ${
                  isFeatured
                    ? "hover:border-[#22D3EE]/50 hover:bg-[#162032]"
                    : "hover:border-[#2563EB]/40 hover:bg-[#162032]"
                }`}
              >
                <div>
                  {/* Card Badges */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-[#0B1120] border border-[#263449] text-[#A7B2C4] font-mono">
                      {project.category}
                    </span>

                    {project.keyMetric && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-semibold bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                        <TrendingDown className="w-3 h-3 text-emerald-400" />
                        {project.keyMetric}
                      </span>
                    )}
                  </div>

                  {/* Project Title */}
                  <h3 className="text-lg font-bold text-[#F8FAFC] mb-1.5 tracking-tight group-hover:text-[#22D3EE] transition-colors font-heading">
                    {project.title}
                  </h3>

                  {/* Tagline */}
                  <p className="text-xs font-medium text-[#22D3EE] mb-3">
                    {project.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-xs text-[#A7B2C4] leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-1.5 mb-6 pt-3 border-t border-[#263449]">
                    {project.highlights.slice(0, 3).map((hl, i) => (
                      <div key={i} className="flex items-start gap-2 text-[11px] text-[#A7B2C4]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                        <span className="leading-tight">{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Section: Technologies & Actions */}
                <div>
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#0B1120] border border-[#263449] text-[#A7B2C4]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-2 pt-3 border-t border-[#263449]">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-[#0B1120] hover:bg-[#1E293B] border border-[#263449] hover:border-[#2563EB]/50 text-xs font-semibold text-[#A7B2C4] hover:text-[#F8FAFC] transition-colors"
                    >
                      <Github className="w-3.5 h-3.5 text-white" />
                      <span>Repository</span>
                      <ArrowUpRight className="w-3 h-3 opacity-60" />
                    </a>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-xs font-semibold text-white transition-colors shadow-sm shadow-[#2563EB]/30"
                        title="Open Live Streamlit Application"
                      >
                        <Globe className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                      </a>
                    )}

                    <button
                      type="button"
                      onClick={() => setActiveModalProject(project)}
                      className="p-2 rounded-xl text-[#A7B2C4] hover:text-[#F8FAFC] hover:bg-[#1E293B] border border-transparent hover:border-[#263449] transition-colors"
                      title="View Details & Methodology"
                      aria-label={`View details for ${project.title}`}
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty Search State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-[#111827] rounded-2xl border border-[#263449]">
            <Filter className="w-8 h-8 text-[#A7B2C4] mx-auto mb-3" />
            <h3 className="text-sm font-semibold text-[#F8FAFC] mb-1 font-heading">No matching projects found</h3>
            <p className="text-xs text-[#A7B2C4] max-w-sm mx-auto mb-4">
              Try adjusting your technology keyword or switch category filters.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="px-3.5 py-1.5 text-xs font-medium text-[#22D3EE] hover:underline bg-[#2563EB]/15 rounded-lg border border-[#2563EB]/30"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Project Details Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-[#111827] border border-[#263449] rounded-2xl p-6 shadow-2xl shadow-black/90 max-h-[90vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setActiveModalProject(null)}
              className="absolute top-5 right-5 p-1.5 rounded-lg text-[#A7B2C4] hover:text-[#F8FAFC] hover:bg-[#1E293B] transition-colors"
              aria-label="Close project modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-3">
              <span className="px-2.5 py-1 rounded text-xs font-medium bg-[#0B1120] border border-[#263449] text-[#22D3EE]">
                {activeModalProject.category}
              </span>
              {activeModalProject.keyMetric && (
                <span className="text-xs font-semibold text-emerald-400">
                  {activeModalProject.keyMetric}
                </span>
              )}
            </div>

            <h3 className="text-xl font-bold text-[#F8FAFC] mb-1 font-heading">
              {activeModalProject.title}
            </h3>
            <p className="text-xs text-[#22D3EE] mb-4">{activeModalProject.tagline}</p>

            <div className="space-y-4 text-xs text-[#A7B2C4] mb-6">
              <div>
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#F8FAFC] mb-1.5 font-heading">
                  Project Overview
                </h4>
                <p className="text-[#A7B2C4] leading-relaxed text-sm">
                  {activeModalProject.description}
                </p>
              </div>

              <div>
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#F8FAFC] mb-2 font-heading">
                  Verified Highlights & Methodology
                </h4>
                <div className="space-y-2">
                  {activeModalProject.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 bg-[#0B1120] p-2.5 rounded-lg border border-[#263449]">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                      <span className="text-xs text-[#A7B2C4] leading-tight">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#F8FAFC] mb-2 font-heading">
                  Technologies Utilized
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {activeModalProject.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#0B1120] border border-[#263449] text-[#22D3EE]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-[#263449]">
              <a
                href={activeModalProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-xs font-semibold text-white transition-colors shadow-sm shadow-[#2563EB]/30"
              >
                <Github className="w-4 h-4" />
                <span>Open GitHub Repository</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              {activeModalProject.liveUrl && (
                <a
                  href={activeModalProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0B1120] hover:bg-[#1E293B] border border-[#263449] text-xs font-semibold text-[#A7B2C4] hover:text-[#F8FAFC] transition-colors"
                >
                  <Globe className="w-4 h-4 text-emerald-400" />
                  <span>Open Live Application</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
