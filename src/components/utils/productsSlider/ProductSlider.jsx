import React from "react";
import style from "./productSlider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom";
const ProductSlider = ({ data }) => {
  const swiperOptions = {
    loop: true,
    centeredSlides: false,
    spaceBetween: 5,
    navigation: false,

    pagination: {
      clickable: true,
    },
    breakpoints: {
      500: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      900: {
        slidesPerView: 4,
      },
      1024: {
        slidesPerView: 5,
      },
    },
  };
  return (
    <div className="py-3">
      <h3 className={`m-0 p-0 mb-3 fs-3 fw-bolder`}>{data.title}</h3>
      <Swiper
        scrollbar={{ draggable: true }}
        {...swiperOptions}
        modules={[Scrollbar]}
      >
        {data.products.map((item, index) => (
          <SwiperSlide
            className={`d-flex flex-column align-items-center ${style.mainContainer}`}
            key={index}
          >
            <Link className="p-3" to={`/product/${item.id}`}>
              <img
                alt="product/img"
                loading="lazy"
                src={item.img}
                className={style.img}
              />
            </Link>
            <Link
              className={`d-inline-block px-3 m-0 mb-3  text-center ${style.title}`}
              to={`/product/${item.id}`}
            >
              {item.title}
            </Link>
            <p className="fs-5 fw-bolder m-0 p-0 px-2 mb-2">
              {item.disscount
                ? item.orignalPrice - item.disscount
                : item.orignalPrice}
              .00 جنيه
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSlider;
