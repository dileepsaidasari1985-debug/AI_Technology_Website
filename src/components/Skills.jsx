import React, { useState } from 'react';
import { 
  Code2, 
  FileCode, 
  Terminal, 
  Binary, 
  Coffee, 
  Layout, 
  Atom, 
  Palette, 
  Globe, 
  Layers, 
  Smartphone, 
  Server, 
  Cpu, 
  Network, 
  ShieldCheck, 
  Flame, 
  Database, 
  Boxes, 
  Table, 
  CloudLightning, 
  GitBranch, 
  Code, 
  Send, 
  Container, 
  Zap, 
  TerminalSquare, 
  Lightbulb, 
  Users, 
  Workflow, 
  MessageSquare, 
  Sparkles,
  Filter
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

// Map icon names from data file to Lucide icon components
const iconMap = {
  Code2,
  FileCode,
  Terminal,
  Binary,
  Coffee,
  Layout,
  Atom,
  Palette,
  Globe,
  Layers,
  Smartphone,
  Server,
  Cpu,
  Network,
  ShieldCheck,
  Flame,
  Database,
  Boxes,
  Table,
  CloudLightning,
  GitBranch,
  Code,
  Send,
  Container,
  Zap,
  TerminalSquare,
  Lightbulb,
  Users,
  Workflow,
  MessageSquare,
  Sparkles
};

export const Skills = () => {
  const { skills, skillCategories } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredSkills = selectedCategory === 'all'
    ? skills
    : skills.filter(skill => skill.category === selectedCategory);

  const renderIcon = (iconName) => {
    const IconComponent = iconMap[iconName] || Sparkles;
    return <IconComponent className="w-5 h-5" />;
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-navy-950/40">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 rounded-full bg-purple-600/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-80 h-80 rounded-full bg-cyan-500/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Zap className="w-3.5 h-3.5 text-cyan-400" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-3 rounded-full" />
          <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto mt-4">
            Curated toolkit of programming languages, libraries, developer tools, and engineering methodologies I actively utilize.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-12">
          {skillCategories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                  isSelected
                    ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-[0_0_20px_rgba(56,189,248,0.35)] scale-105'
                    : 'glass-card text-slate-300 hover:text-white hover:border-cyan-400/40'
                }`}
              >
                <span>{cat.name}</span>
                {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />}
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="glass-card p-5 rounded-2xl border border-white/5 dark:border-cyan-500/15 hover:border-cyan-400/40 hover:-translate-y-1 transition-all duration-300 group shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
            >
              <div className="flex items-center justify-between mb-3.5">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${skill.color} p-[1px] shadow-sm group-hover:scale-110 transition-transform`}>
                    <div className="w-full h-full bg-navy-900 rounded-[11px] flex items-center justify-center text-slate-200">
                      {renderIcon(skill.icon)}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {skill.name}
                    </h3>
                    <span className="text-[11px] text-slate-400 font-mono">
                      {skill.level}
                    </span>
                  </div>
                </div>

                {/* Percentage Pill */}
                <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono font-semibold text-cyan-400">
                  {skill.percentage}%
                </span>
              </div>

              {/* Progress Bar Container */}
              <div className="w-full h-2 bg-slate-800/80 rounded-full overflow-hidden p-[1px] relative">
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-700 ease-out`}
                  style={{ width: `${skill.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Skill Category Summary Pills */}
        <div className="mt-12 p-6 rounded-2xl glass-card border border-white/5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-cyan-400" />
            <span className="text-xs sm:text-sm text-slate-300">
              Actively learning & expanding into <strong className="text-white">Next.js 15, Docker containers, & Cloud Native Deployments</strong>.
            </span>
          </div>
          <span className="text-xs font-mono text-cyan-400/80 bg-cyan-500/10 px-3 py-1.5 rounded-lg border border-cyan-500/20">
            Updated for 2026 Academic Term
          </span>
        </div>

      </div>
    </section>
  );
};

