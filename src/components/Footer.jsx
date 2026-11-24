import React, { useState } from 'react';
import {
  Cpu,
  Mail,
  Send,
  Linkedin,
  Github,
  Twitter,
  ArrowRight,
  ShieldCheck,
  Check,
  Heart
} from 'lucide-react';
import { BRAND } from '../data/nexoraData';

export const Footer = ({ onOpenPrivacyModal, onOpenTermsModal }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);
  const [newsletterError, setNewsletterError] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!newsletterEmail.trim() || !emailRegex.test(newsletterEmail)) {
      setNewsletterError('Please enter a valid email address');
      return;
    }
    setNewsletterError('');
    setNewsletterSuccess(true);
    setTimeout(() => {
      setNewsletterEmail('');
      setNewsletterSuccess(false);
    }, 4000);
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-navy-950 border-t border-white/10 pt-16 pb-12 overflow-hidden z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-violet-600 p-[1.5px]">
                <div className="w-full h-full bg-navy-950 rounded-[10px] flex items-center justify-center">
                  <Cpu className="w-5 h-5 text-cyan-400" />
                </div>
              </div>
              <span className="font-display font-extrabold text-2xl tracking-tight text-white">
                {BRAND.name}
              </span>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed mb-4 max-w-sm">
              {BRAND.tagline} Empowering enterprises with mathematically verifiable, sub-20ms autonomous neural models and privacy-preserving architectures.
            </p>

            <div className="text-xs font-mono text-cyan-400 mb-6 font-semibold">
              "Building Tomorrow with Artificial Intelligence."
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-cyan-500/20 text-slate-400 hover:text-cyan-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-cyan-500/20 text-slate-400 hover:text-cyan-400 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-cyan-500/20 text-slate-400 hover:text-cyan-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 1: AI Products */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold mb-4">
              AI Products
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button onClick={() => scrollTo('products')} className="hover:text-cyan-400 transition-colors">
                  AI Chat Assistant
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('products')} className="hover:text-cyan-400 transition-colors">
                  AI Image Generator
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('products')} className="hover:text-cyan-400 transition-colors">
                  AI Content Generator
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('products')} className="hover:text-cyan-400 transition-colors">
                  AI Code Assistant
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('products')} className="hover:text-cyan-400 transition-colors">
                  AI Data Analytics
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('products')} className="hover:text-cyan-400 transition-colors">
                  AI Automation Engine
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Technology & Resources */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold mb-4">
              Resources & Tech
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button onClick={() => scrollTo('technology')} className="hover:text-cyan-400 transition-colors">
                  Enterprise Tech Stack
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('playground')} className="hover:text-cyan-400 transition-colors flex items-center gap-1">
                  <span>AI Playground</span>
                  <span className="text-[9px] px-1 bg-cyan-500/20 text-cyan-400 rounded">Live</span>
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('applications')} className="hover:text-cyan-400 transition-colors">
                  Industry Solutions
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('pricing')} className="hover:text-cyan-400 transition-colors">
                  Pricing Plans
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('blog')} className="hover:text-cyan-400 transition-colors">
                  Research Papers & Blog
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('faq')} className="hover:text-cyan-400 transition-colors">
                  Frequently Asked Questions
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Newsletter Subscription */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold mb-4">
              Stay Informed
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              Subscribe to the Nexora AI Research Dispatch for bi-weekly neural breakthrough updates.
            </p>

            {newsletterSuccess ? (
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-2">
                <Check className="w-4 h-4 shrink-0" />
                <span>Subscribed! Check your inbox for issue #01.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="engineer@company.com"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl nexora-card border border-white/10 focus:border-cyan-400 text-xs text-white placeholder-slate-400 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1/2 -translate-y-1/2 p-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-600 text-white transition-colors"
                    aria-label="Subscribe"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
                {newsletterError && (
                  <p className="text-[10px] text-rose-400">{newsletterError}</p>
                )}
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar with Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div>
            &copy; {new Date().getFullYear()} {BRAND.name} Inc. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <button onClick={onOpenPrivacyModal} className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </button>
            <button onClick={onOpenTermsModal} className="hover:text-slate-300 transition-colors">
              Terms & Conditions
            </button>
            <span className="flex items-center gap-1.5 text-slate-400">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              SOC2 Type II Validated
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
