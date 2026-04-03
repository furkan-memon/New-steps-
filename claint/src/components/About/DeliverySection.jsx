import { Check } from "lucide-react";
import mainImg from "../../assets/images/woman-on-phone.jpg";
import sideImg from "../../assets/images/woman-bg.png";

export default function DeliverySection() {
  return (
    <section className=" py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <span className="inline-block bg-green-100 text-green-700 text-xs font-medium px-3 py-1 rounded-full mb-4">
              • Features
            </span>

            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              Faster Free Delivery
            </h2>

            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Experience the ultimate convenience with our Faster Free Delivery service—designed to bring your orders to your doorstep quickly and without any extra cost.
              Whether you're ordering essentials or gifts, we make sure you get them faster than ever. Why You'll Love It:
            </p>

            <ul className="space-y-4 text-sm text-gray-600">

              <li className="flex items-start gap-3">
                <Check className="text-white mt-1 w-4 h-4 rounded-full bg-green-600 " size={14} />
                <span>
                  <strong>Absolutely Free:</strong> No delivery fees, no hidden charges—just fast, reliable service.
                </span>
              </li>

              <li className="flex items-start gap-3 ">
                <Check className="text-white mt-1 w-4 h-4 rounded-full bg-green-600 " size={14} />
                <span>
                  <strong>Real-Time Tracking:</strong> Stay updated every step of the way with live order tracking.
                </span>
              </li>

              <li className="flex items-start gap-3">
               <Check className="text-white mt-1 w-4 h-4 rounded-full bg-green-600 " size={14} />
                <span>
                  <strong>Reliable Delivery Partners:</strong> We've partnered with trusted couriers to ensure your packages.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <Check className="text-white mt-1 w-4 h-4 rounded-full bg-green-600 " size={14} />
                <span>
                  <strong>Weekend & Evening Delivery:</strong> Get your items when it's most convenient for you.
                </span>
              </li>

            </ul>

            <p className="text-gray-600 text-sm leading-relaxed mt-6">
              Say goodbye to long waits and shipping fees. With Faster Free Delivery, we're raising the standard—fast, seamless, and 100% free.
            </p>

          </div>

          <div className="relative flex flex-col xl:flex-row justify-end gap-8">

            <img
              src={mainImg}
              alt="delivery app"
              className="xl:w-[380px] xl:h-[500px] w-full h-full object-cover rounded-3xl"
            />
            <img
              src={sideImg}
              alt="model"
              className="xl:w-[220px] xl:h-[350px] lg:w-[380px] lg:h-[500px] w-full h-full object-cover rounded-2xl mt-16"
            />

          </div>

        </div>

      </div>
    </section>
  );
}