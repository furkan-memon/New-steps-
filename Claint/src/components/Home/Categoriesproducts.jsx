import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import ProductCard from "../ProductCard";
import prod1 from "../../assets/images/led-2.png";
import prod2 from "../../assets/images/led-3.png";
import prod3 from "../../assets/images/led-4.png";
import prod4 from "../../assets/images/led-1.png";
import prod5 from "../../assets/images/led-5.png";
import prod6 from "../../assets/images/led-6.png";
import prod7 from "../../assets/images/led-7.png";
import prod8 from "../../assets/images/leds-1.png";
import prod9 from "../../assets/images/leds-2.png";
import prod10 from "../../assets/images/led-8.png";

const categories = [
  "All Products",
  "LED Sneakers",
  "Casual Sneakers",
  "Slip-On",
  "Sandals",
];
const rawProducts = [
  {
    id: 1,
    name: "Nebulizer Ultracare",
    brand: "Healthline",
    category: "LED Sneakers",
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
    category: "LED Sneakers",
    price: 45,
    oldPrice: 55,
    discount: "18% OFF",
    rating: 4.5,
    img: prod2,
  },
  {
    id: 3,
    name: "Daily Skin Revive Serum",
    brand: "Revive Pro",
    category: "LED Sneakers",
    price: 32.2,
    oldPrice: 40,
    discount: "20% OFF",
    rating: 5,
    img: prod3,
  },
  {
    id: 4,
    name: "Nail Polish Pro Kit",
    brand: "",
    category: "Casual Sneakers",
    price: 15.99,
    oldPrice: 19.99,
    discount: "25% OFF",
    rating: 4,
    img: prod4,
  },
  {
    id: 5,
    name: "Glow Foundation SPF 20",
    brand: "",
    category: "Casual Sneakers",
    price: 27.49,
    oldPrice: 30,
    discount: "8% OFF",
    rating: 5,
    img: prod5,
  },
  {
    id: 6,
    name: "Lipstick Matte Trio",
    brand: "L’Oréal Paris",
    category: "Slip-On",
    price: 18,
    oldPrice: 20,
    discount: "10% OFF",
    rating: 5,
    img: prod6,
  },
  {
    id: 7,
    name: "Hyaluronic Acid Serum",
    brand: "The Ordinary",
    category: "Slip-On",
    price: 22,
    oldPrice: 25,
    discount: "12% OFF",
    rating: 4.5,
    img: prod7,
  },
  {
    id: 8,
    name: "Velvet Eye Palette",
    brand: "Huda Beauty",
    category:   "Sandals",
    price: 35,
    oldPrice: 40,
    discount: "15% OFF",
    rating: 5,
    img: prod8,
  },
  {
    id: 9,
    name: "Propolis B5 Cream",
    brand: "Revive Pro",
    category:   "Sandals",
    price: 22.1,
    oldPrice: 28,
    discount: "15% OFF",
    rating: 5,
    img: prod9,
  },
  {
    id: 10,
    name: "Blush Duo Pink",
    brand: "L’Oréal Paris",
    category:   "Sandals",
    price: 20,
    oldPrice: 25,
    discount: "20% OFF",
    rating: 4,
    img: prod10,
  },
];
const CategoriesProduct = () => {
  const [activeTab, setActiveTab] = useState("All Products");
  const scrollRef = useRef(null);

  const filteredProducts =
    activeTab === "All Products"
      ? rawProducts
      : rawProducts.filter((p) => p.category === activeTab);

  const scroll = (dir) => {
    const container = scrollRef.current;
    if (!container) return;
    const move = 340; 
    container.scrollBy({
      left: dir === "left" ? -move : move,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-24 container mx-auto px-6 overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-gray-100 pb-8">
        <div className="text-left">
          <span className="text-[10px] tracking-[0.4em] text-gray-400 uppercase font-bold">Discover</span>
          <h2 className="text-4xl font-light text-black tracking-tight mt-2 uppercase">
            Shop By <span className="font-black italic">Category</span>
          </h2>
        </div>

        <nav className="flex overflow-x-auto no-scrollbar gap-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`relative pb-2 text-[11px] font-bold tracking-[0.2em] uppercase transition-all whitespace-nowrap
              ${
                activeTab === cat
                  ? "text-black"
                  : "text-gray-400 hover:text-black"
              }`}
            >
              {cat}
              {activeTab === cat && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-black animate-in fade-in slide-in-from-left-2 duration-300"></span>
              )}
            </button>
          ))}
        </nav>
      </div>

      <div className="relative group/carousel">
        <button
          onClick={() => scroll("left")}
          className="absolute -left-4 top-[40%] -translate-y-1/2 bg-black text-white w-12 h-12 rounded-full flex items-center justify-center z-20 shadow-2xl opacity-0 group-hover/carousel:opacity-100 transition-all hover:scale-110 active:scale-95"
        >
          <ChevronLeft size={20} />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto scroll-smooth pb-10 no-scrollbar snap-x snap-mandatory"
        >
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="w-full py-32 text-center">
              <p className="text-xs tracking-[0.3em] uppercase text-gray-400">
                No items available in this selection.
              </p>
            </div>
          )}
        </div>

        <button
          onClick={() => scroll("right")}
          className="absolute -right-4 top-[40%] -translate-y-1/2 bg-black text-white w-12 h-12 rounded-full flex items-center justify-center z-20 shadow-2xl opacity-0 group-hover/carousel:opacity-100 transition-all hover:scale-110 active:scale-95"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="mt-4 flex justify-start">
         <button className="flex items-center gap-2 text-[10px] font-black tracking-[0.3em] uppercase group">
            Explore All Products 
            <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
         </button>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </section>
  );
};

export default CategoriesProduct;




