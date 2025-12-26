
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';

import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/lib/supabase';

const formSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email.' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters.' }),
  confirmPassword: z.string()
}).refine(data => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
});

type UserFormValue = z.infer<typeof formSchema>;

export default function SignupPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [isOauthLoading, setOauthIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormValue>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    }
  });

  const onSubmit = async (data: UserFormValue) => {
    setIsLoading(true);
    const { error } = await supabase.auth.signUp({
      email: data.email,
      password: data.password,
    });
    setIsLoading(false);

    if (error) {
      toast({
        variant: 'destructive',
        title: 'Signup Failed',
        description: error.message,
      });
    } else {
      toast({
        title: 'Signup Successful',
        description: 'Please check your email to verify your account.',
      });
      router.push('/login');
    }
  };

  const handleGoogleLogin = async () => {
    setOauthIsLoading(true);
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${location.origin}/auth/callback`,
      },
    });
  };

  return (
    <div className="min-h-screen bg-[#8b31ff] flex items-center justify-center px-4 py-12">
        <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-white w-full max-w-md rounded-2xl p-8 shadow-2xl text-center">
            <h2 className="text-2xl font-extrabold text-[#8b31ff] mb-2">Create Your Account</h2>
            <p className="text-xs text-gray-500 mb-8 font-medium">Sign up to manage your tools</p>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 text-left">
                <div>
                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Email</label>
                    <input type="email" placeholder="your@email.com" 
                        {...register('email')}
                        className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all"/>
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>

                <div className="relative">
                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Password</label>
                    <div className="relative">
                        <input type={showPassword ? "text" : "password"} placeholder="••••••••" 
                            {...register('password')}
                            className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all"/>
                        <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-bold text-gray-400 hover:text-gray-600">{showPassword ? 'Hide' : 'Show'}</button>
                    </div>
                     {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
                </div>

                <div className="relative">
                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Confirm Password</label>
                     <div className="relative">
                        <input type={showConfirmPassword ? "text" : "password"} placeholder="••••••••" 
                            {...register('confirmPassword')}
                            className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all"/>
                        <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-bold text-gray-400 hover:text-gray-600">{showConfirmPassword ? 'Hide' : 'Show'}</button>
                    </div>
                    {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword.message}</p>}
                </div>
                
                <button disabled={isLoading} className="w-full bg-[#8b31ff] text-white font-bold py-3.5 rounded-xl text-xs hover:brightness-110 transition-all shadow-lg shadow-purple-200 mt-2 disabled:opacity-50">
                    {isLoading ? 'Signing up...' : 'Sign up Account'}
                </button>
            </form>

            <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-gray-100"></span>
                </div>
                <div className="relative flex justify-center text-[10px] uppercase font-bold text-gray-300">
                    <span className="bg-white px-4 italic">or</span>
                </div>
            </div>

            <button onClick={handleGoogleLogin} disabled={isOauthLoading} className="w-full flex items-center justify-center space-x-3 border border-gray-100 py-3 rounded-xl hover:bg-gray-50 transition-all mb-8 disabled:opacity-50">
                <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" className="w-4 h-4" alt="Google"/>
                <span className="text-xs font-bold text-gray-600">{isOauthLoading ? 'Redirecting...' : 'Sign in with Google'}</span>
            </button>
            
            <p className="text-xs font-semibold text-gray-400">
                Already have an account? <Link href="/login" className="text-[#8b31ff] hover:underline">Log In</Link>
            </p>
        </motion.div>
    </div>
  );
}
