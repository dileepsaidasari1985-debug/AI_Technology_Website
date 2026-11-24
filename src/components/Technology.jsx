import React, { useState } from 'react';
import {
  Code,
  Flame,
  Atom,
  Zap,
  Box,
  Layers,
  Database,
  Server,
  Globe,
  Palette,
  HardDrive,
  Cpu,
  Sparkles,
  Shield,
  FileCode,
  Network
} from 'lucide-react';
import { TECH_STACK } from '../data/nexoraData';

export const Technology = () => {
  const [activeTab, setActiveTab] = useState('all');

  const getTechIcon = (name) => {
    switch (name) {
      case 'Python':
        return Code;
      case 'JavaScript':
      case 'TypeScript':
        return FileCode;
      case 'Java':
        return Cpu;
      case 'PyTorch':
        return Flame;
      case 'TensorFlow':
        return Layers;
      case 'Hugging Face':
        return Sparkles;
      case 'Scikit-learn':
        return Layers;
      case 'React.js':
        return Atom;
      case 'Next.js':
        return Globe;
      case 'Tailwind CSS':
        return Palette;
      case 'FastAPI':
        return Zap;
      case 'Node.js':
        return Server;
      case 'Django':
        return Database;
      case 'Docker':
        return Box;
      case 'Kubernetes':
        return Network;
      case 'PostgreSQL':
      case 'MongoDB':
        return HardDrive;
      default:
        return Code;
    }
  };

  const tabs = [
    { id: 'all', label: 'All Technologies' },
    { id: 'languages', label: 'Languages' },
    { id: 'aiAndML', label: 'AI & Machine Learning' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'infrastructure', label: 'Data & Infra' },
  ];

  // Aggregate items based on tab
  const getItems = () => {
    if (activeTab === 'all') {
      return [
        ...TECH_STACK.aiAndML.map((t) => ({ ...t, cat: 'AI & ML' })),
        ...TECH_STACK.languages.map((t) => ({ ...t, cat: 'Languages' })),
        ...TECH_STACK.frontend.map((t) => ({ ...t, cat: 'Frontend' })),
        ...TECH_STACK.backend.map((t) => ({ ...t, cat: 'Backend' })),
        ...TECH_STACK.infrastructure.map((t) => ({ ...t, cat: 'Data & Cloud' })),
      ];
    }
    return (TECH_STACK[activeTab] || []).map((t) => ({
      ...t,
      cat: tabs.find((x) => x.id === activeTab)?.label || 'Tech',
    }));
  };

  const currentItems = getItems();

  return (
    <section id="technology" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full nexora-card border border-cyan-500/30 text-xs font-semibold text-cyan-400 mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>ENGINEERING FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white dark:text-white tracking-tight mb-4">
            Our Enterprise <span className="text-gradient">Technology Stack</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 dark:text-slate-300 leading-relaxed">
            Architected using cutting-edge asynchronous engines, distributed GPU fabrics, and battle-tested frameworks to guarantee resilience and sub-20ms execution.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_15px_rgba(0,210,255,0.4)]'
                    : 'nexora-card border border-white/10 text-slate-300 hover:text-white hover:border-white/20'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tech Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentItems.map((tech, idx) => {
            const Icon = getTechIcon(tech.name);
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl nexora-card border border-white/10 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1.5 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-300 uppercase">
                      {tech.level}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                    {tech.name}
                  </h3>

                  <div className="text-[11px] font-mono text-cyan-400/90 mb-3">
                    {tech.cat}
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {tech.role}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Architecture Status</span>
                  <span className="text-emerald-400 font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Active Production
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-center text-[11px] font-mono text-slate-400 mt-8">
          *Note: All listed frameworks represent production technologies configured and actively powering Nexora AI services.
        </p>
      </div>
    </section>
  );
};
