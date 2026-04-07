import React from "react";
import { Star, Check, User } from "lucide-react";

const TrustCust = () => {
  const reviews = [
    {
      name: "Aarav Patel",
      role: "Verified Parent",
      text: "Exceptional comfort for my son. The build quality is far superior to standard retail brands. Highly recommended.",
    },
    {
      name: "Riya Sharma",
      role: "Verified Buyer",
      text: "The monochrome aesthetic is perfect. Durable, stylish, and remarkably easy to clean after a day at the park.",
    },
    {
      name: "Imran Khan",
      role: "Verified Parent",
      text: "Finally, a brand that balances high-fashion design with the durability kids actually need. Excellent value.",
    },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-gray-100 pb-10 gap-6">
          <div className="text-left">
            <span className="text-[10px] tracking-[0.4em] text-gray-400 uppercase font-black block mb-4">
              Real Voices
            </span>
            <h2 className="text-3xl md:text-5xl font-light text-black tracking-tight uppercase">
              Client <span className="font-black italic">Testimonials</span>
            </h2>
          </div>

          <div className="flex flex-col items-start md:items-end gap-2">
            <div className="flex items-center gap-1 text-black">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <span className="text-[10px] tracking-[0.2em] font-bold text-gray-400 uppercase">
              Rated 4.9/5 by 1,200+ Parents
            </span>
          </div>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-l border-t border-gray-100">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="group relative border-r border-b border-gray-100 p-10 transition-all duration-700 bg-white hover:bg-zinc-50"
            >
              {/* Top Row: User + Proper Verified Badge */}
              <div className="flex items-start justify-between mb-12">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 border border-black/5 rounded-full flex items-center justify-center transition-all duration-500 group-hover:bg-black group-hover:text-white group-hover:scale-110">
                    <User size={20} strokeWidth={1} />
                  </div>
                  <div>
                    <h4 className="text-[12px] font-black tracking-widest uppercase text-black">
                      {review.name}
                    </h4>
                    <p className="text-[9px] tracking-[0.2em] text-gray-400 uppercase font-bold mt-1">
                      {review.role}
                    </p>
                  </div>
                </div>

                {/* --- PROPER VERIFIED BADGE --- */}
                <div className="flex items-center gap-2 px-3 py-1.5 border border-black/10 transition-all duration-500 group-hover:border-black group-hover:bg-black group-hover:text-white">
                  <div className="w-4 h-4 rounded-full bg-black flex items-center justify-center text-white transition-all duration-500 group-hover:bg-white group-hover:text-black">
                    <Check size={10} strokeWidth={4} />
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-[0.1em] leading-none">
                    Verified
                  </span>
                </div>
              </div>

              {/* Review Text */}
              <blockquote className="text-base text-gray-500 italic leading-relaxed font-light transition-colors duration-500 group-hover:text-black mb-12">
                "{review.text}"
              </blockquote>
              
              {/* Hover Line Progress */}
              <div className="absolute bottom-0 left-0 h-[4px] w-0 bg-black transition-all duration-700 ease-in-out group-hover:w-full"></div>
              
              {/* Background Index Number */}
              <span className="absolute top-8 right-8 text-6xl font-black text-black/[0.03] select-none pointer-events-none transition-all duration-700 group-hover:text-black/[0.07] group-hover:-translate-y-2">
                0{index + 1}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustCust;