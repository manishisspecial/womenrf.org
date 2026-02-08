'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from '@/lib/TranslationContext';

export default function ExploreImpact() {
  const { t } = useTranslation();

  const [adminData, setAdminData] = useState<Record<string, any> | null>(null);
  useEffect(() => {
    fetch('/api/data/homepage', { cache: 'no-store' })
      .then(r => r.json())
      .then(d => { if (d && Object.keys(d).length > 0) setAdminData(d); })
      .catch(() => {});
  }, []);

  return (
    <section id="impact" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-left">
          <div className="mb-4 inline-block bg-wrf-black px-8 py-6">
            <h2 className="text-4xl font-bold text-white">
              {adminData?.pagesShowcaseTitle || t('exploreImpact.title')}
            </h2>
          </div>
          <p className="text-lg text-gray-600">
            {adminData?.pagesShowcaseSubtitle || t('exploreImpact.description')}
          </p>
        </div>
        <div className="grid items-stretch gap-8 lg:grid-cols-5">
          <div className="relative flex flex-col justify-center bg-wrf-coral p-10 lg:col-span-2">
            <div className="mb-8">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={adminData?.pagesShowcaseQuoteAuthorImage || "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=256&h=256&fit=crop&crop=face"}
                alt=""
                className="mb-6 h-32 w-32 object-cover"
              />
            </div>
            <div className="relative">
              <div
                className="absolute -left-6 -top-6 select-none text-8xl font-bold leading-none text-white/90"
                aria-hidden
              >
                &ldquo;
              </div>
              <blockquote className="relative z-10 mb-6 pl-8 text-2xl italic leading-relaxed text-white">
                {adminData?.pagesShowcaseQuote || t('exploreImpact.quote')}
              </blockquote>
              <div
                className="absolute -bottom-2 right-0 select-none text-8xl font-bold leading-none text-white/90"
                aria-hidden
              >
                &rdquo;
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
