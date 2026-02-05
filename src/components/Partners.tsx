const PARTNERS = [
  'Google',
  'Microsoft',
  'Salesforce',
  'Amazon',
  'Shopify',
  'Netflix',
  'Meta',
  'Slack',
  'Asana',
  'Trello',
];

export default function Partners() {
  return (
    <section id="partners" className="bg-white py-12 md:py-14">
      <div className="mx-auto max-w-container px-4 md:px-6">
        <h2 className="mb-1 inline-block bg-wrf-black px-4 py-2 text-lg font-bold text-white md:text-xl">
          Our Partners & Collaborators
        </h2>
        <p className="mb-8 text-wrf-gray-text">
          Working together to create lasting change
        </p>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5">
          {PARTNERS.map((name) => (
            <div
              key={name}
              className="text-center text-sm font-medium text-wrf-gray-text opacity-85 grayscale"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
