import React from "react";
import { Star, CheckCircle, User } from "lucide-react";

const TrustCust = () => {

  const reviews = [
    {
      name: "Aarav Patel",
      text: "Very comfortable shoes for my kid. Quality is amazing.",
    },
    {
      name: "Riya Sharma",
      text: "Stylish and durable. Perfect for daily use.",
    },
    {
      name: "Imran Khan",
      text: "Good quality and worth the price.",
    },
  ];

  return (
    <section className="py-12 bg-white">

      <div className="container mx-auto px-6">

        {/* Top Strip */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 border-b pb-6">

          <h2 className="text-3xl font-semibold text-gray-900">
            Heppy Customer
          </h2>

          <div className="flex items-center gap-2 text-yellow-500 mt-4 md:mt-0">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} fill="currentColor" />
            ))}
            <span className="text-gray-700 text-sm ml-2">
              4.9/5 Rating
            </span>
          </div>

        </div>

        {/* Reviews Row */}
        <div className="flex flex-col md:flex-row gap-6">

          {reviews.map((review, index) => (
            <div
              key={index}
              className="flex-1 border border-gray-200 rounded-xl p-6 hover:shadow-md transition"
            >

              {/* Top */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <User size={16} className="text-gray-500" />
                  </div>

                  <h4 className="text-sm font-medium text-gray-900">
                    {review.name}
                  </h4>
                </div>

                <CheckCircle size={16} className="text-green-500" />
              </div>

              {/* Text */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {review.text}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default TrustCust;