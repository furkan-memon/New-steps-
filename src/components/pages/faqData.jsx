import { useState } from "react";

const faqData = {
  shopping: [
    {
      q: "What payment methods do you accept?",
      a: "We accept Visa, Mastercard, PayPal, and major credit cards.",
    },
    {
      q: "How can I track my order?",
      a: "You can track your order from the order history page in your account.",
    },
    {
      q: "How long will it take to receive my order?",
      a: "Orders usually arrive within 3–7 business days.",
    },
    {
      q: "Do you ship internationally?",
      a: "Yes, we ship worldwide.",
    },
    {
      q: "Can I cancel or modify my order?",
      a: "Orders can be modified before they are shipped.",
    },
    {
      q: "Do I need an account to place an order?",
      a: "No, you can checkout as a guest.",
    },
  ],

  payment: [
    {
      q: "Is my payment secure?",
      a: "Yes. All transactions are encrypted with SSL security.",
    },
    {
      q: "Can I pay with PayPal?",
      a: "Yes, PayPal is supported.",
    },
  ],

  returns: [
    {
      q: "What is your return policy?",
      a: "You can return products within 30 days.",
    },
    {
      q: "How do I start a return?",
      a: "Go to your account orders and select return.",
    },
  ],

  shipping: [
    {
      q: "Do you offer free shipping?",
      a: "Yes, free shipping is available on selected orders.",
    },
    {
      q: "How long does shipping take?",
      a: "Standard shipping takes 3–7 days.",
    },
  ],
};

export default function FAQSection() {
  const [category, setCategory] = useState("shopping");
  const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="py-16  ">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex justify-center gap-6 mb-10">
          {Object.keys(faqData).map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setCategory(cat);
                setActive(null);
              }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition
              ${
                category === cat
                  ? "bg-[#00AB5514] text-[#088178]"
                  : "hover:bg-[#00AB5514] "
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="space-y-6">
          {faqData[category].map((item, index) => (
            <div key={index} className="border-b pb-5">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggle(index)}
              >
                <h3 className="font-medium text-gray-800">
                  {index + 1}. {item.q}
                </h3>

                <span className="text-xl text-gray-600">
                  {active === index ? "−" : "+"}
                </span>
              </div>

             <div
  className={`overflow-hidden transition-all duration-300 ease-out
  ${active === index
    ? "max-h-40 opacity-100 translate-y-0 mt-4"
    : "max-h-0 opacity-0 -translate-y-2"
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
