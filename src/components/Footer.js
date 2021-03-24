import React from "react";
import { ReactComponent as Twitter } from "../assets/twitter.svg";
import { ReactComponent as Instagram } from "../assets/instagram.svg";
import { ReactComponent as Facebook } from "../assets/facebook.svg";
import { ReactComponent as Phone } from "../assets/phone.svg";
import style from "../css/Footer.module.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      
{ /*     <div className={style.contact}>
        <NavLink className={style.a} exact to="#">
          hello@bilgagnat.com
        </NavLink>
        <NavLink className={style.a} exact to="#">
          +46 70 531 20 90
        </NavLink>
  </div>*/}

      <div className={style.logo_container}>
        <NavLink className={style.a} exact to="/">
          <Twitter className={style.social} />
        </NavLink>

        <NavLink className={style.a} exact to="#">
          <Instagram className={style.social} />
        </NavLink>

        <NavLink className={style.a} exact to="#">
          <Facebook className={style.social} />
        </NavLink>
      </div>
      <p>Copyright © 2021 Bilgagnat </p>
    </footer>
  );
};

export default Footer;
