import { Minus, Plus, Trash2, Pencil, X } from "lucide-react";
import { useState } from "react";
// Assuming your image imports remain the same
import image1 from "../../../assets/images/product-image-1.png";
import image2 from "../../../assets/images/product-image-2.png";
import image3 from "../../../assets/images/product-image-3.png";

export default function CartPanel() {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Fresh Bask Basket Fruits",
      price: 27.49,
      oldPrice: 39.99,
      img: image1,
      qty: 1,
      stock: false,
    },
    {
      id: 2,
      name: "Fresh Bask Basket Fruits",
      price: 27.49,
      oldPrice: 39.99,
      img: image2,
      qty: 1,
      stock: true,
    },
    {
      id: 3,
      name: "Fresh Bask Basket Fruits",
      price: 27.49,
      oldPrice: 39.99,
      img: image3,
      qty: 1,
      stock: true,
    },
     {
      id: 3,
      name: "Fresh Bask Basket Fruits",
      price: 27.49,
      oldPrice: 39.99,
      img: image3,
      qty: 1,
      stock: true,
    }, {
      id: 3,
      name: "Fresh Bask Basket Fruits",
      price: 27.49,
      oldPrice: 39.99,
      img: image3,
      qty: 1,
      stock: true,
    },
  ]);

  const increase = (id) =>
    setCart((prev) => prev.map((item) => (item.id === id ? { ...item, qty: item.qty + 1 } : item)));

  const decrease = (id) =>
    setCart((prev) =>
      prev.map((item) => (item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item))
    );

  const remove = (id) => setCart((prev) => prev.filter((item) => item.id !== id));

  const subtotal = cart.reduce((t, i) => t + i.price * i.qty, 0);

  return (
    <div className="w-[450px] flex flex-col bg-white border border-gray-100 rounded-3xl shadow-xl h-[700px] overflow-hidden">
     

      <div className="h-[1px] bg-gray-100 mx-6" />

      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
        {cart.map((item) => (
          <div key={item.id} className="flex gap-4 border border-gray-100 rounded-[24px] p-4 relative bg-white">
            <div className="relative w-24 h-24 bg-gray-50 rounded-2xl flex items-center justify-center p-2">
              {!item.stock && (
                <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px] flex items-center justify-center rounded-2xl overflow-hidden">
                  <div className="bg-rose-500 text-white text-[10px] font-black py-1 w-full text-center uppercase tracking-tighter">
                    Out of Stock
                  </div>
                </div>
              )}
              <img src={item.img} alt={item.name} className="w-full h-full object-contain" />
            </div>

            <div className="flex-1 flex flex-col justify-between py-1">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-bold text-gray-800 text-[15px] leading-tight">{item.name}</h4>
                  <p className="text-[12px] text-gray-400 font-medium mt-1">Color: Black, Size: 250 ML</p>
                </div>
                <div className="flex gap-2 text-gray-400">
                  <Pencil size={18} className="cursor-pointer hover:text-blue-500 transition-colors" />
                  <Trash2 size={18} className="cursor-pointer hover:text-rose-500 transition-colors" onClick={() => remove(item.id)} />
                </div>
              </div>

              <div className="flex justify-between items-center mt-2">
                <div className="flex items-center gap-2">
                  <span className="text-[16px] font-bold text-gray-900">${item.price}</span>
                  <span className="text-[13px] line-through text-gray-300 font-semibold">${item.oldPrice}</span>
                </div>

                <div className="flex items-center border border-gray-200 rounded-full px-1 py-1 shadow-sm">
                  <button onClick={() => decrease(item.id)} className="p-1 hover:bg-gray-50 rounded-full group">
                    <Minus size={16} strokeWidth={3} className="text-gray-400 group-hover:text-gray-600" />
                  </button>
                  <span className="px-3 text-sm font-bold text-gray-800">{item.qty}</span>
                  <button onClick={() => increase(item.id)} className="p-1 hover:bg-gray-50 rounded-full group">
                    <Plus size={16} strokeWidth={3} className="text-gray-400 group-hover:text-gray-600" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

         <div className="sticky bottom-40 p-6 border-t border-gray-100 bg-white">
        <div className="flex justify-between items-center mb-6">
          <span className="font-bold text-gray-800 text-lg">Subtotal</span>
          <span className="font-black text-gray-900 text-xl">${subtotal.toFixed(2)}</span>
        </div>

        <div className="flex gap-4">
          <button className="flex-1 border-2 border-gray-100 text-gray-800 font-bold py-4 rounded-[18px] hover:bg-gray-50 transition-all">
            View Cart
          </button>
          <button className="flex-1 bg-[#00796B] text-white font-bold py-4 rounded-[18px] shadow-lg shadow-teal-900/20 hover:bg-[#00695C] transition-all">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}