'use client';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';

import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/lib/supabase/client';

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

type UserFormValue = z.infer<typeof formSchema>;

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [isOauthLoading, setOauthIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [checkingSession, setCheckingSession] = useState(true);

  const router = useRouter();
  const { toast } = useToast();

  // 🔐 Redirect if already logged in
  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();

      if (data.session) {
        router.replace('/dashboard');
        return;
      }

      setCheckingSession(false);
    };

    checkSession();
  }, [router]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormValue>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: UserFormValue) => {
    setIsLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email: data.email,
      password: data.password,
    });

    if (error) {
      setIsLoading(false);
      toast({
        variant: 'destructive',
        title: 'Login Failed',
        description: error.message,
      });
      return;
    }

    toast({
      title: 'Login Successful',
      description: 'Redirecting...',
    });

    router.replace('/dashboard');
  };

  const handleGoogleLogin = async () => {
    setOauthIsLoading(true);

    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });
  };

  // ⏳ Loading Guard
  if (checkingSession) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#8b31ff]">
        <p className="text-white text-sm font-semibold animate-pulse">
          Checking session…
        </p>
      </div>
    );
  }

  return (
    // 👇 your existing JSX stays the same here
    <div className="min-h-screen bg-[#8b31ff] flex items-center justify-center">
      {/* login card */}
    </div>
  );
}