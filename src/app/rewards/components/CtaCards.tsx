
'use client';
import { Button } from '@/components/ui/button';
import { Gift, Plus, Zap } from 'lucide-react';

export function CtaCards() {
    return (
        <div className="space-y-4">
            <div className="bg-white rounded-2xl border border-gray-100 p-10 flex flex-col items-center text-center shadow-sm">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Gift className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">No Tech Stacks Created</h3>
                <p className="text-sm text-gray-500 max-w-xs mb-6">Create your first tech stack by combining tools from your library for specific projects or workflows.</p>
                <Button className="bg-purple-600 hover:bg-purple-700 rounded-full">
                    <Plus className="mr-2 h-4 w-4" /> Create Tech Stack
                </Button>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 p-10 flex flex-col items-center text-center shadow-sm">
                <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-4">
                    <Zap className="w-8 h-8 text-red-400" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Earn Your First Reward</h3>
                <p className="text-sm text-gray-500 max-w-sm mb-6">Start earning points by adding tools, writing reviews, and sharing your stacks. Redeem points for discounts and perks.</p>
                <Button className="rounded-full" style={{backgroundColor: '#ff7a7a', color: 'white'}}>
                    Explore Rewards
                </Button>
            </div>
        </div>
    )
}
