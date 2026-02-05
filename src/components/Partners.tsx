const PARTNERS = [
  { name: 'Google', url: 'https://google.com', logo: 'https://logo.clearbit.com/google.com' },
  { name: 'Microsoft', url: 'https://microsoft.com', logo: 'https://logo.clearbit.com/microsoft.com' },
  { name: 'Salesforce', url: 'https://salesforce.com', logo: 'https://logo.clearbit.com/salesforce.com' },
  { name: 'Amazon', url: 'https://amazon.com', logo: 'https://logo.clearbit.com/amazon.com' },
  { name: 'Shopify', url: 'https://shopify.com', logo: 'https://logo.clearbit.com/shopify.com' },
  { name: 'Netflix', url: 'https://netflix.com', logo: 'https://logo.clearbit.com/netflix.com' },
  { name: 'Meta', url: 'https://meta.com', logo: 'https://logo.clearbit.com/meta.com' },
  { name: 'Slack', url: 'https://slack.com', logo: 'https://logo.clearbit.com/slack.com' },
  { name: 'Asana', url: 'https://asana.com', logo: 'https://logo.clearbit.com/asana.com' },
  { name: 'Trello', url: 'https://trello.com', logo: 'https://logo.clearbit.com/trello.com' },
];

export default function Partners() {
  return (
    <section id="partners" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-left">
          <div className="mb-4 inline-block bg-wrf-black px-8 py-6">
            <h2 className="text-4xl font-bold text-white">
              Our Partners & Collaborators
            </h2>
          </div>
          <p className="text-lg text-gray-600">
            Working together to create lasting change
          </p>
        </div>
        <div className="grid grid-cols-2 items-center gap-8 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {PARTNERS.map(({ name, url, logo }) => (
            <div
              key={name}
              className="group flex items-center justify-center transition-transform duration-300 hover:scale-105"
            >
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full"
                title={name}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={logo}
                  alt={name}
                  className="max-h-16 w-full object-contain grayscale transition-all duration-300 hover:grayscale-0"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
