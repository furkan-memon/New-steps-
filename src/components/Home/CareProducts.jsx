import React, { useState, useEffect, useRef } from "react";
import ProductCard from "./ProductCard";
import {
  ChevronLeft,
  ChevronRight
  
} from "lucide-react";
import prod1 from "../../assets/images/product-image-11.png";
import prod2 from "../../assets/images/product-image-12.png";
import prod3 from "../../assets/images/product-image-13.png";
import prod4 from "../../assets/images/product-image-14.png";
import prod5 from "../../assets/images/product-image-16.png";
import prod6 from "../../assets/images/product-image-17.png";
import prod7 from "../../assets/images/product-image-18.png";
import prod8 from "../../assets/images/product-image-19.png";
import prod9 from "../../assets/images/product-image-20.png";
import prod10 from "../../assets/images/product-image-10.png";
import shape from "../../assets/images/image.png";

const rawProducts = [
  {
    id: 1,
    name: "Nebulizer Ultracare",
    brand: "Healthline",
    category: "Special Offers",
    price: 28.56,
    oldPrice: 31.56,
    discount: "10% OFF",
    rating: 5,
    img: prod1,
  },
  {
    id: 2,
    name: "Facial Moisturizer L3",
    brand: "Glow & Co",
    category: "Moisturizers",
    price: 45.0,
    oldPrice: 55.0,
    discount: "18% OFF",
    rating: 4.5,
    img: prod2,
  },
  {
    id: 3,
    name: "Daily Skin Revive Serum",
    brand: "Revive Pro",
    category: "Sunscreens",
    price: 32.2,
    oldPrice: 40.0,
    discount: "20% OFF",
    rating: 5,
    img: prod3,
  },
  {
    id: 4,
    name: "Nail Polish Pro Kit",
    brand: "Polish Master",
    category: "Lipsticks & Lip Glosses",
    price: 15.99,
    oldPrice: 19.99,
    discount: "25% OFF",
    rating: 4,
    img: prod4,
  },
  {
    id: 5,
    name: "Glow Foundation SPF 20",
    brand: "Fenty Beauty",
    category: "Foundations",
    price: 27.49,
    oldPrice: 30.0,
    discount: "8% OFF",
    rating: 5,
    img: prod5,
  },
  {
    id: 6,
    name: "Lipstick Matte Trio",
    brand: "L’Oréal Paris",
    category: "Lipsticks & Lip Glosses",
    price: 18.0,
    oldPrice: 20.0,
    discount: "10% OFF",
    rating: 5,
    img: prod6,
  },
  {
    id: 7,
    name: "Hyaluronic Acid Serum",
    brand: "The Ordinary",
    category: "Sunscreens",
    price: 22.0,
    oldPrice: 25.0,
    discount: "12% OFF",
    rating: 4.5,
    img: prod7,
  },
  {
    id: 8,
    name: "Velvet Eye Palette",
    brand: "Huda Beauty",
    category: "Eyeshadows",
    price: 35.0,
    oldPrice: 40.0,
    discount: "15% OFF",
    rating: 5,
    img: prod8,
  },
  {
    id: 9,
    name: "Propolis B5 Cream",
    brand: "Revive Pro",
    category: "Moisturizers",
    price: 22.1,
    oldPrice: 28.0,
    discount: "15% OFF",
    rating: 5,
    img: prod9,
  },
  {
    id: 10,
    name: "Blush Duo Pink",
    brand: "L’Oréal Paris",
    category: "Foundations",
    price: 20.0,
    oldPrice: 25.0,
    discount: "20% OFF",
    rating: 4,
    img: prod10,
  },
];


const products = [...rawProducts, ...rawProducts, ...rawProducts];

const TopOfferSection = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      const cardWidth = 300;
      scrollRef.current.scrollLeft = rawProducts.length * cardWidth;
    }
  }, []);

  const handleInfiniteScroll = () => {
    const container = scrollRef.current;
    if (!container) return;
    const { scrollLeft, scrollWidth } = container;
    const singleSetWidth = scrollWidth / 3;

    if (scrollLeft >= singleSetWidth * 2) {
      container.scrollLeft = scrollLeft - singleSetWidth;
    } else if (scrollLeft <= singleSetWidth - container.clientWidth) {
      container.scrollLeft = scrollLeft + singleSetWidth;
    }
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const moveAmount = scrollRef.current.clientWidth / 2;
      const scrollTo =
        direction === "left"
          ? scrollRef.current.scrollLeft - moveAmount
          : scrollRef.current.scrollLeft + moveAmount;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

   return (
    <section className="py-12 max-w-[1400px] mx-auto lg:px-6">
      <div className="hidden lg:flex items-end mb-0"> 
        <div className="bg-white pb-8 pr-12 relative">
          <h2 className="text-3xl font-black text-gray-900">
            Newly Lunch Product
          </h2>
          <p className="text-gray-500 mt-1 flex items-center gap-2">
            Up to 69% discount for limited time{" "}
            <span className="animate-pulse">🔥</span>
          </p>
          
          <div className="inverted-curve"></div>
        </div>

        <div className="flex-1 relative bg-[#A0E2E0] h-20 rounded-tr-[2rem]">
            <img
              src={shape}
              alt="curve shape"
              className="absolute left-[-10px] bottom-0 h-20 w-auto z-10 pointer-events-none"
            />
            <div className="flex justify-end items-center h-full px-10 gap-2">
                <button onClick={() => scroll("left")} className="w-10 h-10 rounded-full bg-white hover:bg-[#00796B] hover:text-white transition-all shadow-sm active:scale-90 flex items-center justify-center border border-gray-100">
                    <ChevronLeft size={20} />
                </button>
                <button onClick={() => scroll("right")} className="w-10 h-10 rounded-full bg-white hover:bg-[#00796B] hover:text-white transition-all shadow-sm active:scale-90 flex items-center justify-center border border-gray-100">
                    <ChevronRight size={20} />
                </button>
            </div>
        </div>
      </div>

      <div className="bg-[#A0E2E0] p-4 md:p-10 rounded-b-[2rem] rounded-tl-[2rem]">
        <div className="flex lg:hidden flex-col items-center justify-center mb-8 gap-2 text-center">
            <h2 className="text-3xl font-black text-gray-900">Newly Lunch Product</h2>
            <p className="text-gray-600">Up to 69% discount for limited time 🔥</p>
        </div>

        <div
          ref={scrollRef}
          onScroll={handleInfiniteScroll}
          className="flex gap-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory select-none"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <ProductCard products={products}/>
        </div>
        <div className="flex justify-end">

       <button className="group bg-white text-[#00796B] mt-2 px-5 py-2.5 rounded-full flex items-center gap-2 text-sm font-bold transition-all shadow-md shadow-[#00796B]/20">
  View All Product
  <span className="bg-[#00796B] text-white rounded-full p-1 transition-transform duration-300 group-hover:rotate-45">
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
      </div>
    </section>
  );
};

export default TopOfferSection;
