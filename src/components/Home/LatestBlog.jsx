import React from "react";
import { Calendar, MessageCircle, ArrowUpRight } from "lucide-react";

import blog1 from "../../assets/images/product-image-8.png";
import blog2 from "../../assets/images/product-image-6.png";
import blog3 from "../../assets/images/product-image-10.png";
import blog4 from "../../assets/images/product-image-9.png";
const LatestBlog = () => {
  const blogs = [
    { img: blog1 },
    { img: blog2 },
    { img: blog3 },
    { img: blog4 },
  ];

  return (
    <section className="max-w-[1400px] mx-auto py-16 px-6 ">

      <div className="flex items-center justify-between mb-10">
        <h2 className="text-2xl font-semibold text-gray-900">
          Latest Blog
        </h2>

        <button className="text-[#00796B] font-semibold hover:underline">
          View All
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl border border-gray-200 p-4 hover:shadow-lg transition duration-300"
          >
            <div className="rounded-xl overflow-hidden mb-4">
              <img
                src={blog.img}
                alt="blog"
                className="w-full h-[200px] object-cover"
              />
            </div>

            <span className="inline-block text-xs bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full mb-3">
              Category Name
            </span>

            <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
              <div className="flex items-center gap-1">
                <Calendar size={14} />
                <span>09 Feb 2027</span>
              </div>

              <div className="flex items-center gap-1">
                <MessageCircle size={14} />
                <span>Comment (10)</span>
              </div>
            </div>

            <h3 className="font-semibold text-gray-900 mb-3 leading-snug">
              The Future of Industrial Design
            </h3>

            <p className="text-sm text-gray-500 mb-5">
              So you have heard about this site or you have been to it,
              but you cannot figure out.
            </p>

            <button className="group bg-[#00796B] text-white px-5 py-2 rounded-full text-sm font-semibold flex items-center gap-2 hover:bg-[#00695C] transition">
              Read More
              <span className="bg-white text-[#00796B] rounded-full p-1 transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight size={14} />
              </span>
            </button>
          </div>
        ))}

      </div>

    </section>
  );
};

export default LatestBlog;