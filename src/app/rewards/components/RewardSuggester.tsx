'use client';

import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Wand2, Loader2, Sparkles } from 'lucide-react';
import { suggestRewardsBasedOnPurchaseHistory } from '@/ai/flows/suggest-rewards-based-on-purchase-history';
import { MOCK_REWARDS } from '@/lib/constants';
import { useToast } from '@/hooks/use-toast';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';

// This is a mock purchase history for demonstration purposes.
const MOCK_PURCHASE_HISTORY = `
- 2x "Pro Plan Subscription"
- 1x "Advanced Analytics Add-on"
- 5x "Team Member Seat"
- 1x "Consulting Services - 5 hours"
`;

export function RewardSuggester() {
  const [isLoading, setIsLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();

  const handleSuggestion = async () => {
    setIsLoading(true);
    setSuggestions([]);
    
    try {
      const availableRewards = MOCK_REWARDS.map(
        (r, i) => `ID: ${i + 1}, Name: ${r.title}, Description: ${r.description}`
      ).join('\n');
      
      const result = await suggestRewardsBasedOnPurchaseHistory({
        purchaseHistory: MOCK_PURCHASE_HISTORY,
        availableRewards: availableRewards,
      });
      
      const suggestedRewardNames = result.suggestedRewards.split(',').map(id => {
        const reward = MOCK_REWARDS[parseInt(id.trim()) - 1];
        return reward ? reward.title : null;
      }).filter(Boolean) as string[];

      setSuggestions(suggestedRewardNames);
      setIsDialogOpen(true);

    } catch (error) {
      console.error('AI suggestion failed:', error);
      toast({
        variant: 'destructive',
        title: 'Suggestion Failed',
        description: 'Could not generate reward suggestions at this time.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">AI Suggestions</CardTitle>
          <Wand2 className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">Need a tip?</div>
          <p className="text-xs text-muted-foreground mb-4">
            Let AI suggest rewards based on your activity.
          </p>
          <Button onClick={handleSuggestion} disabled={isLoading} size="sm">
            {isLoading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Sparkles className="mr-2 h-4 w-4" />
            )}
            Suggest Rewards
          </Button>
        </CardContent>
      </Card>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <Sparkles className="mr-2 h-5 w-5 text-accent" />
              AI-Powered Suggestions
            </DialogTitle>
            <DialogDescription>
              Based on your purchase history, we think you'll love these:
            </DialogDescription>
          </DialogHeader>
          <ul className="list-disc pl-5 space-y-2 mt-4">
            {suggestions.map((suggestion, index) => (
              <li key={index} className="font-medium">{suggestion}</li>
            ))}
          </ul>
          <DialogFooter>
            <Button onClick={() => setIsDialogOpen(false)}>Got it, thanks!</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
