'use client';

import { useState } from 'react';

const HERO_BG =
  'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1920&q=80';

const SCROLL_LINKS = [
  { label: 'Why Volunteer?', id: 'why-volunteer' },
  { label: 'Volunteer Roles', id: 'volunteer-roles' },
  { label: 'What Others Say', id: 'testimonials' },
  { label: 'Apply Now', id: 'application-form' },
];

const ROLES = [
  {
    title: 'Event Support',
    description: 'Assist with logistics, registration, and guest relations at conferences, workshops, and fundraisers.',
    bg: 'bg-wrf-purple',
    icon: 'calendar',
  },
  {
    title: 'Communications & Outreach',
    description: 'Create content, manage social media, design graphics, or assist with website updates and community outreach.',
    bg: 'bg-wrf-coral',
    icon: 'megaphone',
  },
  {
    title: 'Admin & Office Support',
    description: 'Help with data entry, research, correspondence, and general office tasks.',
    bg: 'bg-wrf-coral',
    icon: 'book',
  },
  {
    title: 'Administrative Support',
    description: 'Assist with data entry, research, correspondence, and general office tasks to keep our operations running smoothly.',
    bg: 'bg-wrf-black',
    icon: 'target',
  },
  {
    title: 'Program Assistance',
    description: 'Support our education, health, or economic empowerment programs directly through mentorship or material preparation.',
    bg: 'bg-wrf-black',
    icon: 'users',
  },
  {
    title: 'Community Engagement',
    description: 'Connect with local communities, represent WRF at events, and help build partnerships with other organizations.',
    bg: 'bg-wrf-coral',
    icon: 'users',
  },
  {
    title: 'Special Projects',
    description: 'Take on unique, project-based assignments that match your specific skills and interests.',
    bg: 'bg-wrf-coral',
    icon: 'heart',
  },
];

const TESTIMONIALS = [
  {
    quote: "Volunteering with WRF has been one of the most rewarding experiences of my life. I've not only contributed to meaningful change but also gained incredible skills and friendships along the way.",
    name: 'Mariam Ahmadi',
    role: 'Communications Volunteer',
    bg: 'bg-wrf-black',
    image: null,
  },
  {
    quote: "The support and training I received made me feel valued and prepared. It's amazing to see how even small contributions can make such a big difference in women's lives.",
    name: 'Negina Sayeal',
    role: 'Event Support Volunteer',
    bg: 'bg-wrf-coral',
    image: null,
  },
  {
    quote: "The training and support provided by WRF made me feel prepared and confident in my role. It's amazing to be part of such an impactful organization.",
    name: 'Rana Sarwari',
    role: 'Event Support Volunteer',
    bg: 'bg-wrf-purple',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
  },
];

const WE_PROVIDE = [
  'Comprehensive Training & Resources',
  'Dedicated Team Coordinator Support',
  'Flexible Scheduling Options',
  'Recognition & Growth Opportunities',
  'Safe & Inclusive Environment',
  'Regular Team Appreciation Events',
];

function RoleIcon({ name }: { name: string }) {
  const cls = 'mb-4 h-12 w-12';
  switch (name) {
    case 'calendar':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cls}>
          <path d="M8 2v4" /><path d="M16 2v4" /><rect width="18" height="18" x="3" y="4" rx="2" /><path d="M3 10h18" />
        </svg>
      );
    case 'megaphone':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cls}>
          <path d="m3 11 18-5v12L3 14v-3z" /><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
        </svg>
      );
    case 'book':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cls}>
          <path d="M12 7v14" /><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
        </svg>
      );
    case 'target':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cls}>
          <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
        </svg>
      );
    case 'users':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cls}>
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case 'heart':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cls}>
          <path d="M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16" />
          <path d="m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
          <path d="m2 15 6 6" />
          <path d="M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 4a2.78 2.78 0 0 0-5 1.8c0 1.2.8 2 1.5 2.8L16 12Z" />
        </svg>
      );
    default:
      return null;
  }
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M21.801 10A10 10 0 1 1 17 3.335" /><path d="m9 11 3 3L22 4" />
    </svg>
  );
}

