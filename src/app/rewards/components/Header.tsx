
'use client';
import { useSupabaseUser } from '@/contexts/SupabaseProvider';
import { Menu, Bell } from 'lucide-react';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Logo } from '@/components/icons/Logo';
import { Gift } from 'lucide-react';

export function Header() {
  const { profile } = useSupabaseUser();

  const getFirstName = () => {
    if (profile?.email) {
        const namePart = profile.email.split('@')[0];
        // capitalize first letter
        return namePart.charAt(0).toUpperCase() + namePart.slice(1);
    }
    return "User";
  }

  return (
    <header className="flex justify-between items-center py-4 mb-4 sm:mb-0">
        <div className="flex items-center gap-3">
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
        </div>
        
        <div className="relative p-2 bg-gray-100 rounded-full cursor-pointer">
            <Bell className="w-5 h-5 text-gray-600" />
            <span className="absolute top-1 right-1 flex h-4 w-4">
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500 border-2 border-white text-[10px] text-white items-center justify-center">1</span>
            </span>
        </div>
    </header>
  );
}
