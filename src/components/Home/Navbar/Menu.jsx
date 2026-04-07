import React from "react";
import { NavLink } from "react-router-dom";
import { Plus } from "lucide-react";

export const Menu = ({ setPanel }) => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Collection", path: "/collection" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="flex flex-col h-full bg-white px-10 py-16">
      
      {/* --- SECTION HEADER --- */}
      <div className="mb-12 flex items-center gap-4">
        <span className="h-[1px] w-8 bg-black"></span>
        <span className="text-[10px] font-black tracking-[0.5em] uppercase text-black">Navigation</span>
      </div>

      {/* --- MENU BODY --- */}
      <nav className="flex-1 flex flex-col space-y-2">
        {navItems.map((item, i) => (
          <NavLink
            key={i}
            to={item.path}
            onClick={() => setPanel(null)}
            className={({ isActive }) =>
              `group relative flex items-center justify-between py-6 border-b border-gray-50 transition-all duration-700 ${
                isActive ? "text-black" : "text-gray-300 hover:text-black"
              }`
            }
          >
            <div className="flex items-baseline gap-6">
              {/* Subtle Serif Index */}
              <span className="text-[10px] font-light italic opacity-40 group-hover:opacity-100 transition-opacity">
                0{i + 1}
              </span>
              
              {/* Clean Boutique Heading */}
              <h2 className="text-lg font-bold uppercase tracking-[0.3em] transition-all duration-500 group-hover:tracking-[0.5em]">
                {item.name}
              </h2>
            </div>

            {/* Interactive Plus Icon */}
            <Plus 
              size={14} 
              strokeWidth={1} 
              className="opacity-0 group-hover:opacity-100 group-hover:rotate-90 transition-all duration-500" 
            />

            {/* Hover Underline Animation */}
            <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-black transition-all duration-700 group-hover:w-full"></span>
          </NavLink>
        ))}
      </nav>

      {/* --- SIDEBAR FOOTER --- */}
      <div className="mt-auto space-y-10">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-3">
             <p className="text-[8px] font-black tracking-widest text-gray-300 uppercase">Social</p>
             <div className="flex flex-col gap-1">
                <a href="#" className="text-[10px] font-bold hover:underline">Instagram</a>
                <a href="#" className="text-[10px] font-bold hover:underline">Facebook</a>
             </div>
          </div>
          <div className="flex flex-col gap-3">
             <p className="text-[8px] font-black tracking-widest text-gray-300 uppercase">Legal</p>
             <div className="flex flex-col gap-1">
                <a href="#" className="text-[10px] font-bold hover:underline">Privacy</a>
                <a href="#" className="text-[10px] font-bold hover:underline">Terms</a>
             </div>
          </div>
        </div>

        <div className="pt-6 border-t border-gray-100 flex justify-between items-center">
           <p className="text-[7px] font-black tracking-[0.4em] text-gray-200 uppercase">New Steps © 2026</p>
           <div className="w-1 h-1 bg-black rounded-full animate-pulse"></div>
        </div>
      </div>

    </div>
  );
};