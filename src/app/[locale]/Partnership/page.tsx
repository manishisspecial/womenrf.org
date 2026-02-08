'use client';

import { useState } from 'react';
import { useTranslation } from '@/lib/TranslationContext';

function BenefitIcon({ name }: { name: string }) {
  const cls = 'mb-6 h-12 w-12';
  switch (name) {
    case 'trending':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cls}>
          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" />
        </svg>
      );
    case 'award':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cls}>
          <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
          <circle cx="12" cy="8" r="6" />
        </svg>
      );
    case 'users':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cls}>
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case 'globe':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cls}>
          <circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" />
        </svg>
      );
    default:
      return null;
  }
}

export default function PartnershipPage() {
  const { t } = useTranslation();
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    try {
      const form = e.currentTarget;
      const formData = {
        organization_name: (form.elements.namedItem('organization_name') as HTMLInputElement).value,
        contact_person: (form.elements.namedItem('contact_person') as HTMLInputElement).value,
        email: (form.elements.namedItem('email') as HTMLInputElement).value,
        phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
        partnership_type: (form.elements.namedItem('partnership_type') as HTMLSelectElement).value,
        organization_size: (form.elements.namedItem('organization_size') as HTMLSelectElement).value,
        message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
      };
      await fetch('/api/submit/partnership-inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      setFormStatus('success');
      form.reset();
    } catch {
      setFormStatus('error');
    }
  };

  const NAV_LINKS = [
    { label: t('partnership.nav.benefits'), id: 'why-partner' },
    { label: t('partnership.nav.types'), id: 'partnership-types' },
    { label: t('partnership.nav.success'), id: 'success-stories' },
    { label: t('partnership.nav.process'), id: 'process' },
    { label: t('partnership.nav.contact'), id: 'contact' },
  ];

  const BENEFITS = [
    {
      title: t('partnership.why.impact'),
      description: t('partnership.why.impactDesc'),
      bg: 'bg-wrf-purple',
      icon: 'trending',
    },
    {
      title: t('partnership.why.brand'),
      description: t('partnership.why.brandDesc'),
      bg: 'bg-wrf-coral',
      icon: 'award',
    },
    {
      title: t('partnership.why.engage'),
      description: t('partnership.why.engageDesc'),
      bg: 'bg-wrf-footer-mauve',
      icon: 'users',
    },
    {
      title: t('partnership.why.reach'),
      description: t('partnership.why.reachDesc'),
      bg: 'bg-wrf-black',
      icon: 'globe',
    },
  ];

  const PROCESS_STEPS = [
    { title: t('partnership.process.step1'), description: t('partnership.process.step1.desc') },
    { title: t('partnership.process.step2'), description: t('partnership.process.step2.desc') },
    { title: t('partnership.process.step3'), description: t('partnership.process.step3.desc') },
    { title: t('partnership.process.step4'), description: t('partnership.process.step4.desc') },
  ];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-white">
      {/* Hero - gradient background, no image */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div
          className="absolute inset-0 bg-gradient-to-br from-wrf-black via-wrf-purple to-wrf-coral"
          aria-hidden
        />
        <div className="absolute inset-0 bg-black/40" aria-hidden />
        <div className="hidden md:block absolute top-0 right-0 h-full w-2/5 bg-gradient-to-br from-wrf-purple/80 to-wrf-coral/80" style={{ clipPath: 'polygon(0% 100%, 100% 0%, 100% 100%)' }} />
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-left sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="bg-wrf-purple px-8 py-6">
              <h1 className="mb-4 text-4xl font-bold text-white lg:text-6xl">
                {t('partnership.hero.title')}
              </h1>
              <p className="text-xl leading-relaxed text-white/90">
                {t('partnership.hero.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nav strip */}
      <section className="border-b bg-gray-100 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-start gap-4">
            {NAV_LINKS.map((link, i) => (
              <button
                key={link.id}
                type="button"
                onClick={() => scrollTo(link.id)}
                className={`rounded-none px-6 py-3 text-base font-semibold text-white transition-none ${
                  i === 0 || i === 4 ? 'bg-wrf-purple' :
                  i === 1 ? 'bg-wrf-coral' :
                  i === 2 ? 'bg-wrf-footer-mauve' : 'bg-wrf-black'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner - Benefits */}
      <section id="why-partner" className="bg-white py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="mb-6 bg-wrf-purple p-8">
              <h2 className="mb-4 text-3xl font-bold text-white lg:text-4xl">
                {t('partnership.why.title')}
              </h2>
              <p className="text-xl leading-relaxed text-white/90">
                {t('partnership.why.description')}
              </p>
            </div>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {BENEFITS.map((b) => (
              <div key={b.icon} className={`${b.bg} p-8 text-white`}>
                <div className="flex h-full flex-col items-center text-center">
                  <BenefitIcon name={b.icon} />
                  <h3 className="mb-4 text-xl font-bold">{b.title}</h3>
                  <p className="leading-relaxed">{b.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section id="partnership-types" className="bg-gray-50 py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="mb-6 bg-wrf-purple p-8">
              <h2 className="mb-4 text-3xl font-bold text-white lg:text-4xl">
                {t('partnership.ways.title')}
              </h2>
              <p className="text-xl leading-relaxed text-white/90">
                {t('partnership.ways.description')}
              </p>
            </div>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Placeholder - HTML had empty grid; can add partnership type cards later */}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section id="success-stories" className="bg-gray-50 py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="mb-6 bg-wrf-purple p-8">
              <h2 className="mb-4 text-3xl font-bold text-white lg:text-4xl">
                {t('partnership.action.title')}
              </h2>
              <p className="text-xl leading-relaxed text-white/90">
                {t('partnership.action.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="bg-white py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div className="mb-6 bg-wrf-purple p-8">
              <h2 className="mb-4 text-3xl font-bold text-white lg:text-4xl">
                {t('partnership.process.title')}
              </h2>
              <p className="text-xl leading-relaxed text-white/90">
                {t('partnership.process.description')}
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute left-0 top-8 hidden h-0.5 w-full bg-gray-300 md:block" aria-hidden />
            <div className="relative flex flex-col justify-between gap-12 md:flex-row md:gap-8">
              {PROCESS_STEPS.map((step, i) => (
                <div key={i} className="relative flex flex-1 flex-col items-center text-center">
                  <div className="z-10 flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-wrf-purple text-2xl font-bold text-white shadow-lg">
                    {i + 1}
                  </div>
                  <div className="mt-4">
                    <h4 className="mb-2 text-xl font-bold text-wrf-black">{step.title}</h4>
                    <p className="text-sm leading-relaxed text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-gray-50 py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="mb-6 bg-wrf-purple p-8">
              <h2 className="mb-4 text-3xl font-bold text-white lg:text-4xl">
                {t('partnership.contact.title')}
              </h2>
              <p className="text-xl leading-relaxed text-white/90">
                {t('partnership.contact.description')}
              </p>
            </div>
          </div>
          <div className="grid items-stretch gap-8 md:grid-cols-12">
            <div className="flex flex-col justify-center bg-wrf-black p-8 text-white md:col-span-5">
              <h3 className="mb-6 text-2xl font-bold text-white">{t('partnership.contact.cta')}</h3>
              <p className="text-white/90">{t('partnership.contact.detail')}</p>
            </div>
            <div className="border border-gray-200 bg-white p-8 md:col-span-7">
              {formStatus === 'success' && (
                <div className="mb-6 bg-green-50 border border-green-200 p-4 text-green-800 text-sm">
                  {t('partnership.form.success') || 'Thank you! Your partnership inquiry has been submitted successfully.'}
                </div>
              )}
              {formStatus === 'error' && (
                <div className="mb-6 bg-red-50 border border-red-200 p-4 text-red-800 text-sm">
                  {t('partnership.form.error') || 'Something went wrong. Please try again.'}
                </div>
              )}
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="organization_name" className="text-sm font-medium">{t('partnership.form.orgName')} *</label>
                    <input
                      id="organization_name"
                      type="text"
                      required
                      className="mt-1 h-10 w-full rounded-none border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-wrf-coral focus:ring-offset-0"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact_person" className="text-sm font-medium">{t('partnership.form.contactPerson')} *</label>
                    <input
                      id="contact_person"
                      type="text"
                      required
                      className="mt-1 h-10 w-full rounded-none border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-wrf-coral focus:ring-offset-0"
                    />
                  </div>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="text-sm font-medium">{t('partnership.form.email')} *</label>
                    <input
                      id="email"
                      type="email"
                      required
                      className="mt-1 h-10 w-full rounded-none border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-wrf-coral focus:ring-offset-0"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="text-sm font-medium">{t('partnership.form.phone')}</label>
                    <input
                      id="phone"
                      type="tel"
                      className="mt-1 h-10 w-full rounded-none border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-wrf-coral focus:ring-offset-0"
                    />
                  </div>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="partnership_type" className="text-sm font-medium">{t('partnership.form.type')} *</label>
                    <select
                      id="partnership_type"
                      required
                      className="mt-1 h-10 w-full rounded-none border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-wrf-coral focus:ring-offset-0"
                    >
                      <option value="">{t('partnership.form.typePlaceholder')}</option>
                      <option value="Corporate">{t('partnership.form.corporate')}</option>
                      <option value="NGO">{t('partnership.form.ngo')}</option>
                      <option value="Government">{t('partnership.form.government')}</option>
                      <option value="Academic">{t('partnership.form.academic')}</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="organization_size" className="text-sm font-medium">{t('partnership.form.orgSize')}</label>
                    <select
                      id="organization_size"
                      className="mt-1 h-10 w-full rounded-none border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-wrf-coral focus:ring-offset-0"
                    >
                      <option value="">{t('partnership.form.sizePlaceholder')}</option>
                      <option value="Small (1-50)">{t('partnership.form.small')}</option>
                      <option value="Medium (51-250)">{t('partnership.form.medium')}</option>
                      <option value="Large (250+)">{t('partnership.form.large')}</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="text-sm font-medium">{t('partnership.form.message')} *</label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    placeholder={t('partnership.form.messagePlaceholder')}
                    className="mt-1 w-full rounded-none border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-wrf-coral focus:ring-offset-0"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="inline-flex w-full items-center justify-center rounded-none bg-wrf-coral py-3 text-base font-semibold text-white transition-colors hover:bg-wrf-coral-light disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {formStatus === 'submitting' ? (
                      <span className="inline-flex items-center gap-2">
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
                        {t('partnership.form.submitting') || 'Submitting...'}
                      </span>
                    ) : (
                      <>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 inline h-4 w-4">
                          <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
                          <path d="m21.854 2.147-10.94 10.939" />
                        </svg>
                        {t('partnership.form.submit')}
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
