'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from 'embla-carousel-autoplay';


const portfolioItems = [
  {
    title: 'SEO Growth for Tech Startup',
    category: 'SEO',
    image: 'https://images.unsplash.com/photo-1593437886622-34881819f1d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8c2VhcmNoJTIwZW5naW5lJTIwb3B0aW1pc2F0aW9ufGVufDB8fHx8MTc1MzYxMDc3MXww&ixlib=rb-4.1.0&q=80&w=1080',
    dataAiHint: 'analytics graph growth',
    description: 'Achieved a 300% increase in organic traffic through strategic keyword targeting and technical SEO.',
    link: '#',
  },
  {
    title: 'Meta Ads Campaign for E-commerce',
    category: 'Meta Ads',
    image: 'https://images.unsplash.com/photo-1706879349328-4a05bb3e16ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxtZXRhfGVufDB8fHx8MTc1MzYxMDg4M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    dataAiHint: 'social media feed',
    description: 'Generated a 5X return on ad spend (ROAS) for a new fashion brand using targeted video ads.',
    link: '#',
  },
  {
    title: 'Viral Blog Content Series',
    category: 'Content Marketing',
    image: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxibG9nfGVufDB8fHx8MTc1MzYxMTAyNXww&ixlib=rb-4.1.0&q=80&w=1080',
    dataAiHint: 'writing on laptop',
    description: 'Developed a blog series that attracted over 1 million readers and thousands of backlinks.',
    link: '#',
  },
  {
    title: 'Brand Video for a Cause',
    category: 'Video Production',
    image: 'https://images.unsplash.com/photo-1584224549374-995cbac1ab62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMnx8dmlkZW8lMjBwcm9kdWN0aW9ufGVufDB8fHx8MTc1MzYxMDY1MHww&ixlib=rb-4.1.0&q=80&w=1080',
    dataAiHint: 'cinematic video still',
    description: 'Produced an award-winning documentary short that drove brand awareness and social impact.',
    link: '#',
  },
];

export function Portfolio() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false, stopOnMouseEnter: false })
  );
  const [mounted, setMounted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const horizontalContainerRef = useRef<HTMLDivElement>(null);
  const portfolioItemsRef = useRef<HTMLDivElement>(null);

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
        // Title animation
        if (titleRef.current) {
          gsap.fromTo(
            titleRef.current.children,
            {
              opacity: 0,
              y: 80,
              clipPath: 'inset(100% 0% 0% 0%)',
            },
            {
              opacity: 1,
              y: 0,
              clipPath: 'inset(0% 0% 0% 0%)',
              duration: 1.2,
              ease: 'power4.out',
              stagger: 0.1,
              scrollTrigger: {
                trigger: titleRef.current,
                start: 'top 85%',
              },
            }
          );
        }

        // Simple fade-in animations for portfolio items (no horizontal scroll)
        if (portfolioItemsRef.current) {
          const items = portfolioItemsRef.current.children;
          
          Array.from(items).forEach((item, index) => {
            // Fade in items as they come into view
            gsap.fromTo(
              item,
              {
                opacity: 0,
                y: 40,
                scale: 0.95,
              },
              {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                ease: 'power3.out',
                scrollTrigger: {
                  trigger: item as HTMLElement,
                  start: 'top 85%',
                  toggleActions: 'play none none none',
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
    <section ref={sectionRef} id="portfolio" className="bg-background/50 py-20 md:py-28 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div ref={titleRef} className="flex flex-col items-center justify-center space-y-4 text-center mb-16 md:mb-20">
          <div className="space-y-3">
            <div className="inline-block rounded-lg bg-primary/10 px-4 py-2 text-sm font-medium text-primary">Case Studies</div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight" style={{ lineHeight: '1.2', paddingBottom: '0.5rem', overflow: 'visible' }}>Proof in Performance</h2>
            <p className="max-w-2xl text-foreground/70 md:text-lg lg:text-xl mx-auto">
              We don't just talk the talk. Explore our portfolio of recent projects and see the results for yourself.
            </p>
          </div>
        </div>

        {/* Grid Layout for Desktop */}
        <div className="hidden lg:block">
          <div ref={horizontalContainerRef} className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            <div ref={portfolioItemsRef} className="contents">
              {portfolioItems.map((item, index) => (
                <div
                  key={item.title}
                  className="group"
                >
                  <div className="group block glass-card overflow-hidden h-full flex flex-col transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1">
                    <div className="overflow-hidden aspect-video relative image-container">
                      <Image
                        src={item.image}
                        alt={`Portfolio item: ${item.title}`}
                        width={600}
                        height={400}
                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                        data-ai-hint={item.dataAiHint}
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <Badge variant="outline" className="mb-2 w-fit">{item.category}</Badge>
                      <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                      <p className="text-foreground/80 text-sm flex-grow">{item.description}</p>
                    </div>
                    <div className="p-6 pt-0 mt-4">
                      <Link href={item.link} className="text-sm text-primary flex items-center gap-1 font-semibold">
                        View Case Study <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Carousel for Mobile/Tablet */}
        <div className="lg:hidden">
          <Carousel
            plugins={[plugin.current]}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {portfolioItems.map((item) => (
                <CarouselItem key={item.title} className="basis-full sm:basis-1/2 pl-2 md:pl-4 flex">
                  <div className="p-1 w-full">
                    <div className="group block glass-card overflow-hidden h-full flex flex-col transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1">
                      <div className="overflow-hidden aspect-video relative image-container">
                        <Image
                          src={item.image}
                          alt={`Portfolio item: ${item.title}`}
                          width={600}
                          height={400}
                          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                          data-ai-hint={item.dataAiHint}
                        />
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <Badge variant="outline" className="mb-2 w-fit">{item.category}</Badge>
                        <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                        <p className="text-foreground/80 text-sm flex-grow">{item.description}</p>
                      </div>
                      <div className="p-6 pt-0 mt-4">
                        <Link href={item.link} className="text-sm text-primary flex items-center gap-1 font-semibold">
                          View Case Study <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
