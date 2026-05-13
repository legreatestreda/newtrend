import './globals.css';
import type { Metadata } from 'next';
import { PrimaryLayout } from '@/layouts';

export const metadata: Metadata = {
  title: 'New trend',
  description: 'App migrated to App Router',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <PrimaryLayout>
          {children}
        </PrimaryLayout>
      </body>
    </html>
  );
}