import React from "react";
import brand1 from "../../assets/images/brand-1.png";
import brand2 from "../../assets/images/brand-2.png";
import brand3 from "../../assets/images/brand-3.png";
import brand4 from "../../assets/images/brand-4.png";
import brand5 from "../../assets/images/brand-5.png";
import brand6 from "../../assets/images/brand-6.png";

const brands = [
  { name: "Spa & Salon", img: brand1 },
  { name: "Natural Cosmetic", img: brand2 },
  { name: "Beauty Spa", img: brand3 },
  { name: "Beauty Salon", img: brand4 },
  { name: "Beauty Boutique", img: brand5 },
  { name: "Nature Therapy", img: brand6 },
];

const FeaturedBrands = () => {
  return (
    <section className="py-12 md:py-20 border-t border-gray-100 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 md:px-10">
        
       
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 md:gap-12 lg:gap-16 items-center">
          {brands.map((brand, index) => (
            <div 
              key={index} 
              className="flex justify-center items-center group cursor-pointer"
            >
              <img 
                src={brand.img} 
                alt={brand.name} 
                className="h-14  w-auto object-contain 
                          "
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedBrands;