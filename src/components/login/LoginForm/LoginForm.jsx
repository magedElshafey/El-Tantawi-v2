import React, { useState } from "react";
import style from "./loginForm.module.css";
import { Link } from "react-router-dom";
import facebook from "../../../assets/social/icons8-facebook-48.png";
import google from "../../../assets/social/icons8-google-32.png";
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div
      data-aos="zoom-in"
      data-aos-delay="400"
      className={style.mainContainer}
    >
      <h4 className="mb-4  p-0 fw-bolder">تسجيل دخول</h4>
      <form>
        <div className="mb-3">
          <label htmlFor="email" className={`d-block mb-1 ${style.label}`}>
            البريد الإلكتروني
          </label>
          <input
            type="email"
            placeholder="البريد الإلكتروني"
            className={style.inp}
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className={`d-block mb-1 ${style.label}`}>
            كلمة المرور
          </label>
          <input
            type="password"
            placeholder="كلمة المرور"
            className={style.inp}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Link
          to="/forget"
          className={`${style.link} d-flex  justify-content-end mb-3`}
        >
          نسيت كلمة المرور ؟{" "}
        </Link>
        <button className={style.btn}>تسجيل الدخول</button>
        <hr className="line" />

        <button className={`${style.facebookBtn} gap-2 mb-3`}>
          <img
            loading="lazy"
            alt="facebook/icon"
            src={facebook}
            className={style.facebook}
          />
          <span className={`m-0 p-0 ${style.faceText}`}>
            تسجيل الدخول بواسطة الفيسبوك
          </span>
        </button>
        <button className={`${style.gmailBtn} gap-2 mb-3`}>
          <img
            loading="lazy"
            alt="facebook/icon"
            src={google}
            className={style.facebook}
          />
          <span className={`m-0 p-0 ${style.faceText}`}>
            تسجيل الدخول بواسطة جوجل
          </span>
        </button>
        <Link
          to="/reg"
          className={`${style.link}  d-flex  justify-content-end mb-3`}
        >
          ليس لديك حساب ؟ <span className="m-0 p-0 fw-bolder">إنشاء حساب</span>
        </Link>
      </form>
    </div>
  );
};

export default LoginForm;
