import type { Metadata } from 'next';
import { Roboto, Poppins } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import { WhatsAppFAB } from '@/components/whatsapp-fab';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['600', '700', '900'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Adnora Productions | Digital Marketing & Web Development Agency',
  description: 'Adnora Productions is a full-service digital marketing agency in India, specializing in SEO, content creation, branding, and web & app development. We craft digital experiences that drive growth and convert visitors into customers.',
  keywords: 'digital marketing, seo, content creation, branding, web development, app development, social media marketing, marketing agency, Adnora Productions, Kerala, India',
  icons: {
    icon: '/logo.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={cn('font-body antialiased', roboto.variable, poppins.variable)}>
        {children}
        <Toaster />
        <WhatsAppFAB />
      </body>
    </html>
  );
}
