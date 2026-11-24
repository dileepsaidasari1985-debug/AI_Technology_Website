import React from 'react';
import {
  Users,
  Linkedin,
  Github,
  Twitter,
  ArrowRight,
  BookOpen,
  Award,
  ExternalLink
} from 'lucide-react';
import { TEAM_MEMBERS } from '../data/nexoraData';

export const Team = ({ onOpenTeamModal }) => {
  return (
    <section id="team" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full nexora-card border border-cyan-500/30 text-xs font-semibold text-cyan-400 mb-4">
            <Users className="w-3.5 h-3.5" />
            <span>MINDS BEHIND NEXORA</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white dark:text-white tracking-tight mb-4">
            Meet Our <span className="text-gradient">World-Class Team</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 dark:text-slate-300 leading-relaxed">
            Our interdisciplinary collective unites pioneer researchers, systems engineers, and designers from premier research institutions and technology enterprises.
          </p>
        </div>

        {/* 6 Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.id}
              className="rounded-3xl nexora-card border border-white/10 hover:border-cyan-500/40 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 group shadow-xl"
            >
              <div>
                {/* Profile Photo with Glow Ring */}
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-5 border border-white/10 group-hover:border-cyan-400/50 transition-colors">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent opacity-60" />

                  {/* Publications badge */}
                  <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-lg bg-navy-950/80 backdrop-blur-md border border-white/10 text-[10px] font-mono text-cyan-400 flex items-center gap-1">
                    <BookOpen className="w-3 h-3" />
                    <span>{member.publications} Papers</span>
                  </div>
                </div>

                {/* Name & Title */}
                <h3 className="text-xl font-display font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {member.name}
                </h3>
                <div className="text-xs font-mono text-cyan-400/90 mb-3">
                  {member.role}
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {member.bio}
                </p>

                {/* Expertise Pills */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {member.expertise.map((exp, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono text-slate-300"
                    >
                      {exp}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Bar: Socials & View Profile */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-white/5 hover:bg-cyan-500/20 text-slate-400 hover:text-cyan-400 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-white/5 hover:bg-cyan-500/20 text-slate-400 hover:text-cyan-400 transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={member.twitter}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-white/5 hover:bg-cyan-500/20 text-slate-400 hover:text-cyan-400 transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                </div>

                <button
                  onClick={() => onOpenTeamModal(member)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 group/btn"
                >
                  <span>View Profile</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-[11px] font-mono text-slate-400 mt-10">
          *Note: Team profiles and portraits are illustrative demonstration representations.
        </p>
      </div>
    </section>
  );
};
