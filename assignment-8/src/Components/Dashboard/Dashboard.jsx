import { useEffect } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";

const Dashboard = () => {
  // console.log("Dashboard rendered");
  
  useEffect(() => {
    document.title = "Dashboard"
  },[])
  const loc = useLocation();
  return (
    <div>
          <h1 className="text-lg font-bold mt-2 text-[#9538E2]">{
              loc.pathname.includes("cart") ? "Your cart items are here" : loc.pathname.includes("wishlist") ? "Your wishlist items are here " : "Select Cart or Wishlist"
          }    
      </h1>
      {/* Links to Cart and Wishlist */}
      <Outlet />
    </div>
  );
};

export default Dashboard;
