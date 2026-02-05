import Image from 'next/image';
import Link from 'next/link';

const PROGRAMS = [
  {
    id: 'peacebuilding',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop',
    alt: 'Community gathering',
    title: 'Peacebuilding and Social Cohesion',
    description:
      'Fostering dialogue, understanding, and unity across communities to build lasting peace and strengthen social bonds in conflict-affected areas.',
    theme: 'purple' as const,
  },
  {
    id: 'legal',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop',
    alt: 'Legal setting',
    title: 'Legal Empowerment & International Accountability',
    description:
      "Strengthening legal frameworks and accountability mechanisms to protect women's rights in Afghanistan and internationally.",
    theme: 'black' as const,
  },
  {
    id: 'digital',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop',
    alt: 'Digital and data',
    title: 'Digital Transformation and Open Gender Data',
    description:
      "Women's Rights First leverages digital tools and open gender data to counter the erasure of Afghan women in real time.",
    theme: 'purple' as const,
  },
  {
    id: 'representation',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop',
    alt: 'Advocacy and representation',
    title: 'Representation and Advocacy',
    description:
      "Amplifying Afghan women's voices on national and international platforms, advocating for policy change and rights protection.",
    theme: 'purple' as const,
  },
];

export default function Programs() {
  return (
    <section id="programs" className="bg-white py-12 md:py-14">
      <div className="mx-auto max-w-container px-4 md:px-6">
        <h2 className="mb-1 inline-block bg-wrf-purple px-4 py-2 text-lg font-bold text-white md:text-xl">
          Our Impact Programs
        </h2>
        <p className="mb-8 text-wrf-gray-text">
          Transforming communities through targeted initiatives.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {PROGRAMS.map((program) => (
            <article
              key={program.id}
              className="flex flex-col overflow-hidden rounded-md bg-white shadow-md"
            >
              <div className="relative aspect-[3/2] w-full overflow-hidden bg-wrf-gray-bg">
                <Image
                  src={program.image}
                  alt={program.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div
                className={`flex flex-1 flex-col p-5 text-white ${
                  program.theme === 'purple' ? 'bg-wrf-purple' : 'bg-wrf-black'
                }`}
              >
                <h3 className="mb-2 text-base font-bold leading-snug">
                  {program.title}
                </h3>
                <p className="mb-4 flex-1 text-sm leading-relaxed opacity-90">
                  {program.description}
                </p>
                <Link
                  href="#"
                  className={`inline-flex w-fit items-center gap-1 rounded-md border border-white px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-wrf-purple ${
                    program.theme === 'black'
                      ? 'hover:text-wrf-black'
                      : 'hover:text-wrf-purple'
                  }`}
                >
                  Learn More <span aria-hidden>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
