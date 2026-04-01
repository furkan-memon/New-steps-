import React from "react";
import smallImg from "../../assets/images/man-woman.jpg";
import largeImg from "../../assets/images/two-women.jpg";
import { Link } from "react-router-dom";

export default function AboutSection() {
  return (
    <section className=" py-10">
      <div className="max-w-7xl mx-auto px-6">
         <div className="flex items-center text-sm text-gray-500 mb-10">
                                 <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="20"
                      height="20"
                      color="currentColor"
                      fill="none"
                      stroke="#141B34"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M3 11.9896V14.5C3 17.7998 3 19.4497 4.02513 20.4749C5.05025 21.5 6.70017 21.5 10 21.5H14C17.2998 21.5 18.9497 21.5 19.9749 20.4749C21 19.4497 21 17.7998 21 14.5V11.9896C21 10.3083 21 9.46773 20.6441 8.74005C20.2882 8.01237 19.6247 7.49628 18.2976 6.46411L16.2976 4.90855C14.2331 3.30285 13.2009 2.5 12 2.5C10.7991 2.5 9.76689 3.30285 7.70242 4.90855L5.70241 6.46411C4.37533 7.49628 3.71179 8.01237 3.3559 8.74005C3 9.46773 3 10.3083 3 11.9896Z" />
                      <path d="M15.0002 17C14.2007 17.6224 13.1504 18 12.0002 18C10.8499 18 9.79971 17.6224 9.00018 17" />
                    </svg>
                                  <Link to='/' className="hover:text-gray-700 cursor-pointer">Home</Link>
                                  <span className="mx-2">›</span>
                                  <span className="text-gray-400">FAQ</span>
                                </div>
                                
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

          <div className="col-span-12 lg:col-span-8">

            <div className="grid md:grid-cols-[1fr_auto] gap-6 items-start">

              <div>
                <h1 className="text-[48px] font-semibold text-gray-900 leading-tight mb-10">
                  Empowering Better Health at Home
                </h1>

                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 text-[20px] mb-3">
                    Our Mission
                  </h4>
                  <p className="text-gray-600 text-[15px] leading-relaxed">
                    To make quality healthcare products accessible,
                    affordable, and reliable for every household.
                    We are committed to helping individuals and families
                    take control of their health with ease and confidence.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 text-[20px] mb-3">
                    Our Vision
                  </h4>
                  <p className="text-gray-600 text-[15px] leading-relaxed">
                    To become a trusted name in home healthcare by
                    simplifying the way people care for themselves
                    and their loved ones.
                  </p>
                </div>
              </div>

              <img
                src={smallImg}
                alt="man and woman"
                className="md:w-[200px] h-[280px] w-full object-cover rounded-2xl mt-4"
              />

            </div>

            <div className="mt-12 bg-white border border-gray-200 rounded-2xl shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-4 text-center  ">

                <div className="py-8 ">
                  <div className="md:border-r-2 md:border-b-0 border-b-2 py-3 md:py-0 border-gray-200">

                  <h3 className="text-2xl font-bold text-gray-900">120+</h3>
                  <p className="text-gray-500 text-sm mt-1">
                    Years of Experience
                  </p>
                  </div>
                </div>

                <div className="py-8">
                                      <div className="md:border-r-2 md:border-b-0 border-b-2 py-3 md:py-0 border-gray-200">


                  <h3 className="text-2xl font-bold text-gray-900">100M</h3>
                  <p className="text-gray-500 text-sm mt-1">
                    Orders Delivered Safely
                  </p>
                  </div>
                </div>

                <div className="py-8">
                                        <div className="md:border-r-2 md:border-b-0 border-b-2 py-3 md:py-0 border-gray-200">


                  <h3 className="text-2xl font-bold text-gray-900">100K+</h3>
                  <p className="text-gray-500 text-sm mt-1">
                    Verified 5-Star Reviews
                  </p>
                  </div>
                </div>

                <div className="py-8">
                  <div className=" md:border-b-0 py-3 md:py-0 border-gray-200">
                      

                  <h3 className="text-2xl font-bold text-gray-900">99%</h3>
                  <p className="text-gray-500 text-sm mt-1">
                    Customer Satisfaction Rate
                  </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
          <div className="col-span-12  h-full lg:col-span-4 flex justify-end">
            <img
              src={largeImg}
              alt="two women"
              className="w-full h-full  object-cover rounded-2xl"
            />
          </div>

        </div>

      </div>
    </section>
  );
}