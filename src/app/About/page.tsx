import Link from 'next/link';

const HERO_BG =
  'https://miladjosofe46.sg-host.com/wp-content/uploads/2025/10/IDPQZNEWGZKSXJEX7VTFFBX6OM-scaled.jpg';
const HERO_RIGHT_IMAGE =
  'https://miladjosofe45.sg-host.com/wp-content/uploads/2025/09/Element-2-03-scaled.png';

import AboutSectionNav from './AboutSectionNav';

const TIMELINE = [
  {
    year: '2019',
    title: 'Foundation & First Steps',
    description:
      "Women's Rights First was officially founded in Ottawa, Canada, with a small team of passionate advocates. Our first initiative focused on supporting refugee women with legal aid and integration services.",
  },
  {
    year: '2020',
    title: 'Digital Transformation',
    description:
      'Adapting to global challenges, we launched our first digital programs, reaching women in remote areas through online education and virtual mentorship programs. Our reach expanded to over 1,000 beneficiaries.',
  },
  {
    year: '2021',
    title: 'International Expansion',
    description:
      "We established our European operations in Amsterdam and launched our first international program in partnership with local women's organizations across three countries.",
  },
  {
    year: '2022',
    title: 'Major Impact Milestone',
    description:
      'Reached 5,000 women served directly through our programs. Launched our signature leadership development initiative and secured our first major foundation grant of $500,000.',
  },
  {
    year: '2023',
    title: 'Global Recognition',
    description:
      "Received the International Women's Rights Organization Award and was featured in major international media. Our advocacy efforts contributed to policy changes in four countries.",
  },
  {
    year: '2024',
    title: 'Scaling for Greater Impact',
    description:
      'Launched our most ambitious program yet, aiming to reach 10,000 women by year-end. Established partnerships with UN Women and opened our third international office.',
  },
];

