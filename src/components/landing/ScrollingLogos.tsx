
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const logos = [
    { name: 'Replit', src: 'https://img.icons8.com/ios-filled/50/000000/replit.png' },
    { name: 'ChatGPT', src: 'https://img.icons8.com/color/48/chatgpt.png' },
    { name: 'TensorFlow', src: 'https://img.icons8.com/color/48/tensorflow.png' },
    { name: 'Zoom', src: 'https://img.icons8.com/color/48/zoom.png' },
    { name: 'Jotform', src: 'https://img.icons8.com/color/48/jotform.png' },
    { name: 'Brevo', src: 'https://img.icons8.com/color/48/brevo.png' },
];

const Marquee = ({ children, direction = 'left' }: { children: React.ReactNode, direction?: 'left' | 'right' }) => {
    const marqueeVariants = {
        animate: {
            x: direction === 'left' ? ['0%', '-100%'] : ['-100%', '0%'],
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
                <div className="flex flex-shrink-0 gap-8 px-4">
                    {children}
                </div>
                <div className="flex flex-shrink-0 gap-8 px-4">
                    {children}
                </div>
            </motion.div>
        </div>
    )
}

export function ScrollingLogos() {
  return (
    <div className="py-12 space-y-4">
        <Marquee direction="right">
            {logos.map((logo, index) => (
                <div key={`top-${index}`} className="flex items-center justify-center h-24 w-48 p-4">
                    <div className="relative w-full h-full flex items-center justify-center">
                        <Image src={logo.src} alt={logo.name} layout="fill" objectFit="contain" />
                    </div>
                </div>
            ))}
        </Marquee>
        <Marquee direction="left">
            {[...logos].reverse().map((logo, index) => (
                 <div key={`bottom-${index}`} className="flex items-center justify-center h-24 w-48 p-4">
                    <div className="relative w-full h-full flex items-center justify-center">
                        <Image src={logo.src} alt={logo.name} layout="fill" objectFit="contain" />
                    </div>
                </div>
            ))}
        </Marquee>
    </div>
  );
}
