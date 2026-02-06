'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const MENU_SECTIONS = [
  {
    title: "Women's Rights First",
    titleClass: 'text-wrf-purple',
    links: [
      { href: '/Founders', label: 'Founders' },
      { href: '/Team', label: 'Team' },
      { href: '/About', label: 'About us' },
    ],
  },
  {
    title: 'What we do',
    titleClass: 'text-wrf-coral',
    links: [
      { href: '/ProgramPage?slug=legal-empowerment-international-accountability', label: 'Legal Empowerment and International Accountability' },
      { href: '/ProgramPage?slug=peacebuilding-social-cohesion', label: 'Peace Building' },
      { href: '/ProgramPage?slug=Digital-Transformation-and%20-Open%20-Gender%20-Data', label: 'Digital Transformation and Open Gender Data' },
      { href: '/ProgramPage?slug=representation-advocacy', label: 'Representation and Advocacy' },
    ],
  },
  {
    title: 'Information',
    titleClass: 'text-wrf-footer-mauve',
    links: [
      { href: '/FAQ', label: 'Questions and answers' },
      { href: '/News', label: 'News and events' },
      { href: '/Vacancies', label: 'Careers and vacancies' },
      { href: '/PrivacyPolicy', label: 'Privacy policy' },
    ],
  },
  {
    title: 'Get involved',
    titleClass: 'text-white',
    links: [
      { href: '/Partnership', label: 'Become a partner' },
      { href: '/Volunteer', label: 'Become a volunteer' },
      { href: '/Contact', label: 'Contact us' },
    ],
  },
];

const navLinks = [
  { href: '/About', label: 'WRF' },
  { href: '/News', label: 'News and updates' },
  { href: '/Vacancies', label: 'Vacancies' },
];

function ChevronDown({ open }: { open: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`h-5 w-5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const closeMenu = () => {
    setMenuOpen(false);
    setOpenAccordion(null);
  };

  return (
    <header className="relative z-50 bg-white shadow-sm">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-32 items-center justify-between">
          <div className="shrink-0">
            <Link href="/" className="block">
              <Image
                src="/logo.jpg"
                alt="Women's Rights First"
                width={240}
                height={96}
                className="h-24 w-auto max-w-xs object-contain"
                priority
              />
            </Link>
          </div>

          <div className="hidden items-center gap-8 lg:flex">
            <nav className="flex items-center gap-6">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm font-bold uppercase tracking-wider text-wrf-black transition-colors hover:text-wrf-purple"
                >
                  {label}
                </Link>
              ))}
            </nav>

            <form className="ml-4 flex w-64 items-center lg:ml-8" role="search" onSubmit={(e) => e.preventDefault()}>
              <div className="relative w-full">
                <input
                  type="search"
                  placeholder="Search..."
                  aria-label="Search"
                  className="h-11 w-full rounded-none border border-black bg-white pl-4 pr-12 text-sm text-gray-900 placeholder:text-gray-500 focus:border-wrf-purple focus:outline-none focus:ring-2 focus:ring-wrf-purple/20 focus:ring-offset-0"
                />
                <button
                  type="submit"
                  className="absolute inset-y-0 right-0 flex items-center bg-wrf-purple px-4 text-white transition-colors hover:bg-wrf-purple-dark"
                  aria-label="Search"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                </button>
              </div>
            </form>

            <Link
              href="/Donate"
              className="inline-flex h-12 items-center justify-center whitespace-nowrap rounded-none bg-wrf-coral px-5 py-2 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wrf-coral focus-visible:ring-offset-2"
            >
              Donate Now
            </Link>

            <button
              type="button"
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-none bg-wrf-black text-white transition-colors hover:opacity-90"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              )}
            </button>
          </div>

          <div className="flex items-center gap-4 lg:hidden">
            <Link href="/Donate" className="inline-flex h-10 items-center justify-center rounded-none bg-wrf-coral px-4 text-xs font-bold uppercase tracking-wider text-white">
              Donate
            </Link>
            <button
              type="button"
              className="flex h-12 w-12 items-center justify-center rounded-none bg-wrf-black text-white transition-colors hover:opacity-90"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Full-width hamburger dropdown (onclick) - matches HTML structure */}
      {menuOpen && (
        <div
          className="absolute left-0 top-full w-full overflow-hidden bg-wrf-black text-white"
          style={{ height: 'auto', opacity: 1 }}
        >
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 lg:py-16">
            {/* Desktop: 4-column grid */}
            <div className="hidden lg:block">
              <div className="mb-12 grid grid-cols-4 gap-8">
                {MENU_SECTIONS.map((section) => (
                  <div key={section.title}>
                    <h3 className={`mb-6 text-lg font-bold uppercase ${section.titleClass}`}>
                      {section.title}
                    </h3>
                    <ul className="space-y-4">
                      {section.links.map((link) => (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            className="font-body text-white transition-colors hover:text-wrf-coral"
                            onClick={closeMenu}
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between border-t border-gray-700 pt-8">
                <p className="text-lg text-white">Ready to make a difference?</p>
                <div className="flex items-center gap-6">
                  <Link
                    href="/Donate"
                    className="flex h-12 items-center bg-wrf-coral px-6 font-bold uppercase tracking-wider text-white transition-opacity hover:opacity-90"
                    onClick={closeMenu}
                  >
                    Donate
                  </Link>
                  <Link
                    href="/Contact"
                    className="flex h-12 items-center bg-wrf-purple px-6 font-bold uppercase tracking-wider text-white transition-opacity hover:opacity-90"
                    onClick={closeMenu}
                  >
                    Get In Touch
                  </Link>
                </div>
              </div>
            </div>

            {/* Mobile: accordion */}
            <div className="space-y-2 lg:hidden">
              {MENU_SECTIONS.map((section, index) => (
                <div key={section.title} className="border-b border-gray-700">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between py-4 text-left"
                    onClick={() => setOpenAccordion(openAccordion === index ? null : index)}
                    aria-expanded={openAccordion === index}
                  >
                    <h3 className={`text-lg font-bold uppercase ${section.titleClass}`}>
                      {section.title}
                    </h3>
                    <ChevronDown open={openAccordion === index} />
                  </button>
                  {openAccordion === index && (
                    <ul className="space-y-3 pb-4 pl-0">
                      {section.links.map((link) => (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            className="block text-white transition-colors hover:text-wrf-coral"
                            onClick={closeMenu}
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
              <div className="space-y-4 pt-6">
                <Link
                  href="/Donate"
                  className="flex h-12 w-full items-center justify-center bg-wrf-coral font-bold uppercase tracking-wider text-white transition-opacity hover:opacity-90"
                  onClick={closeMenu}
                >
                  Donate
                </Link>
                <Link
                  href="/Contact"
                  className="flex h-12 w-full items-center justify-center bg-wrf-purple font-bold uppercase tracking-wider text-white transition-opacity hover:opacity-90"
                  onClick={closeMenu}
                >
                  Get In Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
