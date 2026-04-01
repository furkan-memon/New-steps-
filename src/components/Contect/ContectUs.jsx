import { Truck, Headphones, RotateCcw } from "lucide-react";
import cornerShape from "../../assets/images/image copy.png";
import cornerShape2 from "../../assets/images/image.png";

export default function ContactUs() {
  return (
    <section className="relative py-24 bg-white">

      {/* Pink Background */}
      <div className="relative bg-[#9EE872] md:rounded-[50px] py-24  px-10
      \ max-w-7xl mx-auto " >

        {/* Curved Top Center */}
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
         Contect Us
          </h2>
           <p className="text-sm whitespace-nowrap text-gray-500 mt-1">
              We'd love to hear from you!
           </p>
          
   
        </div>

       <div className="max-w-6xl mx-auto px-6 py-4">

        <div className="bg-white rounded-2xl p-10 shadow-sm">

          <form className="space-y-6">

            {/* First Row */}
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="First Name"
                className="w-full border border-gray-200 rounded-full px-6 py-3 outline-none focus:ring-2 focus:ring-teal-500"
              />

              <input
                type="text"
                placeholder="Last Name"
                className="w-full border border-gray-200 rounded-full px-6 py-3 outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            {/* Second Row */}
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full border border-gray-200 rounded-full px-6 py-3 outline-none focus:ring-2 focus:ring-teal-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-200 rounded-full px-6 py-3 outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            {/* Subject */}
            <input
              type="text"
              placeholder="Subject"
              className="w-full border border-gray-200 rounded-full px-6 py-3 outline-none focus:ring-2 focus:ring-teal-500"
            />

            {/* Message */}
            <textarea
              rows="5"
              placeholder="Write your message"
              className="w-full border border-gray-200 rounded-2xl px-6 py-4 outline-none resize-none focus:ring-2 focus:ring-teal-500"
            />

            {/* Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-[#16796e] text-white px-8 py-3 rounded-full hover:bg-[#14685f] transition shadow-md"
              >
                Send Your Message
              </button>
            </div>

          </form>

        </div>

      </div>
      </div>

    </section>
  );
}