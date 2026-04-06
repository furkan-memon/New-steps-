import React from "react";

const InfoCard = ({ icon, title, desc }) => {
  return (
    <div className="flex flex-col items-center text-center p-8 border border-gray-200 rounded-2xl bg-white hover:shadow-md transition">

      <div className="w-14 h-14 bg-[#FFF7CD] text-[#0f766e] rounded-full flex items-center justify-center mb-4 text-xl">
        {icon}
      </div>

      <h4 className="font-semibold text-gray-800 mb-2">
        {title}
      </h4>

      <p className="text-sm text-gray-500 max-w-[220px]">
        {desc}
      </p>

    </div>
  );
};

export default InfoCard;