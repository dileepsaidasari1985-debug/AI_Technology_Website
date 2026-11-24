import React from 'react';
import { Home, ArrowLeft } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

/**
 * Friendly 404 Not Found Page Component.
 */
export const NotFound = ({ onBackHome }) => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-navy-950 text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-cyan-500/10 blur-[130px] pointer-events-none" />

      <div className="relative z-10 text-center max-w-lg glass-card p-8 sm:p-12 rounded-3xl border border-white/10 shadow-2xl">
        {/* Large 404 */}
        <div className="font-black text-7xl sm:text-8xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 font-mono mb-4">
          404
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-3">
          Page Not Found
        </h1>

        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-8">
          The page you are looking for might have been moved, renamed, or temporarily unavailable. Let's get you back to the main portfolio!
        </p>

        <button
          onClick={onBackHome}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold text-sm shadow-lg hover:scale-105 transition-all"
        >
          <Home className="w-4 h-4" />
          <span>Return to Portfolio</span>
        </button>
      </div>
    </div>
  );
};

