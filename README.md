# FlowvaHub Rewards

This is a Next.js application that provides a user-facing rewards platform, complete with a points system, reward catalog, and AI-powered suggestions. It uses Supabase for the database and authentication, and Genkit for its AI features.

## Getting Started

Follow these instructions to get a local copy of the project up and running for development and testing purposes.

### Prerequisites

- [Node.js](httpss://nodejs.org/) (v18 or later)
- npm or a compatible package manager (e.g., pnpm, yarn)
- A [Supabase](httpss://supabase.com/) account to create your project and database.
- A [Google AI API Key](httpss://aistudio.google.com/app/u/0/apikey) for the AI features.

### 1. Install Dependencies

First, clone the repository and install the necessary npm packages:

```bash
git clone <your-repo-url>
cd <your-repo-name>
npm install
```

### 2. Set Up Environment Variables

Create a new file named `.env` in the root of your project by copying the example file:

```bash
cp .env.example .env
```

Now, open the `.env` file and add your credentials:

- **Supabase:** Find your Project URL and `anon` public key in your Supabase project's **Settings > API**.
- **Google AI:** Get your API key from [Google AI Studio](httpss://aistudio.google.com/app/u/0/apikey).

```.env
# Supabase
NEXT_PUBLIC_SUPABASE_URL="YOUR_SUPABASE_URL"
NEXT_PUBLIC_SUPABASE_ANON_KEY="YOUR_SUPABASE_ANON_KEY"

# Google AI (for Genkit)
GEMINI_API_KEY="YOUR_GEMINI_API_KEY"
```

### 3. Set Up the Supabase Database

You'll need to run some SQL queries to set up the necessary tables and functions in your Supabase project. Go to the **SQL Editor** in your Supabase dashboard and run the queries from the `setup.sql` file.

This will:
- Create the `profiles`, `rewards`, and `user_rewards` tables.
- Enable Row Level Security (RLS) and define policies for data access.
- Create the `claim_reward` function to handle the logic for claiming rewards.
- Create a trigger to automatically create a user profile when a new user signs up.

### 4. Run the Development Server

Once your environment variables and database are set up, you can start the development server:

```bash
npm run dev
```

The application should now be running at [http://localhost:3000](http://localhost:3000).

## Assumptions & Trade-offs

- **Client-Side Supabase:** All Supabase interactions are handled on the client-side using Next.js Client Components. This simplifies the architecture but means that all data access policies must be strictly enforced via Supabase Row Level Security (RLS).
- **AI Suggestions with Mock Data:** The "AI Suggestion" feature (`RewardSuggester.tsx`) currently uses a mock purchase history and a static list of available rewards (`MOCK_REWARDS`). This was done to simplify the demo and avoid the need for a real purchase history table. In a production environment, this would be replaced with real user data.
- **Server Actions for Mutations:** The `claimReward` function is implemented as a Next.js Server Action (`src/actions/rewards.ts`). This provides a secure way to perform mutations from the client without exposing an API endpoint.
- **Realtime Updates:** The application uses Supabase's realtime subscriptions to update the transaction history and user points in real-time when a reward is claimed.
