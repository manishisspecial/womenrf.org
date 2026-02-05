'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const navLinks = [
  { href: '/About', label: 'WRF' },
  { href: '/News', label: 'News and updates' },
  { href: '/Vacancies', label: 'Vacancies' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="z-50 bg-white shadow-sm">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-32 items-center justify-between">
          {/* Logo - flex-shrink-0 */}
          <div className="shrink-0">
            <Link href="/Home">
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

          {/* Nav + Search + Donate + Hamburger - hidden lg:flex items-center space-x-8 */}
          <div className="hidden items-center gap-8 lg:flex">
            <nav className="flex items-center gap-6">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm font-bold uppercase tracking-wider text-[#1a1a1a] transition-colors hover:text-wrf-purple"
                >
                  {label}
                </Link>
              ))}
            </nav>

            {/* Search - w-64, relative wrapper, more space from nav */}
            <form className="ml-4 flex w-64 items-center lg:ml-8" role="search">
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                </button>
              </div>
            </form>

            <Link
              href="/Donate"
              className="inline-flex h-12 items-center justify-center whitespace-nowrap rounded-none bg-wrf-coral px-5 py-2 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-wrf-coral-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wrf-coral focus-visible:ring-offset-2"
            >
              Donate Now
            </Link>

            <button
              type="button"
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-none bg-wrf-black text-white transition-colors hover:opacity-90"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            >
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
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Mobile: hamburger only */}
          <div className="lg:hidden">
            <button
              type="button"
              className="flex h-12 w-12 items-center justify-center rounded-none bg-wrf-black text-white transition-colors hover:opacity-90"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            >
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
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div
          className="fixed inset-0 z-[55] bg-black/20 lg:hidden"
          onClick={() => setMenuOpen(false)}
          aria-hidden
        />
      )}

      {/* Mobile menu */}
      <nav
        className={`fixed right-0 top-0 z-[60] h-screen w-[85%] max-w-[320px] border-l border-gray-200 bg-white shadow-xl transition-transform duration-200 lg:hidden ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Mobile navigation"
      >
        <button
          type="button"
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
        <ul className="flex flex-col pt-16 pl-6 pr-6">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="block border-b border-gray-100 py-4 text-sm font-bold uppercase tracking-wider text-gray-800 hover:text-wrf-purple"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/Donate"
              className="block border-b border-gray-100 py-4 text-sm font-bold uppercase tracking-wider text-wrf-coral hover:text-wrf-coral-light"
              onClick={() => setMenuOpen(false)}
            >
              Donate Now
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
