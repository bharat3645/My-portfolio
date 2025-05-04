'use server';

/**
 * @fileOverview AI-powered tool that tailors the portfolio content based on the job description.
 *
 * - tailorPortfolio - A function that tailors the portfolio content.
 * - TailorPortfolioInput - The input type for the tailorPortfolio function.
 * - TailorPortfolioOutput - The return type for the tailorPortfolio function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const TailorPortfolioInputSchema = z.object({
  jobDescription: z
    .string()
    .describe('The job description to tailor the portfolio content to.'),
  portfolioContent: z.string().describe('The current portfolio content.'),
});
export type TailorPortfolioInput = z.infer<typeof TailorPortfolioInputSchema>;

const TailorPortfolioOutputSchema = z.object({
  tailoredContent: z
    .string()
    .describe('The tailored portfolio content based on the job description.'),
});
export type TailorPortfolioOutput = z.infer<typeof TailorPortfolioOutputSchema>;

export async function tailorPortfolio(input: TailorPortfolioInput): Promise<TailorPortfolioOutput> {
  return tailorPortfolioFlow(input);
}

const prompt = ai.definePrompt({
  name: 'tailorPortfolioPrompt',
  input: {
    schema: z.object({
      jobDescription: z
        .string()
        .describe('The job description to tailor the portfolio content to.'),
      portfolioContent: z.string().describe('The current portfolio content.'),
    }),
  },
  output: {
    schema: z.object({
      tailoredContent: z
        .string()
        .describe('The tailored portfolio content based on the job description.'),
    }),
  },
  prompt: `You are an AI portfolio tailor. You will tailor the portfolio content to highlight the skills and experiences most relevant to the specific job description.

Job Description: {{{jobDescription}}}

Current Portfolio Content: {{{portfolioContent}}}

Tailored Portfolio Content:`,
});

const tailorPortfolioFlow = ai.defineFlow<
  typeof TailorPortfolioInputSchema,
  typeof TailorPortfolioOutputSchema
>({
  name: 'tailorPortfolioFlow',
  inputSchema: TailorPortfolioInputSchema,
  outputSchema: TailorPortfolioOutputSchema,
},
async input => {
  const {output} = await prompt(input);
  return output!;
});

