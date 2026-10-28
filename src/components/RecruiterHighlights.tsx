import React from 'react';
import { profileData } from '../data/portfolioData';

export const RecruiterHighlights: React.FC = () => {
  return (
    <section
      id="education"
      className="py-12 md:py-16 border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/30"
      aria-label="Academic Background"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
        {/* Section Header */}
        <div className="space-y-1">
          <div className="text-xs uppercase tracking-widest font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
            Degree & Qualifications
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Academic Background
          </h2>
        </div>

        {/* Dedicated Education Card */}
        <div className="p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-slate-100 dark:border-slate-800 pb-3">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {profileData.education.degree}
              </h3>
              <div className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                {profileData.education.institution}
              </div>
            </div>

            <div className="text-xs font-mono text-slate-500 dark:text-slate-400">
              {profileData.education.graduationDate} · Cavite, Philippines
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-600 dark:text-slate-300 pt-1">
            <div className="space-y-1">
              <span className="font-semibold text-slate-900 dark:text-slate-100 block">
                Degree Focus & Coursework:
              </span>
              <p className="leading-relaxed">
                Software Development, Python Scripting, Object-Oriented Programming (Java, C++), and Database Management.
              </p>
            </div>

            <div className="space-y-1">
              <span className="font-semibold text-slate-900 dark:text-slate-100 block">
                Applied Projects & Practicum:
              </span>
              <p className="leading-relaxed">
                ServEm on-demand services marketplace (Flutter mobile app & React TypeScript web platform), native Android app development (Nutriority with Kotlin & Firebase), IoT flood alert telemetry, and administrative IT support at MDRRMO.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
