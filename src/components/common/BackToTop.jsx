import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

/**
 * Floating back-to-top button with circular scroll progress ring.
 */
export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = window.scrollY;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (height > 0) {
        setScrollPercentage(Math.round((scrolled / height) * 100));
      }
      if (scrolled > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  const circumference = 2 * Math.PI * 18;
  const strokeDashoffset = circumference - (scrollPercentage / 100) * circumference;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full glass-card flex items-center justify-center text-cyan-400 hover:text-white transition-all duration-300 hover:scale-110 shadow-[0_8px_25px_rgba(0,0,0,0.3)] hover:shadow-[0_0_20px_rgba(56,189,248,0.5)] group"
    >
      {/* Circular progress SVG */}
      <svg className="absolute w-12 h-12 -rotate-90 pointer-events-none" viewBox="0 0 44 44">
        <circle
          cx="22"
          cy="22"
          r="18"
          stroke="currentColor"
          strokeWidth="2.5"
          fill="transparent"
          className="text-slate-700/40 dark:text-slate-700/60"
        />
        <circle
          cx="22"
          cy="22"
          r="18"
          stroke="url(#progress-gradient)"
          strokeWidth="2.5"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-150"
        />
        <defs>
          <linearGradient id="progress-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
        </defs>
      </svg>
      <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
    </button>
  );
};

