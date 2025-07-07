import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative w-full py-20 md:py-32 lg:py-40">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8 text-center">
          <div className="space-y-6 max-w-4xl">
            <h1 className="text-4xl font-headline font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 sm:text-5xl md:text-6xl">
              Crafting Digital Experiences That Convert
            </h1>
            <p className="text-lg text-foreground/80 md:text-xl">
              We are Adnora Productions, a full-service digital agency specializing in building powerful brands and driving growth through innovative marketing strategies.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row justify-center">
            <Button asChild size="lg">
              <Link href="#portfolio">View Our Work</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#contact">Get a Free Quote</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
