import React, { useEffect, useState } from 'react';
import { profileData, workExperience, projects } from '../data/portfolioData';
import { generateAtsPlainTextResume } from '../utils/portfolioLogic';

interface AtsResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AtsResumeModal: React.FC<AtsResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

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

  const handlePrint = () => {
    const printArea = document.getElementById('ats-resume-document-content');
    if (!printArea) {
      window.print();
      return;
    }

    // Dedicated hidden iframe isolated for pristine 1-page A4 PDF/print output
    const iframe = document.createElement('iframe');
    iframe.style.position = 'fixed';
    iframe.style.right = '0';
    iframe.style.bottom = '0';
    iframe.style.width = '0';
    iframe.style.height = '0';
    iframe.style.border = '0';
    document.body.appendChild(iframe);

    const doc = iframe.contentWindow?.document;
    if (!doc) {
      window.print();
      return;
    }

    doc.open();
    doc.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8" />
          <title>${profileData.fullNameFormal} - Resume</title>
          <style>
            /* margin: 0 forces browsers to omit default headers (date/time, document title)
               and footers (site URL, page numbers) */
            @page {
              size: A4 portrait;
              margin: 0;
            }
            * {
              box-sizing: border-box;
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
            }
            html, body {
              margin: 0;
              padding: 10mm 14mm;
              width: 100%;
              background-color: #ffffff;
              color: #0f172a;
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
              font-size: 9.3pt;
              line-height: 1.4;
            }
            .text-center { text-align: center; }
            .font-bold { font-weight: 700; }
            .font-semibold { font-weight: 600; }
            .uppercase { text-transform: uppercase; }
            .flex { display: flex; }
            .justify-between { justify-content: space-between; }
            .items-center { align-items: center; }
            .items-baseline { align-items: baseline; }
            .whitespace-nowrap { white-space: nowrap; }
            .shrink-0 { flex-shrink: 0; }
            .date-col {
              white-space: nowrap;
              flex-shrink: 0;
              text-align: right;
              margin-left: 12px;
            }

            #ats-resume-document-content {
              width: 100%;
              max-width: 100%;
              margin: 0;
              padding: 0;
            }
            #ats-resume-document-content > * + * {
              margin-top: 10px;
            }

            /* --- Header --- */
            h1 {
              font-size: 20pt;
              margin: 0 0 2px 0;
              font-weight: 800;
              text-transform: uppercase;
              letter-spacing: -0.015em;
              text-align: center;
              color: #020617;
              line-height: 1.15;
            }
            .degree-title {
              font-size: 10pt;
              font-weight: 600;
              text-transform: uppercase;
              letter-spacing: 0.02em;
              color: #334155;
              text-align: center;
              margin-bottom: 3px;
            }
            .contact-line {
              display: flex;
              flex-wrap: wrap;
              justify-content: center;
              align-items: center;
              column-gap: 8px;
              font-size: 8.8pt;
              color: #475569;
              text-align: center;
              line-height: 1.3;
            }
            .header-divider {
              border-bottom: 1.5px solid #0f172a;
              padding-bottom: 7px;
              margin-bottom: 7px;
            }

            /* --- Sections --- */
            .section-title {
              font-size: 10pt;
              font-weight: 700;
              text-transform: uppercase;
              letter-spacing: 0.05em;
              border-bottom: 1px solid #cbd5e1;
              padding-bottom: 2px;
              margin-top: 6px;
              margin-bottom: 5px;
              color: #0f172a;
              page-break-after: avoid;
              break-after: avoid;
            }
            p {
              margin: 0;
              font-size: 9.2pt;
              line-height: 1.42;
              color: #334155;
            }

            /* --- Items & Rows --- */
            .item-row {
              display: flex;
              justify-content: space-between;
              align-items: baseline;
              font-weight: 700;
              font-size: 9.5pt;
              color: #0f172a;
              line-height: 1.35;
            }
            .item-row span:last-child {
              font-weight: 500;
              font-size: 9pt;
              color: #475569;
            }
            .item-sub {
              font-size: 8.6pt;
              color: #64748b;
              font-style: italic;
              line-height: 1.3;
              margin-bottom: 2px;
            }

            /* --- Lists --- */
            ul {
              margin: 2px 0 5px 0;
              padding-left: 17px;
              list-style: disc outside;
            }
            li {
              margin-bottom: 2.5px;
              font-size: 9.1pt;
              line-height: 1.38;
              color: #334155;
            }
            .skills-list {
              list-style: none;
              padding-left: 0;
              margin: 2px 0 0 0;
            }
            .skills-list li {
              margin-bottom: 3.5px;
              font-size: 9.1pt;
              line-height: 1.38;
            }
            strong {
              color: #0f172a;
              font-weight: 700;
            }
            a {
              color: inherit;
              text-decoration: none;
            }
            .project-item {
              margin-bottom: 7px;
            }
            .compact-block {
              page-break-inside: avoid;
              break-inside: avoid;
            }
          </style>
        </head>
        <body>
          ${printArea.outerHTML}
        </body>
      </html>
    `);
    doc.close();

    setTimeout(() => {
      iframe.contentWindow?.focus();
      iframe.contentWindow?.print();
      setTimeout(() => {
        if (document.body.contains(iframe)) {
          document.body.removeChild(iframe);
        }
      }, 1500);
    }, 250);
  };

  const handleCopyRawAtsText = () => {
    const text = generateAtsPlainTextResume(profileData, workExperience, projects);
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-xs overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="ats-resume-title"
    >
      <div
        className="relative w-full max-w-4xl max-h-[95vh] overflow-y-auto rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 shadow-2xl p-4 sm:p-6 space-y-4 print:p-0 print:border-none print:shadow-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Controls Header */}
        <div className="no-print flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-800 pb-3">
          <div className="flex items-center gap-2.5">
            <h2 id="ats-resume-title" className="text-sm font-bold text-slate-800 dark:text-slate-100">
              Resume Preview
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopyRawAtsText}
              className="px-3 py-1.5 text-xs font-semibold rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors cursor-pointer"
            >
              {copied ? 'Copied Plain Text!' : 'Copy Plain Text'}
            </button>

            <button
              type="button"
              onClick={handlePrint}
              className="px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition-colors shadow-xs cursor-pointer flex items-center gap-1.5"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
              <span>Print / Download</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="px-2.5 py-1.5 text-xs text-slate-500 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 cursor-pointer"
              aria-label="Close Resume"
            >
              Close
            </button>
          </div>
        </div>

        {/* Paper Container - Clean White A4 Sheet Preview */}
        <div className="bg-white rounded-xl shadow-md border border-slate-200 p-6 sm:p-9 max-w-3xl mx-auto text-slate-900 font-sans">
          {/* ATS Resume Document Content */}
          <div id="ats-resume-document-content" className="space-y-4 text-slate-900 text-xs leading-normal">
            {/* Header */}
            <div className="header-divider text-center border-b border-slate-900 pb-2.5">
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight uppercase text-slate-950">
                {profileData.fullNameFormal}
              </h1>
              <div className="degree-title text-xs font-semibold text-slate-700 uppercase mt-0.5">
                {profileData.degree} · Cavite State University
              </div>
              <div className="contact-line text-xs text-slate-600 flex flex-wrap justify-center items-center gap-x-2.5 mt-1">
                <span>{profileData.phone}</span>
                <span>·</span>
                <a href={`mailto:${profileData.email}`} className="text-slate-700 hover:underline">{profileData.email}</a>
                <span>·</span>
                <a href={profileData.githubUrl} target="_blank" rel="noopener noreferrer" className="text-slate-700 hover:underline">github.com/{profileData.githubUsername}</a>
                <span>·</span>
                <span>{profileData.location}</span>
              </div>
            </div>

            {/* Summary */}
            <div className="space-y-1 compact-block">
              <h2 className="section-title text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5">
                Summary
              </h2>
              <p className="text-xs text-slate-700 leading-relaxed">
                {profileData.executiveHeadline}
              </p>
            </div>

            {/* Skills */}
            <div className="space-y-1 compact-block">
              <h2 className="section-title text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5">
                Skills
              </h2>
              <ul className="skills-list space-y-1 text-xs text-slate-800">
                <li>
                  <strong>Languages & Web:</strong> TypeScript, JavaScript, React, Tailwind CSS, Python, C++, Java, HTML5, CSS3, REST APIs, Vite
                </li>
                <li>
                  <strong>Mobile & Cloud:</strong> Flutter, Dart, Kotlin, Android Studio (XML Layouts), Firebase Firestore & Realtime DB
                </li>
                <li>
                  <strong>Hardware & IoT:</strong> ESP32, Arduino (LilyGO TTGO T-SIM), STM32, Embedded C++, GSM Telemetry
                </li>
                <li>
                  <strong>Tools & Operations:</strong> Git, GitHub, Microsoft Excel (Data Management, Structuring & Reporting), Word, Canva
                </li>
              </ul>
            </div>

            {/* Work Experience */}
            <div className="space-y-1.5 compact-block">
              <h2 className="section-title text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5">
                Work Experience
              </h2>

              {workExperience.map((job) => (
                <div key={job.id} className="space-y-0.5 compact-block">
                  <div className="item-row flex justify-between items-baseline font-bold text-slate-900 text-xs">
                    <span>{job.role} (OJT) – MDRRMO Indang</span>
                    <span className="shrink-0 whitespace-nowrap date-col text-slate-600 font-normal text-xs">{job.startDate} – {job.endDate}</span>
                  </div>
                  <div className="item-sub text-[11px] text-slate-600 italic">
                    Municipal Disaster Risk Reduction and Management Office · {job.location}
                  </div>
                  <ul className="list-disc list-outside ml-4 space-y-0.5 text-slate-700 text-xs">
                    {job.responsibilities.slice(0, 2).map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Projects */}
            <div className="space-y-2.5 compact-block">
              <h2 className="section-title text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5">
                Projects
              </h2>

              {projects.map((proj) => {
                const bullets = proj.resumeBulletPoints ?? proj.technicalFeatures.slice(0, 2);
                const displayUrl = proj.liveUrl ? proj.liveUrl.replace(/^https?:\/\//, '').replace(/\/$/, '') : '';
                return (
                  <div key={proj.id} className="project-item space-y-0.5 compact-block">
                    <div className="item-row flex justify-between items-baseline font-bold text-slate-900 text-xs">
                      <span>{proj.resumeTitle ?? proj.title}</span>
                      {displayUrl && (
                        <a
                          href={proj.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[11px] font-normal text-slate-600 hover:text-emerald-700 hover:underline"
                        >
                          {displayUrl}
                        </a>
                      )}
                    </div>
                    <div className="item-sub text-[11px] text-slate-600 italic">
                      {proj.resumeTechStack ?? proj.tags.slice(0, 5).join(' · ')}
                    </div>
                    <ul className="list-disc list-outside ml-4 space-y-0.5 text-slate-700 text-xs">
                      {bullets.map((b, idx) => (
                        <li key={idx}>{b}</li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>

            {/* Education */}
            <div className="space-y-0.5 compact-block">
              <h2 className="section-title text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5">
                Education
              </h2>
              <div className="item-row flex justify-between items-baseline font-bold text-slate-900 text-xs">
                <span>{profileData.education.institution}</span>
                <span className="text-slate-700 font-semibold text-xs">{profileData.education.degree}</span>
              </div>
              <div className="item-row item-sub flex justify-between items-center text-[11px] text-slate-600 italic mt-0.5">
                <span>{profileData.education.location ?? 'Cavite, Philippines'}</span>
                <span>{profileData.education.graduationDate}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

