import React, { useState } from "react";
import style from "./branches.module.css";
import { branches } from "../../fakers/data";
const OurBranches = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [selectedMap, setSelectedMap] = useState(0);
  return (
    <div className="py-3">
      <p className="fw-bold text-center fs-4">جاليري الطنطاوي</p>
      <div className="d-none d-sm-block">
        <div
          className={`row pt-2 pb-3 justify-content-center ${style.mainContainer}`}
        >
          <div className="col-12 mb-4 mb-sm-0 col-sm-4 d-flex flex-column  gap-4">
            {branches.map((branch, index) => (
              <div
                onClick={() => {
                  setSelectedIndex(index);
                  setSelectedMap(index);
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
                key={index}
                className={`${style.mainCard} p-4 ${
                  selectedIndex === index ? style.red : ""
                }`}
              >
                <p className="text-center fw-bold fs-4 mb-4 mt-0">
                  {branch.title}
                </p>
                <p>المدينة : {branch.city}</p>
                <p>المحافظة : {branch.governemnt}</p>
                <p>العنوان : {branch.address}</p>
                <p>الرقم : {branch.phone}</p>
                <a className="text-black" target="_blank" href={branch.website}>
                  {" "}
                  الموقع
                </a>
              </div>
            ))}
          </div>
          <div className="col-12 col-sm-8">
            {selectedMap === 0 && (
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1709.03723726204!2d31.38205775106736!3d31.05202621272491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2seg!4v1684755007477!5m2!1sar!2seg"
                width="100%"
                height="600"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            )}
            {selectedMap === 1 && (
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d27344.583747379525!2d31.40134855005405!3d31.052068143081517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z2LTYp9ix2Lkg2KfZhNmF2LfYp9mB2Yog2KjYp9mE2YXZhti12YjYsdip!5e0!3m2!1sar!2seg!4v1684755421501!5m2!1sar!2seg"
                width="100%"
                height="600"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            )}
            {selectedMap === 2 && (
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3418.7619743325977!2d31.400398324589784!3d31.0328806710653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f79dab1eda4189%3A0x76b54deb8e171c92!2z2YXYrNmF2Lkg2KfZhNmF2K3Yp9mD2YXYjCDYp9mE2YXZhti12YjYsdipICjZgtiz2YUgMinYjCDYp9mE2YXZhti12YjYsdip2Iwg2KfZhNiv2YLZh9mE2YrYqQ!5e0!3m2!1sar!2seg!4v1684755879159!5m2!1sar!2seg"
                width="100%"
                height="600"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            )}
            {selectedMap === 3 && (
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1709.03723726204!2d31.38205775106736!3d31.05202621272491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2seg!4v1684755007477!5m2!1sar!2seg"
                width="100%"
                height="600"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            )}
          </div>
        </div>
      </div>
      <div className="d-sm-none">
        <div
          className={`row pt-2 pb-3 justify-content-center ${style.mainContainer}`}
        >
          <div className="col-12 col-sm-8">
            {selectedMap === 0 && (
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1709.03723726204!2d31.38205775106736!3d31.05202621272491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2seg!4v1684755007477!5m2!1sar!2seg"
                width="100%"
                height="600"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            )}
            {selectedMap === 1 && (
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d27344.583747379525!2d31.40134855005405!3d31.052068143081517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z2LTYp9ix2Lkg2KfZhNmF2LfYp9mB2Yog2KjYp9mE2YXZhti12YjYsdip!5e0!3m2!1sar!2seg!4v1684755421501!5m2!1sar!2seg"
                width="100%"
                height="600"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            )}
            {selectedMap === 2 && (
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3418.7619743325977!2d31.400398324589784!3d31.0328806710653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f79dab1eda4189%3A0x76b54deb8e171c92!2z2YXYrNmF2Lkg2KfZhNmF2K3Yp9mD2YXYjCDYp9mE2YXZhti12YjYsdipICjZgtiz2YUgMinYjCDYp9mE2YXZhti12YjYsdip2Iwg2KfZhNiv2YLZh9mE2YrYqQ!5e0!3m2!1sar!2seg!4v1684755879159!5m2!1sar!2seg"
                width="100%"
                height="600"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            )}
            {selectedMap === 3 && (
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1709.03723726204!2d31.38205775106736!3d31.05202621272491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2seg!4v1684755007477!5m2!1sar!2seg"
                width="100%"
                height="600"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            )}
          </div>
          <div className="col-12 mb-4 mb-sm-0 col-sm-4 d-flex flex-column  gap-4">
            {branches.map((branch, index) => (
              <div
                onClick={() => {
                  setSelectedIndex(index);
                  setSelectedMap(index);
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
                key={index}
                className={`${style.mainCard} p-4 ${
                  selectedIndex === index ? style.red : ""
                }`}
              >
                <p className="text-center fw-bold fs-4 mb-4 mt-0">
                  {branch.title}
                </p>
                <p>المدينة : {branch.city}</p>
                <p>المحافظة : {branch.governemnt}</p>
                <p>العنوان : {branch.address}</p>
                <p>الرقم : {branch.phone}</p>
                <a className="text-black" target="_blank" href={branch.website}>
                  {" "}
                  الموقع
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurBranches;
