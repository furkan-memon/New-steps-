import { Heart, Home, ShoppingBag, User } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

const MobileBottomNav = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-100 z-[1000] lg:hidden pb-safe shadow-[0_-5px_20px_rgba(0,0,0,0.02)]">
      <div className="flex justify-around items-center h-16">
        
        {/* Each link uses text-[9px] and font-black to match the brand */}
        <NavLink to="/" className={({ isActive }) => `flex flex-col items-center gap-1 transition-all duration-300 ${isActive ? "text-black" : "text-gray-300"}`}>
          {({ isActive }) => (
            <>
              <Home size={20} strokeWidth={isActive ? 2.5 : 1.5} />
              <span className="text-[9px] font-black uppercase tracking-[0.2em]">Home</span>
              {isActive && <div className="w-1 h-1 bg-black rounded-full absolute bottom-1.5"></div>}
            </>
          )}
        </NavLink>

        <NavLink to="/cart" className={({ isActive }) => `flex flex-col items-center gap-1 transition-all duration-300 ${isActive ? "text-black" : "text-gray-300"}`}>
          {({ isActive }) => (
            <>
              <ShoppingBag size={20} strokeWidth={isActive ? 2.5 : 1.5} />
              <span className="text-[9px] font-black uppercase tracking-[0.2em]">Bag</span>
              {isActive && <div className="w-1 h-1 bg-black rounded-full absolute bottom-1.5"></div>}
            </>
          )}
        </NavLink>

        <NavLink to="/wishlist" className={({ isActive }) => `flex flex-col items-center gap-1 transition-all duration-300 ${isActive ? "text-black" : "text-gray-300"}`}>
          {({ isActive }) => (
            <>
              <Heart size={20} strokeWidth={isActive ? 2.5 : 1.5} />
              <span className="text-[9px] font-black uppercase tracking-[0.2em]">Saved</span>
              {isActive && <div className="w-1 h-1 bg-black rounded-full absolute bottom-1.5"></div>}
            </>
          )}
        </NavLink>

        <button onClick={() => navigate("/login")} className="flex flex-col items-center gap-1 text-gray-300">
          <User size={20} strokeWidth={1.5} />
          <span className="text-[9px] font-black uppercase tracking-[0.2em]">Profile</span>
        </button>

      </div>
    </div>
  );
};

export default MobileBottomNav;