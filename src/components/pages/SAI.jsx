import { Truck, Headphones, RotateCcw } from "lucide-react";
import cornerShape from "../../assets/images/image copy.png";
import cornerShape2 from "../../assets/images/image.png";
import { FaEnvelope, FaHeadphones, FaMapMarkerAlt, FaGlobe } from "react-icons/fa";
export default function SAI() {
  return (
    <section className="relative py-24 bg-white">

      <div className="relative bg-[#FFEB69] md:rounded-[50px] py-24  px-10
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
            Support & Inquiries
          </h2>
          <p className="text-sm whitespace-nowrap text-gray-500 mt-1">
          Feel free to send message if you have any questions
          </p>
          
   
        </div>

       <div className="max-w-6xl mx-auto px-6 py-6 grid md:grid-cols-2 gap-8">

        <div className="bg-white rounded-2xl p-8 shadow-sm">

          <div className="flex items-start gap-4 pb-6 border-b">
            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
              <FaEnvelope className="text-gray-700" />
            </div>
            <div>
              <h4 className="font-medium text-gray-800">Email</h4>
              <p className="text-gray-500 text-sm">support@example.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4 py-6 border-b">
            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
              <FaHeadphones className="text-gray-700" />
            </div>
            <div>
              <h4 className="font-medium text-gray-800">Phone</h4>
              <p className="text-gray-500 text-sm">+1 (555) 123-4567</p>
            </div>
          </div>

          <div className="flex items-start gap-4 py-6 border-b">
            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
              <FaMapMarkerAlt className="text-gray-700" />
            </div>
            <div>
              <h4 className="font-medium text-gray-800">Address</h4>
              <p className="text-gray-500 text-sm">
                123 Innovation Street, Suite 456, San Francisco, CA 94107, USA
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 pt-6">
            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
              <FaGlobe className="text-gray-700" />
            </div>
            <div>
              <h4 className="font-medium text-gray-800">Website</h4>
              <p className="text-gray-500 text-sm">www.createuiux.com</p>
            </div>
          </div>

        </div>

        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <form className="space-y-6">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-200 rounded-full px-5 py-3 outline-none focus:ring-2 focus:ring-teal-500"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full border border-gray-200 rounded-full px-5 py-3 outline-none focus:ring-2 focus:ring-teal-500"
            />

            <textarea
              placeholder="Write your message"
              rows="5"
              className="w-full border border-gray-200 rounded-2xl px-5 py-3 outline-none resize-none focus:ring-2 focus:ring-teal-500"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-[#16796e] text-white py-4 rounded-full font-medium hover:bg-[#13685f] transition"
            >
              Send Your Queries
            </button>

          </form>
        </div>

      </div>

      </div>

    </section>
  );
}