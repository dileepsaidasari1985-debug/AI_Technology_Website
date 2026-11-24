import React, { useState, useEffect, useRef } from 'react';
import {
  Search,
  X,
  Sparkles,
  ArrowRight,
  Cpu,
  Layers,
  BookOpen,
  HelpCircle,
  Users,
  CreditCard,
  FolderKanban
} from 'lucide-react';
import {
  AI_PRODUCTS,
  KEY_FEATURES,
  INDUSTRIES,
  TECH_STACK,
  BLOG_POSTS,
  FAQS,
  TEAM_MEMBERS
} from '../../data/nexoraData';

export const CommandPalette = ({
  isOpen,
  onClose,
  onOpenProductModal,
  onOpenBlogModal,
  onOpenTeamModal,
  onOpenDemoRequest,
}) => {
  const [search, setSearch] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setSearch('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const query = search.toLowerCase();

  // Search across multiple sections
  const matchedProducts = AI_PRODUCTS.filter(
    (p) => p.name.toLowerCase().includes(query) || p.shortDesc.toLowerCase().includes(query)
  );

  const matchedFeatures = KEY_FEATURES.filter(
    (f) => f.title.toLowerCase().includes(query) || f.description.toLowerCase().includes(query)
  );

  const matchedIndustries = INDUSTRIES.filter(
    (i) => i.name.toLowerCase().includes(query) || i.summary.toLowerCase().includes(query)
  );

  const matchedBlogs = BLOG_POSTS.filter(
    (b) => b.title.toLowerCase().includes(query) || b.excerpt.toLowerCase().includes(query)
  );

  const matchedFaqs = FAQS.filter(
    (q) => q.question.toLowerCase().includes(query) || q.answer.toLowerCase().includes(query)
  );

  const matchedTeam = TEAM_MEMBERS.filter(
    (m) => m.name.toLowerCase().includes(query) || m.role.toLowerCase().includes(query)
  );

  const handleSelectSection = (id) => {
    onClose();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/75 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-2xl rounded-3xl nexora-card border border-cyan-500/40 shadow-2xl overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Input Bar */}
        <div className="p-4 border-b border-white/10 flex items-center gap-3">
          <Search className="w-5 h-5 text-cyan-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search products, technologies, blog posts, FAQs, team..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-transparent text-sm text-white placeholder-slate-400 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="p-4 overflow-y-auto space-y-4 divide-y divide-white/5">
          {/* Quick Actions / Jump to Section */}
          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-2 font-semibold">
              Quick Navigation
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <button
                onClick={() => handleSelectSection('products')}
                className="p-2.5 rounded-xl bg-white/5 hover:bg-cyan-500/10 border border-white/5 text-xs text-slate-200 text-left hover:text-cyan-300 transition-colors"
              >
                AI Products
              </button>
              <button
                onClick={() => handleSelectSection('playground')}
                className="p-2.5 rounded-xl bg-white/5 hover:bg-cyan-500/10 border border-white/5 text-xs text-slate-200 text-left hover:text-cyan-300 transition-colors"
              >
                AI Playground
              </button>
              <button
                onClick={() => handleSelectSection('technology')}
                className="p-2.5 rounded-xl bg-white/5 hover:bg-cyan-500/10 border border-white/5 text-xs text-slate-200 text-left hover:text-cyan-300 transition-colors"
              >
                Tech Stack
              </button>
              <button
                onClick={() => handleSelectSection('pricing')}
                className="p-2.5 rounded-xl bg-white/5 hover:bg-cyan-500/10 border border-white/5 text-xs text-slate-200 text-left hover:text-cyan-300 transition-colors"
              >
                Pricing Plans
              </button>
            </div>
          </div>

          {/* Matched Products */}
          {matchedProducts.length > 0 && (
            <div className="pt-3">
              <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 block mb-2 font-semibold">
                AI Products ({matchedProducts.length})
              </span>
              <div className="space-y-1.5">
                {matchedProducts.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => {
                      onClose();
                      onOpenProductModal(p);
                    }}
                    className="w-full p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/10 text-left flex items-center justify-between transition-colors"
                  >
                    <div>
                      <div className="text-xs font-bold text-white">{p.name}</div>
                      <div className="text-[11px] text-slate-400 line-clamp-1">{p.shortDesc}</div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Matched Blog Articles */}
          {matchedBlogs.length > 0 && (
            <div className="pt-3">
              <span className="text-[11px] font-mono uppercase tracking-wider text-purple-400 block mb-2 font-semibold">
                Research & Blog ({matchedBlogs.length})
              </span>
              <div className="space-y-1.5">
                {matchedBlogs.map((b) => (
                  <button
                    key={b.id}
                    onClick={() => {
                      onClose();
                      onOpenBlogModal(b);
                    }}
                    className="w-full p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/10 text-left flex items-center justify-between transition-colors"
                  >
                    <div>
                      <div className="text-xs font-bold text-white">{b.title}</div>
                      <div className="text-[11px] text-slate-400 line-clamp-1">{b.excerpt}</div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-purple-400" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Matched FAQs */}
          {matchedFaqs.length > 0 && (
            <div className="pt-3">
              <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 block mb-2 font-semibold">
                FAQs ({matchedFaqs.length})
              </span>
              <div className="space-y-1.5">
                {matchedFaqs.map((q) => (
                  <button
                    key={q.id}
                    onClick={() => handleSelectSection('faq')}
                    className="w-full p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/10 text-left flex items-center justify-between transition-colors"
                  >
                    <div className="text-xs text-slate-200 line-clamp-1">{q.question}</div>
                    <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Matched Team */}
          {matchedTeam.length > 0 && (
            <div className="pt-3">
              <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 block mb-2 font-semibold">
                Leadership & Researchers ({matchedTeam.length})
              </span>
              <div className="space-y-1.5">
                {matchedTeam.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => {
                      onClose();
                      onOpenTeamModal(m);
                    }}
                    className="w-full p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/10 text-left flex items-center justify-between transition-colors"
                  >
                    <div>
                      <div className="text-xs font-bold text-white">{m.name}</div>
                      <div className="text-[11px] text-slate-400">{m.role}</div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="p-3 bg-navy-950/80 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
          <span>Tip: Press ESC to close palette</span>
          <span>NEXORA AI Smart Search</span>
        </div>
      </div>
    </div>
  );
};
