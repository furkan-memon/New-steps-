import { useState, useRef, useEffect } from "react";
import ProductCard from "./ProductCard";
import product1 from "../assets/images/image1.png";
import product2 from "../assets/images/cs-2.png";
import product3 from "../assets/images/led-2.png";
import product4 from "../assets/images/sn-3.png";
import product5 from "../assets/images/sn-2.png";
import { ChevronLeft, ChevronRight } from "lucide-react";

const rawProducts = [
  { id: 1, name: "Nebulizer Ultracare", price: 28.56, oldPrice: 31.56, img: product1 },
  { id: 2, name: "Facial Moisturizer", price: 45, oldPrice: 55, img: product2, img2: product3 },
  { id: 3, name: "Skin Revive Serum", price: 32.2, oldPrice: 40, img: product3, img2: product4 },
  { id: 4, name: "Nail Polish Kit", price: 15.99, oldPrice: 19.99, img: product4, img2: product5 },
  { id: 5, name: "Propolis B5 Cream", price: 22.1, oldPrice: 28, img: product5 },
];

// repeat for infinite scroll
const products = [...rawProducts, ...rawProducts, ...rawProducts];

export default function ProductDetails() {
  const scrollRef = useRef(null);

  const images = [
    "/images/image1.png",
    "/images/image2.png",
    "/images/image3.png",
    "/images/image4.png",
  ];

  const [mainImg, setMainImg] = useState(images[0]);
  const [qty, setQty] = useState(1);

  useEffect(() => {
    if (scrollRef.current) {
      const cardWidth = 260;
      scrollRef.current.scrollLeft = rawProducts.length * cardWidth;
    }
  }, []);

  const handleInfiniteScroll = () => {
    const container = scrollRef.current;
    if (!container) return;

    const singleWidth = container.scrollWidth / 3;

    if (container.scrollLeft >= singleWidth * 2) {
      container.scrollLeft -= singleWidth;
    } else if (container.scrollLeft <= 0) {
      container.scrollLeft += singleWidth;
    }
  };

  const scroll = (dir) => {
    if (!scrollRef.current) return;

    const move = 260;

    scrollRef.current.scrollTo({
      left:
        dir === "left"
          ? scrollRef.current.scrollLeft - move
          : scrollRef.current.scrollLeft + move,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-white container mx-auto py-10">

      {/* MAIN SECTION */}
      <div className=" mx-auto px-4 flex flex-col lg:flex-row gap-10">

        {/* LEFT IMAGES */}
        <div className="flex gap-4 w-full lg:w-1/2">

          {/* Thumbnails */}
          <div className="flex flex-col gap-3">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                onClick={() => setMainImg(img)}
                className={`w-16 h-16 object-cover rounded-md cursor-pointer border ${
                  mainImg === img ? "border-gray-950" : "border-gray-200"
                }`}
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="flex-1">
            <img
              src={mainImg}
              className="w-full h-[450px] border-gray-200  border object-contain rounded-lg"
            />
          </div>
        </div>

        {/* RIGHT DETAILS */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl font-semibold">
            Kids Stylish Sneakers
          </h2>

          <div className="mt-3 flex gap-3 items-center">
            <span className="text-xl font-bold">₹999</span>
            <span className="line-through text-gray-400">₹1499</span>
            <span className="text-green-600 text-sm">30% Off</span>
          </div>

          <p className="mt-4 text-gray-600 text-sm">
            Comfortable and stylish shoes for everyday wear.
          </p>

          {/* Size */}
          <div className="mt-5">
            <p className="mb-2 font-medium">Size</p>
            <div className="flex gap-2">
              {[6, 7, 8, 9].map((s) => (
                <button
                  key={s}
                  className="border px-3 py-1 rounded hover:bg-black hover:text-white"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mt-5 flex gap-3 items-center">
            <button onClick={() => setQty(qty > 1 ? qty - 1 : 1)} className="px-3 border">-</button>
            <span>{qty}</span>
            <button onClick={() => setQty(qty + 1)} className="px-3 border">+</button>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex gap-4">
            <button className="bg-white text-black border active:scale-98 px-6 py-3 rounded-lg w-full">
              Add to Cart
            </button>
            <button className="border bg-black text-white active:scale-98 px-6 py-3 rounded-lg w-full">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* RELATED PRODUCTS */}
      <div className=" px-4 mt-14">

        <h3 className="text-lg font-semibold mb-6">
          You may also like
        </h3>

        <div className="relative">

          {/* RIGHT */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow rounded-full p-2 z-10"
          >
            <ChevronRight size={20} />
          </button>

          {/* SCROLL */}
          <div
            ref={scrollRef}
            onScroll={handleInfiniteScroll}
            className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory py-2"
          >
            <ProductCard products={products} showButton={false} />
          </div>

          {/* LEFT */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow rounded-full p-2 z-10"
          >
            <ChevronLeft size={20} />
          </button>

        </div>
      </div>

    </section>
  );
}