
'use client';
import Image from 'next/image';

export function AnnouncementCard() {
    return (
        <div className="relative overflow-hidden bg-gradient-to-br from-purple-600 to-indigo-700 rounded-3xl p-6 text-white shadow-lg">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white opacity-10 rounded-full"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white opacity-5 rounded-full"></div>

            <div className="flex flex-col md:flex-row gap-6 items-start relative z-10">
            <div className="w-24 h-32 bg-purple-400 bg-opacity-40 rounded-2xl flex-shrink-0 border border-purple-300 border-opacity-30">
                <Image src="https://picsum.photos/seed/bravoo/100/150" alt="Bravoo Preview" width={100} height={150} className="w-full h-full object-cover rounded-2xl opacity-80" data-ai-hint="abstract texture"/>
            </div>

            <div className="flex-1">
                <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
                Big News: We're Becoming Bravoo! 🎉
                </h2>
                <p className="text-sm leading-relaxed text-purple-100">
                Bravoo is a platform designed to make learning fun, simple, and truly rewarding. With Bravoo, you'll complete quick, engaging missions that help you build real digital skills while earning coins, prizes, gadgets, and more. 
                </p>
                <p className="text-sm mt-3 text-purple-50 leading-relaxed">
                Explore what's coming on our brand-new website: 
                <a href="https://www.joinbravoo.com" target="_blank" rel="noopener noreferrer" className="underline font-medium hover:text-white">www.joinbravoo.com</a>. 
                We officially launch on January 10!
                </p>
            </div>
            </div>
        </div>
    )
}
