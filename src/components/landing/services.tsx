import { Megaphone, Search, PenSquare, BarChart, Video, Users } from 'lucide-react';

const services = [
  {
    icon: <PenSquare className="h-10 w-10 mb-4 text-primary" />,
    title: 'Content Marketing',
    description: 'Engage and convert with high-value content that builds authority and drives organic traffic.',
  },
  {
    icon: <Search className="h-10 w-10 mb-4 text-primary" />,
    title: 'SEO & Website Management',
    description: 'Climb search rankings and optimize your digital hub for performance and user experience.',
  },
  {
    icon: <Users className="h-10 w-10 mb-4 text-primary" />,
    title: 'Social Media Strategy',
    description: 'Build and nurture communities on platforms where your audience lives, breathes, and engages.',
  },
  {
    icon: <BarChart className="h-10 w-10 mb-4 text-primary" />,
    title: 'Performance Marketing',
    description: 'Maximize ROI with data-driven PPC, Meta Ads, and Google Ads campaigns that deliver results.',
  },
  {
    icon: <Video className="h-10 w-10 mb-4 text-primary" />,
    title: 'Video & Graphics Production',
    description: 'Capture attention with stunning visuals, from viral-ready videos to compelling graphic design.',
  },
  {
    icon: <Megaphone className="h-10 w-10 mb-4 text-primary" />,
    title: 'Lead Generation',
    description: 'Fuel your sales pipeline with qualified leads generated through targeted, multi-channel strategies.',
  },
];

export function Services() {
  return (
    <section id="services" className="bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">Our Expertise</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Arsenal of Services</h2>
            <p className="max-w-[900px] text-foreground/80 md:text-lg">
              We provide a comprehensive suite of digital services designed to build, engage, and convert.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-7xl items-start gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="glass-card group p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-primary/50">
              <div className="flex justify-center">{service.icon}</div>
              <h3 className="font-bold text-xl mb-2">{service.title}</h3>
              <p className="text-foreground/80">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}