import React from 'react';

export const ActionButton = ({ text ,color,textc}) => (
 <button style={{ backgroundColor: color , color : textc}} className={`group  text-white mt-2 px-5 py-2.5 rounded-full flex items-center gap-2 text-sm font-bold transition-all shadow-md shadow-[#00796B]/20`}>
  {text}
  <span className="bg-white text-[#0F3558] rounded-full p-1 transition-transform duration-300 group-hover:rotate-45">
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="7" y1="17" x2="17" y2="7"></line>
      <polyline points="7 7 17 7 17 17"></polyline>
    </svg>
  </span>
</button>
);

// export const PromoCard = ({ title, subtitle, imageSrc }) => (
//   <div className="bg-white    p-8 flex flex-col justify-between relative overflow-hidden h-full min-h-[220px] ">
//     <div className="z-10 relative">
//       <h2 className="text-xl font-bold mb-1 text-gray-900">{title}</h2>
//       <p className="text-gray-400 text-xs mb-5 font-medium">{subtitle}</p>
//       <ActionButton text="Shop Now" />
//     </div>
//     <img 
//       src={imageSrc} 
//       className="absolute bottom-4 right-4 w-72 h-72 object-contain" 
//       alt="" 
//       onError={(e) => e.target.style.display = 'none'} 
//     />
//   </div>
// );