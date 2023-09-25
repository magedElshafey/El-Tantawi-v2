import React from "react";
import style from "./categoriesHeader.module.css";
import { Link } from "react-router-dom";
const CategoriesHeader = ({ data }) => {
  return (
    <div className={`d-none d-md-block ${style.mainDiv} py-2`}>
      <div className={`${style.content}`}>
        <div className="container">
          <ul className="m-0 p-0  d-flex align-items-center  justify-content-between">
            {data.map((item, index) => (
              <li className={style.bg} key={index}>
                <Link className={style.link} to={`/cat/${item.path}`}>
                  {item.mainCategory}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CategoriesHeader;
