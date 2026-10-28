import React from 'react';
import { accomplishmentMetrics } from '../data/portfolioData';

export const AccomplishmentsSection: React.FC = () => {
  return (
    <section
      id="accomplishments"
      className="py-14 border-t border-slate-200/80 dark:border-slate-800/80"
      aria-label="Measurable Highlights"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header */}
        <div className="space-y-1">
          <div className="text-xs uppercase tracking-widest font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
            Milestones
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Key Results & Deliverables
          </h2>
        </div>

        {/* Accomplishment Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {accomplishmentMetrics.map((acc) => (
            <div
              key={acc.id}
              className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/40 transition-colors flex flex-col justify-between space-y-3"
            >
              <div className="space-y-2">
                <div className="text-2xl font-bold font-mono text-emerald-600 dark:text-emerald-400 tracking-tight">
                  {acc.metric}
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                    {acc.label}
                  </h3>
                  <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-0.5">
                    {acc.context}
                  </div>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {acc.description}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-[11px] font-mono text-emerald-700 dark:text-emerald-300">
                Verified
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
