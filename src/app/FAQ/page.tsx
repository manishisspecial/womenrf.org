'use client';

import { useState, useMemo } from 'react';

const HERO_BG =
  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1920&q=80';

const CATEGORIES = [
  { id: 'all', label: 'All Categories', count: 6, bg: 'bg-wrf-black' },
  { id: 'general', label: 'General Questions', count: 2, bg: 'bg-wrf-purple' },
  { id: 'programs', label: 'Programs & Services', count: 1, bg: 'bg-wrf-coral' },
  { id: 'involved', label: 'Getting Involved', count: 1, bg: 'bg-wrf-footer-mauve' },
  { id: 'contact', label: 'Contact & Support', count: 2, bg: 'bg-wrf-black' },
] as const;

type CategoryId = (typeof CATEGORIES)[number]['id'];

const FAQ_ITEMS: Array<{
  id: string;
  question: string;
  answer: string;
  category: CategoryId;
  categoryLabel: string;
}> = [
  {
    id: '1',
    question: 'How do I get in touch with WRF?',
    answer:
      'You can reach us via the Contact page on this website, by email at info@womenrf.org, or through our social media channels. We aim to respond to all inquiries within 2–3 business days.',
    category: 'contact',
    categoryLabel: 'Contact & Support',
  },
  {
    id: '2',
    question: "Can I make a donation to support WRF's work?",
    answer:
      'Yes. Donations can be made securely through our Donate page. We accept one-time and recurring gifts. Your support funds our programs for Afghan women and girls, including legal aid, education, and advocacy.',
    category: 'contact',
    categoryLabel: 'Contact & Support',
  },
  {
    id: '3',
    question: 'What is Women\'s Rights First (WRF)?',
    answer:
      "Women's Rights First is an organization dedicated to advancing the rights and dignity of Afghan women and girls. We provide legal support, education, and advocacy, guided by lived experience and a commitment to justice and freedom.",
    category: 'general',
    categoryLabel: 'General Questions',
  },
  {
    id: '4',
    question: 'Where does WRF operate?',
    answer:
      'WRF has operations in Canada and Europe, and we work with partners and beneficiaries in multiple countries. We also run digital programs to reach women in areas where we do not have a physical presence.',
    category: 'general',
    categoryLabel: 'General Questions',
  },
  {
    id: '5',
    question: 'What programs and services does WRF offer?',
    answer:
      'We offer legal aid and referral services, education and skills training, leadership development, psychosocial support, and advocacy and policy work. Program availability may vary by region.',
    category: 'programs',
    categoryLabel: 'Programs & Services',
  },
  {
    id: '6',
    question: 'How can I get involved with WRF?',
    answer:
      'You can volunteer, apply for open positions via our Vacancies page, become a partner, share our work on social media, or donate. Visit our Get Involved section on the About page or the Vacancies and Donate pages for more details.',
    category: 'involved',
    categoryLabel: 'Getting Involved',
  },
];

