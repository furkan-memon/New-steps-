import React, { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import hero1 from "../../../assets/images/h2.png";
import hero2 from "../../../assets/images/hero2.jpeg";
import hero3 from "../../../assets/images/h1.png";
import hero4 from "../../../assets/images/hero1.png";

const MainSlider = () => {
const slides = [
  {
    title: "Comfortable Steps for Growing Feet",
    desc: "Fun ● Comfortable ● Durable",
    img: hero3,
    color: "#37B34A",   // green matches nature image 🌿
    textc: "#FFFFFF"
  },
  {
    title: "Active Comfort. All Day Play.",
    desc: "The new Junior Sport Collection.",
    img: hero2,
    color: "#0F3558",   // dark blue for contrast on light shoe
    textc: "#FFFFFF"
  },
  {
    title: "Playful Steps Start Here",
    desc: "Introducing the Baby Bear Collection.",
    img: hero4,
    color: "#2FA4D6",   // fresh sky blue works with warm bg
    textc: "#FFFFFF"
  },
  {
    title: "The Platform Perfection Collection.",
    desc: "Look and feel your best every day.",
    img: hero1,
    color: "#0F3558",   // premium dark tone
    textc: "#FFFFFF"
  },
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
    <div className="relative  group    h-[300px] sm:h-[400px] md:h-[500px] lg:h-[700px] overflow-hidden">
      
      <div
        className={`flex h-full ${isTransitioning ? "transition-transform ease-in-out" : ""}`}
        style={{ 
            transform: `translateX(-${currentIndex * 100}%)`,
            transitionDuration: isTransitioning ? `${transitionDuration}ms` : '0ms'
        }}
      >
        {expandedSlides.map((slide, index) => (
          <div key={index} className="min-w-full  relative flex items-center px-10 md:px-20">
            <div className="z-10 relative   text-start   max-w-lg">
              <h1 className="text-3xl md:text-6xl font-bold text-white mb-6 leading-tight">
                {slide.title}
              </h1>
              <p className="text-white/90 md:text-lg mb-8 max-w-sm">
                {slide.desc}
              </p>
            <button  className={`group/button active:scale-95  text-black bg-white mt-2 px-5 py-2.5 rounded-2xl flex items-center gap-2 text-sm font-bold transition-all shadow-md shadow-[#00796B]/20`}>
  Shop Now
  <span className="bg-black text-white rounded-full p-1 transition-transform duration-300  group-hover/button:rotate-45">
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="7" y1="17" x2="17" y2="7"></line>
      <polyline points="7 7 17 7 17 17"></polyline>
    </svg>
  </span>
</button>
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

      <button onClick={handlePrev} className="absolute text-white md:text-black left-6 top-1/2 -translate-y-1/2 z-30 md:bg-white/30 md:hover:bg-white p-4 rounded-full opacity-0 group-hover:opacity-100 transition-all">
        <ChevronLeft size={24} />
      </button>

      <button onClick={handleNext} className="absolute text-white md:text-black right-6 top-1/2 -translate-y-1/2 z-30 md:bg-white/30 md:hover:bg-white p-4 rounded-full opacity-0 group-hover:opacity-100 transition-all">
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