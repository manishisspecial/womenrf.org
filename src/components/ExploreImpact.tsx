export default function ExploreImpact() {
  return (
    <section id="impact" className="bg-white py-12 md:py-14">
      <div className="mx-auto max-w-container px-4 md:px-6">
        <h2 className="mb-1 inline-block bg-wrf-black px-4 py-2 text-lg font-bold text-white md:text-xl">
          Explore Our Impact
        </h2>
        <p className="mb-6 text-wrf-gray-text">
          Discover the many ways to connect with our mission and make a
          difference.
        </p>
        <div className="grid grid-cols-1 gap-6 bg-wrf-coral p-6 md:grid-cols-[280px_1fr] md:p-8">
          <div className="aspect-square max-w-[240px] rounded-md border border-white/30 bg-white/20 md:max-w-none" />
          <p className="italic leading-relaxed text-white md:text-xl md:pt-2">
            Together, we can create a world where every woman has the
            opportunity to thrive and lead.
          </p>
        </div>
      </div>
    </section>
  );
}
