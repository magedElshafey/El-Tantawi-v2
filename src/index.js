import React from "react";
import ReactDOM from "react-dom/client";
// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
// redux
import { Provider } from "react-redux";
import store from "./Redux/store";
// react hot toast
import { Toaster } from "react-hot-toast";
// aos
import "aos/dist/aos.css";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Toaster position="top-center" reverseOrder={false} />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
