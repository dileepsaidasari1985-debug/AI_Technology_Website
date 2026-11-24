import React, { useState } from 'react';
import {
  CreditCard,
  Check,
  X,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  HelpCircle
} from 'lucide-react';
import { PRICING_PLANS, COMPARISON_FEATURES } from '../data/nexoraData';

export const Pricing = ({ onOpenDemoRequest, onSelectPlan }) => {
  const [billingCycle, setBillingCycle] = useState('yearly'); // 'monthly' | 'yearly'
  const [showComparison, setShowComparison] = useState(false);

  const handleChoosePlan = (plan) => {
    onSelectPlan?.(plan);
    onOpenDemoRequest?.();
  };

  return (
    <section id="pricing" className="py-24 relative overflow-hidden bg-navy-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full nexora-card border border-cyan-500/30 text-xs font-semibold text-cyan-400 mb-4">
            <CreditCard className="w-3.5 h-3.5" />
            <span>TRANSPARENT VALUE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white dark:text-white tracking-tight mb-4">
            Flexible <span className="text-gradient">Pricing & Subscription</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 dark:text-slate-300 leading-relaxed">
            From individual AI researchers to global multi-cluster enterprise deployments, scale seamlessly with zero hidden charges.
          </p>

          {/* Monthly / Yearly Toggle */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <span className={`text-xs font-semibold ${billingCycle === 'monthly' ? 'text-white' : 'text-slate-400'}`}>
              Billed Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className="w-14 h-8 rounded-full bg-navy-900 border border-white/20 p-1 flex items-center transition-colors relative"
              aria-label="Toggle Billing Cycle"
            >
              <div
                className={`w-6 h-6 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-md transform transition-transform duration-300 ${
                  billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`text-xs font-semibold flex items-center gap-1.5 ${billingCycle === 'yearly' ? 'text-white' : 'text-slate-400'}`}>
              <span>Billed Yearly</span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-gradient-to-r from-emerald-500 to-cyan-500 text-white">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const price = billingCycle === 'yearly' ? plan.yearlyPrice : plan.monthlyPrice;
            return (
              <div
                key={plan.id}
                className={`rounded-3xl nexora-card p-8 flex flex-col justify-between transition-all duration-300 relative shadow-2xl ${
                  plan.popular
                    ? 'border-2 border-cyan-400 bg-gradient-to-b from-cyan-950/30 to-navy-950/90 lg:-translate-y-3 shadow-[0_0_40px_rgba(0,210,255,0.25)]'
                    : 'border border-white/10 hover:border-white/20'
                }`}
              >
                {/* Popular Pill */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 text-white text-[11px] font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(0,210,255,0.5)]">
                    {plan.badge}
                  </div>
                )}

                <div>
                  <h3 className="text-2xl font-display font-extrabold text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-slate-300 mb-6 leading-relaxed">
                    {plan.description}
                  </p>

                  {/* Price Block */}
                  <div className="flex items-baseline gap-1 mb-6 pb-6 border-b border-white/10">
                    <span className="text-4xl sm:text-5xl font-display font-extrabold text-white">
                      {typeof price === 'number' ? `$${price}` : price}
                    </span>
                    {typeof price === 'number' && (
                      <span className="text-xs text-slate-400 font-mono">
                        / user / month
                      </span>
                    )}
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-2">
                      Included Capabilities:
                    </span>
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                        <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}

                    {plan.missingFeatures?.map((miss, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-400 line-through">
                        <X className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                        <span>{miss}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => handleChoosePlan(plan)}
                  className={`w-full py-3.5 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-300 flex items-center justify-center gap-2 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 text-white shadow-[0_0_20px_rgba(0,210,255,0.4)] hover:shadow-[0_0_30px_rgba(0,210,255,0.7)] hover:scale-102'
                      : 'bg-white/10 hover:bg-white/20 text-white border border-white/10'
                  }`}
                >
                  <span>{plan.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Toggle Detailed Comparison Matrix */}
        <div className="text-center mb-6">
          <button
            onClick={() => setShowComparison(!showComparison)}
            className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 nexora-card border border-cyan-500/30 px-5 py-2.5 rounded-xl hover:border-cyan-400 transition-all"
          >
            <span>{showComparison ? 'Hide' : 'View'} Full Plan Comparison Matrix</span>
            <ArrowRight className={`w-3.5 h-3.5 transform transition-transform ${showComparison ? 'rotate-90' : ''}`} />
          </button>
        </div>

        {/* Detailed Comparison Table */}
        {showComparison && (
          <div className="rounded-3xl nexora-card border border-white/10 p-6 sm:p-8 overflow-x-auto shadow-2xl animate-fadeIn">
            <h4 className="text-lg font-bold text-white mb-4">Detailed Plan Specifications & Quotas</h4>
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-white/10 text-slate-400 font-mono">
                  <th className="pb-3 font-semibold">Feature / Metric</th>
                  <th className="pb-3 font-semibold">Starter</th>
                  <th className="pb-3 font-semibold text-cyan-400">Professional</th>
                  <th className="pb-3 font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {COMPARISON_FEATURES.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02]">
                    <td className="py-3 font-medium text-slate-200">{row.name}</td>
                    <td className="py-3 text-slate-400">{row.starter}</td>
                    <td className="py-3 text-cyan-300 font-semibold">{row.pro}</td>
                    <td className="py-3 text-white font-semibold">{row.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <p className="text-center text-[11px] font-mono text-slate-400 mt-8">
          *Illustrative demonstration pricing. No actual payment provider is linked in this evaluation preview.
        </p>
      </div>
    </section>
  );
};
