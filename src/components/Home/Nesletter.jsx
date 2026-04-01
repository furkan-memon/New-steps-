import { FaEnvelope } from "react-icons/fa";
import React, { useState } from 'react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
    
    const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Subscribing with:", email);
    alert(`Thank you for subscribing, ${email}!`);
  };
  return (
    <section className="relative  bg-[#145F5F] mt-24">

      <div className="absolute w-[500px] mt-5 lg:mt-0 lg:before:content-['']
    lg:before:absolute
    lg:before:-bottom-[112px]
    lg:before:-left-25
    lg:before:w-[145px]
    lg:before:h-[100%]
    lg:before:bg-[url('/images/shape.png')]
    lg:before:bg-contain
    lg:before:bg-no-repeat 
     lg:after:content-['']
  lg:after:absolute
  lg:after:-bottom-[92px]
  lg:after:-right-33
  lg:after:w-[145px]
  lg:after:h-[100%]
  lg:after:bg-[url('/images/imagecopy.png')]
  lg:after:bg-contain
  lg:after:bg-no-repeat

  -top-[118px] left-1/2 -translate-x-1/2 lg:bg-white px-12  pt-5 pb-1 text-center">
       <div className="max-w-2xl mx-auto pb-3 px-15  flex justify-center items-center flex-col bg-white rounded-b-[2rem]">
         <h2 className="text-[20px] font-medium text-gray-800 mb-4">
          Subscribe to our newsletter
        </h2>
        <p className="text-gray-500 mb-7 text-[10px]">
          Stay updated! Subscribe to our mailing list for news, updates, and exclusive offers.
        </p>
          <form onSubmit={handleSubmit} className="relative max-w-lg mx-auto">
          <div className="flex items-center border border-gray-200 rounded-full p-1.5 shadow-sm focus-within:ring-2 focus-within:ring-teal-500 transition-all">
            <span className="pl-4 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </span>
            
            <input 
              type="email" 
              placeholder="Enter your email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-3 pr-4 py-1 bg-transparent outline-none text-gray-700 placeholder-gray-400"
              required
            />
            
            <button 
              type="submit" 
              className="bg-[#0e766e] hover:bg-[#0b5e58] text-white font-semibold py-1.5 px-6 rounded-full transition-colors"
            >
              Subscribe
            </button>
          </div>
        </form>

        </div>
      </div>

      <div className="h-56"></div>

    </section>
  );
}




