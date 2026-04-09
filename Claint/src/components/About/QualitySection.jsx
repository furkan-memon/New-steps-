import { Truck, Headphones, RotateCcw } from "lucide-react";

export default function QualitySection() {
  const features = [
    {
      icon: <Truck size={22} strokeWidth={1.5} />,
      title: "Complimentary Shipping",
      desc: "Fast and free delivery across India on every order."
    },
    {
      icon: <Headphones size={22} strokeWidth={1.5} />,
      title: "Concierge Support",
      desc: "Our dedicated team is here to assist with your needs."
    },
    {
      icon: <RotateCcw size={22} strokeWidth={1.5} />,
      title: "Seamless Returns",
      desc: "Hassle-free returns within 7–10 days of purchase."
    }
  ];

  return (
    <section className="py-24 bg-white border-y border-gray-100">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div className="text-left">
            <span className="text-[10px] tracking-[0.4em] text-gray-400 uppercase font-black block mb-4">
              Commitment to Excellence
            </span>
            <h2 className="text-3xl md:text-4xl font-light text-black tracking-tight uppercase">
              Why Choose <span className="font-black italic">New Steps</span>
            </h2>
          </div>
          <p className="text-[11px] tracking-[0.1em] text-gray-400 uppercase font-medium max-w-[300px] text-left md:text-right">
            Designed for comfort, built for life's little adventures.
          </p>
        </div>

        {/* Features Row */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          {features.map((item, index) => (
            <div 
              key={index} 
              className={`group p-10 flex flex-col items-start transition-all duration-500 hover:bg-black
                ${index !== 2 ? 'border-b md:border-b-0 md:border-r border-gray-100' : ''} 
                ${index === 0 ? 'md:pl-0' : ''}`}
            >
              <div className="mb-8 text-black group-hover:text-white transition-colors duration-500">
                {item.icon}
              </div>

              <h3 className="text-[12px] font-black tracking-[0.2em] uppercase text-black group-hover:text-white transition-colors duration-500 mb-3">
                {item.title}
              </h3>
              
              <p className="text-sm text-gray-500 group-hover:text-gray-400 font-light leading-relaxed transition-colors duration-500 max-w-[240px]">
                {item.desc}
              </p>

              {/* Minimalist link-style indicator */}
              <div className="mt-6 h-[1px] w-0 bg-white transition-all duration-500 group-hover:w-12"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}