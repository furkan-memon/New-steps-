import React from "react";
import bannerLeft from "../../assets/images/female.jpg"; 
import bannerRight from "../../assets/images/cosmetic-bg.jpg"; 

const DualBanners = () => {
  const data = [
    {
      title: "Unveil Your Natural Glow",
      desc: "Transform your skincare ritual with our exclusive collection for radiant results.",
      btnText: "View All Products",
      bg: "#FFCC99", 
      img: bannerLeft,
      flex: "flex-1"
    },
    {
      title: "Premium Luxury Glow",
      desc: "Upgrade your routine with our premium skincare and beauty essentials.",
      btnText: "Shop Now",
      bg: "#A7F3D0", 
      img: bannerRight,
      flex: "flex-[1.5]"
    }
  ];

  return (
    <section className="py-10 max-w-[1400px] mx-auto px-4 md:px-10">
      <div className="flex flex-col lg:flex-row gap-6">
        {data.map((item, index) => (
          <div 
            key={index} 
            className={`relative h-[400px] md:h-[500px] rounded-[2.5rem] overflow-hidden group cursor-pointer ${item.flex}`}
          >
            <img 
              src={item.img} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              alt={item.title} 
            />

            <div 
              className="absolute bottom-6 left-6 right-6 p-6 md:p-8 rounded-[2rem] shadow-xl transition-all duration-300 group-hover:-translate-y-2"
              style={{ backgroundColor: item.bg }}
            >
              <span className="inline-block bg-[#FFEB3B] text-gray-800 text-[10px] font-black px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
                Enjoy 20% savings
              </span>

              <h3 className="text-2xl md:text-3xl font-medium leading-tight mb-2">
                {item.title}
              </h3>
              
              <p className="text-sm md:text-base text-gray-700 mb-6 font-medium max-w-[400px]">
                {item.desc}
              </p>

              <button className="bg-[#00796B] text-white px-5 py-2.5 rounded-full flex items-center gap-2 text-sm font-bold hover:bg-[#00695C] transition-all shadow-md shadow-[#00796B]/20">
                {item.btnText} 
                <span className="bg-white/20 rounded-full p-1 transition-transform group-hover:rotate-45">
                   <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
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

export default DualBanners;