import React, { useState } from 'react';
import {
  Brain,
  Layers,
  MessageSquare,
  Eye,
  Sparkles,
  TrendingUp,
  Zap,
  Mic,
  Share2,
  ShieldAlert,
  Cpu,
  Clock,
  CheckCircle2
} from 'lucide-react';
import { KEY_FEATURES } from '../data/nexoraData';

export const Features = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const getFeatureIcon = (iconName) => {
    switch (iconName) {
      case 'Brain':
        return Brain;
      case 'Layers':
        return Layers;
      case 'MessageSquare':
        return MessageSquare;
      case 'Eye':
        return Eye;
      case 'Sparkles':
        return Sparkles;
      case 'TrendingUp':
        return TrendingUp;
      case 'Zap':
        return Zap;
      case 'Mic':
        return Mic;
      case 'Share2':
        return Share2;
      case 'ShieldAlert':
        return ShieldAlert;
      default:
        return Cpu;
    }
  };

  const categories = ['all', 'Core AI', 'Neural Tech', 'Language', 'Perception', 'Generation', 'Analytics', 'Orchestration'];

  const filteredFeatures = KEY_FEATURES.filter((f) => {
    if (activeCategory === 'all') return true;
    return f.category === activeCategory;
  });

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full nexora-card border border-cyan-500/30 text-xs font-semibold text-cyan-400 mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>NEURAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white dark:text-white tracking-tight mb-4">
            Comprehensive <span className="text-gradient">AI Technology Capabilities</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 dark:text-slate-300 leading-relaxed">
            Our multi-layer stack spans generative synthesis, deep perception, predictive time-series, and autonomous orchestration.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold capitalize transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-cyan-500 text-white shadow-[0_0_15px_rgba(0,210,255,0.4)]'
                    : 'nexora-card border border-white/10 text-slate-400 hover:text-white'
                }`}
              >
                {cat === 'all' ? 'All Capabilities (10)' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Features 10-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {filteredFeatures.map((feat) => {
            const Icon = getFeatureIcon(feat.icon);
            return (
              <div
                key={feat.id}
                className="p-5 rounded-2xl nexora-card border border-white/10 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1.5 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                      {feat.category}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {feat.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {feat.description}
                  </p>
                </div>

                {/* Telemetry Metrics: Latency & Accuracy */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono">
                  <span className="flex items-center gap-1 text-slate-400">
                    <Clock className="w-3 h-3 text-cyan-400" />
                    {feat.latency}
                  </span>
                  <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    {feat.accuracy}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
