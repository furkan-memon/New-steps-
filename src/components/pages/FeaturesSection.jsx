import { FaTruck, FaHeadphones, FaUndo, FaDollarSign } from "react-icons/fa";

export default function FeaturesSection() {
  const features = [
    {
      icon: <FaTruck />,
      title: "Free Shipping",
      desc: "Enjoy the Convenience of Free Shipping on Every Order",
    },
    {
      icon: <FaHeadphones />,
      title: "24x7 Support",
      desc: "Round-the-Clock Assistance, Anytime You Need It",
    },
    {
      icon: <FaUndo />,
      title: "30 Days Return",
      desc: "Your Satisfaction is Our Priority: Return Any Product Within 30 Days",
    },
    {
      icon: <FaDollarSign />,
      title: "Secure Payment",
      desc: "Seamless Shopping Backed by Safe and Secure Payment Options",
    },
  ];

  return (
    <section className=" py-16">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-8 text-center hover:shadow-md transition"
            >
              
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-yellow-100 flex items-center justify-center text-gray-700 text-lg">
                {item.icon}
              </div>

              <h3 className="font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>

              <p className="text-sm text-gray-500 leading-relaxed">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}