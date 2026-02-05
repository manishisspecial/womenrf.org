'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

// Sidebar menu items
const menuItems = [
  { icon: 'home', label: 'Dashboard', href: '/AdminDashboard', active: true },
  { icon: 'layout', label: 'Homepage Settings', href: '#' },
  { icon: 'heart', label: 'About Page Settings', href: '#' },
  { icon: 'header', label: 'Header Settings', href: '#' },
  { icon: 'footer', label: 'Footer Settings', href: '#' },
  { icon: 'shield', label: 'Privacy Policy', href: '#' },
  { icon: 'seo', label: 'Page Content & SEO', href: '#' },
  { icon: 'globe', label: 'Site Management', href: '#' },
  { icon: 'donation', label: 'Donation Management', href: '#' },
  { icon: 'options', label: 'Donation Options', href: '#' },
  { icon: 'blog', label: 'Blog Posts', href: '#' },
  { icon: 'program', label: 'Program Management', href: '#' },
  { icon: 'testimonial', label: 'Testimonials', href: '#' },
  { icon: 'founder', label: 'Founder Management', href: '#' },
  { icon: 'team', label: 'Team Management', href: '#' },
  { icon: 'vacancy', label: 'Vacancy Management', href: '#' },
  { icon: 'jobs', label: 'Job Applications', href: '#' },
  { icon: 'volunteer', label: 'Volunteer Management', href: '#' },
  { icon: 'partnership', label: 'Partnership Management', href: '#' },
  { icon: 'faq', label: 'FAQ Management', href: '#' },
  { icon: 'newsletter', label: 'Newsletter System', href: '#' },
  { icon: 'users', label: 'User Management', href: '#' },
];

// Icon component
function Icon({ name, className = '' }: { name: string; className?: string }) {
  const icons: Record<string, JSX.Element> = {
    home: <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />,
    layout: <><rect x="3" y="3" width="18" height="18" rx="2" /><line x1="3" y1="9" x2="21" y2="9" /></>,
    heart: <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />,
    header: <><rect x="3" y="3" width="18" height="18" rx="2" /><line x1="3" y1="9" x2="21" y2="9" /></>,
    footer: <><rect x="3" y="3" width="18" height="18" rx="2" /><line x1="3" y1="15" x2="21" y2="15" /></>,
    shield: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
    seo: <><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></>,
    globe: <><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></>,
    donation: <><path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 7.65l.77.77L12 20.65l7.65-7.65.77-.77a5.4 5.4 0 0 0 0-7.65z" /></>,
    options: <><line x1="4" y1="21" x2="4" y2="14" /><line x1="4" y1="10" x2="4" y2="3" /><line x1="12" y1="21" x2="12" y2="12" /><line x1="12" y1="8" x2="12" y2="3" /><line x1="20" y1="21" x2="20" y2="16" /><line x1="20" y1="12" x2="20" y2="3" /><line x1="1" y1="14" x2="7" y2="14" /><line x1="9" y1="8" x2="15" y2="8" /><line x1="17" y1="16" x2="23" y2="16" /></>,
    blog: <><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></>,
    program: <><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></>,
    testimonial: <><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></>,
    founder: <><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></>,
    team: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>,
    vacancy: <><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></>,
    jobs: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><line x1="19" y1="8" x2="19" y2="14" /><line x1="22" y1="11" x2="16" y2="11" /></>,
    volunteer: <><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" /></>,
    partnership: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>,
    faq: <><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" /></>,
    newsletter: <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></>,
    users: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>,
    logout: <><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" /></>,
    document: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></>,
    book: <><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></>,
    mail: <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></>,
    settings: <><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" /></>,
  };

  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {icons[name] || icons.home}
    </svg>
  );
}

