'use client';

import Link from 'next/link';

const HERO_BG =
  'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1920&q=80';

const SOCIAL_LINKS = [
  { href: 'https://www.facebook.com', label: 'Facebook', icon: 'facebook' },
  { href: 'https://x.com/women_s24642', label: 'X (Twitter)', icon: 'twitter' },
  { href: 'https://www.instagram.com/womensrightsfirst/', label: 'Instagram', icon: 'instagram' },
  { href: 'https://www.linkedin.com/company/women-s-rights-first-wrf', label: 'LinkedIn', icon: 'linkedin' },
];

const QUOTE_IMAGE = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop&crop=face';

function SocialIcon({ name }: { name: string }) {
  const cls = 'h-6 w-6';
  switch (name) {
    case 'facebook':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cls}>
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      );
    case 'twitter':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cls}>
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
      );
    case 'instagram':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cls}>
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cls}>
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      );
    default:
      return null;
  }
}

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section
        className="relative overflow-hidden bg-cover bg-center py-20 md:py-32"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      >
        <div className="absolute inset-0 bg-black/60" aria-hidden />
        <div className="hidden md:block absolute top-0 right-0 h-full w-2/5 bg-cover bg-center opacity-90" style={{ clipPath: 'polygon(0% 100%, 100% 0%, 100% 100%)', backgroundImage: `url(${HERO_BG})` }} />
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-left sm:px-6 lg:px-8">
          <div className="inline-block bg-wrf-purple px-8 py-6">
            <h1 className="mb-4 text-4xl font-bold text-white lg:text-6xl">
              Get in touch with us
            </h1>
            <p className="max-w-3xl text-xl leading-relaxed text-white/90">
              Connect with the Afghan women legal experts, human rights defenders, and visionary leaders driving our mission with courage, expertise, and unwavering commitment to justice.
            </p>
          </div>
        </div>
      </section>

      {/* Quote section - desktop only */}
      <section className="hidden bg-gray-50 py-20 lg:block">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-wrf-black p-8">
            <div className="grid min-h-[320px] items-center gap-0 lg:grid-cols-3">
              <div className="flex flex-col justify-center pr-8 text-white lg:col-span-2">
                <div className="relative">
                  <span className="-mb-2 block text-6xl font-serif font-bold text-wrf-coral">&quot;</span>
                  <blockquote className="ml-8 mb-2 text-xl leading-relaxed">
                    Afghan women are not voiceless. They are deliberately silenced. At Women&apos;s Rights First, our work is to make the world listen and to ensure that silence is never mistaken for surrender.
                  </blockquote>
                  <div className="-mt-2 text-right">
                    <span className="block text-6xl font-serif font-bold text-wrf-coral">&quot;</span>
                  </div>
                </div>
                <div className="ml-8 mt-4 bg-wrf-coral p-4">
                  <p className="text-lg font-bold text-white">Sanga Siddiqi</p>
                  <p className="font-body text-white/90">Co-Founder and Vice President</p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -left-8 top-1/2 h-0.5 w-8 -translate-y-1/2 bg-wrf-coral" aria-hidden />
                <div className="bg-wrf-coral p-2">
                  <img
                    src={QUOTE_IMAGE}
                    alt="Sanga Siddiqi"
                    className="h-64 w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact cards */}
      <section className="bg-white py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Our Location */}
            <div className="flex h-80 flex-col justify-center bg-wrf-black p-8 text-white">
              <div className="text-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-6 h-12 w-12">
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <h3 className="mb-6 text-xl font-bold">Our Location</h3>
                <div className="space-y-4 font-body">
                  <p className="text-sm leading-relaxed">
                    915 Elmsmere Rd<br />
                    Ottawa, ON K1J 8H8
                  </p>
                  <div className="border-t border-white/20 pt-4">
                    <div className="mb-2 flex items-center justify-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                      <span className="text-sm font-medium">Email Us</span>
                    </div>
                    <a href="mailto:info@womenrf.org" className="block text-sm transition-colors hover:text-wrf-coral">
                      info@womenrf.org
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Call or Message */}
            <div className="flex h-80 flex-col justify-center bg-wrf-purple p-8 text-white">
              <div className="text-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-6 h-12 w-12">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <h3 className="mb-6 text-xl font-bold">Call or Message</h3>
                <div className="space-y-4 font-body">
                  <p className="text-sm">+31 6 24578072</p>
                  <div className="space-y-3 pt-4">
                    <a
                      href="tel:+31624578072"
                      className="inline-flex w-full items-center justify-center gap-1 rounded-none border border-white/30 bg-white/20 py-2 text-sm font-medium text-white transition-colors hover:bg-white/30"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-2 h-4 w-4">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                      Call Us
                    </a>
                    <a
                      href="https://wa.me/31624578072"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center gap-1 rounded-none bg-green-600 py-2 text-sm font-medium text-white transition-colors hover:bg-green-700"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-2 h-4 w-4">
                        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                      </svg>
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Need Answers? */}
            <div className="flex h-80 flex-col justify-center bg-wrf-coral p-8 text-white">
              <div className="text-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-6 h-12 w-12">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                  <path d="M12 17h.01" />
                </svg>
                <h3 className="mb-6 text-xl font-bold">Need Answers?</h3>
                <div className="space-y-4 font-body">
                  <p className="text-sm leading-relaxed">
                    Your question might already have been answered. Please check our FAQ page.
                  </p>
                  <Link
                    href="/FAQ"
                    className="mt-6 inline-flex w-full items-center justify-center gap-1 rounded-none border border-white/30 bg-white/20 py-2 text-sm font-medium text-white transition-colors hover:bg-white/30"
                  >
                    FAQ page
                  </Link>
                </div>
              </div>
            </div>

            {/* Follow Us */}
            <div className="flex h-80 flex-col justify-center bg-wrf-footer-mauve p-8 text-white">
              <div className="text-center">
                <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-8 w-8">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </div>
                <h3 className="mb-6 text-xl font-bold">Follow Us</h3>
                <div className="space-y-4 font-body">
                  <p className="mb-6 text-sm leading-relaxed">Stay connected and follow our journey</p>
                  <div className="grid grid-cols-2 gap-4">
                    {SOCIAL_LINKS.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center bg-white/20 p-3 transition-colors hover:bg-white/30"
                        aria-label={s.label}
                      >
                        <SocialIcon name={s.icon} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
