import { createContext } from "react";
import BannerImg from "../Banner/BannerImg";

export const SubBannerContext = createContext();

const SubBannerContextProvider = ({ children }) => {
  const styles = {
    bannerWrapper: "relative w-6/12 border-2 rounded-md mt-10",
    content: "w-full h-auto object-cover border-8 rounded-md border-white",
    topBorder: "absolute top-0 w-full border-t-8 border-t-violet-300 rounded-md",
    leftBorder: "absolute top-0 left-0 h-[232px] w-1/2 border-l-8 border-l-violet-300 rounded-t-md",
    rightBorder: "absolute top-0 right-0 h-[232px] w-1/2 border-r-8 border-r-violet-300 rounded-t-md",
  };

  return (
    <SubBannerContext.Provider value={{ styles }}>
      {children}
    </SubBannerContext.Provider>
  );
};

export default SubBannerContextProvider;
