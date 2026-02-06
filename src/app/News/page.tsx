'use client';

import { useState } from 'react';

const CATEGORIES = [
  { id: 'all', label: 'All Posts', count: 0, active: true, bgClass: 'bg-wrf-black border-wrf-black', icon: null },
  { id: 'news', label: 'News', count: 0, active: false, bgClass: 'bg-wrf-purple border-transparent', icon: 'file-text' },
  { id: 'announcement', label: 'Announcement', count: 0, active: false, bgClass: 'bg-wrf-coral border-transparent', icon: 'megaphone' },
  { id: 'event', label: 'Event', count: 0, active: false, bgClass: 'bg-wrf-footer-mauve border-transparent', icon: 'calendar' },
  { id: 'statement', label: 'Statement', count: 0, active: false, bgClass: 'bg-wrf-black border-transparent', icon: 'briefcase' },
];

function CategoryIcon({ name }: { name: string }) {
  const paths: Record<string, React.ReactNode> = {
    'file-text': (
      <>
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
        <path d="M10 9H8" />
        <path d="M16 13H8" />
        <path d="M16 17H8" />
      </>
    ),
    megaphone: (
      <>
        <path d="m3 11 18-5v12L3 14v-3z" />
        <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
      </>
    ),
    calendar: (
      <>
        <path d="M8 2v4" />
        <path d="M16 2v4" />
        <rect width="18" height="18" x="3" y="4" rx="2" />
        <path d="M3 10h18" />
      </>
    ),
    briefcase: (
      <>
        <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        <rect width="20" height="14" x="2" y="6" rx="2" />
      </>
    ),
  };
  const path = paths[name];
  if (!path) return null;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
      {path}
    </svg>
  );
}

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search logic can be wired later
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Page header */}
        <div className="mb-8 text-left">
          <h1 className="mb-4 text-4xl font-bold text-wrf-black lg:text-5xl">
            WRF Demands Real Peace Beyond Words for Afghan Women and Girl&apos;s at WPS High-Level Event
          </h1>
          <p className="max-w-3xl text-lg text-gray-600">
            On behalf of Women&apos;s Rights First, our Vice-President Hanifa Girowal spoke as a panelist at a high-level Women, Peace and Security event co-hosted by Mina&apos;s List, WPHF, the Georgetown Institute for Women, Peace and Security (GIWPS), the Permanent Missions of Greece and Panama, and UN Women. The discussion focused on centering Afghan women&apos;s voices in global peace and accountability efforts.
          </p>
        </div>

        {/* Search form */}
        <div className="relative mb-12">
          <form onSubmit={handleSearch} className="flex max-w-2xl">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search within these posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-14 w-full rounded-none border-2 border-gray-300 bg-white pl-12 pr-4 text-lg focus:border-wrf-black focus:outline-none focus:ring-2 focus:ring-wrf-black/20 focus:ring-offset-0"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </div>
            <button
              type="submit"
              className="inline-flex h-14 items-center justify-center rounded-none border-2 border-wrf-purple bg-wrf-purple px-8 font-semibold text-white transition-colors hover:bg-wrf-purple-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-2">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              Search
            </button>
          </form>
        </div>

        {/* Category filters */}
        <div className="mb-12 flex flex-wrap justify-start gap-4">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`cursor-pointer rounded-none border-2 font-medium shadow-md transition-all duration-300 hover:scale-105 ${
                  isActive
                    ? 'scale-105 border-wrf-black bg-wrf-black text-white shadow-lg'
                    : `border-transparent text-white ${cat.bgClass}`
                }`}
              >
                <div className="flex items-center gap-4 px-6 py-4">
                  {cat.icon ? <CategoryIcon name={cat.icon} /> : <span className="text-xl font-bold">{cat.count}</span>}
                  {cat.icon && <span className="text-xl font-bold">{cat.count}</span>}
                  <span className="text-sm font-medium uppercase tracking-wider">{cat.label}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Empty state */}
        <div className="py-16 text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="mx-auto mb-4 h-16 w-16 text-gray-300"
          >
            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
            <path d="M14 2v4a2 2 0 0 0 2 2h4" />
            <path d="M10 9H8" />
            <path d="M16 13H8" />
            <path d="M16 17H8" />
          </svg>
          <h2 className="text-xl font-semibold text-wrf-black">No posts found</h2>
          <p className="mt-2 text-gray-500">No all posts available.</p>
        </div>
      </div>
    </div>
  );
}
