import React from 'react';
import { 
  Download, 
  Printer, 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Github, 
  Linkedin, 
  GraduationCap, 
  Briefcase, 
  Code, 
  Award,
  Sparkles
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { Modal } from './common/Modal';
import { useToast } from './common/Toast';

export const ResumeModal = ({ isOpen, onClose }) => {
  const { personalInfo, resume, education, projects, certifications, socialLinks } = portfolioData;
  const { showToast } = useToast();

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // If the student has a physical PDF in public/resume.pdf, it downloads,
    // otherwise trigger print dialog to Save as PDF!
    showToast('Opening print dialog: select "Save as PDF" to download', 'info');
    setTimeout(() => {
      window.print();
    }, 400);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Interactive Digital Resume"
      maxWidth="max-w-4xl"
    >
      <div className="space-y-6">
        
        {/* Top Control Bar (Download & Print Actions) */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-xl glass-card border border-white/5 no-print">
          <div className="text-xs text-slate-300">
            Formatted for professional software engineering & internship applications.
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass-card text-xs font-medium text-slate-200 hover:text-white hover:border-cyan-400 transition-colors"
            >
              <Printer className="w-3.5 h-3.5 text-cyan-400" />
              <span>Print</span>
            </button>
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs font-semibold shadow-md hover:scale-105 transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>
          </div>
        </div>

        {/* Printable Resume Sheet Container */}
        <div
          id="resume-printable"
          className="bg-white text-slate-900 dark:bg-navy-950 dark:text-slate-100 p-6 sm:p-10 rounded-2xl border border-slate-200 dark:border-white/10 shadow-2xl transition-colors font-sans"
        >
          {/* Header */}
          <div className="text-center pb-6 border-b border-slate-300 dark:border-white/10">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white uppercase mb-1">
              {personalInfo.fullName}
            </h1>
            <p className="text-xs sm:text-sm font-semibold text-cyan-600 dark:text-cyan-400 tracking-wide mb-3">
              {personalInfo.title}
            </p>

            {/* Contact Line */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 text-xs text-slate-600 dark:text-slate-300">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-cyan-500" />
                {personalInfo.location}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-cyan-500" />
                {personalInfo.email}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-cyan-500" />
                {personalInfo.phone}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Linkedin className="w-3.5 h-3.5 text-cyan-500" />
                LinkedIn
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Github className="w-3.5 h-3.5 text-cyan-500" />
                GitHub
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="py-5 border-b border-slate-300 dark:border-white/10">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-2">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              {resume.summary}
            </p>
          </div>

          {/* Technical Skills Summary */}
          <div className="py-5 border-b border-slate-300 dark:border-white/10">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-3">
              Technical Core Competencies
            </h2>
            <div className="space-y-1.5 text-xs sm:text-sm">
              <div>
                <strong className="text-slate-900 dark:text-white">Languages: </strong>
                <span className="text-slate-700 dark:text-slate-300">{resume.skillsSummary.languages}</span>
              </div>
              <div>
                <strong className="text-slate-900 dark:text-white">Frameworks & Libraries: </strong>
                <span className="text-slate-700 dark:text-slate-300">{resume.skillsSummary.frameworks}</span>
              </div>
              <div>
                <strong className="text-slate-900 dark:text-white">Databases & Cloud: </strong>
                <span className="text-slate-700 dark:text-slate-300">{resume.skillsSummary.databases}</span>
              </div>
              <div>
                <strong className="text-slate-900 dark:text-white">Developer Tools: </strong>
                <span className="text-slate-700 dark:text-slate-300">{resume.skillsSummary.tools}</span>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="py-5 border-b border-slate-300 dark:border-white/10">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-3">
              Education
            </h2>
            {education.map((edu) => (
              <div key={edu.id} className="mb-4 last:mb-0">
                <div className="flex flex-wrap justify-between items-baseline mb-1">
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                    {edu.institution}
                  </h3>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                    {edu.duration}
                  </span>
                </div>
                <div className="flex flex-wrap justify-between items-baseline text-xs text-slate-700 dark:text-slate-300 mb-1.5">
                  <span className="italic">{edu.degree} ({edu.department})</span>
                  <span className="font-semibold text-cyan-600 dark:text-cyan-400">GPA: {edu.gpa}</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-xs text-slate-600 dark:text-slate-400">
                  {edu.keyAccomplishments.slice(0, 2).map((acc, idx) => (
                    <li key={idx}>{acc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Experience / Leadership */}
          <div className="py-5 border-b border-slate-300 dark:border-white/10">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-3">
              Experience & Campus Leadership
            </h2>
            {resume.experiences.map((exp, idx) => (
              <div key={idx} className="mb-4 last:mb-0">
                <div className="flex flex-wrap justify-between items-baseline mb-1">
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                    {exp.role} — <span className="font-normal">{exp.company}</span>
                  </h3>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                    {exp.period}
                  </span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-xs text-slate-600 dark:text-slate-300">
                  {exp.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Selected Academic Projects */}
          <div className="py-5 border-b border-slate-300 dark:border-white/10">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-3">
              Selected Technical Projects
            </h2>
            <div className="space-y-3">
              {projects.slice(0, 3).map((p) => (
                <div key={p.id}>
                  <div className="flex flex-wrap justify-between items-baseline mb-1">
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                      {p.title}
                    </h3>
                    <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                      {p.duration || 'Capstone'}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mb-1">
                    {p.description}
                  </p>
                  <p className="text-[11px] text-cyan-700 dark:text-cyan-400 font-mono">
                    <strong>Tech:</strong> {p.technologies.join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="pt-5">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-2">
              Certifications & Credentials
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 dark:text-slate-300">
              {certifications.map((c) => (
                <div key={c.id}>
                  <strong>• {c.title}</strong> — {c.issuer} ({c.issueDate})
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </Modal>
  );
};

