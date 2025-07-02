import { Header } from '@/components/landing/header';
import { Hero } from '@/components/landing/hero';
import { Services } from '@/components/landing/services';
import { ContentMarketing } from '@/components/landing/content-marketing';
import { Portfolio } from '@/components/landing/portfolio';
import { Testimonials } from '@/components/landing/testimonials';
import { Clients } from '@/components/landing/clients';
import { TaglineGenerator } from '@/components/landing/tagline-generator';
import { Blog } from '@/components/landing/blog';
import { Contact } from '@/components/landing/contact';
import { Footer } from '@/components/landing/footer';

export default function Home() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <ContentMarketing />
        <Portfolio />
        <Testimonials />
        <Clients />
        <TaglineGenerator />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
