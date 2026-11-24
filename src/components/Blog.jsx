import React, { useState } from 'react';
import {
  BookOpen,
  Search,
  Calendar,
  Clock,
  ArrowRight,
  Tag,
  ExternalLink
} from 'lucide-react';
import { BLOG_POSTS } from '../data/nexoraData';

export const Blog = ({ onOpenBlogModal }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'Research', 'Tutorial', 'Ethics & Safety', 'Generative AI'];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="blog" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full nexora-card border border-cyan-500/30 text-xs font-semibold text-cyan-400 mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            <span>KNOWLEDGE CENTER</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white dark:text-white tracking-tight mb-4">
            AI Insights, Research & <span className="text-gradient">Tutorials</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 dark:text-slate-300 leading-relaxed">
            Frontier explorations into speculative decoding, zero-hallucination RAG, responsible governance, and embodied physical robotics.
          </p>

          {/* Search & Category Filter Controls */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-cyan-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search research articles & tutorials..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl nexora-card border border-white/10 focus:border-cyan-400 text-xs text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors"
              />
            </div>

            <div className="flex flex-wrap items-center justify-center gap-1.5 w-full sm:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                    selectedCategory === cat
                      ? 'bg-cyan-500 text-white shadow-[0_0_12px_rgba(0,210,255,0.4)]'
                      : 'nexora-card border border-white/10 text-slate-300 hover:text-white hover:border-white/20'
                  }`}
                >
                  {cat === 'all' ? 'All Posts' : cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="rounded-3xl nexora-card border border-white/10 hover:border-cyan-500/40 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 group shadow-xl"
            >
              <div>
                {/* Cover Image */}
                <div className="relative h-56 w-full overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/30 to-transparent" />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-navy-950/80 backdrop-blur-md border border-white/10 text-[11px] font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                    {post.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-7">
                  <div className="flex items-center gap-4 text-xs font-mono text-slate-400 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-purple-400" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-bold text-white group-hover:text-cyan-400 transition-colors mb-3 leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {post.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-slate-300"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Author Line */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-white">{post.author}</div>
                      <div className="text-[10px] text-slate-400">{post.authorRole}</div>
                    </div>

                    <button
                      onClick={() => onOpenBlogModal(post)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 group/btn"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-[11px] font-mono text-slate-400 mt-10">
          *Note: Articles reflect sample thought-leadership publications authored for architectural evaluation.
        </p>
      </div>
    </section>
  );
};
