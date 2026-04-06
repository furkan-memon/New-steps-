import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Heart, Menu, User, ShoppingBag, X } from "lucide-react";

import Sarchinp from "./Searchinp.jsx";
import SidePanel from "./Sidepanle.jsx";
import PanelContent from "./PanelContent.jsx";
import CartPanel from "./CartPanel.jsx";

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
    <>
      <header className="top-0 left-0 relative border-b border-gray-200 w-full">
        <div className="w-full z-[1004] bg-white px-4 py-4 container mx-auto">

          <div className="flex relative items-center justify-between gap-8">

            {/* Logo */}
            <Link
              to="/"
              className={`${
                isScrolled ? "opacity-0" : "opacity-100"
              } transition-opacity duration-300`}
            >
              <img
                src="images/B&WLOGO.png"
                alt="logo"
                className="max-h-17 w-auto object-contain -ml-4"
              />
            </Link>

            {/* Sticky Logo */}
            <div
              className={`fixed left-4 top-3 z-[1005] transition-opacity duration-300
              ${isScrolled ? "opacity-100" : "opacity-0 pointer-events-none"}`}
              onClick={() =>
                window.scrollTo({ top: 0, behavior: "smooth" })
              }
            >
              <div className="bg-white rounded-full w-14 h-14 flex items-center justify-center shadow-sm">
                <img
                  src="images/logo.png"
                  className="h-12 w-auto object-cover ml-3"
                />
              </div>
            </div>

            {/* Menu */}
            <ul className="hidden lg:flex gap-8 text-[18px] font-semibold">
              {["/", "/collection", "/about", "/contact"].map((path, i) => {
                const names = ["HOME", "COLLECTION", "ABOUT", "CONTACT"];
                return (
                  <NavLink key={i} to={path} className="relative group">
                    {names[i]}
                    <span className="absolute left-0 bottom-0 h-[2px] w-full bg-black scale-x-0 group-hover:scale-x-100 transition"></span>
                  </NavLink>
                );
              })}
            </ul>

            {/* Right */}
            <div className="flex items-center gap-6">

              <div className="hidden md:block">
                <Sarchinp />
              </div>

              <Link to="/login">
                <User />
              </Link>

              <Link to="/wishlist">
                <Heart />
              </Link>

              {/* CART BUTTON */}
              <ShoppingBag
                className="cursor-pointer"
                onClick={() => setPanel("cart")}
              />

              <Menu
                className="lg:hidden"
                onClick={() => setPanel("menu")}
              />
            </div>
          </div>

          {/* Mobile Search */}
          <div className="mt-3 md:hidden">
            <Sarchinp />
          </div>
        </div>

        {/* MENU PANEL (unchanged) */}
        <SidePanel
          open={panel === "menu"}
          onClose={() => setPanel(null)}
          title="Menu"
        >
          <PanelContent panel={panel} setPanel={setPanel} />
        </SidePanel>
      </header>

      {/* OVERLAY */}
      <div
        onClick={() => setPanel(null)}
        className={`fixed inset-0 bg-black/40 z-[1000] transition ${
          panel === "cart" ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* CART PANEL */}
      <div
        className={`fixed top-0 right-0 h-screen w-[380px] bg-white z-[1001] shadow-xl transition-transform duration-300 flex flex-col
        ${panel === "cart" ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex justify-between items-center px-5 py-4 border-b">
          <h2 className="font-semibold">Your Cart</h2>
          <X onClick={() => setPanel(null)} className="cursor-pointer" />
        </div>

        {/* Scroll */}
        <div className="flex-1 overflow-y-auto">
          <CartPanel />
        </div>
      </div>
    </>
  );
};

export default Navbar;