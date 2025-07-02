import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative w-full py-20 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80 z-0"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="container relative z-10 px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-4xl font-headline font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 sm:text-5xl md:text-6xl lg:text-7xl">
              Crafting Digital Experiences That Convert
            </h1>
            <p className="text-lg text-foreground/80 md:text-xl">
              We are Adnora Productions, a full-service digital agency specializing in building powerful brands and driving growth through innovative marketing strategies.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row justify-center lg:justify-start">
              <Button asChild size="lg">
                <Link href="#portfolio">View Our Work</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#contact">Get a Free Quote</Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <Image
              src="https://placehold.co/800x600"
              alt="Dynamic visualization of a digital marketing campaign"
              width={800}
              height={600}
              className="rounded-xl shadow-2xl shadow-primary/10 transform transition-all duration-500 hover:scale-105"
              data-ai-hint="futuristic digital interface"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
