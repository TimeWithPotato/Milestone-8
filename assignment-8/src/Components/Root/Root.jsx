import { Outlet, useLocation, useNavigate } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Banner from "../Banner/Banner";

const Root = () => {
  const navigate = useNavigate();
  const handleNavigateToHome = () => {
    navigate("/home/all");
  };
  const loc = useLocation();

  return (
    <div>
      <div className="relative">
        <NavBar />
        <Banner />
        {loc.pathname === "/" && (
          <button
            onClick={handleNavigateToHome}
            className="bg-gradient-to-r from-gray-700 to-green-200  px-5 py-3 text-xl font-bold text-black mt-20 rounded-md"
          >
            Click on Home
          </button>
        )}
      </div>
      <Outlet />
    </div>
  );
};

export default Root;