export default function VolunteerPage() {
  const [step, setStep] = useState(1);
  const totalSteps = 3;

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-white">
      {/* Hero */}
      <section
        className="relative overflow-hidden bg-cover bg-center py-20 md:py-32"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      >
        <div className="hidden md:block absolute top-0 right-0 h-full w-2/5 bg-cover bg-center opacity-90" style={{ clipPath: 'polygon(0% 100%, 100% 0%, 100% 100%)', backgroundImage: `url(${HERO_BG})` }} />
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-left sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="bg-wrf-coral px-8 py-6">
              <h1 className="mb-4 text-4xl font-bold text-white lg:text-5xl">
                Be the Change: Volunteer with WRF
              </h1>
              <p className="text-xl leading-relaxed text-white/90">
                Your passion. Our mission. Together, we can build a world where every Afghan woman thrives.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
              {SCROLL_LINKS.map(({ label, id }) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => scrollTo(id)}
                  className="bg-wrf-coral px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-wrf-coral-light"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Volunteer */}
      <section id="why-volunteer" className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 text-left sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="mb-4 inline-block bg-wrf-purple px-6 py-4">
              <h2 className="text-4xl font-bold text-white">Why Your Voice Matters</h2>
            </div>
            <p className="text-lg text-gray-600">
              Join a movement committed to restoring the rights and dignity of Afghan women and ensuring their voices shape the future of justice, peace, and freedom.
            </p>
          </div>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              At Women&apos;s Rights First, every volunteer brings unique skills, perspectives, and passion that directly contribute to our mission. Whether you have an hour a week or several days a month, your contribution makes a meaningful difference in the lives of women around the world.
            </p>
            <ul>
              <li><strong>Make a Tangible Impact:</strong> See the direct results of your efforts in empowering women and advancing human rights.</li>
              <li><strong>Gain Valuable Experience:</strong> Develop new skills, enhance your resume, and explore career paths in social justice and advocacy.</li>
              <li><strong>Join a Global Community:</strong> Connect with passionate individuals, activists, and leaders from diverse backgrounds worldwide.</li>
              <li><strong>Personal Growth:</strong> Challenge yourself, expand your perspective, and find deep satisfaction in meaningful work.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Volunteer Roles */}
      <section id="volunteer-roles" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 text-left sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="mb-4 inline-block bg-wrf-coral px-6 py-4">
              <h2 className="text-4xl font-bold text-white">Find Your Perfect Role</h2>
            </div>
            <p className="text-lg text-gray-600">
              We welcome volunteers with diverse expertise and varying levels of time commitment.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {ROLES.map((role) => (
              <div key={role.title} className={`${role.bg} p-8 text-white`}>
                <RoleIcon name={role.icon} />
                <h3 className="mb-3 text-xl font-bold">{role.title}</h3>
                <p className="text-sm leading-relaxed opacity-90">{role.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 text-left sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="mb-4 inline-block bg-wrf-black px-6 py-4">
              <h2 className="text-4xl font-bold text-white">Voices from Our Volunteers</h2>
            </div>
            <p className="text-lg text-gray-600">Hear from people who are making a difference</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className={`${t.bg} p-8 text-white shadow-lg`}>
                <div className="mb-6">
                  <p className="text-lg italic leading-relaxed">&quot;{t.quote}&quot;</p>
                </div>
                <div className="flex items-center gap-4">
                  {t.image && (
                    <img src={t.image} alt={t.name} className="h-12 w-12 rounded-full object-cover" />
                  )}
                  <div>
                    <p className="font-bold">{t.name}</p>
                    <p className="text-sm opacity-90">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="mb-8 text-left">
                <div className="mb-4 inline-block bg-wrf-footer-mauve px-6 py-4 text-white">
                  <h2 className="text-4xl font-bold">Our Commitment to You</h2>
                </div>
                <p className="text-lg text-gray-600">We support every volunteer&apos;s journey</p>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>When you volunteer with WRF, you&apos;re not just giving your time, you&apos;re joining a supportive community that values your contribution.</p>
                <p>We believe that happy, supported volunteers are the most effective advocates for our mission. That&apos;s why we&apos;ve created a comprehensive support system designed to help you succeed and feel valued every step of the way.</p>
              </div>
            </div>
            <div className="lg:col-span-1">
              <div className="border-l-4 border-wrf-footer-mauve bg-gray-50 p-8">
                <h3 className="mb-6 text-xl font-bold text-wrf-black">We Provide:</h3>
                <div className="space-y-4">
                  {WE_PROVIDE.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-wrf-footer-mauve" />
                      <span className="text-sm leading-relaxed text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <div className="mb-6 bg-wrf-coral px-6 py-4 text-white">
                <h2 className="text-4xl font-bold">Ready to Make a Difference?</h2>
              </div>
              <p className="mb-6 text-lg text-gray-600">
                Take the first step towards becoming a WRF volunteer
              </p>
              <div className="prose max-w-none text-gray-700">
                <p>Complete our simple application form to get started. We&apos;ll review your information and match you with opportunities that align with your interests and availability.</p>
                <p>The application takes just a few minutes, and we&apos;ll be in touch within 5-7 business days to discuss next steps.</p>
              </div>
            </div>
            <div className="lg:col-span-3">
              <div className="bg-white p-8 shadow-xl">
                {/* Step indicator */}
                <div className="mb-8">
                  <div className="mb-4 flex justify-between">
                    {[1, 2, 3].map((s) => (
                      <div key={s} className="flex flex-col items-center">
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-full font-semibold ${step === s ? 'bg-wrf-purple text-white' : 'bg-gray-200 text-gray-600'}`}
                        >
                          {s}
                        </div>
                        <div className="mt-2 text-center">
                          <p className="text-sm font-semibold text-wrf-black">
                            {s === 1 && 'Personal Info'}
                            {s === 2 && 'Interests & Availability'}
                            {s === 3 && 'Motivation & Consent'}
                          </p>
                          <p className="text-xs text-gray-500">
                            {s === 1 && 'Tell us about yourself'}
                            {s === 2 && 'What would you like to do?'}
                            {s === 3 && 'Why do you want to help?'}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="h-2 w-full rounded bg-gray-200">
                    <div
                      className="h-2 rounded bg-wrf-purple transition-all duration-300"
                      style={{ width: `${(step / totalSteps) * 100}%` }}
                    />
                  </div>
                </div>

                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="space-y-6"
                >
                  {step === 1 && (
                    <>
                      <div>
                        <h3 className="mb-4 text-xl font-bold text-wrf-purple">Personal Information</h3>
                        <div className="grid gap-6 md:grid-cols-2">
                          <div className="space-y-1">
                            <label htmlFor="fullName" className="text-sm font-medium">Full Name *</label>
                            <input
                              id="fullName"
                              type="text"
                              required
                              className="h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-wrf-coral focus:ring-offset-0"
                            />
                          </div>
                          <div className="space-y-1">
                            <label htmlFor="email" className="text-sm font-medium">Email *</label>
                            <input
                              id="email"
                              type="email"
                              required
                              className="h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-wrf-coral focus:ring-offset-0"
                            />
                          </div>
                        </div>
                        <div className="mt-4 grid gap-6 md:grid-cols-2">
                          <div className="space-y-1">
                            <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
                            <input
                              id="phone"
                              type="tel"
                              className="h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-wrf-coral focus:ring-offset-0"
                            />
                          </div>
                          <div className="space-y-1">
                            <label className="text-sm font-medium">Preferred Contact Method</label>
                            <div className="flex gap-6 pt-2">
                              <label className="flex cursor-pointer items-center gap-2">
                                <input type="radio" name="contactMethod" value="Email" defaultChecked className="h-4 w-4 border-gray-300 text-wrf-coral focus:ring-wrf-coral" />
                                <span className="text-sm">Email</span>
                              </label>
                              <label className="flex cursor-pointer items-center gap-2">
                                <input type="radio" name="contactMethod" value="Phone" className="h-4 w-4 border-gray-300 text-wrf-coral focus:ring-wrf-coral" />
                                <span className="text-sm">Phone</span>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 grid gap-6 md:grid-cols-2">
                          <div className="space-y-1">
                            <label htmlFor="city" className="text-sm font-medium">City *</label>
                            <input
                              id="city"
                              type="text"
                              required
                              className="h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-wrf-coral focus:ring-offset-0"
                            />
                          </div>
                          <div className="space-y-1">
                            <label htmlFor="country" className="text-sm font-medium">Country *</label>
                            <input
                              id="country"
                              type="text"
                              required
                              className="h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-wrf-coral focus:ring-offset-0"
                            />
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                  {step === 2 && (
                    <div>
                      <h3 className="mb-4 text-xl font-bold text-wrf-purple">Interests & Availability</h3>
                      <p className="text-gray-600">What type of volunteer work interests you? (Step 2 content can be expanded with role selection, availability, etc.)</p>
                    </div>
                  )}
                  {step === 3 && (
                    <div>
                      <h3 className="mb-4 text-xl font-bold text-wrf-purple">Motivation & Consent</h3>
                      <p className="text-gray-600">Why do you want to volunteer with WRF? (Step 3 content can include motivation text area and consent checkboxes.)</p>
                    </div>
                  )}

                  <div className="mt-8 flex justify-between">
                    <button
                      type="button"
                      onClick={() => setStep((s) => Math.max(1, s - 1))}
                      disabled={step === 1}
                      className="flex items-center gap-2 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                        <path d="m12 19-7-7 7-7" /><path d="M19 12H5" />
                      </svg>
                      Previous
                    </button>
                    {step < totalSteps ? (
                      <button
                        type="button"
                        onClick={() => setStep((s) => s + 1)}
                        className="flex items-center gap-2 rounded-md bg-wrf-purple px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-wrf-purple-dark"
                      >
                        Next
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                          <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                        </svg>
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="flex items-center gap-2 rounded-md bg-wrf-purple px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-wrf-purple-dark"
                      >
                        Submit Application
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
