'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense, useState } from 'react';

const PEACEBUILDING_HERO_BG =
  'http://miladjosofe46.sg-host.com/wp-content/uploads/2025/10/GettyImages-1232002648.jpg';
const PEACEBUILDING_HERO_OVERLAY =
  'http://miladjosofe45.sg-host.com/wp-content/uploads/2025/09/Element-2-03-scaled.png';
const PEACEBUILDING_HANIFA_IMAGE =
  'http://miladjosofe46.sg-host.com/wp-content/uploads/2025/10/IMG_3571.jpeg';

const PEACEBUILDING_NAV_SECTIONS = [
  { id: 'gallery', label: 'Peace in Action', icon: 'gallery' },
  { id: 'impact_metrics', label: 'Our Peace Impact', icon: 'chart' },
  { id: 'stories', label: 'Voices of Peace', icon: 'message' },
  { id: 'partners', label: 'Peace Partners', icon: 'users' },
  { id: 'resources', label: 'Peacebuilding Resources', icon: 'download' },
  { id: 'faq', label: 'Peacebuilding FAQ', icon: 'help' },
  { id: 'behind_scenes', label: 'Building Peace', icon: 'camera' },
  { id: 'map', label: 'Areas of Operation', icon: 'map' },
] as const;

const PEACEBUILDING_GALLERY_IMAGES = [
  'http://miladjosofe46.sg-host.com/wp-content/uploads/2025/10/781d8497-62e7-35f7-a01d-2a9c690e5fb3.jpg.webp',
  'http://miladjosofe46.sg-host.com/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-23-at-1.11.02-PM.jpeg',
  'http://miladjosofe46.sg-host.com/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-23-at-11.24.22-AM.jpeg',
  'http://miladjosofe46.sg-host.com/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-23-at-1.10.11-PM-1.jpeg',
  'http://miladjosofe46.sg-host.com/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-23-at-1.10.37-PM.jpeg',
  'http://miladjosofe46.sg-host.com/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-23-at-3.21.39-PM.jpeg',
];

const PEACEBUILDING_FAQ = [
  {
    question: 'How do you ensure neutrality in community dialogues?',
    answer:
      'We work with trained local facilitators who are selected for their respect across communities. All dialogues follow agreed ground rules focused on listening and shared goals. We do not take sides in local disputes and focus on process, not outcomes.',
  },
  {
    question: 'What makes your peacebuilding approach different?',
    answer:
      'We center women and youth as essential agents of peace, use trauma-informed methods, and combine dialogue with concrete community projects so that trust is built through action, not only conversation.',
  },
];

const OTHER_PROGRAMS = [
  {
    slug: 'legal-empowerment-international-accountability',
    title: 'Legal Empowerment & International Accountability',
    description:
      "Strengthening legal frameworks and accountability mechanisms to protect women's rights in Afghanistan and internationally.",
  },
  {
    slug: 'peacebuilding-social-cohesion',
    title: 'Peacebuilding and Social Cohesion',
    description:
      'Fostering dialogue, understanding, and unity across communities to build lasting peace and strengthen social bonds in conflict-affected regions.',
  },
  {
    slug: 'Digital-Transformation-and -Open -Gender -Data',
    title: 'Digital Transformation and Open Gender Data',
    description:
      "Women's Rights First leverages digital tools and open gender data to counter the erasure of Afghan women in real time.",
  },
  {
    slug: 'representation-advocacy',
    title: 'Representation and Advocacy',
    description:
      "Amplifying Afghan women's voices on national and international platforms, advocating for policy change and rights protection.",
  },
];

// Legal Empowerment program
const LEGAL_HERO_BG =
  'http://miladjosofe46.sg-host.com/wp-content/uploads/2025/10/Hearing-ICJ-South-Africa-versus-Israel-11-12-Jan-2024-Low-res.jpg';
const LEGAL_HERO_OVERLAY =
  'http://miladjosofe45.sg-host.com/wp-content/uploads/2025/09/Element-2-03-scaled.png';
const LEGAL_AISHA_IMAGE =
  'https://prod-img.telegraaf.nl/public/incoming/tzoqs6-a876493e-d77d-4880-8e6c-32b9fd1c.jpg/alternates/SIXTEEN_NINE_1200/a876493e-d77d-4880-8e6c-32b9fd1c.jpg';

const LEGAL_NAV_SECTIONS = [
  { id: 'images', label: 'Images', icon: 'gallery' },
  { id: 'impact_metrics', label: 'Our Impact', icon: 'chart' },
  { id: 'stories', label: 'Beneficiary Stories', icon: 'message' },
  { id: 'partners', label: 'Partners & Supporters', icon: 'users' },
  { id: 'resources', label: 'Downloadable Resources', icon: 'download' },
  { id: 'faq', label: 'Frequently Asked Questions', icon: 'help' },
  { id: 'behind_scenes', label: 'Behind the Scenes', icon: 'camera' },
  { id: 'map', label: 'Program Areas', icon: 'map' },
] as const;

const LEGAL_FAQ = [
  {
    question: 'How does international law protect Afghan women?',
    answer:
      "International human rights treaties, including CEDAW and ICCPR, obligate states to protect women's rights. We use these frameworks in advocacy and legal documentation to hold perpetrators accountable.",
  },
  {
    question: 'What legal avenues does WRF pursue for accountability?',
    answer:
      'We support submissions to UN bodies, engage with international courts where applicable, and work with partner organizations to document violations and advocate for justice.',
  },
];

// Digital Transformation and Open Gender Data program
const DIGITAL_SLUG = 'Digital-Transformation-and -Open -Gender -Data';
const DIGITAL_HERO_BG =
  'http://miladjosofe46.sg-host.com/wp-content/uploads/2025/10/freedom-of-movement-for-afghan-women-1920x1002-en.avif';
const DIGITAL_HERO_OVERLAY =
  'http://miladjosofe45.sg-host.com/wp-content/uploads/2025/09/Element-2-03-scaled.png';

