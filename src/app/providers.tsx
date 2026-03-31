'use client';

import { SessionProvider } from 'next-auth/react';
import { Header } from '@/components';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <Header />
      <main className="min-h-screen">
        {children}
      </main>
      <footer className="bg-crime-darker border-t border-gray-700 py-6 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} CrimeWire. All rights reserved. For educational purposes only.
          </p>
        </div>
      </footer>
    </SessionProvider>
  );
}