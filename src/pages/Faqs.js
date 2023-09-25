import React from "react";
import FaqsDetails from "../components/faqs/FaqsDetails";

const Faqs = ({ data }) => {
  return (
    <div className="container py-5 py-md-3 mt-5 mt-md-0">
      <h3 className="text-center my-3">الأسئلة الشائعة</h3>
      <div className="faqContainer">
        {data.map((item, index) => (
          <FaqsDetails data={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Faqs;
