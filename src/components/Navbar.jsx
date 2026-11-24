import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Sparkles,
  Sun,
  Moon,
  Search,
  Globe,
  ChevronDown,
  ArrowRight,
  ShieldCheck,
  Cpu
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { BRAND, TRANSLATIONS } from '../data/nexoraData';

export const Navbar = ({
  onOpenDemoRequest,
  onOpenSearch,
  currentLang = 'en',
  onChangeLang,
}) => {
  const { themeMode, toggleThemeMode } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;

  const navLinks = [
    { name: t.navHome, href: '#hero', id: 'hero' },
    { name: t.navAbout, href: '#about', id: 'about' },
    { name: t.navProducts, href: '#products', id: 'products' },
    { name: t.navPlayground, href: '#playground', id: 'playground', badge: 'Interactive' },
    { name: t.navFeatures, href: '#features', id: 'features' },
    { name: t.navApplications, href: '#applications', id: 'applications' },
    { name: t.navTech, href: '#technology', id: 'technology' },
    { name: t.navTeam, href: '#team', id: 'team' },
    { name: t.navPricing, href: '#pricing', id: 'pricing' },
    { name: t.navBlog, href: '#blog', id: 'blog' },
    { name: t.navContact, href: '#contact', id: 'contact' },
  ];

  const languages = [
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
    { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'ja', label: '日本語', flag: '🇯🇵' },
  ];

  // Scroll spy & background blur
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check current section
      const sections = navLinks.map((l) => l.id);
      const scrollPos = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navLinks]);

  // Keyboard shortcut Ctrl+K to open search
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        onOpenSearch?.();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onOpenSearch]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-navy-950/85 dark:bg-navy-950/90 backdrop-blur-xl border-b border-white/10 dark:border-white/10 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-violet-600 p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-[0_0_20px_rgba(0,210,255,0.4)]">
              <div className="w-full h-full bg-navy-950 rounded-[10px] flex items-center justify-center">
                <Cpu className="w-5 h-5 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-display font-extrabold text-xl tracking-tight text-white dark:text-white group-hover:text-cyan-400 transition-colors">
                  {BRAND.name}
                </span>
                <span className="px-1.5 py-0.5 text-[10px] font-semibold tracking-wider uppercase rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  AI 3.0
                </span>
              </div>
              <span className="text-[10px] tracking-wider uppercase text-slate-400 -mt-0.5 hidden sm:block">
                {BRAND.tagline}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 flex items-center gap-1.5 ${
                    isActive
                      ? 'text-cyan-400 bg-cyan-500/10 shadow-[0_0_12px_rgba(0,210,255,0.15)] font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                  {link.badge && (
                    <span className="px-1.5 py-0.2 text-[9px] font-bold rounded-full bg-gradient-to-r from-violet-500 to-pink-500 text-white animate-pulse">
                      {link.badge}
                    </span>
                  )}
                  {isActive && (
                    <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Controls: Search, Lang, Theme, Get Started */}
          <div className="hidden lg:flex items-center gap-2.5">
            {/* Smart Search Trigger */}
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-cyan-400/40 text-slate-300 hover:text-white text-xs transition-all duration-200"
              title="Search website (Ctrl + K)"
            >
              <Search className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-slate-400 hidden 2xl:inline">Search...</span>
              <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[9px] bg-black/40 border border-white/10 rounded text-slate-400">
                ⌘K
              </kbd>
            </button>

            {/* Language Dropdown */}
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 text-slate-300 text-xs transition-colors"
              >
                <Globe className="w-3.5 h-3.5 text-cyan-400" />
                <span className="uppercase font-semibold">{currentLang}</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>

              {langDropdownOpen && (
                <div className="absolute right-0 mt-2 w-36 py-1.5 rounded-xl nexora-card border border-white/10 shadow-2xl z-50">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        onChangeLang?.(l.code);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full px-3 py-1.5 text-left text-xs flex items-center justify-between hover:bg-white/10 transition-colors ${
                        currentLang === l.code ? 'text-cyan-400 font-bold bg-cyan-500/10' : 'text-slate-300'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span>{l.flag}</span>
                        <span>{l.label}</span>
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Theme Switcher */}
            <button
              onClick={toggleThemeMode}
              className="p-2 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 text-slate-300 hover:text-white transition-colors"
              title={`Switch to ${themeMode === 'dark' ? 'Light' : 'Dark'} mode`}
            >
              {themeMode === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-cyan-400" />
              )}
            </button>

            {/* Get Started Button */}
            <button
              onClick={onOpenDemoRequest}
              className="relative group overflow-hidden px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 shadow-[0_0_20px_rgba(0,210,255,0.35)] hover:shadow-[0_0_28px_rgba(0,210,255,0.6)] transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-1.5"
            >
              <span>{t.getStarted}</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Hamburger & Quick Theme */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              onClick={onOpenSearch}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300"
              title="Search"
            >
              <Search className="w-4 h-4 text-cyan-400" />
            </button>

            <button
              onClick={toggleThemeMode}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300"
            >
              {themeMode === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-cyan-400" />
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-200 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-navy-950/98 border-b border-white/10 px-4 pt-4 pb-6 shadow-2xl backdrop-blur-2xl animate-fadeIn">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center justify-between ${
                  activeSection === link.id
                    ? 'text-cyan-400 bg-cyan-500/10 font-semibold'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>{link.name}</span>
                {link.badge && (
                  <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-gradient-to-r from-violet-500 to-pink-500 text-white">
                    {link.badge}
                  </span>
                )}
              </a>
            ))}

            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              {/* Language selection on mobile */}
              <div className="flex items-center justify-between px-2">
                <span className="text-xs text-slate-400">Language:</span>
                <div className="flex items-center gap-1.5">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => onChangeLang?.(l.code)}
                      className={`px-2 py-1 rounded text-xs ${
                        currentLang === l.code ? 'bg-cyan-500 text-white font-bold' : 'bg-white/5 text-slate-300'
                      }`}
                    >
                      {l.code.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDemoRequest?.();
                }}
                className="w-full py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 shadow-[0_0_20px_rgba(0,210,255,0.35)] flex items-center justify-center gap-2"
              >
                <span>{t.getStarted}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
