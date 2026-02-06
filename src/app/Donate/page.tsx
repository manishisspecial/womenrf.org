'use client';

import Link from 'next/link';
import { useState } from 'react';

const HERO_BG = 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1920&q=80';

const AMOUNTS = [25, 50, 100, 250];

type OtherWayItem = {
  title: string;
  bgClass: string;
  icon: string | null;
  href?: string;
};

const OTHER_WAYS: OtherWayItem[] = [
  { title: 'Contact us', bgClass: 'bg-wrf-black', icon: null, href: '/Contact' },
  { title: 'Write a personal check', bgClass: 'bg-wrf-black', icon: 'mail' },
  { title: 'Leave a legacy gift', bgClass: 'bg-wrf-purple', icon: 'gift' },
  { title: 'Donate your stocks', bgClass: 'bg-wrf-coral', icon: 'trending-up' },
  { title: 'Donate by phone', bgClass: 'bg-wrf-footer-mauve', icon: 'phone' },
];

function OtherWayIcon({ name }: { name: string }) {
  const paths: Record<string, React.ReactNode> = {
    mail: (
      <>
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </>
    ),
    gift: (
      <>
        <rect x="3" y="8" width="18" height="4" rx="1" />
        <path d="M12 8v13" />
        <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
        <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" />
      </>
    ),
    'trending-up': (
      <>
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </>
    ),
    phone: (
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    ),
  };
  const path = paths[name];
  if (!path) return null;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
      {path}
    </svg>
  );
}

