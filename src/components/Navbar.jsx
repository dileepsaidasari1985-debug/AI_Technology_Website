import React, { useState, useEffect } from 'react';
import { 
  Sun, 
  Moon, 
  Menu, 
  X, 
  FileText, 
  Share2, 
  Sparkles, 
  Command, 
  Calendar,
  Code
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { portfolioData } from '../data/portfolioData';
import { useToast } from './common/Toast';
import { sounds } from '../utils/soundEffects';

export const Navbar = ({ onOpenResume, onOpenScheduleChat }) => {
  const { themeMode, toggleThemeMode } = useTheme();
  const { showToast } = useToast();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Playground', href: '#playground' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  // Detect scroll for glass navbar & active link spy
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Share portfolio feature
  const handleShare = async () => {
    sounds.playClick();
    const shareData = {
      title: `${portfolioData.personalInfo.fullName} | Portfolio`,
      text: `Check out ${portfolioData.personalInfo.fullName}'s student portfolio!`,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        showToast('Shared successfully!', 'success');
      } catch (err) {
        if (err.name !== 'AbortError') {
          copyToClipboard();
        }
      }
    } else {
      copyToClipboard();
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    showToast('Portfolio URL copied to clipboard!', 'success');
  };

  const triggerCmdK = () => {
    sounds.playClick();
    const event = new KeyboardEvent('keydown', { key: 'k', metaKey: true, bubbles: true });
    window.dispatchEvent(event);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav py-3 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Initials */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group focus:outline-none"
            aria-label="Back to home"
            onClick={() => sounds.playClick()}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-600 p-[2px] transition-transform duration-300 group-hover:scale-105 shadow-[0_0_15px_rgba(56,189,248,0.4)]">
              <div className="w-full h-full bg-navy-950 dark:bg-navy-900 rounded-[10px] flex items-center justify-center">
                <span className="font-mono font-black text-sm text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 tracking-wider">
                  {portfolioData.personalInfo.initials}
                </span>
              </div>
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-base text-slate-100 group-hover:text-cyan-400 transition-colors">
                {portfolioData.personalInfo.fullName}
              </span>
              <span className="block text-[10px] uppercase tracking-wider text-slate-400 font-mono">
                Student & Dev
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => sounds.playClick()}
                  className={`px-3 py-1.5 rounded-lg text-xs xl:text-sm font-medium transition-all duration-200 relative ${
                    isActive
                      ? 'text-cyan-400 font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action Buttons (Cmd+K, Schedule, Share, Theme Toggle, Resume, Mobile Menu) */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            
            {/* Command Palette Trigger Button */}
            <button
              onClick={triggerCmdK}
              className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg glass-card text-xs text-slate-300 hover:text-cyan-400 hover:border-cyan-400/40 transition-colors"
              title="Quick Search (Ctrl + K / Cmd + K)"
            >
              <Command className="w-3.5 h-3.5 text-cyan-400" />
              <kbd className="text-[10px] font-mono text-slate-400 bg-white/5 px-1.5 py-0.5 rounded border border-white/10">
                ⌘K
              </kbd>
            </button>

            {/* Schedule Chat button */}
            <button
              onClick={() => {
                sounds.playClick();
                onOpenScheduleChat();
              }}
              title="Schedule a Chat / Meeting"
              className="hidden md:inline-flex p-2 rounded-lg glass-card text-slate-300 hover:text-purple-400 hover:border-purple-400/40 transition-all duration-200"
              aria-label="Schedule a Chat"
            >
              <Calendar className="w-4 h-4" />
            </button>

            {/* Share button */}
            <button
              onClick={handleShare}
              title="Share Portfolio"
              className="p-2 rounded-lg glass-card text-slate-300 hover:text-cyan-400 hover:border-cyan-400/40 transition-all duration-200"
              aria-label="Share Portfolio"
            >
              <Share2 className="w-4 h-4" />
            </button>

            {/* Dark/Light Mode Toggle */}
            <button
              onClick={() => {
                sounds.playClick();
                toggleThemeMode();
              }}
              title={themeMode === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              className="p-2 rounded-lg glass-card text-slate-300 hover:text-amber-400 hover:border-amber-400/40 transition-all duration-200"
              aria-label="Toggle Theme Mode"
            >
              {themeMode === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400 animate-spin-slow" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-400" />
              )}
            </button>

            {/* Resume Button */}
            <button
              onClick={() => {
                sounds.playClick();
                onOpenResume();
              }}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/40 text-cyan-300 hover:text-white hover:border-cyan-400 hover:from-cyan-500/30 hover:to-purple-500/30 text-xs sm:text-sm font-medium transition-all duration-200 shadow-[0_0_15px_rgba(56,189,248,0.15)]"
            >
              <FileText className="w-4 h-4" />
              <span>Resume</span>
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => {
                sounds.playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="lg:hidden p-2 rounded-lg glass-card text-slate-300 hover:text-white"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-nav border-b border-white/10 px-4 pt-3 pb-6 mt-3 animate-slide-up shadow-2xl">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    sounds.playClick();
                    setMobileMenuOpen(false);
                  }}
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-cyan-500/10 text-cyan-400 border-l-2 border-cyan-400'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <Sparkles className="w-3.5 h-3.5 text-cyan-400" />}
                </a>
              );
            })}

            <div className="pt-3 mt-2 border-t border-white/10 flex flex-col gap-2">
              <button
                onClick={() => {
                  sounds.playClick();
                  setMobileMenuOpen(false);
                  onOpenScheduleChat();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg glass-card border border-purple-400/30 text-purple-300 font-medium text-sm"
              >
                <Calendar className="w-4 h-4" />
                Schedule a Chat / Meeting
              </button>

              <button
                onClick={() => {
                  sounds.playClick();
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium text-sm shadow-md"
              >
                <FileText className="w-4 h-4" />
                View & Download Resume
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
