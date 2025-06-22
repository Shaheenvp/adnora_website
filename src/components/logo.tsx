import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <svg
      className={cn('h-8 w-auto', className)}
      viewBox="0 0 200 40"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Adnora Productions Logo"
    >
      <defs>
        <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: 'hsl(142.1, 76.2%, 60%)', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <text
        x="10"
        y="30"
        fontFamily="var(--font-roboto), sans-serif"
        fontSize="30"
        fontWeight="bold"
        fill="url(#logo-gradient)"
      >
        adnora
      </text>
    </svg>
  );
}
