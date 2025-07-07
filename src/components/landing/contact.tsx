import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '../ui/label';

export function Contact() {
  return (
    <section id="contact" className="bg-background">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl">
          <Card>
            <CardHeader className="text-center">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-primary mb-2">Get In Touch</div>
              <CardTitle className="text-3xl font-bold font-headline">Let&apos;s Build Something Amazing</CardTitle>
              <CardDescription className="text-foreground/80 md:text-lg">
                Have a project in mind or just want to say hello? Drop us a line.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your Name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="What's this about?" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Tell us about your project..." rows={5} />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
