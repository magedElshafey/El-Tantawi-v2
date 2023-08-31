import React from "react";
import MainImg from "../components/reg/3dImg/MainImg";
import RegForm from "../components/reg/regForm/RegForm";
const Regester = () => {
  return (
    <div className="container py-3">
      <div className="row justify-content-center justify-content-md-between align-items-center">
        <div className="col-12 col-md-6 mb-3 mb-md-0">
          <MainImg />
        </div>
        <div className="col-12 col-md-6 mb-md-0">
          <RegForm />
        </div>
      </div>
    </div>
  );
};

export default Regester;