const TEAM = [
  { name: 'Hanifa Girowal', role: 'Co-Founder & VP', img: 'https://womensrightsfirst.org/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-11-at-8.06.00-PM-768x1024.jpeg', bg: 'bg-wrf-coral' },
  { name: 'Shabnam Salehi', role: 'Co-Founder & President', img: 'https://womensrightsfirst.org/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2025-06-30-at-11.05.06-PM-r8p1yk6selhkcr396839okh42kbrblh5j34cucjmgg.jpeg', bg: 'bg-wrf-purple' },
  { name: 'Morten Kjaerum', role: 'Board Member', img: 'https://miladjosofe46.sg-host.com/wp-content/uploads/2025/10/1-Panelist-Morten-Kjaerum-Picture-1.jpg', bg: 'bg-wrf-purple' },
  { name: 'Jennifer Lee', role: 'Finance Director', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face', bg: 'bg-wrf-footer-mauve' },
  { name: 'Grace Okonkwo', role: 'Regional Coordinator - Africa', img: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop&crop=face', bg: 'bg-wrf-coral' },
];

const GET_INVOLVED_LINKS = [
  { href: '/Volunteer', label: 'Volunteer With Us', bgClass: 'bg-wrf-black' },
  { href: '/Vacancies', label: 'Career Opportunities', bgClass: 'bg-wrf-purple' },
  { href: '/Partnership', label: 'Partner With Us', bgClass: 'bg-wrf-coral' },
  { href: '/News', label: 'Latest News', bgClass: 'bg-wrf-footer-mauve' },
  { href: '/Contact', label: 'Contact Us', bgClass: 'bg-wrf-black' },
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero - matches reference layout */}
      <section
        id="hero"
        className="relative overflow-hidden bg-cover bg-center py-20 md:py-32"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      >
        <div className="absolute inset-0 bg-black/50" aria-hidden />
        <div
          className="absolute right-0 top-0 hidden h-full w-2/5 bg-cover bg-center md:block"
          style={{
            backgroundImage: `url(${HERO_RIGHT_IMAGE})`,
            clipPath: 'polygon(0% 100%, 100% 0%, 100% 100%)',
          }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-4 text-left sm:px-6 lg:px-8">
          <div className="inline-block bg-wrf-black px-8 py-6">
            <h1 className="mb-4 text-4xl font-bold text-white lg:text-6xl">
              Afghan Women at the Frontline of Justice and Change
            </h1>
            <p className="max-w-3xl text-xl leading-relaxed text-white/90">
              We work to ensure Afghan women are not erased by advancing accountability, digital protection, and women&apos;s leadership in peace and policy.
            </p>
          </div>
        </div>
      </section>

      {/* Section nav - normal section, with border and font per attachment */}
      <AboutSectionNav />

      {/* Mission & History */}
      <section id="mission" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="text-left">
              <div className="inline-block bg-wrf-black p-4">
                <h2 className="text-3xl font-bold text-white">Our Mission & History</h2>
              </div>
              <p className="mb-8 mt-6 max-w-3xl text-lg leading-relaxed text-gray-700">
                To empower and transform Afghan women and girls by delivering peacebuilding, accountability, and digital transformation services through locally grounded and modernized indigenous approaches.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href="/Volunteer">
                  <button type="button" className="inline-flex items-center rounded-none bg-wrf-purple px-8 py-3 font-semibold text-white transition-none">
                    Join Our Mission
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 h-5 w-5">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </button>
                </Link>
                <Link href="/Programs">
                  <button type="button" className="inline-flex items-center rounded-none bg-wrf-coral px-8 py-3 font-semibold text-white transition-none">
                    Explore Programs
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 h-5 w-5">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
                alt="Our Mission"
                className="h-96 w-full object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section id="values" className="bg-gray-50 py-20 text-left">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="inline-block bg-wrf-purple p-4">
              <h2 className="text-3xl font-bold text-white">Our Core Values</h2>
            </div>
            <p className="mt-6 max-w-4xl text-lg leading-relaxed text-gray-700">
              These principles guide every decision we make and every action we take. They are the foundation upon which our organization stands and the compass that directs our path forward.
            </p>
          </div>
          <div className="grid gap-1 md:grid-cols-2">
            {[
              { title: 'Equality & Justice', bg: 'bg-wrf-black' },
              { title: 'Empowerment & Leadership', bg: 'bg-wrf-purple' },
              { title: 'Community & Solidarity', bg: 'bg-wrf-coral' },
              { title: 'Innovation & Sustainability', bg: 'bg-wrf-footer-mauve' },
            ].map((item) => (
              <div key={item.title} className={`overflow-hidden shadow-inner ${item.bg}`}>
                <button type="button" className="w-full p-6 text-left text-white transition-none">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section id="quote" className="bg-wrf-black py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative bg-white/10 p-8 md:p-12">
            <blockquote className="mb-6 text-xl italic leading-relaxed text-white md:text-2xl">
              &ldquo;The future of women&apos;s rights isn&apos;t just about policy changes or legal victories—it&apos;s about creating a world where every girl grows up knowing she can be anything she dreams of becoming.&rdquo;
            </blockquote>
            <div className="h-1 w-24 bg-wrf-coral" />
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section id="history" className="bg-white py-20 text-left">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 inline-block bg-wrf-footer-mauve p-4">
            <h2 className="text-3xl font-bold text-white">Our Journey</h2>
          </div>
          <p className="mt-4 max-w-4xl text-lg leading-relaxed text-gray-700">
            From humble beginnings to global impact, our story is one of perseverance, growth, and unwavering commitment to women&apos;s rights. Each milestone represents countless hours of dedication and the support of our incredible community.
          </p>
          <div className="relative mt-12">
            <div className="absolute left-4 top-0 hidden h-full w-0.5 bg-gray-200 md:block" aria-hidden />
            <div className="space-y-12">
              {TIMELINE.map((item) => (
                <div key={item.year} className="relative md:pl-16">
                  <div className="absolute left-4 top-1 hidden h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-4 border-white bg-wrf-coral md:flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
                      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
                      <line x1="4" x2="4" y1="22" y2="15" />
                    </svg>
                  </div>
                  <div className="bg-gray-100 p-6 shadow-lg">
                    <p className="text-2xl font-bold text-wrf-purple">{item.year}</p>
                    <h3 className="my-2 text-xl font-semibold text-wrf-black">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact in Numbers */}
      <section id="impact" className="bg-gray-50 py-20 text-left">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 inline-block bg-wrf-coral p-4">
            <h2 className="text-3xl font-bold text-white">Our Impact in Numbers</h2>
          </div>
          <p className="mt-4 max-w-4xl text-lg leading-relaxed text-gray-700">
            Numbers tell a story, but behind each statistic is a woman whose life has been transformed. These figures represent real change, tangible progress, and hope for the future.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { value: '12,000+', label: 'Women Empowered', bg: 'bg-wrf-black' },
              { value: '45', label: 'Countries Reached', bg: 'bg-wrf-purple' },
              { value: '150+', label: 'Local Partners', bg: 'bg-wrf-coral' },
              { value: '$2.1M', label: 'Funds Distributed', bg: 'bg-wrf-footer-mauve' },
            ].map((stat) => (
              <div key={stat.label} className={`p-8 text-center text-white shadow-lg ${stat.bg}`}>
                <p className="text-5xl font-bold text-wrf-coral">{stat.value}</p>
                <p className="mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our People */}
      <section id="team" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div className="text-left">
              <div className="mb-6 inline-block bg-wrf-purple p-4">
                <h2 className="text-3xl font-bold text-white">Meet Our People</h2>
              </div>
              <p className="text-lg leading-relaxed text-gray-700">
                Behind every success story is a dedicated team of professionals, volunteers, and supporters who believe in our mission. From our founding leaders to our newest team members, each person brings unique skills and passion to our work.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                Together, we&apos;re not just colleagues—we&apos;re a global family united by our commitment to women&apos;s rights and social justice.
              </p>
            </div>
            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
                {TEAM.map((person) => (
                  <div key={person.name} className={`relative h-48 overflow-hidden ${person.bg}`}>
                    <img src={person.img} alt={person.name} className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-black/50" aria-hidden />
                    <div className="absolute bottom-0 left-0 w-full p-3 text-white">
                      <h3 className="inline-block text-sm font-bold">
                        <span className="bg-wrf-purple px-1 py-0.5">{person.name}</span>
                      </h3>
                      <p className="mt-1 inline-block text-xs">
                        <span className="bg-wrf-coral px-1 py-0.5">{person.role}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-end gap-4">
                <Link href="/Founders">
                  <button type="button" className="inline-flex items-center rounded-none bg-wrf-black px-8 py-3 font-semibold text-white transition-none">
                    Our Founders
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 h-5 w-5">
                      <path d="M2 12a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V7h-5a8 8 0 0 0-5 2 8 8 0 0 0-5-2H2Z" />
                      <path d="M6 11c1.5 0 3 .5 3 2-2 0-3 0-3-2Z" />
                      <path d="M18 11c-1.5 0-3 .5-3 2 2 0 3 0 3-2Z" />
                    </svg>
                  </button>
                </Link>
                <Link href="/Team">
                  <button type="button" className="inline-flex items-center rounded-none bg-wrf-black px-8 py-3 font-semibold text-white transition-none">
                    Our Team
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 h-5 w-5">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section id="links" className="bg-gray-50 py-20 text-left">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 inline-block bg-wrf-coral p-4">
            <h2 className="text-3xl font-bold text-white">Get Involved</h2>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {GET_INVOLVED_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`flex h-full flex-col justify-between p-8 text-white shadow-inner transition-none ${link.bgClass}`}
              >
                <h3 className="mb-2 text-lg font-bold">{link.label}</h3>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-4 h-6 w-6 self-end">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
