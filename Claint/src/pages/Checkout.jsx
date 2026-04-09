import React from "react";
import { ArrowRight, ShieldCheck, Lock, CreditCard } from "lucide-react";
import img from '../assets/images/led-8.png'
export default function Checkout() {
  return (
    <section className="min-h-screen bg-white py-20 px-6">
      <div className="container  mx-auto grid lg:grid-cols-12 gap-16">
        
        {/* --- LEFT SIDE: FORMS --- */}
        <div className="lg:col-span-7 space-y-12">
          
          <header className="border-b border-gray-100 pb-8">
            <span className="text-[10px] tracking-[0.5em] text-gray-400 uppercase font-black block mb-2 text-left">
              Finalize Order
            </span>
            <h1 className="text-4xl font-light text-black uppercase tracking-tight text-left">
              Secure <span className="font-black italic text-black">Checkout</span>
            </h1>
          </header>

          {/* Contact Section */}
          <section className="space-y-6 text-left">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-6 h-6 rounded-full bg-black text-white text-[10px] flex items-center justify-center font-black">1</span>
              <h2 className="text-[11px] font-black tracking-[0.3em] uppercase">Contact Information</h2>
            </div>
            
            <input
              type="email"
              placeholder="EMAIL ADDRESS"
              className="w-full border-b border-gray-200 bg-transparent py-4 text-xs tracking-widest outline-none focus:border-black transition-all"
            />
          </section>

          {/* Shipping Section */}
          <section className="space-y-6 text-left pt-8">
             <div className="flex items-center gap-3 mb-6">
              <span className="w-6 h-6 rounded-full bg-black text-white text-[10px] flex items-center justify-center font-black">2</span>
              <h2 className="text-[11px] font-black tracking-[0.3em] uppercase">Shipping Address</h2>
            </div>

            <select className="w-full border-b border-gray-200 bg-transparent py-4 text-xs tracking-widest outline-none focus:border-black appearance-none cursor-pointer">
              <option>INDIA</option>
              <option>UNITED STATES</option>
              <option>UNITED KINGDOM</option>
            </select>

            <div className="grid grid-cols-2 gap-8">
              <input className="w-full border-b border-gray-200 py-4 text-xs tracking-widest outline-none focus:border-black" placeholder="FIRST NAME" />
              <input className="w-full border-b border-gray-200 py-4 text-xs tracking-widest outline-none focus:border-black" placeholder="LAST NAME" />
            </div>

            <input className="w-full border-b border-gray-200 py-4 text-xs tracking-widest outline-none focus:border-black" placeholder="STREET ADDRESS" />
            
            <div className="grid grid-cols-3 gap-8">
              <input className="w-full border-b border-gray-200 py-4 text-xs tracking-widest outline-none focus:border-black" placeholder="CITY" />
              <input className="w-full border-b border-gray-200 py-4 text-xs tracking-widest outline-none focus:border-black" placeholder="STATE" />
              <input className="w-full border-b border-gray-200 py-4 text-xs tracking-widest outline-none focus:border-black" placeholder="PIN CODE" />
            </div>

            <input className="w-full border-b border-gray-200 py-4 text-xs tracking-widest outline-none focus:border-black" placeholder="PHONE NUMBER" />
          </section>

          {/* Payment Section */}
          <section className="pt-8 text-left">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-6 h-6 rounded-full bg-black text-white text-[10px] flex items-center justify-center font-black">3</span>
              <h2 className="text-[11px] font-black tracking-[0.3em] uppercase">Payment Method</h2>
            </div>

            <div className="space-y-4">
              <label className="flex items-center justify-between border border-black p-6 cursor-pointer group">
                <div className="flex items-center gap-4">
                  <div className="w-4 h-4 border-2 border-black rounded-full flex items-center justify-center">
                     <div className="w-2 h-2 bg-black rounded-full"></div>
                  </div>
                  <span className="text-[11px] font-black uppercase tracking-widest">Razorpay Online</span>
                </div>
                <CreditCard size={18} className="text-gray-400" />
              </label>

              <label className="flex items-center justify-between border border-gray-100 p-6 cursor-pointer hover:border-black transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-4 h-4 border-2 border-gray-200 rounded-full"></div>
                  <span className="text-[11px] font-black uppercase tracking-widest text-gray-400">Cash on Delivery</span>
                </div>
              </label>
            </div>
          </section>

          <button className="w-full bg-black text-white py-6 text-[11px] font-black tracking-[0.4em] uppercase flex items-center justify-center gap-4 hover:bg-zinc-800 transition-all group">
            Complete Purchase
            <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-500" />
          </button>

          <div className="flex items-center justify-center gap-8 pt-6 border-t border-gray-50 opacity-30 grayscale">
             <ShieldCheck size={20} />
             <Lock size={20} />
          </div>
        </div>

        {/* --- RIGHT SIDE: SUMMARY --- */}
        <div className="lg:col-span-5">
          <div className="bg-zinc-50 p-10 border border-gray-100 sticky top-10">
            <h3 className="text-[11px] font-black tracking-[0.4em] uppercase text-black mb-10 border-b border-gray-200 pb-4 text-left">
              Order Summary
            </h3>

            {/* Product List */}
            <div className="space-y-8 mb-10 text-left">
              <div className="flex gap-6 items-center">
                <div className="relative">
                   <div className="w-20 h-24 bg-white border border-gray-100 p-2 shrink-0">
                    <img src={img} className="w-full h-full object-contain " alt="" />
                  </div>
                  <span className="absolute -top-2 -right-2 bg-black text-white w-5 h-5 rounded-full text-[9px] flex items-center justify-center font-black">1</span>
                </div>

                <div className="flex-1">
                  <h4 className="text-[11px] font-black uppercase tracking-tight leading-relaxed">
                    Women White Embellished Open Toe Flats
                  </h4>
                  <p className="text-[9px] text-gray-400 tracking-widest uppercase mt-1">White / EU 36</p>
                </div>
                <span className="text-xs font-black italic">₹1,899</span>
              </div>
            </div>

            {/* Promo Code */}
            <div className="flex gap-4 border-b border-gray-200 pb-8 mb-8">
              <input
                placeholder="PROMO CODE"
                className="flex-1 bg-transparent border-b border-gray-300 py-2 text-[10px] tracking-widest outline-none focus:border-black"
              />
              <button className="text-[10px] font-black tracking-widest uppercase border border-black px-6 py-2 hover:bg-black hover:text-white transition-all">
                Apply
              </button>
            </div>

            {/* Totals */}
            <div className="space-y-6 text-left">
              <div className="flex justify-between text-[10px] font-black text-gray-400 uppercase tracking-widest">
                <span>Subtotal</span>
                <span className="text-black">₹1,899</span>
              </div>
              <div className="flex justify-between text-[10px] font-black text-gray-400 uppercase tracking-widest">
                <span>Shipping</span>
                <span className="text-black italic font-light">Calculated next step</span>
              </div>
              
              <div className="pt-6 border-t border-gray-200 flex justify-between items-baseline">
                <span className="text-xs font-black uppercase tracking-[0.2em]">Total</span>
                <div className="text-right">
                   <span className="text-3xl font-black italic block">₹1,899</span>
                   <span className="text-[9px] text-gray-300 font-bold uppercase tracking-widest">Incl. all taxes</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}