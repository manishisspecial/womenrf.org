'use client';

import Link from 'next/link';
import { useState } from 'react';

const INFO_LINKS = [
  { label: 'Our founders', href: '/Founders' },
  { label: 'Our team', href: '/Team' },
  { label: 'About WRF', href: '/About' },
  { label: 'Questions & Answers', href: '/FAQ' },
  { label: 'News & Events', href: '/News' },
  { label: 'Careers & vacancies', href: '/Vacancies' },
];

const WHAT_WE_DO_LINKS = [
  { label: 'Legal Empowerment & International Accountability', href: '/ProgramPage?slug=legal-empowerment-international-accountability' },
  { label: 'Peace building', href: '/ProgramPage?slug=peacebuilding-social-cohesion' },
  { label: 'Digital transformation and open gender data', href: '/ProgramPage?slug=Digital-Transformation-and%20-Open%20-Gender%20-Data' },
  { label: 'Representation and Advocacy', href: '/ProgramPage?slug=representation-advocacy' },
];

const GET_INVOLVED_LINKS = [
  { label: 'Volunteer', href: '/Volunteer' },
  { label: 'Donate', href: '/Donate' },
  { label: 'Partnership', href: '/Partnership' },
  { label: 'Contact us', href: '/Contact' },
];

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 2000);
  };

  return (
    <footer id="footer" className="bg-wrf-black text-white">
      {/* Section 1: Contact + Social */}
      <div className="border-b border-gray-700">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-2xl font-bold">Contact us</h3>
              <p className="mb-6 text-gray-400">
                Get the latest news about our programs and impact
              </p>
              <form onSubmit={handleSubscribe} className="mb-4 flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  aria-label="Email"
                  className="h-10 flex-1 rounded-none border border-white/20 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-0"
                />
                <button
                  type="submit"
                  disabled={subscribed}
                  className="inline-flex h-9 items-center justify-center gap-1 rounded-none bg-wrf-coral px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-wrf-coral-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                    <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
                    <path d="m21.854 2.147-10.94 10.939" />
                  </svg>
                  {subscribed ? 'Subscribed!' : 'Subscribe'}
                </button>
              </form>
            </div>
            <div className="text-left md:text-right">
              <h3 className="mb-4 text-2xl font-bold">Follow us on social media</h3>
              <p className="mb-6 text-gray-400">Connect with us on social media</p>
              <div className="flex justify-start gap-4 md:justify-end">
                <a href="#" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center bg-white/10 text-white transition-colors hover:bg-wrf-coral" aria-label="Facebook">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a href="https://x.com/women_s24642" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center bg-white/10 text-white transition-colors hover:bg-wrf-coral" aria-label="X (Twitter)">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/womensrightsfirst/" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center bg-white/10 text-white transition-colors hover:bg-wrf-coral" aria-label="Instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/women-s-rights-first-wrf" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center bg-white/10 text-white transition-colors hover:bg-wrf-coral" aria-label="LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Four columns - WRF & Info, What we do, Get Involved, Where we are */}
      <div className="border-b border-gray-700">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="order-1 grid grid-cols-1 gap-8 md:col-span-3 md:grid-cols-3">
              <div className="bg-wrf-purple p-6">
                <h4 className="mb-4 text-lg font-semibold text-white">WRF & Information</h4>
                <ul className="space-y-2">
                  {INFO_LINKS.map(({ label, href }) => (
                    <li key={label}>
                      <Link href={href} className="font-normal text-white transition-colors hover:text-white/80">
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-wrf-coral p-6">
                <h4 className="mb-4 text-lg font-semibold text-white">What we do</h4>
                <ul className="space-y-2">
                  {WHAT_WE_DO_LINKS.map(({ label, href }) => (
                    <li key={label}>
                      <Link href={href} className="font-normal text-white transition-colors hover:text-white/80">
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-wrf-footer-mauve p-6">
                <h4 className="mb-4 text-lg font-semibold text-white">Get Involved</h4>
                <ul className="space-y-2">
                  {GET_INVOLVED_LINKS.map(({ label, href }) => (
                    <li key={label}>
                      <Link href={href} className="font-normal text-white transition-colors hover:text-white/80">
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="order-2 bg-white/5 p-6 md:order-2">
              <h4 className="mb-4 flex items-center gap-2 text-lg font-semibold text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Where we are
              </h4>
              <div className="mb-6 whitespace-pre-line text-gray-400" />
              <div className="flex flex-col gap-3">
                <button
                  type="button"
                  className="inline-flex h-9 w-full items-center justify-center gap-1 rounded-none border border-white/30 bg-transparent px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  Call Us
                </button>
                <Link
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 w-full items-center justify-center gap-1 rounded-none bg-green-600 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                  </svg>
                  WhatsApp
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: Copyright + links */}
      <div className="py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:justify-start">
            <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
              <p className="text-center text-sm text-gray-400 md:text-left">
                © 2025 Women&apos;s Rights First WRF. All rights reserved.
              </p>
              <div className="flex flex-col items-center gap-2 md:flex-row md:gap-4">
                <Link href="/PrivacyPolicy" className="text-sm text-gray-400 transition-colors hover:text-white">
                  Privacy Policy
                </Link>
                <Link href="#" className="text-sm text-gray-400 transition-colors hover:text-white">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
