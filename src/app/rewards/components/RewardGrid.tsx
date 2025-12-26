'use client';

import { useEffect, useState } from 'react';
import type { Reward } from '@/types/database';
import { RewardItem } from './RewardItem';
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent } from '@/components/ui/card';
import { supabase } from '@/lib/supabase';

function RewardSkeleton() {
  return (
    <Card className="overflow-hidden">
      <Skeleton className="h-48 w-full" />
      <CardHeader>
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-full mt-2" />
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center">
          <Skeleton className="h-6 w-20" />
          <Skeleton className="h-10 w-24" />
        </div>
      </CardContent>
    </Card>
  );
}


export function RewardGrid() {
  const [rewards, setRewards] = useState<Reward[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRewards = async () => {
      setLoading(true);
      setError(null);

      const { data, error } = await supabase
        .from('rewards')
        .select('*')
        .order('cost_points', { ascending: true });

      if (error) {
        console.error('Error fetching rewards:', error);
        setError('Could not fetch rewards. Please try again later.');
      } else {
        setRewards(data);
      }

      setLoading(false);
    };

    fetchRewards();
  }, []);

  if (loading) {
    return (
        <div className="grid gap-4 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {[...Array(4)].map((_, i) => <RewardSkeleton key={i} />)}
        </div>
    );
  }

  if (error) {
    return <Card><CardContent className="p-6">{error}</CardContent></Card>;
  }

  if (rewards.length === 0) {
    return <Card><CardContent className="p-6">No rewards available at the moment. Check back soon!</CardContent></Card>;
  }

  return (
    <div className="grid gap-4 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {rewards.map((reward) => (
        <RewardItem key={reward.id} reward={reward} />
      ))}
    </div>
  );
}
