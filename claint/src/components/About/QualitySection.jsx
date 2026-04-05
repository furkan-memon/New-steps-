import { Truck, Headphones, RotateCcw } from "lucide-react";

export default function QualitySection() {
  return (
    <section className="py-12 bg-white">

      <div className="container mx-auto px-6">

        {/* Top Strip */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 border-b pb-6">

          <h2 className="text-3xl font-semibold text-gray-900">
            Why Choose New Steps
          </h2>

          <p className="text-gray-500 text-sm mt-3 md:mt-0">
            Designed for comfort, built for little adventures
          </p>

        </div>

        {/* Features Row */}
        <div className="flex flex-col md:flex-row gap-6">

          {/* Item 1 */}
          <div className="flex-1 flex items-start gap-4 border border-gray-200 rounded-xl p-6 hover:shadow-md transition">

            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
              <Truck size={18} className="text-gray-600" />
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-900">
                Free Shipping
              </h3>
              <p className="text-gray-500 text-sm mt-1">
                Fast and free delivery across India
              </p>
            </div>

          </div>

          {/* Item 2 */}
          <div className="flex-1 flex items-start gap-4 border border-gray-200 rounded-xl p-6 hover:shadow-md transition">

            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
              <Headphones size={18} className="text-gray-600" />
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-900">
                Customer Support
              </h3>
              <p className="text-gray-500 text-sm mt-1">
                Friendly support whenever you need help
              </p>
            </div>

          </div>

          {/* Item 3 */}
          <div className="flex-1 flex items-start gap-4 border border-gray-200 rounded-xl p-6 hover:shadow-md transition">

            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
              <RotateCcw size={18} className="text-gray-600" />
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-900">
                Easy Returns
              </h3>
              <p className="text-gray-500 text-sm mt-1">
                Hassle-free returns within 7–10 days
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}