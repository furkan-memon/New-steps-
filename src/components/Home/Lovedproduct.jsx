import React, { useState, useEffect, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight
  
} from "lucide-react";
import ProductCard from "./productCard";
import product1 from "../../assets/images/product-image-1.png";
import product2 from "../../assets/images/product-image-2.png";
import product3 from "../../assets/images/product-image-3.png";
import product4 from "../../assets/images/product-image-4.png";
import product5 from "../../assets/images/product-image-5.png";
const rawProducts = [
  {
    id: 1,
    name: "Nebulizer Ultracare",
    price: 28.56,
    oldPrice: 31.56,
    discount: "10% OFF",
    sold: 4,
    available: 200,
    img:product1 ,
  },
  {
    id: 2,
    name: "Facial Moisturizer",
    price: 45.0,
    oldPrice: 55.0,
    discount: "18% OFF",
    sold: 12,
    available: 150,
    img: product2,
  },
  {
    id: 3,
    name: "Skin Revive Serum",
    price: 32.2,
    oldPrice: 40.0,
    discount: "20% OFF",
    sold: 85,
    available: 200,
    img:product3,
  },
  {
    id: 4,
    name: "Nail Polish Kit",
    price: 15.99,
    oldPrice: 19.99,
    discount: "25% OFF",
    sold: 140,
    available: 300,
    img: product4,
  },
  {
    id: 5,
    name: "Propolis B5 Cream",
    price: 22.1,
    oldPrice: 28.0,
    discount: "15% OFF",
    sold: 60,
    available: 100,
    img: product5,
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
    <section className="py-12 max-w-[1400px] mx-auto px-3 md:px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-center items-center md:justify-between mb-8 gap-4">
        <div>
          <h2 className="md:text-3xl text-2xl font-medium  md:font-bold text-gray-900">
            Most Loved Product
          </h2>
        
        </div>

          <div className=" hidden gap-2 hidden md:flex">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center bg-white hover:bg-[#00796B] hover:text-white transition-all shadow-sm active:scale-90"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center bg-white hover:bg-[#00796B] hover:text-white transition-all shadow-sm active:scale-90"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
     

      <div className="p-4 md:p-10">
      

        <div
          ref={scrollRef}
          onScroll={handleInfiniteScroll}
          className="flex gap-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory select-none"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <ProductCard products={products}/>
         
        </div>
      </div>
    </section>
  );
};

export default TopOfferSection;
