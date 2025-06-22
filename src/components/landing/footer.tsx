import Link from 'next/link';
import { Github, Twitter, Linkedin } from 'lucide-react';
import { Logo } from '@/components/logo';

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 py-8 md:flex-row md:px-6">
        <div className="flex flex-col items-center gap-4 md:items-start">
            <Link href="/" aria-label="Adnora Home">
                <Logo />
            </Link>
          <p className="text-sm text-foreground/60">&copy; {new Date().getFullYear()} Adnora Productions. All rights reserved.</p>
        </div>
        <div className="flex items-center gap-4">
          <Link href="#" aria-label="Twitter">
            <Twitter className="h-6 w-6 text-foreground/60 transition-colors hover:text-primary" />
          </Link>
          <Link href="#" aria-label="GitHub">
            <Github className="h-6 w-6 text-foreground/60 transition-colors hover:text-primary" />
          </Link>
          <Link href="#" aria-label="LinkedIn">
            <Linkedin className="h-6 w-6 text-foreground/60 transition-colors hover:text-primary" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
