import { useState, useEffect } from "react";
import { 
  ChevronLeft, 
  ChevronRight, 
  Plus, 
  Minus, 
  Heart, 
  Share2, 
  ArrowLeftRight,
  Truck,
  Clock,
  RotateCcw,
  ShieldCheck,
  StarIcon
} from "lucide-react";
import img1 from '../../assets/images/product-details-slider-1.png'
import img2 from '../../assets/images/product-details-slider-2.png'
import img3 from '../../assets/images/product-details-slider-3.png'
import img4 from '../../assets/images/product-details-slider-6.png'
import InfoCard from './infoCard'
import Discription from './Discription'
import { Link } from "react-router-dom";
import TopOfferSection from "./card";
export default function ProductDetails() {
  const images = [
    img1,
     img2,
     img3,
     img4,
  ];
  
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    mins: 0,
    sec: 0,
  });
  
  
  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 282); 

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          mins: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          sec: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  const [activeImage, setActiveImage] = useState(0);
  const [qty, setQty] = useState(1);
  const [selectedSize, setSelectedSize] = useState("300 ML");

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 font-sans text-[#1a1c1e]">
      <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
        <span className="hover:text-teal-600 cursor-pointer">Home</span>
        <span>•</span>
        <span className="text-gray-600 font-medium">Product Details</span>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        <div className="flex gap-4">
          <div className="flex flex-col gap-3">
            {images.map((img, i) => (
              <div 
                key={i}
                onClick={() => setActiveImage(i)}
                className={`w-20 h-20 rounded-xl cursor-pointer overflow-hidden border-2 transition-all
                  ${activeImage === i ? "border-[#008080]" : "border-transparent bg-gray-50"}`}
              >
                <img src={img} className="w-full h-full object-contain p-2" alt="thumbnail" />
              </div>
            ))}
          </div>

          <div className="relative flex-1 bg-[#f3f4f6] rounded-[32px] flex items-center justify-center  overflow-hidden">
            <img 
              src={images[activeImage]} 
              className=" w-auto object-contain transition-transform duration-500 scale-110" 
              alt="main product" 
            />
            <button 
              onClick={() => setActiveImage((activeImage - 1 + images.length) % images.length)}
              className="absolute left-6 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md text-[#008080]"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={() => setActiveImage((activeImage + 1) % images.length)}
              className="absolute right-6 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md text-[#008080]"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="bg-white border border-gray-100 rounded-[32px] p-8 shadow-sm">
            <span className="inline-block text-[10px] font-bold bg-[#e8f5e9] text-[#2e7d32] px-3 py-1 rounded-md uppercase">
              New
            </span>
   <div className="flex justify-between items-center">
            <h1 className="text-3xl font-medium mt-4 text-[#1a1c1e]">
              VitaLife Omega-3 Softgels Heart...
            </h1>
               <Link to='/Wishlist' className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200   transition">
                          <Heart size={18} />
                        </Link>
              
   </div>

            <div className="flex items-center gap-2 mt-4">
              <div className="flex text-[#ffb800]">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <span className="text-gray-400 text-sm font-medium">(1.78k reviews)</span>
            </div>

            <div className="flex items-center gap-4 mt-6">
              <span className="text-4xl font-medium text-[#1a1c1e]">$62.97</span>
              <span className="text-xl text-gray-300 line-through font-medium">$39.99</span>
              <span className="bg-[#ff4d4d] text-white text-[11px] font-medium px-2 py-1 rounded-md">
                15% OFF
              </span>
            </div>

            <div className="mt-8">
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm font-bold text-[#1a1c1e]">Hurry Up! <span className="font-medium text-gray-500">Offer ends in:</span></p>
                <div className="flex gap-2">
                 <TimerUnit value={timeLeft.days} label="Days" />
      <TimerUnit value={timeLeft.hours} label="Hours" />
      <TimerUnit value={timeLeft.mins} label="Mins" />
      <TimerUnit value={timeLeft.sec} label="sec" />
                </div>
              </div>
              
              <p className="text-[13px] font-bold text-[#ff4d4d] mb-2">Please Hurry! Only 120 items Stock Left</p>
              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="w-[45%] h-full bg-[#ff4d4d] rounded-full" />
              </div>
            </div>

            <div className="mt-8">
              <p className="text-sm font-bold text-gray-700 mb-3">Pack Size: <span className="text-gray-400">{selectedSize}</span></p>
              <div className="flex gap-3 flex-wrap">
                {["60 ML", "120 ML", "220 ML", "250 ML", "300 ML", "500 ML"].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all border
                      ${selectedSize === size ? "bg-[#008080] text-white border-[#008080]" : "bg-white text-gray-500 border-gray-100 hover:border-[#008080]"}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <div className="flex items-center border border-gray-100 rounded-full px-2 py-1.5 shadow-sm">
                <button onClick={() => setQty(q => Math.max(1, q-1))} className="p-2 text-gray-400 hover:text-[#008080]"><Minus size={18} /></button>
                <span className="px-4 font-bold text-lg w-10 text-center">{qty}</span>
                <button onClick={() => setQty(q => q + 1)} className="p-2 text-gray-400 hover:text-[#008080]"><Plus size={18} /></button>
              </div>

              <button className="flex-1 bg-[#ffb800] text-[#1a1c1e] py-4 rounded-full font-medium hover:bg-[#eab308] transition-all shadow-lg shadow-[#ffb800]/20">
                Buy Now
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 bg-[#008080] text-white py-4 rounded-full font-medium hover:bg-[#006666] transition-all shadow-lg shadow-[#008080]/20">
               Add to Cart
              </button>
            </div>
       <div>

            <div className="flex gap-8 mt-8 border-t border-gray-50 pt-6">
              <button className="flex items-center gap-2 text-[13px] font-bold text-gray-500 hover:text-[#008080]"><ArrowLeftRight size={18} /> Compare</button>
              <button className="flex items-center gap-2 text-[13px] font-bold text-gray-500 hover:text-[#008080]"><Share2 size={18} /> Share</button>
            </div>
            <div className="flex flex-col text-[12px] gap-2 mt-3">
                <span className="font-semibold">Free Shiping :<span className="font-medium text-gray-500">Estimeted Delievry Time 5-7 Days </span></span>
                <span className="font-semibold">SKU :<span className="font-medium text-gray-500">SKU-001</span></span>
                <span className="font-semibold">Categories :<span className="font-medium text-gray-500"> Electronics,Computers,Accessories</span ></span>

            </div>
       </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 border-t border-gray-100 pt-12">
        <InfoCard icon={<Truck />} title="Free Shipping" desc="Enjoy the Convenience of Free Shipping on Every Order" />
        <InfoCard icon={<Clock />} title="24/7 Support" desc="Round-the-Clock Assistance, Anytime You Need It" />
        <InfoCard icon={<RotateCcw />} title="30 Days Return" desc="Your Satisfaction is Our Priority: Return Any Product within 30 Days" />
       <InfoCard icon={<ShieldCheck />} title="Secure Payment" desc="Seamless Security: Safe and Secure Payment Options" />
       
      </div>
      <div>
        <Discription />

      </div>
      <div>
        <TopOfferSection />
        
      </div>
    </div>
  );
}

function TimerUnit({ value, label }) {
  const isSeconds = label.toLowerCase() === 'sec';

  return (
    <div className="flex items-center">
      <div className="w-12 h-12 border border-[#ff4d4d] bg-[#fdf2f2] rounded-full flex flex-col items-center justify-center font-bold">
        <span className="text-[14px] leading-tight text-black">
          {String(value).padStart(2, '0')}
        </span>
        <span className="text-[8px] uppercase text-gray-500 -mt-0.5">
          {label}
        </span>
      </div>

      {!isSeconds && (
        <span className="text-lg font-bold text-gray-400 mx-1 mb-1">:</span>
      )}
    </div>
  );
}
function Star({ size, fill }) {
  return <StarIcon size={size} fill={fill} className="text-[#ffb800]" />;
}
