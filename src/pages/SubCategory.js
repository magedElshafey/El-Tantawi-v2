import React from "react";
import { useParams } from "react-router-dom";
const SubCategory = ({ data }) => {
  const params = useParams();
  const specialData = data.filter(
    (item) =>
      item.path === params.title &&
      item.subCategories.filter(
        (subcategory) => subcategory.enTitle === params.subTitle
      )
  );
  console.log("data from subCategory page", specialData);
  return (
    <div className="container py-5 mt-5 mt-md-0">
      <h3 className="fw-bolder fs-4 m-0 p-0 mb-3">{specialData[0].title}</h3>
    </div>
  );
};

export default SubCategory;
