import React, { useState } from 'react';
import { technicalSkills } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'programming', label: 'Programming' },
    { id: 'mobile_cloud', label: 'Mobile & Cloud' },
    { id: 'hardware_iot', label: 'Hardware & IoT' },
    { id: 'design_tools', label: 'Design & Media' },
    { id: 'office_data', label: 'Office & Data' },
  ];

  const filteredSkills = technicalSkills.filter((skill) =>
    activeCategory === 'all' ? true : skill.category === activeCategory
  );

  return (
    <section
      id="skills"
      className="py-16 md:py-24 border-t border-slate-200/80 dark:border-slate-800/80"
      aria-label="Technical Skills"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1">
            <div className="text-xs uppercase tracking-widest font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
              Technical Proficiencies
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Skills & Toolkit
            </h2>
          </div>

          {/* Clean text filter buttons */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg font-medium transition-colors whitespace-nowrap cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-emerald-600 text-white dark:bg-emerald-500 dark:text-slate-950'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Python Highlight Banner */}
        <div className="p-5 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300">
              Primary Language Specialization
            </div>
            <div className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
              Python Development & Scripting
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 max-w-2xl">
              High proficiency in Python for algorithmic problem solving, automated workflow scripts, backend data management, and API integrations.
            </p>
          </div>
          <span className="text-xs font-mono font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-900/60 px-3 py-1 rounded-full shrink-0">
            Intermediate
          </span>
        </div>

        {/* Clean Skills List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/40 transition-colors flex flex-col justify-between space-y-2"
            >
              <div className="flex items-baseline justify-between gap-2">
                <span className="text-sm font-bold text-slate-900 dark:text-white">
                  {skill.name}
                </span>
                <span className="text-xs font-mono text-emerald-700 dark:text-emerald-400 font-semibold">
                  {skill.level}
                </span>
              </div>

              {skill.highlightText && (
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {skill.highlightText}
                </p>
              )}

              <div className="text-[11px] text-slate-400 dark:text-slate-500 flex flex-wrap gap-x-2">
                {skill.tags.map((tag, i) => (
                  <span key={tag}>
                    {i > 0 && <span className="mr-2">·</span>}
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
