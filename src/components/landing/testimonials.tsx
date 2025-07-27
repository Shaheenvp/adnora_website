'use client';

import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { cn } from '@/lib/utils';

const testimonials = [
  {
    name: 'Samad',
    title: 'Owner, Madreena Kitchen',
    avatar: 'https://i.pravatar.cc/80?u=samad',
    testimonial: 'Adnora Productions took our restaurant from a local favorite to a digital sensation. Their content creation and marketing have been a game-changer for our business.',
  },
  {
    name: 'Noufal',
    title: 'Owner, Madreena Kitchen',
    avatar: 'https://i.pravatar.cc/80?u=noufal',
    testimonial: 'The team at Adnora is simply brilliant. They understand the food industry and how to make a brand stand out. Our online orders have soared since we started working with them.',
  },
  {
    name: 'Amjad',
    title: 'Founder, Edufy Overseas',
    avatar: 'https://i.pravatar.cc/80?u=amjad',
    testimonial: "For anyone looking to build a strong digital presence, I can't recommend Adnora enough. Their web development and branding services gave our consultancy the professional edge we needed.",
  },
  {
    name: 'Client Four',
    title: 'CEO, Tech Innovations',
    avatar: 'https://i.pravatar.cc/80?u=client-four',
    testimonial: "Their strategic approach to SEO and digital marketing doubled our organic traffic in just six months. An invaluable partner for growth.",
  },
  {
    name: 'Client Five',
    title: 'Marketing Head, Fashion Brand',
    avatar: 'https://i.pravatar.cc/80?u=client-five',
    testimonial: "The viral video campaign they produced was nothing short of spectacular. It exceeded all our KPIs and created a huge buzz online.",
  },
];

export function Testimonials() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCurrent(api.selectedScrollSnap())

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap())
    }

    api.on("select", onSelect)

    return () => {
      api.off("select", onSelect)
    }
  }, [api])


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
          setApi={setApi}
          plugins={[plugin.current]}
          opts={{
            align: "center",
            loop: true,
          }}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-4 h-full">
                  <Card className={cn(
                    "glass-card h-full flex flex-col justify-between p-8 transition-all duration-300",
                    index === current ? "scale-105 border-primary shadow-2xl shadow-primary/20" : "scale-90 opacity-60"
                  )}>
                    <CardContent className="p-0 flex-grow">
                      <Quote className="h-8 w-8 text-primary/50 mb-4" />
                      <p className="text-foreground/90 italic text-lg">"{testimonial.testimonial}"</p>
                    </CardContent>
                    <div className="flex items-center gap-4 mt-8">
                      <Avatar className={cn(
                        "h-16 w-16 transition-all duration-300",
                        index === current ? "border-2 border-primary" : ""
                      )}>
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