export default function DonatePage() {
  const [tab, setTab] = useState<'one-time' | 'monthly'>('one-time');
  const [amount, setAmount] = useState<number | null>(50);
  const [otherAmount, setOtherAmount] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div className="bg-white">
      {/* Hero */}
      <section
        className="relative overflow-hidden bg-cover bg-center py-20 md:py-32"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      >
        <div className="absolute inset-0 bg-black/60" aria-hidden />
        <div className="absolute right-0 top-0 hidden h-full w-2/5 bg-cover bg-center md:block" style={{ clipPath: 'polygon(0% 100%, 100% 0%, 100% 100%)', backgroundImage: `url(${HERO_BG})` }} aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 text-left sm:px-6 lg:px-8">
          <div className="inline-block bg-wrf-black px-8 py-6">
            <h1 className="mb-4 text-4xl font-bold text-white lg:text-6xl">
              Support Our Mission
            </h1>
            <p className="max-w-3xl text-xl leading-relaxed text-white/90">
              Your generous support enables Women&apos;s Rights First to continue our vital work in defending the rights, dignity, and freedom of Afghan women and girls.
            </p>
          </div>
        </div>
      </section>

      {/* Make a Secure Donation */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-left">
            <div className="inline-block bg-wrf-coral px-8 py-6">
              <h2 className="text-3xl font-bold text-white">Make a Secure Donation</h2>
            </div>
            <p className="mt-4 text-lg text-gray-600">
              Choose your donation type and amount below. All transactions are processed securely through PayPal.
            </p>
          </div>

          <div className="bg-white p-8 shadow-xl">
            {/* Tabs */}
            <div role="tablist" className="mb-8 grid w-full grid-cols-2 gap-1 rounded-none">
              <button
                type="button"
                role="tab"
                aria-selected={tab === 'one-time'}
                onClick={() => setTab('one-time')}
                className={`inline-flex items-center justify-center rounded-none px-8 py-6 text-lg font-semibold transition-all ${
                  tab === 'one-time' ? 'bg-white text-wrf-black shadow-lg' : 'bg-wrf-coral text-white'
                }`}
              >
                One-Time Donation
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={tab === 'monthly'}
                onClick={() => setTab('monthly')}
                className={`inline-flex items-center justify-center rounded-none px-8 py-6 text-lg font-semibold transition-all ${
                  tab === 'monthly' ? 'bg-white text-wrf-black shadow-lg' : 'bg-wrf-purple text-white'
                }`}
              >
                Monthly Giving
              </button>
            </div>

            {/* One-Time panel */}
            {tab === 'one-time' && (
              <div className="space-y-6" role="tabpanel">
                <div className="border-l-4 border-wrf-purple bg-gray-50 p-6">
                  <h3 className="mb-2 text-lg font-semibold text-wrf-purple">One-Time Support</h3>
                  <p className="text-gray-700">Make an immediate impact with a one-time donation.</p>
                </div>

                <div>
                  <label className="text-lg font-bold">Choose an Amount (CAD)</label>
                  <div className="mt-2 grid grid-cols-2 gap-3 md:grid-cols-5">
                    {AMOUNTS.map((value) => (
                      <button
                        key={value}
                        type="button"
                        onClick={() => setAmount(value)}
                        className={`inline-flex h-16 items-center justify-center rounded-none text-xl font-medium transition-all ${
                          amount === value
                            ? 'bg-wrf-purple text-white'
                            : 'bg-gray-100 text-wrf-black hover:bg-wrf-coral hover:text-white'
                        }`}
                      >
                        ${value}
                      </button>
                    ))}
                    <input
                      type="number"
                      placeholder="Other"
                      value={otherAmount}
                      onChange={(e) => {
                        setOtherAmount(e.target.value);
                        setAmount(null);
                      }}
                      className="h-16 rounded-none border-2 border-gray-300 text-center text-xl focus:border-wrf-purple focus:outline-none focus:ring-2 focus:ring-wrf-purple/20"
                    />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="donor-name" className="text-sm font-medium">
                      Full Name
                    </label>
                    <input
                      id="donor-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="mt-1 h-10 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-wrf-purple focus:outline-none focus:ring-2 focus:ring-wrf-purple/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="donor-email" className="text-sm font-medium">
                      Email Address
                    </label>
                    <input
                      id="donor-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="mt-1 h-10 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-wrf-purple focus:outline-none focus:ring-2 focus:ring-wrf-purple/20"
                    />
                  </div>
                </div>

                <div className="pt-4">
                  <div className="min-h-[120px] rounded border-2 border-dashed border-gray-200 bg-gray-50/50 p-6 text-center text-gray-500">
                    PayPal Donate button will appear here. Integrate with your PayPal client ID to enable secure donations.
                  </div>
                </div>
              </div>
            )}

            {/* Monthly panel */}
            {tab === 'monthly' && (
              <div className="space-y-6" role="tabpanel">
                <div className="border-l-4 border-wrf-coral bg-gray-50 p-6">
                  <h3 className="mb-2 text-lg font-semibold text-wrf-coral">Monthly Giving</h3>
                  <p className="text-gray-700">Support our mission with a recurring monthly donation.</p>
                </div>
                <div className="min-h-[120px] rounded border-2 border-dashed border-gray-200 bg-gray-50/50 p-6 text-center text-gray-500">
                  Monthly donation options and PayPal subscription button can be integrated here.
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Other Ways to Give */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div className="text-left">
              <div className="mb-6 inline-block bg-wrf-coral p-4">
                <h2 className="text-3xl font-bold text-white">Other Ways to Give</h2>
              </div>
              <p className="text-lg leading-relaxed text-gray-700">
                Beyond online donations, there are many meaningful ways to support our mission and create lasting impact.
              </p>
            </div>
            <div className="space-y-3">
              {OTHER_WAYS.map((item) => (
                <div key={item.title} className={`overflow-hidden shadow-md ${item.bgClass}`}>
                  {item.href ? (
                    <Link href={item.href} className="block w-full p-6 text-left text-white transition-none">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          {item.icon && <OtherWayIcon name={item.icon} />}
                          <h3 className="text-xl font-bold">{item.title}</h3>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </div>
                    </Link>
                  ) : (
                    <button type="button" className="w-full p-6 text-left text-white transition-none">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          {item.icon && <OtherWayIcon name={item.icon} />}
                          <h3 className="text-xl font-bold">{item.title}</h3>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6 transition-transform duration-300">
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </div>
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
