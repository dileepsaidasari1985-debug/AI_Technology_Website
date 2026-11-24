import React, { useState } from 'react';
import {
  Database,
  Sliders,
  Cpu,
  Zap,
  Sparkles,
  RefreshCw,
  ArrowRight,
  Clock,
  Layers,
  CheckCircle2
} from 'lucide-react';
import { AI_WORKFLOW_STEPS } from '../data/nexoraData';

export const Workflow = () => {
  const [selectedStep, setSelectedStep] = useState(1);

  const getStepIcon = (step) => {
    switch (step) {
      case 1:
        return Database;
      case 2:
        return Sliders;
      case 3:
        return Cpu;
      case 4:
        return Zap;
      case 5:
        return Sparkles;
      case 6:
        return RefreshCw;
      default:
        return Layers;
    }
  };

  const activeStepData = AI_WORKFLOW_STEPS.find((s) => s.step === selectedStep) || AI_WORKFLOW_STEPS[0];
  const ActiveIcon = getStepIcon(activeStepData.step);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full nexora-card border border-cyan-500/30 text-xs font-semibold text-cyan-400 mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>NEURAL PIPELINE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white dark:text-white tracking-tight mb-4">
            How Our <span className="text-gradient">AI Workflow Operates</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 dark:text-slate-300 leading-relaxed">
            From raw multimodal streaming ingestion to sub-20ms distributed inference and autonomous drift correction, explore our 6-stage lifecycle.
          </p>
        </div>

        {/* 6-Step Connected Interactive Horizontal Timeline */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3 mb-10">
          {AI_WORKFLOW_STEPS.map((s) => {
            const Icon = getStepIcon(s.step);
            const isSelected = selectedStep === s.step;
            return (
              <button
                key={s.step}
                onClick={() => setSelectedStep(s.step)}
                className={`p-4 rounded-2xl text-left transition-all duration-300 nexora-card flex flex-col justify-between border relative ${
                  isSelected
                    ? 'border-cyan-500 bg-cyan-500/15 shadow-[0_0_20px_rgba(0,210,255,0.25)] -translate-y-1'
                    : 'border-white/10 hover:border-white/20 hover:bg-white/[0.04]'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-mono font-bold ${isSelected ? 'text-cyan-400' : 'text-slate-400'}`}>
                    0{s.step}
                  </span>
                  <div className={`p-1.5 rounded-lg ${isSelected ? 'bg-cyan-500/20 text-cyan-400' : 'bg-white/5 text-slate-400'}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div className="text-xs font-bold text-white mb-0.5 truncate">
                  {s.title}
                </div>
                <div className="text-[10px] font-mono text-cyan-400 truncate">
                  {s.subtitle}
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Stage Deep Dive Card */}
        <div className="rounded-3xl nexora-card border border-white/15 p-8 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-cyan-500/10 via-purple-500/10 to-transparent blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Stage Details */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-xs font-mono text-cyan-400 font-bold">
                  STAGE 0{activeStepData.step} / 06
                </span>
                <span className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                  <Clock className="w-3.5 h-3.5 text-cyan-400" />
                  {activeStepData.duration}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white mb-2">
                {activeStepData.title}: {activeStepData.subtitle}
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-4">
                {activeStepData.description}
              </p>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                {activeStepData.details}
              </p>

              {/* Progress Bar through the 6 stages */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Pipeline Completion:</span>
                <span className="text-cyan-400 font-bold">
                  {Math.round((activeStepData.step / 6) * 100)}%
                </span>
              </div>
              <div className="w-full h-1.5 bg-white/10 rounded-full mt-2 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-300"
                  style={{ width: `${(activeStepData.step / 6) * 100}%` }}
                />
              </div>
            </div>

            {/* Right Architecture I/O Specification */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1">
                  📥 Input Stream
                </div>
                <div className="text-sm font-semibold text-white font-mono">
                  {activeStepData.inputs}
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-cyan-500/[0.04] border border-cyan-500/30">
                <div className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider mb-1">
                  📤 Generated Output Artifact
                </div>
                <div className="text-sm font-semibold text-cyan-200 font-mono">
                  {activeStepData.outputs}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 flex items-center justify-between">
                <span className="text-xs text-slate-300 font-medium">Auto-Retraining Frequency:</span>
                <span className="text-xs font-mono text-emerald-400 font-bold">Autonomous Active Loop</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
