import React, { useState } from 'react';
import {
  Send,
  Mail,
  Phone,
  MapPin,
  Clock,
  CheckCircle2,
  AlertCircle,
  Building2,
  Sparkles,
  Copy,
  Check
} from 'lucide-react';
import { BRAND } from '../data/nexoraData';

export const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    subject: '',
    inquiryType: 'Product Inquiry',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [ticketId, setTicketId] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const inquiryTypes = [
    'Product Inquiry',
    'AI Development',
    'Business Partnership',
    'Technical Support',
    'General Inquiry'
  ];

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim() || formData.fullName.length < 2) {
      newErrors.fullName = 'Full Name is required (minimum 2 characters)';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = 'Valid corporate or personal email address required';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject line is required';
    }

    if (!formData.message.trim() || formData.message.length < 10) {
      newErrors.message = 'Please provide message details (minimum 10 characters)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate realistic asynchronous backend API dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmissionSuccess(true);
      const generatedTicket = `NEX-${Math.floor(10000 + Math.random() * 90000)}`;
      setTicketId(generatedTicket);
    }, 1200);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(BRAND.contactEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full nexora-card border border-cyan-500/30 text-xs font-semibold text-cyan-400 mb-4">
            <Mail className="w-3.5 h-3.5" />
            <span>GLOBAL ENGAGEMENT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white dark:text-white tracking-tight mb-4">
            Connect With Our <span className="text-gradient">AI Solutions Team</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 dark:text-slate-300 leading-relaxed">
            Whether you require custom foundation model training, sovereign on-premise installation, or enterprise API licensing, our engineers are ready to assist.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact Information & Global Nodes */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="p-8 rounded-3xl nexora-card border border-white/10 shadow-xl">
              <h3 className="text-xl font-display font-bold text-white mb-6">
                Corporate Headquarters & Global Nodes
              </h3>

              <div className="space-y-6">
                {/* Email Item */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-mono text-slate-400">Official Inquiries</div>
                    <div className="text-sm font-semibold text-white flex items-center gap-2 mt-0.5">
                      <span>{BRAND.contactEmail}</span>
                      <button
                        onClick={handleCopyEmail}
                        className="text-cyan-400 hover:text-cyan-300 transition-colors p-1"
                        title="Copy email"
                      >
                        {copiedEmail ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Telephone Item */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400">Direct Telephone</div>
                    <div className="text-sm font-semibold text-white mt-0.5">{BRAND.phone}</div>
                    <span className="text-[11px] text-slate-400">Mon - Fri: 8:00 AM - 6:00 PM PST</span>
                  </div>
                </div>

                {/* Address Item */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400">Global Innovation Center</div>
                    <div className="text-sm font-semibold text-white mt-0.5">{BRAND.address}</div>
                  </div>
                </div>
              </div>

              {/* Global Cloud Regions */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-3">
                  Inference Clusters & Regional Nodes:
                </span>
                <div className="grid grid-cols-2 gap-2 text-xs font-mono text-slate-300">
                  <span className="p-2 rounded-lg bg-white/5 border border-white/5 flex items-center gap-1.5">
                    🇺🇸 US-West (San Francisco)
                  </span>
                  <span className="p-2 rounded-lg bg-white/5 border border-white/5 flex items-center gap-1.5">
                    🇬🇧 EU-West (London)
                  </span>
                  <span className="p-2 rounded-lg bg-white/5 border border-white/5 flex items-center gap-1.5">
                    🇯🇵 AP-North (Tokyo)
                  </span>
                  <span className="p-2 rounded-lg bg-white/5 border border-white/5 flex items-center gap-1.5">
                    🇸🇬 AP-South (Singapore)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl nexora-card border border-white/15 shadow-2xl relative">
              {submissionSuccess ? (
                <div className="text-center py-12 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white mb-2">
                    Inquiry Transmitted Successfully
                  </h3>
                  <p className="text-xs font-mono text-cyan-400 mb-4">
                    Reference ID: #{ticketId}
                  </p>
                  <p className="text-sm text-slate-300 max-w-md mx-auto mb-6 leading-relaxed">
                    Thank you, {formData.fullName}. Our AI Solutions Engineering team has received your request and will follow up with technical documentation within 1 business day.
                  </p>
                  <p className="text-[11px] font-mono text-slate-400 mb-6">
                    *Client simulated dispatch confirmed. No external backend required for this demonstration.
                  </p>
                  <button
                    onClick={() => {
                      setSubmissionSuccess(false);
                      setFormData({
                        fullName: '',
                        email: '',
                        company: '',
                        subject: '',
                        inquiryType: 'Product Inquiry',
                        message: '',
                      });
                    }}
                    className="px-6 py-2.5 rounded-xl text-xs font-semibold text-white bg-cyan-500 hover:bg-cyan-600 transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">
                        Full Name <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Dr. Jordan Hayes"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl nexora-card border text-xs text-white placeholder-slate-400 focus:outline-none transition-colors ${
                          errors.fullName ? 'border-rose-500' : 'border-white/10 focus:border-cyan-400'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">
                        Corporate Email <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="jordan@enterprise.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl nexora-card border text-xs text-white placeholder-slate-400 focus:outline-none transition-colors ${
                          errors.email ? 'border-rose-500' : 'border-white/10 focus:border-cyan-400'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Company Name */}
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        placeholder="Global Technologies Inc."
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl nexora-card border border-white/10 focus:border-cyan-400 text-xs text-white placeholder-slate-400 focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Inquiry Type */}
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">
                        Inquiry Category
                      </label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl nexora-card border border-white/10 focus:border-cyan-400 text-xs text-white focus:outline-none transition-colors bg-navy-950"
                      >
                        {inquiryTypes.map((type) => (
                          <option key={type} value={type} className="bg-navy-950 text-white">
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Subject <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Enterprise RAG pipeline fine-tuning & pricing inquiry"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl nexora-card border text-xs text-white placeholder-slate-400 focus:outline-none transition-colors ${
                        errors.subject ? 'border-rose-500' : 'border-white/10 focus:border-cyan-400'
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Message & Technical Requirements <span className="text-cyan-400">*</span>
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Describe your current system volume, model requirements, latency targets, and compliance requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl nexora-card border text-xs text-white placeholder-slate-400 focus:outline-none transition-colors resize-none ${
                        errors.message ? 'border-rose-500' : 'border-white/10 focus:border-cyan-400'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 shadow-[0_0_20px_rgba(0,210,255,0.4)] hover:shadow-[0_0_30px_rgba(0,210,255,0.7)] hover:scale-102 active:scale-98 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Transmitting Inquiry via Secure TLS...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Enterprise Inquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-[10px] font-mono text-slate-400">
                    *Client simulated dispatch for demonstration. Data is verified locally with zero external network leakage.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
