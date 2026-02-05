'use client';

import Link from 'next/link';
import { useState } from 'react';

const FOOTER_LINKS = {
  info: [
    { label: 'Our founders', href: '#' },
    { label: 'Our team', href: '#' },
    { label: 'About WRF', href: '#' },
    { label: 'Questions & Answers', href: '#' },
    { label: 'News & Events', href: '#' },
    { label: 'Careers & vacancies', href: '#' },
  ],
  whatWeDo: [
    { label: 'Legal Empowerment & International Accountability', href: '#' },
    { label: 'Peace building', href: '#' },
    { label: 'Digital transformation and open gender data', href: '#' },
    { label: 'Representation and Advocacy', href: '#' },
  ],
  getInvolved: [
    { label: 'Volunteer', href: '#' },
    { label: 'Donate', href: '#' },
    { label: 'Partnership', href: '#' },
    { label: 'Contact us', href: '#' },
  ],
};

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-md bg-white/10 text-white transition-colors hover:bg-white/20"
    >
      {children}
    </Link>
  );
}

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 2000);
  };

  return (
    <footer id="footer" className="bg-wrf-footer-dark text-white">
      {/* Top: Contact + Social */}
      <div className="border-b border-white/10 py-8">
        <div className="mx-auto grid max-w-container grid-cols-1 gap-8 px-4 md:grid-cols-2 md:px-6">
          <div>
            <h3 className="mb-1 text-base font-bold">Contact us</h3>
            <p className="mb-4 text-sm text-white/85">
              Get the latest news about our programs and impact
            </p>
            <form
              onSubmit={handleSubscribe}
              className="flex max-w-[360px] overflow-hidden rounded-md"
            >
              <input
                type="email"
                placeholder="Enter your email"
                aria-label="Email"
                className="flex-1 rounded-l-md border border-r-0 border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/50 focus:border-white/40 focus:outline-none focus:ring-1 focus:ring-white/40"
              />
              <button
                type="submit"
                disabled={subscribed}
                className="inline-flex items-center gap-2 rounded-r-md bg-wrf-coral px-4 py-2.5 text-sm font-semibold text-white hover:bg-wrf-coral-light disabled:opacity-70"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 2L11 13" />
                  <path d="M22 2L15 22L11 13L2 9L22 2Z" />
                </svg>
                {subscribed ? 'Subscribed!' : 'Subscribe'}
              </button>
            </form>
          </div>
          <div>
            <h3 className="mb-1 text-base font-bold">
              Follow us on social media
            </h3>
            <p className="mb-4 text-sm text-white/85">
              Connect with us on social media
            </p>
            <div className="flex gap-2">
              <SocialIcon href="#" label="Facebook">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </SocialIcon>
              <SocialIcon href="#" label="Twitter">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0 1.97-2.47A9 9 0 0 1 20.27 2a4.48 4.48 0 0 0-7.6 4.08A12.74 12.74 0 0 1 1.67 2.92 4.48 4.48 0 0 0 3.2 9.72a4.47 4.47 0 0 1-2.02-.55v.05a4.48 4.48 0 0 0 3.6 4.4 4.48 4.48 0 0 1-2.02.08 4.48 4.48 0 0 0 4.18 3.11 9 9 0 0 1-5.56 1.92A9 9 0 0 1 0 20.54a12.74 12.74 0 0 0 6.92 2" />
                </svg>
              </SocialIcon>
              <SocialIcon href="#" label="Instagram">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect
                    x="2"
                    y="2"
                    width="20"
                    height="20"
                    rx="5"
                  />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </SocialIcon>
              <SocialIcon href="#" label="LinkedIn">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </SocialIcon>
            </div>
          </div>
        </div>
      </div>

      {/* Four columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div className="bg-wrf-purple px-6 py-7">
          <h4 className="mb-4 text-base font-bold">WRF & Information</h4>
          <ul className="space-y-2">
            {FOOTER_LINKS.info.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="text-sm text-white/90 hover:underline"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-wrf-coral px-6 py-7">
          <h4 className="mb-4 text-base font-bold">What we do</h4>
          <ul className="space-y-2">
            {FOOTER_LINKS.whatWeDo.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="text-sm text-white/90 hover:underline"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-wrf-footer-mauve px-6 py-7">
          <h4 className="mb-4 text-base font-bold">Get Involved</h4>
          <ul className="space-y-2">
            {FOOTER_LINKS.getInvolved.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="text-sm text-white/90 hover:underline"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-wrf-black px-6 py-7">
          <h4 className="mb-4 text-base font-bold">
            <span className="mr-1" aria-hidden>
              📍
            </span>{' '}
            Where we are
          </h4>
          <button
            type="button"
            className="mb-2 w-full rounded-md border border-white/30 bg-white/10 px-4 py-2.5 text-left text-sm font-semibold text-white hover:bg-white/15"
          >
            📞 Call Us
          </button>
          <Link
            href="#"
            className="mt-2 block rounded-md bg-wrf-whatsapp px-4 py-2.5 text-center text-sm font-semibold text-white hover:opacity-95"
          >
            WhatsApp
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-wrf-black py-4">
        <div className="mx-auto flex max-w-container flex-col items-center justify-between gap-3 px-4 md:flex-row md:px-6">
          <p className="text-sm text-white/75">
            © 2025 Women&apos;s Rights First WRF. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="#"
              className="text-sm text-white/75 hover:underline"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-sm text-white/75 hover:underline"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
