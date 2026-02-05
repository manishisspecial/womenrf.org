import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#CCCCCC] py-20 md:py-32">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-6 inline-block bg-wrf-purple px-8 py-6">
              <h1 className="mb-4 text-4xl font-bold leading-tight text-white lg:text-6xl">
                Empowering Women, Transforming Lives
              </h1>
              <p className="text-xl leading-relaxed text-white/90">
                Be part of our effort to ensure that every woman in Afghanistan enjoys her fundamental rights to equality, dignity, and self-determination.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/About"
                className="flex items-center justify-center gap-2 rounded-none bg-wrf-coral px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:opacity-90"
              >
                Learn Our Story
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/Programs"
                className="flex items-center justify-center gap-2 rounded-none bg-wrf-black px-8 py-4 font-semibold text-white transition-all duration-300 hover:opacity-90"
              >
                Our Programs
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
