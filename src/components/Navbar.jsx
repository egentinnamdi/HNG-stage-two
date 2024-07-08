import "lazysizes";
import { Home, ShoppingCart, Store } from "lucide-react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="sticky left-0 bottom-0 w-full bg-primary flex justify-evenly items-center h-16">
      <div>
        <Store className="stroke-black " />
      </div>
      <NavLink to="/home">
        <Home className="stroke-black " />
      </NavLink>
      <NavLink to="/cart">
        <ShoppingCart className="stroke-black " />
      </NavLink>
    </div>
  );
}

export default Navbar;
