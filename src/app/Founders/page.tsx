const HERO_BG = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1920&q=80';

const FOUNDERS = [
  {
    name: 'Shabnam Salehi',
    role: 'Co-Founder & President',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&h=1000&fit=crop',
    alt: 'Shabnam Salehi',
    bio: "Shabnam Salehi is a fellow and visiting researcher at the University of Ottawa (GSPIA & HRREC) and a prominent Afghan women's rights scholar with an LLB and a Master's in Public Policy & Administration from Kabul University, now pursuing a Ph.D. in International Law at Carleton University. She began her academic career in 2012 as an assistant professor at Kabul University, teaching public policy, human rights, and gender equality. From 2019 to 2021, she served as Commissioner and Head of the Women's Rights Promotion and Protection Unit at the Afghanistan Independent Human Rights Commission, where she led legal reforms on marriage, divorce, virginity testing, transgender rights, and sexual harassment.",
    expertise: ['International Criminal Law and international Human Rights Law', 'Gender Equality', 'Policy Advocacy'],
    links: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shabnam-salehi-b7b78251/', icon: 'linkedin' },
      { label: 'Instagram', href: '#', icon: 'instagram' },
      { label: 'Facebook', href: '#', icon: 'facebook' },
    ],
    bgClass: 'bg-wrf-purple',
    imageRight: false,
  },
  {
    name: 'Hanifa Girowal',
    role: 'Co-Founder & VP',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=1000&fit=crop',
    alt: 'Hanifa Girowal',
    bio: "Hanifa Girowal is the vice president of Women's Rights First (WRF), an Afghan women-led organization dedicated to documenting human rights violations and advancing women's participation in peacebuilding and accountability processes in Afghanistan. She also serves as a non-resident fellow at Princeton University's Afghanistan Policy Lab and an advisor to the UN Special Rapporteur on Human Rights in Afghanistan. Hanifa has also served as a research fellow at the Raoul Wallenberg Institute for Human Rights and Humanitarian Law. Hanifa has served as the Deputy Governor of Kabul and Human Rights Director for the National Directorate of Security. She also served in multiple roles at the Afghanistan Independent Human Rights Commission, focusing on women's rights, transitional justice, and the protection of civilians during armed conflict. She holds a master's degree in public international law from Brunel University London through the Chevening Scholarship.",
    expertise: ['Program Design & Management', "Project Management", "Women's Rights", "Human Rights", "Public International Law and Transnational Justice."],
    links: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/hanifa-girowal-1a6090200', icon: 'linkedin' },
      { label: 'Facebook', href: '#', icon: 'facebook' },
      { label: 'Website', href: '#', icon: 'globe' },
      { label: 'Email', href: 'mailto:', icon: 'mail' },
    ],
    bgClass: 'bg-wrf-coral',
    imageRight: true,
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
    instagram: (
      <>
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </>
    ),
    facebook: (
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    ),
    globe: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
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
      className="flex h-9 w-9 items-center justify-center bg-white/20 text-white transition-all duration-200 hover:bg-white/30"
      aria-label={label}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {paths[icon]}
      </svg>
    </a>
  );
}

export default function FoundersPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section
        className="relative overflow-hidden bg-cover bg-center py-20 md:py-32"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      >
        <div className="absolute right-0 top-0 hidden h-full w-2/5 bg-cover bg-center md:block" style={{ clipPath: 'polygon(0% 100%, 100% 0%, 100% 100%)', backgroundImage: `url(${HERO_BG})` }} aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 text-left sm:px-6 lg:px-8">
          <div className="inline-block bg-wrf-black px-8 py-6">
            <h1 className="mb-4 text-4xl font-bold text-white lg:text-6xl">
              Our Founders
            </h1>
            <p className="max-w-3xl text-xl leading-relaxed text-white/90">
              Women&apos;s Rights First was founded by Afghan women with lived experience under Taliban oppression and expertise in public international law, human rights, and peacebuilding. Their leadership combines a firsthand understanding of the crisis with strong professional credentials, shaping a survivor-centered organization committed to justice, accountability, and inclusive peace. Detailed biographies are provided below.
            </p>
          </div>
        </div>
      </section>

      {/* Founder cards */}
      <section className="bg-gray-50 py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {FOUNDERS.map((founder) => (
            <div key={founder.name} className={`mb-10 text-white ${founder.bgClass}`}>
              <div
                className={`grid gap-0 lg:grid-cols-5 ${founder.imageRight ? 'lg:grid-flow-col-dense' : ''}`}
              >
                {/* Image column */}
                <div className={founder.imageRight ? 'lg:col-span-2 lg:col-start-4' : 'lg:col-span-2'}>
                  <div className="h-96 lg:h-full">
                    <img
                      src={founder.image}
                      alt={founder.alt}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                {/* Content column */}
                <div className="flex flex-col justify-center p-6 lg:col-span-3 lg:p-8">
                  <div className="mb-6">
                    <h3 className="mb-2 text-3xl font-bold lg:text-4xl">{founder.name}</h3>
                    <p className="mb-4 text-lg font-medium opacity-90">{founder.role}</p>
                    <div className="flex flex-wrap items-center gap-3">
                      <div className="flex gap-2">
                        {founder.links.map((link) => (
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
                  <div className="mb-6">
                    <p className="text-md leading-relaxed opacity-90">{founder.bio}</p>
                  </div>
                  <div>
                    <h4 className="mb-3 text-sm font-bold uppercase tracking-wider opacity-80">
                      Areas of Expertise
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {founder.expertise.map((tag) => (
                        <span
                          key={tag}
                          className="bg-white/20 px-3 py-1.5 text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
