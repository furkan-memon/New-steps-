import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ActionButton } from "./ActionButton";

import hero3 from "../../../assets/images/h1.png";
import hero2 from "../../../assets/images/hero2.jpeg";
import hero4 from "../../../assets/images/hero1.png";
import hero1 from "../../../assets/images/h2.png";

const MainSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Comfortable Steps for Growing Feet",
      desc: "Fun ● Comfotable ● durableShoes For Kids",
      img: hero3,
      color:'#2E6F4E',
      textc:'#FFF'
    },
    {
      title: "Active Comfort.All Day Play.",
      desc: "The new Junior Sport Collection by niky. Breathable support, effortless style.",
      img: hero2,
      color:'#FFF',
       textc:'#000'
    },
    {
      title: "Playfull Steps Start Here",
      desc: "Introducing the Boby Bear Collection- Comfort, Style, and Fun",
      img: hero4,
       color:'#2E6F4E',
       textc:'#FFF'
    },
    {
      title: "The Platform Perfection Collection.",
      desc: "Everything you need to look and feel your best every single day.",
      img: hero1,
       color:'#FFF',
       textc:'#000'

    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () =>
    setCurrentSlide((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );

  const prevSlide = () =>
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );

  return (
    <div className=" relative group h-screen lg:mt-23 rounded-[3rem]">

      <div
        className="flex transition-transform duration-700  ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="min-w-full p-10 relative flex items-center  md:bg-white px-10 md:px-16"
          >
            <div className="z-10 relative max-w-lg">
              

              <h1 className="text-4xl md:text-5xl text-wrap font-bold leading-[1.1] text-white mb-6">
                {slide.title}
              </h1>

              <p className="text-white font-medium text-lg mb-8 max-w-sm">
                {slide.desc}
              </p>

              <ActionButton text="Shop Now" color={slide.color}  textc = {slide.textc}/>
            </div>
<div className=" object-cover">

      <img
  src={slide.img}
  alt="Hero"
  className="absolute inset-0 w-full object-cover h-screen block  pointer-events-none z-0"
/>
</div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-30 bg-white/40 hover:bg-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all shadow-md text-gray-800"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-30 bg-white/40 hover:bg-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all shadow-md text-gray-800"
      >
        <ChevronRight size={24} />
      </button>

      {/* <ul className="absolute mt-15 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        <ul className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-3">
  {slides.map((_, index) => (
    <li key={index}>
      <button
        onClick={() => setCurrentSlide(index)}
        className={`w-3 h-3 rounded-full transition-all duration-300 ${
          currentSlide === index
            ? "bg-[#00796B] scale-125"
            : "bg-gray-300 hover:bg-gray-400"
        }`}
      />
    </li>
  ))}
  
</ul>

      </ul> */}

    </div>
  );
};

export default MainSlider;