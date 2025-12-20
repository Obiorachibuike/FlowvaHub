import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MoveRight } from 'lucide-react';

// Using a simple SVG for the logo as per the design
const FlowvaLogo = () => (
    <div className="flex items-center space-x-1 font-bold text-xl">
        <span className="text-purple-600">●</span><span>Flowva</span>
    </div>
);

const ToolIcon = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <div className={`w-14 h-14 rounded-xl shadow-md flex items-center justify-center ${className}`}>
        {children}
    </div>
);

export default function Home() {
  return (
    <div className="bg-white text-gray-900">
        <div className="bg-black text-white text-xs py-2 text-center px-4">
            🚀 Big news! The full Flowva experience + mobile apps are launching soon on iOS & Android
        </div>

        <header className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
            <div className="flex items-center space-x-8">
                <FlowvaLogo />
                <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-500">
                    <Link href="#" className="hover:text-black">Hub ▾</Link>
                    <Link href="#" className="hover:text-black">Company ▾</Link>
                    <Link href="#" className="hover:text-black">Support ▾</Link>
                    <Link href="#" className="hover:text-black">Community ▾</Link>
                </nav>
            </div>
            <div className="flex items-center space-x-2">
                <Link href="/login">
                  <Button variant="ghost" className="font-semibold">Login</Button>
                </Link>
                <Link href="/login">
                  <Button className="font-semibold bg-gray-900 text-white rounded-full hover:bg-gray-800">Sign up</Button>
                </Link>
            </div>
        </header>

        <main className="max-w-4xl mx-auto text-center mt-16 px-6">
            <div className="inline-flex bg-gray-100 p-1 rounded-full mb-12">
                <Button variant="secondary" className="bg-gray-800 text-white px-4 py-1.5 rounded-full text-xs font-medium flex items-center h-auto hover:bg-gray-700">
                    <span className="mr-2">👥</span> For users
                </Button>
                <Button variant="ghost" className="text-gray-500 px-4 py-1.5 rounded-full text-xs font-medium flex items-center h-auto">
                    <span className="mr-2">🏢</span> For brands
                </Button>
            </div>

            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-10">
                YOUR <span className="gradient-text px-2 border-2 border-purple-200 rounded-full">SMART</span> SPACE TO MANAGE YOUR DIGITAL LIFE AND BE REWARDED
            </h1>

            <Link href="/login">
              <Button size="lg" className="bg-gray-900 text-white rounded-full font-bold text-sm shadow-xl hover:scale-105 transition-transform h-auto px-8 py-4">
                  Start Earning Today
              </Button>
            </Link>

            <div className="mt-20 grid grid-cols-4 md:grid-cols-7 gap-4 items-center justify-items-center opacity-80">
                <div className="w-16 h-16 rounded-full coin-gradient flex flex-col items-center justify-center text-[10px] font-bold text-purple-900 border-2 border-white shadow-lg">
                    <span className="text-xs">50</span> FlowCoins
                </div>
                <ToolIcon className="bg-blue-500 text-white font-bold text-xs italic">Canva</ToolIcon>
                <div className="w-16 h-16 rounded-full coin-gradient flex flex-col items-center justify-center text-[10px] font-bold text-purple-900 border-2 border-white shadow-lg">
                    <span className="text-xs">50</span> FlowCoins
                </div>
                <ToolIcon className="bg-black text-white text-xl">◈</ToolIcon>
                <div className="w-16 h-16 rounded-full coin-gradient flex flex-col items-center justify-center text-[10px] font-bold text-purple-900 border-2 border-white shadow-lg">
                    <span className="text-xs">50</span> FlowCoins
                </div>
                <ToolIcon className="bg-white border border-gray-100 text-red-500 text-xs">●●●</ToolIcon>
                <ToolIcon className="bg-white border border-gray-100 font-bold text-lg"><span className="text-blue-500">G</span></ToolIcon>
            </div>

            <p className="mt-20 text-xl md:text-2xl text-gray-800 font-medium max-w-2xl mx-auto leading-relaxed">
                Turn productivity into rewards with a calm, smart space that organizes your tools, and keeps you in control.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-20 mb-20 text-left">
                <Card className="bg-purple-50 p-8 rounded-3xl border border-purple-100">
                    <CardContent className="p-0">
                        <h3 className="text-4xl font-bold mb-2">10,000+</h3>
                        <p className="font-semibold text-gray-600 mb-6">Users</p>
                        <p className="text-sm text-gray-400">Already simplifying their workflow with Flowva</p>
                        <div className="mt-8 text-xs font-bold text-gray-400">10,000+</div>
                    </CardContent>
                </Card>

                <Card className="bg-purple-50 p-8 rounded-3xl border border-purple-100">
                    <CardContent className="p-0">
                        <h3 className="text-4xl font-bold mb-2">200+</h3>
                        <p className="font-semibold text-gray-600 mb-6">Tools</p>
                        <p className="text-sm text-gray-400">Curated and organized for you in the library</p>
                        <div className="mt-8 flex space-x-1 grayscale opacity-50">
                            <span className="bg-gray-800 p-1 rounded text-white text-[8px]">⌨️</span>
                            <span className="bg-gray-800 p-1 rounded text-white text-[8px]">📷</span>
                            <span className="bg-gray-800 p-1 rounded text-white text-[8px]">🎨</span>
                            <span className="text-[8px] self-center ml-2 text-gray-500">and many more</span>
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-purple-50 p-8 rounded-3xl border border-purple-100">
                    <CardContent className="p-0">
                        <h3 className="text-4xl font-bold mb-2">25+</h3>
                        <p className="font-semibold text-gray-600 mb-6">Countries</p>
                        <p className="text-sm text-gray-400">Reviewing tools and building smarter stacks every day</p>
                        <div className="mt-8 flex space-x-2 text-lg">
                            🇳🇬 🇺🇸 🇮🇳 🇨🇦 🇰🇪 🇬🇧
                        </div>
                    </CardContent>
                </Card>
            </div>
        </main>
        
        {/* The WhatsApp floating button is not included as it's typically handled by a third-party script or a more complex component. */}
    </div>
  );
}
