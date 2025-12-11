'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  const [mounted, setMounted] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const titleLine1Ref = useRef<HTMLDivElement>(null);
  const titleLine2Ref = useRef<HTMLDivElement>(null);
  const titleLine3Ref = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const blob1Ref = useRef<HTMLDivElement>(null);
  const blob2Ref = useRef<HTMLDivElement>(null);
  const blob3Ref = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  // Refs for animated text elements
  const title1CharsRef = useRef<HTMLSpanElement[]>([]);
  const title2CharsRef = useRef<HTMLSpanElement[]>([]);
  const title3CharsRef = useRef<HTMLSpanElement[]>([]);
  const subtitleWordsRef = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Helper function to split text into characters
  const splitTextIntoChars = (text: string, refs: React.MutableRefObject<HTMLSpanElement[]>, hasGradient: boolean = false) => {
    let refIndex = 0;
    return text.split('').map((char, index) => {
      if (char === ' ') {
        return <span key={index} className="inline-block" style={{ width: '0.25em' }} />;
      }
      const currentRefIndex = refIndex;
      refIndex++;
      const gradientStyle = hasGradient ? {
        background: 'linear-gradient(to right, hsl(94, 67%, 38%), hsl(94, 67%, 30%), hsl(94, 67%, 38%))',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      } : {};
      return (
        <span
          key={index}
          ref={(el) => {
            if (el) refs.current[currentRefIndex] = el;
          }}
          className="inline-block cursor-default"
          style={{ 
            willChange: 'transform', 
            transformOrigin: 'center',
            margin: 0,
            padding: 0,
            ...gradientStyle
          }}
        >
          {char}
        </span>
      );
    });
  };

  // Helper function to split text into words with special handling for highlighted words
  const splitTextIntoWords = (text: string, refs: React.MutableRefObject<HTMLSpanElement[]>) => {
    const words = text.split(' ');
    const highlightedWords = ['disruptive', 'strategies', 'compelling', 'creative'];
    let refIndex = 0;
    
    return words.map((word, index) => {
      const isHighlighted = highlightedWords.includes(word.toLowerCase());
      const wordElement = (
        <span
          key={index}
          ref={(el) => {
            if (el) refs.current[refIndex] = el;
            refIndex++;
          }}
          className={`inline-block cursor-default ${isHighlighted ? 'text-primary font-medium' : ''}`}
          style={{ 
            willChange: 'transform', 
            transformOrigin: 'center',
            margin: 0,
            padding: 0
          }}
        >
          {word}
          {index < words.length - 1 && '\u00A0'}
        </span>
      );
      return wordElement;
    });
  };

  useEffect(() => {
    if (!mounted || !heroRef.current || typeof window === 'undefined') return;

    // Dynamically import GSAP only on client
    Promise.all([
      import('gsap'),
      import('gsap/ScrollTrigger'),
    ]).then(([gsapModule, { ScrollTrigger }]) => {
      const gsap = gsapModule.default;
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        // Animated blobs - use fixed values instead of random for SSR consistency
        if (blob1Ref.current) {
          gsap.to(blob1Ref.current, {
            x: 50,
            y: -50,
            rotation: 45,
            duration: 10,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
          });
        }

        if (blob2Ref.current) {
          gsap.to(blob2Ref.current, {
            x: -40,
            y: 60,
            rotation: -30,
            duration: 12,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
          });
        }

        if (blob3Ref.current) {
          gsap.to(blob3Ref.current, {
            x: 30,
            y: -30,
            rotation: 60,
            duration: 14,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
          });
        }

        // Title animations with split text effect
        const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

        if (titleLine1Ref.current) {
          tl.fromTo(
            titleLine1Ref.current,
            {
              opacity: 0,
              y: 30,
            },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: 'power3.out',
            }
          );
        }

        if (titleLine2Ref.current) {
          tl.fromTo(
            titleLine2Ref.current,
            {
              opacity: 0,
              y: 30,
            },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: 'power3.out',
            },
            '-=0.7'
          );
        }

        if (titleLine3Ref.current) {
          tl.fromTo(
            titleLine3Ref.current,
            {
              opacity: 0,
              y: 30,
            },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: 'power3.out',
            },
            '-=0.7'
          );
        }

        // Animate characters in on load
        if (title1CharsRef.current.length > 0) {
          gsap.fromTo(
            title1CharsRef.current,
            {
              opacity: 0,
              y: 50,
              rotationX: -90,
            },
            {
              opacity: 1,
              y: 0,
              rotationX: 0,
              duration: 0.8,
              ease: 'back.out(1.7)',
              stagger: 0.03,
              delay: 0.2,
            }
          );
        }

        if (title2CharsRef.current.length > 0) {
          gsap.fromTo(
            title2CharsRef.current,
            {
              opacity: 0,
              scale: 0,
              rotation: -180,
            },
            {
              opacity: 1,
              scale: 1,
              rotation: 0,
              duration: 0.6,
              ease: 'elastic.out(1, 0.5)',
              stagger: 0.04,
              delay: 0.5,
            }
          );
        }

        if (title3CharsRef.current.length > 0) {
          gsap.fromTo(
            title3CharsRef.current,
            {
              opacity: 0,
              x: -30,
            },
            {
              opacity: 1,
              x: 0,
              duration: 0.5,
              ease: 'power3.out',
              stagger: 0.02,
              delay: 0.8,
            }
          );
        }

        // Subtitle
        if (subtitleRef.current) {
          tl.fromTo(
            subtitleRef.current,
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 1 },
            '-=0.5'
          );
        }

        // Animate words in subtitle
        if (subtitleWordsRef.current.length > 0) {
          gsap.fromTo(
            subtitleWordsRef.current,
            {
              opacity: 0,
              y: 20,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.4,
              ease: 'power2.out',
              stagger: 0.05,
              delay: 1.2,
            }
          );
        }

        // Button
        if (buttonsRef.current) {
          tl.fromTo(
            buttonsRef.current,
            { opacity: 0, y: 40, scale: 0.95 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 1,
              ease: 'back.out(1.7)',
            },
            '-=0.5'
          );
        }

        // Simple and reliable hover animations that properly reset
        const setupHoverAnimation = (
          element: HTMLElement,
          chars: HTMLSpanElement[],
          onHover: (char: HTMLSpanElement, index: number) => void,
          onLeave: (char: HTMLSpanElement) => void
        ) => {
          let isHovering = false;
          
          element.addEventListener('mouseenter', () => {
            isHovering = true;
            chars.forEach((char, index) => {
              if (!char) return;
              onHover(char, index);
            });
          });

          element.addEventListener('mouseleave', () => {
            isHovering = false;
            chars.forEach((char) => {
              if (!char) return;
              // Kill any ongoing animations and reset
              gsap.killTweensOf(char);
              onLeave(char);
            });
          });
        };

        // Title line 1 - Simple scale on hover
        if (titleLine1Ref.current && title1CharsRef.current.length > 0) {
          setupHoverAnimation(
            titleLine1Ref.current,
            title1CharsRef.current,
            (char, index) => {
              gsap.to(char, {
                scale: 1.1,
                y: -3,
                duration: 0.3,
                ease: 'power2.out',
                delay: index * 0.02,
              });
            },
            (char) => {
              gsap.to(char, {
                scale: 1,
                y: 0,
                duration: 0.4,
                ease: 'power2.out',
              });
            }
          );
        }

        // Title line 2 - Subtle lift effect
        if (titleLine2Ref.current && title2CharsRef.current.length > 0) {
          setupHoverAnimation(
            titleLine2Ref.current,
            title2CharsRef.current,
            (char, index) => {
              gsap.to(char, {
                y: -5,
                scale: 1.05,
                duration: 0.3,
                ease: 'power2.out',
                delay: index * 0.015,
              });
            },
            (char) => {
              gsap.to(char, {
                y: 0,
                scale: 1,
                duration: 0.4,
                ease: 'power2.out',
              });
            }
          );
        }

        // Title line 3 - Gentle bounce
        if (titleLine3Ref.current && title3CharsRef.current.length > 0) {
          setupHoverAnimation(
            titleLine3Ref.current,
            title3CharsRef.current,
            (char, index) => {
              gsap.to(char, {
                y: -8,
                duration: 0.3,
                ease: 'power2.out',
                delay: index * 0.02,
              });
            },
            (char) => {
              gsap.to(char, {
                y: 0,
                duration: 0.4,
                ease: 'power2.out',
              });
            }
          );
        }

        // Subtitle words - Simple scale
        if (subtitleRef.current && subtitleWordsRef.current.length > 0) {
          subtitleWordsRef.current.forEach((word) => {
            if (!word) return;
            
            word.addEventListener('mouseenter', () => {
              gsap.to(word, {
                scale: 1.08,
                duration: 0.2,
                ease: 'power2.out',
              });
            });

            word.addEventListener('mouseleave', () => {
              gsap.killTweensOf(word);
              gsap.to(word, {
                scale: 1,
                duration: 0.3,
                ease: 'power2.out',
              });
            });
          });
        }

        return () => {
          tl.kill();
        };
      }, heroRef);

      return () => ctx.revert();
    });
  }, [mounted]);

  return (
    <section
      ref={heroRef}
      className="relative w-full min-h-screen flex items-center justify-center overflow-x-hidden z-10"
      style={{ willChange: 'transform', backgroundColor: 'transparent' }}
    >
      {/* Animated background blobs */}
      <div ref={bgRef} className="absolute inset-0 overflow-hidden">
        <div
          ref={blob1Ref}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[110px]"
        />
        <div
          ref={blob2Ref}
          className="absolute top-1/2 right-1/4 w-[450px] h-[450px] bg-blue-500/15 rounded-full blur-[90px]"
        />
        <div
          ref={blob3Ref}
          className="absolute bottom-1/4 left-1/2 w-[400px] h-[400px] bg-purple-500/15 rounded-full blur-[70px]"
        />
      </div>

      {/* Gradient overlay - fades out completely to reveal About section behind */}
      <div className="gradient-overlay absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-transparent z-10" />

      {/* Content */}
      <div ref={contentRef} className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10 py-20 md:py-32">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main title with creative typography */}
          <div className="space-y-0 md:space-y-1 mb-8 md:mb-10">
            <h1
              ref={titleLine1Ref}
              className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white"
              style={{ 
                lineHeight: '1.2',
                paddingTop: '0.25rem',
                paddingBottom: '0.5rem',
                marginBottom: '0',
                overflow: 'visible',
                display: 'block'
              }}
            >
              {splitTextIntoChars('Crafting', title1CharsRef)}
            </h1>
            <h1
              ref={titleLine2Ref}
              className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight"
              style={{ 
                lineHeight: '1.2',
                paddingTop: '0.25rem',
                paddingBottom: '0.5rem',
                marginBottom: '0',
                overflow: 'visible',
                display: 'block'
              }}
            >
              {splitTextIntoChars('Digital Legacies', title2CharsRef, true)}
            </h1>
            <h1
              ref={titleLine3Ref}
              className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white/70"
              style={{ 
                lineHeight: '1.2',
                paddingTop: '0.25rem',
                paddingBottom: '0.5rem',
                marginBottom: '0',
                overflow: 'visible',
                display: 'block'
              }}
            >
              {splitTextIntoChars('Not Just Campaigns', title3CharsRef)}
            </h1>
          </div>

          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="text-lg md:text-xl lg:text-2xl text-foreground/60 max-w-3xl mx-auto mb-12 md:mb-16 font-light leading-relaxed"
          >
            {splitTextIntoWords('We engineer growth through disruptive strategies and compelling creative that builds brands that stand the test of time.', subtitleWordsRef)}
          </p>

          {/* CTA Button */}
          <div ref={buttonsRef} className="flex justify-center items-center">
            <Button
              asChild
              size="lg"
              className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground px-10 md:px-12 py-7 md:py-8 text-base md:text-lg font-semibold rounded-full shadow-xl shadow-primary/40 hover:shadow-primary/60 transition-all duration-300 hover:scale-105"
            >
              <Link href="#contact" className="flex items-center gap-3">
                <span>Let's Build Your Legacy</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          {/* Decorative accent line */}
          <div className="mt-16 md:mt-20 flex justify-center">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
