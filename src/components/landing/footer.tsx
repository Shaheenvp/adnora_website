'use client';

import Link from 'next/link';
import { Github, Instagram, Linkedin, Mail, Phone } from 'lucide-react';
import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import {useEffect, useState} from 'react';

const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#portfolio', label: 'Work' },
    { href: '#blog', label: 'Blog' },
    { href: '#contact', label: 'Contact' },
];

export function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);
  
  return (
    <footer className="bg-secondary/50 border-t border-white/10">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-8 md:gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" aria-label="Adnora Home" className="mb-4 inline-block">
              <Logo className="h-14"/>
            </Link>
            <p className="text-foreground/80 max-w-sm">
              Crafting Legacies, Not Just Campaigns.
            </p>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-foreground/80 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4 text-foreground/80">
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="mailto:info@adnoraproductions.in" className="hover:text-primary">info@adnoraproductions.in</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="tel:+919544453993" className="hover:text-primary">+91 95444 53993</a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-foreground/80 mb-4">Subscribe to our newsletter for the latest insights.</p>
            <form className="flex gap-2">
              <Input type="email" placeholder="Your Email" className="flex-1 bg-background" aria-label="Email for newsletter"/>
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>

        <Separator className="my-8 bg-white/10" />

        <div className="flex flex-col-reverse items-center justify-between gap-6 md:flex-row">
          <p className="text-sm text-foreground/60">&copy; {year} Adnora Productions. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="https://www.instagram.com/adnora.in" aria-label="Instagram">
              <Instagram className="h-6 w-6 text-foreground/60 transition-colors hover:text-primary" />
            </Link>
            <Link href="#" aria-label="GitHub">
              <Github className="h-6 w-6 text-foreground/60 transition-colors hover:text-primary" />
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <Linkedin className="h-6 w-6 text-foreground/60 transition-colors hover:text-primary" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
