import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <aside className="border-2 w-[300px] h-[300px] bg-white m-5 px-12 flex flex-col items-center justify-around rounded-xl shadow-xl text-white">
      <div>
        <NavLink to="/home/all">
          {({ isActive }) => (
            <span className={`${isActive ? "bg-[#9538E2]" : " bg-gray-500"} hover:bg-[#f81577] px-5 py-2 rounded-lg`}>
              All Products
            </span>
          )}
        </NavLink>
      </div>
      <div>
        <NavLink to="/home/laptop">
          {({ isActive }) => (
            <span className={`${isActive ? "bg-[#9538E2]" : " bg-gray-500"} hover:bg-[#f81577] px-5 py-2 rounded-lg`}>
              Laptops
            </span>
          )}
        </NavLink>
      </div>
      <div >
        <NavLink to="/home/phones">
          {({ isActive }) => (
            <span className={`${isActive ? "bg-[#9538E2]" : " bg-gray-500"} hover:bg-[#f81577] px-5 py-2 rounded-lg`}>
              Phones
            </span>
          )}
        </NavLink>
      </div>
      <div>
        <NavLink to="/home/accessories">
          {({ isActive }) => (
            <span className={`${isActive ? "bg-[#9538E2]" : " bg-gray-500"} hover:bg-[#f81577] px-5 py-2 rounded-lg`}>
              Accessories
            </span>
          )}
        </NavLink>
      </div>
      <div>
        <NavLink to="/home/smartwatch">
          {({ isActive }) => (
            <span className={`${isActive ? "bg-[#9538E2]" : " bg-gray-500"} hover:bg-[#f81577] px-5 py-2 rounded-lg`}>
              Smart Watches
            </span>
          )}
        </NavLink>
      </div>
      <div>
        <NavLink to="/home/macbook">
          {({ isActive }) => (
            <span className={`${isActive ? "bg-[#9538E2]" : " bg-gray-500"} hover:bg-[#f81577] px-5 py-2 rounded-lg`}>
              MacBook
            </span>
          )}
        </NavLink>
      </div>
    </aside>
  );
};

export default SideBar;
