import React from "react";
import { Check } from "lucide-react";
import firtcry from "/images/firstcry.png";
import ajio from "/images/ajio.png";

const PlatformTrust = () => {
  const platforms = [
    {
      name: "FirstCry",
      desc: "Authorized retailer for our complete premium kids' collection.",
      logo: firtcry,
    },
    {
      name: "Ajio",
      desc: "Find New Steps featured in the curated Ajio Luxe & Kids segments.",
      logo: ajio,
    },
  ];

  return (
    <section className="py-24 bg-white border-y border-gray-100">
      <div className="container mx-auto px-6">

        {/* --- Section Header --- */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-gray-100 pb-10 gap-6">
          <div className="text-left">
            <span className="text-[10px] tracking-[0.4em] text-gray-400 uppercase font-black block mb-4">
              Our Partners
            </span>
            <h2 className="text-3xl md:text-5xl font-light text-black tracking-tight uppercase">
              Official <span className="font-black italic">Marketplaces</span>
            </h2>
          </div>

          <p className="text-[11px] tracking-[0.1em] text-gray-400 uppercase font-medium max-w-[280px] text-left md:text-right leading-relaxed">
            Shop New Steps through our globally recognized and trusted retail partners.
          </p>
        </div>

        {/* --- Grid Layout --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-l border-t border-gray-100">
          {platforms.map((item, index) => (
            <a
              href="/"
              key={index}
              className="group relative block p-10 md:p-14 border-r border-b border-gray-100 bg-white transition-all duration-700 hover:bg-zinc-50"
            >
              <div className="flex items-center gap-8 mb-8">
                {/* Logo Container */}
                <div className="w-20 h-20 bg-white border border-gray-100 flex items-center justify-center p-3 transition-all duration-500 group-hover:border-black group-hover:scale-110 shadow-sm">
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>

                <div className="space-y-2">
                  <h4 className="text-[14px] font-black tracking-[0.1em] text-black uppercase">
                    {item.name}
                  </h4>

                  {/* Proper Verified Badge */}
                  <div className="flex items-center gap-2 px-2.5 py-1 border border-black/10 w-fit transition-all duration-500 group-hover:bg-black group-hover:text-white group-hover:border-black">
                    <div className="w-3.5 h-3.5 rounded-full bg-black flex items-center justify-center text-white transition-all duration-500 group-hover:bg-white group-hover:text-black">
                      <Check size={8} strokeWidth={4} />
                    </div>
                    <span className="text-[8px] font-black uppercase tracking-widest leading-none">
                      Authorized
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-500 font-light leading-relaxed max-w-sm transition-colors duration-500 group-hover:text-black">
                {item.desc}
              </p>

              {/* Interaction Line */}
              <div className="absolute bottom-0 left-0 h-[4px] w-0 bg-black transition-all duration-700 ease-in-out group-hover:w-full"></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformTrust;