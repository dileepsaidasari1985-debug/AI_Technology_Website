import React, { useState } from 'react';
import { 
  BookOpen, 
  Calendar, 
  Clock, 
  ArrowRight, 
  Sparkles, 
  Tag, 
  CheckCircle2, 
  ChevronRight 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { Modal } from './common/Modal';

export const Blog = () => {
  const { blogPosts } = portfolioData;
  const [activeArticle, setActiveArticle] = useState(null);

  return (
    <section id="blog" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 rounded-full bg-purple-600/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border-purple-500/30 text-purple-400 text-xs font-mono uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Learning Journal & Tech Thoughts</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Personal <span className="text-gradient">Blog</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-3 rounded-full" />
          <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto mt-4">
            Documenting my software development experiments, breakthroughs, architecture choices, and student learnings.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="glass-card rounded-2xl border border-white/5 dark:border-purple-500/15 p-6 flex flex-col justify-between group hover:border-purple-400/50 hover:-translate-y-1.5 transition-all duration-300 shadow-[0_4px_25px_rgba(0,0,0,0.25)] hover:shadow-[0_15px_30px_rgba(168,85,247,0.15)]"
            >
              <div>
                {/* Meta info bar */}
                <div className="flex items-center justify-between text-xs text-slate-400 mb-3 font-mono">
                  <span className="px-2.5 py-1 rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/20">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-cyan-400" />
                    {post.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-2.5 leading-snug">
                  {post.title}
                </h3>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-400 leading-relaxed mb-6">
                  {post.summary}
                </p>
              </div>

              {/* Bottom footer */}
              <div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {post.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-mono text-slate-400 bg-white/5 px-2 py-0.5 rounded"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-purple-400" />
                    {post.date}
                  </span>

                  <button
                    onClick={() => setActiveArticle(post)}
                    className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 group/btn"
                  >
                    <span>Read Article</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* FULL ARTICLE READER MODAL */}
      <Modal
        isOpen={Boolean(activeArticle)}
        onClose={() => setActiveArticle(null)}
        title={activeArticle ? activeArticle.title : 'Article Reader'}
        maxWidth="max-w-3xl"
      >
        {activeArticle && (
          <div className="space-y-6">
            {/* Metadata Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/10 text-xs">
              <span className="px-3 py-1 rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/20 font-mono">
                {activeArticle.category}
              </span>
              <div className="flex items-center gap-4 text-slate-400 font-mono">
                <span>📅 {activeArticle.date}</span>
                <span>⏱️ {activeArticle.readTime}</span>
              </div>
            </div>

            {/* Article Summary Box */}
            <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-xs sm:text-sm text-cyan-200 leading-relaxed">
              <strong>Overview: </strong> {activeArticle.summary}
            </div>

            {/* Article Body Content */}
            <div className="prose prose-invert max-w-none text-slate-300 text-xs sm:text-sm leading-relaxed space-y-4">
              {activeArticle.content.split('\n\n').map((paragraph, idx) => {
                if (paragraph.startsWith('### ')) {
                  return (
                    <h4 key={idx} className="text-base font-bold text-white pt-2 border-b border-white/5 pb-1">
                      {paragraph.replace('### ', '')}
                    </h4>
                  );
                }
                if (paragraph.startsWith('- ') || paragraph.startsWith('1. ') || paragraph.startsWith('2. ') || paragraph.startsWith('3. ')) {
                  return (
                    <div key={idx} className="pl-3 py-1 border-l-2 border-cyan-400/40 text-slate-200">
                      {paragraph}
                    </div>
                  );
                }
                return <p key={idx}>{paragraph}</p>;
              })}
            </div>

            {/* Tags footer */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
              <div className="flex gap-2">
                {activeArticle.tags.map((t, i) => (
                  <span key={i} className="px-2.5 py-1 rounded-md bg-white/5 text-xs font-mono text-slate-300">
                    #{t}
                  </span>
                ))}
              </div>
              <button
                onClick={() => setActiveArticle(null)}
                className="px-4 py-2 rounded-xl glass-card text-xs font-semibold text-slate-300 hover:text-white transition-colors"
              >
                Close Article
              </button>
            </div>
          </div>
        )}
      </Modal>

    </section>
  );
};

