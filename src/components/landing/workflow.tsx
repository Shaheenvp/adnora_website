'use client';

import { Rocket, Microscope, DraftingCompass, BarChart, Trophy, Workflow as WorkflowIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useEffect, useState, useRef } from 'react';

const steps = [
  {
    icon: <Rocket className="h-8 w-8 text-primary" />,
    title: "Kick-off & Discovery",
    description: "We start by understanding your vision, objectives, and challenges. This is where we align on goals and set the stage for success."
  },
  {
    icon: <Microscope className="h-8 w-8 text-primary" />,
    title: "Analysis & Research",
    description: "Our team conducts in-depth market, competitor, and audience research to uncover insights and identify opportunities."
  },
  {
    icon: <DraftingCompass className="h-8 w-8 text-primary" />,
    title: "Strategy & Planning",
    description: "We craft a bespoke, data-driven strategy tailored to your goals, outlining the channels, tactics, and KPIs for our campaign."
  },
  {
    icon: <BarChart className="h-8 w-8 text-primary" />,
    title: "Execution & Optimization",
    description: "This is where the magic happens. We launch the campaign, continuously monitoring, testing, and optimizing for peak performance."
  },
  {
    icon: <Trophy className="h-8 w-8 text-primary" />,
    title: "Reporting & Scaling",
    description: "You get transparent, detailed reports on performance. We analyze the results and identify opportunities to scale our success."
  },
  {
    icon: <WorkflowIcon className="h-8 w-8 text-primary" />,
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
        "relative mb-12 flex items-center w-full",
        isEven ? 'justify-start' : 'justify-end'
      )}
    >
      <div className={cn("absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-background border-2 border-primary rounded-full flex items-center justify-center z-10 transition-transform duration-500 delay-300", isVisible ? 'scale-100' : 'scale-0')}>
        <span className="text-primary font-bold">{index + 1}</span>
      </div>

      <div className={cn("w-1/2 transition-all duration-1000",
        isVisible ? "opacity-100" : "opacity-0",
        isEven ? (isVisible ? "translate-x-0" : "-translate-x-10") : (isVisible ? "translate-x-0" : "translate-x-10"),
        isEven ? 'pr-8' : 'pl-8'
        )}>
        <div className={cn("glass-card p-6 group transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1", isEven ? 'text-right' : 'text-left')}>
          <div className={cn("flex items-center gap-4 mb-2", isEven ? 'justify-end' : 'justify-start')}>
             {!isEven && <div className="hidden sm:block">{step.icon}</div>}
             <h3 className="font-bold text-xl">{step.title}</h3>
             {isEven && <div className="hidden sm:block">{step.icon}</div>}
          </div>
          <p className="text-foreground/80">{step.description}</p>
        </div>
      </div>
    </div>
  );
};


export function Workflow() {
  const lineRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !lineRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Calculate the start and end of the scroll animation
      const scrollStart = containerRect.top + window.scrollY;
      const scrollEnd = scrollStart + containerRect.height - viewportHeight;
      
      const scrollPosition = window.scrollY;
      
      let progress = 0;
      if (scrollPosition > scrollStart && scrollPosition < scrollEnd) {
        progress = (scrollPosition - scrollStart) / (containerRect.height - viewportHeight);
      } else if (scrollPosition >= scrollEnd) {
        progress = 1;
      }
      
      progress = Math.min(1, Math.max(0, progress));

      if (lineRef.current) {
        lineRef.current.style.height = `${progress * 100}%`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="workflow" className="bg-secondary/30">
      <div ref={containerRef} className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">Our Process</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">The Blueprint to Your Success</h2>
            <p className="max-w-[900px] text-foreground/80 md:text-lg">
              Our proven workflow ensures every project is strategic, transparent, and built for results.
            </p>
          </div>
        </div>
        <div className="relative max-w-5xl mx-auto mt-8">
          <div className="absolute left-1/2 top-0 h-full w-0.5 bg-primary/20 -translate-x-1/2"></div>
          <div ref={lineRef} className="absolute left-1/2 top-0 w-0.5 bg-primary -translate-x-1/2" style={{height: 0}}></div>
          
          {steps.map((step, index) => (
            <WorkflowStep key={step.title} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
