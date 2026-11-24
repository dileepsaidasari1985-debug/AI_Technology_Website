import React from 'react';
import {
  Lightbulb,
  Maximize2,
  Smile,
  Lock,
  HeartHandshake,
  CheckCircle2,
  Puzzle,
  RefreshCw,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/nexoraData';

export const WhyChooseUs = ({ onOpenDemoRequest }) => {
  const getIcon = (name) => {
    switch (name) {
      case 'Lightbulb':
        return Lightbulb;
      case 'Maximize2':
        return Maximize2;
      case 'Smile':
        return Smile;
      case 'Lock':
        return Lock;
      case 'HeartHandshake':
        return HeartHandshake;
      case 'CheckCircle2':
        return CheckCircle2;
      case 'Puzzle':
        return Puzzle;
      case 'RefreshCw':
        return RefreshCw;
      default:
        return Sparkles;
    }
  };

  return (
    <section className="py-24 relative overflow-hidden bg-navy-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full nexora-card border border-cyan-500/30 text-xs font-semibold text-cyan-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ENTERPRISE ADVANTAGE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white dark:text-white tracking-tight mb-4">
            Why Choose <span className="text-gradient">NEXORA AI?</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 dark:text-slate-300 leading-relaxed">
            We deliver the ideal convergence of frontier cognitive intelligence, enterprise-grade zero-retention privacy, and predictable mathematical reliability.
          </p>
        </div>

        {/* 8 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((item) => {
            const Icon = getIcon(item.icon);
            return (
              <div
                key={item.id}
                className="p-6 rounded-3xl nexora-card border border-white/10 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-2 group flex flex-col justify-between shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all duration-300 shadow-[0_0_15px_rgba(0,210,255,0.2)]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      {item.highlight}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center gap-1.5 text-xs text-cyan-400 font-semibold">
                  <span>Guaranteed Feature</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner Call to Action */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl nexora-card border border-cyan-500/30 bg-gradient-to-r from-cyan-950/40 via-blue-950/30 to-violet-950/40 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-1">
              Ready to deploy transformative AI within your infrastructure?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Schedule a technical deep dive and experience our models live on your proprietary test dataset.
            </p>
          </div>
          <button
            onClick={onOpenDemoRequest}
            className="px-6 py-3.5 rounded-xl font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 shadow-[0_0_20px_rgba(0,210,255,0.4)] hover:shadow-[0_0_30px_rgba(0,210,255,0.7)] hover:scale-105 active:scale-95 transition-all whitespace-nowrap flex items-center gap-2"
          >
            <span>Request Enterprise Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
