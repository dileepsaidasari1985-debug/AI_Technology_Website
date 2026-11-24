import React, { useState } from 'react';
import {
  X,
  Send,
  Calendar,
  Clock,
  CheckCircle2,
  AlertCircle,
  Building2,
  Mail,
  User,
  Sparkles
} from 'lucide-react';
import { useToast } from '../common/Toast';

export const DemoRequestModal = ({ isOpen, onClose, preselectedPlan }) => {
  const { showToast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    plan: preselectedPlan?.name || 'Professional',
    productInterest: 'All Foundation Models',
    date: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [demoCode, setDemoCode] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      showToast('Please provide your name and work email', 'error');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      const code = `NEX-DEMO-${Math.floor(1000 + Math.random() * 9000)}`;
      setDemoCode(code);
      showToast('Demo request scheduled successfully!', 'success');
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-lg rounded-3xl nexora-card border border-cyan-500/40 p-6 sm:p-8 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {success ? (
          <div className="text-center py-6">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Private AI Demonstration Scheduled
            </h3>
            <p className="text-xs font-mono text-cyan-400 mb-3">
              Session Code: #{demoCode}
            </p>
            <p className="text-xs text-slate-300 leading-relaxed mb-6">
              A calendar invitation along with private inference sandbox credentials has been dispatched to <strong>{formData.email}</strong>.
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl text-xs font-semibold text-white bg-cyan-500 hover:bg-cyan-600 transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-400">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-white">
                  Schedule Interactive AI Demo
                </h3>
                <p className="text-xs text-slate-400">
                  Experience Nexora AI with a Lead Solutions Architect
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block font-mono text-slate-300 mb-1">
                  Full Name <span className="text-cyan-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Dr. Alex Morgan"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl nexora-card border border-white/15 focus:border-cyan-400 text-white placeholder-slate-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-mono text-slate-300 mb-1">
                  Corporate Work Email <span className="text-cyan-400">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@enterprise.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl nexora-card border border-white/15 focus:border-cyan-400 text-white placeholder-slate-400 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-mono text-slate-300 mb-1">Company</label>
                  <input
                    type="text"
                    placeholder="Acme Systems"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl nexora-card border border-white/15 focus:border-cyan-400 text-white placeholder-slate-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-mono text-slate-300 mb-1">Target Plan</label>
                  <select
                    value={formData.plan}
                    onChange={(e) => setFormData({ ...formData, plan: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl nexora-card border border-white/15 focus:border-cyan-400 text-white bg-navy-950 focus:outline-none"
                  >
                    <option value="Starter">Starter Plan</option>
                    <option value="Professional">Professional Plan</option>
                    <option value="Enterprise">Enterprise Dedicated</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-mono text-slate-300 mb-1">Product Focus</label>
                <select
                  value={formData.productInterest}
                  onChange={(e) => setFormData({ ...formData, productInterest: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl nexora-card border border-white/15 focus:border-cyan-400 text-white bg-navy-950 focus:outline-none"
                >
                  <option value="All Foundation Models">All Foundation Models</option>
                  <option value="AI Chat Assistant">AI Chat Assistant</option>
                  <option value="AI Code Assistant">AI Code Assistant</option>
                  <option value="AI Data Analytics">AI Data Analytics</option>
                  <option value="AI Automation Engine">AI Automation Engine</option>
                  <option value="AI Image Generator">AI Image Generator</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 shadow-[0_0_20px_rgba(0,210,255,0.4)] hover:shadow-[0_0_28px_rgba(0,210,255,0.7)] transition-all flex items-center justify-center gap-2 mt-4"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Confirming Demonstration...</span>
                  </>
                ) : (
                  <>
                    <span>Confirm Interactive Demo</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
