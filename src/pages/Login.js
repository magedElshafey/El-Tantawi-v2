import React from "react";
import MainImg from "../components/login/3dImg/MainImg";
import LoginForm from "../components/login/LoginForm/LoginForm";

const Login = () => {
  return (
    <div className="container pb-3 pt-5">
      <div className="row justify-content-center justify-content-md-between align-items-center">
        <div className="col-12 col-md-6 mb-3 mb-md-0">
          <MainImg />
        </div>
        <div className="col-12 col-md-6 mb-md-0">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
