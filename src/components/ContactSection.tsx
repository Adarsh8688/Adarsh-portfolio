"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import {
  Mail,
  Copy,
  Check,
  MapPin,
  Send,
  ExternalLink,
  MessageSquare,
} from "lucide-react";
import { Github, Linkedin } from "@/components/Icons";

export function ContactSection() {
  const { social, personal } = portfolioData;

  const [copied, setCopied] = useState(false);
  const [subject, setSubject] = useState("");
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formSent, setFormSent] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(social.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const emailSubject = encodeURIComponent(
      subject || `Data Science Inquiry / Message from ${senderName || "Portfolio visitor"}`
    );
    const emailBody = encodeURIComponent(
      `Hi Adarsh,\n\n${message}\n\nFrom: ${senderName || "Recruiter/Collaborator"} (${senderEmail || "No email specified"})\n`
    );

    window.location.href = `mailto:${social.email}?subject=${emailSubject}&body=${emailBody}`;
    setFormSent(true);
    setTimeout(() => setFormSent(false), 4000);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-slate-950/60">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Mail className="w-3.5 h-3.5" />
            <span>Connect & Collaborate</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Interested in discussing research, full-time roles, working student positions, or collaboration on machine learning and data pipelines? Reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Details & Social Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Direct Email Card with 1-click Copy */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-xl">
              <span className="text-[11px] font-mono uppercase tracking-wider text-sky-400 font-semibold mb-2 block">
                Primary Direct Contact
              </span>
              <div className="flex items-center justify-between gap-3 p-3 rounded-xl bg-slate-950/70 border border-slate-800 mb-3">
                <div className="flex items-center gap-2.5 min-w-0">
                  <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                  <span className="text-sm font-mono text-white truncate selection:bg-sky-500 selection:text-white">
                    {social.email}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-lg bg-sky-500/15 hover:bg-sky-500/25 text-sky-300 hover:text-white text-xs font-medium border border-sky-500/30 transition-colors shrink-0 flex items-center gap-1.5"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>Direct Mailto Action:</span>
                <a
                  href={`mailto:${social.email}`}
                  className="text-sky-400 hover:text-sky-300 font-medium underline underline-offset-2"
                >
                  Open in Email Client
                </a>
              </div>
            </div>

            {/* Location & Status Card */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-xl">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-slate-800 text-sky-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">
                    {personal.location}
                  </h4>
                  <p className="text-xs text-slate-400 mb-2">
                    Central European Time (UTC+1) • University of Europe for Applied Sciences
                  </p>
                  <p className="text-xs text-slate-300">
                    {personal.status}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Action Cards */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between group"
              >
                <div className="flex items-center justify-between mb-4">
                  <Github className="w-6 h-6 text-white" />
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h5 className="text-sm font-bold text-white mb-0.5">GitHub</h5>
                  <p className="text-[11px] text-slate-400 font-mono">@Adarsh8688</p>
                </div>
              </a>

              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-sky-500/30 transition-all flex flex-col justify-between group"
              >
                <div className="flex items-center justify-between mb-4">
                  <Linkedin className="w-6 h-6 text-[#0a66c2]" />
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h5 className="text-sm font-bold text-white mb-0.5">LinkedIn</h5>
                  <p className="text-[11px] text-slate-400 font-mono">mamidala-adarsh</p>
                </div>
              </a>
            </div>
          </div>

          {/* Quick Direct Message Compose Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-xl">
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="w-5 h-5 text-sky-400" />
                <h3 className="text-lg font-bold text-white">
                  Send a Direct Note
                </h3>
              </div>

              <form onSubmit={handleSendMessage} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="senderName"
                      className="block text-xs font-medium text-slate-300 mb-1.5"
                    >
                      Your Name
                    </label>
                    <input
                      id="senderName"
                      type="text"
                      placeholder="e.g. Elena Weber"
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-sky-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="senderEmail"
                      className="block text-xs font-medium text-slate-300 mb-1.5"
                    >
                      Your Email (for reply)
                    </label>
                    <input
                      id="senderEmail"
                      type="email"
                      placeholder="e.g. elena@company.de"
                      value={senderEmail}
                      onChange={(e) => setSenderEmail(e.target.value)}
                      className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-sky-500"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-medium text-slate-300 mb-1.5"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="e.g. Data Scientist Role / Master's Thesis Inquiry"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-sky-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-medium text-slate-300 mb-1.5"
                  >
                    Message Content
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    placeholder="Hello Adarsh, we came across your traffic forecasting and logistics ML projects..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-sky-500 resize-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                  <span className="text-[11px] text-slate-400">
                    Transfers directly into your default email app with no third-party tracking.
                  </span>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-xs font-semibold text-white transition-all shadow-md shadow-sky-600/25 hover:shadow-sky-600/40"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </div>

                {formSent && (
                  <p className="text-xs text-emerald-400 pt-2 animate-in fade-in">
                    ✓ Opening your email client with your pre-composed message!
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
