"use client";

import React, { useState, useEffect, useRef } from "react";
import { portfolioData } from "@/data/portfolioData";
import {
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  Sparkles,
  Bot,
  GraduationCap,
  BrainCircuit,
  Database,
  ShieldCheck,
  Copy,
  Check,
  ChevronRight,
} from "lucide-react";

interface PresentationScene {
  id: string;
  topic: string;
  title: string;
  icon: React.ReactNode;
  durationSec: number;
  speechText: string;
}

export function AIPresenterSection() {
  const { personal, social } = portfolioData;

  const scenes: PresentationScene[] = [
    {
      id: "education",
      topic: "Academic Foundation",
      title: "M.Sc. Data Science in Berlin",
      icon: <GraduationCap className="w-4 h-4 text-cyan-400" />,
      durationSec: 18,
      speechText:
        "Hello and welcome! I am Adarsh's AI presenter. Adarsh is a Data Science postgraduate student based in Berlin, pursuing his Master of Science at the University of Europe for Applied Sciences, specializing in advanced machine learning, spatio-temporal graph modeling, and big data architectures.",
    },
    {
      id: "thesis",
      topic: "Master's Thesis Research",
      title: "18% Error Reduction with ST-GNN",
      icon: <BrainCircuit className="w-4 h-4 text-emerald-400" />,
      durationSec: 22,
      speechText:
        "In his Master's thesis research, Adarsh investigated Short-Term Traffic Speed Forecasting using Spatio-Temporal Graph Neural Networks on the METR-LA highway sensor network. By modeling spatial graph topologies alongside temporal sequences, he reduced forecasting error by over 18%, improving Mean Absolute Error from 3.8 to 3.1.",
    },
    {
      id: "engineering",
      topic: "Engineering & Platforms",
      title: "End-to-End Data Pipelines",
      icon: <Database className="w-4 h-4 text-blue-400" />,
      durationSec: 18,
      speechText:
        "Beyond theoretical modeling, Adarsh engineers production data workflows. He builds near-real-time streaming pipelines with Kafka, PySpark, and Debezium CDC, develops predictive logistics delay classifiers, and deploys interactive analytical dashboards in Streamlit and Power BI.",
    },
    {
      id: "compliance",
      topic: "Certifications & Availability",
      title: "Coursera & GDPR Certified",
      icon: <ShieldCheck className="w-4 h-4 text-violet-400" />,
      durationSec: 17,
      speechText:
        "Adarsh holds verified Coursera certifications in SQL, Python, and Data Science, alongside GDPR Fundamentals certification, ensuring analytical rigor and privacy compliance. Based in Berlin, he is actively open to Data Scientist and Machine Learning opportunities.",
    },
  ];

  const [currentSceneIndex, setCurrentSceneIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVoiceMuted, setIsVoiceMuted] = useState(true);
  const [spokenWordCount, setSpokenWordCount] = useState(0);
  const [copied, setCopied] = useState(false);

  const currentScene = scenes[currentSceneIndex];
  const words = currentScene.speechText.split(" ");

  // Speech synthesis ref
  const speechUtteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Typewriter word progression during playback
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      const intervalMs = (currentScene.durationSec * 1000) / words.length;
      timer = setInterval(() => {
        setSpokenWordCount((prev) => {
          if (prev >= words.length) {
            // Next scene or loop
            if (currentSceneIndex < scenes.length - 1) {
              setCurrentSceneIndex((idx) => idx + 1);
              return 0;
            } else {
              setIsPlaying(false);
              return words.length;
            }
          }
          return prev + 1;
        });
      }, intervalMs);
    }

    return () => clearInterval(timer);
  }, [isPlaying, words.length, currentScene.durationSec, currentSceneIndex, scenes.length]);

  // Speech synthesis effect
  useEffect(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      return;
    }

    if (isPlaying && !isVoiceMuted) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(currentScene.speechText);
      utterance.rate = 1.0;
      utterance.pitch = 1.0;
      utterance.lang = "en-US";

      utterance.onend = () => {
        // Handled by word timer
      };

      utterance.onerror = () => {
        setIsPlaying(false);
      };

      speechUtteranceRef.current = utterance;
      window.speechSynthesis.speak(utterance);
    } else {
      window.speechSynthesis.cancel();
    }

    return () => {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, [isPlaying, isVoiceMuted, currentSceneIndex, currentScene.speechText]);

  const togglePlayback = () => {
    setIsPlaying((prev) => !prev);
  };

  const toggleVoice = () => {
    setIsVoiceMuted((prev) => !prev);
  };

  const handleReset = () => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
    setIsPlaying(false);
    setCurrentSceneIndex(0);
    setSpokenWordCount(0);
  };

  const handleSelectScene = (index: number) => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
    setCurrentSceneIndex(index);
    setSpokenWordCount(0);
  };

  const handleCopyScript = () => {
    const fullScript = scenes
      .map((s, i) => `[Topic ${i + 1}: ${s.title}]\n${s.speechText}\n`)
      .join("\n");
    navigator.clipboard.writeText(fullScript);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="ai-presenter" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-[#111827] border border-blue-200 dark:border-[#263449] text-blue-600 dark:text-[#22D3EE] text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <Bot className="w-3.5 h-3.5 text-blue-600 dark:text-[#22D3EE]" />
            <span>AI-Powered Introduction</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-[#F8FAFC] tracking-tight mb-4 font-heading">
            AI Presenter Introduction
          </h2>
          <p className="text-slate-600 dark:text-[#A7B2C4] text-base sm:text-lg leading-relaxed">
            An interactive AI presenter persona narrating Adarsh&apos;s academic background in Berlin, Master&apos;s thesis research in Graph Neural Networks, and full-stack data capabilities.
          </p>
        </div>

        {/* Main Stage Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Holographic Presenter Canvas & Animation Screen */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-[#263449] p-6 shadow-sm dark:shadow-xl dark:shadow-black/40 backdrop-blur-xl relative overflow-hidden group">
            {/* Header Bar */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200 dark:border-[#263449]">
              <div className="flex items-center gap-2.5">
                <span className="flex h-3 w-3 relative">
                  <span
                    className={`absolute inline-flex h-full w-full rounded-full bg-blue-500 dark:bg-[#22D3EE] opacity-75 ${
                      isPlaying ? "animate-ping" : ""
                    }`}
                  />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-600 dark:bg-[#22D3EE]" />
                </span>
                <span className="text-xs font-bold text-slate-900 dark:text-[#F8FAFC] tracking-tight uppercase font-heading">
                  AI Presenter Persona
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-blue-50 text-blue-600 dark:bg-[#2563EB]/15 dark:text-[#22D3EE] border border-blue-200 dark:border-[#2563EB]/30">
                  Live Voice &amp; Captions
                </span>
                <span className="text-[10px] font-mono text-slate-500 dark:text-[#A7B2C4]">
                  Topic {currentSceneIndex + 1}/{scenes.length}
                </span>
              </div>
            </div>

            {/* Visualizer Area */}
            <div className="relative aspect-video w-full rounded-xl bg-slate-950 dark:bg-[#0B1120] text-white border border-slate-200 dark:border-[#263449] flex flex-col items-center justify-center p-6 overflow-hidden">
              {/* Pulsing Concentric Rings */}
              <div
                className={`absolute w-72 h-72 rounded-full border border-cyan-400/25 transition-all duration-700 pointer-events-none ${
                  isPlaying ? "scale-110 opacity-60 animate-pulse" : "opacity-30"
                }`}
              />
              <div
                className={`absolute w-52 h-52 rounded-full border border-blue-500/35 transition-all duration-500 pointer-events-none ${
                  isPlaying ? "scale-105 opacity-70" : "opacity-40"
                }`}
              />

              {/* Stylized AI Presenter Character / Avatar SVG */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="relative mb-4">
                  {/* Glowing Rounded Avatar Aura */}
                  <div
                    className={`w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-tr from-[#2563EB] via-[#1D4ED8] to-[#8B5CF6] p-1 shadow-xl shadow-[#2563EB]/30 transition-transform duration-300 ${
                      isPlaying ? "scale-105 shadow-[#2563EB]/50" : ""
                    }`}
                  >
                    <div className="w-full h-full rounded-[22px] bg-slate-900 dark:bg-[#0B1120] flex flex-col items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#22D3EE]/10 to-transparent animate-pulse pointer-events-none" />

                      <Bot className="w-12 h-12 text-[#22D3EE] relative z-10" />

                      {/* Audio reactive mouth indicator */}
                      <div className="flex items-center gap-1 mt-2">
                        {[40, 90, 60, 100, 50].map((h, i) => (
                          <span
                            key={i}
                            className={`w-1 rounded-full bg-[#22D3EE] transition-all duration-150 ${
                              isPlaying ? "opacity-100" : "opacity-30 h-1"
                            }`}
                            style={{
                              height: isPlaying ? `${Math.max(4, (h * ((spokenWordCount + i) % 4 + 1)) / 4)}px` : "3px",
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Active Speaker Badge */}
                  {isPlaying && (
                    <span className="absolute -bottom-1 -right-1 px-2 py-0.5 rounded-full text-[9px] font-mono font-bold bg-[#22D3EE] text-[#0B1120] shadow-md shadow-[#22D3EE]/40">
                      SPEAKING
                    </span>
                  )}
                </div>

                <div className="text-center">
                  <span className="text-xs font-mono text-[#22D3EE] font-semibold flex items-center justify-center gap-1.5 mb-1">
                    {currentScene.icon}
                    {currentScene.topic}
                  </span>
                  <h4 className="text-base sm:text-lg font-bold text-white font-heading">
                    {currentScene.title}
                  </h4>
                </div>
              </div>

              {/* Soundwave footer bar */}
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-center gap-1 h-3 pointer-events-none">
                {[20, 45, 70, 30, 85, 60, 100, 75, 40, 90, 55, 80, 65, 95, 35, 60, 40, 75, 50, 30].map(
                  (val, i) => (
                    <span
                      key={i}
                      className={`w-1 rounded-full bg-gradient-to-t from-[#2563EB] to-[#22D3EE] transition-all duration-150 ${
                        isPlaying ? "opacity-90" : "opacity-20"
                      }`}
                      style={{
                        height: isPlaying
                          ? `${Math.max(20, (val * ((spokenWordCount + i) % 5 + 1)) / 5)}%`
                          : "20%",
                      }}
                    />
                  )
                )}
              </div>
            </div>

            {/* Playback & Audio Controls Bar */}
            <div className="pt-4 mt-4 border-t border-slate-200 dark:border-[#263449] flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={togglePlayback}
                  aria-label={isPlaying ? "Pause presentation" : "Play presentation"}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-xs transition-all shadow-md shadow-[#2563EB]/30 hover:scale-105 cursor-pointer"
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-4 h-4 fill-current" />
                      <span>Pause</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 fill-current ml-0.5" />
                      <span>{spokenWordCount > 0 ? "Resume" : "Play Presentation"}</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleReset}
                  aria-label="Restart presentation"
                  className="p-2 rounded-xl text-slate-600 hover:text-slate-900 dark:text-[#A7B2C4] dark:hover:text-[#F8FAFC] hover:bg-slate-100 dark:hover:bg-[#1E293B] border border-slate-200 dark:border-[#263449] transition-colors cursor-pointer"
                  title="Restart presentation from beginning"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={toggleVoice}
                  aria-label={isVoiceMuted ? "Turn voice audio on" : "Mute voice audio"}
                  className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium border transition-colors cursor-pointer ${
                    !isVoiceMuted
                      ? "bg-blue-50 text-blue-600 border-blue-200 dark:bg-[#2563EB]/20 dark:text-[#22D3EE] dark:border-[#2563EB]/40"
                      : "bg-slate-50 text-slate-600 border-slate-200 hover:text-slate-900 dark:bg-[#0B1120] dark:text-[#A7B2C4] dark:border-[#263449] dark:hover:text-[#F8FAFC]"
                  }`}
                  title="Click to enable synthetic voice narration"
                >
                  {!isVoiceMuted ? (
                    <>
                      <Volume2 className="w-3.5 h-3.5 text-blue-600 dark:text-[#22D3EE]" />
                      <span className="text-[11px] font-mono">Voice ON</span>
                    </>
                  ) : (
                    <>
                      <VolumeX className="w-3.5 h-3.5" />
                      <span className="text-[11px] font-mono">Voice OFF</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono text-slate-500 dark:text-[#A7B2C4]">
                  {spokenWordCount}/{words.length} words
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Live Subtitles & Scene Selector Studio */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-[#263449] p-6 shadow-sm dark:shadow-xl backdrop-blur-xl">
            {/* Top Scene Navigation */}
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200 dark:border-[#263449]">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-blue-600 dark:text-[#22D3EE]" />
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-[#F8FAFC] font-heading">
                    Presentation Chapters
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={handleCopyScript}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-mono text-slate-600 hover:text-blue-600 dark:text-[#A7B2C4] dark:hover:text-[#22D3EE] bg-slate-50 hover:bg-slate-100 dark:bg-[#0B1120] border border-slate-200 dark:border-[#263449] transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-500" />
                      <span className="text-emerald-500">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy Script</span>
                    </>
                  )}
                </button>
              </div>

              {/* Scene Buttons List */}
              <div className="space-y-2 mb-6">
                {scenes.map((scene, idx) => (
                  <button
                    key={scene.id}
                    type="button"
                    onClick={() => handleSelectScene(idx)}
                    className={`w-full p-3 rounded-xl border text-left transition-all flex items-center justify-between cursor-pointer ${
                      currentSceneIndex === idx
                        ? "bg-blue-50/80 border-blue-500/50 shadow-sm dark:bg-[#1E293B] dark:border-[#2563EB]/60"
                        : "bg-slate-50/80 border-slate-200 hover:bg-slate-100 dark:bg-[#0B1120]/70 dark:border-[#263449] dark:hover:bg-[#1E293B]/60"
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="p-1.5 rounded-lg bg-white dark:bg-[#111827] border border-slate-200 dark:border-[#263449] shrink-0">
                        {scene.icon}
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-bold text-slate-900 dark:text-[#F8FAFC] truncate font-heading">
                          {scene.title}
                        </p>
                        <p className="text-[10px] text-slate-500 dark:text-[#A7B2C4] truncate">
                          {scene.topic}
                        </p>
                      </div>
                    </div>
                    <ChevronRight
                      className={`w-4 h-4 transition-transform shrink-0 ${
                        currentSceneIndex === idx
                          ? "text-blue-600 dark:text-[#22D3EE] translate-x-0.5"
                          : "text-slate-400 dark:text-[#A7B2C4]"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Live Subtitles Card */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#0B1120] border border-slate-200 dark:border-[#263449] relative">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-blue-600 dark:text-[#22D3EE] font-semibold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-[#22D3EE] animate-pulse" />
                  Live Synchronized Narration
                </span>
                <span className="text-[10px] font-mono text-slate-500 dark:text-[#A7B2C4]">
                  {currentScene.durationSec}s segment
                </span>
              </div>

              {/* Animated Spoken Text / Subtitles */}
              <p className="text-xs sm:text-sm text-slate-900 dark:text-[#F8FAFC] leading-relaxed min-h-[90px]">
                {words.map((word, i) => (
                  <span
                    key={i}
                    className={`transition-colors duration-150 ${
                      i < spokenWordCount
                        ? "text-blue-600 dark:text-[#22D3EE] font-medium"
                        : "text-slate-400 dark:text-[#A7B2C4]"
                    }`}
                  >
                    {word}{" "}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
