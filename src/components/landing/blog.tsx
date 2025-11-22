import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const blogPosts = [
  {
    title: 'The Future of SEO in a Cookieless World',
    image: 'https://images.unsplash.com/photo-1594009754086-92bf4d86f059?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyMHx8ZnV0dXJlJTIwZGlnaXRhbCUyMHdvcmxkfGVufDB8fHx8MTc1MzYxMTIyMHww&ixlib=rb-4.1.0&q=80&w=1080',
    dataAiHint: 'search engine results',
    excerpt: 'As privacy regulations tighten, the digital marketing landscape is shifting. Here’s how to prepare your SEO strategy...',
    author: 'Jane Doe',
    authorAvatar: 'https://placehold.co/40x40',
    date: 'April 15, 2024',
    link: '#',
  },
  {
    title: '5 Branding Mistakes That Are Costing You Customers',
    image: 'https://images.unsplash.com/photo-1613909207039-6b173b755cc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxicmFuZGluZ3xlbnwwfHx8fDE3NTM2MTEzMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    dataAiHint: 'broken logo concept',
    excerpt: 'Your brand is more than just a logo. Avoid these common pitfalls to build a brand that resonates and retains...',
    author: 'John Smith',
    authorAvatar: 'https://placehold.co/40x40',
    date: 'April 10, 2024',
    link: '#',
  },
  {
    title: 'How to Master Content Marketing in 2024',
    image: 'https://images.unsplash.com/photo-1664277497095-424e085175e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxM3x8Y29udGVudCUyMG1hcmtldGluZ3xlbnwwfHx8fDE3NTM2MTE1Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    dataAiHint: 'content creation',
    excerpt: 'Content is king, but how do you wear the crown? Here are our top strategies for creating content that converts...',
    author: 'Alex Johnson',
    authorAvatar: 'https://placehold.co/40x40',
    date: 'April 20, 2024',
    link: '#',
  },
];

export function Blog() {
  return (
    <section id="blog" className="bg-background py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16 md:mb-20">
          <div className="space-y-3">
            <div className="inline-block rounded-lg bg-primary/10 px-4 py-2 text-sm font-medium text-primary">Insights</div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight" style={{ lineHeight: '1.2', paddingBottom: '0.5rem', overflow: 'visible' }}>Digital Marketing Insights</h2>
            <p className="max-w-2xl text-foreground/70 md:text-lg lg:text-xl mx-auto">
              Stay ahead of the curve with the latest news, trends, and insights from the world of digital marketing.
            </p>
          </div>
        </div>
        <div>
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {blogPosts.map((post) => (
                <CarouselItem key={post.title} className="basis-full sm:basis-1/2 lg:basis-1/3 pl-2 md:pl-4 flex">
                  <div className="p-1 w-full">
                    <Link href={post.link} className="group block h-full">
                      <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 hover:border-primary hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20">
                        <CardHeader className="p-0">
                          <div className="aspect-video overflow-hidden">
                            <Image
                              src={post.image}
                              alt={`Blog post: ${post.title}`}
                              width={600}
                              height={400}
                              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                              data-ai-hint={post.dataAiHint}
                            />
                          </div>
                        </CardHeader>
                        <CardContent className="p-6 flex-grow">
                          <CardTitle className="font-headline text-xl mb-2 group-hover:text-primary transition-colors">{post.title}</CardTitle>
                          <p className="text-foreground/80 line-clamp-3">{post.excerpt}</p>
                        </CardContent>
                        <div className="p-6 pt-0 flex items-center gap-4">
                          <Avatar>
                            <AvatarImage src={post.authorAvatar} alt={post.author} />
                            <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-medium">{post.author}</p>
                            <p className="text-sm text-foreground/60">{post.date}</p>
                          </div>
                        </div>
                      </Card>
                    </Link>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
