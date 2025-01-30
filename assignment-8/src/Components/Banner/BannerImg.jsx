import { useContext, useEffect, useState } from "react";
import { SubBannerContext } from "../SubBanner/SubBannerContext";
import { useLocation } from "react-router-dom";
const BannerImg = ({content}) => {
  const { styles } = useContext(SubBannerContext);
  return (
      <div className={styles.bannerWrapper}>
        <img src={content} alt="" className={styles.content} />
        <div className={styles.topBorder} />
        <div className={styles.leftBorder} />
        <div className={styles.rightBorder} />
      </div>
  );
};

export default BannerImg;
