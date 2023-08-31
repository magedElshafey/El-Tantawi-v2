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
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
      <Routes>
        <Route path="/reg" element={<Regester />} />
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
