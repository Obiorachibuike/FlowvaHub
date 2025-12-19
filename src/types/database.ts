export type Profile = {
  id: string; // UUID from auth.users
  email: string;
  total_points: number;
  avatar_url: string | null;
  created_at: string;
};

export type Reward = {
  id: string; // UUID
  title: string;
  description: string;
  cost_points: number;
  image_url: string;
  stock: number;
  created_at: string;
};

export type UserReward = {
  id: number; // Serial
  user_id: string; // UUID from auth.users
  reward_id: string; // UUID from rewards
  status: 'claimed' | 'pending';
  created_at: string;
};
