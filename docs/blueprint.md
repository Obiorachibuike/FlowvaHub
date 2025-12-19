# **App Name**: Flowvahub Rewards Redux

## Core Features:

- User Authentication: Implement user login/signup with Supabase Auth to manage user sessions.
- Points Balance Display: Display the user's current points balance using a PointsCard component.
- Rewards Catalog: Fetch and display a list of available rewards from the Supabase database, using RewardGrid and RewardItem components.
- Reward Claiming: Allow users to claim rewards by deducting points from their balance, updating the Supabase database.
- Transaction History: Display a history of claimed rewards in a TransactionHistory component.
- Real-time Updates: Utilize Supabase's real-time capabilities to update points and rewards balances live.
- Intelligent Suggestion: Suggest reward items to claim, by using AI to analyze a user's purchase history. This feature will serve as a tool to give users recommendations.

## Style Guidelines:

- Primary color: Light and fresh blue (#64B5F6) for a clean SaaS feel, evoking trust and clarity.
- Background color: Very light gray (#F5F5F5) for a modern and neutral backdrop.
- Accent color: Soft orange (#FFAB40) to highlight interactive elements and calls to action.
- Body and headline font: 'Inter' (sans-serif) for a modern, machined, objective look; appropriate for a SaaS platform. Note: currently only Google Fonts are supported.
- Use Lucide-React icons to match Flowvahub's existing aesthetic, providing a consistent and professional look.
- Follow a clean, grid-based layout, similar to Flowvahub, with clear spacing and separation of components using Tailwind CSS.
- Incorporate subtle animations using Framer Motion for hover effects and transitions to enhance the user experience.