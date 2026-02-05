'use client';

import Link from 'next/link';
import { useState } from 'react';

const navLinks = [
  { href: '#wrf', label: 'WRF' },
  { href: '#news', label: 'NEWS AND UPDATES' },
  { href: '#vacancies', label: 'VACANCIES' },
];

/* Woman face profile silhouette (facing right) - beige/skin tone, integrated into logo */
function WomanProfile() {
  return (
    <svg
      className="absolute left-[0.15em] top-1/2 h-[1.4em] w-[0.9em] -translate-y-1/2"
      viewBox="0 0 40 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      {/* Woman's face profile facing right with hair */}
      <path
        d="M8 58 C8 48, 12 42, 18 38 C14 36, 12 32, 12 28 C12 18, 18 10, 26 8 C30 7, 34 8, 36 12 C38 16, 38 22, 36 28 C34 34, 30 38, 24 40 C30 42, 34 48, 34 58 L8 58 Z"
        fill="#E8D4C4"
      />
      {/* Hair flowing back */}
      <path
        d="M26 8 C22 6, 16 8, 14 14 C12 20, 14 26, 18 30 C16 28, 14 24, 14 18 C14 12, 18 8, 24 8 C28 8, 32 12, 32 18 C32 14, 30 10, 26 8 Z"
        fill="#D4B8A0"
        opacity="0.6"
      />
    </svg>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Top accent: very thin beige/pale gold strip */}
      <div className="h-[2px] w-full bg-wrf-top-strip" />

      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white">
        <div className="mx-auto flex max-w-container items-center gap-4 px-4 py-4 sm:px-6 lg:gap-6">
          {/* Logo: WRF with woman silhouette + tagline */}
          <Link href="/" className="flex flex-col items-start shrink-0">
            <span className="relative inline-flex text-[2.25rem] font-bold leading-none tracking-tight sm:text-[2.5rem]">
              <WomanProfile />
              <span className="relative z-10 text-wrf-purple">W</span>
              <span className="relative z-10 text-wrf-coral">R</span>
              <span className="relative z-10 text-wrf-coral">F</span>
            </span>
            <span className="mt-0.5 text-[0.7rem] font-semibold text-wrf-black sm:text-[0.75rem]">
              Women&apos;s Rights First
            </span>
          </Link>

          {/* Nav links */}
          <nav
            className={`fixed right-0 top-0 h-screen w-[85%] max-w-[320px] border-l border-gray-100 bg-white shadow-xl transition-transform duration-200 z-[60] lg:static lg:h-auto lg:w-auto lg:max-w-none lg:border-0 lg:shadow-none lg:translate-x-0 ${
              menuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
            aria-label="Main navigation"
          >
            <ul className="flex flex-col gap-0 pt-20 pl-6 pr-6 lg:flex-row lg:items-center lg:gap-8 lg:pt-0 lg:pl-0 lg:pr-0">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="block border-b border-gray-100 py-4 text-sm font-bold uppercase tracking-wider text-wrf-black hover:text-wrf-purple lg:border-0 lg:py-0 lg:text-[0.8125rem]"
                    onClick={() => setMenuOpen(false)}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Overlay for mobile menu */}
          {menuOpen && (
            <div
              className="fixed inset-0 bg-black/20 z-[55] lg:hidden"
              onClick={() => setMenuOpen(false)}
            />
          )}

          {/* Search bar */}
          <div className="ml-auto hidden items-stretch lg:flex">
            <input
              type="search"
              placeholder="Search..."
              aria-label="Search"
              className="w-[160px] border border-gray-300 bg-white px-3 py-2 text-sm text-wrf-black placeholder:text-gray-400 focus:border-wrf-purple focus:outline-none"
            />
            <button
              type="submit"
              className="flex h-[40px] w-[44px] items-center justify-center bg-wrf-purple text-white hover:bg-wrf-purple-dark"
              aria-label="Search"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </button>
          </div>

          {/* Donate button */}
          <Link
            href="#footer"
            className="hidden rounded bg-wrf-coral px-5 py-2.5 text-sm font-bold uppercase tracking-wider text-white hover:bg-wrf-coral-light sm:inline-block"
          >
            DONATE NOW
          </Link>

          {/* Hamburger menu - visible on all sizes */}
          <button
            type="button"
            className="flex h-11 w-11 shrink-0 flex-col items-center justify-center gap-[5px] bg-wrf-black text-white"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="h-[2px] w-5 bg-current" />
            <span className="h-[2px] w-5 bg-current" />
            <span className="h-[2px] w-5 bg-current" />
          </button>
        </div>
      </header>
    </>
  );
}
