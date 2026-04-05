import { useRef, useEffect } from "react";
import gsap from "gsap";
import { LoginForm, RegisterForm, ForgotPasswordForm, Menu } from "./panle"
import CartPanel from "./CartPanle";
export default function PanelContent({ panel, setPanel }) {
  const contentRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, x: 20 },
      { opacity: 1, x: 0, duration: 0.35, ease: "power2.out" }
    );
  }, [panel]);

  return (
    <div ref={contentRef}>
      
      {panel === "cart" && <CartPanel setPanel={setPanel} />}
      {panel === "menu" && <Menu setPanel={setPanel} />  }
      
    </div>
  );
}