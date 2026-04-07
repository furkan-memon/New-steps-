import React, { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import ProductCard from "../ProductCard";
import product1 from "../../assets/images/image1.png";
import product2 from "../../assets/images/leds-2.png";
import product3 from "../../assets/images/leds-2.png";
import product4 from "../../assets/images/s-4.png";
import product5 from "../../assets/images/s-3.png";
import { Link } from "react-router-dom";

// 1. Import GSAP
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const rawProducts = [
  { id: 1, name: "Nebulizer Ultracare", price: 28.56, oldPrice: 31.56, discount: "10% OFF", img: product1, brand: 'niky' },
  { id: 2, name: "Facial Moisturizer", price: 45.0, oldPrice: 55.0, discount: "18% OFF", img: product2, img2: product3, brand: 'niky' },
  { id: 3, name: "Skin Revive Serum", price: 32.2, oldPrice: 40.0, discount: "20% OFF", img: product3, img2: product4, brand: 'niky' },
  { id: 4, name: "Nail Polish Kit", price: 15.99, oldPrice: 19.99, discount: "25% OFF", img: product4, img2: product5, brand: 'niky' },
  { id: 5, name: "Propolis B5 Cream", price: 22.1, oldPrice: 28.0, discount: "15% OFF", img: product5, brand: 'niky' },
];

const products = [...rawProducts, ...rawProducts, ...rawProducts];

const TopOfferSection = () => {
  const scrollRef = useRef(null);
  // 2. Add Container Ref
  const containerRef = useRef(null);

  // 3. Register Plugin and Add Animation
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    let ctx = gsap.context(() => {
      gsap.from(".product-card-gsap", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom-=100", 
          toggleActions: "play none none none",
        },
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        stagger: {
          amount: 1, // Distributes the animation time across all visible cards
          from: "start"
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const singleSetWidth = container.scrollWidth / 3;
      container.scrollLeft = singleSetWidth;
    }
  }, []);

  const handleInfiniteScroll = () => {
    const container = scrollRef.current;
    if (!container) return;
    const { scrollLeft, scrollWidth } = container;
    const singleSetWidth = scrollWidth / 3;

    if (scrollLeft >= singleSetWidth * 2) {
      container.scrollLeft = singleSetWidth;
    } else if (scrollLeft <= 0) {
      container.scrollLeft = singleSetWidth;
    }
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const moveAmount = 340; 
      const scrollTo = direction === "left" 
        ? scrollRef.current.scrollLeft - moveAmount 
        : scrollRef.current.scrollLeft + moveAmount;
      
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    // 4. Wrap in containerRef
    <section ref={containerRef} className="py-20 container mx-auto px-6 overflow-hidden">
      {/* Header Section */}
      <div className="flex flex-row items-end justify-between mb-12 border-b border-gray-100 pb-6">
        <div>
          <span className="text-[10px] tracking-[0.4em] text-gray-400 uppercase font-bold text-left block">Top Performance</span>
          <h2 className="text-3xl md:text-4xl font-light text-black tracking-tight mt-2 uppercase text-left">
            Best <span className="font-black italic">Sellers</span>
          </h2>
        </div>
        
        <Link to="/collection">
          <button className="group flex items-center gap-3 text-[11px] font-bold tracking-[0.2em] uppercase border-b-2 border-black pb-1 hover:text-gray-400 transition-all">
            View All
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </Link>
      </div>

      {/* Carousel Section */}
      <div className="relative group/carousel">
        <button
          onClick={() => scroll("left")}
          className="absolute -left-4 top-[40%] -translate-y-1/2 bg-black text-white w-12 h-12 rounded-full flex items-center justify-center z-30 shadow-2xl opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 hover:scale-110 active:scale-95"
        >
          <ChevronLeft size={20} />
        </button>

        <div
          ref={scrollRef}
          onScroll={handleInfiniteScroll}
          className="flex gap-8 overflow-x-auto py-4 scrollbar-hide snap-x snap-mandatory select-none no-scrollbar"
        >
          {products.map((item, index) => (
            // 5. Ensure this card has the class 'product-card-gsap' inside its definition
            <ProductCard key={`${item.id}-${index}`} product={item} index={index} />
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className="absolute -right-4 top-[40%] -translate-y-1/2 bg-black text-white w-12 h-12 rounded-full flex items-center justify-center z-30 shadow-2xl opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 hover:scale-110 active:scale-95"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Aesthetic Loading Indicator */}
      <div className="mt-8 flex justify-center">
        <div className="h-[1px] w-48 bg-gray-100 relative overflow-hidden">
          <div className="absolute top-0 h-full bg-black w-1/4 animate-[shimmer_2s_infinite_linear]"></div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }
      `}} />
    </section>
  );
};

export default TopOfferSection;