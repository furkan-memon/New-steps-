import { useState } from "react";
import { Trash2, ShoppingBag, Minus, Plus, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import img1 from '../assets/images/sn-1.png'
import img2 from '../assets/images/sn-3.png'
import img3 from '../assets/images/sn-4.png'

const productsData = [
  { id: 1, name: "Kids Blue Casual Sneakers", category: "Footwear", stock: "In Stock", price: 27.49, oldPrice: 29.95, img: img1, qty: 1 },
  { id: 2, name: "Kids Light-Up Sport Shoes", category: "Footwear", stock: "In Stock", price: 45.00, oldPrice: 55.00, img: img2, qty: 1 },
  { id: 3, name: "Comfort Strap School Shoes", category: "Footwear", stock: "Limited Stock", price: 32.20, oldPrice: 40.00, img: img3, qty: 1 },
];

export default function Wishlist() {
  const [products, setProducts] = useState(productsData);
  const [selected, setSelected] = useState([1, 2]);

  const toggleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const increase = (id) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, qty: p.qty + 1 } : p))
    );
  };

  const decrease = (id) => {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === id && p.qty > 1 ? { ...p, qty: p.qty - 1 } : p
      )
    );
  };

  const removeItem = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div className="container  mx-auto p-8 bg-white min-h-screen">
      
      <div className="mb-12 border-b border-gray-100 pb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="text-[10px] tracking-[0.4em] text-gray-400 uppercase font-bold">Your Selection</span>
          <h1 className="text-4xl font-light text-black tracking-tight mt-2 uppercase">
            Personal <span className="font-black italic text-black">Wishlist</span>
          </h1>
        </div>
        
        <div className="flex items-center gap-8">
          <p className="text-[11px] tracking-[0.1em] text-gray-400 uppercase">
            <span className="text-black font-bold">{selected.length}</span> items chosen
          </p>
          <button className="group flex items-center gap-3 bg-black text-white px-8 py-4 text-[11px] font-black tracking-[0.2em] uppercase transition-all hover:bg-zinc-800">
            Move to Cart
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </div>
      </div>

      <div className="border-t border-gray-100">
        
        <div className="hidden lg:grid grid-cols-[60px_3fr_1fr_1fr_1fr_1fr_50px] border-b border-gray-100 py-6 text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">
          <div className="flex justify-center italic">Pick</div>
          <div className="pl-6">Product Details</div>
          <div className="text-center">Status</div>
          <div className="text-center">Price</div>
          <div className="text-center">Quantity</div>
          <div className="text-center">Purchase</div>
          <div className="text-right">Action</div>
        </div>

        <div className="divide-y divide-gray-50">
          {products.map((p) => (
            <div key={p.id} className="grid grid-cols-1 lg:grid-cols-[60px_3fr_1fr_1fr_1fr_1fr_50px] items-center py-8 group transition-all">
              
              <div className="flex justify-center mb-4 lg:mb-0">
                <div className="relative flex items-center justify-center">
                  <input
                    type="checkbox"
                    checked={selected.includes(p.id)}
                    onChange={() => toggleSelect(p.id)}
                    className="peer appearance-none w-5 h-5 border border-gray-200 checked:bg-black checked:border-black transition-all cursor-pointer"
                  />
                  <span className="absolute text-white opacity-0 peer-checked:opacity-100 pointer-events-none text-[10px]">✓</span>
                </div>
              </div>

              <div className="flex items-center gap-6 pl-0 lg:pl-6 mb-6 lg:mb-0">
                <div className="w-24 h-24 bg-gray-50 overflow-hidden border border-gray-100 transition-transform group-hover:scale-105">
                  <img src={p.img} alt={p.name} className="w-full h-full object-contain p-2" />
                </div>

                <div>
                  <h4 className="text-sm font-bold text-black uppercase tracking-tight mb-1">{p.name}</h4>
                  <p className="text-[10px] text-gray-400 tracking-widest uppercase mb-2">{p.category}</p>
                  <div className="flex items-center gap-1 text-black text-[10px]">
                    {"★★★★☆".split("").map((s, i) => (
                      <span key={i} className={i === 4 ? "text-gray-200" : ""}>{s}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Status */}
              <div className="text-center mb-4 lg:mb-0">
                <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 border ${p.stock === 'In Stock' ? 'border-gray-100 text-gray-400' : 'border-black text-black'}`}>
                  {p.stock}
                </span>
              </div>

              {/* Price */}
              <div className="text-center mb-4 lg:mb-0">
                <div className="text-sm font-black text-black">₹{p.price}</div>
                <div className="text-gray-300 line-through text-[11px] font-light italic">₹{p.oldPrice}</div>
              </div>

              {/* Quantity Selector */}
              <div className="flex justify-center mb-6 lg:mb-0">
                <div className="flex items-center border border-black/10 px-4 py-2 hover:border-black transition-colors">
                  <button onClick={() => decrease(p.id)} className="text-gray-400 hover:text-black">
                    <Minus size={12} />
                  </button>
                  <span className="px-6 text-xs font-black">{p.qty}</span>
                  <button onClick={() => increase(p.id)} className="text-gray-400 hover:text-black">
                    <Plus size={12} />
                  </button>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="flex justify-center gap-3">
                <button className="bg-black text-white px-6 py-3 text-[10px] font-black uppercase tracking-widest hover:bg-zinc-800 transition-all active:scale-95">
                  Buy
                </button>
                <button className="border border-black p-3 hover:bg-black hover:text-white transition-all">
                  <ShoppingBag size={14} />
                </button>
              </div>

              {/* Remove */}
              <div className="flex justify-end pr-2 lg:pr-0 mt-4 lg:mt-0">
                <button 
                  onClick={() => removeItem(p.id)}
                  className="p-2 text-gray-300 hover:text-black hover:rotate-90 transition-all duration-300"
                >
                  <Trash2 size={18} strokeWidth={1.5} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 text-center">
        <Link to="/collection" className="text-[10px] font-black tracking-[0.3em] uppercase border-b border-black pb-1 hover:text-gray-400 hover:border-gray-200 transition-all">
          Continue Browsing
        </Link>
      </div>
    </div>
  );
}