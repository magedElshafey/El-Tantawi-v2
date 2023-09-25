import React, { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import SubCategoryBox from "../components/utils/categoryBox/SubCategoryBox";
import ProductSlider from "../components/utils/productsSlider/ProductSlider.jsx";
import ProductFilter from "../components/utils/ProductFilter/ProductFilter";
import ProductBox from "../components/utils/productBox/ProductBox";
const MainCategory = ({ data }) => {
  const params = useParams();
  const specialData = data.filter((item) => item.path === params.title);
  const [price, setPrice] = useState("");
  const sectionRef = useRef(null);
  const handleFilterClick = () => {
    if (sectionRef.current) {
      const sectionTop = sectionRef.current.offsetTop;
      window.scrollTo({ top: sectionTop, behavior: "smooth" });
    }
  };
  return (
    <div className="container py-5 mt-5 mt-md-0">
      <h3 className="fw-bolder fs-4 m-0 p-0 mb-3">
        {specialData[0].mainCategory}
      </h3>
      {specialData[0].subCategories && (
        <SubCategoryBox
          data={specialData[0].subCategories}
          mainCategory={specialData[0].path}
        />
      )}
      <ProductSlider data={specialData[0].bestSaller} />
      <ProductSlider data={specialData[0].specialProducts} />
      <ProductSlider data={specialData[0].famous} />
      <div className="row my-3">
        <div className="col-12 col-md-3">
          <ProductFilter />
        </div>
        <div className="col-12 col-md-9">
          <div className="d-flex align-items-center  gap-2 flex-wrap">
            {specialData[0].products.map((item, index) => (
              <ProductBox key={index} data={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCategory;
