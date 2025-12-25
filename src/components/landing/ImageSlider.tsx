
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const slidesData = [
  { id: 0, src: "https://picsum.photos/seed/slide1/384/216", alt: "Integrations", hint: "app integrations", href:"https://www.flowvahub.com" },
  { id: 1, src: "https://picsum.photos/seed/slide2/384/216", alt: "Search Focus", hint: "app search", href:"https://www.flowvahub.com" },
  { id: 2, src: "https://picsum.photos/seed/slide3/384/216", alt: "Rewards", hint: "rewards screen", href:"https://www.flowvahub.com" },
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
    let classes = "slide absolute w-72 md:w-96 transition-all duration-700 ease-out";
    if (index === currentIndex) {
      classes += ' opacity-100 rotate-y-0 translate-x-0 scale-110 z-20';
    } else if (index < currentIndex) {
      classes += ' opacity-40 rotate-y-60 -translate-x-72 scale-75 z-0 blur-[1px]';
    } else {
      classes += ' opacity-40 rotate-y-neg-60 translate-x-72 scale-75 z-0 blur-[1px]';
    }
    return classes;
  };
  
  const getImageClasses = (index: number) => {
      if (index === currentIndex) {
          return "rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.25)] border-4 border-white";
      }
      return "rounded-3xl shadow-xl border border-gray-200";
  }

  return (
    <div className="bg-slate-50 flex flex-col items-center justify-center py-12 overflow-hidden">
      <div className="perspective-1200 w-full max-w-5xl h-[450px] relative flex flex-col items-center">
        <div className="preserve-3d relative w-full h-full flex items-center justify-center transition-transform duration-700">
          {slidesData.map((slide, i) => (
            <Link href={slide.href} target="_blank" key={slide.id} className={getSlideClasses(i)}>
              <Image 
                src={slide.src} 
                alt={slide.alt}
                width={384}
                height={216}
                data-ai-hint={slide.hint}
                className={getImageClasses(i)} 
                />
            </Link>
          ))}
        </div>
      </div>

      <div className="flex gap-6 mt-8 z-50">
        <button onClick={() => move(false)} className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors font-bold uppercase tracking-tighter">
          Prev
        </button>
        <button onClick={() => move(true)} className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors font-bold uppercase tracking-tighter">
          Next
        </button>
      </div>
    </div>
  );
}
