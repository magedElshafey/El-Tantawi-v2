import React from "react";
import { useParams } from "react-router-dom";
import SubCategoryBox from "../components/utils/categoryBox/SubCategoryBox";
import ProductSlider from "../components/utils/productsSlider/ProductSlider";
import ProductFilter from "../components/utils/ProductFilter/ProductFilter";
import ProductBox from "../components/utils/productBox/ProductBox";
const SubCategory = ({ data }) => {
  console.log("data is", data);
  const params = useParams();
  const mainCategory = data.filter((item) => item.path === params.title);
  console.log("main category is", mainCategory);
  const subCategory = mainCategory[0].subCategories.filter(
    (item) => item.enTitle === params.subTitle
  );
  console.log("sub category as array", subCategory);
  return (
    <div className="container py-5 mt-5 mt-md-0">
      <h3 className="fw-bolder fs-4 m-0 p-0 mb-3">{subCategory[0].title}</h3>
      {subCategory[0].categories.length && (
        <SubCategoryBox
          data={subCategory[0].categories}
          mainCategory={mainCategory[0].path}
        />
      )}
      <ProductSlider data={subCategory[0].bestSaller} />
      <ProductSlider data={subCategory[0].specialProducts} />
      <ProductSlider data={subCategory[0].famous} />
      <div className="row my-3">
        <div className="col-12 col-md-3">
          <ProductFilter />
        </div>
        <div className="col-12 col-md-9">
          <div className="d-flex align-items-center  gap-2 flex-wrap">
            {subCategory[0].products.map((item, index) => (
              <ProductBox key={index} data={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubCategory;
