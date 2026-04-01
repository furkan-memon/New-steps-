import React from "react";
import Merck from "../../assets/images/merck.png";
import Norton from "../../assets/images/norton.png";
import Abbott from "../../assets/images/abbott.png";
import Davita from "../../assets/images/davita.png";

const ShopByBrands = () => {
  const brands = [
    { name: "Merck", img: Merck },
    { name: "Norton Healthcare", img: Norton},
    { name: "Abbott", img: Abbott },
    { name: "Davita Kidney Care", img: Davita },
    { name: "Merck", img: Merck },
    { name: "Abbott", img: Abbott },
    { name: "Abbott", img:Abbott },
    { name: "Davita Kidney Care", img: Davita },
    { name: "Merck", img:Merck },
    { name: "Abbott", img: Abbott },
    { name: "Davita Kidney Care", img: Davita },
    { name: "Norton Healthcare", img: Norton },
  ];

  return (
    <section className=" py-5">
      <div className="max-w-[1400px] mx-auto px-6">

        <h2 className="text-center text-xl md:text-2xl font-semibold text-gray-900 mb-10">
          Shop By Brands
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 h-[90px] flex items-center justify-center cursor-pointer"
            >
              <img
                src={brand.img}
                alt={brand.name}
                className="h-20 object-contain opacity-80 hover:opacity-100 transition"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ShopByBrands;