import './globals.css';
import type { Metadata } from 'next';
import { PrimaryLayout } from '@/layouts';
import Providers from './providers';

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
        <Providers>
          <PrimaryLayout>{children}</PrimaryLayout>
        </Providers>
      </body>
    </html>
  );
}