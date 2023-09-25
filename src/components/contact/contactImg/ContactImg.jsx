import React from "react";
import Lottie from "react-lottie";
import * as animationData from "../../../assets/lotties/contact.json";
const ContactImg = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Lottie
      isClickToPauseDisabled
      options={defaultOptions}
      style={{ height: "300px" }}
      width="100%"
    />
  );
};

export default ContactImg;
