import type { Reward } from "@/types/database";

export const MOCK_REWARDS: Omit<Reward, 'id' | 'created_at' | 'image_url'>[] = [
    {
        title: 'FlowvaHub Coffee Mug',
        description: 'Start your day with a branded coffee mug.',
        cost_points: 500,
        stock: 100,
    },
    {
        title: 'Branded T-Shirt',
        description: 'High-quality cotton t-shirt with the FlowvaHub logo.',
        cost_points: 1500,
        stock: 50,
    },
    {
        title: 'Sticker Pack',
        description: 'A pack of 10 high-quality vinyl stickers.',
        cost_points: 300,
        stock: 200,
    },
    {
        title: 'Wireless Mouse',
        description: 'Ergonomic wireless mouse to boost your productivity.',
        cost_points: 3000,
        stock: 25,
    },
    {
        title: 'Noise-Cancelling Headphones',
        description: 'Immerse yourself in your work or music.',
        cost_points: 10000,
        stock: 10,
    },
    {
        title: '$50 Amazon Gift Card',
        description: 'A gift card for your favorite online store.',
        cost_points: 5000,
        stock: 100,
    }
];
