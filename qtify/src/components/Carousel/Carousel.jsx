import React, { useEffect } from "react";
import styles from "./Carousel.module.css";
import { useSwiper, SwiperSlide, Swiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import CarouselLeftNavigation from "./CarouselLeftNavigation";
import CarouselRightNavigation from "./CarouselRightNavigation";
import "swiper/css";
const Controls = ({ data }) => {
  const swiper = useSwiper();
  useEffect(() => {
    swiper.slideTo(0, null);
  }, [data]);
  return <></>;
};
const Carousel = ({ data, renderComponent }) => {
  const { wrapper } = styles;
  return (
    <div className={wrapper}>
      <Swiper
        style={{ padding: "0px 20px" }}
        intialSlide={0}
        modules={[Navigation]}
        slidesPerView="auto"
        spaceBetween={40}
        allowTouchMove
      >
        <Controls />
        <CarouselLeftNavigation />
        <CarouselRightNavigation />
        {data.map((ele) => {
          return <SwiperSlide>{renderComponent(ele)}</SwiperSlide>;
        })}
      </Swiper>
    </div>
  );
};
export default Carousel;
