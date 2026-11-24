import React, { useState, useMemo } from 'react';
import { 
  FolderGit2, 
  Search, 
  ExternalLink, 
  Github, 
  Sparkles, 
  Layers, 
  X, 
  ChevronRight, 
  CheckCircle,
  Clock,
  User,
  AlertCircle
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { Modal } from './common/Modal';

export const Projects = () => {
  const { projects, projectCategories } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeProjectModal, setActiveProjectModal] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Filtered & Searched Projects
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        selectedCategory === 'all' || project.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        project.title.toLowerCase().includes(q) ||
        project.description.toLowerCase().includes(q) ||
        project.technologies.some((t) => t.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [projects, selectedCategory, searchQuery]);

  const handleOpenCaseStudy = (project) => {
    setActiveProjectModal(project);
    setSelectedImageIndex(0);
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full bg-cyan-500/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Portfolio Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Projects <span className="text-gradient">Showcase</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-3 rounded-full" />
          <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto mt-4">
            Hands-on software projects spanning full-stack web applications, frontend UI dashboards, and student tools.
          </p>
        </div>

        {/* Controls Bar: Category Filters & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {projectCategories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                    isSelected
                      ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-[0_0_15px_rgba(56,189,248,0.35)] scale-105'
                      : 'glass-card text-slate-300 hover:text-white hover:border-cyan-400/40'
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>

          {/* Search Input Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search projects or stack..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-9 py-2 rounded-xl glass-card border border-white/10 dark:border-cyan-500/20 text-xs sm:text-sm text-slate-200 placeholder-slate-400 focus:outline-none focus:border-cyan-400 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                title="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

        </div>

        {/* Projects Cards Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 glass-card rounded-2xl border border-white/5">
            <AlertCircle className="w-10 h-10 text-cyan-400 mx-auto mb-3" />
            <h4 className="text-lg font-bold text-white mb-1">No Projects Found</h4>
            <p className="text-slate-400 text-sm max-w-sm mx-auto mb-4">
              No projects matched your search criteria "{searchQuery}". Try searching for another keyword or reset the filter.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-xl bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 text-xs font-semibold hover:bg-cyan-500/30 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="glass-card rounded-2xl border border-white/5 dark:border-cyan-500/15 overflow-hidden flex flex-col group hover:border-cyan-400/50 hover:-translate-y-2 transition-all duration-300 shadow-[0_4px_25px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_35px_rgba(56,189,248,0.15)]"
              >
                {/* Project Image Thumbnail */}
                <div className="relative aspect-[16/10] overflow-hidden bg-navy-950">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent" />

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-[11px] font-bold tracking-wide flex items-center gap-1.5 shadow-md">
                      <Sparkles className="w-3 h-3 text-yellow-300" />
                      <span>Featured</span>
                    </div>
                  )}

                  {/* Category Pill */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-lg glass-card text-cyan-300 text-[11px] font-mono border border-cyan-400/30">
                    {project.category.toUpperCase()}
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-2 line-clamp-1">
                    {project.title}
                  </h3>

                  <p className="text-slate-300 dark:text-slate-400 text-xs sm:text-sm line-clamp-2 mb-4 leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-md bg-white/5 border border-white/5 text-[11px] font-mono text-cyan-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-0.5 rounded-md bg-white/5 border border-white/5 text-[11px] font-mono text-slate-400">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Action Links Bar */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <button
                      onClick={() => handleOpenCaseStudy(project)}
                      className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 group/btn"
                    >
                      <span>View Case Study</span>
                      <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                    </button>

                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg glass-card text-slate-300 hover:text-white hover:border-cyan-400/40 transition-colors"
                          title="View Source Code"
                          aria-label="GitHub Repository"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg glass-card text-slate-300 hover:text-cyan-400 hover:border-cyan-400/40 transition-colors"
                          title="Live Demo"
                          aria-label="Live Demo"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* DETAILED PROJECT CASE STUDY POPUP MODAL */}
      <Modal
        isOpen={Boolean(activeProjectModal)}
        onClose={() => setActiveProjectModal(null)}
        title={activeProjectModal ? activeProjectModal.title : 'Project Details'}
        maxWidth="max-w-4xl"
      >
        {activeProjectModal && (
          <div className="space-y-6">
            
            {/* Image Gallery with Thumbnails */}
            <div>
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-navy-950 border border-white/10 mb-3">
                <img
                  src={
                    activeProjectModal.images && activeProjectModal.images[selectedImageIndex]
                      ? activeProjectModal.images[selectedImageIndex]
                      : activeProjectModal.thumbnail
                  }
                  alt={activeProjectModal.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Thumbnail Selector */}
              {activeProjectModal.images && activeProjectModal.images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-1">
                  {activeProjectModal.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImageIndex(idx)}
                      className={`relative w-20 h-14 rounded-lg overflow-hidden border-2 transition-all shrink-0 ${
                        selectedImageIndex === idx
                          ? 'border-cyan-400 scale-105 shadow-md'
                          : 'border-white/10 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt={`Screenshot ${idx + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Quick Metadata Bar */}
            <div className="flex flex-wrap gap-4 py-3 px-4 rounded-xl glass-card border border-white/5 text-xs">
              <div className="flex items-center gap-1.5 text-slate-300">
                <User className="w-4 h-4 text-cyan-400" />
                <span>Role: <strong className="text-white">{activeProjectModal.role}</strong></span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-300">
                <Clock className="w-4 h-4 text-purple-400" />
                <span>Timeline: <strong className="text-white">{activeProjectModal.duration}</strong></span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-300">
                <Layers className="w-4 h-4 text-emerald-400" />
                <span>Category: <strong className="text-white uppercase">{activeProjectModal.category}</strong></span>
              </div>
            </div>

            {/* Detailed Description */}
            <div>
              <h4 className="text-sm font-mono uppercase tracking-wider text-cyan-400 mb-2 font-bold">
                Project Overview
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                {activeProjectModal.description}
              </p>
            </div>

            {/* Challenge & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20">
                <h5 className="text-xs font-mono font-bold text-rose-300 uppercase tracking-wider mb-2">
                  The Engineering Challenge
                </h5>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  {activeProjectModal.challenge}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                <h5 className="text-xs font-mono font-bold text-emerald-300 uppercase tracking-wider mb-2">
                  The Implemented Solution
                </h5>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  {activeProjectModal.solution}
                </p>
              </div>
            </div>

            {/* Key Features List */}
            {activeProjectModal.keyFeatures && (
              <div>
                <h4 className="text-sm font-mono uppercase tracking-wider text-cyan-400 mb-2.5 font-bold">
                  Key Architectural Features
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeProjectModal.keyFeatures.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technologies Badges */}
            <div>
              <h4 className="text-sm font-mono uppercase tracking-wider text-slate-400 mb-2.5 font-bold">
                Technologies & Tools Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeProjectModal.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-lg bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 text-xs font-mono font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Bottom Action CTAs */}
            <div className="flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-white/10">
              {activeProjectModal.githubUrl && (
                <a
                  href={activeProjectModal.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl glass-card text-slate-200 hover:text-white border-white/10 hover:border-cyan-400 text-xs sm:text-sm font-medium transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>View Repository</span>
                </a>
              )}
              {activeProjectModal.liveUrl && (
                <a
                  href={activeProjectModal.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs sm:text-sm font-semibold shadow-lg hover:shadow-cyan-500/30 transition-all hover:scale-105"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Launch Live Demo</span>
                </a>
              )}
            </div>

          </div>
        )}
      </Modal>

    </section>
  );
};

