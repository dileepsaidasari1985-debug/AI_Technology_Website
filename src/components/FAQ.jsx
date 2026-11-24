import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const FAQ = () => {
  const { faqs } = portfolioData;
  const [openIndex, setOpenIndex] = useState(0); // Open first FAQ by default

  const toggleAccordion = (index) => {
    setOpenIndex(prev => (prev === index ? -1 : index));
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/3 w-80 h-80 rounded-full bg-indigo-500/10 blur-[130px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border-indigo-500/30 text-indigo-400 text-xs font-mono uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-3 rounded-full" />
          <p className="text-slate-400 text-xs sm:text-sm max-w-lg mx-auto mt-4">
            Quick answers about my availability, skills, engineering background, and collaboration preferences.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="glass-card rounded-2xl border border-white/5 dark:border-indigo-500/20 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-white tracking-wide">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-lg glass-card flex items-center justify-center shrink-0 text-cyan-400 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-cyan-500/20 text-cyan-300' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 animate-slide-up">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

