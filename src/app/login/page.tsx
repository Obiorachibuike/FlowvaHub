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
  email: z.string().email({ message: 'Please enter a valid email.' }),
  password: z.string().min(1, { message: 'Password is required.' }),
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
    defaultValues: { email: '', password: '' },
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

    router.replace('/dashboard'); // triggers middleware
  };

  const handleGoogleLogin = async () => {
    setOauthIsLoading(true);

    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: `${window.location.origin}/auth/callback` },
    });
  };

  // ⏳ Loading guard
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
    <div className="min-h-screen bg-[#8b31ff] flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="bg-white w-full max-w-md rounded-2xl p-8 shadow-2xl text-center"
      >
        <h2 className="text-2xl font-extrabold text-[#8b31ff] mb-2">
          Log in to flowva
        </h2>
        <p className="text-xs text-gray-500 mb-8 font-medium italic">
          Log in to receive personalized recommendations
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 text-left">
          <div>
            <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="user@example.com"
              {...register('email')}
              className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-purple-200"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                Password
              </label>
              <Link
                href="/forgot-password"
                className="text-[10px] font-bold text-[#8b31ff] hover:underline"
              >
                Forgot Password?
              </Link>
            </div>

            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                {...register('password')}
                className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-purple-200"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-bold text-gray-400 hover:text-gray-600"
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#8b31ff] text-white font-bold py-3.5 rounded-xl text-xs hover:brightness-110 transition-all shadow-lg shadow-purple-200 mt-2 disabled:opacity-50"
          >
            {isLoading ? 'Signing in...' : 'Sign in'}
          </button>
        </form>

        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-gray-100" />
          </div>
          <div className="relative flex justify-center text-[10px] uppercase font-bold text-gray-300">
            <span className="bg-white px-4 italic">or</span>
          </div>
        </div>

        <button
          onClick={handleGoogleLogin}
          disabled={isOauthLoading}
          className="w-full flex items-center justify-center space-x-3 border border-gray-100 py-3 rounded-xl hover:bg-gray-50 transition-all mb-8 disabled:opacity-50"
        >
          <img
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            className="w-4 h-4"
            alt="Google Logo"
          />
          <span className="text-xs font-bold text-gray-600">
            {isOauthLoading ? 'Redirecting...' : 'Sign in with Google'}
          </span>
        </button>

        <p className="text-xs font-semibold text-gray-400">
          Don't have an account?{' '}
          <Link href="/signup" className="text-[#8b31ff] hover:underline">
            Sign up
          </Link>
        </p>
      </motion.div>
    </div>
  );
}