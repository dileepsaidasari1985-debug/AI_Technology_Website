import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Download, 
  Send, 
  Github, 
  Linkedin, 
  Instagram, 
  Twitter, 
  Sparkles, 
  Terminal, 
  Atom, 
  Database,
  Calendar,
  Command
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { sounds } from '../utils/soundEffects';

export const Hero = ({ onOpenResume, onOpenScheduleChat }) => {
  const { personalInfo, socialLinks } = portfolioData;
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);

  // Typewriter effect for animated roles
  useEffect(() => {
    const roles = personalInfo.animatedRoles;
    const currentRole = roles[currentRoleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentRole.substring(0, displayedText.length + 1));
        setTypingSpeed(90);

        if (displayedText.length === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1600);
        }
      } else {
        setDisplayedText(currentRole.substring(0, displayedText.length - 1));
        setTypingSpeed(45);

        if (displayedText.length === 0) {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRoleIndex, personalInfo.animatedRoles, typingSpeed]);

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs (7 columns) */}
          <div className="lg:col-span-7 text-center lg:text-left z-10">
            {/* Availability Pill & Greeting */}
            <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border-cyan-500/30 mb-6 shadow-[0_0_20px_rgba(56,189,248,0.15)]">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold tracking-wide text-slate-200">
                {personalInfo.availabilityBadge}
              </span>
            </div>

            {/* Sub-greeting */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-cyan-400 font-mono text-sm sm:text-base font-semibold tracking-wider mb-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>{personalInfo.heroGreeting} {personalInfo.fullName.toUpperCase()}</span>
            </div>

            {/* Main Heading with Gradient */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 leading-[1.15]">
              Building Ideas Into <br className="hidden sm:inline" />
              <span className="text-gradient">Digital Experiences.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-slate-300 dark:text-slate-400 font-medium mb-3">
              {personalInfo.subtitle}
            </p>

            {/* Animated Typing Role */}
            <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start mb-6">
              <span className="font-mono text-base sm:text-xl text-slate-200">
                I am a{' '}
                <span className="text-cyan-400 font-bold border-b-2 border-purple-500 pb-0.5">
                  {displayedText}
                </span>
                <span className="animate-pulse text-purple-400 ml-0.5">|</span>
              </span>
            </div>

            {/* Short Bio */}
            <p className="text-slate-300 dark:text-slate-400 text-sm sm:text-base max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              {personalInfo.shortIntro}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-10">
              <a
                href="#projects"
                onClick={() => sounds.playClick()}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 text-white font-semibold text-sm shadow-[0_4px_25px_rgba(56,189,248,0.35)] hover:shadow-[0_4px_30px_rgba(56,189,248,0.6)] hover:scale-105 transition-all duration-300 group"
              >
                <span>Explore My Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={() => {
                  sounds.playClick();
                  onOpenResume();
                }}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl glass-card border border-cyan-400/30 text-slate-200 hover:text-white hover:border-cyan-400 font-medium text-sm hover:scale-105 transition-all duration-300 group"
              >
                <Download className="w-4 h-4 text-cyan-400 group-hover:-translate-y-0.5 transition-transform" />
                <span>Download Resume</span>
              </button>

              <button
                onClick={() => {
                  sounds.playClick();
                  onOpenScheduleChat();
                }}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl glass-card border border-purple-400/30 text-slate-200 hover:text-purple-300 hover:border-purple-400 font-medium text-sm hover:scale-105 transition-all duration-300 group"
              >
                <Calendar className="w-4 h-4 text-purple-400 group-hover:rotate-12 transition-transform" />
                <span>Schedule a Chat</span>
              </button>
            </div>

            {/* Social Media Links with Hover Tooltips */}
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 mr-1">
                Connect:
              </span>
              {socialLinks.github && (
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sounds.playClick()}
                  className="p-2.5 rounded-xl glass-card text-slate-300 hover:text-cyan-400 hover:border-cyan-400/50 hover:scale-110 transition-all duration-200 shadow-sm"
                  aria-label="GitHub Profile"
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
                  onClick={() => sounds.playClick()}
                  className="p-2.5 rounded-xl glass-card text-slate-300 hover:text-cyan-400 hover:border-cyan-400/50 hover:scale-110 transition-all duration-200 shadow-sm"
                  aria-label="LinkedIn Profile"
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
                  onClick={() => sounds.playClick()}
                  className="p-2.5 rounded-xl glass-card text-slate-300 hover:text-purple-400 hover:border-purple-400/50 hover:scale-110 transition-all duration-200 shadow-sm"
                  aria-label="Instagram Profile"
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
                  onClick={() => sounds.playClick()}
                  className="p-2.5 rounded-xl glass-card text-slate-300 hover:text-cyan-400 hover:border-cyan-400/50 hover:scale-110 transition-all duration-200 shadow-sm"
                  aria-label="Twitter Profile"
                  title="Twitter / X"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Visual Avatar & Floating Interactive Badges (5 columns) */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-72 sm:w-88 aspect-square flex items-center justify-center">
              
              {/* Outer Decorative Rotating Ring */}
              <div className="absolute inset-0 rounded-full border border-dashed border-cyan-400/25 animate-spin-slow pointer-events-none" />
              
              {/* Main Profile Image Container */}
              <div className="relative w-64 sm:w-76 h-64 sm:h-76 rounded-full p-1.5 bg-gradient-to-tr from-cyan-400 via-indigo-500 to-purple-500 shadow-[0_0_50px_rgba(56,189,248,0.35)]">
                <div className="w-full h-full rounded-full overflow-hidden bg-navy-950 relative">
                  <img
                    src={personalInfo.avatarUrl}
                    alt={personalInfo.fullName}
                    className="w-full h-full object-cover object-center filter saturate-105 contrast-105 hover:scale-105 transition-transform duration-500"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Floating Badge 1: React / Frontend (Top-Right) */}
              <div className="absolute -top-3 -right-2 sm:right-2 p-3 rounded-2xl glass-card border border-cyan-400/40 shadow-[0_8px_25px_rgba(56,189,248,0.25)] flex items-center gap-2 animate-float">
                <div className="w-8 h-8 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Atom className="w-5 h-5 animate-spin-slow" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-cyan-400 font-semibold">React & Vite</div>
                  <div className="text-[10px] text-slate-400">Frontend UI</div>
                </div>
              </div>

              {/* Floating Badge 2: Backend & Python (Bottom-Left) */}
              <div className="absolute -bottom-3 -left-3 sm:left-2 p-3 rounded-2xl glass-card border border-purple-400/40 shadow-[0_8px_25px_rgba(168,85,247,0.25)] flex items-center gap-2 animate-float-reverse">
                <div className="w-8 h-8 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400">
                  <Terminal className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-purple-300 font-semibold">Node & Python</div>
                  <div className="text-[10px] text-slate-400">Full-Stack Dev</div>
                </div>
              </div>

              {/* Floating Badge 3: Clean Code & Algorithms (Center-Right) */}
              <div className="hidden sm:flex absolute top-1/2 -right-8 p-2.5 rounded-xl glass-card border border-emerald-400/40 shadow-lg items-center gap-2">
                <Database className="w-4 h-4 text-emerald-400" />
                <span className="text-[11px] font-mono text-emerald-300">Clean Code</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
