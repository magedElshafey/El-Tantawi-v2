import React, { useState } from "react";
import style from "./FixedBtns.module.css";
import { BsArrowUp } from "react-icons/bs";
import { useEffect } from "react";
const FixedBtns = () => {
  const [showArrow, setShowArrow] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <div
        className={`${style.arrowContainer} ${
          showArrow ? style.show : style.hide
        }`}
      >
        <BsArrowUp size={20} />
      </div>
      <div className={style.faceContainer}>
        <a
          target="_blank"
          href="www.facebook.com"
          className="d-inline-block m-0 p-2 text-white"
        >
          تواصل معنا
        </a>
      </div>
    </div>
  );
};

export default FixedBtns;
