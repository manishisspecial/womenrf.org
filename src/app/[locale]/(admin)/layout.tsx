import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Admin | WRF',
  description: 'Women\'s Rights First Admin',
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={`font-sans ${inter.variable} bg-gray-50 min-h-screen`}>{children}</div>;
}
