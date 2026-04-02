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
  className="absolute -right-20 w-56 bg-white shadow-lg rounded-xl
  border border-gray-100 opacity-0 translate-y-5 pointer-events-none z-[999]"
>
  <ul className="py-2 text-sm">
    {["login", "register", "forgot", "SetPassword"].map((path, index) => {
      const panel = ["Login", "Register", "Forgot Password", "Set Password"];
      const icon = [
        <Lock size={14} />,
        <Contact size={14} />,
        <KeyRound size={14} />,
        <RectangleEllipsis size={14} />,
      ];

      return (
        <li key={index} className="px-3">
          <span
            onClick={() => setPanel(path)}
            className="py-2 px-3 rounded-xl cursor-pointer flex items-center gap-3
            text-gray-600 hover:bg-[#2FA4D6]/10 hover:text-[#0F3558] transition"
          >
            <span className="bg-[#2FA4D6]/10 text-[#0F3558] p-2 rounded-full">
              {icon[index]}
            </span>
            {panel[index]}
          </span>
        </li>
      );
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
