import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

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
                  <Button variant="ghost" className="text-sm font-semibold px-4 py-2">Login</Button>
                </Link>
                <Link href="/login">
                  <Button className="text-sm font-semibold bg-gray-900 text-white px-5 py-2 rounded-full hover:bg-gray-800">Sign up</Button>
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
        
        <div className="max-w-4xl mx-auto px-6 space-y-12 mb-20 text-left">
            <section className="bg-[#f3e8ff] rounded-[40px] p-8 md:p-12 text-center overflow-hidden relative">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">EVERYTHING IN ONE PLACE</h2>
                
                <div className="relative flex justify-center items-end h-64">
                    <div className="absolute -left-10 bottom-0 w-48 h-56 bg-white/50 rounded-2xl shadow-sm transform -rotate-6"></div>
                    
                    <div className="bg-white rounded-3xl shadow-xl p-6 w-full max-w-md z-10 text-left">
                        <div className="grid grid-cols-5 gap-3 mb-6">
                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">🎁</div>
                            <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">🛠️</div>
                            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">💵</div>
                            <div className="w-10 h-10 coin-gradient rounded-full"></div>
                            <div className="w-10 h-10 bg-blue-500 rounded-lg"></div>
                        </div>
                        <h4 className="font-bold text-sm mb-1">Get Rewarded</h4>
                        <p className="text-[10px] text-gray-500 leading-tight">Earn perks, gift cards and cashback just for staying productive.</p>
                    </div>
                </div>
                
                <div className="flex justify-center space-x-2 mt-8">
                    <span className="w-1.5 h-1.5 bg-gray-300 rounded-full"></span>
                    <span className="w-2 h-2 bg-gray-800 rounded-full"></span>
                    <span className="w-1.5 h-1.5 bg-gray-300 rounded-full"></span>
                </div>
            </section>

            <section className="bg-[#fff1f2] rounded-[40px] p-8 md:p-12">
                <span className="bg-gray-200/50 text-[10px] px-3 py-1 rounded-full font-bold text-gray-600 uppercase">Download</span>
                <h2 className="text-2xl md:text-3xl font-bold mt-6 mb-8 max-w-md leading-tight">ORGANIZE, DISCOVER, AND EARN ON THE GO.</h2>
                
                <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 flex flex-col md:flex-row items-center gap-6 border border-white">
                    <div className="flex flex-col space-y-3 w-full md:w-auto">
                        <button className="flex items-center space-x-3 bg-gray-100/80 px-4 py-2 rounded-xl text-xs font-semibold hover:bg-white transition-colors">
                            <span className="text-blue-500 text-lg"></span>
                            <span>Apple App Store</span>
                        </button>
                        <button className="flex items-center space-x-3 bg-gray-100/80 px-4 py-2 rounded-xl text-xs font-semibold hover:bg-white transition-colors">
                            <span className="text-green-600 text-lg">▶</span>
                            <span>Google Play Store</span>
                        </button>
                    </div>
                    <div className="w-24 h-24 bg-white p-2 rounded-xl border border-gray-100 shadow-sm flex items-center justify-center">
                       <div className="grid grid-cols-3 gap-1 opacity-20">
                           <div className="w-4 h-4 bg-black"></div><div className="w-4 h-4 bg-black"></div><div className="w-4 h-4 bg-black"></div>
                           <div className="w-4 h-4 bg-black"></div><div className="w-4 h-4 bg-black"></div><div className="w-4 h-4 bg-black"></div>
                       </div>
                    </div>
                </div>

                <div className="mt-6 bg-white/40 py-3 px-6 rounded-full inline-flex items-center space-x-2 text-sm text-gray-600">
                    <span>⏳</span>
                    <span className="font-medium">Coming soon</span>
                </div>
            </section>

            <section className="bg-[#111111] rounded-[40px] p-8 md:p-12 text-white">
                <span className="bg-gray-800 text-[10px] px-3 py-1 rounded-full font-bold text-gray-400 uppercase">Benefits</span>
                
                <ul className="mt-8 space-y-4 mb-12">
                    <li className="flex items-center space-x-3 text-lg font-bold">
                        <span className="w-2 h-2 bg-white rounded-full"></span>
                        <span>QUICK DAILY CHECK-INS</span>
                    </li>
                    <li className="flex items-center space-x-3 text-lg font-bold text-gray-500">
                        <span className="w-2 h-2 bg-gray-700 rounded-full"></span>
                        <span>DISCOVER TOOLS ANYWHERE</span>
                    </li>
                    <li className="flex items-center space-x-3 text-lg font-bold text-gray-500">
                        <span className="w-2 h-2 bg-gray-700 rounded-full"></span>
                        <span>NEVER MISS A REWARD</span>
                    </li>
                </ul>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 overflow-hidden">
                    <div className="bg-white rounded-2xl h-48 p-4 flex flex-col justify-between overflow-hidden">
                        <div className="text-black text-[10px] font-bold border-b pb-2">How's your moment?</div>
                        <div className="flex-1 bg-purple-50 my-2 rounded-lg"></div>
                        <button className="bg-black text-white text-[8px] py-2 rounded-lg">Check in</button>
                    </div>
                    <div className="bg-gray-800 rounded-2xl h-48 flex items-center justify-center text-2xl">🧭</div>
                    <div className="bg-gray-800 rounded-2xl h-48 flex items-center justify-center text-2xl">🪙</div>
                </div>
            </section>
        </div>

        <div className="max-w-4xl mx-auto px-6 space-y-12 mb-20">
            <section className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12 uppercase">Simple, Rewarding, Calm</h2>
                
                <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-[#e9d5ff] p-8 rounded-[32px] text-left flex flex-col min-h-[320px]">
                        <span className="text-7xl font-light mb-6">1</span>
                        <h3 className="text-2xl font-bold mb-3">Sign up & Connect</h3>
                        <p className="text-sm text-gray-700 leading-relaxed">Set up your workspace in minutes</p>
                    </div>

                    <div className="bg-[#e9d5ff] p-8 rounded-[32px] text-left flex flex-col min-h-[320px]">
                        <span className="text-7xl font-light mb-6">2</span>
                        <h3 className="text-2xl font-bold mb-3">Organize & Track</h3>
                        <p className="text-sm text-gray-700 leading-relaxed">Add your tools, subscriptions, and stacks.</p>
                    </div>

                    <div className="bg-[#e9d5ff] p-8 rounded-[32px] text-left flex flex-col min-h-[320px]">
                        <span className="text-7xl font-light mb-6">3</span>
                        <h3 className="text-2xl font-bold mb-3 leading-tight">Earn & Enjoy</h3>
                        <p className="text-sm text-gray-700 leading-relaxed">Check in, try new tools, and watch as your coins grow.</p>
                    </div>
                </div>
            </section>

            <section className="text-center">
                <div className="flex justify-center space-x-[-10px] mb-6">
                    <div className="w-8 h-8 rounded-full border-2 border-white bg-white flex items-center justify-center text-purple-600 shadow-sm">💜</div>
                    <div className="w-8 h-8 rounded-full border-2 border-white bg-purple-600 flex items-center justify-center text-white shadow-sm">💜</div>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12 uppercase">Join a Growing Community</h2>

                <div className="flex flex-col md:flex-row gap-6 items-stretch">
                    <div className="bg-[#6dd5ff] p-8 rounded-[20px] text-left flex-1 flex flex-col justify-between shadow-lg">
                        <div>
                            <p className="text-[15px] font-medium leading-relaxed mb-6">
                                Flowvahub makes finding tools effortless. Instead of wasting hours jumping between sites, I just open Discover Tools everything's clear, organized, and right there. Feels less like searching, more like unlocking possibilities. ☕️ 💜
                            </p>
                        </div>
                        <div>
                            <div className="flex text-black text-sm mb-1">★★★★★</div>
                            <p className="font-bold text-sm">Ummaratu M.</p>
                            <p className="text-[11px] opacity-80 uppercase tracking-wider">Freelancer & Virtual Assistant</p>
                        </div>
                    </div>

                    <div className="bg-[#faff6d] p-8 rounded-[20px] text-left flex-1 flex flex-col justify-between shadow-lg">
                        <div>
                            <p className="text-[15px] font-medium leading-relaxed mb-6">
                                Flowvahub is my new sidekick. It keeps my apps in line, my subs in check, and still finds a way to pay me in rewards. If it could make coffee, I'd marry it
                            </p>
                        </div>
                        <div>
                            <div className="flex text-black text-sm mb-1">★★★★★</div>
                            <p className="font-bold text-sm">Adewale O.</p>
                            <p className="text-[11px] opacity-80 uppercase tracking-wider">Freelancer & Digital Creator</p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center space-x-2 mt-12">
                    <span className="w-1.5 h-1.5 bg-gray-300 rounded-full"></span>
                    <span className="w-2 h-2 bg-gray-800 rounded-full"></span>
                    <span className="w-1.5 h-1.5 bg-gray-300 rounded-full"></span>
                </div>
            </section>
        </div>
        <div className="max-w-4xl mx-auto px-6 space-y-24 mb-24">

            <section className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12 uppercase">Need Answers?</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="bg-gray-50 p-5 rounded-xl flex items-center justify-between group cursor-pointer hover:bg-white hover:shadow-md transition-all">
                        <span className="text-sm font-bold text-gray-800 text-left">What is Flowvahub?</span>
                        <span className="text-[10px] text-gray-400">▶</span>
                    </div>
                    <div className="bg-gray-50 p-5 rounded-xl flex items-center justify-between group cursor-pointer hover:bg-white hover:shadow-md transition-all">
                        <span className="text-sm font-bold text-gray-800 text-left">Is my data secure with Flowva?</span>
                        <span className="text-[10px] text-gray-400">▶</span>
                    </div>
                    <div className="bg-gray-50 p-5 rounded-xl flex items-center justify-between group cursor-pointer hover:bg-white hover:shadow-md transition-all">
                        <span className="text-sm font-bold text-gray-800 text-left">How does team collaboration work?</span>
                        <span className="text-[10px] text-gray-400">▶</span>
                    </div>
                    <div className="bg-gray-50 p-5 rounded-xl flex items-center justify-between group cursor-pointer hover:bg-white hover:shadow-md transition-all">
                        <span className="text-sm font-bold text-gray-800 text-left">How do Smart Tool Recommendations work?</span>
                        <span className="text-[10px] text-gray-400">▶</span>
                    </div>
                    <div className="bg-gray-50 p-5 rounded-xl flex items-center justify-between group cursor-pointer hover:bg-white hover:shadow-md transition-all">
                        <span className="text-sm font-bold text-gray-800 text-left">Can I cancel my subscription anytime?</span>
                        <span className="text-[10px] text-gray-400">▶</span>
                    </div>
                    <div className="bg-gray-50 p-5 rounded-xl flex items-center justify-between group cursor-pointer hover:bg-white hover:shadow-md transition-all">
                        <span className="text-sm font-bold text-gray-800 text-left">Can I manage all my subscriptions in one place?</span>
                        <span className="text-[10px] text-gray-400">▶</span>
                    </div>
                </div>
            </section>

            <section className="bg-[#e2ff46] rounded-[40px] p-12 text-center relative overflow-hidden">
                <div className="absolute top-4 left-4 w-16 h-16 coin-gradient rounded-full border-4 border-white/30 flex items-center justify-center text-[10px] font-bold opacity-80">50</div>
                <div className="absolute bottom-8 right-4 w-20 h-20 coin-gradient rounded-full border-4 border-white/30 flex items-center justify-center text-[12px] font-bold opacity-80 rotate-12">50</div>
                
                <div className="relative z-10">
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-6 leading-[1.1]">
                        STAY PRODUCTIVE.<br/>GET REWARDED.
                    </h2>
                    <p className="text-sm font-bold max-w-sm mx-auto mb-8 leading-relaxed text-gray-900">
                        Turn your tools, subscriptions, and daily habits into rewards all in one calm space
                    </p>
                    <button className="bg-black text-white px-10 py-4 rounded-full text-xs font-black uppercase tracking-widest hover:scale-105 transition-transform">
                        Unlock Rewards Now
                    </button>
                </div>
            </section>

        </div>

        <footer className="bg-black text-white pt-20 pb-10 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="bg-[#1a1a1a] rounded-[32px] p-8 mb-20 text-center max-w-2xl mx-auto">
                    <div className="mb-6 flex justify-center">
                        <div className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center text-xl">👓</div>
                    </div>
                    <div className="relative max-w-md mx-auto">
                        <input type="email" placeholder="Enter email address" className="w-full bg-[#2a2a2a] rounded-full py-4 px-6 text-sm border-none focus:ring-1 focus:ring-gray-500 outline-none" />
                        <button className="absolute right-2 top-2 bg-white text-black px-6 py-2 rounded-full text-xs font-bold flex items-center">
                            Submit <span className="ml-2">→</span>
                        </button>
                    </div>
                    <p className="text-[10px] text-gray-500 mt-4">10,000+ end their week inspired. Join Friday Flow.</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20 border-t border-gray-800 pt-16">
                    <div className="col-span-2 md:col-span-1">
                        <div className="flex items-center space-x-2 font-bold text-lg mb-4">
                            <span className="text-white">👓</span><span>Flowva</span>
                        </div>
                        <p className="text-xs text-gray-500 leading-relaxed max-w-[200px]">
                            The smart way to manage your digital life and get rewarded.
                        </p>
                        <p className="text-[10px] text-gray-600 mt-8">© 2025 Flowva</p>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Hub</h4>
                        <ul className="text-xs space-y-3 text-gray-500 font-medium">
                            <li><a href="#" className="hover:text-white transition-colors">Discover</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Library</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Rewards</a></li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Company</h4>
                        <ul className="text-xs space-y-3 text-gray-500 font-medium">
                            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                        </ul>
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-8">Legal</h4>
                        <ul className="text-xs space-y-3 text-gray-500 font-medium">
                            <li><a href="#" className="hover:text-white transition-colors">Terms and Conditions</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Support</h4>
                        <ul className="text-xs space-y-3 text-gray-500 font-medium">
                            <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                        </ul>
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-8">Community</h4>
                        <ul className="text-xs space-y-3 text-gray-500 font-medium">
                            <li><a href="#" className="hover:text-white transition-colors">Affiliate</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Influencer</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Referral</a></li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-wrap justify-center gap-6 border-t border-gray-800 pt-8 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                    <a href="#" className="flex items-center hover:text-white"><span className="mr-2">f</span> Facebook</a>
                    <a href="#" className="flex items-center hover:text-white"><span className="mr-2">𝕏</span> X (Formerly Twitter)</a>
                    <a href="#" className="flex items-center hover:text-white"><span className="mr-2"></span> Instagram</a>
                    <a href="#" className="flex items-center hover:text-white"><span className="mr-2"></span> Linkedin</a>
                    <a href="#" className="flex items-center hover:text-white"><span className="mr-2"></span> Tiktok</a>
                </div>
            </div>
        </footer>
    </div>
  );
}
