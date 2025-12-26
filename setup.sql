-- 1. Enable extensions
create extension if not exists "uuid-ossp";

-- 2. Create tables
-- Profiles table
create table profiles (
  id uuid references auth.users on delete cascade,
  email text unique,
  full_name text,
  avatar_url text,
  total_points int default 0,
  created_at timestamp with time zone default timezone('utc', now()),
  primary key (id)
);

-- Rewards table
create table rewards (
  id uuid default uuid_generate_v4() primary key,
  title text not null,
  description text,
  cost_points integer not null check (cost_points >= 0),
  image_url text,
  stock integer not null check (stock >= 0),
  created_at timestamp with time zone default timezone('utc', now())
);

-- User Rewards join table (for transaction history)
create table user_rewards (
  id bigserial primary key,
  user_id uuid references public.profiles on delete cascade not null,
  reward_id uuid references public.rewards on delete cascade not null,
  status text check (status in ('claimed', 'pending')) default 'claimed',
  created_at timestamp with time zone default timezone('utc', now())
);

-- 3. Enable Row Level Security (RLS)
alter table profiles enable row level security;
alter table rewards enable row level security;
alter table user_rewards enable row level security;

-- 4. RLS Policies
-- Profiles policies
create policy "Users can read own profile"
on profiles
for select
using (auth.uid() = id);

create policy "Users can update own profile"
on profiles
for update
using (auth.uid() = id);

-- Rewards policies (publicly readable)
create policy "Users can read rewards"
on rewards
for select
using (true);

-- User_rewards policies
create policy "Users can read their own reward history"
on user_rewards
for select
using (auth.uid() = user_id);

create policy "Users can insert their own reward claims"
on user_rewards
for insert
with check (auth.uid() = user_id);

-- 5. Auto-create Profile on Signup Trigger
create function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, email, full_name, avatar_url)
  values (new.id, new.email, new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'avatar_url');
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
after insert on auth.users
for each row execute procedure public.handle_new_user();

-- 6. DB Function to claim a reward
create or replace function claim_reward(reward_id uuid, user_id uuid)
returns void as $$
declare
  reward_cost int;
  user_points int;
  reward_stock int;
begin
  -- Get reward cost and stock
  select cost_points, stock into reward_cost, reward_stock from public.rewards where id = reward_id;

  -- Get user's current points
  select total_points into user_points from public.profiles where id = user_id;

  -- Check if user has enough points
  if user_points < reward_cost then
    raise exception 'Insufficient points';
  end if;

  -- Check if reward is in stock
  if reward_stock <= 0 then
    raise exception 'Reward out of stock';
  end if;

  -- Deduct points from user
  update public.profiles
  set total_points = total_points - reward_cost
  where id = user_id;

  -- Decrement reward stock
  update public.rewards
  set stock = stock - 1
  where id = reward_id;

  -- Insert into user_rewards history
  insert into public.user_rewards (user_id, reward_id)
  values (user_id, reward_id);
end;
$$ language plpgsql security definer;

-- 7. Seed some rewards data
insert into rewards (title, description, cost_points, image_url, stock)
values
  (
    'FlowvaHub Coffee Mug',
    'Start your day with a branded coffee mug that shows off your great taste in productivity tools.',
    500,
    'https://images.unsplash.com/photo-1522012188892-24beb302783d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxjb2ZmZWUlMjBtdWd8ZW58MHx8fHwxNzY2MTQzMzA4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    100
  ),
  (
    'Branded T-Shirt',
    'A high-quality, comfortable cotton t-shirt with the sleek FlowvaHub logo. Wear your productivity pride.',
    1500,
    'https://images.unsplash.com/photo-1696086152513-c74dc1d4b135?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHx0LXNoaXJ0fGVufDB8fHx8MTc2NjE0NzE4N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    50
  ),
  (
    'Sticker Pack',
    'A pack of 10 vibrant, high-quality vinyl stickers to customize your laptop, notebook, or water bottle.',
    300,
    'https://images.unsplash.com/photo-1617539615469-369a567e16f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8c3RpY2tlcnMlMjBsYXB0b3B8ZW58MHx8fHwxNzY2MTg4MDUzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    200
  ),
  (
    'Wireless Mouse',
    'An ergonomic wireless mouse designed for smooth, precise control to boost your daily productivity.',
    3000,
    'https://images.unsplash.com/flagged/photo-1561023367-4431103a484f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxjb21wdXRlciUyMG1vdXNlfGVufDB8fHx8MTc2NjEwODA3OXww&ixlib=rb-4.1.0&q=80&w=1080',
    25
  ),
  (
    'Noise-Cancelling Headphones',
    'Immerse yourself in your work or music with these state-of-the-art noise-cancelling headphones.',
    10000,
    'https://images.unsplash.com/photo-1639452126848-874852607b6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8aGVhZHBob25lcyUyMGRlc2t8ZW58MHx8fHwxNzY2MTgzMjI4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    10
  ),
  (
    '$50 Amazon Gift Card',
    'A gift card for your favorite online store. The perfect reward for any occasion.',
    5000,
    'https://images.unsplash.com/photo-1637070155805-e6fbee6ec2cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxnaWZ0JTIwY2FyZHxlbnwwfHx8fDE3NjYxNzgyMDl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    100
  );
