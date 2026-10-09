"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Play,
  Pause,
  RotateCcw,
  Sparkles,
  TrendingDown,
  Activity,
  Layers,
  Network,
  Cpu,
  BarChart2,
  CheckCircle2,
  Maximize2,
} from "lucide-react";

interface SensorNode {
  id: string;
  name: string;
  x: number;
  y: number;
  speed: number;
  baseSpeed: number;
  status: "normal" | "congested" | "flow";
}

export function IntroductionAnimation() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [speedMultiplier, setSpeedMultiplier] = useState(1);
  const [activeTab, setActiveTab] = useState<"graph" | "forecast" | "architecture">("graph");
  const [tick, setTick] = useState(0);
  const [selectedNode, setSelectedNode] = useState<string>("S-104");

  // Synthetic nodes representing a section of the METR-LA highway sensor network
  const [nodes, setNodes] = useState<SensorNode[]>([
    { id: "S-101", name: "I-210 West", x: 20, y: 30, speed: 64, baseSpeed: 65, status: "normal" },
    { id: "S-102", name: "I-210 / I-5", x: 50, y: 22, speed: 58, baseSpeed: 60, status: "normal" },
    { id: "S-103", name: "I-5 South", x: 80, y: 35, speed: 49, baseSpeed: 52, status: "congested" },
    { id: "S-104", name: "US-101 North", x: 35, y: 65, speed: 61, baseSpeed: 62, status: "flow" },
    { id: "S-105", name: "US-101 / I-10", x: 65, y: 60, speed: 43, baseSpeed: 45, status: "congested" },
    { id: "S-106", name: "I-10 Downtown", x: 85, y: 80, speed: 52, baseSpeed: 55, status: "flow" },
    { id: "S-107", name: "I-110 Corridor", x: 15, y: 80, speed: 66, baseSpeed: 68, status: "normal" },
  ]);

  // Edges connecting road sensors
  const edges = [
    { from: "S-101", to: "S-102" },
    { from: "S-102", to: "S-103" },
    { from: "S-101", to: "S-104" },
    { from: "S-104", to: "S-105" },
    { from: "S-102", to: "S-105" },
    { from: "S-105", to: "S-106" },
    { from: "S-103", to: "S-106" },
    { from: "S-107", to: "S-104" },
  ];

  // Animation cycle
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setTick((prev) => prev + 1);

      // Fluctuate sensor speeds dynamically
      setNodes((prevNodes) =>
        prevNodes.map((node, i) => {
          const wave = Math.sin((tick + i * 2) * 0.15) * 5;
          const newSpeed = Math.round(Math.max(30, Math.min(75, node.baseSpeed + wave)));
          let status: "normal" | "congested" | "flow" = "normal";
          if (newSpeed < 48) status = "congested";
          else if (newSpeed > 62) status = "flow";
          return { ...node, speed: newSpeed, status };
        })
      );
    }, 150 / speedMultiplier);

    return () => clearInterval(interval);
  }, [isPlaying, tick, speedMultiplier]);

  const handleReset = () => {
    setTick(0);
  };

  const selectedNodeData = nodes.find((n) => n.id === selectedNode) || nodes[3];

  return (
    <div className="relative w-full rounded-2xl overflow-hidden bg-slate-900/95 border border-slate-700/60 shadow-2xl shadow-black/60 backdrop-blur-xl group transition-all duration-300 hover:border-slate-600">
      {/* Top Header Bar */}
      <div className="px-4 py-3 bg-slate-950/90 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="flex h-2.5 w-2.5 relative">
            <span
              className={`absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 ${
                isPlaying ? "animate-ping" : ""
              }`}
            />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-100 tracking-tight">
              Spatio-Temporal GNN Simulation
            </span>
            <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
              METR-LA Dataset
            </span>
          </div>
        </div>

        {/* Scene Switcher Tabs */}
        <div className="flex items-center gap-1 bg-slate-900 border border-slate-800 rounded-lg p-0.5">
          <button
            type="button"
            onClick={() => setActiveTab("graph")}
            className={`px-2.5 py-1 rounded text-[11px] font-medium transition-colors ${
              activeTab === "graph"
                ? "bg-slate-800 text-sky-300 font-semibold shadow-sm"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Network Graph
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("forecast")}
            className={`px-2.5 py-1 rounded text-[11px] font-medium transition-colors ${
              activeTab === "forecast"
                ? "bg-slate-800 text-sky-300 font-semibold shadow-sm"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Forecast
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("architecture")}
            className={`px-2.5 py-1 rounded text-[11px] font-medium transition-colors ${
              activeTab === "architecture"
                ? "bg-slate-800 text-sky-300 font-semibold shadow-sm"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Model
          </button>
        </div>
      </div>

      {/* Main Interactive Stage */}
      <div className="relative aspect-video w-full bg-[#0a0f18] overflow-hidden select-none">
        {/* Subtle background coordinate grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />

        {activeTab === "graph" && (
          <div className="relative w-full h-full p-4 flex flex-col justify-between">
            {/* SVG Network Canvas */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <linearGradient id="edgeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#6366f1" stopOpacity="0.4" />
                </linearGradient>
              </defs>

              {/* Render Road Edges */}
              {edges.map((edge, idx) => {
                const source = nodes.find((n) => n.id === edge.from);
                const target = nodes.find((n) => n.id === edge.to);
                if (!source || !target) return null;

                // Animated pulse packet traveling on the edge
                const pulseT = ((tick * 2 + idx * 25) % 100) / 100;
                const pulseX = source.x + (target.x - source.x) * pulseT;
                const pulseY = source.y + (target.y - source.y) * pulseT;

                return (
                  <g key={`${edge.from}-${edge.to}`}>
                    <line
                      x1={source.x}
                      y1={source.y}
                      x2={target.x}
                      y2={target.y}
                      stroke="url(#edgeGradient)"
                      strokeWidth="0.8"
                      strokeDasharray="2,2"
                    />
                    {isPlaying && (
                      <circle
                        cx={pulseX}
                        cy={pulseY}
                        r="1"
                        fill="#38bdf8"
                        opacity="0.85"
                      />
                    )}
                  </g>
                );
              })}

              {/* Render Sensor Nodes */}
              {nodes.map((node) => {
                const isSelected = node.id === selectedNode;
                const nodeColor =
                  node.status === "congested"
                    ? "#f59e0b"
                    : node.status === "flow"
                    ? "#10b981"
                    : "#38bdf8";

                return (
                  <g
                    key={node.id}
                    onClick={() => setSelectedNode(node.id)}
                    className="cursor-pointer transition-transform duration-200"
                  >
                    {/* Outer pulse aura */}
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r={isSelected ? 4 : 2.8}
                      fill={nodeColor}
                      opacity={isSelected ? "0.35" : "0.15"}
                    />
                    {/* Node Core */}
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r={isSelected ? 2.2 : 1.6}
                      fill={nodeColor}
                      stroke="#0f172a"
                      strokeWidth="0.5"
                    />
                    {/* Text Label */}
                    <text
                      x={node.x}
                      y={node.y - 3}
                      fill="#e2e8f0"
                      fontSize="2.4"
                      textAnchor="middle"
                      fontWeight="600"
                      className="font-mono pointer-events-none"
                    >
                      {node.id}
                    </text>
                  </g>
                );
              })}
            </svg>

            {/* Top Overlay: Key Thesis Result Badge */}
            <div className="relative z-10 flex items-center justify-between pointer-events-none">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900/85 border border-slate-700/80 backdrop-blur-md">
                <TrendingDown className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-[11px] font-semibold text-slate-200">
                  MAE: <span className="text-slate-400 line-through">3.8</span> →{" "}
                  <span className="text-emerald-400">3.1</span>
                </span>
                <span className="text-[10px] font-bold text-emerald-400 ml-1">
                  (-18.4%)
                </span>
              </div>

              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-slate-900/85 border border-slate-700/80 backdrop-blur-md text-[10px] font-mono text-slate-300">
                <Activity className="w-3 h-3 text-sky-400" />
                <span>207 Sensors</span>
              </div>
            </div>

            {/* Bottom Overlay: Selected Sensor Live Data Pill */}
            <div className="relative z-10 self-start pointer-events-auto">
              <div className="px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-700/80 backdrop-blur-md flex items-center gap-3">
                <div>
                  <p className="text-[10px] font-mono text-slate-400">
                    Selected: <span className="text-slate-200 font-semibold">{selectedNodeData.name}</span>
                  </p>
                  <p className="text-[10px] text-slate-300 font-medium">
                    Speed:{" "}
                    <span
                      className={`font-mono font-bold ${
                        selectedNodeData.status === "congested"
                          ? "text-amber-400"
                          : selectedNodeData.status === "flow"
                          ? "text-emerald-400"
                          : "text-sky-300"
                      }`}
                    >
                      {selectedNodeData.speed} mph
                    </span>{" "}
                    <span className="text-slate-400">({selectedNodeData.status})</span>
                  </p>
                </div>
                <div className="w-1.5 h-6 rounded-full bg-slate-800 overflow-hidden">
                  <div
                    className="w-full bg-sky-400 transition-all duration-300"
                    style={{ height: `${(selectedNodeData.speed / 75) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "forecast" && (
          <div className="w-full h-full p-5 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-xs font-bold text-slate-200 flex items-center gap-1.5">
                  <BarChart2 className="w-3.5 h-3.5 text-sky-400" />
                  Speed Forecasting: Ground Truth vs. GNN
                </h4>
                <p className="text-[10px] text-slate-400">
                  Target Horizon: t + 15 / 30 / 60 minutes on METR-LA
                </p>
              </div>
              <div className="flex items-center gap-3 text-[10px] font-mono">
                <span className="flex items-center gap-1 text-slate-300">
                  <span className="w-2.5 h-0.5 bg-slate-400 rounded-full" /> Actual
                </span>
                <span className="flex items-center gap-1 text-sky-300">
                  <span className="w-2.5 h-0.5 bg-sky-400 rounded-full" /> ST-GNN Pred
                </span>
              </div>
            </div>

            {/* Forecast Curve Visualization */}
            <div className="relative h-28 w-full flex items-end gap-1.5 pt-4 pb-2 border-b border-slate-800">
              {[58, 62, 59, 54, 48, 42, 38, 41, 49, 56, 61, 64, 63, 60, 58, 55].map(
                (val, i) => {
                  const pred = val + (Math.sin(tick + i) * 1.5);
                  return (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1 h-full justify-end group">
                      <div className="w-full relative flex items-end justify-center h-full">
                        {/* Actual Bar */}
                        <div
                          className="w-1 bg-slate-600 rounded-t"
                          style={{ height: `${(val / 75) * 100}%` }}
                        />
                        {/* Predicted Line Marker */}
                        <div
                          className="absolute w-2.5 h-1 bg-sky-400 rounded-full shadow-sm shadow-sky-400/50"
                          style={{ bottom: `${(pred / 75) * 100}%` }}
                        />
                      </div>
                      <span className="text-[8px] font-mono text-slate-400">
                        {i * 5}m
                      </span>
                    </div>
                  );
                }
              )}
            </div>

            <div className="flex items-center justify-between text-[10px] text-slate-400">
              <span className="font-mono">Spatial-Temporal Convolution Loss: 0.142</span>
              <span className="text-emerald-400 font-semibold">Variance: ±1.2 mph</span>
            </div>
          </div>
        )}

        {activeTab === "architecture" && (
          <div className="w-full h-full p-5 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold text-slate-200 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-indigo-400" />
                Spatio-Temporal GNN Layer Pipeline
              </h4>
              <span className="text-[10px] font-mono text-slate-400">PyTorch Implementation</span>
            </div>

            {/* Architecture Pipeline Flow */}
            <div className="grid grid-cols-4 gap-2 items-center my-auto">
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-center">
                <span className="text-[9px] font-mono text-slate-400 uppercase block">Input</span>
                <p className="text-[11px] font-bold text-slate-200">Historical Window</p>
                <span className="text-[9px] text-slate-400 font-mono">12 Steps (t-60m)</span>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-900 border border-sky-500/30 text-center relative">
                <span className="text-[9px] font-mono text-sky-400 uppercase block">Spatial</span>
                <p className="text-[11px] font-bold text-sky-200">Graph Conv</p>
                <span className="text-[9px] text-slate-400 font-mono">Adjacency A_ij</span>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-900 border border-indigo-500/30 text-center">
                <span className="text-[9px] font-mono text-indigo-400 uppercase block">Temporal</span>
                <p className="text-[11px] font-bold text-indigo-200">Gated CNN / GRU</p>
                <span className="text-[9px] text-slate-400 font-mono">Temporal Filter</span>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-900 border border-emerald-500/30 text-center">
                <span className="text-[9px] font-mono text-emerald-400 uppercase block">Output</span>
                <p className="text-[11px] font-bold text-emerald-200">Speed Forecast</p>
                <span className="text-[9px] text-slate-400 font-mono">12 Steps (t+60m)</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] text-slate-400">
              <span className="font-mono">Topology: Dynamic Gaussian Graph Adjacency</span>
              <span className="text-indigo-300 font-semibold">Master&apos;s Thesis Formulation</span>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Animation Controls Bar */}
      <div className="px-4 py-3 bg-slate-950/95 border-t border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Play/Pause Animation Button */}
          <button
            type="button"
            onClick={() => setIsPlaying(!isPlaying)}
            aria-label={isPlaying ? "Pause simulation" : "Play simulation"}
            className="p-1.5 rounded-lg bg-sky-500/15 hover:bg-sky-500/25 text-sky-300 hover:text-white border border-sky-500/30 transition-colors"
          >
            {isPlaying ? (
              <Pause className="w-3.5 h-3.5 fill-current" />
            ) : (
              <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
            )}
          </button>

          {/* Reset */}
          <button
            type="button"
            onClick={handleReset}
            aria-label="Reset simulation"
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-900 transition-colors"
            title="Reset step counter"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>

          {/* Speed Toggle */}
          <button
            type="button"
            onClick={() => setSpeedMultiplier(speedMultiplier === 1 ? 2 : 1)}
            className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 transition-colors"
          >
            {speedMultiplier}x
          </button>

          <span className="text-[11px] font-mono text-slate-400 ml-1">
            Step: {tick}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="hidden sm:inline-block text-[11px] text-slate-400">
            Interactive Thesis Demonstration
          </span>
          <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
            Verified Result: 18% MAE Drop
          </span>
        </div>
      </div>
    </div>
  );
}
