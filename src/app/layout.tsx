import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "Women's Rights First | womenrf.org",
  description:
    "Empowering Women, Transforming Lives. Be part of our effort to ensure that every woman in Afghanistan enjoys her fundamental rights to equality, dignity, and self-determination.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}
