import { NavLink } from "react-router-dom";

const BannerContent = (loc) => {
  let bannerContent;

  if (loc.pathname.includes('/home')) {
    bannerContent = {
      header: (
        <h1 className="text-3xl font-bold my-5 pt-5">
          Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories
        </h1>
      ),
      body: (
        <>
          <p className="text-sm my-5">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to <br /> the coolest accessories, we
            have it all!
          </p>
          <button className="text-[#9538E2] bg-white border rounded-full px-5 py-2">
            Shop Now
          </button>
        </>
      ),
    };
  } else if (loc.pathname.startsWith("/dashboard")) {
    bannerContent = {
      header: <h1 className="text-3xl font-bold my-5 pt-5">Dashboard</h1>,
      body: (
        <>
          <p className="text-sm my-5">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have it
            all!
          </p>
          <div className="flex justify-center space-x-2">
            <NavLink to="/dashboard/cart">
              {({ isActive }) => (
                <button
                  className={`${
                    isActive ? "text-[#9538E2] bg-white" : "text-white bg-[#9538E2]"
                  } border rounded-lg px-5 py-2`}
                >
                  Cart
                </button>
              )}
            </NavLink>
            <NavLink to="/dashboard/wishlist">
              {({ isActive }) => (
                <button
                  className={`${
                    isActive ? "text-[#9538E2] bg-white" : "text-white bg-[#9538E2]"
                  } border rounded-lg px-5 py-2`}
                >
                  Wishlist
                </button>
              )}
            </NavLink>
          </div>
        </>
      ),
    };
  } else if (loc.pathname === "/statistics") {
    bannerContent = {
      header: <h1 className="text-3xl font-bold my-5 pt-5">Statistics</h1>,
      body: (
        <p className="text-sm my-5">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      ),
    };
  } else if (loc.pathname.includes("/viewdetails")) {
    bannerContent = {
      header: <h1 className="text-3xl font-bold my-5 pt-5">Product Details</h1>,
      body: (
        <p className="text-sm my-5">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      ),
    };
  }

  return bannerContent;
};

export default BannerContent;
