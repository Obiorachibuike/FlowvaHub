export type Profile = {
  id: string; // UUID from auth.users
  email: string;
  full_name: string | null;
  avatar_url: string | null;
  total_points: number; // Added for rewards app
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

// Example protected resource from the senior-level doc
export type Project = {
  id: string; // uuid
  user_id: string; // uuid
  title: string;
  description: string | null;
  created_at: string;
}
