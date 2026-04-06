import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "./ProductCard";
import product1 from "../../assets/images/image1.png";
import product2 from "../../assets/images/product-image-2.png";
import product3 from "../../assets/images/product-image-3.png";
import product4 from "../../assets/images/product-image-4.png";
import product5 from "../../assets/images/product-image-5.png";
import { Link } from "react-router-dom";
const rawProducts = [
  {
    id: 1,
    name: "Nebulizer Ultracare",
    price: 28.56,
    oldPrice: 31.56,
    discount: "10% OFF",
    sold: 4,
    available: 200,
    img: product1,
    brand: "niky",
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
    img2: product3,

    brand: "niky",
  },
  {
    id: 3,
    name: "Skin Revive Serum",
    price: 32.2,
    oldPrice: 40.0,
    discount: "20% OFF",
    sold: 85,
    available: 200,
    img: product3,
    img2: product4,

    brand: "niky",
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
    img2: product5,
    brand: "niky",
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
    brand: "niky",
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
    <section className="py-12 container mx-auto  px-6 ">
      <div className="flex  md:flex-row md:items-end  justify-between mb-8 gap-4">
          <h2 className="md:text-3xl text-2xl font-medium  md:font-semibold text-black">
            Fresh Select
          </h2>
          <Link to="./collection">
       <button className="group bg-black text-white mt-2 px-3 py-2 md:px-5 md:py-2.5 rounded-xl flex items-center gap-2 text-[15px] md:text-sm font-bold transition-all shadow-md shadow-[#00796B]/20">
           
              View All
              <span className="bg-white text-black rounded-full p-1 transition-transform duration-300 group-hover:rotate-45">
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
          </Link>
      </div>

      <div className="relative ">
        <button
          onClick={() => scroll("right")}
          className="absolute -right-5 top-1/2  -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10"
        >
          <ChevronRight size={25} />
        </button>
        <div
          ref={scrollRef}
          onScroll={handleInfiniteScroll}
          className="flex gap-5  overflow-x-auto py-2 scrollbar-hide snap-x snap-mandatory select-none"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
         <ProductCard products={products} showButton={false} />
        </div>
        <button
          onClick={() => scroll("left")}
          className="absolute -left-5 top-1/2   -translate-y-1/2 bg-white  text-black shadow-md rounded-full p-2 z-10"
        >
          <ChevronLeft size={25} />
        </button>
      </div>
      <div className="re"></div>
      <div className="flex justify-end mt-4"></div>
    </section>
  );
};

export default TopOfferSection;
