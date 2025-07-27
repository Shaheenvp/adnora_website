import Image from 'next/image';
import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("relative", className)}>
       <Image
          src="/logo.svg"
          alt="Adnora Productions Logo"
          width={200}
          height={50}
          className="h-full w-auto"
          priority
        />
    </div>
  );
}