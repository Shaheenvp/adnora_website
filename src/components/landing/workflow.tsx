'use client';

import { Rocket, Microscope, DraftingCompass, BarChart, Trophy, Workflow as WorkflowIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useEffect, useState, useRef } from 'react';

const steps = [
  {
    icon: <Rocket className="h-6 w-6 lg:h-8 lg:w-8 text-primary" />,
    title: "Kick-off & Discovery",
    description: "We start by understanding your vision, objectives, and challenges. This is where we align on goals and set the stage for success."
  },
  {
    icon: <Microscope className="h-6 w-6 lg:h-8 lg:w-8 text-primary" />,
    title: "Analysis & Research",
    description: "Our team conducts in-depth market, competitor, and audience research to uncover insights and identify opportunities."
  },
  {
    icon: <DraftingCompass className="h-6 w-6 lg:h-8 lg:w-8 text-primary" />,
    title: "Strategy & Planning",
    description: "We craft a bespoke, data-driven strategy tailored to your goals, outlining the channels, tactics, and KPIs for our campaign."
  },
  {
    icon: <BarChart className="h-6 w-6 lg:h-8 lg:w-8 text-primary" />,
    title: "Execution & Optimization",
    description: "This is where the magic happens. We launch the campaign, continuously monitoring, testing, and optimizing for peak performance."
  },
  {
    icon: <Trophy className="h-6 w-6 lg:h-8 lg:w-8 text-primary" />,
    title: "Reporting & Scaling",
    description: "You get transparent, detailed reports on performance. We analyze the results and identify opportunities to scale our success."
  },
  {
    icon: <WorkflowIcon className="h-6 w-6 lg:h-8 lg:w-8 text-primary" />,
    title: "Continuous Growth",
    description: "Our partnership doesn't end at reporting. We focus on long-term growth, adapting strategies to keep you ahead of the curve."
  }
];

const useIntersectionObserver = (options: IntersectionObserverInit) => {
  const [entries, setEntries] = useState<IntersectionObserverEntry[]>([]);
  const observer = useRef<IntersectionObserver | null>(null);
  const observedElements = useRef(new Set<Element>());

  useEffect(() => {
    if (observer.current) {
      observer.current.disconnect();
    }
    
    observer.current = new IntersectionObserver((observedEntries) => {
      setEntries(observedEntries);
    }, options);

    const { current: currentObserver } = observer;
    const elements = observedElements.current;
    
    elements.forEach(el => currentObserver.observe(el));

    return () => {
      currentObserver.disconnect();
    };
  }, [options]);

  const observe = (element: Element | null) => {
    if (element && !observedElements.current.has(element)) {
      observedElements.current.add(element);
      observer.current?.observe(element);
    }
  };

  const unobserve = (element: Element | null) => {
    if (element && observedElements.current.has(element)) {
      observedElements.current.delete(element);
      observer.current?.unobserve(element);
    }
  };
  
  return { observe, unobserve, entries };
};

const WorkflowStep = ({ step, index }: { step: (typeof steps)[0], index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { entries, observe } = useIntersectionObserver({ threshold: 0.5 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (ref.current) {
      observe(ref.current);
    }
  }, [observe]);
  
  useEffect(() => {
    const entry = entries.find(entry => entry.target === ref.current);
    if (entry?.isIntersecting) {
      setIsVisible(true);
    }
  }, [entries]);

  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={cn(
        "relative mb-12 md:mb-16 flex items-center w-full",
        "flex-col lg:flex-row",
        isEven ? 'lg:justify-start' : 'lg:justify-end'
      )}
    >
      <div className={cn(
        "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-background border-2 border-primary rounded-full flex items-center justify-center z-10 transition-all duration-500 delay-300 shadow-lg shadow-primary/20",
        "lg:left-1/2",
        "hidden lg:flex",
        isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
      )}>
        <span className="text-primary font-bold text-sm">{index + 1}</span>
      </div>

      {/* Mobile/Tablet: Centered layout */}
      <div className={cn(
        "w-full lg:w-[calc(50%-2rem)] transition-all duration-1000",
        "flex flex-col items-center lg:items-start",
        isVisible ? "opacity-100" : "opacity-0",
        isVisible ? "translate-y-0" : "translate-y-10",
        "lg:translate-y-0",
        isEven ? "lg:pr-12" : "lg:pl-12",
        "px-4 lg:px-0"
      )}>
        <div className={cn(
          "w-8 h-8 bg-background border-2 border-primary rounded-full flex items-center justify-center mb-4 lg:hidden transition-transform duration-500 delay-300",
          isVisible ? 'scale-100' : 'scale-0'
        )}>
          <span className="text-primary font-bold">{index + 1}</span>
        </div>
        <div className={cn(
          "glass-card p-6 lg:p-8 group transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 w-full",
          "text-center lg:text-left",
          isEven && "lg:text-right"
        )}>
          <div className={cn(
            "flex items-center gap-3 lg:gap-4 mb-3 lg:mb-4 justify-center lg:justify-start",
            isEven && "lg:justify-end"
          )}>
             {!isEven && <div className="hidden sm:block lg:block">{step.icon}</div>}
             <h3 className="font-bold text-xl lg:text-2xl">{step.title}</h3>
             {isEven && <div className="hidden sm:block lg:block">{step.icon}</div>}
          </div>
          <p className="text-foreground/80 text-sm lg:text-base leading-relaxed">{step.description}</p>
        </div>
      </div>
    </div>
  );
};


