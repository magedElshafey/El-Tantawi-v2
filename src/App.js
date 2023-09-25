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
  dashboardLinks,
  faqs,
} from "./fakers/data";
// shared layouts
import AuthHeader from "./components/layouts/AuthHeader/AuthHeader";
import MainHeader from "./components/layouts/mainHeader/MainHeader";
import CategoriesHeader from "./components/layouts/categoriesHeader/CategoriesHeader";
import MobHeader from "./components/layouts/mobHeader/MobHeader";
import Footer from "./components/layouts/footer/Footer";
import FixedBtns from "./components/utils/fixedBtns/FixedBtns";

// pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Regester from "./pages/Regester";
import MainCategory from "./pages/MainCategory";
import SubCategory from "./pages/SubCategory";
import About from "./pages/About";
import AccountDetails from "./pages/AccountDetails";
import Branches from "./pages/Branches";
import Contact from "./pages/Contact";
import Faqs from "./pages/Faqs";
import Orders from "./pages/Orders";
import WhishList from "./pages/WhishList";
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
      <FixedBtns />
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
        <Route path="/about" element={<About />} />
      </Routes>
      <Routes>
        <Route path="/orders" element={<Orders sidebar={dashboardLinks} />} />
      </Routes>
      <Routes>
        <Route path="/returns" element={<Orders sidebar={dashboardLinks} />} />
      </Routes>
      <Routes>
        <Route
          path="/wishlist"
          element={<WhishList sidebar={dashboardLinks} />}
        />
      </Routes>
      <Routes>
        <Route path="/branches" element={<Branches />} />
      </Routes>
      <Routes>
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Routes>
        <Route path="/faqs" element={<Faqs data={faqs} />} />
      </Routes>
      <Routes>
        <Route
          path="/accountDetails"
          element={<AccountDetails sidebar={dashboardLinks} />}
        />
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
