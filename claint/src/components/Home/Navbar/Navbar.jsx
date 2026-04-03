import React from "react";
import Login from "./Login.jsx";
import Cart from "./Cart.jsx";
import { Link, NavLink } from "react-router-dom";
import { Heart, Menu, Search, Star } from "lucide-react";
import { useEffect, useState } from "react";
import SidePanel from "./Sidepanle.jsx";
import PanelContent from "./PanelContent.jsx";
import Sarchinp from "./Searchinp.jsx";
const Navbar = () => {
  const [panel, setPanel] = useState(null);
  return (
    <header className="top-0 left-0 relative w-full">
      <div
        className="fixed top-0 left-0 w-full z-[1004] 
bg-white border-b border-gray-200
px-4 py-4"
      >
        <div className="flex items-center justify-between gap-8 container mx-auto">
          {/* Logo */}
          <Link to="/">
            <img
              src="images/logo.png"
              alt="logo"
              className="h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 w-auto object-contain"
            />
          </Link>

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
              <Login />

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

      <SidePanel
        open={panel !== null}
        onClose={() => setPanel(null)}
        title={panel === "Menu"}
      >
        <PanelContent panel={panel} setPanel={setPanel} />
      </SidePanel>
    </header>
  );
};

export default Navbar;
