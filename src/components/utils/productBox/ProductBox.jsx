import React from "react";
import style from "./productBox.module.css";
import { Link } from "react-router-dom";
const ProductBox = ({ key, data }) => {
  return (
    <div key={key} className={style.mainContainer}>
      <img
        loading="lazy"
        alt="product/img"
        src={data.img}
        className={style.mainImg}
      />
      <Link
        to={`/product/${data.id}`}
        className={`d-inline-block ${style.title} text-center`}
      >
        {data.title}
      </Link>
      <p className="my-2 p-0 px-2 fs-4 fw-bolder">
        {data.disscount
          ? data.orignalPrice - data.disscount
          : data.orignalPrice}
        .00 جنيه
      </p>
    </div>
  );
};

export default ProductBox;
