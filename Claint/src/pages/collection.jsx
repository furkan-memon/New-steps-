import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { ChevronDown, SlidersHorizontal, X } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Kids Blue Casual Sneakers",
    price: 1299,
    oldPrice: 1999,
    brand: "NEW STEPS",
    img: "/images/p1.jpg",
    img2: "/images/p1-2.jpg",
    discount: "30% Off",
  },
  {
    id: 2,
    name: "Kids Light-Up Sport Shoes",
    price: 1499,
    oldPrice: 2299,
    brand: "NEW STEPS",
    img: "/images/p2.jpg",
    img2: "/images/p2-2.jpg",
    discount: "35% Off",
  },
  {
    id: 3,
    name: "Comfort Strap School Shoes",
    price: 999,
    oldPrice: 1499,
    brand: "NEW STEPS",
    img: "/images/p3.jpg",
    img2: "/images/p3-2.jpg",
    discount: "25% Off",
  },
  {
    id: 4,
    name: "Kids High Top Sneakers",
    price: 1399,
    oldPrice: 1999,
    brand: "NEW STEPS",
    img: "/images/p4.jpg",
    img2: "/images/p4-2.jpg",
    discount: "30% Off",
  },
  {
    id: 5,
    name: "Boys Running Sports Shoes",
    price: 1199,
    oldPrice: 1799,
    brand: "NEW STEPS",
    img: "/images/p5.jpg",
    img2: "/images/p5-2.jpg",
    discount: "28% Off",
  },
  {
    id: 6,
    name: "Girls Stylish Casual Shoes",
    price: 1099,
    oldPrice: 1699,
    brand: "NEW STEPS",
    img: "/images/p6.jpg",
    img2: "/images/p6-2.jpg",
    discount: "25% Off",
  },
  {
    id: 7,
    name: "Kids Velcro Comfort Shoes",
    price: 899,
    oldPrice: 1299,
    brand: "NEW STEPS",
    img: "/images/p7.jpg",
    img2: "/images/p7-2.jpg",
    discount: "20% Off",
  },
  {
    id: 8,
    name: "Lightweight Daily Wear Shoes",
    price: 999,
    oldPrice: 1499,
    brand: "NEW STEPS",
    img: "/images/p8.jpg",
    img2: "/images/p8-2.jpg",
    discount: "25% Off",
  },
  {
    id: 9,
    name: "Kids Trendy Designer Sneakers",
    price: 1599,
    oldPrice: 2399,
    brand: "NEW STEPS",
    img: "/images/p9.jpg",
    img2: "/images/p9-2.jpg",
    discount: "33% Off",
  },
  {
    id: 10,
    name: "Kids Premium Sports Shoes",
    price: 1799,
    oldPrice: 2599,
    brand: "NEW STEPS",
    img: "/images/p10.jpg",
    img2: "/images/p10-2.jpg",
    discount: "30% Off",
  },
];
export default function Collection() {
  const [activeFilters, setActiveFilters] = useState([]);

  return (
    <section className="py-12 bg-white min-h-screen">
      <div className="container  mx-auto px-6">
        
        <div className="mb-12 border-b border-gray-100 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-[10px] tracking-[0.4em] text-gray-400 uppercase font-bold">New Steps</span>
            <h1 className="text-4xl font-light text-black tracking-tight mt-2 uppercase">
              Full <span className="font-black italic">Collection</span>
            </h1>
          </div>
          <p className="text-[11px] tracking-[0.1em] text-gray-400 uppercase">
            Showing <span className="text-black font-bold">10</span> of 23 products
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">

          <aside className="w-full lg:w-[240px] shrink-0">
            <div className="sticky top-28 space-y-8">
              
              <div className="flex items-center justify-between border-b border-black pb-2 mb-6">
                <h3 className="text-xs font-black tracking-[0.2em] uppercase flex items-center gap-2">
                  <SlidersHorizontal size={14} /> Filter
                </h3>
                <button className="text-[10px] text-gray-400 hover:text-black transition-colors uppercase tracking-widest">
                  Reset
                </button>
              </div>

              <div className="space-y-4">
                <h4 className="text-[11px] font-bold tracking-widest uppercase text-black">Availability</h4>
                <div className="space-y-3">
                  {["In stock (9)", "Out of stock (23)"].map((label, i) => (
                    <label key={i} className="flex items-center gap-3 cursor-pointer group">
                      <div className="relative flex items-center justify-center">
                        <input type="checkbox" className="peer appearance-none w-4 h-4 border border-gray-300 checked:bg-black checked:border-black transition-all" />
                        <span className="absolute text-white opacity-0 peer-checked:opacity-100 text-[10px]">✓</span>
                      </div>
                      <span className="text-xs text-gray-500 group-hover:text-black transition-colors">{label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {["Price", "Gender", "Color", "Size", "Brand"].map((item, i) => (
                <div key={i} className="border-t border-gray-100 py-4 group cursor-pointer">
                  <div className="flex justify-between items-center text-[11px] font-bold tracking-widest uppercase group-hover:text-gray-500 transition-colors">
                    {item}
                    <ChevronDown size={14} className="text-gray-300" />
                  </div>
                </div>
              ))}
            </div>
          </aside>

          <main className="flex-1">
            <div className="flex justify-end mb-8">
              <div className="relative flex items-center gap-3 border-b border-black pb-1">
                <span className="text-[10px] font-bold tracking-widest uppercase">Sort By:</span>
                <select className="bg-transparent text-[11px] font-medium outline-none cursor-pointer pr-4 appearance-none">
                  <option>Featured</option>
                  <option>Best Selling</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
                <ChevronDown size={12} className="absolute right-0 pointer-events-none" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-12">
              {products.map((item, index) => (
                <ProductCard 
                  key={index} 
                  product={item} 
                  showButton={true} 
                />
              ))}
            </div>

            <div className="mt-20 flex flex-col items-center border-t border-gray-100 pt-12">
               <p className="text-[10px] tracking-[0.2em] text-gray-400 uppercase mb-4">You've viewed 10 of 23 products</p>
               <div className="w-48 h-[2px] bg-gray-100 mb-8 relative">
                  <div className="absolute left-0 top-0 h-full bg-black w-[43%]"></div>
               </div>
               <button className="border border-black px-12 py-4 text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-black hover:text-white transition-all duration-500">
                  Load More
               </button>
            </div>

          </main>

        </div>
      </div>
    </section>
  );
}
