import React from 'react'
import { Star, CheckCircle, ChevronLeft, ChevronRight, User } from "lucide-react";
import { useRef } from "react";
const TrustCust = () => {
  const scrollRef = useRef(null);

      const scroll = (direction) => {
    const { current } = scrollRef;
    if (!current) return;

    const scrollAmount = 400;
    current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

    const reviews = [
    {
      name: "Robert Fox",
      text: "I was honestly surprised at how fast the delivery was. Great quality and fast shipping!",
    },
    {
      name: "James Smith",
      text: "Everything was super easy. My item arrived the next day. Highly recommend!",
    },
    {
      name: "Sarah Johnson",
      text: "Amazing experience. Delivery was quick and product quality exceeded expectations.",
    },
    {
      name: "Daniel Lee",
      text: "Smooth checkout and excellent service. Will definitely order again.",
    },
  ];
  return (
    <section className="relative py-24 bg-white">

      <div className="relative bg-[#A0E2E0] md:rounded-[50px] py-24  px-10
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
           Trusted by Customers
          </h2>
          <p className="text-sm whitespace-nowrap text-gray-500 mt-1">
            Join Thousands of heppy customers around the globle
          </p>
          
   
        </div>

      <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto mt-15 scroll-smooth no-scrollbar"
        >
          {reviews.map((review, index) => (
            <div
              key={index}
              className="min-w-[100px] bg-white rounded-[30px] p-8 shadow-sm flex-shrink-0"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center">
                  <User size={22} className="text-gray-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {review.name}
                  </h4>
                  <p className="text-xs text-gray-500">
                    12:40PM, 14 Nov, 2026
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-4">
                <div className="flex gap-1 border-r px-2 border-gray-300 text-yellow-400">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                  <Star size={18} className="text-gray-300" />
                <span className="text-sm text-gray-700">4.5</span>
                </div>

                <div className="flex items-center gap-1 text-green-600 text-sm">
                  <CheckCircle size={16} />
                  Verified purchase
                </div>
              </div>

              <p className="text-gray-600 text-wrap text-sm leading-relaxed">
                {review.text}
              </p>
            </div>
          ))}
        </div>
  <div className="flex justify-center gap-6 mt-16">
          <button
            onClick={() => scroll("left")}
            className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition"
          >
            <ChevronRight size={22} />
          </button>
        </div>

      </div>

    </section>
  )
}

export default TrustCust


// export default function TestimonialSection() {





//   return (
//     <section className="bg-[#87C2BD] py-20">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Scrollable Container */}
//         <div
//           ref={scrollRef}
//           className="flex gap-8 overflow-x-auto scroll-smooth no-scrollbar"
//         >
//           {reviews.map((review, index) => (
//             <div
//               key={index}
//               className="min-w-[400px] bg-white rounded-[30px] p-8 shadow-sm flex-shrink-0"
//             >
//               {/* Header */}
//               <div className="flex items-center gap-4 mb-4">
//                 <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center">
//                   <User size={22} className="text-gray-400" />
//                 </div>
//                 <div>
//                   <h4 className="font-semibold text-gray-900">
//                     {review.name}
//                   </h4>
//                   <p className="text-xs text-gray-500">
//                     12:40PM, 14 Nov, 2026
//                   </p>
//                 </div>
//               </div>

//               {/* Rating */}
//               <div className="flex items-center gap-4 mb-4">
//                 <div className="flex gap-1 text-yellow-400">
//                   {[...Array(4)].map((_, i) => (
//                     <Star key={i} size={18} fill="currentColor" />
//                   ))}
//                   <Star size={18} className="text-gray-300" />
//                 </div>
//                 <span className="text-sm text-gray-700">4.5</span>

//                 <div className="flex items-center gap-1 text-green-600 text-sm">
//                   <CheckCircle size={16} />
//                   Verified purchase
//                 </div>
//               </div>

//               {/* Review Text */}
//               <p className="text-gray-600 text-sm leading-relaxed">
//                 {review.text}
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* Navigation Buttons */}
      
//       </div>
//     </section>
//   );
// }