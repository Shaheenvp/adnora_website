import { Header } from '@/components/landing/header';
import { Hero } from '@/components/landing/hero';
import { About } from '@/components/landing/about';
import { Services } from '@/components/landing/services';
import { Workflow } from '@/components/landing/workflow';
import { Portfolio } from '@/components/landing/portfolio';
import { WhyUs } from '@/components/landing/why-us';
import { Contact } from '@/components/landing/contact';
import { Footer } from '@/components/landing/footer';
import { Testimonials } from '@/components/landing/testimonials';
import { Blog } from '@/components/landing/blog';
import { TaglineGenerator } from '@/components/landing/tagline-generator';

export default function Home() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Workflow />
        <Portfolio />
        <WhyUs />
        <Testimonials />
        <TaglineGenerator />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
