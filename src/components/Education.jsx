import React from 'react';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Award, 
  CheckCircle2, 
  Sparkles,
  BookOpen
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Education = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 right-1/3 w-96 h-96 rounded-full bg-indigo-500/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border-indigo-500/30 text-indigo-400 text-xs font-mono uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education <span className="text-gradient">Timeline</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-3 rounded-full" />
          <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto mt-4">
            My formal learning journey, foundational coursework, and academic milestones.
          </p>
        </div>

        {/* Vertical Timeline Layout */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Center Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 -translate-x-1/2 w-0.5 bg-gradient-to-b from-cyan-500 via-indigo-500 to-purple-500/40 hidden sm:block" />

          <div className="space-y-12">
            {education.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Center Node Badge */}
                  <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-navy-950 border-2 border-cyan-400 items-center justify-center text-cyan-400 z-20 shadow-[0_0_15px_rgba(56,189,248,0.5)]">
                    <GraduationCap className="w-5 h-5" />
                  </div>

                  {/* Empty Spacer Column for the opposite side */}
                  <div className="hidden sm:block sm:w-1/2" />

                  {/* Card Content Column (takes half width on desktop) */}
                  <div className="w-full sm:w-1/2 sm:px-8">
                    <div className="glass-card p-6 sm:p-7 rounded-2xl border border-white/5 dark:border-indigo-500/20 hover:border-cyan-400/40 transition-all duration-300 shadow-xl group">
                      
                      {/* Status / Year Badge */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-mono font-semibold">
                          {item.duration}
                        </span>
                        <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-md border border-emerald-500/20">
                          GPA: {item.gpa}
                        </span>
                      </div>

                      {/* Degree & Institution */}
                      <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-1">
                        {item.degree}
                      </h3>
                      <h4 className="text-sm font-semibold text-slate-200 mb-1">
                        {item.institution}
                      </h4>
                      <p className="text-xs text-slate-400 mb-4">
                        {item.department} • 📍 {item.location}
                      </p>

                      {/* Accomplishments */}
                      <div className="pt-3 border-t border-white/10">
                        <h5 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                          <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                          <span>Highlights & Coursework</span>
                        </h5>
                        <ul className="space-y-2">
                          {item.keyAccomplishments.map((acc, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed">
                              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                              <span>{acc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

