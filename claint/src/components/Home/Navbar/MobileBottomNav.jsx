import { Heart, Home, ShoppingCart, User } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

const MobileBottomNav = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 z-[1000] lg:hidden">

      <div className="flex justify-around py-2">

        {/* HOME */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex flex-col items-center text-xs ${
              isActive ? "text-black" : "text-gray-500"
            }`
          }
        >
          <Home size={22} />
          <span>Home</span>
        </NavLink>

        {/* CART */}
        <NavLink
          to="/cart"
          className={({ isActive }) =>
            `flex flex-col items-center text-xs ${
              isActive ? "text-black" : "text-gray-500"
            }`
          }
        >
          <ShoppingCart size={22} />
          <span>Cart</span>
        </NavLink>

        {/* WISHLIST */}
        <NavLink
          to="/wishlist"
          className={({ isActive }) =>
            `flex flex-col items-center text-xs ${
              isActive ? "text-black" : "text-gray-500"
            }`
          }
        >
          <Heart size={22} />
          <span>Wishlist</span>
        </NavLink>

        {/* PROFILE */}
        <button
          onClick={() => navigate("/login")}
          className="flex flex-col items-center text-xs text-gray-500"
        >
          <User size={22} />
          <span>Profile</span>
        </button>

      </div>
    </div>
  );
};

export default MobileBottomNav;