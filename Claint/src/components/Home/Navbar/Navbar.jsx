import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Heart, Menu as MenuIcon, User, ShoppingBag, X } from "lucide-react";

import Sarchinp from "./Searchinp.jsx";
import SidePanel from "./Sidepanle.jsx";
import { Menu } from "./Menu.jsx"; 
import CartPanel from "./CartPanel.jsx";

const Navbar = () => {
  const [panel, setPanel] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Logic to check if user is logged in via cookie
  const [isLoggedIn, setIsLoggedIn] = useState(false);

useEffect(() => {
    // Check if user info exists in localStorage (set this during login)
    const user = localStorage.getItem("user");
    setIsLoggedIn(!!user);
}, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="top-0 left-0 relative border-b border-gray-100 w-full transition-all duration-300">
        <div className={`w-full z-[1004] bg-white px-6 transition-all duration-500 container  mx-auto `}>
          <div className="flex relative items-center justify-between gap-8">

            <div className="flex-none transition-all duration-500">
              <Link
                to="/"
                className={`${
                  isScrolled ? "opacity-0 scale-75 pointer-events-none" : "opacity-100 scale-100"
                } transition-all duration-500 block`}
              >
                <img
                  src="images/B&WLOGO.png"
                  alt="logo"
                  className="h-20 -ml-6 md:-ml-7 xl:-ml-9 md:h-24 w-auto object-contain grayscale hover:grayscale-0 hover:scale-105 transition-all duration-300 "
                />
              </Link>
            </div>

            <div
              className={`fixed left-8 top-4 z-[1005] transition-all duration-500 cursor-pointer
              ${isScrolled ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10 pointer-events-none"}`}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <div className="bg-white rounded-full w-14 h-14 flex items-center justify-center shadow-xl border border-white/20">
                <img
                  src="images/logo.png" 
                  className="h-14 w-auto object-cover ml-3.5 "
                  alt="sticky-logo"
                />
              </div>
            </div>

            <ul className="hidden lg:flex gap-10 text-[13px] tracking-[0.25em] font-bold">
              {["/", "/collection", "/about", "/contact"].map((path, i) => {
                const names = ["HOME", "COLLECTION", "ABOUT", "CONTACT"];
                return (
                  <NavLink 
                    key={i} 
                    to={path} 
                    className={({ isActive }) => `
                      relative group transition-colors duration-300
                      ${isActive ? "text-black" : "text-gray-400 hover:text-black"}
                    `}
                  >
                    {names[i]}
                    <span className="absolute left-0 -bottom-2 h-[2px] w-full bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </NavLink>
                );
              })}
            </ul>

            {/* Right Icons */}
            <div className="flex items-center gap-6 justify-end flex-1 lg:flex-none">
              <div className="hidden xl:block">
                <Sarchinp />
              </div>

              <div className="flex items-center gap-4 md:gap-5">
                <Link 
                  to={isLoggedIn ? "/profile" : "/login"} 
                  className="hidden lg:block hover:scale-110 transition-transform"
                >
                  <User size={24} strokeWidth={1.2} className={isLoggedIn ? "text-black" : "text-gray-400"} />
                </Link>

                <Link to="/wishlist" className="hidden lg:block hover:scale-110 transition-transform">
                  <Heart size={24} strokeWidth={1.2} />
                </Link>

                <div className="relative group">
                  <ShoppingBag
                    size={24}
                    strokeWidth={1.2}
                    className="cursor-pointer group-hover:scale-110 transition-transform"
                    onClick={() => setPanel("cart")}
                  />
                  <span className="absolute -top-1 -right-1 bg-black text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                    0
                  </span>
                </div>

                <MenuIcon
                  size={28}
                  className="lg:hidden cursor-pointer hover:scale-110 transition-transform"
                  onClick={() => setPanel("menu")}
                />
              </div>
            </div>
          </div>

          <div className="mt-6 xl:hidden pb-4">
            <Sarchinp />
          </div>
        </div>
      </header>

      <SidePanel
        open={panel === "cart"}
        onClose={() => setPanel(null)}
        title="Your Selection"
      >
        <CartPanel />
      </SidePanel>

      <SidePanel
        open={panel === "menu"}
        onClose={() => setPanel(null)}
        title="Boutique Menu"
      >
        <Menu setPanel={setPanel} />
      </SidePanel>
    </>
  );
};

export default Navbar;