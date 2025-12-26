
import { createSupabaseServerClient } from '@/lib/supabase';
import { PointsCard } from './components/PointsCard';
import { RewardGrid } from './components/RewardGrid';
import { TransactionHistory } from './components/TransactionHistory';
import { RewardSuggester } from './components/RewardSuggester';
import { Header } from './components/Header';
import { AnnouncementCard } from './components/AnnouncementCard';
import { StatCards } from './components/StatCards';
import { TopPicks } from './components/TopPicks';
import { CtaCards } from './components/CtaCards';

export default async function RewardsPage() {
  const supabase = createSupabaseServerClient(new (require('next/headers').cookies))();
  
  const { data: { user } } = await supabase.auth.getUser();

  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user!.id)
    .single();

  return (
    <div className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
      <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
          <PointsCard profile={profile} />
          <RewardSuggester />
        </div>
        <RewardGrid />
        <TransactionHistory />
      </div>
      <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-1">
         <AnnouncementCard />
         <StatCards />
         <TopPicks />
         <CtaCards />
      </div>
    </div>
  );
}
