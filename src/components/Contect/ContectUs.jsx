import { Link } from "react-router-dom";

export default function ContactUs() {
  return (
    <section className="py-20  ">

      <div className="max-w-6xl mx-auto px-6">

        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-gray-700">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-400">Contact</span>
        </div>

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Contact Us
          </h2>
          <p className="text-gray-500 mt-2">
            We'd love to hear from you
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-200 shadow-sm">

          <form className="space-y-6">

            {/* Row 1 */}
            <div className="flex flex-col md:flex-row gap-6">
              <input
                type="text"
                placeholder="Name"
                className="flex-1 border border-gray-200 rounded-lg px-4 py-3 outline-none hover:ring-2 hover:ring-black/20 focus:ring-2 focus:ring-black/20"
              />

              
<input
  type="email"
  placeholder="Email Address"
  className="flex-1 border border-gray-200 rounded-lg px-4 py-3 outline-none hover:ring-2 hover:ring-black/20 focus:ring-2 focus:ring-black/20"
/>
            </div>

            {/* Row 2 */}
            <div className="flex flex-col md:flex-row gap-6">
              <input
                type="text"
                placeholder="Phone Number"
                className="flex-1 border border-gray-200 rounded-lg px-4 py-3 outline-none hover:ring-2 hover:ring-black/20 focus:ring-2 focus:ring-black/20"
              />

            </div>

           

            {/* Message */}
            <textarea
              rows="5"
              placeholder="Write your message..."
              className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none resize-none hover:ring-2 hover:ring-black/20 focus:ring-2 focus:ring-black/20"
            />

            {/* Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-black text-white px-8 py-3 rounded-lg  hover:ring-2 hover:ring-black/20 focus:ring-2 focus:ring-black/20"
              >
                Send Message
              </button>
            </div>

          </form>

        </div>

      </div>

    </section>
  );
}