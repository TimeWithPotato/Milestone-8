import React, { useState } from "react";
import Link from "../Link/Link";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

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
        className="text-3xl md:hidden cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
      </div>
      <ul
              className={`md:flex md:flex-row md:justify-center md:items-center md:space-x-4 flex flex-col items-start gap-2 md:bg-transparent bg-slate-400 md:p-0 p-4 md:rounded-none rounded-lg absolute md:static z-10 w-60 md:w-auto transition-all duration-500 ease-in-out
                ${
                    isOpen
                        ? "top-16 opacity-500"
                        : "-top-96 md:opacity-100"
                } 
            `}>
              {
                routes.map((route) => (
                    <Link key={route.id} route={route} />))
              }
      </ul>
    </nav>
  );
};

export default NavBar;
