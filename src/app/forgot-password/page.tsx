'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Link from 'next/link';

import { useToast } from '@/hooks/use-toast';
import { useSupabaseUser } from '@/contexts/SupabaseProvider';

const formSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email.' }),
});

type UserFormValue = z.infer<typeof formSchema>;

export default function ForgotPasswordPage() {
  const [isLoading, setIsLoading] = useState(false);
  const { supabase } = useSupabaseUser();
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormValue>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    }
  });

  const onSubmit = async (data: UserFormValue) => {
    setIsLoading(true);
    const { error } = await supabase.auth.resetPasswordForEmail(data.email, {
        redirectTo: `${location.origin}/reset-password`,
    });
    setIsLoading(false);

    if (error) {
      toast({
        variant: 'destructive',
        title: 'Error Sending Link',
        description: error.message,
      });
    } else {
      toast({
        title: 'Reset Link Sent',
        description: 'Please check your email for a password reset link.',
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#8b31ff] flex items-center justify-center px-4">
        <div className="bg-white w-full max-w-md rounded-2xl p-8 shadow-2xl text-center">
            <h2 className="text-2xl font-extrabold text-[#8b31ff] mb-2">Reset Password</h2>
            <p className="text-xs text-gray-500 mb-8 font-medium">Enter your email to receive a reset link</p>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 text-left">
                <div>
                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Email</label>
                    <input type="email" placeholder="your@email.com" 
                        {...register('email')}
                        className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all"/>
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>
                
                <button disabled={isLoading} className="w-full bg-[#8b31ff] text-white font-bold py-3.5 rounded-xl text-xs hover:brightness-110 transition-all shadow-lg shadow-purple-200 disabled:opacity-50">
                    {isLoading ? 'Sending...' : 'Send Reset Link'}
                </button>
            </form>
            
            <p className="mt-8 text-xs font-semibold text-gray-400">
                Remember your password? <Link href="/login" className="text-[#8b31ff] hover:underline">Sign in</Link>
            </p>
        </div>
    </div>
  );
}
