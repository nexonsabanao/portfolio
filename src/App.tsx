import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { RecruiterHighlights } from './components/RecruiterHighlights';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AtsResumeModal } from './components/AtsResumeModal';
import { AccessibilityReportModal } from './components/AccessibilityReportModal';

export default function App() {
  const [atsResumeOpen, setAtsResumeOpen] = useState(false);
  const [a11yReportOpen, setA11yReportOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200 selection:bg-emerald-600 selection:text-white">
        {/* Skip to Main Content Link for Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-emerald-600 focus:text-white focus:rounded-lg focus:font-semibold focus:shadow-lg focus:outline-none"
        >
          Skip to main content
        </a>

        {/* Navigation Bar */}
        <Navbar onOpenAtsResume={() => setAtsResumeOpen(true)} />

        {/* Main Content Area */}
        <main id="main-content">
          <Hero onOpenAtsResume={() => setAtsResumeOpen(true)} />

          <RecruiterHighlights />

          <SkillsSection />

          <ProjectsSection />

          <ExperienceSection />

          <ContactSection />
        </main>

        {/* Footer */}
        <Footer
          onOpenAtsResume={() => setAtsResumeOpen(true)}
          onOpenA11yReport={() => setA11yReportOpen(true)}
        />

        {/* Modals & Overlays */}
        <AtsResumeModal
          isOpen={atsResumeOpen}
          onClose={() => setAtsResumeOpen(false)}
        />

        <AccessibilityReportModal
          isOpen={a11yReportOpen}
          onClose={() => setA11yReportOpen(false)}
        />
      </div>
    </ThemeProvider>
  );
}
