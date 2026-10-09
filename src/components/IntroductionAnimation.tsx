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
    <div className="relative w-full rounded-2xl overflow-hidden bg-[#111827] border border-[#263449] shadow-2xl shadow-black/60 backdrop-blur-xl group transition-all duration-300">
      {/* Top Header Bar */}
      <div className="px-4 py-3 bg-[#0B1120] border-b border-[#263449] flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="flex h-2.5 w-2.5 relative">
            <span
              className={`absolute inline-flex h-full w-full rounded-full bg-[#22D3EE] opacity-75 ${
                isPlaying ? "animate-ping" : ""
              }`}
            />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#22D3EE]" />
          </span>
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-[#F8FAFC] tracking-tight font-heading">
              Spatio-Temporal GNN Simulation
            </span>
            <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-mono bg-[#2563EB]/15 text-[#22D3EE] border border-[#2563EB]/30">
              METR-LA Dataset
            </span>
          </div>
        </div>

        {/* Scene Switcher Tabs */}
        <div className="flex items-center gap-1 bg-[#111827] border border-[#263449] rounded-lg p-0.5">
          <button
            type="button"
            onClick={() => setActiveTab("graph")}
            className={`px-2.5 py-1 rounded text-[11px] font-medium transition-colors ${
              activeTab === "graph"
                ? "bg-[#1E293B] text-[#22D3EE] font-semibold border border-[#263449] shadow-sm"
                : "text-[#A7B2C4] hover:text-[#F8FAFC]"
            }`}
          >
            Network Graph
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("forecast")}
            className={`px-2.5 py-1 rounded text-[11px] font-medium transition-colors ${
              activeTab === "forecast"
                ? "bg-[#1E293B] text-[#22D3EE] font-semibold border border-[#263449] shadow-sm"
                : "text-[#A7B2C4] hover:text-[#F8FAFC]"
            }`}
          >
            Forecast
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("architecture")}
            className={`px-2.5 py-1 rounded text-[11px] font-medium transition-colors ${
              activeTab === "architecture"
                ? "bg-[#1E293B] text-[#22D3EE] font-semibold border border-[#263449] shadow-sm"
                : "text-[#A7B2C4] hover:text-[#F8FAFC]"
            }`}
          >
            Model
          </button>
        </div>
      </div>

      {/* Main Interactive Stage */}
      <div className="relative aspect-video w-full bg-[#0B1120] overflow-hidden select-none">
        {activeTab === "graph" && (
          <div className="relative w-full h-full p-4 flex flex-col justify-between">
            {/* SVG Network Canvas */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <linearGradient id="edgeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#2563EB" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.5" />
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
                        fill="#22D3EE"
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
                    : "#22D3EE";

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
                      stroke="#0B1120"
                      strokeWidth="0.5"
                    />
                    {/* Text Label */}
                    <text
                      x={node.x}
                      y={node.y - 3}
                      fill="#F8FAFC"
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
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#111827]/90 border border-[#263449] backdrop-blur-md">
                <TrendingDown className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-[11px] font-semibold text-[#F8FAFC]">
                  MAE: <span className="text-[#A7B2C4] line-through">3.8</span> →{" "}
                  <span className="text-emerald-400">3.1</span>
                </span>
                <span className="text-[10px] font-bold text-emerald-400 ml-1">
                  (-18.4%)
                </span>
              </div>

              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#111827]/90 border border-[#263449] backdrop-blur-md text-[10px] font-mono text-[#A7B2C4]">
                <Activity className="w-3.5 h-3.5 text-[#22D3EE]" />
                <span>207 Sensors</span>
              </div>
            </div>

            {/* Bottom Overlay: Selected Sensor Live Data Pill */}
            <div className="relative z-10 self-start pointer-events-auto">
              <div className="px-3 py-1.5 rounded-lg bg-[#111827]/95 border border-[#263449] backdrop-blur-md flex items-center gap-3">
                <div>
                  <p className="text-[10px] font-mono text-[#A7B2C4]">
                    Selected: <span className="text-[#F8FAFC] font-semibold">{selectedNodeData.name}</span>
                  </p>
                  <p className="text-[10px] text-[#A7B2C4] font-medium">
                    Speed:{" "}
                    <span
                      className={`font-mono font-bold ${
                        selectedNodeData.status === "congested"
                          ? "text-amber-400"
                          : selectedNodeData.status === "flow"
                          ? "text-emerald-400"
                          : "text-[#22D3EE]"
                      }`}
                    >
                      {selectedNodeData.speed} mph
                    </span>{" "}
                    <span className="text-[#A7B2C4]">({selectedNodeData.status})</span>
                  </p>
                </div>
                <div className="w-1.5 h-6 rounded-full bg-[#0B1120] border border-[#263449] overflow-hidden">
                  <div
                    className="w-full bg-[#22D3EE] transition-all duration-300"
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
                <h4 className="text-xs font-bold text-[#F8FAFC] flex items-center gap-1.5 font-heading">
                  <BarChart2 className="w-3.5 h-3.5 text-[#22D3EE]" />
                  Speed Forecasting: Ground Truth vs. GNN
                </h4>
                <p className="text-[10px] text-[#A7B2C4]">
                  Target Horizon: t + 15 / 30 / 60 minutes on METR-LA
                </p>
              </div>
              <div className="flex items-center gap-3 text-[10px] font-mono">
                <span className="flex items-center gap-1 text-[#A7B2C4]">
                  <span className="w-2.5 h-0.5 bg-[#A7B2C4] rounded-full" /> Actual
                </span>
                <span className="flex items-center gap-1 text-[#22D3EE]">
                  <span className="w-2.5 h-0.5 bg-[#22D3EE] rounded-full" /> ST-GNN Pred
                </span>
              </div>
            </div>

            {/* Forecast Curve Visualization */}
            <div className="relative h-28 w-full flex items-end gap-1.5 pt-4 pb-2 border-b border-[#263449]">
              {[58, 62, 59, 54, 48, 42, 38, 41, 49, 56, 61, 64, 63, 60, 58, 55].map(
                (val, i) => {
                  const pred = val + (Math.sin(tick + i) * 1.5);
                  return (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1 h-full justify-end group">
                      <div className="w-full relative flex items-end justify-center h-full">
                        {/* Actual Bar */}
                        <div
                          className="w-1 bg-[#263449] rounded-t"
                          style={{ height: `${(val / 75) * 100}%` }}
                        />
                        {/* Predicted Line Marker */}
                        <div
                          className="absolute w-2.5 h-1 bg-[#22D3EE] rounded-full shadow-sm shadow-[#22D3EE]/50"
                          style={{ bottom: `${(pred / 75) * 100}%` }}
                        />
                      </div>
                      <span className="text-[8px] font-mono text-[#A7B2C4]">
                        {i * 5}m
                      </span>
                    </div>
                  );
                }
              )}
            </div>

            <div className="flex items-center justify-between text-[10px] text-[#A7B2C4]">
              <span className="font-mono">Spatial-Temporal Convolution Loss: 0.142</span>
              <span className="text-emerald-400 font-semibold">Variance: ±1.2 mph</span>
            </div>
          </div>
        )}

        {activeTab === "architecture" && (
          <div className="w-full h-full p-5 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold text-[#F8FAFC] flex items-center gap-1.5 font-heading">
                <Layers className="w-3.5 h-3.5 text-[#2563EB]" />
                Spatio-Temporal GNN Layer Pipeline
              </h4>
              <span className="text-[10px] font-mono text-[#A7B2C4]">PyTorch Implementation</span>
            </div>

            {/* Architecture Pipeline Flow */}
            <div className="grid grid-cols-4 gap-2 items-center my-auto">
              <div className="p-2.5 rounded-lg bg-[#0B1120] border border-[#263449] text-center">
                <span className="text-[9px] font-mono text-[#A7B2C4] uppercase block">Input</span>
                <p className="text-[11px] font-bold text-[#F8FAFC]">Historical Window</p>
                <span className="text-[9px] text-[#A7B2C4] font-mono">12 Steps (t-60m)</span>
              </div>

              <div className="p-2.5 rounded-lg bg-[#0B1120] border border-[#2563EB]/40 text-center relative">
                <span className="text-[9px] font-mono text-[#22D3EE] uppercase block">Spatial</span>
                <p className="text-[11px] font-bold text-[#22D3EE]">Graph Conv</p>
                <span className="text-[9px] text-[#A7B2C4] font-mono">Adjacency A_ij</span>
              </div>

              <div className="p-2.5 rounded-lg bg-[#0B1120] border border-[#8B5CF6]/40 text-center">
                <span className="text-[9px] font-mono text-[#A78BFA] uppercase block">Temporal</span>
                <p className="text-[11px] font-bold text-[#A78BFA]">Gated CNN / GRU</p>
                <span className="text-[9px] text-[#A7B2C4] font-mono">Temporal Filter</span>
              </div>

              <div className="p-2.5 rounded-lg bg-[#0B1120] border border-emerald-500/40 text-center">
                <span className="text-[9px] font-mono text-emerald-400 uppercase block">Output</span>
                <p className="text-[11px] font-bold text-emerald-300">Speed Forecast</p>
                <span className="text-[9px] text-[#A7B2C4] font-mono">12 Steps (t+60m)</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] text-[#A7B2C4]">
              <span className="font-mono">Topology: Dynamic Gaussian Graph Adjacency</span>
              <span className="text-[#22D3EE] font-semibold">Master&apos;s Thesis Formulation</span>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Animation Controls Bar */}
      <div className="px-4 py-3 bg-[#0B1120] border-t border-[#263449] flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Play/Pause Animation Button */}
          <button
            type="button"
            onClick={() => setIsPlaying(!isPlaying)}
            aria-label={isPlaying ? "Pause simulation" : "Play simulation"}
            className="p-1.5 rounded-lg bg-[#2563EB]/20 hover:bg-[#2563EB]/30 text-[#22D3EE] hover:text-white border border-[#2563EB]/40 transition-colors"
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
            className="p-1.5 rounded-lg text-[#A7B2C4] hover:text-[#F8FAFC] hover:bg-[#111827] border border-transparent hover:border-[#263449] transition-colors"
            title="Reset step counter"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>

          {/* Speed Toggle */}
          <button
            type="button"
            onClick={() => setSpeedMultiplier(speedMultiplier === 1 ? 2 : 1)}
            className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#111827] hover:bg-[#1E293B] text-[#A7B2C4] hover:text-[#F8FAFC] border border-[#263449] transition-colors"
          >
            {speedMultiplier}x
          </button>

          <span className="text-[11px] font-mono text-[#A7B2C4] ml-1">
            Step: {tick}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="hidden sm:inline-block text-[11px] text-[#A7B2C4]">
            Interactive Thesis Demonstration
          </span>
          <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
            Verified Result: 18.4% MAE Drop
          </span>
        </div>
      </div>
    </div>
  );
}
