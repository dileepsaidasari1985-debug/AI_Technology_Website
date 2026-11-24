import React from 'react';
import { ArrowUp, Github, Linkedin, Instagram, Twitter, Heart, Sparkles, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Footer = () => {
  const { personalInfo, socialLinks } = portfolioData;

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 dark:border-white/5 bg-navy-950 pt-16 pb-12 overflow-hidden">
      {/* Subtle top glowing bar */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand & Bio (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-600 p-[2px] shadow-[0_0_15px_rgba(56,189,248,0.35)]">
                <div className="w-full h-full bg-navy-950 rounded-[10px] flex items-center justify-center">
                  <span className="font-mono font-black text-sm text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                    {personalInfo.initials}
                  </span>
                </div>
              </div>
              <div>
                <h3 className="text-base font-bold text-white">
                  {personalInfo.fullName}
                </h3>
                <p className="text-xs text-cyan-400 font-mono">
                  {personalInfo.title}
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              Undergraduate student passionate about full-stack engineering, crafting modern UI experiences, and turning creative concepts into scalable digital products.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-300">
              <Mail className="w-3.5 h-3.5 text-cyan-400" />
              <a href={`mailto:${personalInfo.email}`} className="hover:text-cyan-400 transition-colors">
                {personalInfo.email}
              </a>
            </div>
          </div>

          {/* Quick Navigation Links (4 cols) */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">
              Quick Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-400 hover:text-cyan-400 transition-colors py-1"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social Profiles & Back to Top (3 cols) */}
          <div className="md:col-span-3 flex flex-col justify-between space-y-4">
            <div>
              <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">
                Follow My Journey
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {socialLinks.github && (
                  <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl glass-card text-slate-300 hover:text-cyan-400 hover:border-cyan-400/40 transition-colors"
                    title="GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
                {socialLinks.linkedin && (
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl glass-card text-slate-300 hover:text-cyan-400 hover:border-cyan-400/40 transition-colors"
                    title="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                )}
                {socialLinks.instagram && (
                  <a
                    href={socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl glass-card text-slate-300 hover:text-purple-400 hover:border-purple-400/40 transition-colors"
                    title="Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                )}
                {socialLinks.twitter && (
                  <a
                    href={socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl glass-card text-slate-300 hover:text-cyan-400 hover:border-cyan-400/40 transition-colors"
                    title="Twitter"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>

            {/* Back to top link */}
            <div>
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors group"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Credit Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} {personalInfo.fullName}. All rights reserved.
          </div>

          <div className="flex items-center gap-1.5 text-slate-400">
            <span>Designed & Built with Passion by</span>
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              {personalInfo.fullName}
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};

