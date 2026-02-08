'use client';

import { useEffect } from 'react';

export function SetHtmlLang({ locale }: { locale: string }) {
  useEffect(() => {
    if (typeof document !== 'undefined' && locale) {
      const isRtl = locale === 'fa' || locale === 'ps';
      document.documentElement.lang = isRtl ? locale : 'en';
      document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    }
  }, [locale]);
  return null;
}
