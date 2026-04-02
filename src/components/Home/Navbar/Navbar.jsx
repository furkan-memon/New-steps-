import React from "react";
import Searchinp from "./Searchinp";
import Login from "./Login.jsx";
import Cart from "./Cart.jsx";
import { Link,NavLink } from "react-router-dom";
import { Menu, Search, Star } from "lucide-react";
import { useEffect,useState } from "react";
import SidePanel from "./Sidepanle.jsx";
import PanelContent from "./PanelContent.jsx";
const Navbar = () => {
const [panel, setPanel] = useState(null);
  return (
   <header
  className=' top-0 left-0   z-[1000] container mx-auto    transition-all duration-500 
  '
>
      <div className=" block container bg-white  lg:bg-white/60  lg:mt-4  px-4  py-4">
        <div className="flex items-center justify-between gap-8">
          <div>
      <Link to="/">
        <img
          src="images/logo.png"
          alt="logo"
          className="xl:h-20 h-9"
        />
      </Link>
    </div>
   <ul className='hidden lg:flex gap-8 text-sm text-gray-700'>
                {["/", "/collection", "/about", "/contact"].map((path, index) => {
                    const names = ["HOME", "COLLECTION", "ABOUT", "CONTACT"]
                    return (
                        <NavLink
                            key={index}
                            to={path}
                            className={({ isActive }) =>
                                ` relative inline-block group text-[17px]  cursor-pointer pb-1 transition font-bold duration-300 ${isActive ? "text-[#0F3558]" : "hover:text-[#0F3558]"
                                }`
                            }
                        >
                            {names[index]}
                            <span class="absolute left-0 bottom-0 h-[2px] w-full bg-[#0F3558]
               origin-right scale-x-0 
               transition-transform duration-300 ease-in-out
              group-hover:origin-left group-hover:scale-x-100">
     </span>
                        </NavLink>
                    )
                })}
            </ul>
           <div className="flex items-center gap-6">
            <Search />

             <Login />
             <Link to='/Wishlist'>
             <Star />
             </Link>

             <Cart />
             <div  onClick={() => setPanel("menu")} className="sm:hidden  ">
             <Menu />
             </div>
           </div>
        </div>
      </div>
      <SidePanel
        open={panel !== null}
        onClose={() => setPanel(null)}
        title="Menu"
        
      >
        <PanelContent panel={panel} setPanel={setPanel} />
      </SidePanel>
      
    </header>
  );
};

export default Navbar;