export function Workflow() {
  const lineRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const stepsContainerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

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

        // Enhanced workflow animations with scroll-triggered reveals
        if (stepsContainerRef.current) {
          const steps = stepsContainerRef.current.children;

          // Animate progress line - smoother animation
          if (lineRef.current) {
            gsap.to(lineRef.current, {
              height: '100%',
              ease: 'power1.out',
              scrollTrigger: {
                trigger: stepsContainerRef.current,
                start: 'top center',
                end: 'bottom center',
                scrub: 0.5,
              },
            });
          }

          // Animate each step as it comes into view with stagger (non-scrub for better performance)
          Array.from(steps).forEach((step, index) => {
            const stepElement = step as HTMLElement;
            const stepCard = stepElement.querySelector('.glass-card');
            const stepNumber = stepElement.querySelector('.absolute');

            // Step card animation - removed rotationX for better performance
            if (stepCard) {
              gsap.fromTo(
                stepCard,
                {
                  opacity: 0,
                  y: 60,
                  scale: 0.95,
                },
                {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  duration: 0.8,
                  ease: 'power3.out',
                  scrollTrigger: {
                    trigger: stepElement,
                    start: 'top 85%',
                    toggleActions: 'play none none none',
                  },
                }
              );
            }

            // Step number animation with bounce
            if (stepNumber) {
              gsap.fromTo(
                stepNumber,
                {
                  scale: 0,
                  opacity: 0,
                  rotation: -180,
                },
                {
                  scale: 1,
                  opacity: 1,
                  rotation: 0,
                  duration: 0.6,
                  ease: 'back.out(2)',
                  scrollTrigger: {
                    trigger: stepElement,
                    start: 'top 85%',
                    toggleActions: 'play none none none',
                  },
                }
              );
            }
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
    <section ref={sectionRef} id="workflow" className="bg-secondary/30 py-20 md:py-28 overflow-hidden">
      <div ref={containerRef} className="container mx-auto px-4 md:px-6 lg:px-8">
        <div ref={titleRef} className="flex flex-col items-center justify-center space-y-4 text-center mb-16 md:mb-20">
          <div className="space-y-3">
            <div className="inline-block rounded-lg bg-primary/10 px-4 py-2 text-sm font-medium text-primary">Our Process</div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight" style={{ lineHeight: '1.2', paddingBottom: '0.5rem', overflow: 'visible' }}>The Blueprint to Your Success</h2>
            <p className="max-w-2xl text-foreground/70 md:text-lg lg:text-xl mx-auto">
              Our proven workflow ensures every project is strategic, transparent, and built for results.
            </p>
          </div>
        </div>
        <div ref={stepsContainerRef} className="relative max-w-6xl mx-auto mt-12 md:mt-16">
          <div className="hidden lg:block absolute left-1/2 top-0 h-full w-[2px] bg-primary/20 -translate-x-1/2"></div>
          <div ref={lineRef} className="hidden lg:block absolute left-1/2 top-0 w-[2px] bg-primary -translate-x-1/2 transition-all duration-300" style={{height: 0}}></div>
          
          {steps.map((step, index) => (
            <WorkflowStep key={step.title} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
