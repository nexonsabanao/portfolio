import React from 'react';
import { profileData } from '../data/portfolioData';

interface HeroProps {
  onOpenAtsResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAtsResume }) => {
  return (
    <section
      id="hero"
      className="pt-20 pb-12 sm:pt-24 sm:pb-16 md:pt-28 md:pb-20"
      aria-label="Introduction"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center md:items-center justify-between gap-8 md:gap-12">
          
          {/* Mobile View: Circular Avatar on Top */}
          <div className="md:hidden flex flex-col items-center">
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-emerald-500/40 shadow-md bg-slate-100 dark:bg-slate-900">
              <img
                src={profileData.avatarImage}
                alt={profileData.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Left Column: Clean & Direct Introduction */}
          <div className="flex-1 space-y-5 text-center md:text-left">
            
            {/* Greeting & Name */}
            <div className="space-y-1.5">
              <div className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                Hello, I'm
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Nexon Jr. Sabañao
              </h1>
              <p className="text-sm sm:text-base font-medium text-slate-600 dark:text-slate-300">
                BS Information Technology Graduate · Cavite State University
              </p>
            </div>

            {/* Brief About Me */}
            <p className="text-xs sm:text-[13px] text-slate-500 dark:text-slate-400 leading-relaxed max-w-lg">
              I specialize in full-stack web applications (React, TypeScript, Tailwind CSS), native Android development (Kotlin & Firebase), and Python scripting with practical IT operations experience from MDRRMO.
            </p>

            {/* Clean Tag Badges with Visual Icons */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 pt-1 text-xs">
              
              {/* Web & React (ServEm) */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-medium border border-slate-200 dark:border-slate-800 shadow-2xs">
                <svg className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polygon points="12 2 2 7 12 12 22 7 12 2" />
                  <polyline points="2 17 12 22 22 17" />
                  <polyline points="2 12 12 17 22 12" />
                </svg>
                <span>React & TypeScript</span>
              </div>

              {/* Flutter & Android Mobile */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-medium border border-slate-200 dark:border-slate-800 shadow-2xs">
                <svg className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
                  <path d="M12 18h.01" />
                </svg>
                <span>Flutter &amp; Android</span>
              </div>

              {/* Python */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-medium border border-slate-200 dark:border-slate-800 shadow-2xs">
                <svg className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
                <span>Python</span>
              </div>

              {/* Excel & Data Management */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-medium border border-slate-200 dark:border-slate-800 shadow-2xs">
                <svg className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M3 3h18v18H3z" />
                  <path d="M3 9h18" />
                  <path d="M3 15h18" />
                  <path d="M9 3v18" />
                  <path d="M15 3v18" />
                </svg>
                <span>Excel & Data</span>
              </div>

              {/* Location */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-medium border border-slate-200 dark:border-slate-800 shadow-2xs">
                <svg className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>Cavite, Philippines</span>
              </div>

            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2">
              <a
                href="#contact"
                className="px-5 py-2.5 text-xs font-semibold rounded-lg bg-emerald-600 text-white hover:bg-emerald-500 dark:bg-emerald-500 dark:hover:bg-emerald-400 dark:text-slate-950 transition-colors shadow-xs"
              >
                Contact Me
              </a>

              <button
                onClick={onOpenAtsResume}
                className="px-5 py-2.5 text-xs font-semibold rounded-lg border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              >
                View Resume
              </button>

              <a
                href={profileData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 underline underline-offset-4 transition-colors"
              >
                GitHub Profile
              </a>
            </div>
          </div>

          {/* Desktop View: Clean Photo on the Right */}
          <div className="hidden md:block shrink-0">
            <div className="w-56 lg:w-64 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-lg bg-slate-100 dark:bg-slate-900">
              <img
                src={profileData.avatarImage}
                alt={profileData.name}
                referrerPolicy="no-referrer"
                className="w-full aspect-[4/5] object-cover object-center"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
