import React from 'react'
import { Search } from "lucide-react";

const Sarchinp = () => {
  return (
     <div className="relative w-full ">
       
        <input
          type="text"
          id="search"
          required
          className="peer w-[60vw] md:w-[40vw] lg:w-[20vw] rounded-full border border-gray-300 pl-11 pt-5 pb-2 text-sm outline-none
                     focus:border-[#0F3558]"
        />

        <label
          htmlFor="search"
          className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2
                     bg-white px-1 text-gray-500 text-sm transition-all
                     peer-focus:top-1 peer-focus:text-xs peer-focus:text-[#0F3558]
                     peer-valid:top-1 peer-valid:text-xs "
        >
          Search for products
        </label>
         <Search
          size={18}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
        />
      </div>
  )
}

export default Sarchinp