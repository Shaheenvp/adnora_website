import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
      </div>
      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8">
          <div className="space-y-6 max-w-4xl animate-fade-in-up">
            <h1 className="text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-neutral-300 to-primary/80 sm:text-6xl md:text-7xl bg-[400%_400%] animate-gradient-pan">
              Crafting Legacies, Not Just Campaigns.
            </h1>
            <p className="text-lg text-foreground/80 md:text-xl max-w-2xl mx-auto">
              We are a futuristic digital marketing agency engineering growth through disruptive strategies and compelling creative.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row justify-center animate-fade-in-up animation-delay-300">
            <Button asChild size="lg" className="group relative">
              <Link href="#contact">
                Let's Build Your Legacy
                <span className="absolute top-0 left-0 w-full h-full rounded-md bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping" style={{animationDuration: '1.5s'}}></span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
