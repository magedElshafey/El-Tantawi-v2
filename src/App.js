import React, { useEffect } from "react";
// aos
import AOS from "aos";

// react router dom
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
// data
import {
  categories,
  importantLinks,
  account,
  socialMedia,
  servicesOffers,
  bannerSlider,
  specialProducts,
  bestSaller,
} from "./fakers/data";
// shared layouts
import AuthHeader from "./components/layouts/AuthHeader/AuthHeader";
import MainHeader from "./components/layouts/mainHeader/MainHeader";
import CategoriesHeader from "./components/layouts/categoriesHeader/CategoriesHeader";
import MobHeader from "./components/layouts/mobHeader/MobHeader";
import Footer from "./components/layouts/footer/Footer";
// pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Regester from "./pages/Regester";
import MainCategory from "./pages/MainCategory";
import SubCategory from "./pages/SubCategory";
const App = () => {
  // handle scroll to top after change any page
  function ScrollToTopAfterChangePage() {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return null;
  }
  // handle animation
  useEffect(() => {
    AOS.init({
      offset: 0,
      duration: 1200,
    });
  }, []);
  return (
    <Router>
      <ScrollToTopAfterChangePage />
      <AuthHeader />
      <MainHeader />
      <CategoriesHeader data={categories} />
      <MobHeader data={categories} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              offers={servicesOffers}
              bannerSlider={bannerSlider}
              specialProducts={specialProducts}
              bestSaller={bestSaller}
            />
          }
        />
      </Routes>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
      <Routes>
        <Route path="/reg" element={<Regester />} />
      </Routes>
      <Routes>
        <Route
          path="/cat/:title"
          element={<MainCategory data={categories} />}
        />
      </Routes>
      <Routes>
        <Route
          path="/cat/:title/:subTitle"
          element={<SubCategory data={categories} />}
        />
      </Routes>
      <Footer
        categories={categories}
        importantLinks={importantLinks}
        socialMedia={socialMedia}
        account={account}
      />
    </Router>
  );
};

export default App;
