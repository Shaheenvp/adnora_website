import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import { WhatsAppFAB } from '@/components/whatsapp-fab';
import { ScrollProgressIndicator } from '@/components/scroll-progress-indicator';

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '700', '800'],
  variable: '--font-manrope',
});

export const metadata: Metadata = {
  title: 'Adnora Productions | Crafting Digital Legacies',
  description: 'Adnora Productions is a futuristic digital marketing agency specializing in content marketing, SEO, social media, performance marketing, and video production. We build legacies, not just campaigns.',
  keywords: 'digital marketing, content marketing, SEO, SMM, PPC, performance marketing, video production, branding, web development, Adnora Productions, Kerala, India',
  icons: {
    icon: '/logo.svg',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={cn('font-body bg-background antialiased', manrope.variable)}>
        <ScrollProgressIndicator />
        {children}
        <Toaster />
        <WhatsAppFAB />
      </body>
    </html>
  );
}