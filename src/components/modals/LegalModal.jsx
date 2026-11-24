import React from 'react';
import { X, ShieldCheck } from 'lucide-react';
import { BRAND } from '../../data/nexoraData';

export const LegalModal = ({ title, type, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-2xl rounded-3xl nexora-card border border-cyan-500/40 p-6 sm:p-8 shadow-2xl relative max-h-[85vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <h3 className="text-2xl font-display font-bold text-white mb-4">
          {title || (type === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions')}
        </h3>

        <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <p>
            Effective Date: November 24, 2026. Published by {BRAND.name} Inc.
          </p>
          <h4 className="text-sm font-bold text-white">1. Scope of Service</h4>
          <p>
            {BRAND.name} provides artificial intelligence API services, foundation model endpoints, and software development kits for authorized organizational and personal evaluation.
          </p>
          <h4 className="text-sm font-bold text-white">2. Confidentiality & Zero Data Retention</h4>
          <p>
            Your proprietary prompts, embeddings, tabular streams, and synthesized outputs remain your sole intellectual property. We do not use customer data transmitted via enterprise endpoints to train public foundation models without your explicit opt-in.
          </p>
          <h4 className="text-sm font-bold text-white">3. Acceptable Use</h4>
          <p>
            You agree not to utilize our AI systems for autonomous weapons synthesis, unlawful surveillance, or deceptive impersonation.
          </p>
          <h4 className="text-sm font-bold text-white">4. Demonstration Disclaimer</h4>
          <p>
            Certain sections of this web application present simulated benchmarking data and illustrative scenario evaluations for architectural demonstration purposes.
          </p>
        </div>

        <div className="mt-8 pt-4 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-cyan-500 hover:bg-cyan-600 transition-colors"
          >
            Acknowledge & Close
          </button>
        </div>
      </div>
    </div>
  );
};
