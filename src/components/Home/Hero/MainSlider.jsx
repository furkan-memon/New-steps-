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

  const expandedSlides = [slides[slides.length - 1], ...slides, slides[0]];
  
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const transitionDuration = 700;
  const autoplayDelay = 5000; // 5 seconds

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

  // --- NEW: Autoplay Logic ---
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, autoplayDelay);

    // Cleanup timer on unmount or when index changes to prevent overlaps
    return () => clearInterval(timer);
  }, [handleNext]);
  // ---------------------------

  useEffect(() => {
    let timeout;
    if (currentIndex === expandedSlides.length - 1) {
      timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(1);
      }, transitionDuration);
    }

    if (currentIndex === 0) {
      timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(expandedSlides.length - 2);
      }, transitionDuration);
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, expandedSlides.length]);

  return (
    <div className="relative group lg:rounded-2xl h-[300px] sm:h-[400px] md:h-[500px] lg:h-[700px] overflow-hidden">
      
      <div
        className={`flex h-full ${isTransitioning ? "transition-transform ease-in-out" : ""}`}
        style={{ 
            transform: `translateX(-${currentIndex * 100}%)`,
            transitionDuration: isTransitioning ? `${transitionDuration}ms` : '0ms'
        }}
      >
        {expandedSlides.map((slide, index) => (
          <div key={index} className="min-w-full relative flex items-center px-10 md:px-20">
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

      <div className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 z-30 md:flex gap-3">
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