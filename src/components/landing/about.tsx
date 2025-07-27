import { GraduationCap, Lightbulb, Target } from 'lucide-react';

const values = [
  {
    icon: <Target className="h-8 w-8 text-primary" />,
    title: 'Strategy First',
    description: 'We dive deep into your brand, audience, and goals to build a roadmap for success before we write a single line of copy.',
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-primary" />,
    title: 'Creative Excellence',
    description: 'Our team of creators, designers, and marketers are obsessed with crafting compelling narratives and visuals that captivate.',
  },
  {
    icon: <GraduationCap className="h-8 w-8 text-primary" />,
    title: 'Growth-Driven',
    description: 'We are laser-focused on delivering measurable results that impact your bottom line, from traffic and leads to sales and loyalty.',
  },
];

export function About() {
  return (
    <section id="about" className="bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">Who We Are</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Engineers of Digital Growth</h2>
            </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-1 md:grid-cols-3">
          {values.map((value) => (
            <div key={value.title} className="glass-card group p-8 flex flex-col items-center text-center transition-all duration-300 hover:border-primary/50 hover:-translate-y-2">
              <div className="mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold mb-2">{value.title}</h3>
              <p className="text-foreground/80">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}