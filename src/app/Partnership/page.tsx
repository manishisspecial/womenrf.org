'use client';

const NAV_LINKS = [
  { label: 'Benefits', id: 'why-partner' },
  { label: 'Partnership Types', id: 'partnership-types' },
  { label: 'Success Stories', id: 'success-stories' },
  { label: 'Process', id: 'process' },
  { label: 'Contact', id: 'contact' },
];

const BENEFITS = [
  {
    title: 'Drive Social Impact',
    description: 'Directly contribute to programs that empower women and girls, creating measurable, positive change in communities worldwide.',
    bg: 'bg-wrf-purple',
    icon: 'trending',
  },
  {
    title: 'Enhance Brand Reputation',
    description: 'Showcase your commitment to corporate social responsibility and gender equality, enhancing your brand\'s image and values.',
    bg: 'bg-wrf-coral',
    icon: 'award',
  },
  {
    title: 'Engage Your Employees',
    description: 'Offer your team meaningful opportunities for engagement through volunteering, fundraising, and awareness campaigns.',
    bg: 'bg-wrf-footer-mauve',
    icon: 'users',
  },
  {
    title: 'Global & Local Reach',
    description: 'Connect with a diverse, global audience and demonstrate your impact at both international and grassroots levels.',
    bg: 'bg-wrf-black',
    icon: 'globe',
  },
];

const PROCESS_STEPS = [
  { title: 'Initial Inquiry', description: 'Reach out via our contact form with your ideas.' },
  { title: 'Discovery Call', description: 'Let\'s connect to explore alignment and potential.' },
  { title: 'Proposal & Design', description: 'We co-create a detailed partnership proposal.' },
  { title: 'Launch & Impact', description: 'We launch the partnership and begin tracking our shared impact.' },
];

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
                Partner with Us: Amplify Your Impact
              </h1>
              <p className="text-xl leading-relaxed text-white/90">
                Join forces with Women&apos;s Rights First to create lasting change. Together, we can build a world where every woman has the opportunity to thrive.
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
                Why Partner With Us?
              </h2>
              <p className="text-xl leading-relaxed text-white/90">
                Collaborating with Women&apos;s Rights First offers a unique opportunity to align your organization with a powerful cause, drive meaningful social change, and connect with a global community dedicated to gender equality.
              </p>
            </div>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {BENEFITS.map((b) => (
              <div key={b.title} className={`${b.bg} p-8 text-white`}>
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
                Ways to Partner
              </h2>
              <p className="text-xl leading-relaxed text-white/90">
                We offer a range of partnership models designed to be flexible and impactful. Find the one that best aligns with your organization&apos;s goals and resources.
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
                Partnerships in Action
              </h2>
              <p className="text-xl leading-relaxed text-white/90">
                Our partners are essential to our success. Here are a few examples of how we&apos;ve worked together to make a tangible difference in the lives of women and girls.
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
                Our Partnership Process
              </h2>
              <p className="text-xl leading-relaxed text-white/90">
                We believe in building transparent, collaborative, and mutually beneficial relationships. Our process is designed to ensure alignment and maximize impact from day one.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute left-0 top-8 hidden h-0.5 w-full bg-gray-300 md:block" aria-hidden />
            <div className="relative flex flex-col justify-between gap-12 md:flex-row md:gap-8">
              {PROCESS_STEPS.map((step, i) => (
                <div key={step.title} className="relative flex flex-1 flex-col items-center text-center">
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
                Let&apos;s Start a Conversation
              </h2>
              <p className="text-xl leading-relaxed text-white/90">
                Ready to explore a partnership or have questions? Fill out the form, and our partnerships team will get in touch with you shortly.
              </p>
            </div>
          </div>
          <div className="grid items-stretch gap-8 md:grid-cols-12">
            <div className="flex flex-col justify-center bg-wrf-black p-8 text-white md:col-span-5">
              <h3 className="mb-6 text-2xl font-bold text-white">Get In Touch</h3>
              <p className="text-white/90">We look forward to hearing from you and exploring how we can work together.</p>
            </div>
            <div className="border border-gray-200 bg-white p-8 md:col-span-7">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="space-y-6"
              >
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="organization_name" className="text-sm font-medium">Organization Name *</label>
                    <input
                      id="organization_name"
                      type="text"
                      required
                      className="mt-1 h-10 w-full rounded-none border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-wrf-coral focus:ring-offset-0"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact_person" className="text-sm font-medium">Contact Person *</label>
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
                    <label htmlFor="email" className="text-sm font-medium">Email Address *</label>
                    <input
                      id="email"
                      type="email"
                      required
                      className="mt-1 h-10 w-full rounded-none border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-wrf-coral focus:ring-offset-0"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
                    <input
                      id="phone"
                      type="tel"
                      className="mt-1 h-10 w-full rounded-none border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-wrf-coral focus:ring-offset-0"
                    />
                  </div>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="partnership_type" className="text-sm font-medium">Partnership Type *</label>
                    <select
                      id="partnership_type"
                      required
                      className="mt-1 h-10 w-full rounded-none border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-wrf-coral focus:ring-offset-0"
                    >
                      <option value="">Select partnership type</option>
                      <option value="Corporate">Corporate</option>
                      <option value="NGO">NGO</option>
                      <option value="Government">Government</option>
                      <option value="Academic">Academic</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="organization_size" className="text-sm font-medium">Organization Size</label>
                    <select
                      id="organization_size"
                      className="mt-1 h-10 w-full rounded-none border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-wrf-coral focus:ring-offset-0"
                    >
                      <option value="">Select size</option>
                      <option value="Small (1-50)">Small (1-50)</option>
                      <option value="Medium (51-250)">Medium (51-250)</option>
                      <option value="Large (250+)">Large (250+)</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="text-sm font-medium">Message *</label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    placeholder="Tell us about your organization and how you'd like to partner with us..."
                    className="mt-1 w-full rounded-none border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-wrf-coral focus:ring-offset-0"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-none bg-wrf-coral py-3 text-base font-semibold text-white transition-colors hover:bg-wrf-coral-light disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 inline h-4 w-4">
                      <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
                      <path d="m21.854 2.147-10.94 10.939" />
                    </svg>
                    Submit Inquiry
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
