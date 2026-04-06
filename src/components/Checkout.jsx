import React from "react";

export default function Checkout() {
  return (
    <section className="min-h-screen bg-gray-50">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 p-6">

        {/* LEFT SIDE */}
        <div className="space-y-6">

          <h2 className="text-2xl font-semibold">Contact & Shipping</h2>

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            className="w-full border rounded-md p-3"
          />

          {/* Country */}
          <select className="w-full border rounded-md p-3">
            <option>India</option>
          </select>

          {/* Name */}
          <div className="flex gap-4">
            <input className="w-full border p-3 rounded-md" placeholder="First name" />
            <input className="w-full border p-3 rounded-md" placeholder="Last name" />
          </div>

          {/* Address */}
          <input className="w-full border p-3 rounded-md" placeholder="Address" />
          <input className="w-full border p-3 rounded-md" placeholder="Apartment (optional)" />

          {/* City State */}
          <div className="flex gap-4">
            <input className="w-full border p-3 rounded-md" placeholder="City" />
            <input className="w-full border p-3 rounded-md" placeholder="State" />
            <input className="w-full border p-3 rounded-md" placeholder="PIN code" />
          </div>

          <input className="w-full border p-3 rounded-md" placeholder="Phone" />

          {/* Payment */}
          <div>
            <h3 className="font-semibold mt-6 mb-3">Payment</h3>

            <div className="border rounded-md p-4 space-y-3">

              <label className="flex items-center gap-2">
                <input type="radio" checked />
                Razorpay (UPI, Cards, Wallets)
              </label>

              <label className="flex items-center gap-2">
                <input type="radio" />
                Cash on Delivery
              </label>

            </div>
          </div>

          {/* Button */}
          <button className="w-full bg-black text-white py-4 rounded-md mt-6">
            Pay now
          </button>

        </div>

        {/* RIGHT SIDE */}
        <div className="bg-white p-6 rounded-lg border h-fit">

          {/* Product */}
          <div className="flex gap-4 border-b pb-4">

            <img
              src="/images/product-image-1.png"
              className="w-16 h-16 object-cover rounded"
            />

            <div className="flex-1">
              <h4 className="text-sm">
                Women White Embellished Open Toe Flats
              </h4>
              <p className="text-xs text-gray-500">White / 36</p>
            </div>

            <span className="font-semibold">₹1,899</span>
          </div>

          {/* Discount */}
          <div className="flex gap-2 mt-4">
            <input
              placeholder="Discount code"
              className="flex-1 border p-2 rounded-md"
            />
            <button className="px-4 border rounded-md">Apply</button>
          </div>

          {/* Price */}
          <div className="mt-6 space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹1,899</span>
            </div>

            <div className="flex justify-between text-gray-500">
              <span>Shipping</span>
              <span>Calculated at checkout</span>
            </div>
          </div>

          <div className="flex justify-between mt-4 text-lg font-semibold">
            <span>Total</span>
            <span>₹1,899</span>
          </div>

        </div>

      </div>
    </section>
  );
}