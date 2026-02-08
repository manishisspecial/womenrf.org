'use client';

import { useState, useEffect } from 'react';
import { AdminShell } from '@/components/AdminShell';
import { loadAdminData, saveAdminData } from '@/lib/adminApi';

const SvgSave = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
    <path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7" />
    <path d="M7 3v4a1 1 0 0 0 1 1h7" />
  </svg>
);

const SvgPlus = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M5 12h14" />
    <path d="M12 5v14" />
  </svg>
);

const SvgTrash2 = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 6h18" />
    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    <line x1="10" x2="10" y1="11" y2="17" />
    <line x1="14" x2="14" y1="11" y2="17" />
  </svg>
);

const BACKGROUND_COLOR_OPTIONS = [
  { value: 'primary', label: 'Primary (Dark)' },
  { value: 'secondary', label: 'Secondary (Purple)' },
  { value: 'accent', label: 'Accent (Pink)' },
  { value: 'support', label: 'Support (Rose)' },
];

type PolicyArticle = {
  id: string;
  title: string;
  backgroundColor: string;
  content: string;
};

const DEFAULT_INTRODUCTION = `<p>Welcome to Women's Rights First (WRF). We are committed to protecting your privacy and handling your personal information with care and respect. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website, donate, or interact with our services. This policy is designed to comply with Canada's Personal Information Protection and Electronic Documents Act (PIPEDA).</p>`;

const DEFAULT_ARTICLES: PolicyArticle[] = [
  {
    id: '1',
    title: 'Article 1: Information We Collect',
    backgroundColor: 'primary',
    content: `<p>We may collect personal information that you voluntarily provide to us, such as:</p><ul><li><strong>Contact Information:</strong> Your name, email address, mailing address, and phone number when you sign up for our newsletter, volunteer, or contact us.</li><li><strong>Donation Information:</strong> Financial information, such as credit card details, required to process donations. This information is processed securely by our third-party payment processors.</li><li><strong>Technical Information:</strong> We automatically collect certain information when you visit our website, such as your IP address, browser type, operating system, and browsing behavior through cookies and similar technologies.</li></ul>`,
  },
  {
    id: '2',
    title: 'Article 2: How We Use Your Information',
    backgroundColor: 'secondary',
    content: `<p>We use the information we collect for various purposes, including:</p><ul><li>To process your donations and issue tax receipts.</li><li>To send you newsletters, updates, and other communications you have consented to receive.</li><li>To respond to your inquiries and requests.</li><li>To manage and improve our website and services.</li><li>To comply with legal and regulatory requirements.</li></ul>`,
  },
  {
    id: '3',
    title: 'Article 3: Consent',
    backgroundColor: 'accent',
    content: `<p>We will obtain your consent to collect, use, or disclose your personal information, except where otherwise permitted or required by law. By providing us with your personal information, you consent to its collection, use, and disclosure as described in this Privacy Policy. You may withdraw your consent at any time, subject to legal or contractual restrictions and reasonable notice.</p>`,
  },
  {
    id: '4',
    title: 'Article 4: Information Sharing and Disclosure',
    backgroundColor: 'primary',
    content: `<p>We do not sell, trade, or rent your personal information to others. We may share your information with trusted third-party service providers who assist us in operating our website, conducting our business, or serving you, so long as those parties agree to keep this information confidential. We may also release information when its release is appropriate to comply with the law, enforce our site policies, or protect ours or others' rights, property, or safety.</p>`,
  },
  {
    id: '5',
    title: 'Article 5: Data Security',
    backgroundColor: 'primary',
    content: `<p>We implement a variety of security measures to maintain the safety of your personal information. Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems, and are required to keep the information confidential.</p>`,
  },
  {
    id: '6',
    title: 'Article 6: Your Rights',
    backgroundColor: 'secondary',
    content: `<p>Under PIPEDA, you have the right to access your personal information and to request corrections if you believe it is inaccurate. You can also challenge our compliance with PIPEDA. To exercise these rights, please contact us using the information provided below.</p>`,
  },
  {
    id: '7',
    title: 'Article 7: Changes to This Policy',
    backgroundColor: 'accent',
    content: `<p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. We encourage you to review this Privacy Policy periodically for any changes.</p>`,
  },
  {
    id: '8',
    title: 'Article 8: Contact Us',
    backgroundColor: 'support',
    content: `<p>If you have any questions regarding this Privacy Policy, you may contact us using the information on our Contact page. <br><br><strong>Disclaimer:</strong> This is a sample privacy policy and should not be considered legal advice. Please consult with a legal professional to ensure your policy is compliant with all applicable laws and regulations.</p>`,
  },
];

function nextId(articles: PolicyArticle[]) {
  const max = articles.reduce((m, a) => {
    const n = parseInt(a.id, 10);
    return Number.isNaN(n) ? m : Math.max(m, n);
  }, 0);
  return String(max + 1);
}

