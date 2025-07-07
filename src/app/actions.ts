'use server';

import { generateTaglines, GenerateTaglinesInput, GenerateTaglinesOutput } from '@/ai/flows/generate-taglines';

export async function handleGenerateTaglines(
  input: GenerateTaglinesInput
): Promise<{ data: GenerateTaglinesOutput | null; error: string | null }> {
  try {
    const result = await generateTaglines(input);
    return { data: result, error: null };
  } catch (error) {
    console.error('Error generating taglines:', error);
    // In production, Next.js hides specific error messages.
    // This custom message provides a better hint about potential configuration issues.
    return { 
      data: null, 
      error: 'An error occurred while connecting to the AI service. This may be due to a configuration issue (e.g., a missing API key). Please contact the site administrator.' 
    };
  }
}
