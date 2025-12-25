
'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Code, BotMessageSquare, BrainCircuit, Users, ToyBrick, Route } from 'lucide-react';

const logos = [
  { icon: <Code />, name: 'Replit' },
  { icon: <BotMessageSquare />, name: 'ChatGPT' },
  { icon: <BrainCircuit />, name: 'TensorFlow' },
  { icon: <Users />, name: 'Zoom' },
  { icon: <ToyBrick />, name: 'Jotform' },
  { icon: <Route />, name: 'Brevo' },
];

const Marquee = ({ children, direction = 'left' }: { children: React.ReactNode, direction?: 'left' | 'right' }) => {
    const marqueeVariants = {
        animate: {
            x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'],
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: 'loop',
                    duration: 40,
                    ease: 'linear',
                },
            },
        },
    };

    return (
        <div className="w-full overflow-x-hidden">
            <motion.div
                className="flex whitespace-nowrap"
                variants={marqueeVariants}
                animate="animate"
            >
                {children}
            </motion.div>
        </div>
    )
}

export function ScrollingLogos() {
  return (
    <div className="py-12 space-y-4">
        <Marquee direction="right">
            <div className="flex gap-8 px-4">
                {[...logos, ...logos].map((logo, index) => (
                    <div key={`top-${index}`} className="flex items-center justify-center h-20 w-40 bg-gray-100 rounded-2xl shadow-sm">
                        <div className="flex items-center gap-3 text-gray-600 font-bold">
                            {logo.icon}
                            <span>{logo.name}</span>
                        </div>
                    </div>
                ))}
            </div>
        </Marquee>
        <Marquee direction="left">
            <div className="flex gap-8 px-4">
                {[...logos, ...logos].map((logo, index) => (
                    <div key={`bottom-${index}`} className="flex items-center justify-center h-20 w-40 bg-gray-100 rounded-2xl shadow-sm">
                        <div className="flex items-center gap-3 text-gray-600 font-bold">
                            {logos[logos.length - 1 - (index % logos.length)].icon}
                            <span>{logos[logos.length - 1 - (index % logos.length)].name}</span>
                        </div>
                    </div>
                ))}
            </div>
        </Marquee>
    </div>
  );
}
