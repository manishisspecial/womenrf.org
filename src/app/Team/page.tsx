import Link from 'next/link';

const BOARD_MEMBERS = [
  {
    name: 'Morten Kjaerum',
    role: 'Board Member',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=400&fit=crop',
    alt: 'Morten Kjaerum',
    bio: "Morten Kjaerum is an Adjunct professor at the University of Aalborg, Denmark and an affiliated scholar at The Raoul Wallenberg Institute (RWI), Sweden. 2015 -2024 Director the RWI, 2008-15: director the EU Agency for Fundamental Rights; 1991-2008: Director, the Danish Institute for Human Rights; Member of the UN Committee on the Elimination of Racial Discrimination 2002-08. 2018-2020 Chair the Board of Trustees for the United Nations Voluntary Fund for Technical Cooperation in the Field of Human Rights (VFTC) and of the UPR Trust Fund for Financial and Technical Assistance. From 2015-23 he was chair of the European Council for Refugees and Exiles (ECRE). He has written extensively on human rights issues and lectured at universities across continents.",
    links: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/morten-kjaerum-434b6a2', icon: 'linkedin' },
      { label: 'Email', href: 'mailto:', icon: 'mail' },
    ],
  },
];

function SocialIcon({ href, icon, label }: { href: string; icon: string; label: string }) {
  const paths: Record<string, React.ReactNode> = {
    linkedin: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
    mail: (
      <>
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </>
    ),
  };
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-8 w-8 items-center justify-center bg-white/20 text-white transition-opacity duration-200 hover:bg-white/30"
      aria-label={label}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {paths[icon]}
      </svg>
    </a>
  );
}

export default function TeamPage() {
  return (
    <div className="bg-white">
      {/* Hero - gradient background */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-wrf-purple via-wrf-footer-mauve to-wrf-coral" aria-hidden />
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-left sm:px-6 lg:px-8">
          <div className="inline-block bg-wrf-purple px-8 py-6">
            <h1 className="mb-4 text-4xl font-bold text-white lg:text-5xl">
              Our Team
            </h1>
            <p className="mb-6 max-w-3xl text-lg leading-relaxed text-white/90">
              Meet the Afghan women and allies leading our fight for justice, guided by lived experience, expertise, and an unwavering commitment to dignity and freedom.
            </p>
            <Link
              href="/Vacancies"
              className="inline-flex h-11 items-center justify-center rounded-md bg-wrf-coral px-8 py-4 font-bold text-white transition-colors hover:bg-wrf-coral-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
            >
              Join The Team
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-2">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Team sections */}
      <div className="bg-gray-50 py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Board of Directors */}
            <section>
              <div className="mb-8">
                <div className="bg-wrf-purple p-6 text-white">
                  <h2 className="mb-2 text-2xl font-bold">Board of Directors</h2>
                  <p className="max-w-4xl font-medium opacity-90">
                    Our visionary leaders who guide WRF&apos;s strategic direction and governance.
                  </p>
                </div>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {BOARD_MEMBERS.map((member) => (
                  <div
                    key={member.name}
                    className="flex h-full flex-col bg-wrf-purple shadow-md transition-shadow duration-300 hover:shadow-xl"
                  >
                    <div className="relative">
                      <img
                        src={member.image}
                        alt={member.alt}
                        className="h-64 w-full object-cover"
                      />
                    </div>
                    <div className="flex flex-grow flex-col p-4 text-white">
                      <p className="mb-1 text-xs font-semibold uppercase tracking-wide opacity-90">
                        {member.role}
                      </p>
                      <h3 className="mb-3 text-lg font-bold">{member.name}</h3>
                      <p className="mb-4 flex-grow text-sm leading-relaxed opacity-90">
                        {member.bio}
                      </p>
                      <div className="mt-auto flex gap-2 pt-3">
                        {member.links.map((link) => (
                          <SocialIcon
                            key={link.label}
                            href={link.href}
                            icon={link.icon}
                            label={link.label}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
