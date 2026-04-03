import { Check, Play } from "lucide-react";
import modelImg from "../../assets/images/female-green-bg.jpg";

export default function FocusSection() {
  return (
    <section className="">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div className="relative">
            <img
              src={modelImg}
              alt="model"
              className="w-full h-[520px] object-cover rounded-3xl"
            />

            <button className="absolute inset-0 flex items-center justify-center">
              <span className="w-20 h-20 border-8 border-white text-white backdrop-blur-md rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition">
              <a href="https://www.youtube.com/watch?v=rkpzYNB6xks">
              
                <Play size={28} className="text-white ml-1 " />
              </a>
              </span>
            </button>
          </div>

          <div>

            <span className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-xs font-medium px-3 py-1 rounded-full mb-4">
              <span className="w-2 h-2 bg-green-600 rounded-full"></span>
              Features
            </span>

            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              Focus on Customer Satisfaction
            </h2>

            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Experience the ultimate convenience with our Faster Free Delivery service—
              designed to bring your orders to your doorstep quickly and without any extra cost.
              Whether you're ordering essentials or gifts, we make sure you get them faster than ever.
              Why You'll Love It:
            </p>

            <ul className="space-y-4 text-sm text-gray-600 mb-6">

              <li className="flex items-start gap-3">
                <Check className="text-green-600 mt-1" size={18} />
                <span>
                  <strong>Absolutely Free:</strong> No delivery fees, no hidden charges—just fast, reliable service.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <Check className="text-green-600 mt-1" size={18} />
                <span>
                  <strong>Real-Time Tracking:</strong> Stay updated every step of the way with live order tracking.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <Check className="text-green-600 mt-1" size={18} />
                <span>
                  <strong>Reliable Delivery Partners:</strong> We've partnered with trusted couriers to ensure your packages.
                </span>
              </li>

            </ul>

            <p className="text-gray-600 text-sm leading-relaxed">
              Say goodbye to long waits and shipping fees. With Faster Free Delivery,
              we're raising the standard—fast, seamless, and 100% free.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}