import React from "react";
import style from "./footer.module.css";
import { Link } from "react-router-dom";
const Footer = ({ categories, importantLinks, socialMedia, account }) => {
  return (
    <div className={`m-0 p-0 ${style.mainContainer}`}>
      <div className="container">
        <div className="pt-3 row justify-content-between">
          <div className="col-6 col-md-3">
            <h3 className="p-0 mb-4 fw-bolder">{importantLinks.mainTitle}</h3>
            <ul className="m-0 p-0">
              {importantLinks.links.map((link, index) => (
                <li key={index} className="mb-3 p-0">
                  <Link to={link.path} className={style.link}>
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-6 col-md-3">
            <h3 className="p-0 mb-4 fw-bolder">الأقسام</h3>
            <ul className="m-0 p-0">
              {categories.map((category, index) => (
                <li key={index} className="mb-3 p-0">
                  <Link to={`/cat/${category.path}`} className={style.link}>
                    {category.mainCategory}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-6 col-md-3">
            <h3 className="p-0 mb-4 fw-bolder">{account.mainTitle}</h3>
            <ul className="m-0 p-0">
              {account.links.map((link, index) => (
                <li key={index} className="mb-3 p-0">
                  <Link to={link.path} className={style.link}>
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-6 col-md-3">
            <h3 className="p-0 mb-4 fw-bolder">{socialMedia.mainTitle}</h3>
            <div className="d-flex flex-wrap justify-content-center justify-content-md-start align-items-center gap-2">
              {socialMedia.links.map((social, index) => (
                <a
                  key={index}
                  href={social.path}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    key={index}
                    alt="socialMedia/index"
                    className={style.social}
                    src={social.img}
                    loading="lazy"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
