import React from "react";
import style from "./ServiecesOffers.module.css";
import { Link } from "react-router-dom";
const ServicesOffers = ({ data }) => {
  return (
    <div className="py-5 d-flex align-items-center justify-content-center gap-3 flex-wrap">
      {data.map((item, index) => (
        <div key={index} className={`m-0 p-0 pb-2 ${style.mainContainer}`}>
          <p className={`p-3 m-0  ${style.title}`}>{item.title}</p>
          <Link to={item.path}>
            <img
              loading="lazy"
              src={item.img}
              alt="services/img"
              className={style.mainImg}
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ServicesOffers;
/*
    <div
      key={key}
      className={`p-0 pb-3 m-0 ${style.mainContainer}  col-12 col-sm-6 col-md-4 col-lg-3 mb-2 mb-md-0`}
    >
      <p className={`p-2 mx-0 mt-0 mb-2 ${style.title}`}>{data.title}</p>
      <Link to={data.path}>
      
      </Link>
    </div>
*/
