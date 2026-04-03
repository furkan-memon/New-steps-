import { FaEnvelope, FaHeadphones, FaMapMarkerAlt, FaGlobe } from "react-icons/fa";
import { FaHome} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ContactInfo() {
  const contacts = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      text: "support@example.com",
    },
    {
      icon: <FaHeadphones />,
      title: "Phone",
      text: "+1 (555) 123–4567",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Address",
      text: "123 Innovation Street, Suite 456, San Francisco, CA 94107, USA",
    },
    {
      icon: <FaGlobe />,
      title: "Website",
      text: "www.createuiux.com",
    },
  ];

  return (
    <section className=" py-16">
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

        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
            We are happy to assist you
          </h2>
          <p className="text-gray-500 text-sm">
            Here to help, anytime you need us.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contacts.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-sm transition"
            >
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 mb-4">
                {item.icon}
              </div>

              <h4 className="font-medium text-gray-900 mb-1">
                {item.title}
              </h4>

              <p className="text-gray-500 text-sm leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}