function ChevronDown({ className }: { className?: string }) {
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
      className={className}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function SearchIcon({ className }: { className?: string }) {
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
      className={className}
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

export default function FAQPage() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<CategoryId>('all');
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0]?.id ?? null);

  const filtered = useMemo(() => {
    let list = FAQ_ITEMS;
    if (category !== 'all') list = list.filter((item) => item.category === category);
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      list = list.filter(
        (item) =>
          item.question.toLowerCase().includes(q) ||
          item.answer.toLowerCase().includes(q)
      );
    }
    return list;
  }, [category, search]);

  return (
    <div className="bg-white">
      {/* Hero */}
      <section
        className="relative overflow-hidden bg-cover bg-center py-20 md:py-32"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      >
        <div className="absolute inset-0 bg-black/50" aria-hidden />
        <div className="hidden md:block absolute top-0 right-0 h-full w-2/5 bg-cover bg-center opacity-90" style={{ clipPath: 'polygon(0% 100%, 100% 0%, 100% 100%)', backgroundImage: `url(${HERO_BG})` }} />
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-left sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="bg-wrf-purple px-8 py-6">
              <h1 className="mb-4 text-4xl font-bold text-white lg:text-5xl">
                Frequently asked question
              </h1>
              <p className="text-xl leading-relaxed text-white/90">
                Find answers to the most common questions about our programs, services, and how we support women&apos;s rights.
              </p>
            </div>
            <form
              className="mt-8"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="flex">
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search for answers..."
                  className="h-14 flex-grow rounded-none border-2 border-transparent bg-white px-4 text-lg text-wrf-black placeholder:text-wrf-gray-text focus:border-wrf-coral focus:outline-none"
                />
                <button
                  type="submit"
                  className="inline-flex h-14 items-center justify-center rounded-none border-2 border-wrf-coral bg-wrf-coral px-8 font-semibold text-white transition-colors hover:bg-wrf-coral-light focus:outline-none focus:ring-2 focus:ring-offset-2"
                >
                  <SearchIcon className="mr-2 h-5 w-5" />
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ content */}
      <div className="bg-gray-50 py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12">
            {/* Sidebar - desktop */}
            <aside className="hidden lg:block lg:col-span-3">
              <nav className="sticky top-32">
                <h3 className="mb-4 text-xl font-bold text-wrf-black">
                  Categories
                </h3>
                <div className="flex flex-col space-y-2">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setCategory(cat.id)}
                      className={`w-full rounded-none px-4 py-3 text-left font-medium transition-none text-white ${cat.bg} ${category === cat.id ? 'ring-2 ring-white ring-inset' : ''}`}
                    >
                      {cat.label} ({cat.id === 'all' ? FAQ_ITEMS.length : FAQ_ITEMS.filter((f) => f.category === cat.id).length})
                    </button>
                  ))}
                </div>
              </nav>
            </aside>

            <main className="lg:col-span-9">
              {/* Mobile category pills */}
              <div className="mb-8 flex flex-wrap gap-3 lg:hidden">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setCategory(cat.id)}
                    className={`rounded-none px-4 py-3 font-medium text-white transition-none ${cat.bg} ${category === cat.id ? 'ring-2 ring-white ring-inset' : ''}`}
                  >
                    {cat.label} ({cat.id === 'all' ? FAQ_ITEMS.length : FAQ_ITEMS.filter((f) => f.category === cat.id).length})
                  </button>
                ))}
              </div>

              <div className="space-y-4">
                {filtered.length === 0 ? (
                  <div className="rounded-none bg-white p-8 shadow-md">
                    <p className="text-wrf-gray-text">No questions match your search or category.</p>
                  </div>
                ) : (
                  filtered.map((item) => {
                    const isOpen = openId === item.id;
                    return (
                      <div
                        key={item.id}
                        className="overflow-hidden rounded-none bg-white shadow-md"
                      >
                        <button
                          type="button"
                          onClick={() => setOpenId(isOpen ? null : item.id)}
                          className="w-full bg-wrf-black p-6 text-left text-white transition-colors duration-200 hover:bg-wrf-footer-dark"
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                              <h3 className="text-lg font-semibold leading-tight">
                                {item.question}
                              </h3>
                              <span className="mt-2 inline-block rounded-none bg-white/20 px-3 py-1 text-xs font-medium uppercase tracking-wider">
                                {item.categoryLabel}
                              </span>
                            </div>
                            <div
                              className="mt-1 flex-shrink-0 transition-transform duration-200"
                              style={{ transform: isOpen ? 'rotate(180deg)' : 'none' }}
                            >
                              <ChevronDown className="h-6 w-6" />
                            </div>
                          </div>
                        </button>
                        {isOpen && (
                          <div className="border-t border-gray-200 bg-white p-6 text-wrf-black">
                            <p className="leading-relaxed">{item.answer}</p>
                          </div>
                        )}
                      </div>
                    );
                  })
                )}
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
