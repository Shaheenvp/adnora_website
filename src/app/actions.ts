'use server';

import { generateTaglines, GenerateTaglinesInput, GenerateTaglinesOutput } from '@/ai/flows/generate-taglines';

export async function handleGenerateTaglines(
  input: GenerateTaglinesInput
): Promise<GenerateTaglinesOutput> {
  try {
    const result = await generateTaglines(input);
    return result;
  } catch (error) {
    console.error('Error generating taglines:', error);
    // In a real app, you might want to return a more structured error
    throw new Error('An unexpected error occurred while generating taglines.');
  }
}
