import React from "react";
import bannerLeft from "../../assets/images/benn1.png"; 
import bannerRight from "../../assets/images/benn2.png"; 
import { ArrowUpRight } from "lucide-react";

const DualBanners = () => {
  const data = [
    {
      title: "KIDS ESSENTIALS",
      desc: "Performance meets play. Engineered for the next generation of explorers.",
      btnText: "Discover Collection",
      theme: "dark", // Black background overlay
      img: bannerLeft,
      flex: "flex-1"
    },
    {
      title: "ELIXIR RADIANCE",
      desc: "The science of glow. Professional skincare for a timeless complexion.",
      btnText: "Shop the Ritual",
      theme: "light", // White background overlay
      img: bannerRight,
      flex: "flex-[1.2]"
    }
  ];

  return (
    <section className="py-20 container mx-auto px-6">
      <div className="flex flex-col lg:flex-row gap-4">
        {data.map((item, index) => (
          <div 
            key={index} 
            className={`relative h-[500px] md:h-[650px] overflow-hidden group ${item.flex}`}
          >
            {/* Background Image with subtle zoom */}
            <img 
              src={item.img} 
              className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" 
              alt={item.title} 
            />

            {/* Dark Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />

            {/* Floating Content Card */}
            <div 
              className={`absolute bottom-0 left-0 w-full p-8 md:p-12 flex flex-col items-start transition-all duration-500
                ${item.theme === "dark" ? "bg-black text-white" : "bg-white text-black"}`}
            >
              <span className="text-[10px] tracking-[0.4em] font-bold mb-3 opacity-60 uppercase">
                New Perspective
              </span>

              <h3 className="text-3xl md:text-4xl font-light tracking-tighter leading-none mb-4 uppercase">
                {item.title.split(' ').map((word, i) => (
                  <span key={i} className={i % 2 === 0 ? "font-black" : "font-extralight"}>
                    {word}{" "}
                  </span>
                ))}
              </h3>
              
              <p className={`text-xs md:text-sm mb-8 max-w-[320px] leading-relaxed tracking-wide opacity-80`}>
                {item.desc}
              </p>

              <button className={`group/btn flex items-center gap-3 py-1 border-b-2 transition-all duration-300
                ${item.theme === "dark" ? "border-white hover:text-gray-400" : "border-black hover:text-gray-500"}`}>
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">
                  {item.btnText}
                </span>
                <ArrowUpRight size={16} className="transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DualBanners;