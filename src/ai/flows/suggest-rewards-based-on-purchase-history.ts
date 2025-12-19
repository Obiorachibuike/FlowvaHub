'use server';
/**
 * @fileOverview An AI agent that suggests rewards based on user purchase history.
 *
 * - suggestRewardsBasedOnPurchaseHistory - A function that returns suggested rewards based on purchase history.
 * - SuggestRewardsBasedOnPurchaseHistoryInput - The input type for the suggestRewardsBasedOnPurchaseHistory function.
 * - SuggestRewardsBasedOnPurchaseHistoryOutput - The return type for the suggestRewardsBasedOnPurchaseHistory function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestRewardsBasedOnPurchaseHistoryInputSchema = z.object({
  purchaseHistory: z
    .string()
    .describe('The user purchase history as a text description.'),
  availableRewards: z
    .string()
    .describe('A list of available rewards and their descriptions.'),
});
export type SuggestRewardsBasedOnPurchaseHistoryInput = z.infer<
  typeof SuggestRewardsBasedOnPurchaseHistoryInputSchema
>;

const SuggestRewardsBasedOnPurchaseHistoryOutputSchema = z.object({
  suggestedRewards: z
    .string()
    .describe('A list of suggested reward IDs, tailored to the user purchase history.'),
});
export type SuggestRewardsBasedOnPurchaseHistoryOutput = z.infer<
  typeof SuggestRewardsBasedOnPurchaseHistoryOutputSchema
>;

export async function suggestRewardsBasedOnPurchaseHistory(
  input: SuggestRewardsBasedOnPurchaseHistoryInput
): Promise<SuggestRewardsBasedOnPurchaseHistoryOutput> {
  return suggestRewardsBasedOnPurchaseHistoryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestRewardsBasedOnPurchaseHistoryPrompt',
  input: {schema: SuggestRewardsBasedOnPurchaseHistoryInputSchema},
  output: {schema: SuggestRewardsBasedOnPurchaseHistoryOutputSchema},
  prompt: `You are an expert recommendation system for rewards.
Given a user's purchase history and a list of available rewards, suggest the most relevant rewards for the user.

Purchase History: {{{purchaseHistory}}}
Available Rewards: {{{availableRewards}}}

Suggest rewards from the Available Rewards that the user would be most interested in. Return ONLY the IDs of the rewards, separated by commas.
`,
});

const suggestRewardsBasedOnPurchaseHistoryFlow = ai.defineFlow(
  {
    name: 'suggestRewardsBasedOnPurchaseHistoryFlow',
    inputSchema: SuggestRewardsBasedOnPurchaseHistoryInputSchema,
    outputSchema: SuggestRewardsBasedOnPurchaseHistoryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
