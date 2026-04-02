import React from 'react';

export const ActionButton = ({ text }) => (
 <button  className={`group/button  text-[#0F3558] bg-white mt-2 px-5 py-2.5 rounded-full flex items-center gap-2 text-sm font-bold transition-all shadow-md shadow-[#00796B]/20`}>
  {text}
  <span className="bg-[#0F3558] text-white rounded-full p-1 transition-transform duration-300  group-hover/button:rotate-45">
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

