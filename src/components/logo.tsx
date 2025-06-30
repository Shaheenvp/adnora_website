import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <svg
      className={cn('h-10 w-auto', className)}
      viewBox="0 0 260 100"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Adnora Productions Logo"
    >
      <style>
        {`
          .adnora-text {
            font-family: var(--font-roboto), sans-serif;
            font-weight: 900;
            font-size: 60px;
          }
          .productions-text {
            font-family: var(--font-roboto), sans-serif;
            font-weight: 400;
            font-size: 16px;
            letter-spacing: 0.45em;
          }
        `}
      </style>
      
      <g>
        <text x="0" y="60" className="adnora-text" fill="hsl(var(--foreground))">a</text>
        
        <path 
          transform="translate(38, 5)"
          d="M0,0 L0,55 L25,55 C45,55 55,43 55,27.5 C55,12 45,0 25,0 L0,0 Z M18,18.5 L33,27.5 L18,36.5 Z"
          fillRule="evenodd"
          fill="hsl(var(--foreground))"
        />

        <text x="98" y="60" className="adnora-text" fill="hsl(var(--primary))">nora</text>
      </g>
      
      <text x="4" y="88" className="productions-text" fill="hsl(var(--foreground))">
        PRODUCTIONS
      </text>
    </svg>
  );
}
