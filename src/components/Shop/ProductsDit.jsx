import { useState } from "react";

export default function ProductDetails() {
  const images = [
    "/images/p1.jpg",
    "/images/p1-2.jpg",
    "/images/p1-3.jpg",
    "/images/p1-4.jpg",
  ];

  const [mainImg, setMainImg] = useState(images[0]);
  const [qty, setQty] = useState(1);

  return (
    <section className="bg-white py-10">

      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-10">

        {/* LEFT IMAGE SECTION */}
        <div className="flex gap-4 w-full lg:w-1/2">

          {/* Thumbnails */}
          <div className="flex flex-col gap-3">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                onClick={() => setMainImg(img)}
                className="w-16 h-16 object-cover border cursor-pointer rounded-md"
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="flex-1">
            <img
              src={mainImg}
              className="w-full h-[450px] object-cover rounded-lg"
            />
          </div>
        </div>

        {/* RIGHT DETAILS */}
        <div className="w-full lg:w-1/2">

          <h2 className="text-2xl font-semibold text-gray-900">
            Men Brown Solid Oxford Formal Shoes
          </h2>

          {/* Price */}
          <div className="mt-3 flex items-center gap-3">
            <span className="text-xl font-bold">₹3,849.00</span>
            <span className="text-gray-400 line-through">₹5,499.00</span>
            <span className="text-green-600 text-sm">30% Off</span>
          </div>

          {/* Rating */}
          <div className="mt-2 text-sm text-gray-500">
            ⭐⭐⭐⭐☆ (120 reviews)
          </div>

          {/* Description */}
          <p className="mt-4 text-gray-600 text-sm">
            Premium quality formal shoes crafted with comfort and durability.
            Perfect for office wear and special occasions.
          </p>

          {/* Availability */}
          <div className="mt-4 border p-3 rounded-lg text-sm">
            <p className="font-medium">Availability</p>
            <p className="text-green-600">✔ In Stock</p>
            <p className="text-gray-500">Ships within 2-3 days</p>
          </div>

          {/* Size */}
          <div className="mt-5">
            <p className="font-medium mb-2">Size</p>
            <div className="flex gap-2">
              {[6,7,8,9,10].map((size) => (
                <button
                  key={size}
                  className="border px-3 py-1 rounded-md hover:bg-black hover:text-white"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mt-5 flex items-center gap-3">
            <button
              onClick={() => setQty(qty > 1 ? qty - 1 : 1)}
              className="px-3 py-1 border"
            >
              -
            </button>

            <span>{qty}</span>

            <button
              onClick={() => setQty(qty + 1)}
              className="px-3 py-1 border"
            >
              +
            </button>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex gap-4">
            <button className="bg-black text-white px-6 py-3 rounded-lg w-full">
              Add to Cart
            </button>

            <button className="border px-6 py-3 rounded-lg w-full">
              Buy Now
            </button>
          </div>

        </div>

      </div>

      {/* FEATURES */}
     

      {/* RELATED PRODUCTS */}
      <div className="max-w-7xl mx-auto px-4 mt-14">

        <h3 className="text-lg font-semibold mb-6">
          You may also like
        </h3>

        <div className="flex gap-4 overflow-x-auto">
          {[1,2,3,4].map((i) => (
            <div
              key={i}
              className="min-w-[200px] bg-white border rounded-lg p-3"
            >
              <img
                src="/images/p1.jpg"
                className="w-full h-[150px] object-cover rounded"
              />
              <p className="text-sm mt-2">Formal Shoes</p>
              <p className="font-semibold">₹1,499</p>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}