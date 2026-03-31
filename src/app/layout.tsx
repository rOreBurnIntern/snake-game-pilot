import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CrimeWire - True Crime News Aggregator',
  description: 'Stay informed with the latest true crime news, investigations, and trials. Your trusted source for breaking true crime stories.',
  keywords: ['true crime', 'news', 'investigation', 'trials', 'breaking news'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}