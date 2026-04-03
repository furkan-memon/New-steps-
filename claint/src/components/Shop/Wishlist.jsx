import { useState } from "react";
import { Star, Trash2, ShoppingCart, Minus, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import img1 from '../../assets/images/ground-nuts-oil.png'
import img2 from '../../assets/images/bp-machine.png'
import img3 from '../../assets/images/vitamin-c-2.png'

const productsData = [
  {
    id: 1,
    name: "Veggie Bloom Tomatoes",
    category: "Healthcare",
    stock: "2 In Stock",
    price: 27.49,
    oldPrice: 29.95,
    img: img1,
    qty: 1,
  },
  {
    id: 2,
    name: "Veggie Bloom Tomatoes",
    category: "Healthcare",
    stock: "2 In Stock",
    price: 27.49,
    oldPrice: 29.95,
    img: img2,
    qty: 1,
  },
  {
    id: 3,
    name: "Veggie Bloom Tomatoes",
    category: "Healthcare",
    stock: "2 In Stock",
    price: 27.49,
    oldPrice: 29.95,
    img: img3,
    qty: 1,
  },
];

export default function Wishlist() {
  const [products, setProducts] = useState(productsData);
  const [selected, setSelected] = useState([1, 2]); 

  const toggleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const increase = (id) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, qty: p.qty + 1 } : p))
    );
  };

  const decrease = (id) => {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === id && p.qty > 1 ? { ...p, qty: p.qty - 1 } : p
      )
    );
  };

  const removeItem = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white font-sans">
      <div className="flex items-center text-sm text-gray-400 mb-8">
        <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 11.9896V14.5C3 17.7998 3 19.4497 4.02513 20.4749C5.05025 21.5 6.70017 21.5 10 21.5H14C17.2998 21.5 18.9497 21.5 19.9749 20.4749C21 19.4497 21 17.7998 21 14.5V11.9896C21 10.3083 21 9.46773 20.6441 8.74005C20.2882 8.01237 19.6247 7.49628 18.2976 6.46411L16.2976 4.90855C14.2331 3.30285 13.2009 2.5 12 2.5C10.7991 2.5 9.76689 3.30285 7.70242 4.90855L5.70241 6.46411C4.37533 7.49628 3.71179 8.01237 3.3559 8.74005C3 9.46773 3 10.3083 3 11.9896Z" />
          <path d="M15.0002 17C14.2007 17.6224 13.1504 18 12.0002 18C10.8499 18 9.79971 17.6224 9.00018 17" />
        </svg>
        <Link to="/" className="hover:text-teal-600 transition-colors">Home</Link>
        <span className="mx-2 opacity-50">•</span>
        <span className="text-gray-400">Blog page</span>
      </div>

      <div className="flex justify-between items-end mb-8">
        <h2 className="text-3xl font-bold text-gray-800 tracking-tight">Product Wishlist</h2>
        <div className="flex items-center gap-6">
          <span className="text-sm font-medium text-gray-600">
            {selected.length} items is selected
          </span>
          <button className="flex items-center gap-2 bg-[#008080] text-white px-7 py-3 rounded-full hover:bg-[#006666] transition-all shadow-md font-semibold">
            <ShoppingCart size={18} />
            Add to Cart
          </button>
        </div>
      </div>

      <div className="border border-gray-100 rounded-[20px] overflow-hidden shadow-sm">
        <div className="grid grid-cols-[50px_2fr_1fr_1fr_1.2fr_2fr_50px] bg-[#F8F9FB] px-6 py-4 text-[13px] font-bold text-gray-500 uppercase tracking-wider items-center">
          <div className="flex justify-center">
             <input type="checkbox" className="w-4 h-4 rounded border-gray-300 accent-[#008080]" />
          </div>
          <div className="pl-4">Product</div>
          <div className="text-center">Stock Status</div>
          <div className="text-center">Price</div>
          <div className="text-center">Quantity</div>
          <div className="text-center">Buy Action</div>
          <div className="text-right">Remove</div>
        </div>

        <div className="divide-y divide-gray-100">
          {products.map((p) => (
            <div key={p.id} className="grid grid-cols-[50px_2fr_1fr_1fr_1.2fr_2fr_50px] items-center px-6 py-6 hover:bg-gray-50/50 transition-colors">
              <div className="flex justify-center">
                <input
                  type="checkbox"
                  checked={selected.includes(p.id)}
                  onChange={() => toggleSelect(p.id)}
                  className="w-4 h-4 rounded border-gray-300 accent-[#008080] cursor-pointer"
                />
              </div>

              <div className="flex items-center gap-5 pl-4">
                <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center p-2">
                  <img src={p.img} alt={p.name} className="w-full h-full object-contain" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-[15px]">{p.name}</h4>
                  <p className="text-[13px] text-[#008080] font-medium mb-1">{p.category}</p>
                  <div className="flex items-center gap-0.5">
                    {[...Array(4)].map((_, i) => (
                      <Star key={i} size={14} className="fill-[#FFB800] text-[#FFB800]" />
                    ))}
                    <Star size={14} className="text-gray-200 fill-gray-200" />
                    <span className="text-[11px] text-gray-400 ml-1 font-medium">(118)</span>
                  </div>
                </div>
              </div>

              <div className="text-center text-[14px] font-bold text-gray-700">
                {p.stock}
              </div>

              <div className="text-center">
                <div className="font-bold text-gray-800 text-[16px]">${p.price}</div>
                <div className="text-gray-300 line-through text-[13px] font-medium">${p.oldPrice}</div>
              </div>

              <div className="flex justify-center">
                <div className="flex items-center border border-gray-200 rounded-full px-3 py-1.5 bg-white shadow-sm">
                  <button onClick={() => decrease(p.id)} className="text-gray-400 hover:text-gray-600 transition-colors">
                    <Minus size={14} />
                  </button>
                  <span className="px-4 text-[14px] font-bold text-gray-700 min-w-[30px] text-center">{p.qty}</span>
                  <button onClick={() => increase(p.id)} className="text-gray-400 hover:text-gray-600 transition-colors">
                    <Plus size={14} />
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-center gap-3">
                <button className="bg-[#FFB800] hover:bg-[#eab308] text-gray-900 px-6 py-2.5 rounded-full text-[13px] font-bold transition-all shadow-sm">
                  Buy Now
                </button>
                <button className="flex items-center gap-2 bg-[#008080] text-white px-5 py-2.5 rounded-full text-[13px] font-bold hover:bg-[#006666] transition-all shadow-sm">
                  <ShoppingCart size={16} />
                  Add To Cart
                </button>
              </div>

              <div className="flex justify-end">
                <Trash2
                  size={20}
                  className="text-gray-300 cursor-pointer hover:text-red-500 transition-colors pr-1"
                  onClick={() => removeItem(p.id)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}