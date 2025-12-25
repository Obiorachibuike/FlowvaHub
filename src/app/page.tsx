
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollingLogos } from '@/components/landing/ScrollingLogos';
import { ImageSlider } from '@/components/landing/ImageSlider';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
        },
    },
};


const ForUsers = () => (
    <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        <motion.main variants={itemVariants} className="max-w-4xl mx-auto text-center mt-16 px-6">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-10">
                YOUR <span className="gradient-text px-2 border-2 border-purple-200 rounded-full">SMART</span> SPACE TO MANAGE YOUR DIGITAL LIFE AND BE REWARDED
            </h1>

            <Link href="/login">
              <Button size="lg" className="bg-gray-900 text-white rounded-full font-bold text-sm shadow-xl hover:scale-105 transition-transform h-auto px-8 py-4 focus-visible:outline-none">
                  Start Earning Today
              </Button>
            </Link>

            <motion.div variants={itemVariants} className="mt-8">
                <ScrollingLogos />
            </motion.div>

            <motion.p variants={itemVariants} className="mt-16 text-xl md:text-2xl text-gray-800 font-medium max-w-2xl mx-auto leading-relaxed">
                Turn productivity into rewards with a calm, smart space that organizes your tools, and keeps you in control.
            </motion.p>
            
            <motion.div variants={itemVariants} className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
    
                <div className="bg-[#f3e8ff] p-8 rounded-3xl border border-purple-100 shadow-sm">
                <h2 className="text-5xl font-semibold mb-2">10,000+</h2>
                <p className="text-xl font-medium mb-8">Users</p>
                <p className="text-gray-600 mb-8">Already simplifying their workflow with Flowva</p>
                <div className="flex items-center">
                    <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"></div>
                    <div className="w-8 h-8 rounded-full bg-gray-400 border-2 border-white"></div>
                    <div className="w-8 h-8 rounded-full bg-gray-500 border-2 border-white"></div>
                    </div>
                    <span className="ml-3 text-sm font-semibold text-gray-700">10,000+</span>
                </div>
                </div>

                <div className="bg-[#f3e8ff] p-8 rounded-3xl border border-purple-100 shadow-sm">
                <h2 className="text-5xl font-semibold mb-2">200+</h2>
                <p className="text-xl font-medium mb-8">Tools</p>
                <p className="text-gray-600 mb-8">Curated and organized for you in the library</p>
                <div className="flex items-center">
                    <div className="flex gap-1">
                    <div className="w-6 h-6 rounded bg-indigo-600"></div>
                    <div className="w-6 h-6 rounded bg-orange-500"></div>
                    <div className="w-6 h-6 rounded bg-blue-400"></div>
                    </div>
                    <span className="ml-3 text-sm font-semibold text-gray-700">and many more</span>
                </div>
                </div>

                <div className="bg-[#f3e8ff] p-8 rounded-3xl border border-purple-100 shadow-sm">
                <h2 className="text-5xl font-semibold mb-2">25+</h2>
                <p className="text-xl font-medium mb-8">Countries</p>
                <p className="text-gray-600 mb-8">Reviewing tools and building smarter stacks every day</p>
                <div className="flex gap-2 text-xl">
                    <span>🇳🇬</span><span>🇺🇸</span><span>🇮🇳</span><span>🇨🇦</span><span>🇵🇭</span><span>🇰🇪</span><span>🇬🇧</span>
                </div>
                </div>
            </motion.div>

        </motion.main>
        
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="max-w-4xl mx-auto px-6 space-y-12 mb-20">
            <motion.section variants={itemVariants} className="max-w-4xl mx-auto bg-[#c2f2bb] rounded-[40px] p-12 text-center">
                <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-16 uppercase">
                Everything in one<br/>place
                </h1>
                
                <div className="flex flex-col md:flex-row justify-center items-end gap-8">
                <div className="bg-white rounded-3xl p-6 shadow-xl w-full max-w-sm text-left">
                    <div className="bg-blue-50 rounded-2xl h-48 mb-6 flex items-center justify-center relative overflow-hidden">
                    <div className="w-24 h-20 bg-gray-100 rounded-lg border-2 border-gray-200 shadow-inner flex items-center justify-center">
                        <span className="text-2xl">📁</span>
                    </div>
                    </div>
                    <h3 className="font-bold text-lg mb-2">Organize your tools</h3>
                    <p className="text-gray-500 text-sm">Keep your apps, subscriptions, and tech stack in one simple space.</p>
                </div>

                <div className="bg-white/50 rounded-3xl p-6 w-full max-w-[200px] text-left opacity-80 scale-95 hidden md:block">
                    <div className="bg-gray-100/50 rounded-2xl h-40 mb-4"></div>
                    <h3 className="font-bold text-sm text-gray-600">Discover what works</h3>
                </div>
                </div>
            </motion.section>

            <motion.section variants={itemVariants} className="bg-[#fff1f2] rounded-[40px] p-8 md:p-12">
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
            </motion.section>

            <motion.section variants={itemVariants} className="bg-[#111111] rounded-[40px] p-8 md:p-12 text-white">
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
            </motion.section>
        </motion.div>

        <motion.div variants={itemVariants} className="my-24">
             <ImageSlider />
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="max-w-4xl mx-auto px-6 space-y-20 mb-24">
            <motion.section variants={itemVariants} className="text-center">
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
            </motion.section>

            <motion.section variants={itemVariants} className="text-center">
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
            </motion.section>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="max-w-4xl mx-auto px-6 space-y-24 mb-24">
            <motion.section variants={itemVariants} className="text-center">
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
            </motion.section>

            <motion.section variants={itemVariants} className="bg-[#e2ff46] rounded-[40px] p-12 text-center relative overflow-hidden">
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
            </motion.section>
        </motion.div>
    </motion.div>
);