const DIGITAL_NAV_SECTIONS = [
  { id: 'images', label: 'Gallery', icon: 'gallery' },
  { id: 'impact_metrics', label: 'Our Impact', icon: 'chart' },
  { id: 'stories', label: 'Beneficiary Stories', icon: 'message' },
  { id: 'partners', label: 'Partners & Supporters', icon: 'users' },
  { id: 'resources', label: 'Downloadable Resources', icon: 'download' },
  { id: 'faq', label: 'Frequently Asked Questions', icon: 'help' },
  { id: 'behind_scenes', label: 'Behind the Scenes', icon: 'camera' },
  { id: 'map', label: 'Program Areas', icon: 'map' },
] as const;

const DIGITAL_FAQ = [
  {
    question: 'How do you ensure safe learning environments?',
    answer:
      'We use secure, survivor-led documentation practices and partner with trusted local organizations. Learning spaces are established in safe locations with strict confidentiality protocols to protect participants.',
  },
];

// Representation and Advocacy program
const REPRESENTATION_HERO_BG =
  'http://miladjosofe46.sg-host.com/wp-content/uploads/2025/10/IMG_3600.jpg';
const REPRESENTATION_HERO_OVERLAY =
  'http://miladjosofe45.sg-host.com/wp-content/uploads/2025/09/Element-2-03-scaled.png';

const REPRESENTATION_NAV_SECTIONS = [
  { id: 'gallery', label: 'Gallery', icon: 'gallery' },
  { id: 'impact_metrics', label: 'Our Impact', icon: 'chart' },
  { id: 'stories', label: 'Beneficiary Stories', icon: 'message' },
  { id: 'partners', label: 'Partners & Supporters', icon: 'users' },
  { id: 'resources', label: 'Downloadable Resources', icon: 'download' },
  { id: 'faq', label: 'Frequently Asked Questions', icon: 'help' },
  { id: 'behind_scenes', label: 'Behind the Scenes', icon: 'camera' },
] as const;

const REPRESENTATION_GALLERY_IMAGES = [
  'http://miladjosofe46.sg-host.com/wp-content/uploads/2025/10/IMG_2239.jpeg',
  'http://miladjosofe46.sg-host.com/wp-content/uploads/2025/10/IMG_3599.jpg',
  'http://miladjosofe46.sg-host.com/wp-content/uploads/2025/10/IMG_3602.jpg',
  'http://miladjosofe46.sg-host.com/wp-content/uploads/2025/10/IMG_1314-scaled.jpg',
];

const REPRESENTATION_FAQ = [
  {
    question: 'How can I get involved in advocacy efforts?',
    answer:
      'You can support our advocacy by sharing our reports and statements, engaging with your representatives on Afghan women\'s rights, and connecting us with relevant forums or media. Contact us to join our coalition or volunteer.',
  },
  {
    question: 'What impact has your advocacy achieved?',
    answer:
      'Our advocacy has contributed to UN resolutions and reports referencing Afghan women\'s rights, influenced policy discussions in multiple capitals, and built a coalition of 100+ organizations. We have delivered 150+ policy briefings and participated in 50+ international meetings.',
  },
];

