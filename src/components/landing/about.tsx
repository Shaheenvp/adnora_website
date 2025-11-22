'use client';

import { useEffect, useRef, useState } from 'react';
import { GraduationCap, Lightbulb, Target, ArrowUpRight } from 'lucide-react';

const values = [
  {
    icon: <Target className="h-12 w-12 text-primary" />,
    title: 'Strategy First',
    description: 'We dive deep into your brand, audience, and goals to build a roadmap for success before we write a single line of copy.',
    number: '01',
  },
  {
    icon: <Lightbulb className="h-12 w-12 text-primary" />,
    title: 'Creative Excellence',
    description: 'Our team of creators, designers, and marketers are obsessed with crafting compelling narratives and visuals that captivate.',
    number: '02',
  },
  {
    icon: <GraduationCap className="h-12 w-12 text-primary" />,
    title: 'Growth-Driven',
    description: 'We are laser-focused on delivering measurable results that impact your bottom line, from traffic and leads to sales and loyalty.',
    number: '03',
  },
];

export function About() {
  const [mounted, setMounted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);

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

      // Items with parallax and reveal
      if (itemsRef.current) {
        const items = itemsRef.current.children;
        
        items.forEach((item, index) => {
          const isEven = index % 2 === 0;
          
          // Parallax effect
          gsap.to(item, {
            y: isEven ? -30 : 30,
            ease: 'none',
            scrollTrigger: {
              trigger: item,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1,
            },
          });

          // Reveal animation
          gsap.fromTo(
            item,
            {
              opacity: 0,
              x: isEven ? -100 : 100,
              scale: 0.9,
            },
            {
              opacity: 1,
              x: 0,
              scale: 1,
              duration: 1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: item,
                start: 'top 90%',
              },
            }
          );
        });
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
      id="about"
      className="relative py-20 md:py-28 overflow-hidden z-[5]"
      style={{ willChange: 'transform, opacity' }}
    >
      {/* Background with gradient mesh */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(111,166,31,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(59,130,246,0.05),transparent_50%)]" />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Section title */}
        <div ref={titleRef} className="mb-16 md:mb-20">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
            <span className="text-sm font-medium text-primary">Who We Are</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-4" style={{ lineHeight: '1.2' }}>
            <span className="block text-white" style={{ paddingBottom: '0.5rem', overflow: 'visible', display: 'block' }}>Engineers of</span>
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
              Digital Growth
            </span>
          </h2>
        </div>

        {/* Values with asymmetric layout */}
        <div ref={itemsRef} className="space-y-20 md:space-y-24">
          {values.map((value, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={value.title}
                className={`flex flex-col ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-center gap-10 md:gap-16`}
              >
                 {/* Left side - Icon and number */}
                 <div className={`flex-1 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                   <div className="inline-flex flex-col items-center md:items-start">
                     <div className="text-6xl md:text-7xl font-black text-primary/10 mb-4">
                       {value.number}
                     </div>
                     <div className="p-5 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 backdrop-blur-xl">
                       {value.icon}
                     </div>
                   </div>
                 </div>

                 {/* Right side - Content */}
                 <div className="flex-1 space-y-4">
                   <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                     {value.title}
                   </h3>
                   <p className="text-base md:text-lg text-foreground/70 leading-relaxed max-w-xl">
                     {value.description}
                   </p>
                   <div className="flex items-center gap-2 text-primary group cursor-pointer">
                     <span className="text-sm font-semibold">Learn more</span>
                     <ArrowUpRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                   </div>
                 </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
