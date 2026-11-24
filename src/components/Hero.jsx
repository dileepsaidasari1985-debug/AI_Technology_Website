import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  ArrowRight,
  Play,
  Terminal,
  Cpu,
  Layers,
  ShieldCheck,
  Zap,
  TrendingUp,
  BrainCircuit,
  Activity
} from 'lucide-react';
import { BRAND, HERO_TYPING_WORDS, HERO_STATS } from '../data/nexoraData';

export const Hero = ({ onOpenDemoRequest, onSelectPlaygroundTool }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);

  // Typing animation effect for the 5 AI domains
  useEffect(() => {
    const fullWord = HERO_TYPING_WORDS[currentWordIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(fullWord.substring(0, currentText.length + 1));
        if (currentText.length + 1 === fullWord.length) {
          setIsDeleting(false);
          setTypingSpeed(1800); // Pause on completed word
          setTimeout(() => {
            setIsDeleting(true);
            setTypingSpeed(60);
          }, 1800);
        }
      } else {
        setCurrentText(fullWord.substring(0, currentText.length - 1));
        if (currentText.length === 0) {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % HERO_TYPING_WORDS.length);
          setTypingSpeed(120);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, typingSpeed]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] pt-32 pb-20 flex flex-col justify-center items-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Top Announcement Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full nexora-card border border-cyan-500/30 text-xs text-slate-300 shadow-[0_0_20px_rgba(0,210,255,0.2)] animate-float">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="font-semibold text-cyan-400">Nexora Neural Engine 3.0</span>
            <span className="text-slate-400">|</span>
            <span className="text-slate-300 hidden sm:inline">Autonomous Multimodal Reasoning Live</span>
            <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
          </div>
        </div>

        {/* Main Heading & Typing Subtitle */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-white dark:text-white leading-[1.1] mb-6">
            Empowering the Future with{' '}
            <span className="text-gradient block sm:inline">
              Artificial Intelligence.
            </span>
          </h1>

          {/* Dynamic Typing Title */}
          <div className="h-10 sm:h-12 flex items-center justify-center text-lg sm:text-2xl font-mono text-cyan-400 dark:text-cyan-300 font-medium mb-6">
            <span className="text-slate-400 mr-2 text-sm sm:text-base font-sans">Engineering</span>
            <span>{currentText}</span>
            <span className="inline-block w-2.5 h-6 ml-1 bg-cyan-400 animate-pulse" />
          </div>

          <p className="text-base sm:text-xl text-slate-300 dark:text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed mb-10">
            {BRAND.subheading} Built for visionary enterprises demanding sub-20ms latency, mathematically verifiable accuracy, and zero data leakage.
          </p>

          {/* CTA Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            {/* 1. Explore AI Products */}
            <button
              onClick={() => scrollToSection('products')}
              className="px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 shadow-[0_0_25px_rgba(0,210,255,0.4)] hover:shadow-[0_0_35px_rgba(0,210,255,0.7)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 group"
            >
              <span>Explore AI Products</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* 2. Discover Our Technology */}
            <button
              onClick={() => scrollToSection('technology')}
              className="px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 hover:text-white nexora-card border border-white/10 hover:border-cyan-400/50 hover:bg-white/10 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <Cpu className="w-4 h-4 text-cyan-400" />
              <span>Discover Our Technology</span>
            </button>

            {/* 3. Interactive AI Demonstration */}
            <button
              onClick={() => {
                scrollToSection('playground');
                onSelectPlaygroundTool?.('chat');
              }}
              className="px-6 py-3.5 rounded-xl font-semibold text-sm text-purple-300 hover:text-white nexora-card border border-purple-500/30 hover:border-purple-400 bg-purple-500/10 hover:bg-purple-500/20 shadow-[0_0_20px_rgba(168,85,247,0.25)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span>Interactive AI Demonstration</span>
            </button>
          </div>
        </div>

        {/* 3D-Style Futuristic Neural Visual Centerpiece */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <div className="relative rounded-2xl nexora-card border border-cyan-500/25 p-6 sm:p-8 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
            {/* Top Bar with Status Telemetry */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                <span className="text-xs font-mono text-slate-400 ml-2">nexora-neural-node-sf01.nexora.ai</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1.5 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                  <Activity className="w-3 h-3 animate-pulse" />
                  Cluster Online (99.99%)
                </span>
                <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-2.5 py-0.5 rounded-full border border-cyan-500/20 hidden sm:inline">
                  Latency: 14.2ms
                </span>
              </div>
            </div>

            {/* Futuristic Holographic Grid & Interactive Orbiting Nodes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative">
              {/* Card 1 */}
              <div className="p-4 rounded-xl bg-white/[0.03] border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-slate-400">REASONING CORE</span>
                  <Zap className="w-4 h-4 text-cyan-400" />
                </div>
                <div className="text-xl font-display font-bold text-white mb-1">
                  128k Multi-Token Context
                </div>
                <p className="text-xs text-slate-400">
                  Dual-pass attention pruning delivering instantaneous cross-document synthesis.
                </p>
                <div className="mt-3 flex items-center gap-1 text-[11px] font-mono text-cyan-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                  <span>Speculative FP8 Active</span>
                </div>
              </div>

              {/* Card 2 */}
              <div className="p-4 rounded-xl bg-white/[0.03] border border-violet-500/20 hover:border-violet-400/50 transition-all duration-300">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-slate-400">SECURITY SHIELD</span>
                  <ShieldCheck className="w-4 h-4 text-violet-400" />
                </div>
                <div className="text-xl font-display font-bold text-white mb-1">
                  Zero Data Retention
                </div>
                <p className="text-xs text-slate-400">
                  End-to-end cryptographic isolation. Inputs are never stored or retained for model training.
                </p>
                <div className="mt-3 flex items-center gap-1 text-[11px] font-mono text-violet-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                  <span>Air-Gapped Sovereign Ready</span>
                </div>
              </div>

              {/* Card 3 */}
              <div className="p-4 rounded-xl bg-white/[0.03] border border-pink-500/20 hover:border-pink-400/50 transition-all duration-300">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-slate-400">MULTIMODAL SYNTHESIS</span>
                  <Sparkles className="w-4 h-4 text-pink-400" />
                </div>
                <div className="text-xl font-display font-bold text-white mb-1">
                  Text, Vision, Audio & Code
                </div>
                <p className="text-xs text-slate-400">
                  Unified foundation representations linking optical images, audio, and syntax trees.
                </p>
                <div className="mt-3 flex items-center gap-1 text-[11px] font-mono text-pink-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-400" />
                  <span>Cross-Attention Synthesis</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Statistics Banner (with Sample Disclaimer) */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {HERO_STATS.map((stat) => (
              <div
                key={stat.id}
                className="p-5 rounded-2xl nexora-card border border-white/10 hover:border-cyan-500/40 text-center transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="text-3xl sm:text-4xl font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 mb-1 group-hover:scale-105 transition-transform">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-200 mb-1">
                  {stat.label}
                </div>
                <div className="text-[11px] font-mono text-cyan-400/90">
                  {stat.change}
                </div>
              </div>
            ))}
          </div>

          {/* Sample Data Disclaimer Required by Master Prompt */}
          <p className="text-center text-[11px] font-mono text-slate-400 mt-4 tracking-wide">
            *Note: Metric benchmarks reflect illustrative demonstration telemetry for architecture evaluation purposes.
          </p>
        </div>
      </div>
    </section>
  );
};