function Icon({ name }: { name: string }) {
  const cls = 'h-3 w-3 shrink-0';
  switch (name) {
    case 'gallery':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cls}>
          <rect width="18" height="14" x="3" y="3" rx="2" />
          <path d="M4 21h1" /><path d="M9 21h1" /><path d="M14 21h1" /><path d="M19 21h1" />
        </svg>
      );
    case 'chart':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cls}>
          <path d="M3 3v16a2 2 0 0 0 2 2h16" />
          <path d="M18 17V9" /><path d="M13 17V5" /><path d="M8 17v-3" />
        </svg>
      );
    case 'message':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cls}>
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      );
    case 'users':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cls}>
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case 'download':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cls}>
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" />
        </svg>
      );
    case 'help':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cls}>
          <circle cx="12" cy="12" r="10" />
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><path d="M12 17h.01" />
        </svg>
      );
    case 'camera':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cls}>
          <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
          <circle cx="12" cy="13" r="3" />
        </svg>
      );
    case 'map':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cls}>
          <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      );
    default:
      return null;
  }
}

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function LegalEmpowermentContent() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-gray-50">
      {/* Hero - bg-primary (black) */}
      <section
        className="relative bg-cover bg-center py-16 md:py-24"
        style={{ backgroundImage: `url(${LEGAL_HERO_BG})` }}
      >
        <div className="hidden md:block absolute top-0 right-0 h-full w-2/5 bg-cover bg-center" style={{ clipPath: 'polygon(0% 100%, 100% 0%, 100% 100%)', backgroundImage: `url(${LEGAL_HERO_OVERLAY})` }} />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="bg-wrf-black p-8 shadow-2xl">
              <h1 className="mb-4 text-3xl font-bold text-white lg:text-4xl">
                Legal Empowerment & International Accountability
              </h1>
              <p className="text-lg leading-relaxed text-white/90">
                Fighting for justice and legal protection for Afghan women through international advocacy and legal empowerment initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky nav */}
      <section className="sticky top-0 z-40 bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-start gap-2">
            {LEGAL_NAV_SECTIONS.map(({ id, label, icon }) => (
              <button
                key={id}
                type="button"
                onClick={() => scrollTo(id)}
                className="flex items-center gap-2 rounded-none bg-wrf-coral px-4 py-2 text-sm font-medium text-white shadow-md transition-shadow hover:shadow-lg"
              >
                <Icon name={icon} />
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="space-y-8 lg:col-span-8">
            {/* Images */}
            <div id="images" className="bg-white p-8 shadow-lg">
              <h2 className="mb-6 text-2xl font-bold text-wrf-black">Images</h2>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="aspect-video bg-wrf-gray-bg" aria-hidden />
                ))}
              </div>
            </div>

            {/* Introduction - bg-accent (coral) */}
            <div id="introduction" className="bg-wrf-coral p-8 shadow-lg">
              <h2 className="mb-6 text-2xl font-bold text-wrf-black">
                Defending Rights Through Legal Action
              </h2>
              <p className="text-base leading-relaxed text-wrf-black">
                Our Legal Empowerment program works tirelessly to ensure that Afghan women&apos;s rights are protected under international law. We advocate for policy changes, provide legal support, and work with international bodies to hold perpetrators accountable for violations of women&apos;s rights.
              </p>
            </div>

            {/* Quote block - bg-support-1 (footer mauve) */}
            <div className="relative overflow-hidden bg-wrf-footer-mauve p-8 shadow-lg">
              <div className="absolute left-0 top-0 h-full w-1 bg-wrf-coral" aria-hidden />
              <div className="grid items-center gap-6 md:grid-cols-4">
                <div className="md:col-span-1">
                  <div className="mx-auto h-20 w-20">
                    <img
                      src={LEGAL_AISHA_IMAGE}
                      alt="Aisha Khan"
                      className="h-full w-full rounded-full border-4 border-wrf-coral object-cover"
                    />
                  </div>
                </div>
                <div className="md:col-span-3">
                  <blockquote className="mb-4 text-lg italic text-white">
                    &quot;Justice is not a privilege, it is a right. We will not rest until every Afghan woman&apos;s voice is heard in the halls of power.&quot;
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="h-px w-8 bg-wrf-coral" />
                    <div>
                      <p className="font-bold text-white">Aisha Khan</p>
                      <p className="text-sm text-white/90">Lead Counsel, International Law</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main content */}
            <div id="main_content" className="bg-white p-8 shadow-lg">
              <div className="prose max-w-none text-wrf-black">
                <p>
                  Since the Taliban&apos;s return to power in August 2021, Afghan women have faced unprecedented restrictions on their fundamental rights. Our Legal Empowerment & International Accountability program addresses this crisis through a multi-pronged approach:
                </p>
                <h3 className="mt-6 text-xl font-semibold">Our Approach</h3>
                <ul className="list-disc space-y-2 pl-6">
                  <li><strong>International Advocacy:</strong> We work with UN bodies, international courts, and governments to ensure accountability for violations of women&apos;s rights.</li>
                  <li><strong>Legal Documentation:</strong> We systematically document human rights violations to build evidence for future legal proceedings.</li>
                  <li><strong>Policy Research:</strong> Our team produces comprehensive reports on the legal status of Afghan women.</li>
                  <li><strong>Capacity Building:</strong> We train legal professionals and activists on international human rights law.</li>
                </ul>
                <p className="mt-4">
                  Through partnerships with leading legal institutions worldwide, we&apos;re building a comprehensive case for international intervention and accountability.
                </p>
              </div>
            </div>

            {/* Impact metrics */}
            <div id="impact_metrics" className="bg-white p-8 shadow-lg">
              <h2 className="mb-6 text-2xl font-bold text-wrf-black">Our Impact</h2>
              <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
                {[
                  { value: '15', label: 'Legal cases filed internationally' },
                  { value: '500+', label: 'Documented violations' },
                  { value: '25', label: 'Partner legal organizations' },
                  { value: '12', label: 'Policy briefings delivered' },
                ].map((item) => (
                  <div key={item.label} className="bg-wrf-coral p-6 text-center text-white">
                    <div className="mb-2 text-3xl font-bold">{item.value}</div>
                    <div className="text-sm">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Program Areas - bg-secondary (purple) */}
            <div id="map" className="bg-white p-8 shadow-lg">
              <h2 className="mb-6 text-2xl font-bold text-wrf-black">Program Areas</h2>
              <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
                <div className="bg-wrf-purple p-3 text-center text-sm text-white shadow-sm">Mazar-i-Sharif</div>
              </div>
            </div>

            {/* Beneficiary Stories - bg-secondary */}
            <div id="stories" className="bg-white p-8 shadow-lg">
              <h2 className="mb-6 text-2xl font-bold text-wrf-black">Beneficiary Stories</h2>
              <div className="grid gap-6 lg:grid-cols-1">
                <div className="bg-wrf-purple p-8 text-white shadow-md">
                  <p className="mb-4 text-lg italic">
                    &quot;Through WRF&apos;s legal support, I was able to present my case to the UN Human Rights Council. Their expertise and advocacy gave voice to thousands of Afghan women who cannot speak for themselves.&quot;
                  </p>
                  <p className="font-bold">Fatima Ahmad</p>
                  <p className="text-sm">Human Rights Advocate</p>
                </div>
              </div>
            </div>

            {/* Partners & Supporters */}
            <div id="partners" className="bg-white p-8 shadow-lg">
              <h2 className="mb-6 text-2xl font-bold text-wrf-black">Partners & Supporters</h2>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                <div className="flex flex-col items-center justify-center border border-gray-200 p-4 shadow-sm">
                  <img
                    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                    alt="International Criminal Court"
                    className="mb-2 max-h-20 max-w-full object-contain"
                  />
                  <p className="text-center text-sm font-medium">International Criminal Court</p>
                </div>
              </div>
            </div>

            {/* Downloadable Resources */}
            <div id="resources" className="bg-white p-8 shadow-lg">
              <h2 className="mb-6 text-2xl font-bold text-wrf-black">Downloadable Resources</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between border border-gray-200 bg-gray-50 p-4 shadow-sm">
                  <span className="font-medium">Women&apos;s Rights Legal Framework Report 2024</span>
                </div>
              </div>
            </div>

            {/* Behind the Scenes */}
            <div id="behind_scenes" className="bg-white p-8 shadow-lg">
              <h2 className="mb-6 text-2xl font-bold text-wrf-black">Behind the Scenes</h2>
              <div className="space-y-6">
                <div className="border border-gray-200 p-4 shadow-sm">
                  <h3 className="mb-2 text-lg font-semibold text-wrf-black">Building Legal Cases</h3>
                  <p className="text-wrf-gray-text">Our team works with survivors and partners to compile evidence and prepare submissions for international mechanisms.</p>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div id="faq" className="bg-white p-8 shadow-lg">
              <h2 className="mb-6 text-2xl font-bold text-wrf-black">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {LEGAL_FAQ.map((item, index) => {
                  const isOpen = openFaqIndex === index;
                  return (
                    <div key={index} className="border border-gray-200 shadow-sm">
                      <button
                        type="button"
                        onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                        className="flex w-full items-center justify-between bg-white p-4 text-left transition-colors hover:bg-gray-50"
                      >
                        <span className="font-bold text-wrf-black">{item.question}</span>
                        <span className="transition-transform" style={{ transform: isOpen ? 'rotate(180deg)' : 'none' }}>
                          <ChevronDown className="h-5 w-5 text-gray-600" />
                        </span>
                      </button>
                      {isOpen && (
                        <div className="border-t border-gray-200 bg-gray-50 p-4 text-wrf-black">
                          {item.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Sidebar - Explore Other Programs (exclude current) */}
          <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              <div className="bg-wrf-footer-mauve p-6 shadow-lg">
                <h3 className="mb-6 border-b-2 border-white pb-2 text-xl font-bold text-white">
                  Explore Other Programs
                </h3>
                <div className="space-y-4">
                  {OTHER_PROGRAMS.filter((p) => p.slug !== 'legal-empowerment-international-accountability').map((prog) => (
                    <Link
                      key={prog.slug}
                      href={`/ProgramPage?slug=${encodeURIComponent(prog.slug)}`}
                      className="block bg-white p-4 transition-shadow hover:shadow-md"
                    >
                      <h4 className="mb-2 text-sm font-semibold text-wrf-black">{prog.title}</h4>
                      <p className="line-clamp-2 text-sm text-gray-600">{prog.description}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

function DigitalTransformationContent() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const introText =
    "Women's Rights First leverages digital tools and open gender data to counter the erasure of Afghan women in real time. Through secure, survivor-led documentation, we transform raw testimonies into verified data that informs international accountability mechanisms and policy responses. Our goal is to build an open, future-proof feminist data ecosystem that protects evidence, strengthens legal action, and ensures Afghan women remain visible, countable, and impossible to ignore.";

  return (
    <div className="bg-gray-50">
      {/* Hero - bg-secondary (purple) */}
      <section
        className="relative bg-cover bg-center py-16 md:py-24"
        style={{ backgroundImage: `url(${DIGITAL_HERO_BG})` }}
      >
        <div className="hidden md:block absolute top-0 right-0 h-full w-2/5 bg-cover bg-center" style={{ clipPath: 'polygon(0% 100%, 100% 0%, 100% 100%)', backgroundImage: `url(${DIGITAL_HERO_OVERLAY})` }} />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="bg-wrf-purple p-8 shadow-2xl">
              <h1 className="mb-4 text-3xl font-bold text-white lg:text-4xl">
                Digital Transformation and Open Gender Data
              </h1>
              <p className="text-lg leading-relaxed text-white/90">
                {introText}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky nav */}
      <section className="sticky top-0 z-40 bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-start gap-2">
            {DIGITAL_NAV_SECTIONS.map(({ id, label, icon }) => (
              <button
                key={id}
                type="button"
                onClick={() => scrollTo(id)}
                className="flex items-center gap-2 rounded-none bg-wrf-coral px-4 py-2 text-sm font-medium text-white shadow-md transition-shadow hover:shadow-lg"
              >
                <Icon name={icon} />
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="space-y-8 lg:col-span-8">
            {/* Gallery */}
            <div id="images" className="bg-white p-8 shadow-lg">
              <h2 className="mb-6 text-2xl font-bold text-wrf-black">Gallery</h2>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="aspect-video bg-wrf-gray-bg" aria-hidden />
                ))}
              </div>
            </div>

            {/* Introduction - bg-gray-50 */}
            <div id="introduction" className="bg-wrf-gray-bg p-8 shadow-lg">
              <h2 className="mb-6 text-2xl font-bold text-wrf-black">
                Digital Transformation and Open Gender Data
              </h2>
              <p className="text-base leading-relaxed text-wrf-black">
                {introText}
              </p>
            </div>

            {/* Impact metrics */}
            <div id="impact_metrics" className="bg-white p-8 shadow-lg">
              <h2 className="mb-6 text-2xl font-bold text-wrf-black">Our Impact</h2>
              <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
                {[
                  { value: '2,500', label: 'Women trained in digital skills' },
                  { value: '150', label: 'Safe learning spaces established' },
                  { value: '800', label: 'Leadership certificates issued' },
                  { value: '50', label: 'Community education programs' },
                ].map((item) => (
                  <div key={item.label} className="bg-wrf-coral p-6 text-center text-white">
                    <div className="mb-2 text-3xl font-bold">{item.value}</div>
                    <div className="text-sm">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Beneficiary Stories */}
            <div id="stories" className="bg-white p-8 shadow-lg">
              <h2 className="mb-6 text-2xl font-bold text-wrf-black">Beneficiary Stories</h2>
              <div className="grid gap-6 lg:grid-cols-1">
                <div className="bg-wrf-purple p-8 text-white shadow-md">
                  <p className="mb-4 text-lg italic">
                    &quot;The digital literacy program gave me skills I never thought I could learn. Now I can support my family through online work and help other women in my community.&quot;
                  </p>
                  <p className="font-bold">Zara Mohammadi</p>
                  <p className="text-sm">Digital Skills Graduate</p>
                </div>
              </div>
            </div>

            {/* Partners & Supporters */}
            <div id="partners" className="bg-white p-8 shadow-lg">
              <h2 className="mb-6 text-2xl font-bold text-wrf-black">Partners & Supporters</h2>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                <div className="flex flex-col items-center justify-center border border-gray-200 p-4 shadow-sm">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                    alt="UNESCO"
                    className="mb-2 max-h-20 max-w-full object-contain"
                  />
                  <p className="text-center text-sm font-medium">UNESCO</p>
                </div>
              </div>
            </div>

            {/* Downloadable Resources */}
            <div id="resources" className="bg-white p-8 shadow-lg">
              <h2 className="mb-6 text-2xl font-bold text-wrf-black">Downloadable Resources</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between border border-gray-200 bg-gray-50 p-4 shadow-sm">
                  <span className="font-medium">Digital Literacy Curriculum Guide</span>
                </div>
              </div>
            </div>

            {/* Behind the Scenes */}
            <div id="behind_scenes" className="bg-white p-8 shadow-lg">
              <h2 className="mb-6 text-2xl font-bold text-wrf-black">Behind the Scenes</h2>
              <div className="space-y-6">
                <div className="border border-gray-200 p-4 shadow-sm">
                  <h3 className="mb-2 text-lg font-semibold text-wrf-black">Setting Up Learning Centers</h3>
                  <p className="text-wrf-gray-text">Our team works with local partners to establish safe, equipped spaces for digital literacy and leadership training.</p>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div id="faq" className="bg-white p-8 shadow-lg">
              <h2 className="mb-6 text-2xl font-bold text-wrf-black">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {DIGITAL_FAQ.map((item, index) => {
                  const isOpen = openFaqIndex === index;
                  return (
                    <div key={index} className="border border-gray-200 shadow-sm">
                      <button
                        type="button"
                        onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                        className="flex w-full items-center justify-between bg-white p-4 text-left transition-colors hover:bg-gray-50"
                      >
                        <span className="font-bold text-wrf-black">{item.question}</span>
                        <span className="transition-transform" style={{ transform: isOpen ? 'rotate(180deg)' : 'none' }}>
                          <ChevronDown className="h-5 w-5 text-gray-600" />
                        </span>
                      </button>
                      {isOpen && (
                        <div className="border-t border-gray-200 bg-gray-50 p-4 text-wrf-black">
                          {item.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Program Areas - placeholder so nav has target */}
            <div id="map" className="bg-white p-8 shadow-lg">
              <h2 className="mb-6 text-2xl font-bold text-wrf-black">Program Areas</h2>
              <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
                <div className="bg-wrf-purple p-3 text-center text-sm text-white shadow-sm">Kabul</div>
              </div>
            </div>
          </div>

          {/* Sidebar - Explore Other Programs */}
          <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              <div className="bg-wrf-footer-mauve p-6 shadow-lg">
                <h3 className="mb-6 border-b-2 border-white pb-2 text-xl font-bold text-white">
                  Explore Other Programs
                </h3>
                <div className="space-y-4">
                  {OTHER_PROGRAMS.filter((p) => p.slug !== DIGITAL_SLUG).map((prog) => (
                    <Link
                      key={prog.slug}
                      href={`/ProgramPage?slug=${encodeURIComponent(prog.slug)}`}
                      className="block bg-white p-4 transition-shadow hover:shadow-md"
                    >
                      <h4 className="mb-2 text-sm font-semibold text-wrf-black">{prog.title}</h4>
                      <p className="line-clamp-2 text-sm text-gray-600">{prog.description}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

function RepresentationAdvocacyContent() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-gray-50">
      {/* Hero - bg-secondary (purple) */}
      <section
        className="relative bg-cover bg-center py-16 md:py-24"
        style={{ backgroundImage: `url(${REPRESENTATION_HERO_BG})` }}
      >
        <div className="hidden md:block absolute top-0 right-0 h-full w-2/5 bg-cover bg-center" style={{ clipPath: 'polygon(0% 100%, 100% 0%, 100% 100%)', backgroundImage: `url(${REPRESENTATION_HERO_OVERLAY})` }} />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="bg-wrf-purple p-8 shadow-2xl">
              <h1 className="mb-4 text-3xl font-bold text-white lg:text-4xl">
                Representation and Advocacy
              </h1>
              <p className="text-lg leading-relaxed text-white/90">
                Ensuring Afghan women&apos;s voices are heard in decision-making processes and advocating for policy changes that protect and advance women&apos;s rights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky nav - 7 items, no Program Areas */}
      <section className="sticky top-0 z-40 bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-start gap-2">
            {REPRESENTATION_NAV_SECTIONS.map(({ id, label, icon }) => (
              <button
                key={id}
                type="button"
                onClick={() => scrollTo(id)}
                className="flex items-center gap-2 rounded-none bg-wrf-coral px-4 py-2 text-sm font-medium text-white shadow-md transition-shadow hover:shadow-lg"
              >
                <Icon name={icon} />
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="space-y-8 lg:col-span-8">
            {/* Introduction - bg-white */}
            <div id="introduction" className="bg-white p-8 shadow-lg">
              <h2 className="mb-6 text-2xl font-bold text-wrf-black">
                Amplifying Women&apos;s Voices
              </h2>
              <p className="text-base leading-relaxed text-wrf-black">
                Representation matters. Our advocacy program ensures that Afghan women&apos;s perspectives, needs, and experiences are represented in policy discussions, international forums, and decision-making processes that affect their lives and futures.
              </p>
            </div>

            {/* Main content - Our Advocacy Work */}
            <div id="main_content" className="bg-white p-8 shadow-lg">
              <div className="prose max-w-none text-wrf-black">
                <p>
                  Afghan women&apos;s voices have been systematically excluded from political processes. Our Representation and Advocacy program works to change this through:
                </p>
                <h3 className="mt-6 text-xl font-semibold">Our Advocacy Work</h3>
                <ul className="list-disc space-y-2 pl-6">
                  <li><strong>International Forums:</strong> Representing Afghan women in UN meetings, international conferences, and policy discussions.</li>
                  <li><strong>Policy Advocacy:</strong> Working with governments and international bodies to develop women-inclusive policies.</li>
                  <li><strong>Media Representation:</strong> Ensuring Afghan women&apos;s stories and perspectives are featured in global media.</li>
                  <li><strong>Civil Society Engagement:</strong> Building coalitions with civil society organizations worldwide.</li>
                  <li><strong>Research and Documentation:</strong> Producing evidence-based reports to support advocacy efforts.</li>
                </ul>
                <p className="mt-4">
                  Through strategic advocacy and diplomatic engagement, we work to ensure that any future governance structure in Afghanistan includes women&apos;s full and meaningful participation.
                </p>
              </div>
            </div>

            {/* Gallery - id=gallery, 4 images */}
            <div id="gallery" className="bg-white p-8 shadow-lg">
              <h2 className="mb-6 text-2xl font-bold text-wrf-black">Gallery</h2>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                {REPRESENTATION_GALLERY_IMAGES.map((src, i) => (
                  <div key={i} className="aspect-square overflow-hidden shadow-md transition-shadow hover:shadow-xl">
                    <img
                      src={src}
                      alt={`Representation and Advocacy gallery image ${i + 1}`}
                      className="h-full w-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Impact metrics */}
            <div id="impact_metrics" className="bg-white p-8 shadow-lg">
              <h2 className="mb-6 text-2xl font-bold text-wrf-black">Our Impact</h2>
              <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
                {[
                  { value: '150', label: 'Policy briefings delivered' },
                  { value: '50', label: 'International meetings attended' },
                  { value: '25', label: 'Media interviews conducted' },
                  { value: '100+', label: 'Organizations in our coalition' },
                ].map((item) => (
                  <div key={item.label} className="bg-wrf-coral p-6 text-center text-white">
                    <div className="mb-2 text-3xl font-bold">{item.value}</div>
                    <div className="text-sm">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Beneficiary Stories - 2 testimonials */}
            <div id="stories" className="bg-white p-8 shadow-lg">
              <h2 className="mb-6 text-2xl font-bold text-wrf-black">Beneficiary Stories</h2>
              <div className="grid gap-6 lg:grid-cols-1">
                <div className="bg-wrf-purple p-8 text-white shadow-md">
                  <p className="mb-4 text-lg italic">
                    &quot;WRF is not speaking for us; they are amplifying us. Even when we cannot appear in public or say our names, we know our voices are being heard because of their advocacy.&quot;
                  </p>
                  <p className="font-bold">Rahila</p>
                  <p className="text-sm">From Herat</p>
                </div>
                <div className="bg-wrf-purple p-8 text-white shadow-md">
                  <p className="mb-4 text-lg italic">
                    &quot;In this time of fear, when we cannot speak openly, Women&apos;s Rights First becomes our voice to the world. They carry our truth with dignity and make sure we are not erased.&quot;
                  </p>
                  <p className="font-bold">Laela from Kandahar</p>
                  <p className="text-sm">Women&apos;s Rights Advocate</p>
                </div>
              </div>
            </div>

            {/* Partners & Supporters - 2 partners */}
            <div id="partners" className="bg-white p-8 shadow-lg">
              <h2 className="mb-6 text-2xl font-bold text-wrf-black">Partners & Supporters</h2>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                <div className="flex flex-col items-center justify-center border border-gray-200 p-4 shadow-sm">
                  <img
                    src="https://via.placeholder.com/200x100/003399/ffffff?text=EU+Parliament"
                    alt="European Parliament"
                    className="mb-2 max-h-20 max-w-full object-contain"
                  />
                  <p className="text-center text-sm font-medium">European Parliament</p>
                </div>
                <div className="flex flex-col items-center justify-center border border-gray-200 p-4 shadow-sm">
                  <img
                    src="https://via.placeholder.com/200x100/7c3aed/ffffff?text=WILPF"
                    alt="Women's International League"
                    className="mb-2 max-h-20 max-w-full object-contain"
                  />
                  <p className="text-center text-sm font-medium">Women&apos;s International League</p>
                </div>
              </div>
            </div>

            {/* Downloadable Resources - 3 items */}
            <div id="resources" className="bg-white p-8 shadow-lg">
              <h2 className="mb-6 text-2xl font-bold text-wrf-black">Downloadable Resources</h2>
              <div className="space-y-4">
                {['Advocacy Toolkit 2024', 'Policy Position Papers', 'International Law Briefings'].map((title) => (
                  <div key={title} className="flex items-center justify-between border border-gray-200 bg-gray-50 p-4 shadow-sm">
                    <span className="font-medium">{title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Behind the Scenes */}
            <div id="behind_scenes" className="bg-white p-8 shadow-lg">
              <h2 className="mb-6 text-2xl font-bold text-wrf-black">Behind the Scenes</h2>
              <div className="space-y-6">
                <div className="border border-gray-200 p-4 shadow-sm">
                  <h3 className="mb-2 text-lg font-semibold text-wrf-black">UN Meeting Preparation</h3>
                  <p className="text-wrf-gray-text">Our team prepares briefings, coordinates with partners, and supports Afghan women advocates ahead of key international meetings.</p>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div id="faq" className="bg-white p-8 shadow-lg">
              <h2 className="mb-6 text-2xl font-bold text-wrf-black">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {REPRESENTATION_FAQ.map((item, index) => {
                  const isOpen = openFaqIndex === index;
                  return (
                    <div key={index} className="border border-gray-200 shadow-sm">
                      <button
                        type="button"
                        onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                        className="flex w-full items-center justify-between bg-white p-4 text-left transition-colors hover:bg-gray-50"
                      >
                        <span className="font-bold text-wrf-black">{item.question}</span>
                        <span className="transition-transform" style={{ transform: isOpen ? 'rotate(180deg)' : 'none' }}>
                          <ChevronDown className="h-5 w-5 text-gray-600" />
                        </span>
                      </button>
                      {isOpen && (
                        <div className="border-t border-gray-200 bg-gray-50 p-4 text-wrf-black">
                          {item.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Sidebar - Explore Other Programs */}
          <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              <div className="bg-wrf-footer-mauve p-6 shadow-lg">
                <h3 className="mb-6 border-b-2 border-white pb-2 text-xl font-bold text-white">
                  Explore Other Programs
                </h3>
                <div className="space-y-4">
                  {OTHER_PROGRAMS.filter((p) => p.slug !== 'representation-advocacy').map((prog) => (
                    <Link
                      key={prog.slug}
                      href={`/ProgramPage?slug=${encodeURIComponent(prog.slug)}`}
                      className="block bg-white p-4 transition-shadow hover:shadow-md"
                    >
                      <h4 className="mb-2 text-sm font-semibold text-wrf-black">{prog.title}</h4>
                      <p className="line-clamp-2 text-sm text-gray-600">{prog.description}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

function PeacebuildingContent() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-gray-50">
      {/* Hero - bg-secondary (purple) */}
      <section
        className="relative bg-cover bg-center py-16 md:py-24"
        style={{ backgroundImage: `url(${PEACEBUILDING_HERO_BG})` }}
      >
        <div className="hidden md:block absolute top-0 right-0 h-full w-2/5 bg-cover bg-center" style={{ clipPath: 'polygon(0% 100%, 100% 0%, 100% 100%)', backgroundImage: `url(${PEACEBUILDING_HERO_OVERLAY})` }} />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="bg-wrf-purple p-8 shadow-2xl">
              <h1 className="mb-4 text-3xl font-bold text-white lg:text-4xl">
                Building Bridges, Healing Communities
              </h1>
              <p className="text-lg leading-relaxed text-white/90">
                Through dialogue, education, and community engagement, we work to heal divisions and create sustainable peace across Afghanistan&apos;s diverse communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky nav */}
      <section className="sticky top-0 z-40 bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-start gap-2">
            {PEACEBUILDING_NAV_SECTIONS.map(({ id, label, icon }) => (
              <button
                key={id}
                type="button"
                onClick={() => scrollTo(id)}
                className="flex items-center gap-2 rounded-none bg-wrf-coral px-4 py-2 text-sm font-medium text-white shadow-md transition-shadow hover:shadow-lg"
              >
                <Icon name={icon} />
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="space-y-8 lg:col-span-8">
            {/* Introduction - bg-white, text-primary */}
            <div id="introduction" className="bg-white p-8 shadow-lg">
              <h2 className="mb-6 text-2xl font-bold text-wrf-black">
                Healing Through Understanding
              </h2>
              <p className="text-base leading-relaxed text-wrf-black">
                In a region marked by decades of conflict, our Peacebuilding and Social Cohesion program works to mend the fabric of society through meaningful dialogue, reconciliation processes, and community-led initiatives. We believe that lasting peace comes not from the absence of conflict, but from the presence of justice, understanding, and mutual respect among all community members.
              </p>
            </div>

            {/* Quote block - bg-primary (black), left accent bar */}
            <div className="relative overflow-hidden bg-wrf-black p-8 shadow-lg">
              <div className="absolute left-0 top-0 h-full w-1 bg-wrf-coral" aria-hidden />
              <div className="grid items-center gap-6 md:grid-cols-4">
                <div className="md:col-span-1">
                  <div className="mx-auto h-20 w-20">
                    <img
                      src={PEACEBUILDING_HANIFA_IMAGE}
                      alt="Hanifa Girowal"
                      className="h-full w-full rounded-full border-4 border-wrf-coral object-cover"
                    />
                  </div>
                </div>
                <div className="md:col-span-3">
                  <blockquote className="mb-4 text-lg italic text-white">
                    &quot;For me & for women across #Afghanistan, #PeaceIs being able to walk down the street without fear: not for what we wear, what we say, or for existing. If we don&apos;t have that, how can we even begin to talk about the #WPSAgenda?&quot;
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="h-px w-8 bg-wrf-coral" />
                    <div>
                      <p className="font-bold text-white">Hanifa Girowal</p>
                      <p className="text-sm text-white/90">Co Founder and Vice President</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main content - bg-gray-50 */}
            <div id="main_content" className="bg-gray-50 p-8 shadow-lg">
              <div className="prose max-w-none text-wrf-black">
                <h3 className="text-xl font-semibold">Our Approach to Peacebuilding</h3>
                <p>We employ a multi-faceted approach that addresses the root causes of conflict while building sustainable foundations for peace:</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li><strong>Community Dialogue Forums:</strong> Facilitating safe spaces for inter-community conversation and understanding</li>
                  <li><strong>Conflict Resolution Training:</strong> Building local capacity for peaceful dispute resolution</li>
                  <li><strong>Youth Peace Ambassadors:</strong> Empowering the next generation to lead peacebuilding efforts</li>
                  <li><strong>Women&apos;s Peace Circles:</strong> Recognizing women&apos;s crucial role in sustainable peace processes</li>
                  <li><strong>Trauma-Informed Healing:</strong> Addressing psychological wounds of conflict through community-based healing</li>
                </ul>
                <h3 className="mt-6 text-xl font-semibold">Building Social Cohesion</h3>
                <p>Beyond resolving conflicts, we focus on strengthening the bonds that hold communities together through shared activities, cultural exchanges, and collaborative development projects that bring people together across traditional divides.</p>
              </div>
            </div>

            {/* Peace in Action - gallery */}
            <div id="gallery" className="bg-white p-8 shadow-lg">
              <h2 className="mb-6 text-2xl font-bold text-wrf-black">Peace in Action</h2>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                {PEACEBUILDING_GALLERY_IMAGES.map((src, i) => (
                  <div key={i} className="aspect-square cursor-pointer overflow-hidden shadow-md transition-shadow hover:shadow-xl">
                    <img
                      src={src}
                      alt={`Peacebuilding and Social Cohesion gallery image ${i + 1}`}
                      className="h-full w-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Our Peace Impact - bg-accent stat cards */}
            <div id="impact_metrics" className="bg-white p-8 shadow-lg">
              <h2 className="mb-6 text-2xl font-bold text-wrf-black">Our Peace Impact</h2>
              <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
                {[
                  { value: '2,500', label: 'Community members engaged in dialogue forums' },
                  { value: '45', label: 'Local peace mediators trained' },
                  { value: '18', label: 'Communities participating in program' },
                  { value: '85%', label: 'Reduction in community disputes' },
                ].map((item) => (
                  <div key={item.label} className="bg-wrf-coral p-6 text-center text-white">
                    <div className="mb-2 text-3xl font-bold">{item.value}</div>
                    <div className="text-sm">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Voices of Peace - bg-secondary cards */}
            <div id="stories" className="bg-white p-8 shadow-lg">
              <h2 className="mb-6 text-2xl font-bold text-wrf-black">Voices of Peace</h2>
              <div className="grid gap-6 lg:grid-cols-1">
                <div className="bg-wrf-purple p-8 text-white shadow-md">
                  <p className="mb-4 text-lg italic">
                    &quot;Through the peace circles, I learned to listen to my neighbors&apos; stories. Now we work together on projects that benefit everyone in our village.&quot;
                  </p>
                  <p className="font-bold">Fatima Ahmadi</p>
                  <p className="text-sm">Community Leader</p>
                </div>
                <div className="bg-wrf-purple p-8 text-white shadow-md">
                  <p className="mb-4 text-lg italic">
                    &quot;The conflict resolution training helped me become a bridge between different groups. Peace is possible when we choose understanding over anger.&quot;
                  </p>
                  <p className="font-bold">Ahmad Rahimi</p>
                  <p className="text-sm">Youth Peace Ambassador</p>
                </div>
              </div>
            </div>

            {/* Peace Partners */}
            <div id="partners" className="bg-white p-8 shadow-lg">
              <h2 className="mb-6 text-2xl font-bold text-wrf-black">Peace Partners</h2>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                <div className="flex flex-col items-center justify-center border border-gray-200 p-4 shadow-sm">
                  <img src="https://via.placeholder.com/200x100/0066cc/white?text=UN+PBF" alt="UN Peacebuilding Fund" className="mb-2 max-h-20 max-w-full object-contain" />
                  <p className="text-center text-sm font-medium">UN Peacebuilding Fund</p>
                </div>
                <div className="flex flex-col items-center justify-center border border-gray-200 p-4 shadow-sm">
                  <img src="https://via.placeholder.com/200x100/228B22/white?text=IPI" alt="International Peace Institute" className="mb-2 max-h-20 max-w-full object-contain" />
                  <p className="text-center text-sm font-medium">International Peace Institute</p>
                </div>
              </div>
            </div>

            {/* Peacebuilding Resources */}
            <div id="resources" className="bg-white p-8 shadow-lg">
              <h2 className="mb-6 text-2xl font-bold text-wrf-black">Peacebuilding Resources</h2>
              <div className="space-y-4">
                {['Community Dialogue Facilitation Guide', 'Conflict Resolution Toolkit', 'Peace Ambassador Training Manual'].map((title) => (
                  <div key={title} className="flex items-center justify-between border border-gray-200 bg-gray-50 p-4 shadow-sm">
                    <span className="font-medium">{title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Building Peace - behind the scenes */}
            <div id="behind_scenes" className="bg-white p-8 shadow-lg">
              <h2 className="mb-6 text-2xl font-bold text-wrf-black">Building Peace</h2>
              <div className="space-y-6">
                <div className="border border-gray-200 p-4 shadow-sm">
                  <h3 className="mb-2 text-lg font-semibold text-wrf-black">Training Local Mediators</h3>
                  <p className="text-wrf-gray-text">Our team trains community members to facilitate dialogues and resolve conflicts at the local level.</p>
                </div>
              </div>
            </div>

            {/* Peacebuilding FAQ */}
            <div id="faq" className="bg-white p-8 shadow-lg">
              <h2 className="mb-6 text-2xl font-bold text-wrf-black">Peacebuilding FAQ</h2>
              <div className="space-y-4">
                {PEACEBUILDING_FAQ.map((item, index) => {
                  const isOpen = openFaqIndex === index;
                  return (
                    <div key={index} className="border border-gray-200 shadow-sm">
                      <button
                        type="button"
                        onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                        className="flex w-full items-center justify-between bg-white p-4 text-left transition-colors hover:bg-gray-50"
                      >
                        <span className="font-bold text-wrf-black">{item.question}</span>
                        <span className="transition-transform" style={{ transform: isOpen ? 'rotate(180deg)' : 'none' }}>
                          <ChevronDown className="h-5 w-5 text-gray-600" />
                        </span>
                      </button>
                      {isOpen && (
                        <div className="border-t border-gray-200 bg-gray-50 p-4 text-wrf-black">
                          {item.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Areas of Operation */}
            <div id="map" className="bg-white p-8 shadow-lg">
              <h2 className="mb-6 text-2xl font-bold text-wrf-black">Areas of Operation</h2>
              <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
                <div className="bg-wrf-purple p-3 text-center text-sm text-white shadow-sm">Community-based programs across multiple regions</div>
              </div>
            </div>
          </div>

          {/* Sidebar - bg-support-1 (footer mauve) */}
          <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              <div className="bg-wrf-footer-mauve p-6 shadow-lg">
                <h3 className="mb-6 border-b-2 border-white pb-2 text-xl font-bold text-white">
                  Explore Other Programs
                </h3>
                <div className="space-y-4">
                  {OTHER_PROGRAMS.map((prog) => (
                    <Link
                      key={prog.slug}
                      href={`/ProgramPage?slug=${encodeURIComponent(prog.slug)}`}
                      className="block bg-white p-4 transition-shadow hover:shadow-md"
                    >
                      <h4 className="mb-2 text-sm font-semibold text-wrf-black">{prog.title}</h4>
                      <p className="line-clamp-2 text-sm text-gray-600">{prog.description}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

function ProgramPageInner() {
  const searchParams = useSearchParams();
  const slug = searchParams.get('slug') ?? '';

  if (slug === 'legal-empowerment-international-accountability') {
    return <LegalEmpowermentContent />;
  }
  if (slug === DIGITAL_SLUG) {
    return <DigitalTransformationContent />;
  }
  if (slug === 'representation-advocacy') {
    return <RepresentationAdvocacyContent />;
  }
  if (slug === 'peacebuilding-social-cohesion') {
    return <PeacebuildingContent />;
  }

  return (
    <div className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold text-wrf-black">Program not found</h1>
        <p className="mt-2 text-gray-600">
          The program &quot;{slug || '(no slug)'}&quot; is not available yet.
        </p>
        <Link
          href="/ProgramPage?slug=peacebuilding-social-cohesion"
          className="mt-6 inline-block bg-wrf-coral px-6 py-2 font-medium text-white hover:opacity-90"
        >
          View Peacebuilding and Social Cohesion
        </Link>
      </div>
    </div>
  );
}

export default function ProgramPage() {
  return (
    <Suspense fallback={<div className="min-h-[40vh] bg-gray-50" />}>
      <ProgramPageInner />
    </Suspense>
  );
}
