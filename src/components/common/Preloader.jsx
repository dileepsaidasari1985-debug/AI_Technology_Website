import React, { useEffect, useState } from 'react';
import { portfolioData } from '../../data/portfolioData';

/**
 * Premium custom preloader / intro splash screen.
 */
export const Preloader = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsFading(true);
          setTimeout(() => {
            if (onFinish) onFinish();
          }, 600);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 10;
      });
    }, 90);

    return () => clearInterval(timer);
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-navy-950 transition-opacity duration-600 ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="relative flex flex-col items-center">
        {/* Glowing badge */}
        <div className="relative mb-8">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-cyan-500 to-purple-600 p-[2px] animate-pulse-slow shadow-[0_0_40px_rgba(56,189,248,0.5)]">
            <div className="w-full h-full bg-navy-950 rounded-2xl flex items-center justify-center">
              <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 tracking-wider">
                {portfolioData.personalInfo.initials}
              </span>
            </div>
          </div>
          {/* Animated decorative ring */}
          <div className="absolute -inset-3 rounded-3xl border border-cyan-500/20 animate-spin-slow pointer-events-none" />
        </div>

        {/* Name and Title */}
        <h2 className="text-xl font-bold text-white tracking-wide mb-1">
          {portfolioData.personalInfo.fullName}
        </h2>
        <p className="text-xs uppercase tracking-widest text-cyan-400/80 mb-6 font-mono">
          Portfolio Experience
        </p>

        {/* Progress bar container */}
        <div className="w-56 h-1.5 bg-slate-800 rounded-full overflow-hidden p-[1px] relative">
          <div
            className="h-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 rounded-full transition-all duration-150 ease-out"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>

        {/* Percentage counter */}
        <div className="mt-3 text-xs font-mono text-slate-400">
          Loading {Math.min(progress, 100)}%
        </div>
      </div>
    </div>
  );
};

