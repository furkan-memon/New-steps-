import React from "react";
import banner1 from "../../assets/images/banner-1.jpg";
import banner2 from "../../assets/images/banner-2.jpg";
import banner3 from "../../assets/images/banner-3.jpg";
const banners = [
  {
    title: "Your Daily Store.",
    desc: "Essentials, deals, and more.",
    offer: "Enjoy 20% savings",
    bg: "#9CEC73",
    img: banner1,
  },
  {
    title: "Everyday Made Simple.",
    desc: "Quick, easy, and effortless.",
    offer: "Enjoy 20% savings",
    bg: "#FDD6F0",
    img: banner2,
  },
  {
    title: "Your Cart. Your Way.",
    desc: "All your favorites, in one click.",
    offer: "Enjoy 20% savings",
    bg: "#9DE6E3",
    img: banner3,
  },
];

const PromoBanners = () => {
  return (
    <section className="py-8 md:py-12 max-w-[1400px] mx-auto px-4 md:px-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {banners.map((banner, index) => (
          <div 
            key={index} 
            className="relative h-[350px] sm:h-[400px] md:h-[450px] rounded-[2rem] overflow-hidden group cursor-pointer"
          >
            <img 
              src={banner.img} 
              alt={banner.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <div 
              className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-4 sm:p-6 rounded-[1.5rem] shadow-lg transition-transform duration-300 group-hover:-translate-y-2"
              style={{ backgroundColor: banner.bg }}
            >
              <span className="inline-block bg-[#FFEB3B] text-gray-800 text-[9px] sm:text-[10px] font-black px-2 sm:px-3 py-1 rounded-full mb-2 sm:mb-3 uppercase tracking-wider">
                {banner.offer}
              </span>

              <h3 className="text-xl sm:text-2xl md:text-[1.6rem] font-medium text-gray-900 leading-[1.1] mb-1">
                {banner.title}
              </h3>
              
              <p className="text-xs sm:text-sm text-gray-700 mb-3 sm:mb-4 font-medium max-w-[200px] sm:max-w-full">
                {banner.desc}
              </p>

              <button className="bg-[#00796B] text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full flex items-center gap-2 text-[11px] sm:text-[12px] font-bold hover:bg-[#00695C] transition-all active:scale-95 shadow-md shadow-[#00796B]/20">
                Shop Now 
                <span className="bg-white/20 rounded-full p-0.5 transition-transform group-hover:translate-x-0.5">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PromoBanners;