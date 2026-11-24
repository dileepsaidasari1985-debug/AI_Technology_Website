import React from 'react';
import {
  X,
  Check,
  Cpu,
  ArrowRight,
  ShieldCheck,
  Terminal,
  Layers,
  Copy
} from 'lucide-react';
import { useToast } from '../common/Toast';

export const ProductDetailModal = ({ product, isOpen, onClose, onLaunchPlayground }) => {
  const { showToast } = useToast();

  if (!isOpen || !product) return null;

  const sampleCurl = `curl -X POST "https://api.nexora.ai/v1/inference" \\
  -H "Authorization: Bearer $NEXORA_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "nexora-${product.id}-v3",
    "prompt": "Analyze enterprise telemetry stream",
    "temperature": 0.7,
    "max_tokens": 1024
  }'`;

  const copyCurl = () => {
    navigator.clipboard.writeText(sampleCurl);
    showToast('API cURL snippet copied', 'success');
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

        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-xs font-mono text-cyan-400 uppercase font-bold">
            {product.badge} MODEL
          </span>
          <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5" />
            Zero-Retention Verified
          </span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white mb-1">
          {product.name}
        </h3>
        <p className="text-xs font-mono text-cyan-400 mb-6">{product.tagline}</p>

        <p className="text-sm text-slate-300 leading-relaxed mb-6">
          {product.shortDesc}
        </p>

        {/* Architecture Details */}
        <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 mb-6">
          <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1">
            Neural Architecture Specification
          </div>
          <p className="text-xs text-slate-200 font-medium leading-relaxed">
            {product.architecture}
          </p>
        </div>

        {/* Features Checklist */}
        <div className="mb-6">
          <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
            Key Capabilities & Specs:
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {product.features.map((feat, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-slate-200">
                <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sample API cURL Request */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
              Sample REST API Call:
            </span>
            <button
              onClick={copyCurl}
              className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
            >
              <Copy className="w-3.5 h-3.5" />
              <span>Copy cURL</span>
            </button>
          </div>
          <pre className="p-4 rounded-xl bg-black/40 border border-white/10 font-mono text-[11px] text-cyan-300 overflow-x-auto">
            {sampleCurl}
          </pre>
        </div>

        {/* Action Button */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between">
          <button
            onClick={onClose}
            className="text-xs font-semibold text-slate-400 hover:text-white"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              onLaunchPlayground?.(product.demoToolId);
            }}
            className="px-6 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 shadow-[0_0_15px_rgba(0,210,255,0.3)] hover:scale-105 transition-all flex items-center gap-2"
          >
            <span>Launch in Interactive Playground</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
