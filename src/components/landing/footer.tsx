import Link from 'next/link';
import { Github, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#blog', label: 'Blog' },
    { href: '#contact', label: 'Contact' },
];

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Column 1: Logo and About */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" aria-label="Adnora Home" className="mb-4 inline-block">
              <Logo />
            </Link>
            <p className="text-foreground/80 max-w-sm">
              Crafting Digital Experiences That Convert. We are a full-service digital agency driving growth through innovative marketing strategies.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold mb-4 font-headline">Quick Links</h3>
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

          {/* Column 3: Contact Info */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-semibold mb-4 font-headline">Contact Us</h3>
            <ul className="space-y-4 text-foreground/80">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                <span>123 Digital Avenue, Tech City, 12345</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="mailto:hello@adnora.com" className="hover:text-primary">hello@adnora.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="tel:+1234567890" className="hover:text-primary">(123) 456-7890</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-semibold mb-4 font-headline">Stay Updated</h3>
            <p className="text-foreground/80 mb-4">Subscribe to our newsletter for the latest insights.</p>
            <form className="flex gap-2">
              <Input type="email" placeholder="Your Email" className="flex-1 bg-background" aria-label="Email for newsletter"/>
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>

        <Separator className="my-8 bg-border" />

        <div className="flex flex-col-reverse items-center justify-between gap-6 md:flex-row">
          <p className="text-sm text-foreground/60">&copy; {new Date().getFullYear()} Adnora Productions. All rights reserved.</p>
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
      </div>
    </footer>
  );
}
