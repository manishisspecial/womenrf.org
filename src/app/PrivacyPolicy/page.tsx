'use client';

import { useState } from 'react';

const ARTICLES: Array<{
  title: string;
  bgClass: string;
  content: string;
}> = [
  {
    title: 'Article 1: Information We Collect',
    bgClass: 'bg-wrf-black',
    content:
      "We may collect personal information that you provide when you visit our website, make a donation, subscribe to our newsletter, or contact us. This may include your name, email address, postal address, phone number, payment information (processed securely by our payment providers), and any messages you send us. We may also automatically collect certain technical information when you visit our site, such as your IP address, browser type, and pages visited, in accordance with applicable law.",
  },
  {
    title: 'Article 2: How We Use Your Information',
    bgClass: 'bg-wrf-purple',
    content:
      "We use your information to process donations, respond to your inquiries, send you updates about our work (where you have consented), improve our website and services, and comply with legal obligations. We do not sell your personal information. We use it only for the purposes for which it was collected or as otherwise permitted by law.",
  },
  {
    title: 'Article 3: Consent',
    bgClass: 'bg-wrf-coral',
    content:
      "By providing your personal information, you consent to its collection, use, and disclosure as described in this policy. You may withdraw consent at any time by contacting us, subject to legal or contractual restrictions. Where required by law, we will obtain your express consent for specific uses of your information.",
  },
  {
    title: 'Article 4: Information Sharing and Disclosure',
    bgClass: 'bg-wrf-black',
    content:
      "We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist our operations (e.g., payment processors, email services) under strict confidentiality agreements. We may also disclose information where required by law or to protect our rights, safety, or the safety of others.",
  },
  {
    title: 'Article 5: Data Security',
    bgClass: 'bg-wrf-black',
    content:
      "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, loss, or alteration. This includes secure transmission (e.g., HTTPS), limited access to personal data, and secure storage. No method of transmission over the internet is 100% secure; we strive to protect your information in line with PIPEDA and best practices.",
  },
  {
    title: 'Article 6: Your Rights',
    bgClass: 'bg-wrf-purple',
    content:
      "Under PIPEDA and applicable privacy laws, you have the right to access the personal information we hold about you, request correction of inaccurate information, and withdraw consent (where applicable). You may also have the right to lodge a complaint with a privacy commissioner. To exercise these rights, please contact us using the details in Article 8.",
  },
  {
    title: 'Article 7: Changes to This Policy',
    bgClass: 'bg-wrf-coral',
    content:
      "We may update this Privacy Policy from time to time. We will post the revised policy on this page and update the \"Last Updated\" date. We encourage you to review this policy periodically. Material changes may be communicated via email or a notice on our website where appropriate.",
  },
  {
    title: 'Article 8: Contact Us',
    bgClass: 'bg-wrf-footer-mauve',
    content:
      "If you have questions about this Privacy Policy or wish to access, correct, or delete your personal information, please contact us at: Women's Rights First, by email at the address provided on our Contact page, or through the contact form on our website. We will respond to your request in accordance with applicable law.",
  },
];

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export default function PrivacyPolicyPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="bg-gray-50">
      {/* Hero - bg-primary (black) */}
      <section className="bg-wrf-black py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 text-left sm:px-6 lg:px-8">
          <h1 className="mb-4 text-4xl font-bold text-white lg:text-5xl">
            Privacy Policy
          </h1>
          <div className="max-w-4xl text-lg leading-relaxed text-white/80">
            <p>
              Welcome to Women&apos;s Rights First (WRF). We are committed to protecting your privacy and handling your personal information with care and respect. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website, donate, or interact with our services. This policy is designed to comply with Canada&apos;s Personal Information Protection and Electronic Documents Act (PIPEDA).
            </p>
          </div>
          <p className="mt-6 text-sm text-white/60">Last Updated: September 10, 2024</p>
        </div>
      </section>

      {/* Accordion articles */}
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {ARTICLES.map((article, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={article.title}
                  className="overflow-hidden rounded-none shadow-md"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className={`flex w-full items-center justify-between p-6 text-left text-white transition-colors duration-200 ${article.bgClass}`}
                  >
                    <h3 className="text-lg font-semibold leading-tight">
                      {article.title}
                    </h3>
                    <span
                      className="ml-4 shrink-0 transition-transform"
                      style={{ transform: isOpen ? 'rotate(180deg)' : 'none' }}
                    >
                      <ChevronDown className="h-6 w-6" />
                    </span>
                  </button>
                  {isOpen && (
                    <div className="border-t border-gray-200 bg-white p-6 text-wrf-black">
                      <p className="leading-relaxed">{article.content}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
