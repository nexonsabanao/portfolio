import React, { useState } from 'react';
import { motion } from 'motion/react';
import { projects } from '../data/portfolioData';
import { ProjectItem } from '../types/portfolio';
import { filterProjects, getProjectCategories } from '../utils/portfolioLogic';
import { ProjectModal } from './ProjectModal';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'Web & Full-Stack', label: 'Web & Full-Stack' },
    { id: 'Android & Mobile', label: 'Android & Mobile' },
    { id: 'IoT & Embedded Systems', label: 'IoT & Hardware' },
  ];

  const displayedProjects = filterProjects(projects, activeCategory);

  return (
    <section
      id="projects"
      className="py-16 md:py-24 border-t border-slate-200/80 dark:border-slate-800/80"
      aria-label="Featured Projects"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
        {/* Header & Filter Tabs */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1">
            <div className="text-xs uppercase tracking-widest font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
              Portfolio Deliverables & Codebases
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Featured Projects
            </h2>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg font-medium transition-colors whitespace-nowrap cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-emerald-600 text-white dark:bg-emerald-500 dark:text-slate-950 font-semibold shadow-xs'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((proj) => (
            <motion.div
              key={proj.id}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="group relative rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/60 dark:hover:border-emerald-500/60 transition-all shadow-xs hover:shadow-xl hover:shadow-emerald-950/10 overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Image & Hover Overlay */}
                <div
                  className="relative aspect-video w-full overflow-hidden bg-slate-100 dark:bg-slate-950 cursor-pointer"
                  onClick={() => setSelectedProject(proj)}
                >
                  <img
                    src={proj.image}
                    alt={proj.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Framer Motion Tech Stack Reveal Overlay on Hover */}
                  <div className="absolute inset-0 bg-slate-950/85 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-center p-5 text-white space-y-2.5">
                    <div className="text-[11px] uppercase tracking-wider font-semibold text-emerald-400">
                      Tech Stack & Tools
                    </div>
                    <div className="flex flex-wrap gap-1 text-xs">
                      {proj.tags.slice(0, 6).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-200 border border-emerald-500/30 font-mono text-[10px]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="pt-2 text-[11px] text-slate-300 font-medium underline underline-offset-4 flex items-center gap-1">
                      <span>Click to view project details & gallery</span>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 space-y-2.5">
                  <div className="text-[11px] font-semibold text-emerald-700 dark:text-emerald-400 uppercase tracking-wide">
                    {getProjectCategories(proj).join(' · ')}
                  </div>

                  <h3
                    onClick={() => setSelectedProject(proj)}
                    className="text-base font-bold text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 cursor-pointer transition-colors leading-snug"
                  >
                    {proj.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                    {proj.summary}
                  </p>
                </div>
              </div>

              {/* Card Footer: Simple Actions */}
              <div className="p-5 pt-0 space-y-3">
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                  <button
                    onClick={() => setSelectedProject(proj)}
                    className="font-semibold text-emerald-600 dark:text-emerald-400 hover:underline cursor-pointer flex items-center gap-1"
                  >
                    <span>Details & Gallery</span>
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>

                  <div className="flex items-center gap-2">
                    {proj.githubUrl && (
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-medium hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors flex items-center gap-1"
                        title="View on GitHub"
                      >
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                        </svg>
                        <span>GitHub</span>
                      </a>
                    )}

                    {proj.liveUrl && proj.liveUrl !== proj.githubUrl && (
                      <a
                        href={proj.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2.5 py-1 rounded-md border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-xs"
                      >
                        Live UI
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
