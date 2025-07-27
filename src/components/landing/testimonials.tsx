import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const testimonials = [
  {
    name: 'Samad',
    title: 'Owner, Madreena Kitchen',
    avatar: 'https://placehold.co/80x80',
    testimonial: 'Adnora Productions took our restaurant from a local favorite to a digital sensation. Their content creation and marketing have been a game-changer for our business.',
  },
  {
    name: 'Noufal',
    title: 'Owner, Madreena Kitchen',
    avatar: 'https://placehold.co/80x80',
    testimonial: 'The team at Adnora is simply brilliant. They understand the food industry and how to make a brand stand out. Our online orders have soared since we started working with them.',
  },
  {
    name: 'Amjad',
    title: 'Founder, Edufy Overseas',
    avatar: 'https://placehold.co/80x80',
    testimonial: "For anyone looking to build a strong digital presence, I can't recommend Adnora enough. Their web development and branding services gave our consultancy the professional edge we needed.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">Testimonials</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Clients Say</h2>
            <p className="max-w-[900px] text-foreground/80 md:text-lg">
              We pride ourselves on building strong relationships and delivering results. Here&apos;s what our partners have to say.
            </p>
          </div>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2">
                <div className="p-4">
                  <Card className="glass-card h-full flex flex-col justify-between p-8">
                    <CardContent className="p-0 flex-grow">
                      <Quote className="h-8 w-8 text-primary/50 mb-4" />
                      <p className="text-foreground/90 italic text-lg">"{testimonial.testimonial}"</p>
                    </CardContent>
                    <div className="flex items-center gap-4 mt-8">
                      <Avatar className="h-16 w-16">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-bold text-lg">{testimonial.name}</p>
                        <p className="text-sm text-foreground/70">{testimonial.title}</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}