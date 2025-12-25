
'use client';

import { useState } from 'react';
import Image from 'next/image';

const slidesData = [
  { id: 0, src: "https://picsum.photos/seed/slide1/600/400", alt: "Integrations", hint: "app integrations" },
  { id: 1, src: "https://picsum.photos/seed/slide2/600/400", alt: "Search Focus", hint: "app search" },
  { id: 2, src: "https://picsum.photos/seed/slide3/600/400", alt: "Rewards", hint: "rewards screen" },
];

export function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(1);

  const move = (next: boolean) => {
    if (next && currentIndex < slidesData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else if (!next && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const getSlideClasses = (index: number) => {
    let classes = "slide absolute w-64 md:w-80 transition-all duration-500 ease-in-out";
    if (index === currentIndex) {
      classes += ' opacity-100 rotate-y-0 translate-x-0 scale-110 z-20';
    } else if (index < currentIndex) {
      classes += ' opacity-40 rotate-y-60 -translate-x-64 scale-75 z-0 blur-[2px]';
    } else {
      classes += ' opacity-40 rotate-y-neg-60 translate-x-64 scale-75 z-0 blur-[2px]';
    }
    return classes;
  };
  
  const getImageClasses = (index: number) => {
      if (index === currentIndex) {
          return "rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-2 border-blue-400";
      }
      return "rounded-2xl shadow-2xl border border-white/10";
  }

  return (
    <div className="bg-slate-900 flex flex-col items-center justify-center py-12 overflow-hidden">
      <div className="perspective-1000 w-full max-w-4xl h-[400px] relative">
        <div className="preserve-3d relative w-full h-full flex items-center justify-center transition-transform duration-700">
          {slidesData.map((slide, i) => (
            <div key={slide.id} className={getSlideClasses(i)}>
              <Image 
                src={slide.src} 
                alt={slide.alt}
                width={600}
                height={400}
                data-ai-hint={slide.hint}
                className={getImageClasses(i)} 
                />
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-4 mt-12">
        <button onClick={() => move(false)} className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-full backdrop-blur-md transition-all border border-white/20 font-semibold uppercase tracking-widest text-xs">
          Prev
        </button>
        <button onClick={() => move(true)} className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-full backdrop-blur-md transition-all border border-white/20 font-semibold uppercase tracking-widest text-xs">
          Next
        </button>
      </div>
    </div>
  );
}
