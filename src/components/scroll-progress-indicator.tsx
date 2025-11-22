'use client';

import { useEffect, useRef, useState } from 'react';

export function ScrollProgressIndicator() {
  const [mounted, setMounted] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || typeof window === 'undefined') return;

    const updateProgress = () => {
      if (!progressRef.current) return;

      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollableHeight = documentHeight - windowHeight;
      const progress = (scrollTop / scrollableHeight) * 100;

      progressRef.current.style.width = `${Math.min(100, Math.max(0, progress))}%`;
    };

    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();

    return () => {
      window.removeEventListener('scroll', updateProgress);
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-primary/10 z-50">
      <div
        ref={progressRef}
        className="h-full bg-gradient-to-r from-primary via-primary/90 to-primary transition-all duration-150 ease-out"
        style={{ width: '0%' }}
      />
    </div>
  );
}

