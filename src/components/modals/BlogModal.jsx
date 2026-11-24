import React from 'react';
import {
  X,
  Calendar,
  Clock,
  User,
  Share2,
  BookOpen
} from 'lucide-react';
import { useToast } from '../common/Toast';

export const BlogModal = ({ post, isOpen, onClose }) => {
  const { showToast } = useToast();

  if (!isOpen || !post) return null;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    showToast('Article link copied to clipboard', 'success');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-2xl rounded-3xl nexora-card border border-cyan-500/40 p-6 sm:p-8 shadow-2xl relative max-h-[85vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-xs font-mono text-cyan-400 uppercase font-bold inline-block mb-3">
          {post.category}
        </span>

        <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white mb-4 leading-snug">
          {post.title}
        </h3>

        <div className="flex items-center gap-4 text-xs font-mono text-slate-400 pb-4 border-b border-white/10 mb-6">
          <span className="flex items-center gap-1.5">
            <User className="w-3.5 h-3.5 text-cyan-400" />
            {post.author} ({post.authorRole})
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-purple-400" />
            {post.date}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            {post.readTime}
          </span>
        </div>

        {/* Article Body */}
        <div className="text-xs sm:text-sm text-slate-200 leading-relaxed space-y-4 font-sans whitespace-pre-wrap">
          {post.content}
        </div>

        {/* Article Footer */}
        <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
          <button
            onClick={handleShare}
            className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5"
          >
            <Share2 className="w-4 h-4" />
            <span>Share Research Paper</span>
          </button>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-semibold text-white bg-white/10 hover:bg-white/20"
          >
            Done Reading
          </button>
        </div>
      </div>
    </div>
  );
};
