'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase';
import type { SupabaseClient, Session } from '@supabase/supabase-js';
import type { Profile } from '@/types/database';
import { usePathname, useRouter } from 'next/navigation';

type SupabaseContextType = {
  supabase: SupabaseClient;
  session: Session | null;
  user: Session['user'] | null;
  profile: Profile | null;
  isLoading: boolean;
};

const Context = createContext<SupabaseContextType | undefined>(undefined);

export function SupabaseProvider({ children }: { children: React.ReactNode }) {
  const [supabase] = useState(() => createClient());
  const [session, setSession] = useState<Session | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      setSession(session);
      setIsLoading(false);

      if (event === 'SIGNED_OUT') {
        setProfile(null);
        router.push('/login');
      }
    });

    supabase.auth.getSession().then(({ data: { session } }) => {
        setSession(session);
        setIsLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [router, supabase]);

  useEffect(() => {
    if (session?.user) {
      const fetchProfile = async () => {
        const { data, error } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', session.user.id)
          .single();

        if (error) {
          console.error('Error fetching profile:', error);
          setProfile(null);
        } else {
          setProfile(data);
        }
      };

      fetchProfile();
    } else {
      setProfile(null);
    }
  }, [session, supabase]);
  
  // Realtime profile updates
  useEffect(() => {
    if (session?.user?.id) {
      const channel = supabase
        .channel(`profile-changes-${session.user.id}`)
        .on<Profile>(
          'postgres_changes',
          {
            event: 'UPDATE',
            schema: 'public',
            table: 'profiles',
            filter: `id=eq.${session.user.id}`,
          },
          (payload) => {
            setProfile(payload.new as Profile);
          }
        )
        .subscribe();
      
      return () => {
        supabase.removeChannel(channel);
      }
    }
  }, [session, supabase])

  const value = {
    supabase,
    session,
    user: session?.user ?? null,
    profile,
    isLoading,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export const useSupabaseUser = () => {
  const context = useContext(Context);
  if (context === undefined) {
    throw new Error('useSupabaseUser must be used within a SupabaseProvider.');
  }
  return context;
};
