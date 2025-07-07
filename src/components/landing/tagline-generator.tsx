'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Sparkles, LoaderCircle, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { handleGenerateTaglines } from '@/app/actions';
import { GenerateTaglinesInput } from '@/ai/flows/generate-taglines';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Separator } from '../ui/separator';

const formSchema = z.object({
  companyName: z.string().min(2, {
    message: 'Company name must be at least 2 characters.',
  }),
  companyDescription: z.string().min(10, {
    message: 'Description must be at least 10 characters.',
  }),
  keywords: z.string().min(3, {
    message: 'Please provide at least one keyword.',
  }),
  numTaglines: z.coerce.number().min(1).max(5),
});

export function TaglineGenerator() {
  const [loading, setLoading] = useState(false);
  const [taglines, setTaglines] = useState<string[]>([]);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyName: 'Adnora Productions',
      companyDescription: 'A full-service digital agency specializing in digital marketing, content creation, branding, and web/app development to drive growth.',
      keywords: 'innovative, creative, results-driven, digital marketing, branding',
      numTaglines: 3,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    setTaglines([]);
    
    const result = await handleGenerateTaglines(values as GenerateTaglinesInput);

    if (result.error) {
      toast({
        variant: 'destructive',
        title: 'Error Generating Taglines',
        description: result.error,
      });
    } else if (result.data?.taglines) {
      setTaglines(result.data.taglines);
    } else {
      toast({
        variant: 'destructive',
        title: 'An error occurred.',
        description: 'Received an unexpected response from the server.',
      });
    }
    setLoading(false);
  }

  return (
    <section id="tagline-generator" className="bg-card">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-primary flex items-center gap-2">
              <Sparkles className="h-4 w-4" /> AI-Powered
            </div>
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">Generate Your Next Big Idea</h2>
            <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Use our AI-powered tool to generate catchy taglines for your brand or project.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-4xl items-start gap-12 py-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-headline">Tell Us About Your Brand</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="companyName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company Name</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Adnora Productions" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="companyDescription"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company Description</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Describe what your company does." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="keywords"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Keywords</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., creative, modern, reliable" {...field} />
                      </FormControl>
                      <FormDescription>
                        Comma-separated keywords that describe your brand's vibe.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="numTaglines"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Number of Taglines (1-5)</FormLabel>
                      <FormControl>
                        <Input type="number" min="1" max="5" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={loading} className="w-full">
                  {loading ? (
                    <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <Sparkles className="mr-2 h-4 w-4" />
                  )}
                  Generate Taglines
                </Button>
              </form>
            </Form>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-headline">Your Generated Taglines</h3>
            <Card className="min-h-[400px]">
              <CardContent className="p-6">
                {loading && (
                  <div className="flex flex-col items-center justify-center h-full text-center text-foreground/60">
                    <LoaderCircle className="h-12 w-12 animate-spin text-primary mb-4" />
                    <p>Generating creative ideas...</p>
                  </div>
                )}
                {!loading && taglines.length === 0 && (
                  <div className="flex flex-col items-center justify-center h-full text-center text-foreground/60">
                     <Lightbulb className="h-12 w-12 text-primary mb-4" />
                    <p>Your brilliant taglines will appear here.</p>
                  </div>
                )}
                {taglines.length > 0 && (
                  <ul className="space-y-4">
                    {taglines.map((tagline, index) => (
                      <li key={index} className="p-4 bg-background rounded-lg border flex items-start gap-4">
                        <Sparkles className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                        <span className="flex-grow">{tagline}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