export default function AdminDashboard() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check authentication
    const auth = localStorage.getItem('wrf_admin_auth');
    const loginTime = localStorage.getItem('wrf_admin_login_time');
    
    if (auth === 'true' && loginTime) {
      const elapsed = Date.now() - parseInt(loginTime);
      const twentyFourHours = 24 * 60 * 60 * 1000;
      
      if (elapsed < twentyFourHours) {
        setIsAuthenticated(true);
      } else {
        // Session expired
        localStorage.removeItem('wrf_admin_auth');
        localStorage.removeItem('wrf_admin_login_time');
        router.push('/AdminLogin');
      }
    } else {
      router.push('/AdminLogin');
    }
    setIsLoading(false);
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('wrf_admin_auth');
    localStorage.removeItem('wrf_admin_login_time');
    router.push('/AdminLogin');
  };

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-50">
        <div className="text-gray-500">Loading...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-72 flex-shrink-0 overflow-y-auto border-r border-gray-200 bg-white">
        <div className="p-4">
          <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-400">
            Management
          </p>
          <nav className="space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                  item.active
                    ? 'bg-teal-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Icon name={item.icon} />
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Top Header */}
        <header className="flex h-16 items-center justify-between border-b border-gray-200 bg-white px-6">
          <div className="flex items-center gap-3">
            <span className="text-xl font-bold text-gray-900">WRF Admin</span>
            <span className="text-gray-400">Women&apos;s Rights First</span>
          </div>
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900"
            >
              <Icon name="globe" />
              View Website
            </Link>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900"
            >
              <Icon name="logout" />
              Logout
            </button>
            <span className="text-sm text-gray-500">Admin Access</span>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-6">
          {/* Page Title */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="mt-1 text-gray-500">
              Welcome to the WRF content management system
            </p>
          </div>

          {/* Stats Cards */}
          <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border border-gray-200 bg-white p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">Content Sections</p>
                  <p className="mt-1 text-3xl font-bold text-gray-900">0</p>
                </div>
                <div className="rounded-lg bg-blue-50 p-3 text-blue-500">
                  <Icon name="document" />
                </div>
              </div>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">Active Programs</p>
                  <p className="mt-1 text-3xl font-bold text-gray-900">0</p>
                </div>
                <div className="rounded-lg bg-green-50 p-3 text-green-500">
                  <Icon name="book" />
                </div>
              </div>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">News Articles</p>
                  <p className="mt-1 text-3xl font-bold text-gray-900">0</p>
                </div>
                <div className="rounded-lg bg-purple-50 p-3 text-purple-500">
                  <Icon name="mail" />
                </div>
              </div>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">Registered Users</p>
                  <p className="mt-1 text-3xl font-bold text-gray-900">0</p>
                </div>
                <div className="rounded-lg bg-gray-100 p-3 text-gray-600">
                  <Icon name="users" />
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mb-8 rounded-lg border border-gray-200 bg-white p-6">
            <div className="mb-4 flex items-center gap-2">
              <Icon name="settings" className="text-gray-400" />
              <h2 className="text-lg font-bold text-gray-900">Quick Actions</h2>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <button className="flex items-center gap-4 rounded-lg border border-gray-200 p-4 text-left transition-colors hover:bg-gray-50">
                <div className="rounded-lg bg-blue-50 p-3 text-blue-500">
                  <Icon name="document" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Add Content</p>
                  <p className="text-sm text-gray-500">Update website sections</p>
                </div>
              </button>
              <button className="flex items-center gap-4 rounded-lg border border-gray-200 p-4 text-left transition-colors hover:bg-gray-50">
                <div className="rounded-lg bg-green-50 p-3 text-green-500">
                  <Icon name="book" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">New Program</p>
                  <p className="text-sm text-gray-500">Create program</p>
                </div>
              </button>
              <button className="flex items-center gap-4 rounded-lg border border-gray-200 p-4 text-left transition-colors hover:bg-gray-50">
                <div className="rounded-lg bg-purple-50 p-3 text-purple-500">
                  <Icon name="mail" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Post News</p>
                  <p className="text-sm text-gray-500">Share updates</p>
                </div>
              </button>
              <Link
                href="/"
                className="flex items-center gap-4 rounded-lg border border-gray-200 p-4 text-left transition-colors hover:bg-gray-50"
              >
                <div className="rounded-lg bg-teal-50 p-3 text-teal-500">
                  <Icon name="globe" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">View Website</p>
                  <p className="text-sm text-gray-500">See public site</p>
                </div>
              </Link>
            </div>
          </div>

          {/* Recent Content & News */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-gray-900">Recent Content</h2>
                <button className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                  View All
                </button>
              </div>
              <div className="mt-4 text-center text-gray-400 py-8">
                No content yet
              </div>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-gray-900">Recent News</h2>
                <button className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                  View All
                </button>
              </div>
              <div className="mt-4 text-center text-gray-400 py-8">
                No news yet
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
