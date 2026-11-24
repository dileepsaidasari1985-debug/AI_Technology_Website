import React from 'react';
import { Quote, Sparkles, UserCheck } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Testimonials = () => {
  const { testimonials } = portfolioData;

  return (
    <section className="py-24 relative overflow-hidden bg-navy-950/40">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 w-80 h-80 rounded-full bg-cyan-500/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <UserCheck className="w-3.5 h-3.5" />
            <span>Endorsements & Recommendations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Mentors & Peer <span className="text-gradient">Feedback</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-3 rounded-full" />
          <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto mt-4">
            Feedback and observations from computer science professors, hackathon teammates, and engineering mentors.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="glass-card rounded-2xl border border-white/5 dark:border-cyan-500/15 p-6 sm:p-7 flex flex-col justify-between group hover:border-cyan-400/40 hover:-translate-y-1.5 transition-all duration-300 relative shadow-xl"
            >
              <Quote className="w-8 h-8 text-cyan-400/30 mb-4 group-hover:text-cyan-400/60 transition-colors" />

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 italic flex-1">
                "{item.quote}"
              </p>

              {/* Author info */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-white/10">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-11 h-11 rounded-xl object-cover border border-cyan-400/40 shadow-sm"
                />
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-[11px] text-cyan-400 font-medium">
                    {item.role}
                  </p>
                  <p className="text-[10px] text-slate-400">
                    {item.affiliation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

