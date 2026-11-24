import React, { useState } from 'react';
import {
  HelpCircle,
  ChevronDown,
  Search,
  MessageSquare
} from 'lucide-react';
import { FAQS } from '../data/nexoraData';

export const FAQ = ({ onOpenDemoRequest }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [openIds, setOpenIds] = useState(['faq-1', 'faq-2']);

  const categories = ['all', 'General', 'Products', 'Technology', 'Integration', 'Security', 'Playground'];

  const toggleAccordion = (id) => {
    if (openIds.includes(id)) {
      setOpenIds(openIds.filter((x) => x !== id));
    } else {
      setOpenIds([...openIds, id]);
    }
  };

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesCat = selectedCategory === 'all' || faq.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-navy-950/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full nexora-card border border-cyan-500/30 text-xs font-semibold text-cyan-400 mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>CLARITY & TRANSPARENCY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white dark:text-white tracking-tight mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 dark:text-slate-300 leading-relaxed">
            Get clear, comprehensive answers regarding our neural technology, data security policies, playground access, and enterprise deployments.
          </p>

          {/* Search & Category Pills */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-cyan-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Filter questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl nexora-card border border-white/10 focus:border-cyan-400 text-xs text-white placeholder-slate-400 focus:outline-none"
              />
            </div>

            <div className="flex flex-wrap items-center justify-center gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold capitalize transition-all ${
                    selectedCategory === cat
                      ? 'bg-cyan-500 text-white shadow-[0_0_12px_rgba(0,210,255,0.4)]'
                      : 'nexora-card border border-white/10 text-slate-300 hover:text-white'
                  }`}
                >
                  {cat === 'all' ? 'All (8)' : cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Expandable Accordion List */}
        <div className="space-y-4 mb-14">
          {filteredFaqs.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                className={`rounded-2xl nexora-card transition-all duration-300 border ${
                  isOpen
                    ? 'border-cyan-500/40 bg-gradient-to-r from-cyan-950/20 to-navy-950/70 shadow-lg'
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[10px] font-mono text-cyan-400 uppercase tracking-wider">
                      {faq.category}
                    </span>
                    <span className="text-base sm:text-lg font-bold text-white">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-cyan-400 transform transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="p-8 rounded-3xl nexora-card border border-white/10 text-center max-w-xl mx-auto">
          <MessageSquare className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-white mb-1">
            Have a custom technical or architectural question?
          </h3>
          <p className="text-xs text-slate-300 mb-5">
            Our principal AI engineers are available to review your workload requirements and provide benchmark feasibility reports.
          </p>
          <button
            onClick={onOpenDemoRequest}
            className="px-6 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 shadow-[0_0_15px_rgba(0,210,255,0.3)] hover:scale-105 active:scale-95 transition-all"
          >
            Speak with an AI Solutions Architect
          </button>
        </div>
      </div>
    </section>
  );
};