const ForBrands = () => (
    <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        <motion.main variants={itemVariants} className="max-w-6xl mx-auto text-center mt-16 px-6">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-12 max-w-5xl mx-auto uppercase">
                CONNECT WITH <span className="gradient-text px-4 border-2 border-purple-200 rounded-full italic">TECH</span> PROFESSIONALS WHO ACTUALLY ENGAGE
            </h1>

            <button className="bg-black text-white px-10 py-4 rounded-full font-black text-sm shadow-2xl hover:scale-105 transition-all mb-20 uppercase tracking-widest focus-visible:outline-none">
                Start Your 3-Day Free Trial
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
                <div className="bg-white border border-gray-100 rounded-[40px] p-16 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                    <h2 className="text-[#00a870] text-6xl md:text-7xl font-bold tracking-tighter">Brevo</h2>
                </div>
                <div className="bg-[#ff6100] rounded-[40px] p-16 flex items-center justify-center shadow-lg hover:brightness-105 transition-all">
                    <div className="flex items-center space-x-3">
                       <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5-10-5-10 5z"/></svg>
                       <h2 className="text-white text-5xl md:text-6xl font-bold tracking-tighter">Jotform</h2>
                    </div>
                </div>
            </div>

            <motion.section variants={itemVariants} className="mb-32">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-4">Trusted by 20+ forward-thinking brands</p>
                <p className="text-xs text-gray-500 max-w-xl mx-auto mb-10 leading-relaxed">
                    Join companies already reaching 10,000+ remote workers and freelancers actively discovering and organizing their digital tools.
                </p>
                
                <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-60 grayscale">
                    <div className="flex items-center space-x-2 font-bold text-sm"><span>⚡</span> Boltshift</div>
                    <div className="flex items-center space-x-2 font-bold text-sm"><span>⚡</span> Boltshift</div>
                    <div className="flex items-center space-x-2 font-bold text-sm"><span>◇</span> FeatherDev</div>
                    <div className="flex items-center space-x-2 font-bold text-sm"><span>◯</span> Spherule</div>
                    <div className="flex items-center space-x-2 font-bold text-sm"><span>🌍</span> GlobalBank</div>
                    <div className="flex items-center space-x-2 font-bold text-sm italic"><span>☀</span> Nietzsche</div>
                </div>
            </motion.section>

            <motion.h2 variants={itemVariants} className="text-4xl md:text-6xl font-extrabold tracking-tight uppercase mb-20">
                AMPLIFY YOUR BRAND'S SUCCESS
            </motion.h2>
        </motion.main>
        <motion.section variants={itemVariants} className="max-w-4xl mx-auto px-6 py-20 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight uppercase mb-16">
                Amplify Your Brand's Success
            </h2>

            <div className="space-y-6 text-left">
                <div className="bg-[#f3f0ff] rounded-[40px] p-8 md:p-12">
                    <h3 className="text-2xl font-bold mb-4 max-w-sm">Engage an active community of tech savvy users</h3>
                    <div className="flex justify-center my-10">
                        <div className="relative w-48 h-32">
                            <div className="absolute top-0 left-0 w-16 h-16 bg-purple-400 rounded-lg transform -rotate-12"></div>
                            <div className="absolute top-4 right-0 w-16 h-16 bg-blue-400 rounded-lg transform rotate-12"></div>
                            <div className="absolute bottom-0 left-8 w-16 h-16 bg-pink-400 rounded-lg transform rotate-6"></div>
                            <div className="absolute bottom-2 right-8 w-16 h-16 bg-yellow-400 rounded-lg transform -rotate-6"></div>
                        </div>
                    </div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Thousands of engaged users explore and use tools on our platform everyday</p>
                </div>

                <div className="bg-[#f3f0ff] rounded-[40px] p-8 md:p-12">
                    <h3 className="text-2xl font-bold mb-4 max-w-sm">Offer Exclusive Value</h3>
                    <div className="flex justify-center space-x-6 my-10">
                        <div className="text-5xl">🎟️</div>
                        <div className="text-5xl">💵</div>
                        <div className="text-5xl">💎</div>
                    </div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Stand out with special discounts, cashback, or unique perks for our users</p>
                </div>

                <div className="bg-[#f3f0ff] rounded-[40px] p-8 md:p-12 overflow-hidden">
                    <h3 className="text-2xl font-bold mb-4 max-w-sm">Boost Your Visibility</h3>
                    
                    <div className="bg-white rounded-2xl p-4 shadow-sm border border-purple-100 max-w-md mx-auto my-8 flex items-center space-x-4">
                        <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center font-bold text-xl">K</div>
                        <div className="flex-1">
                            <p className="text-[10px] text-gray-400 font-bold uppercase">Top Tool Spotlight</p>
                            <h4 className="font-bold text-sm">Keeper Security</h4>
                            <div className="flex items-center text-[10px] text-gray-500 space-x-2">
                                <span>⭐ 4.6</span>
                                <span>• 2.3k saves</span>
                                <span className="bg-gray-100 px-2 py-0.5 rounded">Security</span>
                            </div>
                        </div>
                        <div className="text-gray-300">↗</div>
                    </div>

                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Get featured across our Homepage, Discover section, Rewards Hub, Library, Newsletter, and Blog</p>
                </div>
            </div>
        </motion.section>
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="max-w-4xl mx-auto px-6 space-y-24 mb-24">

            <motion.section variants={itemVariants} className="bg-black rounded-[40px] p-8 md:p-12 text-white relative overflow-hidden">
                <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-4">Measure Your Impact</h3>
                    <p className="text-sm text-gray-400 mb-12 max-w-sm">
                        Track how many users unlock, engage with, and activate your offer.
                    </p>
                    
                    <div className="flex flex-col md:flex-row items-end justify-between gap-8">
                        <div>
                            <h4 className="text-5xl md:text-6xl font-black tracking-tighter">30,000+</h4>
                            <p className="text-xs font-bold text-gray-500 uppercase mt-2">Tools Added to Libraries</p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl rotate-12 flex items-center justify-center text-4xl shadow-[0_0_30px_rgba(251,191,36,0.3)]">
                                ⭐
                            </div>
                            <div className="h-16 w-16 flex items-end space-x-1">
                                <div className="w-3 h-1/2 bg-blue-500 rounded-t-sm"></div>
                                <div className="w-3 h-3/4 bg-blue-400 rounded-t-sm"></div>
                                <div className="w-3 h-full bg-blue-300 rounded-t-sm"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>

            <motion.section variants={itemVariants} className="text-center">
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight uppercase mb-16">
                    Why Subscribe to Flowva?
                </h2>

                <div className="space-y-4 text-left">
                    <div className="bg-[#d946ef] text-white p-8 rounded-3xl">
                        <div className="flex items-center space-x-3 mb-3">
                            <span className="bg-white/20 p-2 rounded-lg text-lg">🛡️</span>
                            <h4 className="text-xl font-bold">Verified engagement</h4>
                        </div>
                        <p className="text-xs font-medium leading-relaxed opacity-90">
                            Reach active tech-savvy professionals who manage their tool libraries and actually try new tools, all included with your subscription.
                        </p>
                    </div>

                    <div className="bg-[#ec4899] text-white p-8 rounded-3xl">
                        <div className="flex items-center space-x-3 mb-3">
                            <span className="bg-white/20 p-2 rounded-lg text-lg">🎁</span>
                            <h4 className="text-xl font-bold">Reward-Driven Growth</h4>
                        </div>
                        <p className="text-xs font-medium leading-relaxed opacity-90">
                            Incentivize users automatically with Flowva's built-in rewards system — no extra fees, fully handled by the platform.
                        </p>
                    </div>

                    <div className="bg-[#f97316] text-white p-8 rounded-3xl">
                        <div className="flex items-center space-x-3 mb-3">
                            <span className="bg-white/20 p-2 rounded-lg text-lg">⚡</span>
                            <h4 className="text-xl font-bold">Full Self-Serve Freedom</h4>
                        </div>
                        <p className="text-xs font-medium leading-relaxed opacity-90">
                            Launch and manage campaigns anytime with an intuitive dashboard. Target your campaigns, schedule actions, and track engagement with complete control.
                        </p>
                    </div>

                    <div className="bg-[#3b82f6] text-white p-8 rounded-3xl">
                        <div className="flex items-center space-x-3 mb-3">
                            <span className="bg-white/20 p-2 rounded-lg text-lg">💎</span>
                            <h4 className="text-xl font-bold">Optional Premium Support</h4>
                        </div>
                        <p className="text-xs font-medium leading-relaxed opacity-90">
                            For top-tier brands or high-impact campaigns, our team can manage your campaigns, optimize engagement, and provide advanced analytics.
                        </p>
                    </div>

                    <div className="bg-[#db2777] text-white p-8 rounded-3xl">
                        <div className="flex items-center space-x-3 mb-3">
                            <span className="bg-white/20 p-2 rounded-lg text-lg">🔒</span>
                            <h4 className="text-xl font-bold">Exclusive Access</h4>
                        </div>
                        <p className="text-xs font-medium leading-relaxed opacity-90">
                            Your subscription unlocks Flowva's curated audience. Our users are verified, engaged, and relevant. Limited campaign slots maintain visibility and exclusivity.
                        </p>
                    </div>
                </div>
            </motion.section>
        </motion.div>
        <motion.section variants={itemVariants} className="max-w-4xl mx-auto px-6 py-20 text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight uppercase mb-12">
                How It Works
            </h2>

            <div className="space-y-6">
                <div className="bg-[#f97316] text-white rounded-[40px] p-10 md:p-14 text-left relative overflow-hidden group">
                    <span className="bg-white/20 text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-6 inline-block">Step 1</span>
                    <h3 className="text-3xl md:text-4xl font-black mb-4">Subscribe.</h3>
                    <p className="text-sm font-medium opacity-90 max-w-xs mb-10">Choose the plan that fits your feature goals.</p>
                    
                    <div className="flex justify-center mt-4">
                        <div className="relative bg-white text-[#f97316] px-8 py-3 rounded-full font-black text-xl shadow-2xl transform group-hover:scale-110 transition-transform cursor-default">
                            Subscribe
                            <div className="absolute -top-4 -left-6 bg-red-500 text-white text-[10px] p-1 rounded-md">❤️ 123</div>
                            <div className="absolute -bottom-2 -right-4 bg-red-400 text-white text-[10px] p-1 rounded-md">💬 1</div>
                        </div>
                    </div>
                </div>

                <div className="bg-[#a855f7] text-white rounded-[40px] p-10 md:p-14 text-left relative overflow-hidden group">
                    <span className="bg-white/20 text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-6 inline-block">Step 2</span>
                    <h3 className="text-3xl md:text-4xl font-black mb-4">Launch Features</h3>
                    <p className="text-sm font-medium opacity-90 max-w-sm mb-10">Set up actions, schedule them, and reach techies, freelancers, and remote workers where they work.</p>
                    
                    <div className="flex justify-center mt-4">
                        <div className="text-7xl animate-bounce">🚀</div>
                    </div>
                </div>

                <div className="bg-[#f43f5e] text-white rounded-[40px] p-10 md:p-14 text-left relative overflow-hidden group">
                    <span className="bg-white/20 text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-6 inline-block">Step 3</span>
                    <h3 className="text-3xl md:text-4xl font-black mb-4">Engage Users</h3>
                    <p className="text-sm font-medium opacity-90 max-w-xs mb-10">Offer perks and rewards that drive deeper participation.</p>
                    
                    <div className="flex justify-center mt-4">
                        <div className="text-7xl transform -rotate-12 group-hover:rotate-0 transition-transform">📢</div>
                    </div>
                </div>
            </div>
        </motion.section>
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="max-w-4xl mx-auto px-6 space-y-24 mb-24">

            <motion.div variants={itemVariants} className="space-y-6">
                <div className="bg-[#15803d] text-white rounded-[40px] p-10 md:p-14 text-left relative overflow-hidden group">
                    <span className="bg-white/20 text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-6 inline-block">Step 4</span>
                    <h3 className="text-3xl md:text-4xl font-black mb-4">Track Results</h3>
                    <p className="text-sm font-medium opacity-90 max-w-xs mb-10">Monitor feature performance in real time with actionable analytics.</p>
                    
                    <div className="flex justify-center mt-4">
                        <div className="relative w-40 h-40">
                            <div className="absolute inset-0 rounded-full border-[20px] border-blue-400 border-r-purple-500 border-b-orange-400 group-hover:rotate-45 transition-transform duration-500"></div>
                        </div>
                    </div>
                </div>

                <div className="bg-[#0f766e] text-white rounded-[40px] p-10 md:p-14 text-left relative overflow-hidden group">
                    <span className="bg-white/20 text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-6 inline-block">Step 5</span>
                    <h3 className="text-3xl md:text-4xl font-black mb-4 leading-tight">Optional Premium Support</h3>
                    <p className="text-sm font-medium opacity-90 max-w-sm mb-10">Optional Premium Support – Let the Flowva team run your features for maximum impact.</p>
                    
                    <div className="flex justify-center mt-4">
                        <div className="text-7xl drop-shadow-2xl group-hover:scale-110 transition-transform">👑</div>
                    </div>
                </div>
            </motion.div>

            <motion.section variants={itemVariants} className="text-center">
                <div className="flex justify-center space-x-[-8px] mb-4">
                    <div className="w-8 h-8 rounded-full border-2 border-white bg-purple-100 flex items-center justify-center text-sm shadow-sm">💜</div>
                    <div className="w-8 h-8 rounded-full border-2 border-white bg-purple-600 flex items-center justify-center text-sm shadow-sm">💜</div>
                </div>
                
                <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight uppercase mb-2">Success Stories</h2>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-12">Tools That Found Their Audience with Flowva</p>

                <div className="flex flex-col md:flex-row gap-6">
                    <div className="bg-[#6dd5ff] p-8 rounded-[24px] text-left flex-1 shadow-lg flex flex-col justify-between min-h-[220px]">
                        <p className="text-[15px] font-bold leading-relaxed text-gray-900">
                            "Flowva gave us a new channel of discovery. Users were genuinely interested and engagement was higher than on ads."
                        </p>
                        <div className="flex items-center space-x-2 mt-6">
                            <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center text-[10px]">⚡</div>
                            <span className="text-[11px] font-black uppercase tracking-wider text-gray-800">@ProductivityApp</span>
                        </div>
                    </div>

                    <div className="bg-[#c2ff3d] p-8 rounded-[24px] text-left flex-1 shadow-lg flex flex-col justify-between min-h-[220px]">
                        <p className="text-[15px] font-bold leading-relaxed text-gray-900">
                            "Seamless and simple our sign-ups grew with no extra work on our end."
                        </p>
                        <div className="flex items-center space-x-2 mt-6">
                            <div className="w-6 h-6 bg-gray-800 rounded flex items-center justify-center text-[10px] text-white">📦</div>
                            <span className="text-[11px] font-black uppercase tracking-wider text-gray-800">@Devtoolkit</span>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center space-x-2 mt-10">
                    <span className="w-1.5 h-1.5 bg-gray-800 rounded-full"></span>
                    <span className="w-1.5 h-1.5 bg-gray-300 rounded-full"></span>
                </div>
            </motion.section>
        </motion.div>
    </motion.div>
);

export default function LandingPage() {
    const [activeTab, setActiveTab] = useState('users');

    return (
        <div className="bg-white text-gray-900 overflow-x-hidden">
            <motion.div initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>
                <div className="bg-black text-white text-xs py-2 text-center px-4">
                    🚀 Big news! The full Flowva experience + mobile apps are launching soon on iOS & Android
                </div>

                <header className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
                    <div className="flex items-center space-x-8">
                        <div className="flex items-center space-x-1 font-bold text-xl">
                            <span className="text-purple-600">●</span><span>Flowva</span>
                        </div>
                        <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-500">
                            <a href="#" className="hover:text-black">Hub ▾</a>
                            <a href="#" className="hover:text-black">Company ▾</a>
                            <a href="#" className="hover:text-black">Support ▾</a>
                            <a href="#" className="hover:text-black">Community ▾</a>
                        </nav>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Link href="/login" className="text-sm font-semibold px-4 py-2">Login</Link>
                        <Link href="/signup" className="text-sm font-semibold bg-gray-900 text-white px-5 py-2 rounded-full focus-visible:outline-none">Sign up</Link>
                    </div>
                </header>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="max-w-4xl mx-auto text-center mt-16 px-6">
                <div className="inline-flex bg-gray-100 p-1 rounded-full mb-12">
                    <button 
                        onClick={() => setActiveTab('users')}
                        className={`px-4 py-1.5 rounded-full text-xs font-medium flex items-center transition-colors duration-300 ${activeTab === 'users' ? 'bg-white shadow-md' : 'text-gray-500'}`}>
                        <span className={`mr-2 ${activeTab === 'users' ? 'gradient-text' : ''}`}>👥</span> <span className={activeTab === 'users' ? 'gradient-text' : ''}>For users</span>
                    </button>
                    <button 
                        onClick={() => setActiveTab('brands')}
                        className={`px-4 py-1.5 rounded-full text-xs font-medium flex items-center transition-colors duration-300 ${activeTab === 'brands' ? 'bg-white shadow-md' : 'text-gray-500'}`}>
                        <span className={`mr-2 ${activeTab === 'brands' ? 'gradient-text' : ''}`}>🏢</span> <span className={activeTab === 'brands' ? 'gradient-text' : ''}>For brands</span>
                    </button>
                </div>
            </motion.div>
            
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTab}
                    initial={{ x: 300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -300, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {activeTab === 'users' ? <ForUsers /> : <ForBrands />}
                </motion.div>
            </AnimatePresence>


            <motion.footer 
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true, amount: 0.2 }}
                 variants={itemVariants}
                className="bg-black text-white pt-20 pb-10 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="bg-[#1a1a1a] rounded-[32px] p-8 mb-20 text-center max-w-2xl mx-auto">
                        <div className="mb-6 flex justify-center">
                            <div className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center text-xl">👓</div>
                        </div>
                        <div className="relative max-w-md mx-auto">
                            <input type="email" placeholder="Enter email address" className="w-full bg-[#2a2a2a] rounded-full py-4 px-6 text-sm border-none focus:ring-1 focus:ring-gray-500 outline-none"/>
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
            </motion.footer>
             <div className="fixed bottom-6 right-6 bg-green-500 text-white p-3 rounded-full shadow-lg cursor-pointer">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </div>
        </div>
    );
}

