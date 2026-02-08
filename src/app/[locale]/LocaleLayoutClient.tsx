'use client';

import { usePathname } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { TranslationProvider } from '@/lib/TranslationContext';

const LOCALES = ['en', 'fa', 'ps'];
function isAdminRoute(pathname: string): boolean {
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length < 2) return false;
  const second = segments[1];
  // AdminLogin gets header/footer; only dashboard and *Management hide them
  return (
    second === 'AdminDashboard' ||
    (second?.endsWith('Management') ?? false)
  );
}

export function LocaleLayoutClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() ?? '';
  const admin = isAdminRoute(pathname);

  if (admin) {
    return <TranslationProvider>{children}</TranslationProvider>;
  }

  return (
    <TranslationProvider>
      <Header />
      <main>{children}</main>
      <Footer />
    </TranslationProvider>
  );
}
