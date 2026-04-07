import React, { useState, useEffect, useCallback } from "react";
import { MoveRight, MoveLeft, Plus } from "lucide-react";

import hero1 from "../../../assets/images/h2.png";
import hero2 from "../../../assets/images/hero2.jpeg";
import hero3 from "../../../assets/images/h1.png";
import hero4 from "../../../assets/images/hero1.png";

const MainSlider = () => {
  const slides = [
    { title: "URBAN", subtitle: "STREETWEAR", img: hero3, year: "2026" },
    { title: "CORE", subtitle: "CLASSICS", img: hero2, year: "2026" },
    { title: "TECH", subtitle: "FOOTWEAR", img: hero4, year: "2026" },
    { title: "LUXE", subtitle: "PLATFORMS", img: hero1, year: "2026" },
  ];

  const expandedSlides = [slides[slides.length - 1], ...slides, slides[0]];
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const transitionDuration = 600;

  const handleNext = useCallback(() => {
    if (currentIndex >= expandedSlides.length - 1) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  }, [currentIndex, expandedSlides.length]);

  const handlePrev = () => {
    if (currentIndex <= 0) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  useEffect(() => {
    const timer = setInterval(handleNext, 5000);
    return () => clearInterval(timer);
  }, [handleNext]);

  useEffect(() => {
    if (currentIndex === expandedSlides.length - 1) {
      setTimeout(() => { setIsTransitioning(false); setCurrentIndex(1); }, transitionDuration);
    }
    if (currentIndex === 0) {
      setTimeout(() => { setIsTransitioning(false); setCurrentIndex(expandedSlides.length - 2); }, transitionDuration);
    }
  }, [currentIndex, expandedSlides.length]);

  return (
    <div className="relative h-[500px] md:h-[750px]  overflow-hidden font-sans">
      
      {/* Background Slides */}
      <div
        className={`flex h-full ${isTransitioning ? "transition-transform" : ""}`}
        style={{ 
            transform: `translateX(-${currentIndex * 100}%)`,
            transitionDuration: isTransitioning ? `${transitionDuration}ms` : '0ms',
            transitionTimingFunction: 'cubic-bezier(0.7, 0, 0.3, 1)'
        }}
      >
        {expandedSlides.map((slide, index) => (
          <div key={index} className="min-w-full relative h-full">
            <img 
              src={slide.img} 
              className="w-full h-full object-cover   transition-transform duration-[6s] group-hover:scale-110"
              alt=""
            />
            
            {/* Center Content: Big Bold Typography */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
                <span className="text-xs tracking-[0.5em] mb-4 opacity-60">EST. {slide.year}</span>
                <h1 className="text-7xl md:text-[12rem] font-black leading-none tracking-tighter m-0">
                    {slide.title}
                </h1>
                <h2 className="text-4xl md:text-7xl font-outline-2 text-transparent italic tracking-tight -mt-4 md:-mt-8 stroke-white border-white">
                   {slide.subtitle}
                </h2>
                
               <button className="mt-12 group/btn relative overflow-hidden px-14 py-5 transition-all duration-500 backdrop-blur-sm bg-black/10 border border-white/30 hover:bg-white">
                    <span className="relative z-10 flex items-center gap-4 text-white group-hover/btn:text-black font-black tracking-[0.3em] text-[10px] uppercase">
                        Shop Now <MoveRight size={18} />
                    </span>
                </button>
            </div>
          </div>
        ))}
      </div>

      {/* Decorative Border Frame (The "Brutalist" Look) */}
      <div className="absolute inset-0 border-[20px] border-black pointer-events-none z-20 hidden md:block" />

      {/* Side Navigation (Text Based) */}
      <div className="absolute bottom-10 left-10 z-30 flex items-center gap-10 text-white border-l border-white/30 pl-6">
        <button onClick={handlePrev} className="hover:-translate-x-2 transition-transform opacity-60 hover:opacity-100">
            <MoveLeft size={32} strokeWidth={1} />
        </button>
        <div className="text-xs font-mono tracking-tighter uppercase">
            {currentIndex.toString().padStart(2, '0')} / {slides.length.toString().padStart(2, '0')}
        </div>
        <button onClick={handleNext} className="hover:translate-x-2 transition-transform opacity-60 hover:opacity-100">
            <MoveRight size={32} strokeWidth={1} />
        </button>
      </div>

      {/* Bottom Corner Info */}
      <div className="absolute bottom-10 right-10 z-30 hidden md:block">
          <div className="text-white text-right">
              <p className="text-[10px] tracking-widest uppercase opacity-40 mb-1">Status</p>
              <p className="text-xs font-bold tracking-[0.2em]">ALL ITEMS IN STOCK</p>
          </div>
      </div>

      {/* CSS for Outlined Text (Add this to your CSS file or a <style> tag) */}
      <style dangerouslySetInnerHTML={{ __html: `
        .font-outline-2 {
          -webkit-text-stroke: 1px white;
        }
      `}} />
    </div>
  );
};

export default MainSlider;