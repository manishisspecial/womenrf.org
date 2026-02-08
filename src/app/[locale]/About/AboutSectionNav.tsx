'use client';

import { useEffect, useState } from 'react';
import NavIcon from './NavIcon';

const NAV_LINKS = [
  { href: '#mission', label: 'Our Mission & History', icon: 'hand-heart' },
  { href: '#values', label: 'Our Core Values', icon: 'book-open' },
  { href: '#history', label: 'Our Journey', icon: 'milestone' },
  { href: '#impact', label: 'Our Impact in Numbers', icon: 'chart-column' },
  { href: '#team', label: 'Meet Our People', icon: 'users' },
];

function getHash() {
  if (typeof window === 'undefined') return '#mission';
  return window.location.hash || '#mission';
}

export default function AboutSectionNav() {
  const [activeHash, setActiveHash] = useState('#mission');

  useEffect(() => {
    setActiveHash(getHash());
    const onHashChange = () => setActiveHash(getHash());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return (
    <nav
      className="bg-gray-50 shadow-md py-4 border-b border-gray-200"
      aria-label="About page sections"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex -mx-4 justify-start overflow-x-auto whitespace-nowrap">
          {NAV_LINKS.map(({ href, label, icon }) => {
            const isActive = activeHash === href;
            return (
              <a
                key={href}
                href={href}
                className={`flex items-center gap-2 px-4 py-4 text-sm font-bold font-sans uppercase tracking-wider text-wrf-black transition-all duration-300 border-b-4 ${
                  isActive
                    ? 'border-gray-700'
                    : 'border-transparent'
                }`}
              >
                <NavIcon name={icon} />
                {label}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
