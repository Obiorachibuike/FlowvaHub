'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Star } from 'lucide-react';
import type { Profile } from '@/types/database';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

interface PointsCardProps {
  profile: Profile | null;
}

export function PointsCard({ profile: initialProfile }: PointsCardProps) {
  const [profile, setProfile] = useState(initialProfile);
  const [loading, setLoading] = useState(!initialProfile);

  useEffect(() => {
    setProfile(initialProfile);
    if(initialProfile) setLoading(false);
  }, [initialProfile]);

  useEffect(() => {
    if (!initialProfile?.id) return;

    const channel = supabase
      .channel(`profile-points-changes-${initialProfile.id}`)
      .on<Profile>(
        'postgres_changes',
        {
          event: 'UPDATE',
          schema: 'public',
          table: 'profiles',
          filter: `id=eq.${initialProfile.id}`,
        },
        (payload) => {
          setProfile(payload.new as Profile);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [initialProfile]);


  if (loading || !profile) {
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
