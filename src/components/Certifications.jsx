import React, { useState } from 'react';
import { 
  Award, 
  ExternalLink, 
  Eye, 
  Calendar, 
  ShieldCheck, 
  Sparkles,
  CheckCircle,
  FileCheck
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { Modal } from './common/Modal';

export const Certifications = () => {
  const { certifications } = portfolioData;
  const [activeCertModal, setActiveCertModal] = useState(null);

  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-navy-950/40">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 w-80 h-80 rounded-full bg-cyan-500/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Licenses & <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-3 rounded-full" />
          <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto mt-4">
            Professional certifications and accredited technical courses completed to reinforce industry-standard practices.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="glass-card rounded-2xl border border-white/5 dark:border-cyan-500/15 overflow-hidden flex flex-col group hover:border-cyan-400/50 hover:-translate-y-1.5 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.25)]"
            >
              {/* Image Preview Banner */}
              <div className="relative aspect-[16/10] overflow-hidden bg-navy-950">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />
                
                {/* Floating Issuer Badge */}
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md glass-card text-[11px] font-mono text-cyan-300 border border-cyan-400/30">
                  {cert.issuer}
                </span>

                <button
                  onClick={() => setActiveCertModal(cert)}
                  className="absolute bottom-3 right-3 p-1.5 rounded-lg bg-navy-950/80 text-slate-300 hover:text-cyan-400 hover:bg-navy-900 border border-white/10 transition-colors"
                  title="Enlarge preview"
                  aria-label="Enlarge certificate preview"
                >
                  <Eye className="w-4 h-4" />
                </button>
              </div>

              {/* Certificate Info */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-cyan-300 transition-colors mb-2 line-clamp-2">
                    {cert.title}
                  </h3>

                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono mb-3">
                    <Calendar className="w-3.5 h-3.5 text-purple-400" />
                    <span>Issued {cert.issueDate}</span>
                  </div>

                  {/* Skills Covered */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {cert.skillsCovered.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-md bg-white/5 text-[10px] font-mono text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions Bar */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                  <button
                    onClick={() => setActiveCertModal(cert)}
                    className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-1"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Preview</span>
                  </button>

                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-300 hover:text-white font-medium flex items-center gap-1"
                    >
                      <span>Verify</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* CERTIFICATE PREVIEW MODAL */}
      <Modal
        isOpen={Boolean(activeCertModal)}
        onClose={() => setActiveCertModal(null)}
        title={activeCertModal ? activeCertModal.title : 'Certificate Preview'}
        maxWidth="max-w-2xl"
      >
        {activeCertModal && (
          <div className="space-y-5">
            {/* Certificate Large Image */}
            <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-navy-950 border border-white/10 shadow-lg">
              <img
                src={activeCertModal.image}
                alt={activeCertModal.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Certificate Details */}
            <div className="p-4 rounded-xl glass-card border border-white/5 space-y-3">
              <div className="flex justify-between items-center text-xs sm:text-sm">
                <span className="text-slate-400">Issuing Organization:</span>
                <span className="text-white font-semibold">{activeCertModal.issuer}</span>
              </div>
              <div className="flex justify-between items-center text-xs sm:text-sm">
                <span className="text-slate-400">Date of Completion:</span>
                <span className="text-white font-mono">{activeCertModal.issueDate}</span>
              </div>
              {activeCertModal.credentialId && (
                <div className="flex justify-between items-center text-xs sm:text-sm">
                  <span className="text-slate-400">Credential ID:</span>
                  <span className="text-cyan-400 font-mono">{activeCertModal.credentialId}</span>
                </div>
              )}
            </div>

            {/* Covered Skills */}
            <div>
              <h5 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">
                Competencies Validated
              </h5>
              <div className="flex flex-wrap gap-2">
                {activeCertModal.skillsCovered.map((s, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-300 text-xs font-mono border border-cyan-500/20"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Verification Link CTA */}
            {activeCertModal.credentialUrl && (
              <div className="pt-3 border-t border-white/10 flex justify-end">
                <a
                  href={activeCertModal.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs sm:text-sm font-semibold hover:shadow-cyan-500/30 shadow-md hover:scale-105 transition-all"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Verify on Official Issuer Website</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            )}
          </div>
        )}
      </Modal>

    </section>
  );
};

