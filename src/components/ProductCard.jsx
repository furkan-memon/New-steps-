import React, { useState } from "react";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const [liked, setLiked] = useState(false);

  if (!product) return null;

  return (
    <div 
      // Removed opacity-0 and the useEffect internal animation
      className="product-card-gsap min-w-[280px] md:min-w-[320px] snap-start mb-10 will-change-transform"
    >
      <Link to="/product-details" className="group block">
        {/* --- IMAGE CONTAINER --- */}
        <div className="relative aspect-[4/5] bg-[#f9f9f9] overflow-hidden border border-gray-50">
          <img
            src={product.img}
            alt={product.name}
            className="h-full w-full object-cover grayscale-[15%] transition-transform duration-1000 ease-out group-hover:scale-110 group-hover:grayscale-0"
          />
          
          <button
            onClick={(e) => {
              e.preventDefault();
              setLiked(!liked);
            }}
            className="absolute top-4 right-4 z-10 p-2 bg-white/40 backdrop-blur-xl rounded-full transition-all hover:bg-black hover:text-white"
          >
            <Heart
              size={16}
              className={liked ? "fill-current text-black" : "text-black"}
            />
          </button>

          <div className="absolute inset-x-0 bottom-0 translate-y-full bg-black py-4 text-center transition-transform duration-500 ease-in-out group-hover:translate-y-0">
            <span className="text-white text-[10px] tracking-[0.5em] font-black uppercase italic">
              View Selection
            </span>
          </div>
        </div>

        {/* --- DETAILS --- */}
        <div className="mt-6 space-y-1 text-left px-1">
          <h3 className="text-[9px] font-black tracking-[0.4em] text-gray-300 uppercase">
            {product.brand}
          </h3>
          <h2 className="text-sm font-medium text-black line-clamp-1 tracking-tight">
            {product.name}
          </h2>
          <div className="flex items-center gap-3 pt-1">
            <span className="text-sm font-black">₹{product.price.toLocaleString()}</span>
            {product.oldPrice && (
              <span className="text-xs text-gray-300 line-through italic font-medium">
                ₹{product.oldPrice.toLocaleString()}
              </span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;