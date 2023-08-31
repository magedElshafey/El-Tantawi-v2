import React, { useState } from "react";
import style from "./mobHeader.module.css";
// icons
import { AiOutlineMenu } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
// logo
import logo from "../../../assets/logo-ar.png";
import { Link } from "react-router-dom";
import MenuSidebar from "../menuSideBar/MenuSidebar";
const MobHeader = ({ data }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showCart, setShowCart] = useState(false);
  return (
    <div className={`d-md-none ${style.navContainer}`}>
      <div className="container d-flex align-items-center justify-content-between">
        {/*logo and menu*/}
        <div className="d-flex align-items-center gap-2">
          <AiOutlineMenu
            onClick={() => setShowMenu(true)}
            size={30}
            className={`pointer ${style.icon}`}
          />
          <Link to="/">
            <img alt="logo" src={logo} className={style.logo} loading="lazy" />
          </Link>
        </div>
        {/*cart*/}
        <BsCartCheck
          onClick={() => setShowCart(true)}
          className={`pointer ${style.icon}`}
          size={30}
        />
      </div>
      <MenuSidebar data={data} showMenu={showMenu} setShowMenu={setShowMenu} />
    </div>
  );
};

export default MobHeader;
