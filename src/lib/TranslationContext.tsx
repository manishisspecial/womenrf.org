'use client';

import { createContext, useContext, useMemo } from 'react';
import { usePathname } from 'next/navigation';
import en from './translations/en';
import fa from './translations/fa';
import ps from './translations/ps';

export type Locale = 'en' | 'fa' | 'ps';
type TranslationMap = Record<string, string>;

const translationSets: Record<Locale, TranslationMap> = { en, fa, ps };

interface TranslationContextValue {
  locale: Locale;
  t: (key: string) => string;
  dir: 'ltr' | 'rtl';
  localePrefix: string;
}

const TranslationContext = createContext<TranslationContextValue>({
  locale: 'en',
  t: (key: string) => key,
  dir: 'ltr',
  localePrefix: '/en',
});

export function TranslationProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const value = useMemo(() => {
    const segments = pathname.split('/').filter(Boolean);
    const locale: Locale =
      segments[0] === 'fa' || segments[0] === 'ps' ? segments[0] : 'en';
    const messages = translationSets[locale] || en;
    const dir: 'ltr' | 'rtl' = locale === 'fa' || locale === 'ps' ? 'rtl' : 'ltr';

    const t = (key: string): string => {
      return messages[key] ?? en[key] ?? key;
    };

    return { locale, t, dir, localePrefix: `/${locale}` };
  }, [pathname]);

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  return useContext(TranslationContext);
}
