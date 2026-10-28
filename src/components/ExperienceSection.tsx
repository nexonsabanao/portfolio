import React from 'react';
import { workExperience } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section
      id="experience"
      className="py-16 md:py-24 border-t border-slate-200/80 dark:border-slate-800/80"
      aria-label="Work Experience"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-8">
        {/* Header */}
        <div className="space-y-1">
          <div className="text-xs uppercase tracking-widest font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
            Professional History
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Work Experience
          </h2>
        </div>

        {/* Work Experience Items */}
        <div className="space-y-6">
          {workExperience.map((job) => (
            <div
              key={job.id}
              className="p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 shadow-xs"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-slate-100 dark:border-slate-800 pb-3">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {job.role}
                  </h3>
                  <div className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                    {job.company}
                  </div>
                </div>

                <div className="text-xs font-mono text-slate-500 dark:text-slate-400">
                  {job.startDate} – {job.endDate} · {job.location}
                </div>
              </div>

              {/* Responsibilities list */}
              <div className="space-y-2">
                <div className="text-xs font-semibold text-slate-900 dark:text-slate-200 uppercase tracking-wider">
                  Key Responsibilities & Contributions:
                </div>
                <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300 list-disc list-inside">
                  {job.responsibilities.map((resp, idx) => (
                    <li key={idx} className="leading-relaxed">
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tools Used */}
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                <span className="font-semibold text-slate-900 dark:text-slate-200">
                  Tools & Systems:
                </span>
                {job.toolsUsed.map((tool) => (
                  <span
                    key={tool}
                    className="px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono text-[11px]"
                  >
                    {tool}
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
