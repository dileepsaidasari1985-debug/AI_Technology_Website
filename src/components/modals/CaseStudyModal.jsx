import React from 'react';
import {
  X,
  Building2,
  CheckCircle2,
  FolderKanban,
  ExternalLink,
  Cpu
} from 'lucide-react';

export const CaseStudyModal = ({ study, isOpen, onClose }) => {
  if (!isOpen || !study) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-2xl rounded-3xl nexora-card border border-cyan-500/40 p-6 sm:p-8 shadow-2xl relative max-h-[85vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-3">
          <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-xs font-mono text-cyan-400 uppercase font-bold">
            {study.category}
          </span>
          <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
            <Building2 className="w-3.5 h-3.5" />
            {study.client}
          </span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white mb-6">
          {study.title}
        </h3>

        {/* Quantified Results Row */}
        <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 mb-6">
          {study.results.map((res, idx) => (
            <div key={idx} className="text-center">
              <div className="text-lg sm:text-xl font-bold font-mono text-cyan-300">
                {res.value}
              </div>
              <div className="text-[11px] text-slate-300">{res.label}</div>
            </div>
          ))}
        </div>

        {/* Problem Statement */}
        <div className="mb-6">
          <h4 className="text-xs font-mono uppercase tracking-wider text-rose-400 font-bold mb-2">
            The Enterprise Challenge:
          </h4>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {study.problem}
          </p>
        </div>

        {/* AI Solution Architecture */}
        <div className="mb-6">
          <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-2">
            The Nexora AI Solution:
          </h4>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {study.solution}
          </p>
        </div>

        {/* Stack Employed */}
        <div className="mb-6">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-2">
            Technologies & Infrastructure:
          </h4>
          <div className="flex flex-wrap gap-2">
            {study.technologies.map((t, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-slate-300"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
          <span>*Architectural demonstration scenario.</span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-cyan-500 text-white font-semibold"
          >
            Close Analysis
          </button>
        </div>
      </div>
    </div>
  );
};
