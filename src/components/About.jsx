import React from 'react';
import { 
  GraduationCap, 
  Target, 
  Sparkles, 
  Heart, 
  FolderGit2, 
  Wrench, 
  Award, 
  Clock,
  Compass,
  CheckCircle2,
  BookOpen
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const About = () => {
  const { about, stats, personalInfo } = portfolioData;

  // Map stat labels to appropriate icons
  const getStatIcon = (index) => {
    switch (index) {
      case 0: return <FolderGit2 className="w-6 h-6 text-cyan-400" />;
      case 1: return <Wrench className="w-6 h-6 text-indigo-400" />;
      case 2: return <Award className="w-6 h-6 text-purple-400" />;
      case 3: return <Clock className="w-6 h-6 text-emerald-400" />;
      default: return <Sparkles className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Discover My Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-3 rounded-full" />
        </div>

        {/* Animated Statistics Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className="glass-card p-6 rounded-2xl border border-white/5 dark:border-cyan-500/20 relative overflow-hidden group hover:border-cyan-400/50 hover:-translate-y-1 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.25)]"
            >
              {/* Subtle hover gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-xl bg-white/5 dark:bg-navy-800/80 flex items-center justify-center mb-3 shadow-inner group-hover:scale-110 transition-transform">
                  {getStatIcon(idx)}
                </div>
                <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-1 font-mono">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-slate-300 mb-0.5">
                  {stat.label}
                </span>
                <span className="text-[11px] text-slate-400">
                  {stat.description}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Grid: Story & Information Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Personal Introduction & Passions (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-white/5">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-cyan-400" />
                <span>My Story & Philosophy</span>
              </h3>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                {about.bioParagraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              {/* Career Goal Callout */}
              <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-cyan-500/10 via-indigo-500/10 to-purple-500/10 border border-cyan-400/20">
                <div className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider mb-1">
                      Current Career Goal
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-200">
                      {about.careerGoal}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Strengths & Hobbies Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Personal Strengths */}
              <div className="glass-card p-6 rounded-2xl border border-white/5">
                <h4 className="text-sm font-mono font-bold text-cyan-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span>Key Strengths</span>
                </h4>
                <ul className="space-y-2.5">
                  {about.strengths.map((str, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{str}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hobbies & Passions */}
              <div className="glass-card p-6 rounded-2xl border border-white/5">
                <h4 className="text-sm font-mono font-bold text-purple-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Heart className="w-4 h-4 text-purple-400" />
                  <span>Hobbies & Passions</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {about.hobbies.map((hobby, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-lg bg-white/5 text-slate-300 text-xs font-medium border border-white/5 hover:border-purple-400/40 hover:text-purple-300 transition-colors"
                    >
                      {hobby}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Quick Facts & Tech Interests (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Profile Overview Card */}
            <div className="glass-card p-6 sm:p-7 rounded-2xl border border-white/5 dark:border-cyan-500/20 shadow-xl relative overflow-hidden">
              {/* Corner decorative light */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/10">
                <img
                  src={personalInfo.avatarUrl}
                  alt={personalInfo.fullName}
                  className="w-16 h-16 rounded-2xl object-cover border-2 border-cyan-400/50 shadow-md"
                />
                <div>
                  <h4 className="text-lg font-bold text-white">
                    {personalInfo.fullName}
                  </h4>
                  <p className="text-xs text-cyan-400 font-mono">
                    {personalInfo.title}
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">
                    📍 {personalInfo.location}
                  </p>
                </div>
              </div>

              {/* Quick Facts List */}
              <div className="space-y-3.5 mb-6">
                {about.quickFacts.map((fact, idx) => (
                  <div key={idx} className="flex justify-between items-center text-xs sm:text-sm py-1 border-b border-white/5">
                    <span className="text-slate-400">{fact.label}</span>
                    <span className="text-slate-100 font-semibold text-right">{fact.value}</span>
                  </div>
                ))}
              </div>

              {/* Technical Interests Badges */}
              <div>
                <h5 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-3">
                  Technical Interests
                </h5>
                <div className="flex flex-wrap gap-2">
                  {about.technicalInterests.map((interest, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 text-xs font-medium"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Academic Highlights Summary */}
            <div className="glass-card p-6 rounded-2xl border border-white/5 bg-gradient-to-br from-indigo-950/20 to-purple-950/20">
              <div className="flex items-center gap-3 mb-3">
                <GraduationCap className="w-5 h-5 text-indigo-400" />
                <h4 className="text-base font-bold text-white">
                  Academic Focus
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Majoring in Computer Science with primary coursework focusing on Object-Oriented Software Design, Data Structures, Algorithms, Cloud Architecture, and Database Systems.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

