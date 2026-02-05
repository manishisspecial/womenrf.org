export default function ExploreImpact() {
  return (
    <section id="impact" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-left">
          <div className="mb-4 inline-block bg-wrf-black px-8 py-6">
            <h2 className="text-4xl font-bold text-white">
              Explore Our Impact
            </h2>
          </div>
          <p className="text-lg text-gray-600">
            Discover the many ways to connect with our mission and make a difference.
          </p>
        </div>
        <div className="grid items-stretch gap-8 lg:grid-cols-5">
          <div className="relative flex flex-col justify-center bg-wrf-coral p-10 lg:col-span-2">
            <div className="mb-6 h-32 w-32 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=256&h=256&fit=crop&crop=face"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            <p className="text-2xl italic leading-relaxed text-white">
              Together, we can create a world where every woman has the opportunity to thrive and lead.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
