import React, { useState } from "react";
import { Minus, Plus, Trash2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import image1 from "../../../assets/images/leds-2.png";

export default function CartPanel({ setPanel }) {
  const [cart, setCart] = useState([
    { id: 1, name: "LED Performance Sneaker", brand: "New Steps", price: 10499, img: image1, qty: 1 },
  ]);

  const total = cart.reduce((t, i) => t + i.price * i.qty, 0);

  return (
    <div className="flex flex-col h-full bg-white pt-6">
      {/* --- ITEMS LIST --- */}
      <div className="flex-1 overflow-y-auto no-scrollbar space-y-8">
        {cart.map((item) => (
          <div key={item.id} className="flex gap-6 items-start border-b border-gray-50 pb-8 last:border-0">
            <div className="w-24 h-24 bg-gray-50 border border-gray-100 p-2 shrink-0">
              <img src={item.img} className="w-full h-full object-contain" alt={item.name} />
            </div>
            <div className="flex-1 flex flex-col justify-between h-24 text-left">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[9px] tracking-[0.2em] font-black text-gray-400 uppercase">{item.brand}</span>
                  <h4 className="text-xs font-bold text-black uppercase tracking-tight">{item.name}</h4>
                </div>
                <span className="text-xs font-black">₹{item.price}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center border border-black/10 px-3 py-1.5 hover:border-black transition-colors">
                  <button className="text-gray-400 hover:text-black"><Minus size={12} /></button>
                  <span className="px-5 text-[11px] font-black">{item.qty}</span>
                  <button className="text-gray-400 hover:text-black"><Plus size={12} /></button>
                </div>
                <button className="text-gray-300 hover:text-black transition-all">
                  <Trash2 size={16} strokeWidth={1.5} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* --- FOOTER ACTIONS --- */}
      <div className="pt-8 border-t border-gray-100 bg-white">
        <div className="flex justify-between items-center mb-8 px-1">
          <div className="flex flex-col text-left">
            <span className="text-[9px] tracking-[0.4em] text-gray-400 uppercase font-black mb-1">Estimated Total</span>
            <span className="text-xl font-black text-black">₹{total}</span>
          </div>
          <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest italic">INR</span>
        </div>

        {/* --- BUTTON GRID (Left & Right) --- */}
        <div className="grid grid-cols-2 gap-3">
          {/* VIEW ALL BUTTON (Left) */}
          <Link 
            to="/cart" 
            onClick={() => setPanel(null)}
            className="w-full border border-black text-black text-[10px] font-black tracking-[0.2em] uppercase py-4 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-500"
          >
            View Bag
          </Link>

          {/* CHECKOUT BUTTON (Right) */}
          <Link 
            to='/Checkout'  
            onClick={() => setPanel(null)} 
            className="w-full bg-black text-white text-[10px] font-black tracking-[0.2em] uppercase py-4 flex items-center justify-center gap-2 hover:bg-zinc-800 transition-all shadow-lg shadow-black/10 group"
          >
            Checkout 
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <p className="text-center text-[8px] text-gray-300 uppercase tracking-[0.3em] font-bold mt-8">
          Exclusive Boutique Experience
        </p>
      </div>
    </div>
  );
}