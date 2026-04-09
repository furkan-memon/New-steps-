import React from 'react';
import { Search } from "lucide-react";

const Sarchinp = () => {
  return (
    <div className="relative w-full group">
      <input
        type="text"
        id="search"
        placeholder=" " /* Required for floating label logic */
        required
        className="peer w-full xl:w-[18vw] border-b border-gray-200 bg-transparent py-2 pl-2 pr-10 text-sm outline-none transition-all duration-500 focus:border-black"
      />

      <label
        htmlFor="search"
        className="pointer-events-none absolute left-2 top-2 text-gray-400 text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 
                   peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-placeholder-shown:tracking-normal peer-placeholder-shown:font-normal
                   peer-focus:-top-4 peer-focus:text-[9px] peer-focus:text-black
                   peer-valid:-top-4 peer-valid:text-[9px] peer-valid:text-black"
      >
        Search
      </label>

      <Search
        size={16}
        strokeWidth={1.5}
        className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 transition-all duration-300 peer-focus:text-black peer-focus:scale-110"
      />
      
      {/* Aesthetic underline highlight */}
      <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-black transition-all duration-700 peer-focus:w-full"></span>
    </div>
  );
};

export default Sarchinp;