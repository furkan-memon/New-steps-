import React from "react";
import { MapPin, Instagram, ArrowUpRight } from "lucide-react";

export default function ContactUs() {
  return (
    <section className="bg-white py-24 px-6 container mx-auto text-left">
      <div className="flex flex-col lg:flex-row gap-20">
        <div className="flex-1 space-y-12">
          <header>
            <span className="text-[10px] tracking-[0.4em] text-gray-400 uppercase font-black block mb-4">Concierge</span>
            <h1 className="text-5xl font-light uppercase">We are here to <br/><span className="font-black italic">Assist You</span></h1>
          </header>
          <div className="space-y-10">
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 border border-black flex items-center justify-center shrink-0"><MapPin size={20}/></div>
              <p className="text-sm text-gray-500 font-light leading-relaxed">PLOT-12 GR FLR ROYAL SOCIETY, SURAT, 395004</p>
            </div>
            <div className="flex gap-6 items-start group cursor-pointer">
              <div className="w-12 h-12 border border-black flex items-center justify-center shrink-0 bg-black text-white"><Instagram size={20}/></div>
              <div>
                <h4 className="text-[11px] font-black tracking-widest uppercase">Digital Support</h4>
                <button className="text-[10px] font-bold border-b border-black mt-2 uppercase tracking-widest">Message @NewSteps</button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[500px] bg-zinc-50 p-10 border border-gray-100">
          <h3 className="text-xl font-black uppercase mb-10">Send a Message</h3>
          <form className="space-y-8">
            <input type="text" placeholder="FULL NAME" className="w-full bg-transparent border-b border-gray-300 py-2 outline-none focus:border-black text-xs tracking-widest"/>
            <input type="email" placeholder="EMAIL ADDRESS" className="w-full bg-transparent border-b border-gray-300 py-2 outline-none focus:border-black text-xs tracking-widest"/>
            <textarea rows="4" placeholder="YOUR MESSAGE" className="w-full bg-transparent border-b border-gray-300 py-2 outline-none focus:border-black text-xs tracking-widest resize-none"></textarea>
            <button className="w-full bg-black text-white py-5 text-[11px] font-black tracking-[0.3em] uppercase flex items-center justify-center gap-3">
              Submit <ArrowUpRight size={16}/>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}