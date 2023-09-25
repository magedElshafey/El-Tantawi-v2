import React from "react";
import BannerSlider from "../components/home/bannerSlider/BannerSlider.jsx";
import ServicesOffers from "../components/home/offers/ServicesOffers.jsx";
import ProductSlider from "../components/utils/productsSlider/ProductSlider.jsx";
const Home = ({ offers, bannerSlider, specialProducts, bestSaller }) => {
  return (
    <div className="container py-5 mt-5 mt-md-0">
      <BannerSlider data={bannerSlider} />
      <ServicesOffers data={offers} />
      <ProductSlider data={specialProducts} />
      <ProductSlider data={bestSaller} />
    </div>
  );
};

export default Home;
