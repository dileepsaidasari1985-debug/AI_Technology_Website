import React, { useState, useEffect } from 'react';
import {
  MessageSquareQuote,
  Star,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Building2
} from 'lucide-react';
import { TESTIMONIALS } from '../data/nexoraData';

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto advance carousel every 6 seconds
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full nexora-card border border-cyan-500/30 text-xs font-semibold text-cyan-400 mb-4">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>PARTNER VALIDATION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white dark:text-white tracking-tight mb-4">
            Customer <span className="text-gradient">Testimonials & Feedback</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 dark:text-slate-300 leading-relaxed">
            See how forward-thinking leaders evaluate our latency, reasoning fidelity, and zero-data-retention security guarantees.
          </p>
        </div>

        {/* Carousel Card */}
        <div
          className="max-w-4xl mx-auto rounded-3xl nexora-card border border-white/15 p-8 sm:p-12 shadow-2xl relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-cyan-500/10 via-purple-500/10 to-transparent blur-3xl pointer-events-none" />

          {/* Star Rating */}
          <div className="flex items-center gap-1.5 mb-6">
            {[...Array(current.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
            ))}
            <span className="text-xs font-mono text-slate-400 ml-2">5.0 Enterprise Rating</span>
          </div>

          {/* Testimonial Quote */}
          <blockquote className="text-lg sm:text-2xl font-display font-medium text-slate-100 leading-relaxed mb-8">
            "{current.quote}"
          </blockquote>

          {/* Reviewer Details & Controls */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-6 border-t border-white/10">
            <div className="flex items-center gap-4">
              <img
                src={current.image}
                alt={current.name}
                className="w-14 h-14 rounded-full object-cover border-2 border-cyan-400/40 shadow-lg"
              />
              <div>
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                  <span>{current.name}</span>
                  {current.verified && (
                    <span className="flex items-center gap-1 text-[10px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-full border border-cyan-500/20">
                      <ShieldCheck className="w-3 h-3" />
                      Verified
                    </span>
                  )}
                </h4>
                <p className="text-xs text-slate-300">{current.title}</p>
                <p className="text-xs font-mono text-cyan-400/90 flex items-center gap-1 mt-0.5">
                  <Building2 className="w-3 h-3" />
                  {current.company}
                </p>
              </div>
            </div>

            {/* Carousel Controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-1.5">
                {TESTIMONIALS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      currentIndex === idx ? 'w-8 bg-cyan-400' : 'bg-white/20 hover:bg-white/40'
                    }`}
                    aria-label={`Go to testimonial ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <p className="text-center text-[11px] font-mono text-slate-400 mt-6">
          *Note: Testimonials reflect illustrative evaluation examples for demonstration purposes.
        </p>
      </div>
    </section>
  );
};
