import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const benefits = [
  'Builds brand authority and trust',
  'Engages and educates your target audience',
  'Drives organic traffic and improves SEO',
  'Generates leads and nurtures prospects',
  'Provides long-term value and ROI',
];

export function ContentMarketing() {
  return (
    <section id="content-marketing" className="bg-card">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl space-y-8 text-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-primary">Our Expertise</div>
              <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">
                Why Content Marketing is King
              </h2>
              <p className="text-lg text-foreground/80">
                In today&apos;s digital landscape, content is the currency of connection. It&apos;s not just about selling; it&apos;s about providing value, building relationships, and establishing your brand as a thought leader. A strong content strategy is the foundation of sustainable growth.
              </p>
            </div>
            <ul className="space-y-4 text-left inline-block">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground/90">{benefit}</span>
                </li>
              ))}
            </ul>
            <div>
              <Button asChild size="lg">
                <Link href="#contact">Discuss Your Content Strategy</Link>
              </Button>
            </div>
        </div>
      </div>
    </section>
  );
}
