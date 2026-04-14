import React, { useState } from "react";
import { Minus, Plus, Trash2, ArrowRight, ShieldCheck, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import image1 from "../assets/images/led-5.png";

export default function CartPage() {
  const [cart, setCart] = useState([
    { id: 1, name: "LED Performance Sneaker", brand: "New Steps", price: 10499, img: image1, qty: 1 },
    { id: 2, name: "Premium Leather Flats", brand: "New Steps", price: 5200, img: image1, qty: 1 },
  ]);

  const subtotal = cart.reduce((t, i) => t + i.price * i.qty, 0);
  const shipping = 250;
  const total = subtotal + shipping;

  return (
    <div className="container mx-auto px-6 py-16 bg-white min-h-screen">
      
      <div className="mb-16 border-b border-gray-100 pb-10">
        <span className="text-[10px] tracking-[0.5em] text-gray-400 uppercase font-black block mb-2 text-left">
          Shopping Bag
        </span>
        <h1 className="text-4xl font-light text-black uppercase tracking-tight text-left">
          Your <span className="font-black italic">Selection</span>
          <span className="ml-4 text-xs font-bold text-gray-300 italic tracking-widest">
            ({cart.length} Items)
          </span>
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        <div className="lg:col-span-8 space-y-10">
          {cart.map((item) => (
            <div key={item.id} className="flex flex-col md:flex-row gap-8 border-b border-gray-50 pb-10 group">
              <div className="w-full md:w-40 h-48 bg-gray-50 flex items-center justify-center p-4 border border-gray-100 group-hover:bg-white transition-all duration-500">
                <img src={item.img} className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-700" alt={item.name} />
              </div>

              <div className="flex-1 flex flex-col justify-between py-2 text-left">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[9px] tracking-[0.4em] font-black text-gray-300 uppercase block mb-1">
                      {item.brand}
                    </span>
                    <h2 className="text-lg font-bold text-black uppercase tracking-tight mb-2">
                      {item.name}
                    </h2>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                      Color: Midnight Black | Size: 42
                    </p>
                  </div>
                  <span className="text-lg font-black italic">₹{item.price.toLocaleString()}</span>
                </div>

                <div className="flex items-center justify-between mt-8 md:mt-0">
                  <div className="flex items-center border border-black px-4 py-2 hover:bg-black hover:text-white transition-all group/btn">
                    <button className="text-gray-400 group-hover/btn:text-white/50"><Minus size={14} /></button>
                    <span className="px-8 text-xs font-black">{item.qty}</span>
                    <button className="text-gray-400 group-hover/btn:text-white/50"><Plus size={14} /></button>
                  </div>

                  <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-300 hover:text-black transition-all">
                    <Trash2 size={16} strokeWidth={1.5} />
                    <span>Remove Item</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-4">
          <div className="bg-zinc-50 p-10 border border-gray-100 sticky top-32">
            <h3 className="text-[11px] font-black tracking-[0.4em] uppercase text-black mb-8 border-b border-gray-200 pb-4">
              Order Summary
            </h3>

            <div className="space-y-6 mb-10">
              <div className="flex justify-between text-xs font-bold text-gray-400 uppercase tracking-widest">
                <span>Subtotal</span>
                <span className="text-black">₹{subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-xs font-bold text-gray-400 uppercase tracking-widest">
                <span>Shipping</span>
                <span className="text-black">₹{shipping}</span>
              </div>
              <div className="pt-6 border-t border-gray-200 flex justify-between items-baseline">
                <span className="text-sm font-black uppercase tracking-[0.2em]">Total</span>
                <span className="text-3xl font-black italic">₹{total.toLocaleString()}</span>
              </div>
            </div>

            <Link 
              to="/checkout"
              className="w-full bg-black text-white py-6 text-[11px] font-black tracking-[0.4em] uppercase flex items-center justify-center gap-4 hover:bg-zinc-800 transition-all group"
            >
              Secure Checkout
              <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-500" />
            </Link>

            <div className="mt-10 space-y-4 pt-6 border-t border-gray-100">
              <div className="flex items-center gap-3 text-gray-400">
                <ShieldCheck size={16} strokeWidth={1.5} />
                <span className="text-[9px] font-black uppercase tracking-widest">Authenticity Guaranteed</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Truck size={16} strokeWidth={1.5} />
                <span className="text-[9px] font-black uppercase tracking-widest">Premium Express Shipping</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="mt-20 text-center">
         <Link to="/collection" className="text-[10px] font-black tracking-[0.3em] uppercase border-b border-black pb-1 hover:text-gray-300 hover:border-gray-100 transition-all">
           Continue Browsing Collection
         </Link>
      </div>
    </div>
  );
}