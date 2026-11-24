import React from 'react';
import {
  X,
  ShieldCheck,
  Lock,
  Eye,
  Scale,
  UserCheck,
  AlertTriangle,
  FileCheck
} from 'lucide-react';

export const TrustCenterModal = ({ isOpen, onClose }) => {
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

        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-400">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-display font-bold text-white">
              Privacy, Security & Trust Center
            </h3>
            <p className="text-xs text-slate-400">
              Verifiable Governance, Data Sovereignty & Model Limitations
            </p>
          </div>
        </div>

        <div className="space-y-6 text-xs sm:text-sm text-slate-300 leading-relaxed">
          {/* Section 1: Data Sovereignty */}
          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
            <h4 className="text-sm font-bold text-white flex items-center gap-2 mb-2">
              <Lock className="w-4 h-4 text-cyan-400" />
              1. Zero-Retention Data Policy
            </h4>
            <p>
              Under our enterprise terms, customer inputs, inference logs, and proprietary embeddings are NEVER retained to train public foundation weights. Data resides exclusively in ephemeral memory during execution and is purged immediately upon socket close.
            </p>
          </div>

          {/* Section 2: Responsible AI & Fairness */}
          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
            <h4 className="text-sm font-bold text-white flex items-center gap-2 mb-2">
              <Scale className="w-4 h-4 text-purple-400" />
              2. Algorithmic Fairness & Bias Mitigation
            </h4>
            <p>
              We conduct continuous automated red-teaming across adversarial vectors to detect and suppress demographic skew. Invariant checks ensure compliance with EU AI Act High-Risk classifications.
            </p>
          </div>

          {/* Section 3: AI Limitations & Transparency */}
          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
            <h4 className="text-sm font-bold text-white flex items-center gap-2 mb-2">
              <AlertTriangle className="w-4 h-4 text-amber-400" />
              3. AI Limitations & Transparency
            </h4>
            <p>
              Neural networks generate probabilistic forecasts and should not operate as single-point-of-failure decision authorities in life-critical medical or legal domains without human-in-the-loop oversight.
            </p>
          </div>

          {/* Section 4: Compliance Audits */}
          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
            <h4 className="text-sm font-bold text-white flex items-center gap-2 mb-2">
              <FileCheck className="w-4 h-4 text-emerald-400" />
              4. Industry Certifications
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono text-slate-200 mt-2">
              <span>✓ SOC2 Type II Certified</span>
              <span>✓ HIPAA Compliance Ready</span>
              <span>✓ ISO 27001 Validated</span>
              <span>✓ GDPR Article 28 DPA</span>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl text-xs font-semibold text-white bg-cyan-500 hover:bg-cyan-600 transition-colors"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};
