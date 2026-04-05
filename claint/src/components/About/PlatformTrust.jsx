import React from "react";
import { CheckCircle } from "lucide-react";
import flipcart from '/images/flipcart.png'
import meshoo from '/images/meshoo.png'
import myntra from '/images/myntra.png'
import firtcry from '/images/firstcry.png'
import ajio from '/images/ajio.png'

const PlatformTrust = () => {
  const platforms = [
    {
      name: "Flipkart",
      desc: "Available on Flipkart with trusted delivery and easy returns",
      logo: flipcart,
    },
    {
        name: "Meesho",
        desc: "Affordable deals and fast shipping on Meesho",
        logo: meshoo,
    },
    {
      name: "Myntra",
      desc: "Stylish kids footwear available on Myntra",
      logo: myntra,
    },
    {
      name: "FirstCry",
      desc: "Trusted by parents on FirstCry platform",
      logo: firtcry,
    },
     {
      name: "Ajio",
      desc: "Trusted by parents on Ajio platform",
      logo: ajio,
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-900">
            Available On Trusted Platforms
          </h2>
          <p className="text-gray-500 text-sm mt-2">
            Shop New Steps from your favorite marketplaces
          </p>
        </div>

    <div className="flex flex-wrap justify-center gap-6">
  {platforms.map((item, index) => (
    
    <a href="/"
      key={index}
      className="w-full sm:w-[48%] md:w-[30%] lg:w-[18%] border border-gray-200 rounded-xl p-6 hover:shadow-md transition"
    >
      <div className="flex items-center gap-4 mb-4">
        <img
          src={item.logo}
          alt={item.name}
          className="w-12 h-12 object-contain"
        />

        <div>
          <h4 className="text-sm font-semibold text-gray-900">
            {item.name}
          </h4>
          <div className="flex items-center gap-1 text-green-500 text-xs">
            <CheckCircle size={14} />
            Verified Platform
          </div>
        </div>
      </div>

      <p className="text-gray-600 text-sm">
        {item.desc}
      </p>
    </a>
  ))}
</div>

      </div>
    </section>
  );
};

export default PlatformTrust;