'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { useSupabaseUser } from '@/contexts/SupabaseProvider';
import { Star } from 'lucide-react';

export function PointsCard() {
  const { profile, isLoading } = useSupabaseUser();

  if (isLoading || !profile) {
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Points</CardTitle>
                <Star className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <Skeleton className="h-8 w-24" />
                <Skeleton className="mt-2 h-4 w-32" />
            </CardContent>
        </Card>
    )
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Total Points</CardTitle>
        <Star className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          {profile.total_points.toLocaleString()}
        </div>
        <p className="text-xs text-muted-foreground">
          Your current available balance
        </p>
      </CardContent>
    </Card>
  );
}
