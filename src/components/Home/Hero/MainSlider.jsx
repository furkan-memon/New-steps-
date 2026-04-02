import React, { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ActionButton } from "./ActionButton";

import hero1 from "../../../assets/images/h2.png";
import hero2 from "../../../assets/images/hero2.jpeg";
import hero3 from "../../../assets/images/h1.png";
import hero4 from "../../../assets/images/hero1.png";

const MainSlider = () => {
  const slides = [
    { title: "Comfortable Steps for Growing Feet", desc: "Fun ● Comfortable ● Durable", img: hero3, color: '#2E6F4E', textc: '#FFF' },
    { title: "Active Comfort. All Day Play.", desc: "The new Junior Sport Collection.", img: hero2, color: '#FFF', textc: '#000' },
    { title: "Playfull Steps Start Here", desc: "Introducing the Boby Bear Collection.", img: hero4, color: '#2E6F4E', textc: '#FFF' },
    { title: "The Platform Perfection Collection.", desc: "Look and feel your best every day.", img: hero1, color: '#FFF', textc: '#000' },
  ];

  // 1. Setup expanded slides [Last, 1, 2, 3, 4, First]
  const expandedSlides = [slides[slides.length - 1], ...slides, slides[0]];
  
  const [currentIndex, setCurrentIndex] = useState(1); // Start at real first slide
  const [isTransitioning, setIsTransitioning] = useState(true);
  const transitionDuration = 700; // ms

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

  // 2. The "Magic" Infinite Jump
  useEffect(() => {
    let timeout;
    // If we reached the fake last slide (the clone of slide 1)
    if (currentIndex === expandedSlides.length - 1) {
      timeout = setTimeout(() => {
        setIsTransitioning(false); // Disable animation
        setCurrentIndex(1); // Jump to real slide 1
      }, transitionDuration);
    }

    // If we reached the fake first slide (the clone of slide 4)
    if (currentIndex === 0) {
      timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(expandedSlides.length - 2); // Jump to real slide 4
      }, transitionDuration);
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, expandedSlides.length]);

  return (
    <div className="relative group lg:rounded-2xl  h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden  ">
      
      {/* Slider Container */}
      <div
        className={`flex h-full group${isTransitioning ? "transition-transform ease-in-out" : ""}`}
        style={{ 
            transform: `translateX(-${currentIndex * 100}%)`,
            transitionDuration: isTransitioning ? `${transitionDuration}ms` : '0ms'
        }}
      >
        {expandedSlides.map((slide, index) => (
          <div key={index} className="min-w-full  relative flex items-center px-10 md:px-20">
            
            {/* Content */}
            <div className="z-10 relative max-w-lg">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                {slide.title}
              </h1>
              <p className="text-white/90 text-lg mb-8 max-w-sm">
                {slide.desc}
              </p>
              <ActionButton text="Shop Now" color={slide.color} textc={slide.textc} />
            </div>

          <div className="absolute inset-0 z-0">
  <img 
    src={slide.img} 
    alt="Hero" 
    className="w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-black/30 z-10" />
</div>
          </div>
        ))}
      </div>

      <button onClick={handlePrev} className="absolute left-6 top-1/2 -translate-y-1/2 z-30 bg-white/30 hover:bg-white p-4 rounded-full opacity-0 group-hover:opacity-100 transition-all">
        <ChevronLeft size={24} />
      </button>

      <button onClick={handleNext} className="absolute right-6 top-1/2 -translate-y-1/2 z-30 bg-white/30 hover:bg-white p-4 rounded-full opacity-0 group-hover:opacity-100 transition-all">
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, i) => {
          const isActive = (currentIndex === i + 1) || 
                           (currentIndex === 0 && i === slides.length - 1) ||
                           (currentIndex === expandedSlides.length - 1 && i === 0);
          return (
            <div 
              key={i} 
              className={`h-2 rounded-full transition-all duration-300 ${isActive ? "w-8 bg-white" : "w-2 bg-white/50"}`} 
            />
          );
        })}
      </div>
    </div>
  );
};

export default MainSlider;