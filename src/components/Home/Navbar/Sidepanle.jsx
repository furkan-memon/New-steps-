import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { X } from "lucide-react";

const SidePanel = ({ open, onClose, title, children }) => {
  const panelRef = useRef();
  const backdropRef = useRef();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      gsap.to(backdropRef.current, { opacity: 1, duration: 0.4 });
      gsap.fromTo(panelRef.current, { x: "100%" }, { x: 0, duration: 0.5, ease: "power4.out" });
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  const closePanel = () => {
    gsap.to(backdropRef.current, { opacity: 0, duration: 0.3 });
    gsap.to(panelRef.current, { x: "100%", duration: 0.4, ease: "power4.in", onComplete: onClose });
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[2000] flex justify-end">
      <div ref={backdropRef} className="absolute inset-0 bg-black/60 backdrop-blur-[2px] opacity-0" onClick={closePanel} />
      <div ref={panelRef} className="relative w-full sm:w-[450px] lg:w-[500px] h-full bg-white shadow-2xl flex flex-col border-l border-gray-100">
        <div className="flex justify-between items-center py-8 px-10 border-b border-gray-50 bg-white">
          <div className="flex flex-col text-left">
            <span className="text-[9px] tracking-[0.4em] text-gray-400 uppercase font-black block mb-1">Store</span>
            <h2 className="text-sm font-black tracking-[0.2em] uppercase text-black">{title}</h2>
          </div>
          <button onClick={closePanel} className="group flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-gray-400 hover:text-black transition-all">
            Close
            <div className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center group-hover:bg-black group-hover:text-white group-hover:rotate-90 transition-all">
              <X size={14} strokeWidth={3} />
            </div>
          </button>
        </div>
        <div className="flex-1 overflow-y-auto no-scrollbar px-10 pb-10">{children}</div>
      </div>
    </div>
  );
};
export default SidePanel;