import React from "react";
import { CheckCircle } from "lucide-react";
import firtcry from "/images/firstcry.png";
import ajio from "/images/ajio.png";

const PlatformTrust = () => {
  const platforms = [
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
    <section className="py-14 bg-white">
      <div className="container mx-auto px-6">

        {/* Heading */}
         <div className="flex flex-col md:flex-row justify-between items-center mb-12 border-b pb-6">

          <h2 className="text-3xl font-semibold text-gray-900">
                       Available On Trusted Platforms

          </h2>

          <p className="text-gray-500 text-sm mt-3 md:mt-0">
            Shop New Steps from your favorite marketplaces
          </p>

        </div>
      

        {/* Cards */}
        <div className="flex  gap-8 flex-wrap">

          {platforms.map((item, index) => (
            <a
              href="/"
              key={index}
              className="w-full sm:w-[320px] border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition duration-300"
            >
              <div className="flex items-center gap-5 mb-5">

                <img
                  src={item.logo}
                  alt={item.name}
                  className="w-14 h-14 object-contain"
                />

                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    {item.name}
                  </h4>

                  <div className="flex items-center gap-1 text-green-500 text-sm mt-1">
                    <CheckCircle size={16} />
                    Verified Platform
                  </div>
                </div>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed">
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