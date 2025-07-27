import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

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
];

export function Blog() {
  return (
    <section id="blog" className="bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-primary">Insights</div>
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">Digital Marketing Insights From Our Blog</h2>
            <p className="max-w-[900px] text-foreground/80 md:text-lg">
              Stay ahead of the curve with the latest news, trends, and insights from the world of digital marketing.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 py-12 sm:grid-cols-1 md:grid-cols-2">
          {blogPosts.map((post) => (
            <Link key={post.title} href={post.link} className="group block">
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
          ))}
        </div>
      </div>
    </section>
  );
}
