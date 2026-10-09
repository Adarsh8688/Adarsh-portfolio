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
  FileText,
  Copy,
  Check,
  ChevronRight,
  Video as VideoIcon,
  Maximize2,
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
      topic: "Governance & Availability",
      title: "GDPR Certified & Seeking Roles",
      icon: <ShieldCheck className="w-4 h-4 text-violet-400" />,
      durationSec: 16,
      speechText:
        "Adarsh is GDPR Fundamentals certified, ensuring ethics and privacy compliance are built into every model. Currently based in Berlin, he is actively open to Data Scientist, Machine Learning Engineer, and Working Student opportunities across Europe.",
    },
  ];

  const [currentSceneIndex, setCurrentSceneIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVoiceMuted, setIsVoiceMuted] = useState(true);
  const [spokenWordCount, setSpokenWordCount] = useState(0);
  const [copied, setCopied] = useState(false);
  const [showFullScript, setShowFullScript] = useState(false);

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

  // Voice narration using Web Speech API (strictly user-initiated)
  useEffect(() => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();

      if (isPlaying && !isVoiceMuted) {
        const utterance = new SpeechSynthesisUtterance(currentScene.speechText);
        utterance.rate = 1.0;
        utterance.pitch = 1.05;
        utterance.lang = "en-US";

        utterance.onend = () => {
          if (currentSceneIndex < scenes.length - 1) {
            setCurrentSceneIndex((idx) => idx + 1);
            setSpokenWordCount(0);
          } else {
            setIsPlaying(false);
          }
        };

        speechUtteranceRef.current = utterance;
        window.speechSynthesis.speak(utterance);
      }
    }

    return () => {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, [isPlaying, isVoiceMuted, currentSceneIndex, currentScene.speechText, scenes.length]);

  const togglePlayback = () => {
    if (!isPlaying && spokenWordCount >= words.length) {
      setSpokenWordCount(0);
    }
    setIsPlaying(!isPlaying);
  };

  const handleSelectScene = (index: number) => {
    setCurrentSceneIndex(index);
    setSpokenWordCount(0);
  };

  const handleReset = () => {
    setCurrentSceneIndex(0);
    setSpokenWordCount(0);
    setIsPlaying(false);
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
  };

  const toggleVoice = () => {
    const nextMute = !isVoiceMuted;
    setIsVoiceMuted(nextMute);
    if (nextMute && typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
  };

  const handleCopyScript = () => {
    const fullScript = scenes
      .map((s) => `[${s.topic} — ${s.title}]\n${s.speechText}`)
      .join("\n\n");
    navigator.clipboard.writeText(fullScript);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="ai-presenter" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      {/* Ambient futuristic glows */}
      <div className="glow-orb-cyan top-1/2 left-10 w-[500px] h-[350px] -translate-y-1/2" />
      <div className="glow-orb-violet bottom-10 right-10 w-[450px] h-[350px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm shadow-cyan-500/10">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>AI-Generated Presenter Introduction</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 font-heading">
            Meet Adarsh via Animated AI Presenter
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            An interactive AI presenter persona narrating Adarsh&apos;s academic background in Berlin, Master&apos;s thesis research in Graph Neural Networks, and full-stack data capabilities.
          </p>
        </div>

        {/* Main Stage Grid: Interactive Holographic Presenter + Live Speech Studio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Holographic Presenter Canvas & Animation Screen */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-2xl bg-slate-950/90 border border-cyan-500/30 p-6 shadow-2xl shadow-cyan-950/40 backdrop-blur-xl relative overflow-hidden group">
            {/* Holographic Header Bar */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800/80">
              <div className="flex items-center gap-2.5">
                <span className="flex h-3 w-3 relative">
                  <span
                    className={`absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75 ${
                      isPlaying ? "animate-ping" : ""
                    }`}
                  />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500" />
                </span>
                <span className="text-xs font-bold text-white tracking-tight uppercase font-heading">
                  AI Holographic Presenter Persona
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/25">
                  Live Voice &amp; Captions
                </span>
                <span className="text-[10px] font-mono text-slate-400">
                  Topic {currentSceneIndex + 1}/{scenes.length}
                </span>
              </div>
            </div>

            {/* Visualizer Area: Animated AI Avatar Graphic */}
            <div className="relative aspect-video w-full rounded-xl bg-gradient-to-b from-[#060b17] via-[#091124] to-[#040711] border border-cyan-500/20 flex flex-col items-center justify-center p-6 overflow-hidden">
              <div className="absolute inset-0 bg-ai-grid opacity-20 pointer-events-none" />

              {/* Pulsing Concentric Holographic Rings */}
              <div
                className={`absolute w-72 h-72 rounded-full border border-cyan-500/20 transition-all duration-700 pointer-events-none ${
                  isPlaying ? "scale-110 opacity-60 animate-pulse" : "opacity-30"
                }`}
              />
              <div
                className={`absolute w-52 h-52 rounded-full border border-blue-500/30 transition-all duration-500 pointer-events-none ${
                  isPlaying ? "scale-105 opacity-70" : "opacity-40"
                }`}
              />

              {/* Stylized AI Presenter Character / Avatar SVG */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="relative mb-4">
                  {/* Glowing Hexagonal / Rounded Avatar Aura */}
                  <div
                    className={`w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-tr from-cyan-600 via-blue-600 to-violet-600 p-1 shadow-xl shadow-cyan-500/30 transition-transform duration-300 ${
                      isPlaying ? "scale-105 shadow-cyan-400/50" : ""
                    }`}
                  >
                    <div className="w-full h-full rounded-[22px] bg-[#070d1d] flex flex-col items-center justify-center relative overflow-hidden">
                      {/* Holographic Scanline Effect */}
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent animate-pulse pointer-events-none" />

                      {/* Animated Presenter Face */}
                      <Bot className="w-12 h-12 text-cyan-300 relative z-10" />

                      {/* Audio reactive mouth indicator */}
                      <div className="flex items-center gap-1 mt-2">
                        {[40, 90, 60, 100, 50].map((h, i) => (
                          <span
                            key={i}
                            className={`w-1 rounded-full bg-cyan-400 transition-all duration-150 ${
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
                    <span className="absolute -bottom-1 -right-1 px-2 py-0.5 rounded-full text-[9px] font-mono font-bold bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/50">
                      SPEAKING
                    </span>
                  )}
                </div>

                <div className="text-center">
                  <span className="text-xs font-mono text-cyan-300 font-semibold flex items-center justify-center gap-1.5 mb-1">
                    {currentScene.icon}
                    {currentScene.topic}
                  </span>
                  <h4 className="text-base sm:text-lg font-bold text-white font-heading">
                    {currentScene.title}
                  </h4>
                </div>
              </div>

              {/* Holographic soundwave footer bar */}
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-center gap-1 h-3 pointer-events-none">
                {[20, 45, 70, 30, 85, 60, 100, 75, 40, 90, 55, 80, 65, 95, 35, 60, 40, 75, 50, 30].map(
                  (val, i) => (
                    <span
                      key={i}
                      className={`w-1 rounded-full bg-gradient-to-t from-cyan-500 to-blue-400 transition-all duration-150 ${
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
            <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                {/* Play/Pause Button */}
                <button
                  type="button"
                  onClick={togglePlayback}
                  aria-label={isPlaying ? "Pause presentation" : "Play presentation"}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition-all shadow-md shadow-cyan-500/30 hover:scale-105"
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

                {/* Reset */}
                <button
                  type="button"
                  onClick={handleReset}
                  aria-label="Restart presentation"
                  className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-850 border border-slate-800 transition-colors"
                  title="Restart presentation from beginning"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>

                {/* Voice Narration Audio Toggle */}
                <button
                  type="button"
                  onClick={toggleVoice}
                  aria-label={isVoiceMuted ? "Turn voice audio on" : "Mute voice audio"}
                  className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium border transition-colors ${
                    !isVoiceMuted
                      ? "bg-cyan-500/20 text-cyan-300 border-cyan-500/40"
                      : "bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200"
                  }`}
                  title="Click to enable synthetic voice narration"
                >
                  {!isVoiceMuted ? (
                    <>
                      <Volume2 className="w-3.5 h-3.5 text-cyan-400" />
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
                <span className="text-[11px] font-mono text-slate-400">
                  {spokenWordCount}/{words.length} words
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Live Subtitles & Scene Selector Studio */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl bg-slate-950/90 border border-slate-800 p-6 shadow-xl backdrop-blur-xl">
            {/* Top Scene Navigation */}
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200 font-heading">
                    Presentation Chapters
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={handleCopyScript}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-mono text-slate-400 hover:text-cyan-300 bg-slate-900 border border-slate-800 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
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
                    className={`w-full p-3 rounded-xl border text-left transition-all flex items-center justify-between ${
                      currentSceneIndex === idx
                        ? "bg-cyan-500/10 border-cyan-500/40 shadow-sm shadow-cyan-500/10"
                        : "bg-slate-900/60 border-slate-800/80 hover:bg-slate-850 hover:border-slate-700"
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="p-1.5 rounded-lg bg-slate-800 shrink-0">
                        {scene.icon}
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-bold text-white truncate font-heading">
                          {scene.title}
                        </p>
                        <p className="text-[10px] text-slate-400 truncate">
                          {scene.topic}
                        </p>
                      </div>
                    </div>
                    <ChevronRight
                      className={`w-4 h-4 transition-transform shrink-0 ${
                        currentSceneIndex === idx
                          ? "text-cyan-400 translate-x-0.5"
                          : "text-slate-500"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Live Subtitles Card */}
            <div className="p-4 rounded-xl bg-slate-900/80 border border-cyan-500/25 relative">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 font-semibold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  Live Synchronized Narration
                </span>
                <span className="text-[10px] font-mono text-slate-400">
                  {currentScene.durationSec}s segment
                </span>
              </div>

              {/* Animated Spoken Text / Subtitles */}
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed min-h-[90px]">
                {words.map((word, i) => (
                  <span
                    key={i}
                    className={`transition-colors duration-150 ${
                      i < spokenWordCount
                        ? "text-cyan-300 font-medium"
                        : "text-slate-400"
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
