import Link from 'next/link';

const PROGRAMS = [
  {
    id: 'peacebuilding-social-cohesion',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop',
    alt: 'Peacebuilding and Social Cohesion',
    title: 'Peacebuilding and Social Cohesion',
    description:
      'Fostering dialogue, understanding, and unity across communities to build lasting peace and strengthen social bonds in conflict-affected regions.',
    theme: 'secondary' as const,
  },
  {
    id: 'legal-empowerment-international-accountability',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop',
    alt: 'Legal Empowerment & International Accountability',
    title: 'Legal Empowerment & International Accountability',
    description:
      "Strengthening legal frameworks and accountability mechanisms to protect women's rights in Afghanistan and internationally.",
    theme: 'primary' as const,
  },
  {
    id: 'digital-transformation-open-gender-data',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop',
    alt: 'Digital Transformation and Open Gender Data',
    title: 'Digital Transformation and Open Gender Data',
    description:
      "Women's Rights First leverages digital tools and open gender data to counter the erasure of Afghan women in real time. Through secure, survivor-led documentation, we transform raw testimonies into verified data that informs international accountability mechanisms and policy responses.",
    theme: 'secondary' as const,
  },
  {
    id: 'representation-advocacy',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop',
    alt: 'Representation and Advocacy',
    title: 'Representation and Advocacy',
    description:
      "Amplifying Afghan women's voices on national and international platforms, advocating for policy change and rights protection.",
    theme: 'secondary' as const,
  },
];

export default function Programs() {
  return (
    <section id="programs" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-left">
          <div className="mb-4 inline-block bg-wrf-purple px-8 py-6">
            <h2 className="text-4xl font-bold text-white">
              Our Impact Programs
            </h2>
          </div>
          <p className="text-lg text-gray-600">
            Transforming communities through targeted initiatives.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PROGRAMS.map((program) => (
            <article
              key={program.id}
              className="group flex flex-col rounded-none bg-white shadow-lg transition-shadow duration-300 hover:shadow-2xl"
            >
              <div className="h-48 w-full overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={program.image}
                  alt={program.alt}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div
                className={`flex flex-1 flex-col p-6 ${
                  program.theme === 'primary' ? 'bg-wrf-black' : 'bg-wrf-purple'
                }`}
              >
                <div>
                  <h3 className="mb-2 text-xl font-bold text-white transition-opacity group-hover:opacity-90">
                    {program.title}
                  </h3>
                  <p className="mb-4 flex-grow text-sm leading-relaxed text-white/80 line-clamp-3">
                    {program.description}
                  </p>
                </div>
                <div className="mt-auto">
                  <Link
                    href={`/ProgramPage?slug=${program.id}`}
                    className={`inline-flex h-9 items-center justify-center gap-1 rounded-none px-3 py-1.5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                      program.theme === 'primary'
                        ? 'bg-white text-wrf-black hover:bg-gray-100 focus-visible:ring-wrf-black'
                        : 'bg-white text-wrf-purple hover:bg-gray-100 focus-visible:ring-wrf-purple'
                    }`}
                  >
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
