import React, { useState } from "react";
import style from "./Faqs.module.css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const FaqsDetails = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  return (
    <div>
      <div className=" d-flex align-items-center justify-content-between">
        <p className={`m-0 p-3`}>{data.title}</p>
        {activeIndex === null ? (
          <div className="p-3">
            <IoIosArrowDown
              className="pointer "
              size={20}
              onClick={() => setActiveIndex(data.id)}
            />
          </div>
        ) : (
          <div className="p-3">
            <IoIosArrowUp
              size={20}
              className="pointer"
              onClick={() => setActiveIndex(null)}
            />
          </div>
        )}
      </div>
      {activeIndex === data.id && <p className="m-0 px-3 my-2">{data.desc}</p>}
    </div>
  );
};

export default FaqsDetails;
