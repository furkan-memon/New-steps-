import React from 'react'
import {

  ShoppingCart,
  Heart,
  Eye,
  RefreshCw,
} from "lucide-react";
const ProductCard = ({products}) => {
   
    
  return (
   <>
   {products.map((product, index) => (
  <div
    key={index}
    className="min-w-[280px] h-[460px] bg-white rounded-2xl p-5 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
  >
    <div className="relative h-[200px] rounded-xl bg-[#FCE4EC] flex items-center justify-center overflow-hidden">
      <img
        src={product.img}
        alt={product.name}
        className="h-[150px] object-contain transition-transform duration-500 group-hover:scale-105"
      />
    </div>

    <div className="mt-4 flex flex-col flex-grow">

      <h3 className="text-sm font-semibold text-gray-900 mb-2 leading-snug line-clamp-2">
        {product.name}
      </h3>

      <div className="flex items-center gap-2 mb-3">
        <span className="text-lg font-bold text-[#00796B]">
          ${product.price}
        </span>
        <span className="text-sm text-gray-400 line-through">
          ${product.oldPrice}
        </span>
        <span className="text-xs font-bold text-[#E91E63]">
          {product.discount}
        </span>
      </div>

      <div className="mt-auto">
        <div className="flex justify-between text-xs text-gray-500 mb-1">
          <span>Sold: {product.sold}</span>
          <span>Available: {product.available}</span>
        </div>

        <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden mb-4">
          <div
            className="h-full bg-[#FFB300] rounded-full"
            style={{
              width: `${(product.sold / product.available) * 100}%`,
            }}
          />
        </div>

        <div className="flex items-center gap-3">
          <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 hover:bg-[#FCE4EC] hover:text-[#E91E63] transition">
            <Heart size={18} />
          </button>

          <button className="flex-1 bg-[#00796B] text-white py-2 rounded-full flex items-center justify-center gap-2 font-semibold text-sm hover:bg-[#00695C] transition">
            <ShoppingCart size={18} />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </div>
))}
   </>
  )
}

export default ProductCard