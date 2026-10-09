"use client";

import React, { useState, useRef, useEffect } from "react";
import { portfolioData } from "@/data/portfolioData";
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
  Bot,
  Video as VideoIcon,
  Clock,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

export function AIVideoPlayer({ compact = false }: { compact?: boolean }) {
  const { video } = portfolioData;

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(130); // 2:10 duration placeholder
  const [showTranscript, setShowTranscript] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedTranscript, setCopiedTranscript] = useState(false);
  const [activeTimestampIndex, setActiveTimestampIndex] = useState(0);

  const videoRef = useRef<HTMLVideoElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);

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
    <div
      id="video"
      ref={videoContainerRef}
      className="relative w-full rounded-2xl overflow-hidden bg-slate-900/90 border border-indigo-500/30 shadow-2xl shadow-indigo-950/50 backdrop-blur-xl group transition-all duration-300 hover:border-indigo-400/50"
    >
      {/* Top Header Bar */}
      <div className="px-4 py-3 bg-slate-950/80 border-b border-white/[0.08] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-semibold text-white tracking-tight flex items-center gap-1.5">
            <Bot className="w-3.5 h-3.5 text-indigo-400" />
            AI Video Introduction
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.04] text-slate-300 border border-white/[0.06]">
            1080p • No Autoplay
          </span>
          <button
            type="button"
            onClick={() => setShowTranscript(!showTranscript)}
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-medium bg-indigo-500/15 hover:bg-indigo-500/25 text-indigo-300 border border-indigo-500/30 transition-colors"
            title="Toggle Transcript Drawer"
          >
            <FileText className="w-3 h-3" />
            <span>Transcript</span>
            {showTranscript ? (
              <ChevronUp className="w-3 h-3 ml-0.5" />
            ) : (
              <ChevronDown className="w-3 h-3 ml-0.5" />
            )}
          </button>
        </div>
      </div>

      {/* Video Screen or Polished AI Placeholder */}
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
          <div className="relative w-full h-full flex flex-col items-center justify-center p-5 text-center select-none bg-gradient-to-b from-slate-900 via-[#0d1322] to-[#080b11]">
            <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
            <div className="absolute w-64 h-64 rounded-full bg-indigo-600/15 blur-3xl pointer-events-none" />
            <div className="absolute w-44 h-44 rounded-full bg-violet-600/15 blur-2xl pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center max-w-sm">
              <div className="relative mb-3.5">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-violet-500 flex items-center justify-center shadow-lg shadow-indigo-500/30 transition-all duration-300 ${
                    isPlaying ? "scale-105 shadow-indigo-500/50" : ""
                  }`}
                >
                  <Bot className="w-8 h-8 text-white" />
                </div>
                {isPlaying && (
                  <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-slate-900" />
                  </span>
                )}
              </div>

              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/[0.06] border border-white/[0.1] text-[11px] font-medium text-indigo-200 mb-2 backdrop-blur-sm">
                <Sparkles className="w-3 h-3 text-indigo-400" />
                <span>AI Presenter Avatar • Meet Adarsh</span>
              </div>

              <h3 className="text-sm sm:text-base font-bold text-white mb-1 tracking-tight">
                Adarsh — Research & Skills Introduction
              </h3>

              <p className="text-[11px] text-slate-400 mb-3 leading-relaxed line-clamp-2">
                {video.placeholderNote}
              </p>

              {/* Soundwave Visualizer */}
              <div className="flex items-center gap-1 h-5 mb-4">
                {[35, 75, 40, 95, 60, 100, 50, 85, 45, 70, 90, 30].map((height, i) => (
                  <span
                    key={i}
                    className={`w-0.5 sm:w-1 rounded-full bg-gradient-to-t from-indigo-500 to-violet-400 transition-all duration-200 ${
                      isPlaying ? "opacity-90" : "opacity-25"
                    }`}
                    style={{
                      height: isPlaying ? `${Math.max(25, (height * (currentTime % 4 + 1)) / 4)}%` : "25%",
                    }}
                  />
                ))}
              </div>

              {/* Interactive Play Button */}
              <button
                type="button"
                onClick={togglePlay}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition-all shadow-md shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:scale-105"
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-3.5 h-3.5 fill-white" />
                    <span>Pause Introduction</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 fill-white ml-0.5" />
                    <span>Play AI Introduction</span>
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Playback Controls Bar */}
      <div className="p-3.5 bg-slate-950/90 border-t border-white/[0.08] backdrop-blur-lg flex flex-col gap-2.5">
        {/* Scrubber */}
        <input
          type="range"
          min="0"
          max={duration || 100}
          step="0.1"
          value={currentTime}
          onChange={handleSeek}
          aria-label="Video seek scrubber"
          className="w-full h-1 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-indigo-500 hover:h-1.5 transition-all"
        />

        {/* Action Controls */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={togglePlay}
              aria-label={isPlaying ? "Pause video" : "Play video"}
              className="p-1.5 rounded-lg bg-indigo-600/20 hover:bg-indigo-600 text-indigo-300 hover:text-white transition-colors"
            >
              {isPlaying ? (
                <Pause className="w-3.5 h-3.5 fill-current" />
              ) : (
                <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
              )}
            </button>

            <button
              type="button"
              onClick={handleReset}
              aria-label="Restart video"
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.06] transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>

            <button
              type="button"
              onClick={toggleMute}
              aria-label={isMuted ? "Unmute audio" : "Mute audio"}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.06] transition-colors"
            >
              {isMuted ? (
                <VolumeX className="w-3.5 h-3.5 text-amber-400" />
              ) : (
                <Volume2 className="w-3.5 h-3.5 text-emerald-400" />
              )}
            </button>

            <span className="text-[11px] font-mono text-slate-400">
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleFullscreen}
              aria-label="Toggle fullscreen"
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.06] transition-colors"
            >
              <Maximize2 className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Expandable Transcript Drawer */}
      {showTranscript && (
        <div className="p-4 bg-slate-950 border-t border-white/[0.08] animate-in slide-in-from-top-2 duration-200">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.06]">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-indigo-400" />
              <h4 className="text-xs font-bold text-white">
                Introduction Script & Transcript
              </h4>
            </div>

            <button
              type="button"
              onClick={handleCopyTranscript}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-medium bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/[0.06] transition-colors"
            >
              {copiedTranscript ? (
                <>
                  <Check className="w-3 h-3 text-emerald-400" />
                  <span className="text-emerald-400">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3" />
                  <span>Copy All</span>
                </>
              )}
            </button>
          </div>

          {/* Search */}
          <div className="relative mb-3">
            <Search className="w-3 h-3 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Filter topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-900 border border-white/[0.08] rounded-lg pl-8 pr-3 py-1.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>

          {/* Scrollable list */}
          <div className="space-y-2.5 max-h-56 overflow-y-auto pr-1">
            {filteredTranscripts.map((item, idx) => (
              <div
                key={idx}
                onClick={() => setActiveTimestampIndex(idx)}
                className={`p-2.5 rounded-lg border text-left cursor-pointer transition-colors ${
                  activeTimestampIndex === idx
                    ? "bg-indigo-600/[0.12] border-indigo-500/40"
                    : "bg-white/[0.02] border-white/[0.05] hover:bg-white/[0.04]"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] font-semibold text-white">
                    {item.title}
                  </span>
                  <span className="text-[10px] font-mono text-indigo-400 bg-indigo-500/10 px-1.5 py-0.5 rounded">
                    {item.timestamp}
                  </span>
                </div>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-3 pt-2 border-t border-white/[0.06] flex items-center justify-between text-[10px] text-slate-400 font-mono">
            <span>Video path: src/data/portfolioData.ts</span>
            <button
              type="button"
              onClick={() => setShowTranscript(false)}
              className="text-indigo-400 hover:text-indigo-300"
            >
              Close Drawer ↑
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
