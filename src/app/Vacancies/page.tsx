'use client';

import { useState } from 'react';

const HERO_BG = 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&q=85';

export default function VacanciesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryOpen, setCategoryOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search logic can be wired later
  };

  return (
    <div className="bg-white">
      {/* Hero */}
      <section
        className="relative overflow-hidden bg-cover bg-center py-20 md:py-32"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      >
        <div className="absolute right-0 top-0 hidden h-full w-2/5 bg-cover bg-center md:block" style={{ clipPath: 'polygon(0% 100%, 100% 0%, 100% 100%)', backgroundImage: `url(${HERO_BG})` }} aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 text-left sm:px-6 lg:px-8">
          <div className="inline-block bg-wrf-black px-8 py-6">
            <h1 className="mb-4 text-4xl font-bold text-white lg:text-6xl">
              Join Our Team now
            </h1>
            <p className="max-w-3xl text-xl leading-relaxed text-white">
              Become a part of a passionate team dedicated to advancing women&apos;s rights globally. Explore our current openings and find your place at WRF.
            </p>
          </div>
        </div>
      </section>

      {/* Search & filter bar */}
      <section className="border-b bg-gray-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-4 md:grid-cols-5">
            <form onSubmit={handleSearch} className="flex md:col-span-3">
              <div className="relative flex-grow">
                <input
                  type="text"
                  id="search-query"
                  placeholder="e.g., Coordinator, Legal, Remote..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="h-14 w-full rounded-l-md border border-r-0 border-gray-300 bg-white pl-12 pr-10 focus:border-wrf-black focus:outline-none focus:ring-2 focus:ring-wrf-black/20 focus:ring-offset-0"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
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
                className="inline-flex h-14 items-center justify-center rounded-r-md bg-wrf-black px-8 font-semibold text-white transition-colors hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
              >
                Search
              </button>
            </form>
            <div className="md:col-span-2">
              <button
                type="button"
                role="combobox"
                aria-expanded={categoryOpen}
                aria-haspopup="listbox"
                onClick={() => setCategoryOpen(!categoryOpen)}
                className="flex h-14 w-full items-center justify-between rounded-none border border-gray-300 bg-white px-3 py-2 text-base focus:outline-none focus:ring-1 focus:ring-wrf-black"
              >
                <span className="mr-2 text-gray-500">Category:</span>
                <span className="flex-1 text-left">All Categories</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 opacity-50" aria-hidden>
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Vacancies list / empty state */}
      <section className="bg-white py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="py-16 text-center">
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
              className="mx-auto mb-4 h-16 w-16 text-gray-300"
            >
              <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              <rect width="20" height="14" x="2" y="6" rx="2" />
            </svg>
            <h2 className="text-xl font-semibold text-wrf-black">No Matching Vacancies</h2>
            <p className="mt-2 text-gray-500">Please try adjusting your search or filter criteria.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
