import { Home, Gift, History, HelpCircle } from 'lucide-react';
import Link from 'next/link';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Logo } from '@/components/icons/Logo';
import { UserNav } from '@/components/auth/UserNav';
import { Header } from './components/Header';
import { createSupabaseServerClient } from '@/lib/supabase';
import { cookies }from 'next/headers';

export default async function RewardsLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const supabase = createSupabaseServerClient(cookies());
  const { data: { user } } = await supabase.auth.getUser();
  const { data: profile } = await supabase.from('profiles').select('*').eq('id', user!.id).single();

  return (
    <TooltipProvider>
      <div className="flex min-h-screen w-full flex-col bg-muted/40">
        <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
          <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
            <Link
              href="/"
              className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
            >
              <Logo className="h-5 w-5 transition-all group-hover:scale-110" />
              <span className="sr-only">FlowvaHub</span>
            </Link>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/rewards"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                  <Gift className="h-5 w-5" />
                  <span className="sr-only">Rewards</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Rewards</TooltipContent>
            </Tooltip>
          </nav>
          <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                  <HelpCircle className="h-5 w-5" />
                  <span className="sr-only">Help</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Help</TooltipContent>
            </Tooltip>
          </nav>
        </aside>
        <div className="flex flex-col sm:pl-14">
            <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
                <Header profile={profile}/>
                <div className="relative ml-auto flex-1 md:grow-0">
                  {/* Search bar can go here */}
                </div>
                <UserNav user={user} profile={profile} />
            </header>
            <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
              {children}
            </main>
        </div>
      </div>
    </TooltipProvider>
  );
}
