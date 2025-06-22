import { Megaphone, PenSquare, Gem, Codepen } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    icon: <Megaphone className="h-10 w-10 text-primary" />,
    title: 'Digital Marketing',
    description: 'Elevate your reach with data-driven SEO, SEM, and social media campaigns that deliver measurable results.',
  },
  {
    icon: <PenSquare className="h-10 w-10 text-primary" />,
    title: 'Content Creation',
    description: 'Engage your audience with compelling blog posts, stunning visuals, and high-quality video production.',
  },
  {
    icon: <Gem className="h-10 w-10 text-primary" />,
    title: 'Branding',
    description: 'Forge a powerful brand identity with our strategic approach to logo design, messaging, and market positioning.',
  },
  {
    icon: <Codepen className="h-10 w-10 text-primary" />,
    title: 'Web & App Development',
    description: 'Build robust, scalable, and beautiful websites and mobile applications that provide seamless user experiences.',
  },
];

export function Services() {
  return (
    <section id="services" className="bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-primary">Our Services</div>
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">What We Do Best</h2>
            <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We provide a comprehensive suite of digital services designed to help your business thrive in the online world.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 sm:grid-cols-2 md:gap-12 lg:max-w-none">
          {services.map((service) => (
            <Card key={service.title} className="group transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20">
              <CardHeader className="flex flex-row items-center gap-4">
                {service.icon}
                <CardTitle className="font-headline">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
