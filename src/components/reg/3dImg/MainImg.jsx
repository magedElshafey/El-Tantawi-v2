import React from "react";
import Lottie from "react-lottie";
import * as animationData from "../../../assets/lotties/reg.json";
const MainImg = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <div className="col-12 col-md-6">
        <Lottie
          isClickToPauseDisabled
          options={defaultOptions}
          height="500px"
          width="100%"
        />
      </div>
    </div>
  );
};

export default MainImg;
