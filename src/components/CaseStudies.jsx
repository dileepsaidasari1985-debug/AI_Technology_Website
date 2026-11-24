import React, { useState } from 'react';
import {
  FolderKanban,
  ArrowRight,
  TrendingUp,
  Cpu,
  Layers,
  ExternalLink
} from 'lucide-react';
import { CASE_STUDIES } from '../data/nexoraData';

export const CaseStudies = ({ onOpenCaseStudyModal }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'Finance', 'Healthcare', 'E-Commerce', 'Logistics', 'Enterprise SaaS'];

  const filteredCases = CASE_STUDIES.filter((item) => {
    if (selectedCategory === 'all') return true;
    return item.category.toLowerCase().includes(selectedCategory.toLowerCase());
  });

  return (
    <section className="py-24 relative overflow-hidden bg-navy-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full nexora-card border border-cyan-500/30 text-xs font-semibold text-cyan-400 mb-4">
            <FolderKanban className="w-3.5 h-3.5" />
            <span>INNOVATION SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white dark:text-white tracking-tight mb-4">
            Featured <span className="text-gradient">Case Studies & Projects</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 dark:text-slate-300 leading-relaxed">
            In-depth technical dissections detailing problems, neural solutions, stack architectures, and verified operational benchmarks.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold capitalize transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_15px_rgba(0,210,255,0.4)]'
                    : 'nexora-card border border-white/10 text-slate-300 hover:text-white hover:border-white/20'
                }`}
              >
                {cat === 'all' ? 'All Case Studies (5)' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCases.map((study) => (
            <div
              key={study.id}
              className="rounded-3xl nexora-card border border-white/10 hover:border-cyan-500/40 p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 group shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[11px] font-mono text-cyan-400 font-semibold uppercase">
                    {study.category}
                  </span>
                  <span className="text-xs font-mono text-slate-400">{study.client}</span>
                </div>

                <h3 className="text-xl font-display font-bold text-white group-hover:text-cyan-400 transition-colors mb-3">
                  {study.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {study.summary}
                </p>

                {/* Quantified Outcomes Metrics */}
                <div className="grid grid-cols-3 gap-2 p-3 rounded-2xl bg-white/[0.03] border border-white/10 mb-6">
                  {study.results.map((res, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-sm sm:text-base font-extrabold text-cyan-400 font-mono">
                        {res.value}
                      </div>
                      <div className="text-[10px] text-slate-400 truncate font-sans">
                        {res.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {study.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <button
                  onClick={() => onOpenCaseStudyModal(study)}
                  className="w-full py-2.5 rounded-xl text-xs font-semibold text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/50 transition-all flex items-center justify-center gap-2 group/btn"
                >
                  <span>Read Full Case Study</span>
                  <ExternalLink className="w-3.5 h-3.5 text-cyan-400 group-hover/btn:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-[11px] font-mono text-slate-400 mt-10">
          *Note: Case studies and performance outcomes represent architectural scenario demonstrations.
        </p>
      </div>
    </section>
  );
};
