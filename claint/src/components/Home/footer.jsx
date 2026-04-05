import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaPrint,
} from "react-icons/fa";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-black text-gray-200 pt-12 mt-auto">
      <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-5 gap-10 pb-10">
        <div>
          <img
            src="/images/white.png"
            alt=""
            className="max-h-16 -ml-10 mb-3"
          />

          <p className="text-sm leading-6 mb-6">
            New Steps is dedicated to delivering premium kids’ footwear with
            unmatched comfort, modern design, and long-lasting quality for every
            step forward.
          </p>

          <div className="flex gap-3 mb-6">
            {[FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterestP].map(
              (Icon, i) => (
                <div
                  key={i}
                  className="w-9 h-9 flex items-center justify-center border border-gray-400 rounded-full hover:bg-white hover:text-[#0F5E5E] transition cursor-pointer"
                >
                  <Icon size={14} />
                </div>
              ),
            )}
          </div>
        </div>

        <FooterLinks
          title="About"
          links={[
            "About Us",
            "Terms & Conditions",
            "Contact Us",
            "Privacy Policy",
          ]}
        />

        <FooterLinks
          title="My Account"
          links={["Your Account", "Return Policies", "Wishlist"]}
        />

        <FooterLinks
          title="Categories"
          links={[
            "Healthcare",
            "Fashion",
            "Organic",
            "Beauty",
            "Groceries",
            "Fashion",
          ]}
        />

        <div>
          <h3 className="text-lg font-semibold mb-4 border-b border-gray-500 pb-2">
            Contact Information's
          </h3>

          <ul className="space-y-4 text-sm">
            <li className="flex gap-3">
              <FaMapMarkerAlt size={40} />
              SY.NO, -74. PLOT-12 GR FLR ROYAL IND SOCIETY. BHARI MATA ROAD.
              TUNKI, FULWADI . SURAT. 395004
            </li>

            <li className="flex gap-3">
              <FaPhoneAlt />
              (239) 555-0108
            </li>

            <li className="flex gap-3">
              <FaEnvelope />
              newsteps452@gmail.com
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-black text-center pb-5 text-sm">
        2026 Copyright By Themeforest Powered By Createux
      </div>
    </footer>
  );
}

function FooterLinks({ title, links }) {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4 border-b border-gray-500 pb-2">
        {title}
      </h3>
      <ul className="space-y-3 text-sm">
        {links.map((item, index) => (
          <li key={index} className="w-full  cursor-pointer ">
            <span className="relative inline-block group">
              {item}
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition"></span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
