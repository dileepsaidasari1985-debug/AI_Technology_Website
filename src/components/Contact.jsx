import React, { useState } from 'react';
import { 
  Send, 
  Mail, 
  Phone, 
  MapPin, 
  Copy, 
  Check, 
  Github, 
  Linkedin, 
  Instagram, 
  Twitter, 
  Clock, 
  AlertCircle, 
  CheckCircle2, 
  Loader2,
  Sparkles,
  MessageSquare
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';
import { useToast } from './common/Toast';

export const Contact = () => {
  const { personalInfo, socialLinks } = portfolioData;
  const { showToast } = useToast();

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedStatus, setSubmittedStatus] = useState(null); // 'success' | 'error' | null

  // Copy email utility
  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    showToast('Email address copied to clipboard!', 'success');
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  // Validate form fields
  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = 'Please provide a valid email address';
      }
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = 'Subject must be at least 3 characters';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message cannot be empty';
    } else if (formData.message.trim().length < 15) {
      newErrors.message = 'Please provide at least 15 characters so I can understand your inquiry';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      showToast('Please fix the validation errors in the form.', 'error');
      return;
    }

    setIsSubmitting(true);
    setSubmittedStatus(null);

    // Simulate backend submission process with a delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedStatus('success');
      showToast('Message submitted successfully in demonstration mode!', 'success');
      
      // Trigger subtle celebration confetti
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.8 },
        });
      } catch (err) {
        // Safe fallback
      }

      // Reset form
      setFormData({
        fullName: '',
        email: '',
        subject: '',
        message: '',
      });
      setErrors({});
    }, 1200);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field-specific error as user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-navy-950/60">
      {/* Background glow */}
      <div className="absolute bottom-10 left-1/3 w-96 h-96 rounded-full bg-cyan-500/10 blur-[130px] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full bg-purple-600/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Let's Connect</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-3 rounded-full" />
          <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto mt-4">
            Interested in discussing an internship, project collaboration, or just want to say hi? Feel free to reach out anytime!
          </p>
        </div>

        {/* Content Grid: Contact Details & Validated Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Direct Info Cards & Availability (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Info Card */}
            <div className="glass-card p-6 sm:p-7 rounded-2xl border border-white/5 dark:border-cyan-500/20 shadow-xl space-y-6">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <span>Contact Information</span>
              </h3>

              {/* Email Item with 1-click Copy */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-cyan-400/30 transition-colors flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/15 flex items-center justify-center text-cyan-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-xs text-slate-400 font-mono">Email Address</div>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-xs sm:text-sm font-semibold text-white hover:text-cyan-300 transition-colors truncate block"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg glass-card text-slate-300 hover:text-cyan-400 hover:border-cyan-400/40 transition-colors shrink-0"
                  title="Copy email"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Item */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/15 flex items-center justify-center text-purple-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">Phone Number</div>
                  <span className="text-xs sm:text-sm font-semibold text-white">
                    {personalInfo.phone}
                  </span>
                </div>
              </div>

              {/* Location & Timezone Item */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/15 flex items-center justify-center text-emerald-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">Location & Timezone</div>
                  <span className="text-xs sm:text-sm font-semibold text-white">
                    {personalInfo.location} ({personalInfo.timezone})
                  </span>
                </div>
              </div>

              {/* Social Channels Row */}
              <div className="pt-2">
                <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-3">
                  Online Profiles
                </h4>
                <div className="flex gap-2.5">
                  {socialLinks.github && (
                    <a
                      href={socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl glass-card text-slate-300 hover:text-cyan-400 hover:border-cyan-400/50 hover:scale-105 transition-all"
                      title="GitHub"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {socialLinks.linkedin && (
                    <a
                      href={socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl glass-card text-slate-300 hover:text-cyan-400 hover:border-cyan-400/50 hover:scale-105 transition-all"
                      title="LinkedIn"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                  {socialLinks.instagram && (
                    <a
                      href={socialLinks.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl glass-card text-slate-300 hover:text-purple-400 hover:border-purple-400/50 hover:scale-105 transition-all"
                      title="Instagram"
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                  )}
                  {socialLinks.twitter && (
                    <a
                      href={socialLinks.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl glass-card text-slate-300 hover:text-cyan-400 hover:border-cyan-400/50 hover:scale-105 transition-all"
                      title="Twitter"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

            </div>

            {/* Quick Response Time Callout */}
            <div className="p-4 rounded-xl glass-card border border-white/5 flex items-center gap-3">
              <Clock className="w-5 h-5 text-cyan-400 shrink-0" />
              <p className="text-xs text-slate-300 leading-relaxed">
                <strong className="text-white">Fast Response Guaranteed:</strong> I typically reply to all student inquiries, recruiters, and collaborators within 24 hours.
              </p>
            </div>

          </div>

          {/* Right Column: Interactive Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-white/5 dark:border-cyan-500/20 shadow-xl relative">
              
              <h3 className="text-xl font-bold text-white mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Fill in the details below and I will get back to you promptly.
              </p>

              {/* Status Alert Banner */}
              {submittedStatus === 'success' && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-400 mt-0.5" />
                  <div>
                    <strong className="block font-bold">Message Sent Successfully!</strong>
                    <span>Thank you for reaching out. In live production, this form connects to EmailJS or your preferred serverless API.</span>
                  </div>
                </div>
              )}

              {/* Form Element */}
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                
                {/* Row 1: Full Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-mono font-semibold text-slate-300 mb-1.5">
                      Full Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Jordan Smith"
                      className={`w-full px-4 py-2.5 rounded-xl glass-card border text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.fullName ? 'border-rose-500/80' : 'border-white/10 focus:border-cyan-400'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-rose-400 text-[11px] mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  {/* Email Address */}
                  <div>
                    <label className="block text-xs font-mono font-semibold text-slate-300 mb-1.5">
                      Email Address <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. jordan@example.com"
                      className={`w-full px-4 py-2.5 rounded-xl glass-card border text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.email ? 'border-rose-500/80' : 'border-white/10 focus:border-cyan-400'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-rose-400 text-[11px] mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Row 2: Subject */}
                <div>
                  <label className="block text-xs font-mono font-semibold text-slate-300 mb-1.5">
                    Subject <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Internship Inquiry / Project Discussion"
                    className={`w-full px-4 py-2.5 rounded-xl glass-card border text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none transition-colors ${
                      errors.subject ? 'border-rose-500/80' : 'border-white/10 focus:border-cyan-400'
                    }`}
                  />
                  {errors.subject && (
                    <p className="text-rose-400 text-[11px] mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.subject}</span>
                    </p>
                  )}
                </div>

                {/* Row 3: Message */}
                <div>
                  <label className="block text-xs font-mono font-semibold text-slate-300 mb-1.5">
                    Your Message <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    className={`w-full px-4 py-3 rounded-xl glass-card border text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none transition-colors resize-none ${
                      errors.message ? 'border-rose-500/80' : 'border-white/10 focus:border-cyan-400'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-rose-400 text-[11px] mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit Button with Loading Spinner */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 text-white font-semibold text-xs sm:text-sm shadow-[0_4px_25px_rgba(56,189,248,0.35)] hover:shadow-[0_4px_30px_rgba(56,189,248,0.55)] hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-60 disabled:pointer-events-none"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </div>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

