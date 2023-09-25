import React from "react";
import style from "./contactForm.module.css";
import { useState } from "react";
import useNameValidation from "../../hooks/validation/useNameValidation";
import useEmailValidation from "../../hooks/validation/useEmailValidation";
import usePhoneNumberValidation from "../../hooks/validation/usePhoneValidations";
const ContactForm = () => {
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState("");
  const { name, isValid, handleNameChange } = useNameValidation();
  const { email, isValidEmail, setIsValidEmail, handleEmailChange } =
    useEmailValidation();
  const { phoneNumber, isVlidPhone, validatePhoneNumber } =
    usePhoneNumberValidation();

  return (
    <div className="row justify-content-center mb-4">
      <form className={`col-12 col-md-8 p-3 ${style.mainForm}`}>
        <div className="mb-2">
          <label htmlFor="name" className="label d-block mb-1">
            الإسم
          </label>
          <input
            value={name}
            onChange={(e) => handleNameChange(e.target.value)}
            id="name"
            required
            type="text"
            className={style.inp}
          />
          {!isValid && (
            <p className="error my-1 p-0">لا يمكن كتابة احقال في هذا الحقل</p>
          )}
        </div>
        <div className="mb-2">
          <label htmlFor="email" className="label d-block mb-1">
            الإيميل
          </label>
          <input
            value={email}
            onChange={(e) => handleEmailChange(e.target.value)}
            required
            id="email"
            type="email"
            className={style.inp}
          />
          {!isValidEmail && (
            <p className="error my-1">هذا البريد الالكتروني غير صالح</p>
          )}
        </div>
        <div className="mb-2">
          <label htmlFor="tel" className="label d-block mb-1">
            رقم الموبايل
          </label>
          <input
            required
            id="tel"
            type="tel"
            className={style.inp}
            value={phoneNumber}
            onChange={(e) => validatePhoneNumber(e.target.value)}
          />
          {!isVlidPhone && <p className="error my-2">هذا الرقم غير صالح</p>}
        </div>
        <div className="mb-2">
          <label htmlFor="msg" className="label d-block mb-1">
            رسالتك
          </label>
          <textarea
            value={msg}
            onChange={(e) => setMsg(e.target.value())}
            required
            id="msg"
            type="text"
            className={style.text}
          />
        </div>
        <div className="d-flex justify-content-center">
          <button className={style.btn}>ارسال</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
