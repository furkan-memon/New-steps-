import React, { useState, useEffect, useCallback } from "react";
import { MoveRight, MoveLeft } from "lucide-react";

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
  const transitionDuration = 800; // Slightly slower for a more "luxurious" feel

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
    const timer = setInterval(handleNext, 6000);
    return () => clearInterval(timer);
  }, [handleNext]);

  useEffect(() => {
    if (currentIndex === expandedSlides.length - 1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(1);
      }, transitionDuration);
    }
    if (currentIndex === 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(expandedSlides.length - 2);
      }, transitionDuration);
    }
  }, [currentIndex, expandedSlides.length]);

  return (
    <div className="relative h-[500px] md:h-[85vh] overflow-hidden font-sans bg-black">
      
      {/* THE SLIDER TRACK */}
      <div
        className={`flex h-full ${isTransitioning ? "transition-transform" : ""}`}
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transitionDuration: isTransitioning ? `${transitionDuration}ms` : "0ms",
          transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)", // Premium Boutique Easing
        }}
      >
        {expandedSlides.map((slide, index) => (
          <div key={index} className="min-w-full relative h-full group">
            
            {/* IMAGE COMPONENT */}
            <img
              src={slide.img}
              className="w-full h-full object-cover object-center scale-100 transition-transform duration-[10s] group-hover:scale-105 will-change-transform"
              alt={slide.title}
              loading="eager"
            />

            {/* OVERLAY: This prevents the 'blur' from looking cheap */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
            <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />

            {/* TEXT CONTENT */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center z-10 px-4">
              <span className="text-[10px] md:text-xs tracking-[0.8em] mb-4 opacity-70 font-bold uppercase">
                Collection {slide.year}
              </span>
              <h1 className="text-6xl md:text-[14rem] font-black leading-none tracking-tighter m-0 select-none animate-reveal">
                {slide.title}
              </h1>
              <h2 className="text-3xl md:text-8xl font-outline-2 text-transparent italic tracking-tight -mt-3 md:-mt-10 stroke-white opacity-90 select-none">
                {slide.subtitle}
              </h2>

              <button className="mt-12 group/btn relative overflow-hidden px-12 py-5 transition-all duration-500 bg-white/5 backdrop-blur-md border border-white/20 hover:bg-white">
                <span className="relative z-10 flex items-center gap-4 text-white group-hover/btn:text-black font-black tracking-[0.4em] text-[10px] uppercase">
                  Explore Now <MoveRight size={16} />
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* LUXE BORDER FRAME */}
      <div className="absolute inset-0 border-[15px] md:border-[30px] border-black pointer-events-none z-20" />

      {/* CONTROLS */}
      <div className="absolute bottom-12 left-12 z-30 flex items-center gap-8 text-white">
        <button onClick={handlePrev} className="hover:-translate-x-2 transition-transform opacity-50 hover:opacity-100">
          <MoveLeft size={28} strokeWidth={1.5} />
        </button>
        <div className="flex items-baseline gap-1 font-black text-xs tracking-widest italic">
          <span className="text-xl">{(currentIndex === 0 ? slides.length : currentIndex > slides.length ? 1 : currentIndex).toString().padStart(2, "0")}</span>
          <span className="opacity-30 text-[10px]">/</span>
          <span className="opacity-30 text-[10px]">{slides.length.toString().padStart(2, "0")}</span>
        </div>
        <button onClick={handleNext} className="hover:translate-x-2 transition-transform opacity-50 hover:opacity-100">
          <MoveRight size={28} strokeWidth={1.5} />
        </button>
      </div>

      {/* STATUS INDICATOR */}
      <div className="absolute bottom-12 right-12 z-30 hidden md:block border-r border-white/20 pr-6">
        <div className="text-white text-right">
          <p className="text-[9px] tracking-[0.4em] uppercase opacity-40 mb-1">Boutique Status</p>
          <p className="text-[10px] font-black tracking-[0.2em] italic">READY TO SHIP</p>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .font-outline-2 {
          -webkit-text-stroke: 1.5px white;
        }
        @keyframes reveal {
          from { opacity: 0; transform: translateY(20px); filter: blur(10px); }
          to { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        .animate-reveal {
          animation: reveal 1.2s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }
      `}} />
    </div>
  );
};

export default MainSlider;