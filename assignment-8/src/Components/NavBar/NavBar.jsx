import { NavLink, useLocation } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
const NavBar = () => {
  const links = [
    { path: "/home/all", label: "Home" },
    { path: "/dashboard", label: "Dashboard" },
    { path: "/statistics", label: "Statistics" },
  ];

  const loc = useLocation();
  const styleName = {
    absolute: "absolute",
    z: "z-10",
    textCenter: "text-center",
    width: "w-full",
    pt: "pt-5",
    pb: "pb-5",
    px: "px-5",
    textColor: "text-white",
  };
  return (
    <div
      className={`${
        loc.pathname.includes('/home')
          ? `${styleName.absolute} ${styleName.z} ${styleName.textCenter} ${styleName.width} ${styleName.pt} ${styleName.px} ${styleName.textColor} ${styleName.pb}`
          : " "
      }`}
    >
      <nav className="grid grid-cols-3 justify-between">
        <NavLink to="/home/all" className="text-left font-semibold text-xl">
          GadgetHeaven
        </NavLink>
        <ul className="flex space-x-3 items-center justify-center font-bold text-xl mb-5">
          {links.map((link, idx) => (
            <li key={idx}>
                  <NavLink to={link.path}>
                      {({ isActive }) => (
                          <button className={`${isActive ? "bg-violet-300 px-3 py-2 rounded-md":""}`}>
                              {link.label}
                          </button>
                      )}
                  </NavLink>
            </li>
          ))}
        </ul>
        <div className="flex justify-end text-3xl">
          <NavLink to="/dashboard/cart">
            <CiShoppingCart />
          </NavLink>
          <NavLink to="/dashboard/wishlist">
            <CiHeart />
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
