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

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for subscribing, ${email}!`);
  };

  return (
    <footer className="relative bg-[#0F5E5E] text-gray-200 mt-50 pt-30">

      <div className="absolute 
      lg:before:content-['']
    lg:before:absolute
    lg:before:-bottom-30
    lg:before:-left-20
    lg:before:w-[145px]
    lg:before:h-[100%]
    lg:before:bg-[url('/images/shape.png')]
    lg:before:bg-contain
    lg:before:bg-no-repeat 
     lg:after:content-['']
  lg:after:absolute
  lg:after:-bottom-26
  lg:after:-right-20
  lg:after:w-[145px]
  lg:after:h-[100%]
  lg:after:bg-[url('/images/imagecopy.png')]
  lg:after:bg-contain
  lg:after:bg-no-repeat
     top-0 md:-top-3 left-1/2 -translate-x-1/2 md:-translate-y-1/2 -translate-y-55 w-full max-w-5xl lg:max-w-3xl px-6">
        <div className="bg-white md:rounded-b-[40px]  text-center py-10 px-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Subscribe to our newsletter
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Stay updated! Subscribe to our mailing list for news, updates, and exclusive offers.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex items-center border border-gray-200 rounded-full p-1.5 shadow-sm focus-within:ring-2 focus-within:ring-teal-500">
              <span className="pl-4 text-gray-400">
                <FaEnvelope />
              </span>

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-3 py-2 bg-transparent outline-none text-gray-700"
                required
              />

              <button
                type="submit"
                className="bg-[#0e766e] hover:bg-[#0b5e58] text-white px-6 py-2 rounded-full text-sm transition"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16">

        <div>
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">
            Sellzy
          </h2>

          <p className="text-sm leading-6 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
              )
            )}
          </div>

          <p className="text-sm mb-3">Download Our App:</p>

          <div className="flex gap-3">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              className="h-10"
            />
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              className="h-10"
            />
          </div>
        </div>

        <FooterLinks
          title="About"
          links={[
            "About Us",
            "Terms & Conditions",
            "Careers",
            "Latest News",
            "Contact Us",
            "Privacy Policy",
          ]}
        />

        <FooterLinks
          title="My Account"
          links={[
            "Your Account",
            "Return Policies",
            "Become a Vendor",
            "Wishlist",
            "Affiliate Program",
            "FAQs",
          ]}
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
              <FaMapMarkerAlt className="text-yellow-400 mt-1" />
              2715 Ash Dr. San Jose, South Dakota 83475
            </li>

            <li className="flex gap-3">
              <FaPhoneAlt className="text-yellow-400" />
              (239) 555-0108
            </li>

            <li className="flex gap-3">
              <FaEnvelope className="text-yellow-400" />
              sara.cruz@example.com
            </li>

            <li className="flex gap-3">
              <FaPrint className="text-yellow-400" />
              sara.cruz@example.com
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-[#0C4F4F] text-center py-6 text-sm">
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
        {links.map((item, i) => (
          <li key={i} className="hover:text-yellow-400 cursor-pointer transition">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}