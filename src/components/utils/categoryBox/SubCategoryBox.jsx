import React from "react";
import style from "./categoryBox.module.css";
import { Link } from "react-router-dom";
const SubCategoryBox = ({ mainCategory, data }) => {
  return (
    <div className="my-3 d-flex align-items-center gap-3 flex-wrap">
      {data.map((item, index) => (
        <Link
          to={`/cat/${mainCategory}/${item.enTitle}`}
          key={index}
          className={`d-flex flex-column align-items-center p-3 gap-3 ${style.mainContainer}`}
        >
          <img
            loading="lazy"
            alt="subCategory/box"
            src={item.mainImg}
            className={style.img}
          />
          <p className={`p-0 m-0 ${style.title}`}>{item.title}</p>
        </Link>
      ))}
    </div>
  );
};

export default SubCategoryBox;
