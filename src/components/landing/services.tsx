'use client';

import { useEffect, useRef, useState } from 'react';
import { Megaphone, Search, PenSquare, BarChart, Video, Users, ArrowUpRight } from 'lucide-react';

const services = [
  {
    icon: <PenSquare className="h-10 w-10 text-primary" />,
    title: 'Content Marketing',
    description: 'Engage and convert with high-value content that builds authority and drives organic traffic.',
    number: '01',
  },
  {
    icon: <Search className="h-10 w-10 text-primary" />,
    title: 'SEO & Website Management',
    description: 'Climb search rankings and optimize your digital hub for performance and user experience.',
    number: '02',
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: 'Social Media Strategy',
    description: 'Build and nurture communities on platforms where your audience lives, breathes, and engages.',
    number: '03',
  },
  {
    icon: <BarChart className="h-10 w-10 text-primary" />,
    title: 'Performance Marketing',
    description: 'Maximize ROI with data-driven PPC, Meta Ads, and Google Ads campaigns that deliver results.',
    number: '04',
  },
  {
    icon: <Video className="h-10 w-10 text-primary" />,
    title: 'Video & Graphics Production',
    description: 'Capture attention with stunning visuals, from viral-ready videos to compelling graphic design.',
    number: '05',
  },
  {
    icon: <Megaphone className="h-10 w-10 text-primary" />,
    title: 'Lead Generation',
    description: 'Fuel your sales pipeline with qualified leads generated through targeted, multi-channel strategies.',
    number: '06',
  },
];

export function Services() {
  const [mounted, setMounted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

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

      // Services with enhanced animations and parallax
      if (servicesRef.current) {
        const serviceItems = servicesRef.current.children;

        serviceItems.forEach((item, index) => {
          const service = item as HTMLElement;
          const icon = service.querySelector('.p-4');
          
          // Reveal animation with stagger
          gsap.fromTo(
            service,
            {
              opacity: 0,
              y: 100,
              scale: 0.9,
              rotationY: 15,
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              rotationY: 0,
              duration: 1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: service,
                start: 'top 85%',
              },
              delay: index * 0.1,
            }
          );

          // Parallax effect on scroll
          gsap.to(service, {
            y: index % 2 === 0 ? -20 : 20,
            ease: 'none',
            scrollTrigger: {
              trigger: service,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1,
            },
          });

          // Icon rotation on scroll
          if (icon) {
            gsap.to(icon, {
              rotation: 360,
              ease: 'none',
              scrollTrigger: {
                trigger: service,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1,
              },
            });
          }

          // Enhanced hover scale effect
          service.addEventListener('mouseenter', () => {
            gsap.to(service, {
              scale: 1.05,
              y: -5,
              duration: 0.4,
              ease: 'power2.out',
            });
            if (icon) {
              gsap.to(icon, {
                rotation: 10,
                scale: 1.1,
                duration: 0.4,
                ease: 'power2.out',
              });
            }
          });

          service.addEventListener('mouseleave', () => {
            gsap.to(service, {
              scale: 1,
              y: 0,
              duration: 0.4,
              ease: 'power2.out',
            });
            if (icon) {
              gsap.to(icon, {
                rotation: 0,
                scale: 1,
                duration: 0.4,
                ease: 'power2.out',
              });
            }
          });
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
      id="services"
      className="relative py-20 md:py-28 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(111,166,31,0.08),transparent_50%)]" />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Title */}
        <div ref={titleRef} className="mb-16 md:mb-20">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
            <span className="text-sm font-medium text-primary">Our Expertise</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight" style={{ lineHeight: '1.2' }}>
            <span className="block text-white" style={{ paddingBottom: '0.5rem', overflow: 'visible', display: 'block' }}>Our Arsenal</span>
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
              of Services
            </span>
          </h2>
        </div>

        {/* Services Grid - Fluid Layout */}
        <div
          ref={servicesRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7"
        >
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group relative overflow-hidden rounded-2xl p-7 md:p-9 bg-gradient-to-br from-card/30 to-card/10 border border-white/10 backdrop-blur-xl hover:border-primary/50 transition-all duration-500 cursor-pointer"
              >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Number */}
              <div className="absolute top-5 right-5 text-5xl md:text-6xl font-black text-primary/5 group-hover:text-primary/10 transition-colors duration-500">
                {service.number}
              </div>

              {/* Content */}
              <div className="relative z-10">
                <div className="mb-5 p-4 rounded-xl bg-primary/10 border border-primary/20 w-fit group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                  {service.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed mb-4 text-base md:text-lg">
                  {service.description}
                </p>
                <div className="flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-semibold">Explore</span>
                  <ArrowUpRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>

              {/* Decorative line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
