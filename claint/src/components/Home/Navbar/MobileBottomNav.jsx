import { Heart, Home, ShoppingCart, User } from "lucide-react";
import { NavLink } from "react-router-dom";

const MobileBottomNav = ({ panel, setPanel }) => {

  // 🔥 THIS LINE IS KEY
  if (panel !== null) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 z-[1000] lg:hidden">
      
      <div className="flex justify-around py-3">

        <NavLink to="/" className="flex flex-col items-center text-xs">
          <Home size={22} />
          Home
        </NavLink>

        <NavLink to="/cart" className="flex flex-col items-center text-xs">
          <ShoppingCart size={22} />
          Cart
        </NavLink>

        <NavLink to="/wishlist" className="flex flex-col items-center text-xs">
          <Heart size={22} />
          Wishlist
        </NavLink>

        <button
          onClick={() => setPanel("login")}
          className="flex flex-col items-center text-xs text-gray-500"
        >
          <User size={22} />
          Profile
        </button>

      </div>
    </div>
  );
};
export default MobileBottomNav