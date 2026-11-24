import React, { useState } from 'react';
import {
  TrendingUp,
  BarChart2,
  Activity,
  CheckCircle2,
  Clock,
  Sparkles,
  Layers
} from 'lucide-react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend
} from 'recharts';
import { BENCHMARK_DATA, INDUSTRY_IMPACT_DATA } from '../data/nexoraData';

export const Statistics = () => {
  const [activeChart, setActiveChart] = useState('benchmark');

  return (
    <section className="py-24 relative overflow-hidden bg-navy-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full nexora-card border border-cyan-500/30 text-xs font-semibold text-cyan-400 mb-4">
            <BarChart2 className="w-3.5 h-3.5" />
            <span>EMPIRICAL BENCHMARKS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white dark:text-white tracking-tight mb-4">
            Company Statistics & <span className="text-gradient">Performance Impact</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 dark:text-slate-300 leading-relaxed">
            Rigorous mathematical benchmarks evaluating accuracy over iterative training versions and cross-industry operational speedups.
          </p>

          {/* Chart Toggle Buttons */}
          <div className="flex items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setActiveChart('benchmark')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeChart === 'benchmark'
                  ? 'bg-cyan-500 text-white shadow-[0_0_15px_rgba(0,210,255,0.4)]'
                  : 'nexora-card border border-white/10 text-slate-300 hover:text-white'
              }`}
            >
              Model Accuracy vs Industry Baseline
            </button>
            <button
              onClick={() => setActiveChart('impact')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeChart === 'impact'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_15px_rgba(0,210,255,0.4)]'
                  : 'nexora-card border border-white/10 text-slate-300 hover:text-white'
              }`}
            >
              Industry Efficiency & Speedup Gains
            </button>
          </div>
        </div>

        {/* Interactive Chart Container */}
        <div className="rounded-3xl nexora-card border border-white/15 p-6 sm:p-8 shadow-2xl mb-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 border-b border-white/10 mb-6 gap-2">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Activity className="w-4 h-4 text-cyan-400" />
                {activeChart === 'benchmark'
                  ? 'Reasoning Precision Benchmark (Nexora AI vs Industry Average)'
                  : 'Quantified Enterprise Operational Speedup (% Acceleration)'}
              </h3>
              <p className="text-xs text-slate-400">
                {activeChart === 'benchmark'
                  ? 'Normalized F1 score across 10,000 multi-turn domain challenges'
                  : 'Empirical acceleration observed across customer production deployments'}
              </p>
            </div>
            <div className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
              Interactive Telemetry
            </div>
          </div>

          <div className="h-[340px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              {activeChart === 'benchmark' ? (
                <LineChart data={BENCHMARK_DATA} margin={{ top: 20, right: 30, left: 0, bottom: 10 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                  <XAxis dataKey="epoch" stroke="#94a3b8" />
                  <YAxis domain={[65, 100]} stroke="#94a3b8" unit="%" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#0a0f1d',
                      borderColor: 'rgba(56, 189, 248, 0.4)',
                      borderRadius: '12px',
                      color: '#f8fafc',
                      fontSize: '12px',
                    }}
                  />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="nexoraScore"
                    name="Nexora AI Engine"
                    stroke="#00d2ff"
                    strokeWidth={3}
                    dot={{ fill: '#00d2ff', r: 5 }}
                    activeDot={{ r: 8, stroke: '#ffffff' }}
                  />
                  <Line
                    type="monotone"
                    dataKey="industryBaseline"
                    name="Industry Baseline Standard"
                    stroke="#8b5cf6"
                    strokeWidth={2}
                    strokeDasharray="4 4"
                    dot={{ fill: '#8b5cf6', r: 4 }}
                  />
                </LineChart>
              ) : (
                <BarChart data={INDUSTRY_IMPACT_DATA} margin={{ top: 20, right: 30, left: 0, bottom: 10 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                  <XAxis dataKey="industry" stroke="#94a3b8" />
                  <YAxis domain={[0, 100]} stroke="#94a3b8" unit="%" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#0a0f1d',
                      borderColor: 'rgba(56, 189, 248, 0.4)',
                      borderRadius: '12px',
                      color: '#f8fafc',
                      fontSize: '12px',
                    }}
                  />
                  <Legend />
                  <Bar dataKey="speedup" name="Process Speedup %" fill="#00d2ff" radius={[6, 6, 0, 0]} />
                  <Bar dataKey="efficiency" name="Operational Cost Reduction %" fill="#6366f1" radius={[6, 6, 0, 0]} />
                </BarChart>
              )}
            </ResponsiveContainer>
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between text-[11px] font-mono text-slate-400 gap-2 mt-4">
            <span>*Demonstration metrics for conceptual showcase. Evaluated on 1,000 GPU testbed cluster.</span>
            <span className="text-emerald-400 font-semibold">99.98% Confidence Interval</span>
          </div>
        </div>
      </div>
    </section>
  );
};
