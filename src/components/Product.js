import React from "react";
import ProductCard from "./ProductCard";
import Navigation from "./images/Navigation.png";
import cardimg from "./images/card-img.png";
import finalcard from "./images/finalcard.png";

import "./product.css";

const Product = () => {
  return (
    <>
      <div className="main__product tohide">
        <div className="Product">
          <span className="product__top">New Launches</span>
          <span className="product__slider">
            <span className="product__s">Hair</span>
            <span className="product__sl">Skin</span>
            <span className="product__sl">Weight</span>
          </span>
        </div>
      </div>
      <div className="product__card__align tohide">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <img src={Navigation} className="navigation tohide" alt="" />
      <div className="frame868__mob tohidemin">
        <p className="new__mob">New Launches</p>
        <div className="frame896__mob">
          <div className="pill1">
            <div className="label__mob1">
              <div className="label2__mob1">Weight</div>
            </div>
            <div className="sgn__mob1"></div>
          </div>

          <div className="pill2">
            <div className="label__mob2">
              <div className="label2__mob2">Skin</div>
            </div>
            <div className="sgn__mob2"></div>
          </div>

          <div className="pill3">
            <div className="label__mob3">
              <div className="label2__mob3">Hair</div>
            </div>
            <div className="sgn__mob3"></div>
          </div>
        </div>
      </div>
      <div className="frame897__mob tohidemin">
        <div className="card__mob__new">
          <span className="newLauncha">New Launch</span>
          <span className="stara">⭐4.5</span>
          <img src={cardimg} alt="" className="img__card__mob" />
          <p className="hair__body__mob">Hair fall Control Shampoo</p>
          <p className="first__section__mob">
            <strong>For</strong>
            <span className="vertical__mob__line"></span>
            <span className="hfr__mob">Hair fall reduction</span>
          </p>
          <p className="wkb__mob">
            <strong>With</strong>
            <span className="vertical__mob__line"></span>
            <span className="k__mob">Keratlin </span>
            <span className="vertical__mob__line"></span>
            <span className="bio__mob">Biotlin</span>
          </p>
          <span className="hr__line__mob"></span>
          <p className="nb5">
            <span className="nia__mob">Niacinamide</span>
            <span className="vertical__mob__line__l"></span>
            <span className="v5">Vitamin B5</span>
          </p>
          <p className="final__mob">
            <span className="rs4__mob"> Rs 499</span>
            <span className="ovth__mob">₹1194</span>
            <span className="svto__mob">🎉 17% OFF</span>
          </p>
          <p className="bottom__mob">
            <span className="acrt__mob">Add to Cart </span>
            <span className="bnw__mob">
              <button>Buy Now</button>
            </span>
          </p>
        </div>
        <img src={finalcard} className="f_mob_card" alt="" />
      </div>
    </>
  );
};

export default Product;
