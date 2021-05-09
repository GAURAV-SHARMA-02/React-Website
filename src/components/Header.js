import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css";
import HeaderBox from "./HeaderBox";
import image9 from "./images/image9.png";
import icon from "./images/icon.png";
import search from "./images/search.png";
import store from "./images/store.JPG";
import store2 from "./images/store2.JPG";
import whatsapp from "./images/whatsapp.png";
import Vector from "./images/Vector.png";
import Ellipse3 from "./images/Ellipse3.png";
import Vector2 from "./images/Vector2.png";

const Header = () => {
  return (
    <>
      <div className="header__mob tohidemin">
        <div className="frame906">
          <div className="fi__x">
            <div className="__vectora"></div>
            <div className="__vectorb"></div>
          </div>
          <div className="equlasto">
            <div className="line28"></div>
            <div className="line27"></div>
          </div>
        </div>
        <img src={image9} alt="" className="body__mob" />
        <div className="flex__mob">
          <img src={Vector2} alt="" />
          <img src={whatsapp} alt="" />
          <img src={store} alt="" />
        </div>
        <img src={Ellipse3} alt="" className="ellipse3" />
      </div>
      <div className="tohide">
        <nav className="navbar navbar-expand-lg nav_header ">
          <button
            className="navbar-toggler "
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          ></button>
          <a className="navbar-brand" href="#">
            <img src={image9} className="nav__img" href="#"></img>
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item   nav__item">Shop</li>
              <li className="nav-item  nav__item">Take Self - Assessment</li>
              <li className="nav-item  nav__item">
                Choose Concers <img src={Vector} href="#" />
              </li>
              <li className="nav-item  nav__item">All Products</li>
              <li className="nav-item  nav__item">Book Consultation</li>
            </ul>
          </div>
          <div className="nav__left">
            <a className="navbar-brand" href="#">
              <img src={search} href="#"></img>
            </a>
            <a className="navbar-brand " href="#">
              <img src={whatsapp} href="#"></img>
            </a>
            <a className="navbar-brand " href="#">
              <img src={icon} href="#"></img>
            </a>
          </div>
        </nav>
        <a className="" href="#">
          <img src={store2} className="store2" href="#"></img>
        </a>
        <div className="bheader"></div>
      </div>
      <HeaderBox />
    </>
  );
};

export default Header;
