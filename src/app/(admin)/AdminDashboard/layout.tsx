import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin Dashboard | WRF',
  description: 'Women\'s Rights First Admin Dashboard',
};

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
