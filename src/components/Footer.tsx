import React from 'react';
import { profileData } from '../data/portfolioData';

interface FooterProps {
  onOpenAtsResume: () => void;
  onOpenA11yReport: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAtsResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 py-10 text-slate-500 dark:text-slate-400 text-xs">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="font-semibold text-slate-800 dark:text-slate-200">
            {profileData.fullNameFormal}
          </span>
          <span className="mx-2 text-slate-400">·</span>
          <span>{profileData.education.degree}</span>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          {profileData.facebookUrl && (
            <a
              href={profileData.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-600 dark:hover:text-emerald-400 underline underline-offset-4"
            >
              Facebook
            </a>
          )}
          {profileData.instagramUrl && (
            <a
              href={profileData.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-600 dark:hover:text-emerald-400 underline underline-offset-4"
            >
              Instagram
            </a>
          )}
          <a
            href={profileData.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-600 dark:hover:text-emerald-400 underline underline-offset-4"
          >
            GitHub
          </a>
          <button
            onClick={onOpenAtsResume}
            className="hover:text-emerald-600 dark:hover:text-emerald-400 underline underline-offset-4 cursor-pointer"
          >
            ATS Resume
          </button>
          <button
            onClick={scrollToTop}
            className="hover:text-emerald-600 dark:hover:text-emerald-400 underline underline-offset-4 cursor-pointer"
          >
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
};
