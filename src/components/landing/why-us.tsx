'use client';

import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle, ArrowRight } from 'lucide-react';

const reasons = [
  { title: "Data-Driven Decisions", description: "We replace guesswork with granular data analysis to drive every strategic move." },
  { title: "Transparent Reporting", description: "You get clear, concise reports that show you exactly what's working and why." },
  { title: "Dedicated Partnership", description: "We act as an extension of your team, fully invested in your success." },
  { title: "Future-Forward Approach", description: "We stay ahead of the curve, leveraging the latest tech and trends for your brand." },
];

export function WhyUs() {
  const [mounted, setMounted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !sectionRef.current || typeof window === 'undefined') return;

    Promise.all([
      import('gsap'),
      import('gsap/ScrollTrigger'),
    ]).then(([gsapModule, { ScrollTrigger }]) => {
      const gsap = gsapModule.default;
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
      // Left side animation
      if (leftRef.current) {
        gsap.fromTo(
          leftRef.current.children,
          {
            opacity: 0,
            x: -100,
            clipPath: 'inset(0% 100% 0% 0%)',
          },
          {
            opacity: 1,
            x: 0,
            clipPath: 'inset(0% 0% 0% 0%)',
            duration: 1.2,
            ease: 'power4.out',
            stagger: 0.15,
            scrollTrigger: {
              trigger: leftRef.current,
              start: 'top 85%',
            },
          }
        );
      }

      // Right side with stagger
      if (rightRef.current) {
        gsap.fromTo(
          rightRef.current.children,
          {
            opacity: 0,
            x: 100,
            scale: 0.95,
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 1,
            ease: 'power3.out',
            stagger: 0.2,
            scrollTrigger: {
              trigger: rightRef.current,
              start: 'top 85%',
            },
          }
        );
      }

        return () => {
          ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
      }, sectionRef);

      return () => ctx.revert();
    });
  }, [mounted]);

  return (
    <section
      ref={sectionRef}
      id="why-us"
      className="relative py-20 md:py-28 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 via-background to-secondary/20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(111,166,31,0.08),transparent_70%)]" />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center max-w-7xl mx-auto">
          {/* Left side */}
          <div ref={leftRef} className="space-y-6 text-center lg:text-left">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
              <span className="text-sm font-medium text-primary">The Adnora Advantage</span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight" style={{ lineHeight: '1.2' }}>
              <span className="block text-white" style={{ paddingBottom: '0.5rem', overflow: 'visible', display: 'block' }}>Why Partner</span>
              <span 
                className="block bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent"
                style={{ 
                  paddingBottom: '0.5rem',
                  overflow: 'visible',
                  display: 'block',
                  background: 'linear-gradient(to right, hsl(94, 67%, 38%), hsl(94, 67%, 30%), hsl(94, 67%, 38%))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                With Us?
              </span>
            </h2>
            <p className="text-lg md:text-xl text-foreground/70 leading-relaxed max-w-xl mx-auto lg:mx-0">
              In a sea of digital noise, you need a partner who can cut through. At Adnora, we combine creative firepower with strategic precision to build brands that not only stand out, but stand the test of time.
            </p>
            <div className="flex justify-center lg:justify-start pt-2">
              <Button
                asChild
                size="lg"
                className="group bg-primary hover:bg-primary/90 text-primary-foreground px-7 py-6 rounded-full shadow-xl shadow-primary/40 hover:shadow-primary/60 transition-all duration-300"
              >
                <Link href="#contact" className="flex items-center gap-2.5">
                  <span>Discuss Your Project</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right side */}
          <div ref={rightRef} className="space-y-4">
            {reasons.map((reason, index) => (
              <div
                key={reason.title}
                className="group relative overflow-hidden rounded-xl p-5 md:p-6 bg-gradient-to-br from-card/30 to-card/10 border border-white/10 backdrop-blur-xl hover:border-primary/50 transition-all duration-500 cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-primary/10 border border-primary/20 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {reason.title}
                    </h3>
                    <p className="text-foreground/70 leading-relaxed text-base md:text-lg">
                      {reason.description}
                    </p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
