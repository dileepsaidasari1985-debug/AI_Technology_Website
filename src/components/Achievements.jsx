import React from 'react';
import { 
  Trophy, 
  Award, 
  GitPullRequest, 
  Users, 
  Calendar, 
  Building2, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const iconMap = {
  Trophy,
  Award,
  GitPullRequest,
  Users
};

export const Achievements = () => {
  const { achievements } = portfolioData;

  const renderIcon = (iconName) => {
    const IconComp = iconMap[iconName] || Trophy;
    return <IconComp className="w-5 h-5" />;
  };

  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-navy-950/40">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 w-80 h-80 rounded-full bg-amber-500/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border-amber-500/30 text-amber-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>Honors & Recognitions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Achievements & <span className="text-gradient">Awards</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-3 rounded-full" />
          <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto mt-4">
            Competitions won, academic milestones reached, community contributions, and recognized leadership.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((item) => (
            <div
              key={item.id}
              className="glass-card p-6 sm:p-7 rounded-2xl border border-white/5 dark:border-amber-500/20 hover:border-amber-400/50 hover:-translate-y-1 transition-all duration-300 relative group flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.25)]"
            >
              {/* Top Row: Icon + Badge */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-amber-400/20 to-orange-500/20 border border-amber-400/30 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                    {renderIcon(item.icon)}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 text-xs font-bold font-mono">
                    {item.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>

                {/* Organization & Date */}
                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 mb-4 font-medium">
                  <span className="flex items-center gap-1 text-slate-300">
                    <Building2 className="w-3.5 h-3.5 text-cyan-400" />
                    {item.organization}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1 text-slate-400 font-mono">
                    <Calendar className="w-3.5 h-3.5 text-purple-400" />
                    {item.date}
                  </span>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              {/* Bottom Tag */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-[11px] font-mono text-cyan-400/80 bg-cyan-500/10 px-2.5 py-1 rounded-md">
                  {item.category}
                </span>

                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-amber-400" />
                  <span>Verified Student Honor</span>
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

