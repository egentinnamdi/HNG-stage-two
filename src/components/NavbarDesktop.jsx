import { NavLink } from "react-router-dom";

function NavbarDesktop() {
  return (
    <div className="flex  justify-around items-center capitalize text-2xl font-semibold text-primary">
      <span>home</span>
      <NavLink to="/cart">store</NavLink>
      <span>contact</span>
      <span>label</span>
    </div>
  );
}

export default NavbarDesktop;
