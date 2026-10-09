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
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-[#111827] border border-blue-200 dark:border-[#263449] text-blue-600 dark:text-[#22D3EE] text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <Mail className="w-3.5 h-3.5" />
            <span>Connect & Collaborate</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-[#F8FAFC] mb-4 font-heading">
            Get in Touch
          </h2>
          <p className="text-slate-600 dark:text-[#A7B2C4] text-base leading-relaxed">
            Interested in discussing research, full-time Data Science or Machine Learning roles, and production data pipeline collaborations? Reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Details & Social Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Direct Email Card with 1-click Copy */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-[#263449] backdrop-blur-xl shadow-sm dark:shadow-xl">
              <span className="text-[11px] font-mono uppercase tracking-wider text-blue-600 dark:text-[#22D3EE] font-semibold mb-2 block">
                Primary Direct Contact
              </span>
              <div className="flex items-center justify-between gap-3 p-3 rounded-xl bg-slate-50 dark:bg-[#0B1120] border border-slate-200 dark:border-[#263449] mb-3">
                <div className="flex items-center gap-2.5 min-w-0">
                  <Mail className="w-4 h-4 text-blue-600 dark:text-[#22D3EE] shrink-0" />
                  <span className="text-sm font-mono text-slate-900 dark:text-[#F8FAFC] truncate selection:bg-[#2563EB] selection:text-white">
                    {social.email}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-lg bg-blue-50 dark:bg-[#2563EB]/15 hover:bg-blue-100 dark:hover:bg-[#2563EB]/25 text-blue-600 dark:text-[#22D3EE] hover:text-blue-700 dark:hover:text-white text-xs font-medium border border-blue-200 dark:border-[#2563EB]/30 transition-colors shrink-0 flex items-center gap-1.5 cursor-pointer"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-500">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-500 dark:text-[#A7B2C4]">
                <span>Direct Mailto Action:</span>
                <a
                  href={`mailto:${social.email}`}
                  className="text-blue-600 dark:text-[#22D3EE] hover:underline font-medium"
                >
                  Open in Email Client
                </a>
              </div>
            </div>

            {/* Location & Status Card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-[#263449] backdrop-blur-xl shadow-sm dark:shadow-xl">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-[#0B1120] text-blue-600 dark:text-[#22D3EE] border border-slate-200 dark:border-[#263449] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-[#F8FAFC] mb-1 font-heading">
                    {personal.location}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-[#A7B2C4] mb-2">
                    Central European Time (UTC+1) • University of Europe for Applied Sciences
                  </p>
                  <p className="text-xs text-slate-500 dark:text-[#A7B2C4]">
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
                className="p-5 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-[#263449] hover:border-blue-500/50 hover:bg-slate-50 dark:hover:bg-[#162032] transition-all flex flex-col justify-between group shadow-sm"
              >
                <div className="flex items-center justify-between mb-4">
                  <Github className="w-6 h-6 text-slate-800 dark:text-white" />
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-slate-900 dark:text-[#A7B2C4] dark:group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h5 className="text-sm font-bold text-slate-900 dark:text-[#F8FAFC] mb-0.5 font-heading">GitHub</h5>
                  <p className="text-[11px] text-slate-500 dark:text-[#A7B2C4] font-mono">@Adarsh8688</p>
                </div>
              </a>

              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-[#263449] hover:border-blue-500/50 hover:bg-slate-50 dark:hover:bg-[#162032] transition-all flex flex-col justify-between group shadow-sm"
              >
                <div className="flex items-center justify-between mb-4">
                  <Linkedin className="w-6 h-6 text-[#0284C7] dark:text-[#22D3EE]" />
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-slate-900 dark:text-[#A7B2C4] dark:group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h5 className="text-sm font-bold text-slate-900 dark:text-[#F8FAFC] mb-0.5 font-heading">LinkedIn</h5>
                  <p className="text-[11px] text-slate-500 dark:text-[#A7B2C4] font-mono">mamidala-adarsh</p>
                </div>
              </a>
            </div>
          </div>

          {/* Quick Direct Message Compose Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-[#263449] backdrop-blur-xl shadow-sm dark:shadow-xl">
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="w-5 h-5 text-blue-600 dark:text-[#22D3EE]" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-[#F8FAFC] font-heading">
                  Send a Direct Note
                </h3>
              </div>

              <form onSubmit={handleSendMessage} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="senderName"
                      className="block text-xs font-medium text-slate-700 dark:text-[#A7B2C4] mb-1.5"
                    >
                      Your Name
                    </label>
                    <input
                      id="senderName"
                      type="text"
                      placeholder="e.g. Elena Weber"
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      className="w-full bg-slate-50 dark:bg-[#0B1120] border border-slate-200 dark:border-[#263449] rounded-xl px-3.5 py-2.5 text-xs text-slate-900 dark:text-[#F8FAFC] placeholder-slate-400 dark:placeholder-[#A7B2C4]/50 focus:outline-none focus:border-blue-500 dark:focus:border-[#22D3EE] focus:ring-1 focus:ring-blue-500 dark:focus:ring-[#22D3EE] transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="senderEmail"
                      className="block text-xs font-medium text-slate-700 dark:text-[#A7B2C4] mb-1.5"
                    >
                      Your Email (for reply)
                    </label>
                    <input
                      id="senderEmail"
                      type="email"
                      placeholder="e.g. elena@company.de"
                      value={senderEmail}
                      onChange={(e) => setSenderEmail(e.target.value)}
                      className="w-full bg-slate-50 dark:bg-[#0B1120] border border-slate-200 dark:border-[#263449] rounded-xl px-3.5 py-2.5 text-xs text-slate-900 dark:text-[#F8FAFC] placeholder-slate-400 dark:placeholder-[#A7B2C4]/50 focus:outline-none focus:border-blue-500 dark:focus:border-[#22D3EE] focus:ring-1 focus:ring-blue-500 dark:focus:ring-[#22D3EE] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-medium text-slate-700 dark:text-[#A7B2C4] mb-1.5"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="e.g. Data Scientist Role / Master's Thesis Inquiry"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full bg-slate-50 dark:bg-[#0B1120] border border-slate-200 dark:border-[#263449] rounded-xl px-3.5 py-2.5 text-xs text-slate-900 dark:text-[#F8FAFC] placeholder-slate-400 dark:placeholder-[#A7B2C4]/50 focus:outline-none focus:border-blue-500 dark:focus:border-[#22D3EE] focus:ring-1 focus:ring-blue-500 dark:focus:ring-[#22D3EE] transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-medium text-slate-700 dark:text-[#A7B2C4] mb-1.5"
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
                    className="w-full bg-slate-50 dark:bg-[#0B1120] border border-slate-200 dark:border-[#263449] rounded-xl px-3.5 py-2.5 text-xs text-slate-900 dark:text-[#F8FAFC] placeholder-slate-400 dark:placeholder-[#A7B2C4]/50 focus:outline-none focus:border-blue-500 dark:focus:border-[#22D3EE] focus:ring-1 focus:ring-blue-500 dark:focus:ring-[#22D3EE] resize-none transition-colors"
                  />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                  <span className="text-[11px] text-slate-500 dark:text-[#A7B2C4]">
                    Transfers directly into your default email app with no third-party tracking.
                  </span>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-xs font-semibold text-white transition-all shadow-md shadow-[#2563EB]/25 hover:shadow-[#2563EB]/40 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </div>

                {formSent && (
                  <p className="text-xs text-emerald-600 dark:text-emerald-400 pt-2 animate-in fade-in">
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
