import React from 'react';
import {
  X,
  Linkedin,
  Github,
  Twitter,
  BookOpen,
  Award,
  Sparkles
} from 'lucide-react';

export const TeamModal = ({ member, isOpen, onClose }) => {
  if (!isOpen || !member) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-lg rounded-3xl nexora-card border border-cyan-500/40 p-6 sm:p-8 shadow-2xl relative max-h-[85vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-4 mb-6">
          <img
            src={member.image}
            alt={member.name}
            className="w-16 h-16 rounded-2xl object-cover border-2 border-cyan-400 shadow-md"
          />
          <div>
            <h3 className="text-xl font-display font-bold text-white">
              {member.name}
            </h3>
            <p className="text-xs font-mono text-cyan-400">{member.role}</p>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
          {member.bio}
        </p>

        {/* Credentials & Metrics */}
        <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/10 mb-6">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-cyan-400" />
            <div>
              <div className="text-sm font-bold text-white font-mono">{member.publications} Papers</div>
              <div className="text-[10px] text-slate-400">Peer-Reviewed</div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-purple-400" />
            <div>
              <div className="text-sm font-bold text-white font-mono">{member.patents} Patents</div>
              <div className="text-[10px] text-slate-400">AI Architectures</div>
            </div>
          </div>
        </div>

        {/* Core Domains */}
        <div className="mb-6">
          <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-2 font-semibold">
            Specialized Disciplines:
          </span>
          <div className="flex flex-wrap gap-2">
            {member.expertise.map((exp, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-cyan-300"
              >
                {exp}
              </span>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <a
              href={member.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-white/5 text-slate-400 hover:text-cyan-400 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={member.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-white/5 text-slate-400 hover:text-cyan-400 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={member.twitter}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-white/5 text-slate-400 hover:text-cyan-400 transition-colors"
            >
              <Twitter className="w-4 h-4" />
            </a>
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-semibold text-white bg-cyan-500 hover:bg-cyan-600 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
