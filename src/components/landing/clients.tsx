import Image from 'next/image';

const clients = [
  {
    name: 'Madreena Kitchen',
    logo: 'https://placehold.co/150x70.png',
    dataAiHint: 'Madreena Kitchen logo',
  },
  {
    name: 'TechCorp',
    logo: 'https://placehold.co/150x70.png',
    dataAiHint: 'corporate tech logo',
  },
  {
    name: 'InnovateHub',
    logo: 'https://placehold.co/150x70.png',
    dataAiHint: 'modern startup logo',
  },
  {
    name: 'Global Solutions',
    logo: 'https://placehold.co/150x70.png',
    dataAiHint: 'globe professional logo',
  },
  {
    name: 'EcoGoods',
    logo: 'https://placehold.co/150x70.png',
    dataAiHint: 'green leaf logo',
  },
  {
    name: 'NextGen Ventures',
    logo: 'https://placehold.co/150x70.png',
    dataAiHint: 'arrow forward logo',
  },
];

export function Clients() {
  return (
    <section id="clients" className="bg-background">
      <div className="container px-4 py-12 md:px-6 md:py-24">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-3">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-primary">Our Partners</div>
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl">
              Trusted By The Best
            </h2>
            <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We've had the privilege of working with a diverse range of clients, from startups to established enterprises.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-2 items-center justify-center gap-x-8 gap-y-10 sm:grid-cols-3 md:gap-x-10 lg:grid-cols-6">
          {clients.map((client) => (
            <div key={client.name} className="flex justify-center" title={client.name}>
              <Image
                src={client.logo}
                alt={`${client.name} Logo`}
                width={140}
                height={60}
                className="object-contain filter grayscale transition-all duration-300 hover:grayscale-0 hover:scale-105"
                data-ai-hint={client.dataAiHint}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
