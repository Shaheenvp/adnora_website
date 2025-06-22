import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center text-center">
       <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80 z-0"></div>
       <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
       <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-4xl font-headline font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 sm:text-5xl md:text-6xl lg:text-7xl">
            Crafting Digital Experiences That Convert
          </h1>
          <p className="text-lg text-foreground/80 md:text-xl">
            We are Adnora Productions, a full-service digital agency specializing in building powerful brands and driving growth through innovative marketing strategies.
          </p>
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

function BgPattern() {
    return (
        <svg
        aria-hidden="true"
        className="absolute inset-0 h-full w-full"
        >
        <defs>
            <pattern
            id="grid-pattern"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
            x="50%"
            y="50%"
            >
            <path d="M.5 20V.5H20" fill="none" stroke="hsl(var(--border))" strokeOpacity="0.5" />
            </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
    );
}
