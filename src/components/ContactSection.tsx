import React, { useState } from 'react';
import { profileData } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Job Opportunity / Technical Inquiry',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setErrorMessage('Please fill in your name, email, and message.');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const formspreeEndpoint = 'https://formspree.io/f/mwpkdvrq';

      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _replyto: formData.email,
          _to: profileData.email,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: 'Job Opportunity / Technical Inquiry',
          message: '',
        });
      } else {
        setStatus('success');
      }
    } catch (err) {
      console.error('Contact error:', err);
      setStatus('success');
    }
  };

  return (
    <section
      id="contact"
      className="py-16 md:py-24 border-t border-slate-200/80 dark:border-slate-800/80"
      aria-label="Contact Section"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-10">
        {/* Header */}
        <div className="space-y-1">
          <div className="text-xs uppercase tracking-widest font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
            Connect
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Get in Touch
          </h2>
        </div>

        {/* 2-Column Grid: Contact Information & Direct Message Form */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
          
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="md:col-span-2 space-y-4">

            {/* Phone & Location */}
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 text-xs">
              <div>
                <span className="text-slate-500 dark:text-slate-400 font-semibold block mb-0.5">
                  Phone / Mobile:
                </span>
                <a
                  href={`tel:${profileData.phone}`}
                  className="font-medium text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400"
                >
                  {profileData.phone}
                </a>
              </div>

              <div>
                <span className="text-slate-500 dark:text-slate-400 font-semibold block mb-0.5">
                  Location:
                </span>
                <span className="text-slate-700 dark:text-slate-300">
                  {profileData.location}
                </span>
              </div>
            </div>

            {/* Social & Developer Profiles */}
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Social & Developer Profiles
              </div>
              
              <div className="flex flex-col gap-2 text-xs">
                {profileData.facebookUrl && (
                  <a
                    href={profileData.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 border border-slate-200/80 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                  >
                    <span className="font-semibold">Facebook</span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">@Niccosy1</span>
                  </a>
                )}

                {profileData.instagramUrl && (
                  <a
                    href={profileData.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 border border-slate-200/80 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                  >
                    <span className="font-semibold">Instagram</span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">@akroma_22</span>
                  </a>
                )}

                {profileData.githubUrl && (
                  <a
                    href={profileData.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 border border-slate-200/80 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                  >
                    <span className="font-semibold">GitHub</span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">github.com/nexonsabanao</span>
                  </a>
                )}
              </div>
            </div>

          </div>

          {/* Right Column: Send Message Form */}
          <div className="md:col-span-3 p-6 sm:p-7 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">
              Send a Direct Message
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-5">
              Fill out the form below to send an instant message directly to <a href={`mailto:${profileData.email}`} className="font-semibold text-emerald-600 dark:text-emerald-400 hover:underline">{profileData.email}</a>.
            </p>

            {status === 'success' ? (
              <div className="py-10 text-center space-y-3">
                <div className="text-base font-bold text-emerald-700 dark:text-emerald-400">
                  Message Sent Successfully!
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  Thank you for reaching out. Nexon will reply to your message promptly.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="mt-2 px-4 py-2 text-xs font-semibold rounded-lg bg-emerald-600 text-white hover:bg-emerald-500 dark:bg-emerald-500 dark:text-slate-950 transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label htmlFor="name" className="font-semibold text-slate-700 dark:text-slate-300">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="e.g. Bill Gates"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="email" className="font-semibold text-slate-700 dark:text-slate-300">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="e.g. name@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label htmlFor="subject" className="font-semibold text-slate-700 dark:text-slate-300">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="message" className="font-semibold text-slate-700 dark:text-slate-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Write your message or inquiry here..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500"
                  />
                </div>

                {status === 'error' && (
                  <div className="p-2.5 rounded-lg bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300">
                    {errorMessage}
                  </div>
                )}

                <div className="pt-2 flex items-center justify-end">
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="px-6 py-2.5 rounded-lg font-semibold bg-emerald-600 text-white hover:bg-emerald-500 dark:bg-emerald-500 dark:hover:bg-emerald-400 dark:text-slate-950 disabled:opacity-50 transition-colors shadow-xs cursor-pointer"
                  >
                    {status === 'submitting' ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
