import React from "react";
import style from "./mainHeader.module.css";
import logo from "../../../assets/logo-ar.png";
import { Link } from "react-router-dom";
// icons
import { AiOutlineSearch } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
const MainHeader = () => {
  return (
    <div className="d-none d-md-block">
      <div className="container py-2">
        <div className="row  align-items-center justify-content-between">
          <div className="col-2">
            <Link to="/">
              <img
                alt="logo"
                src={logo}
                className={style.logo}
                loading="lazy"
              />
            </Link>
          </div>
          <div className="col-9 position-relative">
            <input
              type="text"
              placeholder="هل تبحث عن منتج ؟ "
              className={`rounded-pill ${style.inp}`}
            />
            <AiOutlineSearch size={30} className={style.icon} />
          </div>
          <div className="col-1">
            <BsCartCheck
              className={`w-100 pointer ${style.cart} justify-content-end`}
              size={30}
            />
          </div>
        </div>
      </div>
      <hr className="line" />
    </div>
  );
};

export default MainHeader;
