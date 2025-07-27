import { Rocket, Microscope, DraftingCompass, BarChart, Trophy } from 'lucide-react';

const steps = [
  {
    icon: <Rocket className="h-8 w-8" />,
    title: "Kick-off & Discovery",
    description: "We start by understanding your vision, objectives, and challenges. This is where we align on goals and set the stage for success."
  },
  {
    icon: <Microscope className="h-8 w-8" />,
    title: "Analysis & Research",
    description: "Our team conducts in-depth market, competitor, and audience research to uncover insights and identify opportunities."
  },
  {
    icon: <DraftingCompass className="h-8 w-8" />,
    title: "Strategy & Planning",
    description: "We craft a bespoke, data-driven strategy tailored to your goals, outlining the channels, tactics, and KPIs for our campaign."
  },
  {
    icon: <BarChart className="h-8 w-8" />,
    title: "Execution & Optimization",
    description: "This is where the magic happens. We launch the campaign, continuously monitoring, testing, and optimizing for peak performance."
  },
  {
    icon: <Trophy className="h-8 w-8" />,
    title: "Reporting & Scaling",
    description: "You get transparent, detailed reports on performance. We analyze the results and identify opportunities to scale our success."
  }
];

export function Workflow() {
  return (
    <section id="workflow" className="bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">Our Process</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">The Blueprint to Your Success</h2>
            <p className="max-w-[900px] text-foreground/80 md:text-lg">
              Our proven workflow ensures every project is strategic, transparent, and built for results.
            </p>
          </div>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-border/50" aria-hidden="true"></div>
          <div className="relative flex flex-col gap-16">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center w-full">
                <div className={`flex-1 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <h3 className="text-xl font-bold text-primary mb-2">{`Step ${index + 1}: ${step.title}`}</h3>
                  <p className="text-foreground/80">{step.description}</p>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 z-10">
                    <div className="w-16 h-16 rounded-full glass-card border-primary/30 flex items-center justify-center text-primary">
                        {step.icon}
                    </div>
                </div>
                <div className="flex-1"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}