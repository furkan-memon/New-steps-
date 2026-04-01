import React, { useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import cat1 from "../../assets/images/promo-bg-1.jpg";
import cat2 from "../../assets/images/promo-bg-2.jpg";
import cat3 from "../../assets/images/promo-bg-3.jpg";
import cat4 from "../../assets/images/promo-bg-4.jpg";

const rawCategories = [
  { title: "Hydrate & Shine", count: "178 Products", img: cat1, color: "bg-[#6BAED6]" },
  { title: "Gentle Face Essentials", count: "320 Products", img: cat2, color: "bg-[#F2D86C]" },
  { title: "Where Glow Meets Care", count: "210 Products", img: cat3, color: "bg-[#7A96D8]" },
  { title: "Your Daily Skin Ritual", count: "122 Products", img: cat4, color: "bg-[#5CC3A6]" },
];

const categories = [...rawCategories, ...rawCategories, ...rawCategories];

const CategoryFavorites = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      const { scrollWidth } = scrollRef.current;
      scrollRef.current.scrollLeft = scrollWidth / 7;
    }
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
      const moveAmount = clientWidth / 2;
      const singleSetWidth = scrollWidth / 7;

      let scrollTo = direction === "left" ? scrollLeft - moveAmount : scrollLeft + moveAmount;

      if (scrollTo <= 0) {
        scrollRef.current.scrollLeft = singleSetWidth;
        scrollTo = singleSetWidth - moveAmount;
      } else if (scrollTo + clientWidth >= scrollWidth) {
        scrollRef.current.scrollLeft = singleSetWidth;
        scrollTo = singleSetWidth + moveAmount;
      }

      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="max-w-[1400px] mx-auto py-16 px-6">
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-3xl font-medium text-gray-900">Category Favorites</h2>

        <div className="flex gap-3">
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

      <div
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4 select-none"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {categories.map((cat, index) => (
          <div
            key={index}
            className="flex-none w-[280px] md:w-[320px] rounded-[1rem] overflow-hidden group cursor-pointer shadow-sm "
          >
            <div className="h-[350px] overflow-hidden">
              <img
                src={cat.img}
                alt={cat.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />
            </div>

            <div className={`${cat.color} py-8 px-4 text-center`}>
              <h3 className="text-xl font-medium text-gray-900 leading-tight">
                {cat.title}
              </h3>
              <p className="text-sm mt-2 text-gray-800 font-medium">
                {cat.count}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryFavorites;