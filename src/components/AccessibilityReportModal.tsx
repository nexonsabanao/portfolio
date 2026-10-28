import React, { useEffect } from 'react';
import { accessibilityReportData } from '../data/portfolioData';

interface AccessibilityReportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AccessibilityReportModal: React.FC<AccessibilityReportModalProps> = ({
  isOpen,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="a11y-report-title"
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-8 space-y-6 text-slate-900 dark:text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 px-2.5 py-1 text-xs font-mono font-medium rounded text-slate-500 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500"
          aria-label="Close"
        >
          ESC
        </button>

        {/* Modal Header */}
        <div className="space-y-1 pr-8">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            WCAG 2.1 AA Audit
          </div>
          <h2 id="a11y-report-title" className="text-xl font-bold tracking-tight">
            Accessibility Compliance Report
          </h2>
          <p className="text-xs text-slate-600 dark:text-slate-300">
            Engineered adhering to W3C Web Content Accessibility Guidelines.
          </p>
        </div>

        {/* High-Level Score Banner */}
        <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/40 text-center">
          <div>
            <div className="text-[11px] text-emerald-800 dark:text-emerald-300 font-semibold uppercase">Standard</div>
            <div className="text-base font-bold text-emerald-900 dark:text-emerald-100">{accessibilityReportData.wcagLevel}</div>
          </div>
          <div>
            <div className="text-[11px] text-emerald-800 dark:text-emerald-300 font-semibold uppercase">Score</div>
            <div className="text-base font-bold font-mono text-emerald-700 dark:text-emerald-300">{accessibilityReportData.overallScore}</div>
          </div>
          <div>
            <div className="text-[11px] text-emerald-800 dark:text-emerald-300 font-semibold uppercase">Contrast</div>
            <div className="text-base font-bold font-mono text-emerald-700 dark:text-emerald-300">{accessibilityReportData.contrastRatio}</div>
          </div>
        </div>

        {/* Verification Checklist Matrix */}
        <div className="space-y-2">
          <div className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 uppercase">
            Verification Matrix
          </div>

          <div className="rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden divide-y divide-slate-100 dark:divide-slate-800 text-xs">
            {accessibilityReportData.checks.map((c: { rule: string; requirement: string; status: string; score: string }) => (
              <div key={c.rule} className="p-3 flex items-center justify-between gap-4 bg-white dark:bg-slate-900">
                <div className="space-y-0.5">
                  <div className="font-semibold text-slate-900 dark:text-slate-100">
                    {c.rule}
                  </div>
                  <div className="text-slate-500 dark:text-slate-400 text-[11px]">
                    {c.requirement}
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400">
                    {c.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
