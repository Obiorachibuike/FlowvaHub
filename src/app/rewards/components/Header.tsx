
'use client';
import { Menu, Bell } from 'lucide-react';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Logo } from '@/components/icons/Logo';
import { Gift } from 'lucide-react';
import type { Profile } from '@/types/database';

export function Header({ profile }: { profile: Profile | null }) {

  const getFirstName = () => {
    if (profile?.email) {
        // Fallback to email if full_name is not available
        const namePart = profile.full_name || profile.email.split('@')[0];
        // capitalize first letter
        return namePart.charAt(0).toUpperCase() + namePart.slice(1);
    }
    return "User";
  }

  return (
    <>
      <Sheet>
          <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="sm:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
              </Button>
          </SheetTrigger>
          <SheetContent side="left" className="sm:max-w-xs">
              <nav className="grid gap-6 text-lg font-medium">
              <Link
                  href="/"
                  className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
              >
                  <Logo className="h-5 w-5 transition-all group-hover:scale-110" />
                  <span className="sr-only">FlowvaHub</span>
              </Link>
              <Link
                  href="/rewards"
                  className="flex items-center gap-4 px-2.5 text-foreground"
              >
                  <Gift className="h-5 w-5" />
                  Rewards
              </Link>
              </nav>
          </SheetContent>
      </Sheet>

      <h1 className="text-lg font-medium text-gray-800">
          Good evening, <span className="text-purple-600 font-semibold">{getFirstName()}</span>
      </h1>
      
    </>
  );
}