export default function PrivacyPolicyManagementPage() {
  const [pageTitle, setPageTitle] = useState('Privacy Policy');
  const [introduction, setIntroduction] = useState(DEFAULT_INTRODUCTION);
  const [lastUpdated, setLastUpdated] = useState('2024-09-10');
  const [articles, setArticles] = useState<PolicyArticle[]>(DEFAULT_ARTICLES);
  const [saveStatus, setSaveStatus] = useState<'idle'|'saving'|'saved'|'error'>('idle');

  useEffect(() => {
    loadAdminData<Record<string, any>>('privacy-policy').then(data => {
      if (!data) return;
      if (data.pageTitle !== undefined) setPageTitle(data.pageTitle);
      if (data.introduction !== undefined) setIntroduction(data.introduction);
      if (data.lastUpdated !== undefined) setLastUpdated(data.lastUpdated);
      if (data.articles !== undefined) setArticles(data.articles);
    });
  }, []);

  const handleSave = async () => {
    setSaveStatus('saving');
    const data = { pageTitle, introduction, lastUpdated, articles };
    const ok = await saveAdminData('privacy-policy', data);
    setSaveStatus(ok ? 'saved' : 'error');
    setTimeout(() => setSaveStatus('idle'), 3000);
  };

  const addArticle = () => {
    setArticles((prev) => [
      ...prev,
      {
        id: nextId(prev),
        title: `Article ${prev.length + 1}`,
        backgroundColor: 'primary',
        content: '<p></p>',
      },
    ]);
  };

  const removeArticle = (id: string) => {
    setArticles((prev) => prev.filter((a) => a.id !== id));
  };

  const updateArticle = (id: string, updates: Partial<PolicyArticle>) => {
    setArticles((prev) =>
      prev.map((a) => (a.id === id ? { ...a, ...updates } : a))
    );
  };

  return (
    <AdminShell>
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-heading font-bold text-primary">
              Privacy Policy Management
            </h1>
            <p className="text-gray-600 font-body">
              Manage the content for the Privacy Policy page.
            </p>
          </div>
          <button
            type="button"
            onClick={handleSave}
            className="inline-flex items-center justify-center gap-1 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-3 py-2"
          >
            <SvgSave className="w-4 h-4 mr-2" />
            Save Changes
          </button>
          {saveStatus === 'saving' && <span className="text-sm text-gray-500 ml-3">Saving...</span>}
          {saveStatus === 'saved' && <span className="text-sm text-green-600 ml-3">Saved successfully!</span>}
          {saveStatus === 'error' && <span className="text-sm text-red-600 ml-3">Error saving. Try again.</span>}
        </div>

        {/* Page Content card */}
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="text-2xl font-semibold leading-none tracking-tight">
              Page Content
            </h3>
          </div>
          <div className="p-6 pt-0 space-y-4">
            <div>
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="title"
              >
                Page Title
              </label>
              <input
                id="title"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                value={pageTitle}
                onChange={(e) => setPageTitle(e.target.value)}
              />
            </div>
            <div>
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="introduction"
              >
                Introduction (HTML enabled)
              </label>
              <textarea
                id="introduction"
                className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                rows={4}
                value={introduction}
                onChange={(e) => setIntroduction(e.target.value)}
              />
            </div>
            <div>
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="last_updated"
              >
                Last Updated Date
              </label>
              <input
                type="date"
                id="last_updated"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                value={lastUpdated}
                onChange={(e) => setLastUpdated(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Policy Articles card */}
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="flex flex-col space-y-1.5 p-6">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-semibold leading-none tracking-tight">
                Policy Articles
              </h3>
              <button
                type="button"
                onClick={addArticle}
                className="inline-flex items-center justify-center gap-1 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-3 py-2"
              >
                <SvgPlus className="w-4 h-4 mr-2" />
                Add Article
              </button>
            </div>
          </div>
          <div className="p-6 pt-0 space-y-4">
            {articles.map((article, index) => (
              <div
                key={article.id}
                className="border p-4 rounded-lg space-y-4 relative"
              >
                <button
                  type="button"
                  onClick={() => removeArticle(article.id)}
                  className="inline-flex items-center justify-center gap-1 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-10 w-10 absolute top-2 right-2"
                  aria-label="Delete article"
                >
                  <SvgTrash2 className="w-4 h-4" />
                </button>
                <h3 className="font-semibold pr-12">Article {index + 1}</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor={`article-title-${article.id}`}
                    >
                      Article Title
                    </label>
                    <input
                      id={`article-title-${article.id}`}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                      value={article.title}
                      onChange={(e) =>
                        updateArticle(article.id, { title: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor={`article-bg-${article.id}`}
                    >
                      Background Color
                    </label>
                    <select
                      id={`article-bg-${article.id}`}
                      className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1"
                      value={article.backgroundColor}
                      onChange={(e) =>
                        updateArticle(article.id, {
                          backgroundColor: e.target.value,
                        })
                      }
                    >
                      {BACKGROUND_COLOR_OPTIONS.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor={`article-content-${article.id}`}
                  >
                    Article Content (HTML enabled)
                  </label>
                  <textarea
                    id={`article-content-${article.id}`}
                    className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    rows={6}
                    value={article.content}
                    onChange={(e) =>
                      updateArticle(article.id, { content: e.target.value })
                    }
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AdminShell>
  );
}
