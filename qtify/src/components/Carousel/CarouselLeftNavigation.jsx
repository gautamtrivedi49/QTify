import { useSwiper } from "swiper/react";
import React, { useEffect, useState } from "react";
import { ReactComponent as LeftArrow } from "../../assets/LeftArrow.svg";
import styles from "./Carousel.module.css";
const CarouselLeftNavigation = () => {
  const swiper = useSwiper();
  const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);
  useEffect(() => {
    swiper.on("slideChange", () => {
      setIsBeginning(swiper.isBeginning);
    });
  }, [swiper]);
  return (
    <div className={styles.leftNavigation}>
      {!isBeginning ? <LeftArrow onClick={() => swiper.slidePrev()} /> : null}
    </div>
  );
};
export default CarouselLeftNavigation;
