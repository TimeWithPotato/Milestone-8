import React, { useState } from "react";
import Link from "../Link/Link";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "*", name: "404" },
  ];
  return (
    <nav>
      <div
        className="cursor-pointer mb-5 md:hidden"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {isOpen ? (
          <CgClose className="text-3xl" />
        ) : (
          <GiHamburgerMenu className="text-3xl" />
        )}
      </div>
      <ul
            className={`md:flex md:justify-center md:items-center md:flex-row md:space-x-4 
                        flex flex-col items-start 
                        md:bg-white bg-slate-600 text-white md:text-black 
                        p-5 md:w-auto w-3/12
                        ${
                            isOpen
                            ? "translate-y-1 transition-transform duration-1000 ease-in-out"
                            : "-translate-y-64 transition-transform duration-1000 ease-in-out"
                        }
                        md:translate-y-0 md:transition-none md:static`}
        >
            {routes.map((route) => (
            <Link key={route.id} route={route} />
            ))}
      </ul>
    </nav>
  );
};

export default NavBar;
