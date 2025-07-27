import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '../ui/label';
import { Mail, Phone } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="bg-gradient-to-t from-background via-secondary to-secondary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">Get In Touch</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Let's Build Your Legacy</h2>
            <p className="max-w-[900px] text-foreground/80 md:text-lg">
              Have a project in mind or just want to explore possibilities? We're here to listen.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-5xl grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
                <p className="text-foreground/80">
                    Fill out the form, or reach out to us via email or phone. We're excited to hear about your vision and discuss how we can bring it to life.
                </p>
                <div className="space-y-4">
                     <a href="mailto:info@adnoraproductions.in" className="flex items-center gap-4 group">
                        <div className="glass-card p-3 rounded-full group-hover:bg-primary/20 transition-colors">
                            <Mail className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <p className="font-semibold text-lg">Email Us</p>
                            <p className="text-foreground/80 group-hover:text-primary transition-colors">info@adnoraproductions.in</p>
                        </div>
                    </a>
                     <a href="tel:+919544453993" className="flex items-center gap-4 group">
                        <div className="glass-card p-3 rounded-full group-hover:bg-primary/20 transition-colors">
                            <Phone className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <p className="font-semibold text-lg">Call Us</p>
                            <p className="text-foreground/80 group-hover:text-primary transition-colors">+91 95444 53993</p>
                        </div>
                    </a>
                </div>
            </div>
            <div className="glass-card p-8">
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
            </div>
        </div>
      </div>
    </section>
  );
}