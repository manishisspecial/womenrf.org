import type { Metadata } from 'next';
import { SetHtmlLang } from './SetHtmlLang';
import { LocaleLayoutClient } from './LocaleLayoutClient';

const LOCALES = ['en', 'fa', 'ps'] as const;

export const metadata: Metadata = {
  title: "Women's Rights First | womenrf.org",
  description:
    "Empowering Women, Transforming Lives. Be part of our effort to ensure that every woman in Afghanistan enjoys her fundamental rights to equality, dignity, and self-determination.",
};

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export default function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const locale = params.locale || 'en';
  return (
    <>
      <SetHtmlLang locale={locale} />
      <LocaleLayoutClient>{children}</LocaleLayoutClient>
    </>
  );
}
