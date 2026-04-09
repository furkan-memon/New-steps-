import React, { useState } from "react";
import { ShoppingBag, ShoppingCart } from "lucide-react";
import SidePanel from "./Sidepanle";
import PanelContent from "./PanelContent";

const Cart = () => {
  const [panel, setPanel] = useState(null);

  return (
    <>
      <li
        className="flex gap-3 justify-center items-center cursor-pointer"
        onClick={() => setPanel("cart")}
      >
        
<ShoppingBag />
      </li>

      <SidePanel
        open={panel !== null}
        onClose={() => setPanel(null)}
        title="Cart Products"
         >
        <PanelContent panel={panel} setPanel={setPanel} />
      </SidePanel>
    </>
  );
};

export default Cart;