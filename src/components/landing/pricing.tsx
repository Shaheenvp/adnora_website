import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const plans = [
  {
    title: "Social Media Starter",
    price: "₹8,000",
    period: "/month",
    description: "Ideal for businesses looking to build a strong social presence.",
    features: [
      "2 Social Media Platforms",
      "12 Posts per month",
      "Community Management",
      "Monthly Reporting"
    ],
    isPopular: false,
  },
  {
    title: "SEO Growth",
    price: "₹15,000",
    period: "/month",
    description: "For brands focused on ranking higher and driving organic traffic.",
    features: [
      "On-Page & Technical SEO",
      "Keyword Research",
      "Content Strategy",
      "Link Building (Basic)",
      "Bi-Weekly Reporting"
    ],
    isPopular: true,
  },
  {
    title: "All-in-One Digital",
    price: "Custom",
    period: "",
    description: "A comprehensive, tailored solution for total market domination.",
    features: [
      "All services included",
      "Dedicated Account Manager",
      "Performance Marketing",
      "Video & Graphics Production",
      "Weekly Strategy Calls"
    ],
    isPopular: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">Pricing</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Transparent Pricing for Growth</h2>
            <p className="max-w-[900px] text-foreground/80 md:text-lg">
              Choose a plan that fits your goals. No hidden fees, just results.
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-7xl items-stretch gap-8 sm:grid-cols-1 lg:grid-cols-3">
          {plans.map((plan) => (
            <Card key={plan.title} className={`glass-card flex flex-col ${plan.isPopular ? 'border-primary/50' : ''}`}>
              <CardHeader className="p-8">
                <CardTitle className="text-2xl font-bold">{plan.title}</CardTitle>
                <CardDescription className="text-foreground/80 pt-2">{plan.description}</CardDescription>
                <div className="flex items-baseline gap-2 pt-4">
                  <span className="text-4xl font-extrabold">{plan.price}</span>
                  {plan.period && <span className="text-foreground/70">{plan.period}</span>}
                </div>
              </CardHeader>
              <CardContent className="p-8 pt-0 flex-grow">
                <ul className="space-y-4">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-foreground/90">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="p-8">
                <Button className="w-full" size="lg" variant={plan.isPopular ? 'default' : 'outline'}>
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}