import React from "react";
import Login from "./Login.jsx";
import Cart from "./Cart.jsx";
import { Link, NavLink } from "react-router-dom";
import { Heart, Menu, Search, Star, User } from "lucide-react";
import { useEffect, useState } from "react";

import Sarchinp from "./Searchinp.jsx";
const Navbar = () => {
  const [panel, setPanel] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 10);
  };

  handleScroll();
  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);
  return (
    <header className="top-0 left-0 relative w-full">
      <div
        className=" top-0 left-0  w-full z-[1004] 
bg-white border-b border-gray-200
px-4 py-4"
      >
        <div className="flex relative items-center justify-between gap-8 container mx-auto">
          {/* Logo */}
<Link
  to="/"
  className={`${isScrolled ? "opacity-0" : "opacity-100"} transition-opacity duration-300`}
>
  <img
    src="images/B&WLOGO.png"
    alt="logo"
    className="max-h-12 md:max-h-14 lg:max-h-16 xl:max-h-16 w-auto left-0 object-contain"
  />
</Link>

  <div
    className={`fixed left-4 top-3 z-[1005] transition-opacity duration-300
      ${isScrolled ? "opacity-100" : "opacity-0 pointer-events-none"}
    `}
     onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  >
    <div className="bg-white rounded-full w-14 h-14 flex items-center justify-center shadow-sm">
      <img
        src="images/logo.png"
        alt="logo"
        className="h-12 w-auto object-cover ml-3"
      />
    </div>
  </div>

          {/* Menu */}
          <ul className="hidden lg:flex gap-8 text-[18px] font-semibold">
            {["/", "/collection", "/about", "/contact"].map((path, index) => {
              const names = ["HOME", "COLLECTION", "ABOUT", "CONTACT"];
              return (
                <NavLink
                  key={index}
                  to={path}
                  className={`relative group pb-1 transition duration-300 
                text-black`}
                >
                  {names[index]}

                  {/* underline */}
                  <span
                    className="absolute left-0 bottom-0 h-[2px] w-full bg-black
              origin-right scale-x-0 transition-transform duration-300
              group-hover:origin-left group-hover:scale-x-100"
                  ></span>
                </NavLink>
              );
            })}
          </ul>

          {/* Right Icons */}
          <div className="flex items-center gap-6 text-[#0F3558]">
            <div>
              <Sarchinp />
            </div>
            <div className="hidden lg:flex items-center gap-6">
              <Link to='/login'>
              
              <User />
              </Link>

              <Link to="/Wishlist">
                <Heart size={22} className=" transition" />
              </Link>

              <Cart />
            </div>

            {/* Mobile Menu */}
            <button
              onClick={() => setPanel("menu")}
              className="lg:hidden text-[#0F3558] hover:text-[#2FA4D6]"
            >
              <Menu />
            </button>
          </div>
        </div>
      </div>

     
    </header>
  );
};

export default Navbar;
