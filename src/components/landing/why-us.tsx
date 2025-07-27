import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

const reasons = [
    { title: "Data-Driven Decisions", description: "We replace guesswork with granular data analysis to drive every strategic move." },
    { title: "Transparent Reporting", description: "You get clear, concise reports that show you exactly what's working and why." },
    { title: "Dedicated Partnership", description: "We act as an extension of your team, fully invested in your success." },
    { title: "Future-Forward Approach", description: "We stay ahead of the curve, leveraging the latest tech and trends for your brand." },
];

export function WhyUs() {
  return (
    <section id="why-us" className="bg-secondary/30">
      <div className="container px-8 md:px-16 lg:px-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">The Adnora Advantage</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why Partner With Us?</h2>
            <p className="text-lg text-foreground/80">
              In a sea of digital noise, you need a partner who can cut through. At Adnora, we combine creative firepower with strategic precision to build brands that not only stand out, but stand the test of time.
            </p>
            <Button asChild size="lg">
              <Link href="#contact">Discuss Your Project</Link>
            </Button>
          </div>
          <div className="space-y-8">
            {reasons.map((reason) => (
                <div key={reason.title} className="flex items-start gap-4">
                    <CheckCircle className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                    <div>
                        <h3 className="text-xl font-bold">{reason.title}</h3>
                        <p className="text-foreground/80">{reason.description}</p>
                    </div>
                </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
