import React, { useState } from 'react';
import {
  MessageSquareCode,
  Image,
  PenTool,
  Code2,
  BarChart3,
  Cpu,
  ArrowRight,
  Sparkles,
  Check,
  ExternalLink
} from 'lucide-react';
import { AI_PRODUCTS } from '../data/nexoraData';

export const Products = ({ onOpenProductModal, onSelectPlaygroundTool }) => {
  const [filter, setFilter] = useState('all');

  const getProductIcon = (iconName) => {
    switch (iconName) {
      case 'MessageSquareCode':
        return MessageSquareCode;
      case 'Image':
        return Image;
      case 'PenTool':
        return PenTool;
      case 'Code2':
        return Code2;
      case 'BarChart3':
        return BarChart3;
      case 'Cpu':
        return Cpu;
      default:
        return Sparkles;
    }
  };

  const filteredProducts = AI_PRODUCTS.filter((prod) => {
    if (filter === 'all') return true;
    if (filter === 'generative') return ['chat-assistant', 'image-generator', 'content-generator'].includes(prod.id);
    if (filter === 'developer') return ['code-assistant', 'automation'].includes(prod.id);
    if (filter === 'enterprise') return ['data-analytics', 'automation', 'chat-assistant'].includes(prod.id);
    return true;
  });

  const handleTryDemo = (product) => {
    // Scroll to playground and switch tool
    const playgroundEl = document.getElementById('playground');
    if (playgroundEl) {
      playgroundEl.scrollIntoView({ behavior: 'smooth' });
    }
    onSelectPlaygroundTool?.(product.demoToolId);
  };

  return (
    <section id="products" className="py-24 relative overflow-hidden bg-navy-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full nexora-card border border-cyan-500/30 text-xs font-semibold text-cyan-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>FOUNDATION SUITE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white dark:text-white tracking-tight mb-4">
            Next-Generation <span className="text-gradient">AI Products & Services</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 dark:text-slate-300 leading-relaxed">
            Engineered for unprecedented enterprise scale, multimodal fidelity, and autonomous reasoning. Each model is available via high-throughput REST APIs and isolated private cloud pods.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {[
              { id: 'all', label: 'All Products (6)' },
              { id: 'generative', label: 'Generative Models' },
              { id: 'developer', label: 'Developer & Code' },
              { id: 'enterprise', label: 'Enterprise Intelligence' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                  filter === tab.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_15px_rgba(0,210,255,0.4)]'
                    : 'nexora-card border border-white/10 text-slate-300 hover:text-white hover:border-white/20'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 6 Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product) => {
            const Icon = getProductIcon(product.icon);
            return (
              <div
                key={product.id}
                className="rounded-3xl nexora-card border border-white/10 hover:border-cyan-500/40 p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden shadow-xl"
              >
                {/* Glow Accent Gradient on Hover */}
                <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-cyan-500/10 via-purple-500/10 to-transparent blur-2xl group-hover:from-cyan-500/20 transition-all pointer-events-none" />

                <div>
                  {/* Top Bar with Icon & Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-cyan-500/15 via-blue-500/15 to-violet-500/15 border border-cyan-500/30 text-cyan-400 flex items-center justify-center group-hover:scale-105 group-hover:border-cyan-400 transition-all duration-300 shadow-[0_0_20px_rgba(0,210,255,0.15)]">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="px-3 py-1 text-[11px] font-mono font-semibold uppercase tracking-wider rounded-full bg-white/5 border border-white/10 text-slate-300">
                      {product.badge}
                    </span>
                  </div>

                  {/* Product Title & Tagline */}
                  <h3 className="text-xl font-display font-bold text-white group-hover:text-cyan-400 transition-colors mb-1">
                    {product.name}
                  </h3>
                  <div className="text-xs font-mono text-cyan-400/90 mb-3">
                    {product.tagline}
                  </div>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {product.shortDesc}
                  </p>

                  {/* Feature Bullets (Top 4) */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-white/10">
                    {product.features.slice(0, 4).map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Actions: Learn More & Try Demo */}
                <div className="pt-4 border-t border-white/10 grid grid-cols-2 gap-3">
                  <button
                    onClick={() => onOpenProductModal(product)}
                    className="py-2.5 px-3 rounded-xl text-xs font-semibold text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all text-center flex items-center justify-center gap-1.5"
                  >
                    <span>Learn More</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </button>

                  <button
                    onClick={() => handleTryDemo(product)}
                    className="py-2.5 px-3 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 shadow-[0_0_15px_rgba(0,210,255,0.3)] hover:shadow-[0_0_22px_rgba(0,210,255,0.6)] hover:scale-102 active:scale-98 transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>Try Demo</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
