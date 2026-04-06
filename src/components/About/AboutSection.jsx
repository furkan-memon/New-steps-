import React from "react";
import largeImg from "../../assets/images/aboutimg.png";
import img1 from "../../assets/images/abtimg1.png";
import img2 from "../../assets/images/abt.png";

import { Link } from "react-router-dom";

export default function AboutSection() {
  return (
    <section className=" container mx-auto py-10">
      <div className=" mx-auto px-6">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-500 mb-10">
          <Link to="/" className="hover:text-gray-700">
            Home
          </Link>
          <span className="mx-2">›</span>
          <span className="text-gray-400">About</span>
        </div>

        {/* MAIN FLEX */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* LEFT */}
          <div className="flex-1">
            {/* Content */}
            <div>
              <h1 className="text-[36px] md:text-[42px] font-semibold text-gray-900 leading-tight mb-10">
                Comfort & Style for Every Little Step
              </h1>

              {/* Mission */}
              <div className="mb-8">
                <h4 className="font-semibold text-gray-900 text-[20px] mb-3">
                  Our Mission
                </h4>
                <p className="text-gray-600 text-[15px] leading-relaxed">
                  Our Mission At New Steps, our mission is to provide
                  high-quality, comfortable, and stylish footwear for kids. We
                  design every pair with care to support growing feet while
                  ensuring durability and everyday comfort. We are committed to
                  using reliable materials and thoughtful craftsmanship to
                  deliver products that parents can trust and kids love to wear.
                  Our Vision To become a trusted kids footwear brand known for
                  comfort, safety, and modern design. We aim to make every step
                  joyful and confident for children across India while
                  continuously improving our designs and expanding our reach to
                  serve more families with quality footwear solutions.
                </p>
              </div>

              {/* Vision */}
              <div>
                <h4 className="font-semibold text-gray-900 text-[20px] mb-3">
                  Our Vision
                </h4>
                <p className="text-gray-600 text-[15px] leading-relaxed">
                  At New Steps, our mission is to provide high-quality,
                  comfortable, and stylish footwear for kids. We design every
                  pair with care to support growing feet while ensuring
                  durability and everyday comfort. We are committed to using
                  reliable materials and thoughtful craftsmanship to deliver
                  products that parents can trust and kids love to wear.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-12 bg-white border border-gray-200 rounded-2xl shadow-sm">
              <div className="flex flex-col md:flex-row text-center">
                <div className="flex-1 py-8 border-b md:border-b-0 md:border-r border-gray-200">
                  <h3 className="text-2xl font-bold text-gray-900">5+</h3>
                  <p className="text-gray-500 text-sm mt-1">
                    Years of Experience
                  </p>
                </div>

                <div className="flex-1 py-8 border-b md:border-b-0 md:border-r border-gray-200">
                  <h3 className="text-2xl font-bold text-gray-900">10K+</h3>
                  <p className="text-gray-500 text-sm mt-1">Happy Customers</p>
                </div>

                <div className="flex-1 py-8">
                  <h3 className="text-2xl font-bold text-gray-900">98%</h3>
                  <p className="text-gray-500 text-sm mt-1">
                    Customer Satisfaction
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full lg:w-[35%] flex flex-col gap-4">
            {/* TOP BIG IMAGE */}
            <div className="w-full h-[340px] overflow-hidden rounded-2xl">
              <img
                src={largeImg}
                alt="main shoe"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* BOTTOM TWO IMAGES */}
            <div className="flex gap-4">
              <div className="w-1/2 h-[280px] overflow-hidden rounded-2xl">
                <img
                  src={img1} // add second image
                  alt="shoe 1"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div className="w-1/2 h-[280px] object-bottom overflow-hidden rounded-2xl">
                <img
                  src={img2} // add third image
                  alt="shoe 2"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
