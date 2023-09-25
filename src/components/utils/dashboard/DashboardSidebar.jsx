import React, { useState } from "react";
import style from "./dashboard.module.css";
import { Link } from "react-router-dom";
const DashboardSidebar = ({ data }) => {
  const [activeLink, setActiveLink] = useState(null);

  return (
    <div className={style.mainContainer}>
      <ul className="p-3">
        {data.map((item, index) => (
          <li
            onClick={() => setActiveLink(item.id)}
            className="mb-2 "
            key={index}
          >
            <Link
              className={`${style.link} ${
                activeLink === item.id ? style.active : null
              }`}
              to={item.path}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DashboardSidebar;
