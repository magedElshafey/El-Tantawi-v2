import React, { useState } from "react";
import style from "./regForm.module.css";
import { Link } from "react-router-dom";

import facebook from "../../../assets/social/icons8-facebook-48.png";
import google from "../../../assets/social/icons8-google-32.png";
const RegForm = () => {
  const [fn, setFn] = useState("");
  const [ln, setLn] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div
      data-aos="zoom-in"
      data-aos-delay="400"
      className={style.mainContainer}
    >
      <h4 className="mb-4  p-0 fw-bolder">إنشاء حساب</h4>
      <form>
        <div className="row mb-3">
          <div className="col-12 col-md-6">
            <label htmlFor="fn" className={`d-block mb-1 ${style.label}`}>
              الأسم الأول
            </label>
            <input
              type="text"
              placeholder="الأسم الأول"
              className={style.inp}
              id="fn"
              value={fn}
              onChange={(e) => setFn(e.target.value)}
            />
          </div>
          <div className="col-12 col-md-6">
            <label htmlFor="email" className={`d-block mb-1 ${style.label}`}>
              الأسم الأخير
            </label>
            <input
              type="text"
              placeholder="الأسم الأخير"
              className={style.inp}
              id="ln"
              value={ln}
              onChange={(e) => setLn(e.target.value)}
            />
          </div>
        </div>
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
        <div className="row mb-3">
          <div className="col-12 col-md-6">
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
          <div className="col-12 col-md-6 my-3 mt-md-0">
            <label htmlFor="confirm" className={`d-block mb-1 ${style.label}`}>
              تأكيد كلمة المرور
            </label>
            <input
              type="password"
              placeholder="تأكيد كلمة المرور"
              className={style.inp}
              id="confirm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <button className={style.btn}>إنشاء حساب </button>
        <hr className="line" />

        <button className={`${style.facebookBtn} gap-2 mb-3`}>
          <img
            loading="lazy"
            alt="facebook/icon"
            src={facebook}
            className={style.facebook}
          />
          <span className={`m-0 p-0 ${style.faceText}`}>
            إنشاء حساب بواسطة الفيسبوك
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
            إنشاء حساب بواسطة جوجل
          </span>
        </button>
        <Link
          to="/login"
          className={`${style.link}  d-flex  justify-content-end mb-3`}
        >
          لديك حساب ؟ <span className="m-0 p-0 fw-bolder">تسجيل دخول</span>
        </Link>
      </form>
    </div>
  );
};

export default RegForm;
