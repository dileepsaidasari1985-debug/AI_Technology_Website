import React, { useState } from 'react';
import {
  ShieldCheck,
  Eye,
  Scale,
  UserCheck,
  Target,
  Compass,
  Lightbulb,
  CheckCircle2,
  ArrowRight,
  Cpu,
  Lock,
  Layers
} from 'lucide-react';
import { ABOUT_DATA, BRAND } from '../data/nexoraData';

export const About = ({ onOpenTrustCenter }) => {
  const [activeTab, setActiveTab] = useState('mission');

  const tabContent = {
    mission: {
      title: 'Our Mission',
      content: ABOUT_DATA.mission,
      icon: Target,
      highlight: 'Empowering human capability with mathematically dependable autonomous intelligence.',
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-500/30'
    },
    vision: {
      title: 'Our Vision',
      content: ABOUT_DATA.vision,
      icon: Compass,
      highlight: 'A global ecosystem where AI operates transparently to solve civilization-scale challenges.',
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/30'
    },
    philosophy: {
      title: 'Innovation Philosophy',
      content: ABOUT_DATA.philosophy,
      icon: Lightbulb,
      highlight: 'Intelligence without transparency and rigorous alignment is an existential enterprise risk.',
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10',
      borderColor: 'border-emerald-500/30'
    }
  };

  const getResponsibleIcon = (name) => {
    switch (name) {
      case 'Eye':
        return Eye;
      case 'ShieldCheck':
        return ShieldCheck;
      case 'Scale':
        return Scale;
      case 'UserCheck':
        return UserCheck;
      default:
        return ShieldCheck;
    }
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full nexora-card border border-cyan-500/30 text-xs font-semibold text-cyan-400 mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>ABOUT OUR ENTERPRISE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white dark:text-white tracking-tight mb-4">
            Architecting the Frontier of <span className="text-gradient">Responsible AI</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 dark:text-slate-300 leading-relaxed">
            {ABOUT_DATA.overview}
          </p>
        </div>

        {/* Mission, Vision & Philosophy Interactive Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-stretch">
          {/* Left Navigation Buttons */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            {Object.entries(tabContent).map(([key, item]) => {
              const Icon = item.icon;
              const isSelected = activeTab === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`p-5 rounded-2xl text-left transition-all duration-300 nexora-card flex items-start gap-4 border ${
                    isSelected
                      ? `${item.borderColor} ${item.bgColor} shadow-[0_0_25px_rgba(0,210,255,0.15)] translate-x-1`
                      : 'border-white/10 hover:border-white/20 hover:bg-white/[0.04]'
                  }`}
                >
                  <div className={`p-2.5 rounded-xl ${isSelected ? item.bgColor : 'bg-white/5'} ${item.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-xs text-slate-400 line-clamp-2">{item.highlight}</p>
                  </div>
                </button>
              );
            })}

            {/* Why Choose Summary Box */}
            <div className="mt-4 p-5 rounded-2xl nexora-card border border-white/10 bg-gradient-to-br from-white/[0.02] to-white/[0.05]">
              <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-3 font-semibold">
                Why Choose Nexora AI?
              </h4>
              <ul className="space-y-2.5">
                {ABOUT_DATA.whyUsPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Detailed Showcase Card */}
          <div className="lg:col-span-8">
            <div className="h-full p-8 sm:p-10 rounded-3xl nexora-card border border-white/15 relative overflow-hidden flex flex-col justify-between shadow-2xl">
              <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-cyan-500/10 via-purple-500/10 to-transparent blur-3xl pointer-events-none" />

              <div>
                <div className="flex items-center gap-3 mb-6">
                  {React.createElement(tabContent[activeTab].icon, {
                    className: `w-8 h-8 ${tabContent[activeTab].color}`
                  })}
                  <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                    {tabContent[activeTab].title}
                  </h3>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 mb-6">
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-1">
                    Core Commitment
                  </span>
                  <p className="text-sm sm:text-base font-semibold text-slate-100 italic">
                    "{tabContent[activeTab].highlight}"
                  </p>
                </div>

                <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6">
                  {tabContent[activeTab].content}
                </p>

                <p className="text-sm text-slate-400 leading-relaxed">
                  Headquartered in {BRAND.headquarters}, our multi-disciplinary laboratory brings together theoretical physicists, deep learning researchers, systems architects, and ethicists committed to building transparent, auditable artificial intelligence systems.
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 mt-8">
                <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5 text-cyan-400" />
                    ISO 27001 Certified
                  </span>
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-violet-400" />
                    SOC2 Type II Validated
                  </span>
                </div>

                <button
                  onClick={onOpenTrustCenter}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 group"
                >
                  <span>Explore Our Trust & Privacy Center</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Responsible AI Framework Grid */}
        <div className="mt-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-2">
              Our 4 Pillars of Responsible AI
            </h3>
            <p className="text-sm text-slate-400">
              Rigorous ethical governance embedded directly into our weights, loss functions, and inference runtime.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ABOUT_DATA.responsibleAI.map((item, idx) => {
              const Icon = getResponsibleIcon(item.icon);
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl nexora-card border border-white/10 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1.5 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
