"use client";

import React, { useState, useEffect } from "react";
import {
  Play,
  Pause,
  RotateCcw,
  TrendingDown,
  Activity,
  Layers,
  BarChart2,
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
    <div className="relative w-full rounded-2xl overflow-hidden bg-white dark:bg-[#1D1714] border border-[#E5E4E2] dark:border-[#3A2E26] shadow-sm dark:shadow-2xl backdrop-blur-xl group transition-all duration-300">
      {/* Top Header Bar */}
      <div className="px-4 py-3 bg-slate-50 dark:bg-[#140F0D] border-b border-[#E5E4E2] dark:border-[#3A2E26] flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="flex h-2.5 w-2.5 relative">
            <span
              className={`absolute inline-flex h-full w-full rounded-full bg-[#6F4E37] dark:bg-[#E6E0F0] opacity-75 ${
                isPlaying ? "animate-ping" : ""
              }`}
            />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#6F4E37] dark:bg-[#E6E0F0]" />
          </span>

          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-900 dark:text-[#FAF8F6] tracking-tight font-heading">
              Spatio-Temporal GNN Simulation
            </span>
            <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-mono bg-[#E6E0F0]/60 text-[#6F4E37] border border-[#6F4E37]/30 dark:bg-[#6F4E37]/25 dark:text-[#E6E0F0] dark:border-[#E6E0F0]/30">
              METR-LA Dataset
            </span>
          </div>
        </div>

        {/* Scene Switcher Tabs */}
        <div className="flex items-center gap-1 bg-slate-200/70 dark:bg-[#140F0D] border border-[#E5E4E2] dark:border-[#3A2E26] rounded-lg p-0.5">
          <button
            type="button"
            onClick={() => setActiveTab("graph")}
            className={`px-2.5 py-1 rounded text-[11px] font-medium transition-colors cursor-pointer ${
              activeTab === "graph"
                ? "bg-white text-[#6F4E37] dark:bg-[#2A201A] dark:text-[#E6E0F0] font-semibold border border-[#E5E4E2] dark:border-[#3A2E26] shadow-sm"
                : "text-slate-600 hover:text-slate-900 dark:text-[#E5E4E2] dark:hover:text-[#FAF8F6]"
            }`}
          >
            Network Graph
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("forecast")}
            className={`px-2.5 py-1 rounded text-[11px] font-medium transition-colors cursor-pointer ${
              activeTab === "forecast"
                ? "bg-white text-[#6F4E37] dark:bg-[#2A201A] dark:text-[#E6E0F0] font-semibold border border-[#E5E4E2] dark:border-[#3A2E26] shadow-sm"
                : "text-slate-600 hover:text-slate-900 dark:text-[#E5E4E2] dark:hover:text-[#FAF8F6]"
            }`}
          >
            Forecast
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("architecture")}
            className={`px-2.5 py-1 rounded text-[11px] font-medium transition-colors cursor-pointer ${
              activeTab === "architecture"
                ? "bg-white text-[#6F4E37] dark:bg-[#2A201A] dark:text-[#E6E0F0] font-semibold border border-[#E5E4E2] dark:border-[#3A2E26] shadow-sm"
                : "text-slate-600 hover:text-slate-900 dark:text-[#E5E4E2] dark:hover:text-[#FAF8F6]"
            }`}
          >
            Model
          </button>
        </div>
      </div>

      {/* Main Interactive Stage */}
      <div className="relative aspect-video w-full bg-slate-950 dark:bg-[#140F0D] overflow-hidden select-none">
        {activeTab === "graph" && (
          <div className="relative w-full h-full p-4 flex flex-col justify-between">
            {/* SVG Network Canvas */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <linearGradient id="edgeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#6F4E37" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#E6E0F0" stopOpacity="0.6" />
                </linearGradient>
              </defs>

              {/* Render Road Edges */}
              {edges.map((edge, idx) => {
                const source = nodes.find((n) => n.id === edge.from);
                const target = nodes.find((n) => n.id === edge.to);
                if (!source || !target) return null;

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
                        fill="#E6E0F0"
                        opacity="0.9"
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
                    : "#E6E0F0";

                return (
                  <g
                    key={node.id}
                    onClick={() => setSelectedNode(node.id)}
                    className="cursor-pointer transition-transform duration-200"
                  >
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r={isSelected ? 4 : 2.8}
                      fill={nodeColor}
                      opacity={isSelected ? "0.4" : "0.18"}
                    />
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r={isSelected ? 2.2 : 1.6}
                      fill={nodeColor}
                      stroke="#140F0D"
                      strokeWidth="0.5"
                    />
                    <text
                      x={node.x}
                      y={node.y - 3}
                      fill="#FAF8F6"
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

            {/* Top Overlay */}
            <div className="relative z-10 flex items-center justify-between pointer-events-none">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900/90 dark:bg-[#1D1714]/90 border border-slate-700 dark:border-[#3A2E26] backdrop-blur-md">
                <TrendingDown className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-[11px] font-semibold text-white">
                  MAE: <span className="text-slate-400 line-through">3.8</span> →{" "}
                  <span className="text-emerald-400">3.1</span>
                </span>
                <span className="text-[10px] font-bold text-emerald-400 ml-1">
                  (-18.4%)
                </span>
              </div>

              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-slate-900/90 dark:bg-[#1D1714]/90 border border-slate-700 dark:border-[#3A2E26] backdrop-blur-md text-[10px] font-mono text-[#E5E4E2]">
                <Activity className="w-3.5 h-3.5 text-[#E6E0F0]" />
                <span>207 Sensors</span>
              </div>
            </div>

            {/* Bottom Overlay: Selected Sensor Live Data Pill */}
            <div className="relative z-10 self-start pointer-events-auto">
              <div className="px-3 py-1.5 rounded-lg bg-slate-900/95 dark:bg-[#1D1714]/95 border border-slate-700 dark:border-[#3A2E26] backdrop-blur-md flex items-center gap-3">
                <div>
                  <p className="text-[10px] font-mono text-slate-400 dark:text-[#E5E4E2]/70">
                    Selected: <span className="text-white font-semibold">{selectedNodeData.name}</span>
                  </p>
                  <p className="text-[10px] text-slate-300 dark:text-[#E5E4E2] font-medium">
                    Speed:{" "}
                    <span
                      className={`font-mono font-bold ${
                        selectedNodeData.status === "congested"
                          ? "text-amber-400"
                          : selectedNodeData.status === "flow"
                          ? "text-emerald-400"
                          : "text-[#E6E0F0]"
                      }`}
                    >
                      {selectedNodeData.speed} mph
                    </span>{" "}
                    <span className="text-slate-400">({selectedNodeData.status})</span>
                  </p>
                </div>
                <div className="w-1.5 h-6 rounded-full bg-slate-950 dark:bg-[#140F0D] border border-slate-700 dark:border-[#3A2E26] overflow-hidden">
                  <div
                    className="w-full bg-[#E6E0F0] transition-all duration-300"
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
                <h4 className="text-xs font-bold text-white flex items-center gap-1.5 font-heading">
                  <BarChart2 className="w-3.5 h-3.5 text-[#E6E0F0]" />
                  Speed Forecasting: Ground Truth vs. GNN
                </h4>
                <p className="text-[10px] text-slate-400 dark:text-[#E5E4E2]/70">
                  Target Horizon: t + 15 / 30 / 60 minutes on METR-LA
                </p>
              </div>
              <div className="flex items-center gap-3 text-[10px] font-mono">
                <span className="flex items-center gap-1 text-slate-400">
                  <span className="w-2.5 h-0.5 bg-slate-400 rounded-full" /> Actual
                </span>
                <span className="flex items-center gap-1 text-[#E6E0F0]">
                  <span className="w-2.5 h-0.5 bg-[#E6E0F0] rounded-full" /> ST-GNN Pred
                </span>
              </div>
            </div>

            {/* Forecast Curve Visualization */}
            <div className="relative h-28 w-full flex items-end gap-1.5 pt-4 pb-2 border-b border-slate-800 dark:border-[#3A2E26]">
              {[58, 62, 59, 54, 48, 42, 38, 41, 49, 56, 61, 64, 63, 60, 58, 55].map(
                (val, i) => {
                  const pred = val + (Math.sin(tick + i) * 1.5);
                  return (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1 h-full justify-end group">
                      <div className="w-full relative flex items-end justify-center h-full">
                        <div
                          className="w-1 bg-slate-700 rounded-t"
                          style={{ height: `${(val / 75) * 100}%` }}
                        />
                        <div
                          className="absolute w-2.5 h-1 bg-[#E6E0F0] rounded-full shadow-sm shadow-[#E6E0F0]/50"
                          style={{ bottom: `${(pred / 75) * 100}%` }}
                        />
                      </div>
                      <span className="text-[8px] font-mono text-slate-400 dark:text-[#E5E4E2]/70">
                        {i * 5}m
                      </span>
                    </div>
                  );
                }
              )}
            </div>

            <div className="flex items-center justify-between text-[10px] text-slate-400 dark:text-[#E5E4E2]/70">
              <span className="font-mono">Spatial-Temporal Convolution Loss: 0.142</span>
              <span className="text-emerald-400 font-semibold">Variance: ±1.2 mph</span>
            </div>
          </div>
        )}

        {activeTab === "architecture" && (
          <div className="w-full h-full p-5 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold text-white flex items-center gap-1.5 font-heading">
                <Layers className="w-3.5 h-3.5 text-[#6F4E37] dark:text-[#E6E0F0]" />
                Spatio-Temporal GNN Layer Pipeline
              </h4>
              <span className="text-[10px] font-mono text-slate-400 dark:text-[#E5E4E2]/70">PyTorch Implementation</span>
            </div>

            {/* Architecture Pipeline Flow */}
            <div className="grid grid-cols-4 gap-2 items-center my-auto">
              <div className="p-2.5 rounded-lg bg-slate-900 dark:bg-[#1D1714] border border-slate-700 dark:border-[#3A2E26] text-center">
                <span className="text-[9px] font-mono text-slate-400 dark:text-[#E5E4E2]/70 uppercase block">Input</span>
                <p className="text-[11px] font-bold text-white">Historical Window</p>
                <span className="text-[9px] text-slate-400 dark:text-[#E5E4E2]/70 font-mono">12 Steps (t-60m)</span>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-900 dark:bg-[#1D1714] border border-[#6F4E37]/50 dark:border-[#E6E0F0]/40 text-center relative">
                <span className="text-[9px] font-mono text-[#6F4E37] dark:text-[#E6E0F0] uppercase block">Spatial</span>
                <p className="text-[11px] font-bold text-[#6F4E37] dark:text-[#E6E0F0]">Graph Conv</p>
                <span className="text-[9px] text-slate-400 dark:text-[#E5E4E2]/70 font-mono">Adjacency A_ij</span>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-900 dark:bg-[#1D1714] border border-purple-500/40 text-center">
                <span className="text-[9px] font-mono text-purple-400 uppercase block">Temporal</span>
                <p className="text-[11px] font-bold text-purple-300">Gated CNN / GRU</p>
                <span className="text-[9px] text-slate-400 dark:text-[#E5E4E2]/70 font-mono">Temporal Filter</span>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-900 dark:bg-[#1D1714] border border-emerald-500/40 text-center">
                <span className="text-[9px] font-mono text-emerald-400 uppercase block">Output</span>
                <p className="text-[11px] font-bold text-emerald-300">Speed Forecast</p>
                <span className="text-[9px] text-slate-400 dark:text-[#E5E4E2]/70 font-mono">12 Steps (t+60m)</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] text-slate-400 dark:text-[#E5E4E2]/70">
              <span className="font-mono">Topology: Dynamic Gaussian Graph Adjacency</span>
              <span className="text-[#6F4E37] dark:text-[#E6E0F0] font-semibold">Master&apos;s Thesis Formulation</span>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Animation Controls Bar */}
      <div className="px-4 py-3 bg-slate-50 dark:bg-[#140F0D] border-t border-[#E5E4E2] dark:border-[#3A2E26] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setIsPlaying(!isPlaying)}
            aria-label={isPlaying ? "Pause simulation" : "Play simulation"}
            className="p-1.5 rounded-lg bg-[#E6E0F0]/60 text-[#6F4E37] dark:bg-[#6F4E37]/30 dark:text-[#E6E0F0] hover:bg-[#E6E0F0] dark:hover:bg-[#6F4E37]/45 border border-[#6F4E37]/30 dark:border-[#E6E0F0]/30 transition-colors cursor-pointer"
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
            aria-label="Reset simulation"
            className="p-1.5 rounded-lg text-slate-600 hover:text-slate-900 dark:text-[#E5E4E2] dark:hover:text-[#FAF8F6] hover:bg-slate-100 dark:hover:bg-[#1D1714] border border-[#E5E4E2] dark:border-transparent dark:hover:border-[#3A2E26] transition-colors cursor-pointer"
            title="Reset step counter"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>

          <button
            type="button"
            onClick={() => setSpeedMultiplier(speedMultiplier === 1 ? 2 : 1)}
            className="px-2 py-0.5 rounded text-[11px] font-mono bg-white dark:bg-[#1D1714] hover:bg-slate-100 dark:hover:bg-[#2A201A] text-slate-700 dark:text-[#E5E4E2] hover:text-slate-900 dark:hover:text-[#FAF8F6] border border-[#E5E4E2] dark:border-[#3A2E26] transition-colors cursor-pointer"
          >
            {speedMultiplier}x
          </button>

          <span className="text-[11px] font-mono text-slate-500 dark:text-[#E5E4E2] ml-1">
            Step: {tick}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="hidden sm:inline-block text-[11px] text-slate-500 dark:text-[#E5E4E2]">
            Interactive Thesis Demonstration
          </span>
          <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
            Verified Result: 18.4% MAE Drop
          </span>
        </div>
      </div>
    </div>
  );
}
