'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Loader2, Star } from 'lucide-react';
import { claimReward } from '@/actions/rewards';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import type { Reward } from '@/types/database';

interface RewardItemProps {
  reward: Reward;
  isHighlighted?: boolean;
}

export function RewardItem({ reward, isHighlighted }: RewardItemProps) {
  const [isClaiming, setIsClaiming] = useState(false);
  const { toast } = useToast();

  const handleClaim = async () => {
    setIsClaiming(true);
    const result = await claimReward(reward.id);
    setIsClaiming(false);

    toast({
      variant: result.success ? 'default' : 'destructive',
      title: result.success ? 'Success!' : 'Oops!',
      description: result.message,
    });
  };

  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      className={`h-full transition-shadow duration-300 ${isHighlighted ? 'shadow-2xl shadow-accent/50' : ''}`}
    >
      <Card className="flex flex-col h-full overflow-hidden">
        <div className="relative h-48 w-full">
            <Image
                src={reward.image_url || 'https://picsum.photos/seed/1/600/400'}
                alt={reward.title}
                fill
                style={{ objectFit: 'cover' }}
                data-ai-hint="reward item"
            />
        </div>
        <CardHeader>
          <CardTitle>{reward.title}</CardTitle>
          <CardDescription className="line-clamp-2">{reward.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow" />
        <CardFooter className="flex justify-between items-center bg-muted/50 p-4">
          <div className="flex items-center font-bold text-lg">
            <Star className="w-5 h-5 mr-2 text-accent fill-current" />
            {reward.cost_points.toLocaleString()}
          </div>
          <Button onClick={handleClaim} disabled={isClaiming || reward.stock <= 0}>
            {isClaiming ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : null}
            {reward.stock <= 0 ? 'Out of Stock' : 'Claim'}
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
