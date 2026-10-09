"use client";

import React, { useState, useRef, useEffect } from "react";
import { portfolioData, VideoTranscriptItem } from "@/data/portfolioData";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  RotateCcw,
  Sparkles,
  FileText,
  Copy,
  Check,
  Search,
  ExternalLink,
  Bot,
  Video as VideoIcon,
  Clock,
} from "lucide-react";

export function VideoSection() {
  const { video } = portfolioData;

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(130); // 2:10 placeholder duration
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedTranscript, setCopiedTranscript] = useState(false);
  const [activeTab, setActiveTab] = useState<"transcript" | "details">("transcript");
  const [activeTimestampIndex, setActiveTimestampIndex] = useState(0);

  const videoRef = useRef<HTMLVideoElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);

  // Check if a real video file exists
  const hasRealVideo = Boolean(video.videoUrl && video.videoUrl.trim() !== "");

  // Simulated timer for placeholder preview
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying && !hasRealVideo) {
      interval = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= duration) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, hasRealVideo, duration]);

  // Handle HTML5 video events if real video is provided
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const togglePlay = () => {
    if (hasRealVideo && videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current
          .play()
          .then(() => setIsPlaying(true))
          .catch(() => setIsPlaying(false));
      }
    } else {
      // Placeholder preview toggle
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
    setIsMuted(!isMuted);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const targetTime = parseFloat(e.target.value);
    setCurrentTime(targetTime);
    if (hasRealVideo && videoRef.current) {
      videoRef.current.currentTime = targetTime;
    }
  };

  const handleReset = () => {
    setCurrentTime(0);
    if (hasRealVideo && videoRef.current) {
      videoRef.current.currentTime = 0;
    }
    setIsPlaying(false);
  };

  const toggleFullscreen = () => {
    if (videoContainerRef.current) {
      if (!document.fullscreenElement) {
        videoContainerRef.current.requestFullscreen().catch((err) => console.error(err));
      } else {
        document.exitFullscreen().catch((err) => console.error(err));
      }
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const handleCopyTranscript = () => {
    const fullText = video.transcripts
      .map((t) => `[${t.timestamp}] ${t.title}\n${t.text}`)
      .join("\n\n");
    navigator.clipboard.writeText(fullText);
    setCopiedTranscript(true);
    setTimeout(() => setCopiedTranscript(false), 2000);
  };

  const filteredTranscripts = video.transcripts.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="video" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Bot className="w-3.5 h-3.5" />
            <span>AI Presenter Introduction</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            {video.sectionHeading}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            {video.sectionSubtitle}
          </p>
        </div>

        {/* Main Grid: Player + Transcript */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Video Player Column */}
          <div className="lg:col-span-7">
            <div
              ref={videoContainerRef}
              className="relative rounded-2xl overflow-hidden bg-slate-900 border border-white/[0.1] shadow-2xl shadow-indigo-950/40 group"
            >
              {/* Actual Video or Polished Placeholder Screen */}
              <div className="relative aspect-video w-full bg-[#0a0f18] flex items-center justify-center overflow-hidden">
                {hasRealVideo ? (
                  <video
                    ref={videoRef}
                    src={video.videoUrl}
                    poster={video.posterUrl}
                    onTimeUpdate={handleTimeUpdate}
                    onLoadedMetadata={handleLoadedMetadata}
                    onEnded={() => setIsPlaying(false)}
                    playsInline
                    muted={isMuted}
                    preload="metadata"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  /* Polished AI Presenter Placeholder */
                  <div className="relative w-full h-full flex flex-col items-center justify-center p-6 text-center select-none bg-gradient-to-b from-slate-900 via-[#0d1322] to-[#080b11]">
                    {/* Glowing AI Ring & Mesh Graphic */}
                    <div className="absolute inset-0 bg-grid-pattern opacity-20" />
                    <div className="absolute w-72 h-72 rounded-full bg-indigo-600/10 blur-3xl" />
                    <div className="absolute w-48 h-48 rounded-full bg-violet-600/10 blur-2xl" />

                    <div className="relative z-10 flex flex-col items-center">
                      <div className="relative mb-5">
                        <div
                          className={`w-20 h-20 rounded-2xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-violet-500 flex items-center justify-center shadow-xl shadow-indigo-500/25 transition-transform duration-300 ${
                            isPlaying ? "scale-105 shadow-indigo-500/40" : ""
                          }`}
                        >
                          <Bot className="w-10 h-10 text-white" />
                        </div>
                        {isPlaying && (
                          <span className="absolute -top-1 -right-1 flex h-4 w-4">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-slate-900" />
                          </span>
                        )}
                      </div>

                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/[0.1] text-xs font-medium text-indigo-200 mb-3 backdrop-blur-sm">
                        <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                        <span>AI Avatar Presenter • Ready for Video File</span>
                      </div>

                      <h3 className="text-lg font-semibold text-white mb-2 tracking-tight">
                        Adarsh — Research & Technical Walkthrough
                      </h3>

                      <p className="text-xs text-slate-400 max-w-sm mb-5 leading-relaxed">
                        {video.placeholderNote}
                      </p>

                      {/* Visualizer sound bars */}
                      <div className="flex items-center gap-1.5 h-6 mb-5">
                        {[40, 70, 30, 90, 60, 100, 50, 80, 45, 65, 95, 35].map((height, i) => (
                          <span
                            key={i}
                            className={`w-1 rounded-full bg-gradient-to-t from-indigo-500 to-violet-400 transition-all duration-300 ${
                              isPlaying ? "opacity-90" : "opacity-30"
                            }`}
                            style={{
                              height: isPlaying ? `${Math.max(20, (height * (currentTime % 5 + 1)) / 5)}%` : "25%",
                            }}
                          />
                        ))}
                      </div>

                      {/* Big Interactive Action Button */}
                      <button
                        type="button"
                        onClick={togglePlay}
                        className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition-all shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:scale-105"
                      >
                        {isPlaying ? (
                          <>
                            <Pause className="w-4 h-4 fill-white" />
                            <span>Pause Preview</span>
                          </>
                        ) : (
                          <>
                            <Play className="w-4 h-4 fill-white ml-0.5" />
                            <span>Preview Video Controls</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                )}

                {/* Top overlay badge */}
                <div className="absolute top-3 left-3 z-20 flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md text-[11px] font-mono text-slate-300 border border-white/[0.08] flex items-center gap-1.5">
                    <VideoIcon className="w-3 h-3 text-indigo-400" />
                    1080p AI Video
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md text-[11px] font-mono text-emerald-400 border border-white/[0.08]">
                    No Autoplay
                  </span>
                </div>
              </div>

              {/* Bottom Custom Playback Controls Bar */}
              <div className="p-4 bg-slate-900/95 border-t border-white/[0.08] backdrop-blur-lg flex flex-col gap-3">
                {/* Progress Scrubber */}
                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min="0"
                    max={duration || 100}
                    step="0.1"
                    value={currentTime}
                    onChange={handleSeek}
                    aria-label="Video seek scrubber"
                    className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-indigo-500 hover:h-2 transition-all"
                  />
                </div>

                {/* Control Buttons & Counters */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {/* Play/Pause */}
                    <button
                      type="button"
                      onClick={togglePlay}
                      aria-label={isPlaying ? "Pause video" : "Play video"}
                      className="p-2 rounded-lg bg-indigo-600/20 hover:bg-indigo-600 text-indigo-300 hover:text-white transition-colors"
                    >
                      {isPlaying ? (
                        <Pause className="w-4 h-4 fill-current" />
                      ) : (
                        <Play className="w-4 h-4 fill-current ml-0.5" />
                      )}
                    </button>

                    {/* Reset */}
                    <button
                      type="button"
                      onClick={handleReset}
                      aria-label="Restart video"
                      className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.06] transition-colors"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>

                    {/* Mute/Volume (Strictly No Autoplay Audio) */}
                    <button
                      type="button"
                      onClick={toggleMute}
                      aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                      className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.06] transition-colors"
                    >
                      {isMuted ? (
                        <VolumeX className="w-4 h-4 text-amber-400" />
                      ) : (
                        <Volume2 className="w-4 h-4 text-emerald-400" />
                      )}
                    </button>

                    {/* Time Counter */}
                    <span className="text-xs font-mono text-slate-400 ml-1">
                      {formatTime(currentTime)} / {formatTime(duration)}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="hidden sm:inline-block text-[11px] text-slate-400 font-mono">
                      {hasRealVideo ? "HTML5 Video Active" : "Interactive Mode"}
                    </span>
                    {/* Fullscreen */}
                    <button
                      type="button"
                      onClick={toggleFullscreen}
                      aria-label="Toggle fullscreen"
                      className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.06] transition-colors"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Developer / Customizer note */}
            <div className="mt-4 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-400" />
                Configure video path in:
                <code className="text-indigo-300 font-mono text-[11px] bg-white/[0.04] px-1.5 py-0.5 rounded">
                  src/data/portfolioData.ts
                </code>
              </span>
              <span className="text-slate-400 font-mono">property: videoUrl</span>
            </div>
          </div>

          {/* Transcript & Overview Column */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="rounded-2xl bg-slate-900/70 border border-white/[0.08] p-5 backdrop-blur-xl flex flex-col h-full">
              {/* Tabs header */}
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveTab("transcript")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      activeTab === "transcript"
                        ? "bg-indigo-600 text-white shadow-sm"
                        : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
                    }`}
                  >
                    <span className="flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5" />
                      Transcript
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("details")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      activeTab === "details"
                        ? "bg-indigo-600 text-white shadow-sm"
                        : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
                    }`}
                  >
                    <span className="flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      Presenter Details
                    </span>
                  </button>
                </div>

                {activeTab === "transcript" && (
                  <button
                    type="button"
                    onClick={handleCopyTranscript}
                    aria-label="Copy transcript to clipboard"
                    className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.06] transition-colors text-xs flex items-center gap-1.5"
                    title="Copy full transcript"
                  >
                    {copiedTranscript ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400 text-[11px]">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span className="text-[11px] hidden sm:inline">Copy</span>
                      </>
                    )}
                  </button>
                )}
              </div>

              {activeTab === "transcript" ? (
                <>
                  {/* Search within transcript */}
                  <div className="relative mb-3">
                    <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Search within script & topics..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-slate-950/60 border border-white/[0.08] rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    />
                  </div>

                  {/* Transcript Scrollable Area */}
                  <div className="space-y-3 overflow-y-auto max-h-[380px] pr-1">
                    {filteredTranscripts.length > 0 ? (
                      filteredTranscripts.map((item, idx) => (
                        <div
                          key={idx}
                          onClick={() => setActiveTimestampIndex(idx)}
                          className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                            activeTimestampIndex === idx
                              ? "bg-indigo-600/[0.12] border-indigo-500/40 shadow-sm"
                              : "bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04] hover:border-white/[0.1]"
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="text-xs font-semibold text-white tracking-tight">
                              {item.title}
                            </span>
                            <span className="inline-flex items-center gap-1 text-[11px] font-mono text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded-md">
                              <Clock className="w-3 h-3" />
                              {item.timestamp}
                            </span>
                          </div>
                          <p className="text-xs text-slate-300 leading-relaxed">
                            {item.text}
                          </p>
                        </div>
                      ))
                    ) : (
                      <div className="text-center py-8 text-xs text-slate-400">
                        No segments match &ldquo;{searchQuery}&rdquo;
                      </div>
                    )}
                  </div>
                </>
              ) : (
                /* Presenter Details Tab */
                <div className="space-y-4 text-xs text-slate-300">
                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <h4 className="font-semibold text-white mb-1.5 flex items-center gap-2">
                      <Bot className="w-4 h-4 text-indigo-400" />
                      About the Presenter Segment
                    </h4>
                    <p className="text-slate-400 leading-relaxed">
                      This module provides a virtual persona introduction for technical recruiters, thesis supervisors, and industry partners seeking an overview of Adarsh&apos;s data science portfolio.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <h4 className="font-semibold text-white mb-2">Verified Content Topics</h4>
                    <ul className="space-y-2 text-slate-400">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 shrink-0" />
                        <span>University of Europe for Applied Sciences (Berlin) academic credentials.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 shrink-0" />
                        <span>Graph Neural Network short-term traffic speed forecasting (METR-LA dataset, 18% error reduction).</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 shrink-0" />
                        <span>Production data pipelines with Kafka, PySpark, and interactive Streamlit tools.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 shrink-0" />
                        <span>GDPR compliance certification in privacy-preserving data handling.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-3 rounded-xl bg-indigo-950/30 border border-indigo-500/20 text-indigo-200">
                    <p className="font-medium mb-1">To connect your finished video:</p>
                    <p className="text-slate-400 text-[11px]">
                      Place your video file in <code className="text-indigo-300 font-mono">public/videos/</code> and set <code className="text-indigo-300 font-mono">videoUrl: &quot;/videos/your-video.mp4&quot;</code> in <code className="text-indigo-300 font-mono">src/data/portfolioData.ts</code>.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
