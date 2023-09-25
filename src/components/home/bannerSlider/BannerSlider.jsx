import React from "react";
import style from "./bannerSlider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
const BannerSlider = ({ data }) => {
  const swiperOptions = {
    loop: true,
    centeredSlides: true,
    spaceBetween: 0,
    navigation: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      clickable: true,
    },
    breakpoints: {
      500: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      900: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 1,
      },
    },
  };
  return (
    <Swiper modules={[Autoplay, Navigation]} {...swiperOptions}>
      {data.map((item, index) => (
        <SwiperSlide key={index}>
          <Link to={item.path}>
            <img
              loading="lazy"
              src={item.img}
              alt="banner/img"
              className={style.mainImg}
            />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BannerSlider;
