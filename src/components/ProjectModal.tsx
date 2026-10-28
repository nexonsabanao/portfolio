import React, { useEffect, useState } from 'react';
import { ProjectItem } from '../types/portfolio';
import { getProjectCategories } from '../utils/portfolioLogic';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    setActiveImageIndex(0);
    setLightboxOpen(false);
  }, [project]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (lightboxOpen) {
          setLightboxOpen(false);
        } else {
          onClose();
        }
      }
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose, lightboxOpen]);

  if (!project) return null;

  const currentGalleryItem =
    project.galleryImages && project.galleryImages.length > 0
      ? project.galleryImages[activeImageIndex]
      : null;

  const currentDisplayImage = currentGalleryItem
    ? currentGalleryItem.image
    : project.image;

  return (
    <>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-xs overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
      >
        <div
          className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl p-5 sm:p-8 space-y-6 text-slate-900 dark:text-slate-100"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Controls Header */}
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
            <div className="space-y-0.5 pr-4">
              <div className="inline-flex items-center gap-2">
                <span className="text-[11px] uppercase tracking-wider font-mono font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                  {getProjectCategories(project).join(' · ')}
                </span>
                {project.githubUrl && (
                  <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 hidden sm:inline">
                    Open Source
                  </span>
                )}
              </div>
              <h2 id="project-modal-title" className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                {project.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                {project.subtitle}
              </p>
            </div>

            <button
              onClick={onClose}
              className="px-3 py-1.5 text-xs font-semibold rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors shrink-0 cursor-pointer"
              aria-label="Close Project Details"
            >
              Close
            </button>
          </div>

          {/* Interactive Showcase / Screenshot Gallery */}
          <div className="space-y-3">
            {project.galleryImages && project.galleryImages.length > 1 && (
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
                {project.galleryImages.map((imgItem, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                      activeImageIndex === idx
                        ? 'bg-emerald-600 text-white dark:bg-emerald-500 dark:text-slate-950 shadow-xs font-semibold'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                    }`}
                  >
                    <span>{imgItem.title}</span>
                  </button>
                ))}
              </div>
            )}

            {/* Main Image Display Box with Click-to-Zoom Lightbox CTA */}
            <div className="relative group rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-inner">
              <div
                className={`w-full cursor-zoom-in flex items-center justify-center p-1 sm:p-2 bg-slate-900/5 dark:bg-slate-950/40 ${
                  currentGalleryItem?.aspect === 'mobile'
                    ? 'max-h-[500px]'
                    : currentGalleryItem?.aspect === 'tall'
                    ? 'max-h-[550px]'
                    : 'aspect-video max-h-[480px]'
                }`}
                onClick={() => setLightboxOpen(true)}
              >
                <img
                  src={currentDisplayImage}
                  alt={currentGalleryItem?.title || project.title}
                  referrerPolicy="no-referrer"
                  className={`rounded-lg object-contain ${
                    currentGalleryItem?.aspect === 'mobile'
                      ? 'max-h-[480px] w-auto shadow-md'
                      : currentGalleryItem?.aspect === 'tall'
                      ? 'max-h-[520px] w-auto'
                      : 'w-full h-full object-cover sm:object-contain'
                  }`}
                />
              </div>

              {/* Hover Badge for Zoom */}
              <button
                onClick={() => setLightboxOpen(true)}
                className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg bg-black/75 hover:bg-black/90 text-white text-xs font-medium backdrop-blur-xs transition-colors flex items-center gap-1.5 shadow-md cursor-pointer"
              >
                <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
                <span>Zoom Full Image</span>
              </button>

              {/* Caption */}
              {currentGalleryItem?.subtitle && (
                <div className="px-4 py-2 bg-slate-50 dark:bg-slate-950/90 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400">
                  <span className="font-semibold text-slate-800 dark:text-slate-200">{currentGalleryItem.title}:</span>{' '}
                  {currentGalleryItem.subtitle}
                </div>
              )}
            </div>
          </div>

          {/* Key Metric Highlights Grid */}
          {project.keyHighlights && project.keyHighlights.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {project.keyHighlights.map((hl, i) => (
                <div
                  key={i}
                  className="p-3 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800/80"
                >
                  <div className="text-[10px] uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400">
                    {hl.label}
                  </div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white mt-0.5 truncate">
                    {hl.value}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Implementation Summary */}
          <div className="space-y-2">
            <h3 className="text-xs uppercase tracking-wider font-semibold text-emerald-700 dark:text-emerald-400">
              Project Overview & Architecture
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Role Workflow Breakdown (ServEm Dual-Role) */}
          {project.roleWorkflow && project.roleWorkflow.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-xs uppercase tracking-wider font-semibold text-emerald-700 dark:text-emerald-400">
                Dual-Role Architecture Workflows:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.roleWorkflow.map((rw, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-2.5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-slate-900 dark:text-white">
                        {rw.role}
                      </span>
                      <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-500/20">
                        {rw.badge}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {rw.description}
                    </p>
                    <ul className="space-y-1 text-xs text-slate-700 dark:text-slate-300 list-disc list-inside">
                      {rw.keyFeatures.map((kf, k) => (
                        <li key={k}>{kf}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Technical Features List */}
          <div className="space-y-2">
            <h3 className="text-xs uppercase tracking-wider font-semibold text-emerald-700 dark:text-emerald-400">
              Core Technical Capabilities:
            </h3>
            <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300 list-disc list-inside">
              {project.technicalFeatures.map((feat, i) => (
                <li key={i}>{feat}</li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Tags */}
          <div className="pt-2 border-t border-slate-100 dark:border-slate-800 space-y-1.5">
            <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">
              Technologies & Frameworks:
            </div>
            <div className="flex flex-wrap gap-1.5 text-xs">
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="font-mono text-[11px] bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links & Footer */}
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-xs font-semibold rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors flex items-center gap-1.5"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  <span>Repository (GitHub)</span>
                </a>
              )}

              {project.liveUrl && project.liveUrl !== project.githubUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-xs font-semibold rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  Live Web UI
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-500 hover:text-slate-900 dark:hover:text-white cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal for Zooming high-res screenshots */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-60 bg-black/95 flex flex-col items-center justify-center p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <div className="absolute top-4 right-4 flex items-center gap-3 text-white">
            <span className="text-xs text-slate-300">Click anywhere or Esc to close</span>
            <button
              onClick={() => setLightboxOpen(false)}
              className="px-3 py-1.5 text-xs font-bold rounded-lg bg-white/20 hover:bg-white/30 text-white cursor-pointer"
            >
              ✕ Close
            </button>
          </div>

          <div
            className="max-w-[95vw] max-h-[90vh] overflow-auto flex items-center justify-center p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentDisplayImage}
              alt={currentGalleryItem?.title || project.title}
              className="max-w-full max-h-[88vh] object-contain rounded-lg shadow-2xl"
            />
          </div>

          {currentGalleryItem && (
            <div className="mt-3 text-center text-xs text-slate-200 max-w-xl">
              <span className="font-bold text-white">{currentGalleryItem.title}</span>
              {currentGalleryItem.subtitle && <span> — {currentGalleryItem.subtitle}</span>}
            </div>
          )}
        </div>
      )}
    </>
  );
};
