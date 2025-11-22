'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function useGSAPAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Default animations
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return containerRef;
}

export function useScrollAnimation(options?: {
  trigger?: string | Element;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  markers?: boolean;
}) {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;
    
    gsap.fromTo(
      element,
      {
        opacity: 0,
        y: 60,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: options?.trigger || element,
          start: options?.start || 'top 80%',
          end: options?.end || 'bottom 20%',
          scrub: options?.scrub || false,
          markers: options?.markers || false,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [options]);

  return elementRef;
}

export function useStaggerAnimation(
  selector: string,
  options?: {
    trigger?: string | Element;
    start?: string;
    stagger?: number;
    direction?: 'up' | 'down' | 'left' | 'right';
  }
) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const elements = containerRef.current.querySelectorAll(selector);
    if (elements.length === 0) return;

    const direction = options?.direction || 'up';
    const fromProps: any = {
      opacity: 0,
    };
    
    if (direction === 'up') fromProps.y = 40;
    if (direction === 'down') fromProps.y = -40;
    if (direction === 'left') fromProps.x = 40;
    if (direction === 'right') fromProps.x = -40;

    gsap.fromTo(
      elements,
      fromProps,
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: options?.stagger || 0.15,
        scrollTrigger: {
          trigger: options?.trigger || containerRef.current,
          start: options?.start || 'top 80%',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [selector, options]);

  return containerRef;
}

