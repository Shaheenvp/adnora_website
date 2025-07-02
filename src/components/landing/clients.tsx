import Image from 'next/image';

const clients = [
  {
    name: 'Madreena Kitchen',
    logo: '/madreena-kitchen.png',
    dataAiHint: 'Madreena Kitchen logo',
  },
  {
    name: 'Edufy Overseas',
    logo: '/edufy.png',
    dataAiHint: 'Edufy Overseas logo',
  },
];

const logos = [...clients, ...clients, ...clients, ...clients];

export function Clients() {
  return (
    <section id="clients" className="bg-background py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-3">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-primary">Our Partners</div>
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl">
              Trusted By The Best
            </h2>
            <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We&apos;ve had the privilege of working with a diverse range of clients, from startups to established enterprises.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full mt-12 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-scroll">
          {logos.map((client, index) => (
            <li key={`${client.name}-${index}`} className="flex-shrink-0">
              <Image
                src={client.logo}
                alt={`${client.name} Logo`}
                width={140}
                height={70}
                className="object-contain filter grayscale transition-all duration-300 hover:grayscale-0 hover:scale-105"
                data-ai-hint={client.dataAiHint}
              />
            </li>
          ))}
        </ul>
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-scroll" aria-hidden="true">
          {logos.map((client, index) => (
            <li key={`${client.name}-${index}-clone`} className="flex-shrink-0">
              <Image
                src={client.logo}
                alt={`${client.name} Logo`}
                width={140}
                height={70}
                className="object-contain filter grayscale transition-all duration-300 hover:grayscale-0 hover:scale-105"
                data-ai-hint={client.dataAiHint}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
