import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { useState } from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-20 mt-auto border-t border-zinc-800">
      <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16">
        
        {/* Brand Section */}
        <div className="lg:col-span-1">
          <img
            src="/images/white.png"
            alt="New Steps Logo"
            className="max-h-12 mb-6 grayscale brightness-200"
          />
          <p className="text-[13px] leading-7 text-zinc-400 font-light tracking-wide">
            New Steps is dedicated to delivering premium kids’ footwear with
            unmatched comfort, modern design, and long-lasting quality for every
            step forward.
          </p>
          <div className="flex gap-5 mt-8">
            <FaInstagram className="cursor-pointer hover:text-zinc-400 transition-colors" size={18} />
            <FaFacebookF className="cursor-pointer hover:text-zinc-400 transition-colors" size={18} />
            <FaLinkedinIn className="cursor-pointer hover:text-zinc-400 transition-colors" size={18} />
          </div>
        </div>

        <FooterLinks
          title="INFORMATION"
          links={[
            "About Us",
            "Terms & Conditions",
            "Contact Us",
            "Privacy Policy",
          ]}
        />

        <FooterLinks
          title="MY ACCOUNT"
          links={["Your Account", "Return Policies", "Wishlist"]}
        />

        <FooterLinks
          title="CATEGORIES"
          links={[
            "LED Sneakers",
            "Casual Sneakers",
            "Slip-On",
            "Sandals",
          ]}
        />

        <div>
          <h3 className="text-[11px] font-black tracking-[0.3em] uppercase mb-6 border-b border-zinc-800 pb-3">
            REACH US
          </h3>

          <ul className="space-y-6 text-[13px] font-light text-zinc-400">
            <li className="flex gap-4 items-start group">
              <FaMapMarkerAlt size={20} className="text-white mt-1 shrink-0" />
              <span className="leading-relaxed group-hover:text-white transition-colors">
                SY.NO, -74. PLOT-12 GR FLR ROYAL IND SOCIETY. BHARI MATA ROAD.
                TUNKI, FULWADI, SURAT. 395004
              </span>
            </li>
            <li className="flex gap-4 items-center group">
              <FaPhoneAlt size={16} className="text-white shrink-0" />
              <span className="group-hover:text-white transition-colors">+91 12345 67890</span>
            </li>
            <li className="flex gap-4 items-center group">
              <FaEnvelope size={16} className="text-white shrink-0" />
              <span className="group-hover:text-white transition-colors">hello@newsteps.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-zinc-900 py-8 text-center text-[10px] tracking-[0.2em] uppercase text-zinc-500">
        © 2026 New Steps. Crafted for the Next Generation.
      </div>
    </footer>
  );
}

function FooterLinks({ title, links }) {
  return (
    <div>
      <h3 className="text-[11px] font-black tracking-[0.3em] uppercase mb-6 border-b border-zinc-800 pb-3 text-white">
        {title}
      </h3>
      <ul className="space-y-4 text-[13px] font-light text-zinc-400">
        {links.map((item, index) => (
          <li key={index} className="w-full cursor-pointer hover:text-white transition-colors">
            <span className="relative inline-block group">
              {item}
              <span className="absolute left-0 bottom-[-2px] w-full h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}