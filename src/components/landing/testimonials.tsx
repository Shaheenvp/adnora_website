import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    title: 'CEO, TechCorp',
    avatar: 'https://placehold.co/40x40',
    testimonial: 'Adnora Productions transformed our online presence. Their digital marketing strategies doubled our leads in just three months. Highly recommended!',
  },
  {
    name: 'Michael Chen',
    title: 'Founder, InnovateHub',
    avatar: 'https://placehold.co/40x40',
    testimonial: 'The branding work they did for us was exceptional. They captured our essence perfectly and gave us a modern, professional look that resonates with our audience.',
  },
  {
    name: 'Emily Rodriguez',
    title: 'Marketing Director, Global Solutions',
    avatar: 'https://placehold.co/40x40',
    testimonial: "Working with Adnora was a breeze. Their team is creative, responsive, and truly understands the nuances of content creation. The video series they produced was a huge success.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-primary">Testimonials</div>
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">What Our Clients Say</h2>
            <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We pride ourselves on building strong relationships and delivering results. Here&apos;s what our partners have to say.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 py-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="flex flex-col justify-between border-2 border-transparent transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10">
              <CardHeader>
                <Quote className="h-8 w-8 text-primary" />
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-foreground/90 italic">"{testimonial.testimonial}"</p>
              </CardContent>
              <CardFooter className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-foreground/70">{testimonial.title}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
