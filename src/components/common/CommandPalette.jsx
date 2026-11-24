import React, { useState, useEffect, useMemo } from 'react';
import { 
  Search, 
  Command, 
  Home, 
  User, 
  Zap, 
  FolderGit2, 
  Award, 
  GraduationCap, 
  FileCheck, 
  BookOpen, 
  Mail, 
  FileText, 
  Palette, 
  Sun, 
  Moon, 
  Copy, 
  ExternalLink, 
  Code,
  Calendar,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { useTheme, THEME_PRESETS } from '../../context/ThemeContext';
import { portfolioData } from '../../data/portfolioData';
import { useToast } from './Toast';
import { sounds } from '../../utils/soundEffects';

export const CommandPalette = ({ onOpenResume, onOpenScheduleChat }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  const { activePreset, setPreset, themeMode, toggleThemeMode } = useTheme();
  const { showToast } = useToast();

  // Keyboard shortcut listener: Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        sounds.playClick();
        setIsOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Action Commands Registry
  const allCommands = useMemo(() => [
    // Navigation
    { id: 'nav-home', title: 'Go to Home', category: 'Navigation', icon: Home, action: () => scrollTo('#home') },
    { id: 'nav-about', title: 'Go to About Me', category: 'Navigation', icon: User, action: () => scrollTo('#about') },
    { id: 'nav-skills', title: 'Go to Technical Skills', category: 'Navigation', icon: Zap, action: () => scrollTo('#skills') },
    { id: 'nav-projects', title: 'Go to Projects Showcase', category: 'Navigation', icon: FolderGit2, action: () => scrollTo('#projects') },
    { id: 'nav-playground', title: 'Go to Live Code Playground', category: 'Navigation', icon: Code, action: () => scrollTo('#playground') },
    { id: 'nav-achievements', title: 'Go to Achievements & Awards', category: 'Navigation', icon: Award, action: () => scrollTo('#achievements') },
    { id: 'nav-education', title: 'Go to Education Timeline', category: 'Navigation', icon: GraduationCap, action: () => scrollTo('#education') },
    { id: 'nav-certifications', title: 'Go to Certifications', category: 'Navigation', icon: FileCheck, action: () => scrollTo('#certifications') },
    { id: 'nav-blog', title: 'Go to Personal Blog', category: 'Navigation', icon: BookOpen, action: () => scrollTo('#blog') },
    { id: 'nav-contact', title: 'Go to Contact Section', category: 'Navigation', icon: Mail, action: () => scrollTo('#contact') },

    // Actions & Modals
    { id: 'act-resume', title: 'Open & Download Resume', category: 'Actions', icon: FileText, action: onOpenResume },
    { id: 'act-chat', title: 'Schedule a Coffee Chat / Interview', category: 'Actions', icon: Calendar, action: onOpenScheduleChat },
    { 
      id: 'act-copy-email', 
      title: 'Copy Email Address to Clipboard', 
      category: 'Actions', 
      icon: Copy, 
      action: () => {
        navigator.clipboard.writeText(portfolioData.personalInfo.email);
        showToast('Email address copied to clipboard!', 'success');
      } 
    },
    { 
      id: 'act-copy-url', 
      title: 'Copy Portfolio Website Link', 
      category: 'Actions', 
      icon: ExternalLink, 
      action: () => {
        navigator.clipboard.writeText(window.location.href);
        showToast('Portfolio URL copied to clipboard!', 'success');
      } 
    },

    // Themes
    { id: 'theme-toggle', title: `Switch to ${themeMode === 'dark' ? 'Light' : 'Dark'} Mode`, category: 'Theme & Style', icon: themeMode === 'dark' ? Sun : Moon, action: toggleThemeMode },
    { id: 'theme-cyberpunk', title: 'Apply Theme: Cyberpunk Neon', category: 'Theme & Style', icon: Palette, action: () => setPreset('cyberpunk') },
    { id: 'theme-ocean', title: 'Apply Theme: Midnight Ocean', category: 'Theme & Style', icon: Palette, action: () => setPreset('ocean') },
    { id: 'theme-emerald', title: 'Apply Theme: Emerald Matrix', category: 'Theme & Style', icon: Palette, action: () => setPreset('emerald') },
    { id: 'theme-sunset', title: 'Apply Theme: Sunset Nebula', category: 'Theme & Style', icon: Palette, action: () => setPreset('sunset') },
    { id: 'theme-amethyst', title: 'Apply Theme: Royal Amethyst', category: 'Theme & Style', icon: Palette, action: () => setPreset('amethyst') },
    { id: 'theme-paper', title: 'Apply Theme: Paper Warmth (Comfort)', category: 'Theme & Style', icon: Palette, action: () => setPreset('paper') },
  ], [themeMode, toggleThemeMode, setPreset, onOpenResume, onOpenScheduleChat, showToast]);

  const scrollTo = (hash) => {
    const el = document.querySelector(hash);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Filter commands
  const filteredCommands = useMemo(() => {
    if (!query.trim()) return allCommands;
    const q = query.toLowerCase();
    return allCommands.filter(
      (cmd) =>
        cmd.title.toLowerCase().includes(q) ||
        cmd.category.toLowerCase().includes(q)
    );
  }, [allCommands, query]);

  // Arrow key navigation
  useEffect(() => {
    const handleKeyNav = (e) => {
      if (!isOpen) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % filteredCommands.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % filteredCommands.length);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredCommands[selectedIndex]) {
          sounds.playClick();
          filteredCommands[selectedIndex].action();
          setIsOpen(false);
          setQuery('');
        }
      }
    };

    window.addEventListener('keydown', handleKeyNav);
    return () => window.removeEventListener('keydown', handleKeyNav);
  }, [isOpen, filteredCommands, selectedIndex]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-start justify-center pt-20 sm:pt-28 p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-navy-950/80 backdrop-blur-md transition-opacity"
        onClick={() => setIsOpen(false)}
      />

      {/* Palette Box */}
      <div className="relative w-full max-w-xl glass-card bg-slate-900/95 dark:bg-navy-900/95 rounded-2xl border border-cyan-500/30 shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden z-10 animate-slide-up">
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-white/10 gap-3">
          <Search className="w-5 h-5 text-cyan-400 shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Type a command or search sections... (e.g. 'theme', 'resume', 'skills')"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            className="w-full bg-transparent text-sm text-slate-100 placeholder-slate-400 focus:outline-none font-sans"
          />
          <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded bg-white/10 text-[10px] font-mono text-slate-400 border border-white/10">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filteredCommands.length === 0 ? (
            <div className="text-center py-8 text-xs text-slate-400">
              No matching commands found.
            </div>
          ) : (
            filteredCommands.map((cmd, idx) => {
              const IconComp = cmd.icon;
              const isSelected = selectedIndex === idx;

              return (
                <button
                  key={cmd.id}
                  onClick={() => {
                    sounds.playClick();
                    cmd.action();
                    setIsOpen(false);
                    setQuery('');
                  }}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`w-full px-3.5 py-2.5 rounded-xl text-left text-xs sm:text-sm flex items-center justify-between transition-colors ${
                    isSelected
                      ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-white border border-cyan-400/40 shadow-sm'
                      : 'text-slate-300 hover:bg-white/5 border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-1.5 rounded-lg ${isSelected ? 'bg-cyan-500 text-white' : 'bg-white/5 text-slate-400'}`}>
                      <IconComp className="w-4 h-4" />
                    </div>
                    <span>{cmd.title}</span>
                  </div>

                  <span className="text-[11px] font-mono text-slate-400 opacity-70">
                    {cmd.category}
                  </span>
                </button>
              );
            })
          )}
        </div>

        {/* Palette Footer Hints */}
        <div className="px-4 py-2.5 bg-black/30 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400 font-mono">
          <div className="flex items-center gap-3">
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
          </div>
          <span>Alex Rivera Portfolio</span>
        </div>
      </div>
    </div>
  );
};

