'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { AdminShell } from '@/components/AdminShell';
import { loadAdminData, saveAdminData } from '@/lib/adminApi';

function SaveIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-save w-4 h-4 mr-2">
      <path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
      <path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7" />
      <path d="M7 3v4a1 1 0 0 0 1 1h7" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-download w-4 h-4 mr-2">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  );
}

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  );
}

const DEFAULT_SITE_DESCRIPTION =
  "Women's Rights First is an Afghan women–led organization defending the rights, freedom, and dignity of Afghan women and girls through accountability, Peacebuilding, digital empowerment, and global advocacy.";

const DEFAULT_ROBOTS_TXT = `User-agent: *
Disallow: /admin
Disallow: /api

Sitemap: https://yoursite.com/sitemap.xml`;

export default function SiteManagementPage() {
  const params = useParams();
  const locale = (params?.locale as string) || 'en';
  const base = `/${locale}`;

  const [siteName, setSiteName] = useState("Afghanistan Women's Rights First");
  const [siteTagline, setSiteTagline] = useState("Women's Right First");
  const [siteDescription, setSiteDescription] = useState(DEFAULT_SITE_DESCRIPTION);
  const [faviconUrl, setFaviconUrl] = useState('###');
  const [appleTouchIconUrl, setAppleTouchIconUrl] = useState('###');
  const [robotsTxt, setRobotsTxt] = useState(DEFAULT_ROBOTS_TXT);
  const [googleAnalyticsId, setGoogleAnalyticsId] = useState('');
  const [googleSearchConsoleVerification, setGoogleSearchConsoleVerification] = useState('<meta name="google-site-verification" content="cgvuk7X5R4glsbd0-jhhLqfWKvVROBOPyBhuQYFASFs" />');

  const [saveStatus, setSaveStatus] = useState<'idle'|'saving'|'saved'|'error'>('idle');

  useEffect(() => {
    loadAdminData<Record<string, any>>('site').then(data => {
      if (!data) return;
      if (data.siteName !== undefined) setSiteName(data.siteName);
      if (data.siteTagline !== undefined) setSiteTagline(data.siteTagline);
      if (data.siteDescription !== undefined) setSiteDescription(data.siteDescription);
      if (data.faviconUrl !== undefined) setFaviconUrl(data.faviconUrl);
      if (data.appleTouchIconUrl !== undefined) setAppleTouchIconUrl(data.appleTouchIconUrl);
      if (data.robotsTxt !== undefined) setRobotsTxt(data.robotsTxt);
      if (data.googleAnalyticsId !== undefined) setGoogleAnalyticsId(data.googleAnalyticsId);
      if (data.googleSearchConsoleVerification !== undefined) setGoogleSearchConsoleVerification(data.googleSearchConsoleVerification);
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaveStatus('saving');
    const data = {
      siteName, siteTagline, siteDescription,
      faviconUrl, appleTouchIconUrl,
      robotsTxt, googleAnalyticsId, googleSearchConsoleVerification,
    };
    const ok = await saveAdminData('site', data);
    setSaveStatus(ok ? 'saved' : 'error');
    setTimeout(() => setSaveStatus('idle'), 3000);
  };

  const handleGenerateSitemap = () => {
    alert('Sitemap generation would run here. Connect to your backend or static export.');
  };

  const inputClass =
    'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm';
  const textareaClass =
    'flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50';
  const labelClass = 'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70';
  const sectionClass = 'rounded-lg border bg-card text-card-foreground shadow-sm';
  const cardHeaderClass = 'flex flex-col space-y-1.5 p-6';
  const cardTitleClass = 'text-2xl font-semibold leading-none tracking-tight';
  const cardDescClass = 'text-sm text-muted-foreground';
  const spaceY2Class = 'space-y-2';
  const spaceY4Class = 'p-6 pt-0 space-y-4';
  const gridClass = 'grid md:grid-cols-2 gap-4';

  return (
    <AdminShell>
      <div className="space-y-8">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-heading font-bold text-primary">Site Management</h1>
              <p className="text-gray-600 font-body">Configure global website settings, SEO, and technical features.</p>
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-1 whitespace-nowrap rounded-md text-sm font-medium text-primary-foreground h-9 px-3 py-2 bg-secondary hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <SaveIcon />
              Save Settings
            </button>
            {saveStatus === 'saving' && <span className="text-sm text-gray-500 ml-3">Saving...</span>}
            {saveStatus === 'saved' && <span className="text-sm text-green-600 ml-3">Saved successfully!</span>}
            {saveStatus === 'error' && <span className="text-sm text-red-600 ml-3">Error saving. Try again.</span>}
          </div>

          {/* Site Identity */}
          <div className={sectionClass}>
            <div className={cardHeaderClass}>
              <h3 className={cardTitleClass}>Site Identity</h3>
              <p className={cardDescClass}>Configure your website&apos;s basic information</p>
            </div>
            <div className={spaceY4Class}>
              <div className={gridClass}>
                <div className={spaceY2Class}>
                  <label className={labelClass}>Site Name</label>
                  <input
                    className={inputClass}
                    placeholder="Women's Rights First"
                    value={siteName}
                    onChange={(e) => setSiteName(e.target.value)}
                  />
                </div>
                <div className={spaceY2Class}>
                  <label className={labelClass}>Site Title/Tagline</label>
                  <input
                    className={inputClass}
                    placeholder="Empowering Women Worldwide"
                    value={siteTagline}
                    onChange={(e) => setSiteTagline(e.target.value)}
                  />
                </div>
              </div>
              <div className={spaceY2Class}>
                <label className={labelClass}>Default Site Description</label>
                <textarea
                  className={textareaClass}
                  placeholder="Default description used across the site"
                  rows={3}
                  value={siteDescription}
                  onChange={(e) => setSiteDescription(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Favicon & Icons */}
          <div className={sectionClass}>
            <div className={cardHeaderClass}>
              <h3 className={cardTitleClass}>Favicon & Icons</h3>
              <p className={cardDescClass}>Set your website&apos;s favicon and touch icons</p>
            </div>
            <div className={spaceY4Class}>
              <div className={gridClass}>
                <div className={spaceY2Class}>
                  <label className={labelClass}>Favicon URL</label>
                  <input
                    className={inputClass}
                    placeholder="https://example.com/favicon.ico"
                    value={faviconUrl}
                    onChange={(e) => setFaviconUrl(e.target.value)}
                  />
                  <p className="text-xs text-gray-500">Recommended: 32x32px .ico or .png file</p>
                </div>
                <div className={spaceY2Class}>
                  <label className={labelClass}>Apple Touch Icon URL</label>
                  <input
                    className={inputClass}
                    placeholder="https://example.com/apple-touch-icon.png"
                    value={appleTouchIconUrl}
                    onChange={(e) => setAppleTouchIconUrl(e.target.value)}
                  />
                  <p className="text-xs text-gray-500">Recommended: 180x180px .png file</p>
                </div>
              </div>
            </div>
          </div>

          {/* SEO & Search Engines */}
          <div className={sectionClass}>
            <div className={cardHeaderClass}>
              <h3 className={cardTitleClass}>SEO & Search Engines</h3>
              <p className={cardDescClass}>Configure search engine optimization settings</p>
            </div>
            <div className={spaceY4Class}>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="font-semibold">XML Sitemap</h4>
                  <p className="text-sm text-gray-600">Generate and download your website&apos;s sitemap</p>
                </div>
                <button
                  type="button"
                  onClick={handleGenerateSitemap}
                  className="inline-flex items-center justify-center gap-1 whitespace-nowrap rounded-md text-sm font-medium border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <DownloadIcon />
                  Generate Sitemap
                </button>
              </div>
              <div className={spaceY2Class}>
                <label className={labelClass}>Robots.txt Content</label>
                <textarea
                  className={textareaClass}
                  placeholder="User-agent: *..."
                  rows={4}
                  value={robotsTxt}
                  onChange={(e) => setRobotsTxt(e.target.value)}
                />
                <p className="text-xs text-gray-500">Instructions for search engine crawlers</p>
              </div>
              <div className={gridClass}>
                <div className={spaceY2Class}>
                  <label className={labelClass}>Google Analytics ID</label>
                  <input
                    className={inputClass}
                    placeholder="GA-XXXXXXXXX"
                    value={googleAnalyticsId}
                    onChange={(e) => setGoogleAnalyticsId(e.target.value)}
                  />
                </div>
                <div className={spaceY2Class}>
                  <label className={labelClass}>Google Search Console Verification</label>
                  <input
                    className={inputClass}
                    placeholder="verification code"
                    value={googleSearchConsoleVerification}
                    onChange={(e) => setGoogleSearchConsoleVerification(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </form>

        {/* Admin Access - not inside form, informational card */}
        <div className={sectionClass}>
          <div className={cardHeaderClass}>
            <h3 className={`${cardTitleClass} flex items-center gap-2`}>
              <GlobeIcon className="w-5 h-5" />
              Admin Access
            </h3>
            <p className={cardDescClass}>Secure admin dashboard access</p>
          </div>
          <div className="p-6 pt-0">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-800 mb-2">Admin Login Available</h4>
              <p className="text-green-700 text-sm mb-3">
                A secure admin login page has been created and is protected by password authentication.
              </p>
              <Link
                href={`${base}/AdminLogin`}
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                <GlobeIcon className="w-4 h-4" />
                Access Admin Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </AdminShell>
  );
}
