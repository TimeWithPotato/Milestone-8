import { useLocation } from "react-router-dom";
import BannerContent from "./BannerContent.jsx";
import BannerImg from "./BannerImg.jsx";
import image from "../../assets/banner.jpg";

const Banner = () => {
  const loc = useLocation();
  const bannerContent = BannerContent(loc);

  return (
    <div>
      <div className="relative">
        <div
          className={`${
            (loc.pathname.includes('/home') || loc.pathname.includes("/viewdetails")) ? "pb-60" : ""
          } w-full bg-[#9538E2] text-white p-5 rounded-2xl pt-14`}
        >
          {bannerContent?.header}
          {bannerContent?.body}
        </div>
        <div className="absolute top-64 left-0 w-full flex justify-center">
          {
            loc.pathname.includes('/home') && <BannerImg content={image} />
          }
        </div>
      </div>
    </div>
  );
};

export default Banner;
