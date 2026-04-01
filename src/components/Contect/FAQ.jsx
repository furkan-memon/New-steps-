import { useState } from "react";

const faqs = [
  {
    q: "What payment methods do you accept?",
    a: "We accept Visa, Mastercard, PayPal, and other major payment options."
  },
  {
    q: "How can I track my order?",
    a: "You can track your order from your account dashboard under order history."
  },
  {
    q: "How long will it take to receive my order?",
    a: "We're always here to help you. Whether you have a question, need support, or just want to learn more about our services, our team is ready to assist you every step of the way."
  },
  {
    q: "Do you ship internationally?",
    a: "Yes, we ship internationally. Delivery times may vary depending on the country."
  },
  {
    q: "Can I cancel or modify my order?",
    a: "Orders can be modified or canceled before they are shipped."
  },
  {
    q: "Do I need an account to place an order?",
    a: "No, you can place an order as a guest without creating an account."
  }
];

export default function FAQSection() {
  const [active, setActive] = useState(2);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="pt-16 ">
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 text-sm mt-2">
            Find quick answers to common questions.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-6">
          {faqs.map((item, index) => (
            <div key={index} className="border-b pb-5">

              {/* Question */}
              <div
                onClick={() => toggle(index)}
                className="flex justify-between items-center cursor-pointer"
              >
                <h3 className="font-medium text-gray-800">
                  {index + 1}. {item.q}
                </h3>

                <span className="text-xl text-gray-700">
                  {active === index ? "−" : "+"}
                </span>
              </div>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out
                ${active === index
                  ? "max-h-40 opacity-100 mt-4"
                  : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.a}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}