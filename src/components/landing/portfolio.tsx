import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const portfolioItems = [
  {
    title: 'E-commerce Platform Overhaul',
    category: 'Web Development',
    image: 'https://placehold.co/600x400',
    dataAiHint: 'website design',
    link: '#',
  },
  {
    title: 'SaaS Company Rebranding',
    category: 'Branding',
    image: 'https://placehold.co/600x400',
    dataAiHint: 'brand identity',
    link: '#',
  },
  {
    title: 'Viral Social Media Campaign',
    category: 'Digital Marketing',
    image: 'https://placehold.co/600x400',
    dataAiHint: 'social media',
    link: '#',
  },
  {
    title: 'Corporate Video Series',
    category: 'Content Creation',
    image: 'https://placehold.co/600x400',
    dataAiHint: 'video production',
    link: '#',
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="bg-card">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-primary">Our Work</div>
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">Success Stories</h2>
            <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explore our portfolio of recent projects and see how we've helped businesses like yours succeed.
            </p>
          </div>
        </div>
        <div className="mx-auto grid gap-6 py-12 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          {portfolioItems.map((item) => (
            <Link key={item.title} href={item.link} className="group block">
              <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 hover:border-primary">
                <CardHeader className="p-0">
                  <div className="overflow-hidden aspect-video">
                    <Image
                      src={item.image}
                      alt={`Portfolio item: ${item.title}`}
                      width={600}
                      height={400}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                      data-ai-hint={item.dataAiHint}
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6 flex-grow">
                  <Badge variant="outline" className="mb-2">{item.category}</Badge>
                  <CardTitle className="font-headline text-xl group-hover:text-primary transition-colors">{item.title}</CardTitle>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                    <span className="text-sm text-primary flex items-center gap-1">
                        View Case Study <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
                    </span>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
