import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { X } from "lucide-react";

const SidePanel = ({ open, onClose, title, children }) => {
  const panelRef = useRef();
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";

      gsap.fromTo(
        panelRef.current,
        { x: 420 },
        { x: 0, duration: 0.35, ease: "power3.out" }
      );
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  if (!open) return null;

  const closePanel = () => {
    gsap.to(panelRef.current, {
      x: 420,
      duration: 0.3,
      ease: "power3.in",
      onComplete: onClose,
    });
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-1001">
      <div className="absolute inset-0 bg-black/40" onClick={closePanel} />

      <div
        ref={panelRef}
        className=
            "absolute right-0 top-0 h-[90%] overflow-scroll m-7 rounded-2xl md:w-[50vw] sm:w-[70vw] w-[80vw] bg-white shadow-xl flex flex-col"
           
      >
      <div className="flex justify-between border-b sticky bg-white border-gray-300  top-0 z-20 py-3 px-5 items-center">
          <h2 className="text-[13px] font-medium">{title}</h2>
          <button onClick={closePanel}>
            <X size={20} />
          </button>
        </div>

        {children}
        

       
      </div>
    </div>
  );
};
export default SidePanel;
// ${subtotal.toFixed(2)}
