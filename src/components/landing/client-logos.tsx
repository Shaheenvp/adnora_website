'use client';

import { useRef } from 'react';
import Image from 'next/image';

// Client logos
const clientLogos = [
  {
    name: 'Madreena Kitchen',
    logo: '/madreena-kitchen.png',
    alt: 'Madreena Kitchen Logo',
  },
  {
    name: 'Edufy',
    logo: '/edufy.png',
    alt: 'Edufy Logo',
  },
  {
    name: 'Qasr Laban',
    logo: '/qasr_logo.png',
    alt: 'Qasr Laban Logo',
  },
  {
    name: 'Beat Box',
    logo: '/beatbox_logo.png',
    alt: 'Beat Box Logo',
  },
  {
    name: 'Haji Makaan Restaurant',
    logo: '/hajimakaan_logo.png',
    alt: 'Haji Makaan Restaurant Logo',
  },
  {
    name: 'Client',
    logo: '/red2.png',
    alt: 'Client Logo',
  },
];

export function ClientLogos() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...clientLogos, ...clientLogos];

  return (
    <section className="relative bg-gradient-to-b from-white via-gray-50 to-white py-8 md:py-10 overflow-hidden border-y border-gray-200">
      {/* Subtle gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-6 md:mb-8">
          <p className="text-xs md:text-sm text-gray-600 font-medium uppercase tracking-wider">
            Trusted by leading brands
          </p>
        </div>
        
        {/* Infinite scrolling logos with fade edges */}
        <div className="relative w-full overflow-hidden">
          {/* Left fade gradient */}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-white via-gray-50 to-transparent z-10 pointer-events-none" />
          
          {/* Right fade gradient */}
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-white via-gray-50 to-transparent z-10 pointer-events-none" />
          
          <div
            ref={containerRef}
            className="flex gap-6 md:gap-8 lg:gap-10 items-center animate-scroll-logos"
            style={{
              width: 'fit-content',
            }}
          >
            {duplicatedLogos.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex-shrink-0 flex items-center justify-center w-[120px] md:w-[140px] h-[50px] md:h-[60px] px-3"
              >
                <div className="relative w-full h-full opacity-90 hover:opacity-100 transition-all duration-300 hover:scale-105">
                  <Image
                    src={client.logo}
                    alt={client.alt}
                    width={140}
                    height={60}
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

