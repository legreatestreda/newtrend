import React, { PropsWithChildren } from 'react';

import { Header } from '@/components/header/page';
import { Footer } from '@/components/footer/page';

export const PrimaryLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />

      <main className="min-h-screen pt-16 pb-16">
        {children}
      </main>

      <Footer />
    </>
  );
};