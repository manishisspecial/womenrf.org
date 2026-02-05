import Link from 'next/link';

export default function Hero() {
  return (
    <section className="py-0 pb-0 md:py-0">
      <div className="mx-auto grid max-w-container grid-cols-1 gap-0 md:min-h-[480px] md:grid-cols-[1fr_1fr] md:px-4 md:px-6">
        <div className="flex flex-col justify-center bg-wrf-purple px-6 py-12 md:px-12 md:py-16">
          <h1 className="mb-6 text-hero-headline font-bold leading-[1.15] tracking-tight text-white md:mb-8">
            <span className="block">Empowering</span>
            <span className="block">Women,</span>
            <span className="block">Transforming</span>
            <span className="block">Lives</span>
          </h1>
          <p className="mb-8 max-w-[520px] text-base font-normal leading-relaxed text-white/95">
            Be part of our effort to ensure that every woman in Afghanistan
            enjoys her fundamental rights to equality, dignity, and
            self-determination.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="#story"
              className="inline-flex items-center gap-2 rounded-md bg-wrf-coral px-6 py-3 text-sm font-bold text-white hover:bg-wrf-coral-light"
            >
              Learn Our Story <span aria-hidden>→</span>
            </Link>
            <Link
              href="#programs"
              className="inline-flex items-center gap-2 rounded-md bg-wrf-black px-6 py-3 text-sm font-bold text-white hover:opacity-90"
            >
              Our Programs <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
        <div className="min-h-[220px] bg-wrf-gray-bg md:min-h-[320px]" />
      </div>
    </section>
  );
}
