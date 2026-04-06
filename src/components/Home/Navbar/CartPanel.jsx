import { Minus, Plus, Trash2 } from "lucide-react";
import { useState } from "react";
import image1 from "../../../assets/images/product-image-1.png";
import image2 from "../../../assets/images/product-image-2.png";

export default function CartPanel() {
  const [cart, setCart] = useState([
    { id: 1, name: "Men Black Shoes", price: 10499, img: image1, qty: 1 },
    { id: 2, name: "Women Flats", price: 1899, img: image2, qty: 1 },
  ]);

  const increase = (id) =>
    setCart((p) => p.map((i) => (i.id === id ? { ...i, qty: i.qty + 1 } : i)));

  const decrease = (id) =>
    setCart((p) =>
      p.map((i) =>
        i.id === id && i.qty > 1 ? { ...i, qty: i.qty - 1 } : i
      )
    );

  const remove = (id) =>
    setCart((p) => p.filter((i) => i.id !== id));

  const total = cart.reduce((t, i) => t + i.price * i.qty, 0);

  return (
    <div className="flex relative flex-col h-screen">

      {/* ITEMS */}
      <div className="flex-1 overflow-y-auto p-5 space-y-5">

        {cart.map((item) => (
          <div key={item.id} className="flex gap-4">

            <img
              src={item.img}
              className="w-20 h-20 object-cover border rounded"
            />

            <div className="flex-1">
              <div className="flex justify-between">
                <h4 className="text-sm">{item.name}</h4>
                <span className="font-semibold">₹{item.price}</span>
              </div>

              <div className="flex items-center gap-3 mt-3">

                <div className="flex border rounded">
                  <button onClick={() => decrease(item.id)} className="px-2">
                    <Minus size={14} />
                  </button>

                  <span className="px-3">{item.qty}</span>

                  <button onClick={() => increase(item.id)} className="px-2">
                    <Plus size={14} />
                  </button>
                </div>

                <Trash2
                  size={16}
                  className="cursor-pointer text-gray-500 hover:text-red-500"
                  onClick={() => remove(item.id)}
                />
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* FOOTER */}
      <div className="border-t p-5 bg-white sticky bottom-0">
        <div className="flex justify-between mb-3">
          <span>Total</span>
          <span className="font-semibold">₹{total}</span>
        </div>

        <button className="w-full bg-black text-white active:scale-98 py-3 rounded">
          Checkout
        </button>
      </div>
    </div>
  );
}