import { Truck, Headphones, RotateCcw } from "lucide-react";
import cornerShape from "../../assets/images/image copy.png";
import cornerShape2 from "../../assets/images/image.png";

export default function QualitySection() {
  return (
    <section className="relative py-24 bg-white">

      <div className="relative bg-[#FFD6EF] md:rounded-[50px] py-24  px-10
      \ max-w-7xl mx-auto " >

        <div className="absolute mt-5 lg:mt-0 lg:before:content-['']
    lg:before:absolute
    lg:before:-bottom-4
    lg:before:-left-25
    lg:before:w-[145px]
    lg:before:h-[100%]
    lg:before:bg-[url('/images/shape.png')]
    lg:before:bg-contain
    lg:before:bg-no-repeat 
     lg:after:content-['']
  lg:after:absolute
  lg:after:-bottom-0
  lg:after:-right-33
  lg:after:w-[145px]
  lg:after:h-[100%]
  lg:after:bg-[url('/images/imagecopy.png')]
  lg:after:bg-contain
  lg:after:bg-no-repeat

  -top-4 left-1/2 -translate-x-1/2 lg:bg-white px-12 py-5 text-center">
          <h2 className="text-2xl font-semibold text-gray-900"> 
            Quality is our priority
          </h2>
          <p className="text-sm whitespace-nowrap text-gray-500 mt-1">
            Because you deserve nothing less than the best.
          </p>
          
   
        </div>

        <div className="mt-6 grid md:grid-cols-3 gap-10">

          <div className="bg-white rounded-2xl shadow-md p-10 text-center transition hover:shadow-lg">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Truck size={24} className="text-gray-800" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-3">
              Free Shipping
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Enjoy the Convenience of Free Shipping on Every Order
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-10 text-center transition hover:shadow-lg">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Headphones size={24} className="text-gray-800" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-3">
              24x7 Support
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Round-the-Clock Assistance, Anytime You Need It
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-10 text-center transition hover:shadow-lg">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <RotateCcw size={24} className="text-gray-800" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-3">
              30 Days Return
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Your Satisfaction is Our Priority: Return Any Product Within 30 Days
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}