import { Rocket, Microscope, DraftingCompass, BarChart, Trophy, Workflow as WorkflowIcon } from 'lucide-react';

const steps = [
  {
    icon: <Rocket className="h-10 w-10 mb-4 text-primary" />,
    title: "Kick-off & Discovery",
    description: "We start by understanding your vision, objectives, and challenges. This is where we align on goals and set the stage for success."
  },
  {
    icon: <Microscope className="h-10 w-10 mb-4 text-primary" />,
    title: "Analysis & Research",
    description: "Our team conducts in-depth market, competitor, and audience research to uncover insights and identify opportunities."
  },
  {
    icon: <DraftingCompass className="h-10 w-10 mb-4 text-primary" />,
    title: "Strategy & Planning",
    description: "We craft a bespoke, data-driven strategy tailored to your goals, outlining the channels, tactics, and KPIs for our campaign."
  },
  {
    icon: <BarChart className="h-10 w-10 mb-4 text-primary" />,
    title: "Execution & Optimization",
    description: "This is where the magic happens. We launch the campaign, continuously monitoring, testing, and optimizing for peak performance."
  },
  {
    icon: <Trophy className="h-10 w-10 mb-4 text-primary" />,
    title: "Reporting & Scaling",
    description: "You get transparent, detailed reports on performance. We analyze the results and identify opportunities to scale our success."
  },
  {
    icon: <WorkflowIcon className="h-10 w-10 mb-4 text-primary" />,
    title: "Continuous Growth",
    description: "Our partnership doesn't end at reporting. We focus on long-term growth, adapting strategies to keep you ahead of the curve."
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

        <div className="mx-auto grid max-w-7xl items-start gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <div key={step.title} className="glass-card group p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-primary/50">
              <div className="flex justify-center">{step.icon}</div>
              <h3 className="font-bold text-xl mb-2">{step.title}</h3>
              <p className="text-foreground/80">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
