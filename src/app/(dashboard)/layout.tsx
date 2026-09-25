import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CodePrep AI - Dashboard',
  description: 'Your personalized technical interview prep dashboard',
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <main className="flex-1 overflow-y-auto bg-background/50">
        {children}
      </main>
    </div>
  );
}
