'use server';

import { createClient } from '@/lib/supabase';
import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';

export async function claimReward(rewardId: string): Promise<{ success: boolean; message: string }> {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { success: false, message: 'You must be logged in to claim a reward.' };
  }

  // Use Supabase RPC to call the database function
  const { error } = await supabase.rpc('claim_reward', {
    reward_id: rewardId,
    user_id: user.id,
  });

  if (error) {
    console.error('Error claiming reward:', error);
    // Provide a more user-friendly error message
    if (error.message.includes('Insufficient points')) {
      return { success: false, message: 'You do not have enough points to claim this reward.' };
    }
    return { success: false, message: `An error occurred: ${error.message}` };
  }
  
  // Revalidate the paths to reflect the changes in points and history
  revalidatePath('/rewards');

  return { success: true, message: 'Reward claimed successfully!' };
}
