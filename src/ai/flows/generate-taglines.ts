// use server'

/**
 * @fileOverview Tagline generator AI agent for Adnora Productions.
 *
 * - generateTaglines - A function that generates taglines tailored to Adnora's brand identity and service offerings.
 * - GenerateTaglinesInput - The input type for the generateTaglines function.
 * - GenerateTaglinesOutput - The return type for the generateTaglines function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateTaglinesInputSchema = z.object({
  companyName: z.string().describe('The name of the company: Adnora Productions.'),
  companyDescription: z.string().describe('A description of the company and its services.'),
  keywords: z.string().describe('Keywords related to the company and its services.'),
  numTaglines: z.number().default(3).describe('The number of taglines to generate.'),
});
export type GenerateTaglinesInput = z.infer<typeof GenerateTaglinesInputSchema>;

const GenerateTaglinesOutputSchema = z.object({
  taglines: z.array(z.string()).describe('An array of generated taglines.'),
});
export type GenerateTaglinesOutput = z.infer<typeof GenerateTaglinesOutputSchema>;

export async function generateTaglines(input: GenerateTaglinesInput): Promise<GenerateTaglinesOutput> {
  return generateTaglinesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateTaglinesPrompt',
  input: {schema: GenerateTaglinesInputSchema},
  output: {schema: GenerateTaglinesOutputSchema},
  prompt: `You are a marketing expert specializing in creating catchy and effective taglines.

  Generate {{numTaglines}} taglines for {{companyName}} based on the following description and keywords.

  Description: {{companyDescription}}
  Keywords: {{keywords}}

  Taglines should be:
  - Relevant to the company's services
  - Memorable and catchy
  - Reflective of the company's brand identity
  `,
});

const generateTaglinesFlow = ai.defineFlow(
  {
    name: 'generateTaglinesFlow',
    inputSchema: GenerateTaglinesInputSchema,
    outputSchema: GenerateTaglinesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
