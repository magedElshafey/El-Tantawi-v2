import React from "react";
import style from "./authHeader.module.css";
import { Link } from "react-router-dom";
const AuthHeader = () => {
  return (
    <div className="d-none d-md-block">
      <div className="pt-2 container ">
        <div className="d-flex align-items-center gap-3 justify-content-end">
          <p className={`m-0 p-0 ${style.intro} fw-bold`}>مرحبا بك</p>
          <Link to="/login" className={style.link}>
            تسجيل الدخول
          </Link>
          <Link to="/reg" className={style.link}>
            إنشاء حساب
          </Link>
        </div>
      </div>
      <hr className="line" />
    </div>
  );
};

export default AuthHeader;
