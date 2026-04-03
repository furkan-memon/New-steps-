import React, { useState } from "react";
import {
  ShoppingCart,
  Heart,
  Eye,
  RefreshCw,
} from "lucide-react";
import { Link } from "react-router-dom";

const ProductCard = ({ products }) => {
  const [liked, setLiked] = useState({});
  const toggleLike = (index) => {
  setLiked((prev) => ({
    ...prev,
    [index]: !prev[index],
  }));
};
  return (
    <>
      {products.map((product, index) => (
      <Link to='/product-details'>
        <div
          key={index}
          className="min-w-[280px]  group relative hover:scale-102 py-3 bg-white rounded-2xl  flex flex-col justify-between   transition-all duration-300  "
        >
          {/* IMAGE */}
          <div className="relative w-full h-[300px] rounded-xl bg-gray-50 flex items-center justify-center overflow-hidden">
            <img
              src={product.img}
              alt={product.name}
              className="absolute w-full h-full object-cover transition-all duration-500 group-hover:opacity-0 group-hover:scale-105"
            />

            {/* HOVER IMAGE */}
            <img
              src={product.img2}
              alt={product.name}
              className="absolute w-full h-full object-contain opacity-0 scale-95 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100"
            />

            {/* DISCOUNT BADGE */}
            <span className="absolute top-3 left-3 bg-black text-white text-xs px-2 py-1 rounded-md">
              {product.discount || "NEW"}
            </span>

            {/* QUICK ACTIONS */}
            <div className="absolute right-2 top-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition">
              <button
  onClick={(e) => {
    e.preventDefault(); // prevent Link navigation
    toggleLike(index);
  }}
  className="p-2 bg-white rounded-full shadow hover:bg-pink-50 transition"
>
  <Heart
    size={16}
    className={`transition ${
      liked[index] ? "fill-pink-500 text-pink-500" : "text-gray-600"
    }`}
  />
</button>
            </div>
          </div>

          {/* CONTENT */}
          <div className="mt-4">
            {/* BRAND */}
            <span className="text-xs text-gray-500 uppercase tracking-wide">
              {product.brand}
            </span>

            {/* NAME */}
            <h3 className="text-sm font-semibold text-gray-800 mt-1 line-clamp-2">
              {product.name}
            </h3>

            {/* PRICE */}
            <div className="flex items-center gap-2 mt-2">
              <span className="text-lg font-bold text-gray-900">
                ₹{product.price}
              </span>
              <span className="text-sm text-gray-400 line-through">
                ₹{product.oldPrice}
              </span>
            </div>

            {/* BUTTON */}
            <button className="mt-4 w-full bg-black text-white py-2.5 rounded-xl flex items-center justify-center gap-2 text-sm font-medium  transition">
              <ShoppingCart size={16} />
              Add to Cart
            </button>
          </div>
        </div>
      </Link>

      ))}
    </>
  );
};


export default ProductCard
//       // <div
//       //   key={index}
//       //   className="min-w-[280px]  group relative  bg-white rounded-2xl p-5 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
//       // >
// import React from "react";

// const ProductCard = ({ product }) => {
//   return (
//     <div className="w-[260px] bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition">

//       {/* IMAGE */}
//       <div className="relative bg-red-500 rounded-2xl overflow-hidden">
//         <img
//           src={product.img}
//           alt={product.name}
//           className="w-full h-[260px] object-cover"
//         />

//         {/* DISCOUNT BADGE */}
//         <span className="absolute top-3 left-3 bg-green-600 text-white text-xs px-3 py-1 rounded-md font-semibold">
//           {product.discount}
//         </span>
//       </div>

//       {/* CONTENT */}
//       <div className="p-4">

//         {/* BRAND */}
//         <span className="inline-block text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-md mb-2">
//           {product.brand}
//         </span>

//         {/* TITLE */}
//         <h3 className="text-sm text-gray-700 font-medium mb-2 leading-snug">
//           {product.name}
//         </h3>

//         {/* PRICE */}
//         <div className="mb-4">
//           <div className="flex items-center gap-2">
//             <span className="text-lg font-semibold text-gray-900">
//               Rs. {product.price}
//             </span>
//             <span className="text-lg font-bold text-gray-500">
//               MRP
//             </span>
//           </div>

//           <span className="text-sm text-gray-400 line-through">
//             Rs. {product.oldPrice}
//           </span>
//         </div>

//         {/* BUTTON */}
//         <button className="w-full bg-black text-white py-3 rounded-xl font-medium hover:bg-gray-900 transition">
//           Choose options
//         </button>

//       </div>
//     </div>
//   );
// };

// export default ProductCard;