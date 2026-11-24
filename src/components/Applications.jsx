import React, { useState } from 'react';
import {
  HeartPulse,
  DollarSign,
  ShoppingBag,
  Factory,
  GraduationCap,
  Sprout,
  Truck,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Layers
} from 'lucide-react';
import { INDUSTRIES } from '../data/nexoraData';

export const Applications = ({ onOpenIndustryModal }) => {
  const [selectedIndustry, setSelectedIndustry] = useState(INDUSTRIES[0].id);

  const getIndustryIcon = (iconName) => {
    switch (iconName) {
      case 'HeartPulse':
        return HeartPulse;
      case 'DollarSign':
        return DollarSign;
      case 'ShoppingBag':
        return ShoppingBag;
      case 'Factory':
        return Factory;
      case 'GraduationCap':
        return GraduationCap;
      case 'Sprout':
        return Sprout;
      case 'Truck':
        return Truck;
      default:
        return Layers;
    }
  };

  const activeData = INDUSTRIES.find((ind) => ind.id === selectedIndustry) || INDUSTRIES[0];
  const ActiveIcon = getIndustryIcon(activeData.icon);

  return (
    <section id="applications" className="py-24 relative overflow-hidden bg-navy-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full nexora-card border border-cyan-500/30 text-xs font-semibold text-cyan-400 mb-4">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>REAL-WORLD TRANSFORMATION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white dark:text-white tracking-tight mb-4">
            AI Applications Across <span className="text-gradient">7 Major Industries</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 dark:text-slate-300 leading-relaxed">
            From clinical diagnostics to algorithmic financial hedging, discover how Nexora AI revolutionizes mission-critical domains.
          </p>
        </div>

        {/* Industry Interactive Tabs */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto gap-2 pb-4 mb-10 no-scrollbar">
          {INDUSTRIES.map((ind) => {
            const Icon = getIndustryIcon(ind.icon);
            const isSelected = selectedIndustry === ind.id;
            return (
              <button
                key={ind.id}
                onClick={() => setSelectedIndustry(ind.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                  isSelected
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_20px_rgba(0,210,255,0.4)] scale-105'
                    : 'nexora-card border border-white/10 text-slate-300 hover:text-white hover:border-white/20'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{ind.name.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Industry Deep-Dive Card */}
        <div className="rounded-3xl nexora-card border border-white/15 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 via-blue-500/10 to-transparent blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 flex items-center justify-center shadow-[0_0_20px_rgba(0,210,255,0.2)]">
                  <ActiveIcon className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                    {activeData.name}
                  </h3>
                  <p className="text-xs font-mono text-cyan-400">{activeData.tagline}</p>
                </div>
              </div>

              {/* Impact Metric Pill */}
              <div className="inline-block px-4 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/25 text-cyan-300 text-xs sm:text-sm font-semibold mb-6">
                ⚡ Proven Impact: {activeData.metrics}
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                {activeData.summary}
              </p>

              <div className="pt-4 border-t border-white/10">
                <button
                  onClick={() => onOpenIndustryModal(activeData)}
                  className="px-6 py-3 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 shadow-[0_0_15px_rgba(0,210,255,0.3)] hover:shadow-[0_0_25px_rgba(0,210,255,0.6)] hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
                >
                  <span>Explore Industry Architecture</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Use-Case Cards */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1">
                Enterprise Deployments:
              </span>
              {activeData.useCases.map((useCase, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-cyan-400/40 transition-colors flex items-start gap-3"
                >
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-200 font-medium">{useCase}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
