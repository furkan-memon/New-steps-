import React, { useEffect, useRef,useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "./productCard";

import product6 from "../../assets/images/product-image-6.png";
import product7 from "../../assets/images/product-image-7 (1).png";
import product8 from "../../assets/images/product-image-8.png";
import product9 from "../../assets/images/product-image-9.png";
import product10 from "../../assets/images/product-image-10.png";
import shape from "../../assets/images/image.png";
const rawProducts = [
  { id: 1, name: "Nebulizer Ultracare", price: 28.56, oldPrice: 31.56, discount: "10% OFF", sold: 4, available: 200, img: product6 },
  { id: 2, name: "Facial Moisturizer", price: 45.0, oldPrice: 55.0, discount: "18% OFF", sold: 12, available: 150, img: product7 },
  { id: 3, name: "Skin Revive Serum", price: 32.2, oldPrice: 40.0, discount: "20% OFF", sold: 85, available: 200, img: product8 },
  { id: 4, name: "Nail Polish Kit", price: 15.99, oldPrice: 19.99, discount: "25% OFF", sold: 140, available: 300, img: product9 },
  { id: 5, name: "Propolis B5 Cream", price: 22.1, oldPrice: 28.0, discount: "15% OFF", sold: 60, available: 100, img: product10 },
];

const products = [...rawProducts, ...rawProducts, ...rawProducts];

const TopOfferSection = () => {
  const scrollRef = useRef(null);
 const targetDate = new Date("2027-01-01T00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: "000",
    hours: "00",
    minutes: "00",
    seconds: "00"
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(timer);
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)).toString().padStart(3, '0'),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24).toString().padStart(2, '0'),
          minutes: Math.floor((difference / 1000 / 60) % 60).toString().padStart(2, '0'),
          seconds: Math.floor((difference / 1000) % 60).toString().padStart(2, '0')
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);
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
    <section className="py-12 mt-100 max-w-[1400px] mx-auto lg:px-6">

      <div className="hidden lg:flex items-end justify-between ">

        <div className="mb-5 z-11">
          <h2 className="text-3xl font-semibold text-gray-900">
            Today's Top Offer
          </h2>
          <p className="text-gray-500 mt-1 flex items-center gap-2">
            Up to 69% discount for limited time
            <span className="animate-pulse">🔥</span>
          </p>
        </div>

        <div className="flex items-center flex-1 relative  justify-end gap-2.5 bg-[#FCE4EC] h-20 px-8 rounded-tr-[2rem]  ">
<img
  src={shape}
  alt="curve shape"
  className="absolute left-[-10px] bottom-0 h-20 w-auto z-10 pointer-events-none"
/>
          <div className="flex justify-center">
      <div className="bg-[#B2FF59]/20 px-4 py-2 rounded-full border border-[#B2FF59] flex items-center gap-2 font-bold text-gray-800">
        <span className="text-sm text-gray-500 font-medium">
          Ends in:
        </span>
        <span className="tabular-nums tracking-wider">
          {timeLeft.days} : {timeLeft.hours} : {timeLeft.minutes} : {timeLeft.seconds}
        </span>
      </div>
    </div>

          <div className="flex gap-2">
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
      </div>

      <div className="bg-[#FCE4EC] p-4 md:p-10 rounded-[2rem] rounded-tr-none">

        <div className="lg:hidden text-center mb-8 space-y-4">

          <div>
            <h2 className="text-3xl font-semibold text-gray-900">
              Today's Top Offer
            </h2>
            <p className="text-gray-500 mt-1 flex justify-center items-center gap-2">
              Up to 69% discount for limited time
              <span className="animate-pulse">🔥</span>
            </p>
          </div>

          <div className="flex justify-center">
            <div className="bg-[#B2FF59]/20 px-4 py-2 rounded-full border border-[#B2FF59] flex items-center gap-2 font-bold text-gray-800">
              <span className="text-sm text-gray-500 font-medium">
                Ends in:
              </span>
              <span className="tabular-nums tracking-wider">
                289 : 00 : 50 : 52
              </span>
            </div>
          </div>
        </div>

        <div
          ref={scrollRef}
          onScroll={handleInfiniteScroll}
          className="flex gap-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory select-none"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <ProductCard products={products} />
        </div>

      </div>
    </section>
  );
};

export default TopOfferSection;