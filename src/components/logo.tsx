import Image from 'next/image';
import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/logo.svg"
      alt="Adnora Productions Logo"
      width={130}
      height={50}
      className={cn('h-10 w-auto', className)}
      priority
    />
  );
}
