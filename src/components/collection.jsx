import { useState } from "react";
import ProductCard  from "./Home/ProductCard";
const products = [
  {
    id: 1,
    name: "Kids Blue Casual Sneakers",
    price: 1299,
    oldPrice: 1999,
    brand: "NEW STEPS",
    img: "/images/p1.jpg",
    img2: "/images/p1-2.jpg",
    discount: "30% Off",
  },
  {
    id: 2,
    name: "Kids Light-Up Sport Shoes",
    price: 1499,
    oldPrice: 2299,
    brand: "NEW STEPS",
    img: "/images/p2.jpg",
    img2: "/images/p2-2.jpg",
    discount: "35% Off",
  },
  {
    id: 3,
    name: "Comfort Strap School Shoes",
    price: 999,
    oldPrice: 1499,
    brand: "NEW STEPS",
    img: "/images/p3.jpg",
    img2: "/images/p3-2.jpg",
    discount: "25% Off",
  },
  {
    id: 4,
    name: "Kids High Top Sneakers",
    price: 1399,
    oldPrice: 1999,
    brand: "NEW STEPS",
    img: "/images/p4.jpg",
    img2: "/images/p4-2.jpg",
    discount: "30% Off",
  },
  {
    id: 5,
    name: "Boys Running Sports Shoes",
    price: 1199,
    oldPrice: 1799,
    brand: "NEW STEPS",
    img: "/images/p5.jpg",
    img2: "/images/p5-2.jpg",
    discount: "28% Off",
  },
  {
    id: 6,
    name: "Girls Stylish Casual Shoes",
    price: 1099,
    oldPrice: 1699,
    brand: "NEW STEPS",
    img: "/images/p6.jpg",
    img2: "/images/p6-2.jpg",
    discount: "25% Off",
  },
  {
    id: 7,
    name: "Kids Velcro Comfort Shoes",
    price: 899,
    oldPrice: 1299,
    brand: "NEW STEPS",
    img: "/images/p7.jpg",
    img2: "/images/p7-2.jpg",
    discount: "20% Off",
  },
  {
    id: 8,
    name: "Lightweight Daily Wear Shoes",
    price: 999,
    oldPrice: 1499,
    brand: "NEW STEPS",
    img: "/images/p8.jpg",
    img2: "/images/p8-2.jpg",
    discount: "25% Off",
  },
  {
    id: 9,
    name: "Kids Trendy Designer Sneakers",
    price: 1599,
    oldPrice: 2399,
    brand: "NEW STEPS",
    img: "/images/p9.jpg",
    img2: "/images/p9-2.jpg",
    discount: "33% Off",
  },
  {
    id: 10,
    name: "Kids Premium Sports Shoes",
    price: 1799,
    oldPrice: 2599,
    brand: "NEW STEPS",
    img: "/images/p10.jpg",
    img2: "/images/p10-2.jpg",
    discount: "30% Off",
  },
];


export default function Collection() {
  return (
    <section className=" py-6">

      <div className="max-w-7xl mx-auto px-4 flex gap-6">

        {/* LEFT FILTER */}
        <div className="w-[260px] hidden lg:block">

          <div className="bg-white p-5 rounded-lg border">

            <div className="flex justify-between mb-4">
              <h3 className="font-semibold">Filter</h3>
              <button className="text-sm text-gray-500">Remove all</button>
            </div>

            {/* Availability */}
            <div className="mb-5">
              <h4 className="font-medium mb-2">Availability</h4>

              <label className="flex items-center gap-2 text-sm mb-2">
                <input type="checkbox" />
                In stock (9)
              </label>

              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" />
                Out of stock (23)
              </label>
            </div>

            {/* Other Filters */}
            {["Price", "Gender", "Color", "Size", "Brand"].map((item, i) => (
              <div key={i} className="border-t py-3 text-sm">
                {item}
              </div>
            ))}

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex-1">

          {/* Top Bar */}
          <div className="flex justify-between items-center mb-4">
            <p className="text-sm text-gray-500">
              Showing 9 of 23 products
            </p>

            <select className="text-sm border px-3 py-2 rounded-md">
              <option>Best selling</option>
              <option>Price low to high</option>
              <option>Price high to low</option>
            </select>
          </div>

          {/* PRODUCT GRID */}
       <div className="flex flex-wrap gap-4">

  <ProductCard products={products} showButton={true} />

</div>

        </div>

      </div>

    </section>
  );
}