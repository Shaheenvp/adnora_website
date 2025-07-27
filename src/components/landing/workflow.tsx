import { Rocket, Microscope, DraftingCompass, BarChart, Trophy, Workflow as WorkflowIcon } from 'lucide-react';

const steps = [
  {
    icon: <Rocket className="h-8 w-8 text-primary" />,
    title: "Kick-off & Discovery",
    description: "We start by understanding your vision, objectives, and challenges. This is where we align on goals and set the stage for success."
  },
  {
    icon: <Microscope className="h-8 w-8 text-primary" />,
    title: "Analysis & Research",
    description: "Our team conducts in-depth market, competitor, and audience research to uncover insights and identify opportunities."
  },
  {
    icon: <DraftingCompass className="h-8 w-8 text-primary" />,
    title: "Strategy & Planning",
    description: "We craft a bespoke, data-driven strategy tailored to your goals, outlining the channels, tactics, and KPIs for our campaign."
  },
  {
    icon: <BarChart className="h-8 w-8 text-primary" />,
    title: "Execution & Optimization",
    description: "This is where the magic happens. We launch the campaign, continuously monitoring, testing, and optimizing for peak performance."
  },
  {
    icon: <Trophy className="h-8 w-8 text-primary" />,
    title: "Reporting & Scaling",
    description: "You get transparent, detailed reports on performance. We analyze the results and identify opportunities to scale our success."
  },
  {
    icon: <WorkflowIcon className="h-8 w-8 text-primary" />,
    title: "Continuous Growth",
    description: "Our partnership doesn't end at reporting. We focus on long-term growth, adapting strategies to keep you ahead of the curve."
  }
];

export function Workflow() {
  return (
    <section id="workflow" className="bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">Our Process</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">The Blueprint to Your Success</h2>
            <p className="max-w-[900px] text-foreground/80 md:text-lg">
              Our proven workflow ensures every project is strategic, transparent, and built for results.
            </p>
          </div>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-1/2 top-0 h-full w-0.5 bg-primary/20 -translate-x-1/2"></div>
          {steps.map((step, index) => (
            <div key={step.title} className="relative mb-12">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-background border-2 border-primary rounded-full flex items-center justify-center z-10">
                <span className="text-primary font-bold">{index + 1}</span>
              </div>
              <div
                className={`flex items-center w-full ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div
                    className={`glass-card p-6 group transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 ${
                      index % 2 === 0 ? 'text-right' : 'text-left'
                    }`}
                  >
                    <div className={`flex items-center gap-4 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                       {index % 2 !== 0 && <div className="hidden sm:block">{step.icon}</div>}
                       <h3 className="font-bold text-xl mb-2">{step.title}</h3>
                       {index % 2 === 0 && <div className="hidden sm:block">{step.icon}</div>}
                    </div>
                    <p className="text-foreground/80">{step.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
