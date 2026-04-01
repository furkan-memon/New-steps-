import React, { useRef,useState } from "react";
import { Lock, ChevronDown, Contact, KeyRound, RectangleEllipsis, User } from "lucide-react";
import gsap from "gsap";
import SidePanel from "./Sidepanle";
import { ForgotPasswordForm, LoginForm, RegisterForm } from "./panle";
import PanelContent from "./PanelContent";
import { NavLink } from "react-router-dom";
const Login = () => {
  const menuRef = useRef();
const [panel, setPanel] = useState(null);
  const showMenu = () => {
    gsap.to(menuRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.3,
      pointerEvents: "auto",
      ease: "power2.out",
    });
  };

  const hideMenu = () => {
    gsap.to(menuRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.3,
      pointerEvents: "none",
      ease: "power2.in",
    });
  };

  return (
    <>
    <li
      className="relative   inline-block"
      onMouseEnter={showMenu}
      onMouseLeave={hideMenu}
    >
      
      <div className="flex gap-3 items-center cursor-pointer">
        {/* <div className="bg-[#ffc107] px-3 py-3 rounded-full">
          <Lock size={16} />
        </div> */}
<User />

       

      </div>

    <div
  ref={menuRef}
  className="absolute -right-20 mt-2 w-56 bg-white shadow-lg rounded-md
  opacity-0 translate-y-5 pointer-events-none z-[999]"
>
    
         <ul className='py-2  text-sm'>
                        {["login", "register", "forgot", "SetPassword"].map((path, index) => {
                            const panel = ["Login", "Register", "Forgot Password", "Set Password"]
                            const icon = [ <Lock size={10} />, <Contact size={10} />, <KeyRound size={10} />,<RectangleEllipsis  size={10}/>]
                            return (
                                
                                  <li className="px-4 ">
                                       <span onClick={() => setPanel(path)} className="py-2 px-2 rounded-2xl cursor-pointer hover:bg-gray-100 flex items-center gap-2">
                                        <span  className="bg-gray-200 p-2 rounded-full">
                                           {icon[index]}
                                        </span>
                                    {panel[index]}
                                    </span>
                                    

                                  </li>
                            )
                        })}
                    </ul>
      </div>
    </li>
   <SidePanel
  open={panel !== null}
  onClose={() => setPanel(null)}
  title={
    panel === "login"
      ? "Log In"
      : panel === "register"
      ? "Crteate Your Account"
      : "Forgot Password"
  }
>
  <PanelContent panel={panel} setPanel={setPanel} />
</SidePanel>

    </>
    
  );
};

export default Login;
