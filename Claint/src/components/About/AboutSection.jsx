import React from "react";
import largeImg from "../../assets/images/aboutimg.png";
import img1 from "../../assets/images/abtimg1.png";
import img2 from "../../assets/images/abt.png";

import { Link } from "react-router-dom";

export default function AboutSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6">
        
        <div className="flex items-center text-[10px] tracking-[0.3em] uppercase font-bold text-gray-400 mb-12">
          <Link to="/" className="hover:text-black transition-colors">
            Home
          </Link>
          <span className="mx-4 text-gray-300">/</span>
          <span className="text-black">Our Story</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          <div className="flex-1">
            <header className="mb-12">
              <span className="text-[10px] tracking-[0.4em] text-gray-400 uppercase font-black block mb-4">
                Since 2021
              </span>
              <h1 className="text-4xl md:text-6xl font-light text-black tracking-tight leading-[1.1] uppercase">
                Comfort & Style for <br />
                <span className="font-black italic">Every Little Step</span>
              </h1>
            </header>

            <div className="grid md:grid-cols-2 gap-12 border-t border-gray-100 pt-12">
              <div>
                <h4 className="text-[12px] font-black tracking-[0.2em] uppercase text-black mb-4">
                  Our Mission
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed font-light">
                  At New Steps, we provide high-quality, comfortable, and stylish footwear for kids. 
                  Every pair is designed with care to support growing feet while ensuring durability 
                  and everyday comfort. We use reliable materials to deliver products that parents 
                  trust and kids love.
                </p>
              </div>

              <div>
                <h4 className="text-[12px] font-black tracking-[0.2em] uppercase text-black mb-4">
                  Our Vision
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed font-light">
                  To become India’s most trusted kids' footwear brand known for safety and modern design. 
                  We aim to make every step joyful and confident for children while continuously 
                  evolving our designs to serve families with quality solutions.
                </p>
              </div>
            </div>

            <div className="mt-16 border border-black p-10 flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="text-center">
                <h3 className="text-4xl font-black text-black">5+</h3>
                <p className="text-[10px] tracking-widest uppercase text-gray-400 mt-2 font-bold">Years Experience</p>
              </div>
              <div className="w-px h-12 bg-gray-200 hidden md:block"></div>
              <div className="text-center">
                <h3 className="text-4xl font-black text-black">10K+</h3>
                <p className="text-[10px] tracking-widest uppercase text-gray-400 mt-2 font-bold">Happy Families</p>
              </div>
              <div className="w-px h-12 bg-gray-200 hidden md:block"></div>
              <div className="text-center">
                <h3 className="text-4xl font-black text-black">98%</h3>
                <p className="text-[10px] tracking-widest uppercase text-gray-400 mt-2 font-bold">Satisfaction</p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[40%] flex flex-col gap-6">
            <div className="relative group overflow-hidden">
              <img
                src={largeImg}
                alt="Main story"
                className="w-full h-[450px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 border-[15px] border-white/10 pointer-events-none"></div>
            </div>

            <div className="flex gap-6">
              <div className="flex-1 overflow-hidden">
                <img
                  src={img1}
                  alt="Detail 1"
                  className="w-full h-[250px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="flex-1 overflow-hidden">
                <img
                  src={img2}
                  alt="Detail 2"
                  className="w-full h-[250px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}