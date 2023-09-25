import React from "react";
import style from "./accountDetails.module.css";
const AccountDetailsForm = () => {
  return (
    <div className={style.mainContainer}>
      <h3 className="text-center pt-3">بيانات الحساب</h3>
      <p className="mx-0 mt-0 mb-3 p-3">تعديل الحساب</p>
      <form className="p-3">
        <div className="row mb-3">
          <div className="col-12 col-md-6 mb-3 mb-md-0">
            <label className="d-block mb-1" htmlFor="name">
              الاسم
            </label>
            <input type="text" id="name" className={style.inp} />
          </div>
          <div className="col-12 col-md-6 mb-3 mb-md-0">
            <label className="d-block mb-1" htmlFor="user">
              اسم المستخدم
            </label>
            <input type="text" id="user" className={style.inp} />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-12 col-md-6 mb-3 mb-md-0">
            <label className="d-block mb-1" htmlFor="email">
              البريد الالكتروني
            </label>
            <input type="email" id="email" className={style.inp} />
          </div>
          <div className="col-12 col-md-6 mb-3 mb-md-0">
            <label className="d-block mb-1" htmlFor="phone">
              رقم الموبايل
            </label>
            <input type="text" id="phone" className={style.inp} />
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-12 col-md-6 mb-3 mb-md-0">
            <label className="d-block mb-1" htmlFor="city">
              المحافظة
            </label>
            <input type="text" id="city" className={style.inp} />
          </div>
          <div className="col-12 col-md-6 mb-3 mb-md-0">
            <label className="d-block mb-1" htmlFor="address">
              العنوان بالتفصيل
            </label>
            <input type="text" id="address" className={style.inp} />
          </div>
        </div>
        <button
          className={`d-flex align-items-center justify-content-center ${style.btn}`}
        >
          حفظ التغيرات
        </button>
      </form>
      <hr className={style.line} />
      <div>
        <h3 className="text-center pt-3 mb-3">تعديل كلمة المرور</h3>
        <form className="p-3">
          <div className="mb-3">
            <label className="d-block mb-1" htmlFor="current">
              كلمة المرور الحالية
            </label>
            <input id="current" className={style.inp} type="password" />
          </div>
          <div className="row mb-4">
            <div className="col-12 col-md-6 mb-3 mb-md-0">
              <label className="d-block mb-1" htmlFor="new">
                كلمة المرور الجديدة
              </label>
              <input id="new" className={style.inp} type="password" />
            </div>
            <div className="col-12 col-md-6 mb-3 mb-md-0">
              <label className="d-block mb-1" htmlFor="confirm">
                تأكيد كلمة المرور
              </label>
              <input id="confirm" className={style.inp} type="password" />
            </div>
          </div>
          <button
            className={`d-flex align-items-center justify-content-center ${style.btn}`}
          >
            حفظ التغيرات
          </button>
        </form>
      </div>
    </div>
  );
};

export default AccountDetailsForm;
