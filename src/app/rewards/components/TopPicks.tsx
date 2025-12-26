
'use client';
import { Folder } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function TopPicks() {
    const picks = [
        { name: "Reclaim", icon: "Re", color: "bg-blue-600" },
        { name: "Clickup", icon: "Cu", color: "bg-gradient-to-tr from-purple-500 to-pink-500" },
        { name: "Fiverr", icon: "Fi", color: "bg-green-600" }
    ]

    return (
        <section>
            <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                
                <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-purple-600 rounded flex items-center justify-center">
                        <Folder className="w-3.5 h-3.5 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900">Top Picks for You</h3>
                </div>
                <Button variant="link" className="text-purple-600 text-sm font-medium p-0 h-auto hover:underline">View All</Button>
                </div>

                <div className="flex flex-wrap gap-3">
                    {picks.map(pick => (
                        <div key={pick.name} className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 min-w-[160px] cursor-pointer hover:bg-white transition-colors">
                            <div className={`w-10 h-10 ${pick.color} rounded-lg flex items-center justify-center overflow-hidden`}>
                                <span className="text-white font-bold text-xs">{pick.icon}</span>
                            </div>
                            <span className="font-semibold text-gray-800 text-sm">{pick.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
