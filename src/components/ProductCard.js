import React from "react";
import "./productCard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import cardimg from "./images/card-img.png";

const ProductCard = () => {
  return (
    <div className="card pcard">
      <img
        className="card-img-top card__img"
        src={cardimg}
        alt="Card image cap"
      />
      <span className="newLaunch">New Launch</span>
      <span className="star">⭐4.5</span>
      <div className="card-body">
        <span className="card__img__hf">Hair fall Control Shampoo</span>
        <span className="card__box">
          <span className="first">
            <span className="first__text">
              <span className="for">For</span>
              <span className="vline"></span>
              <span className="har"> Hair fall reduction</span>
            </span>
          </span>
          <span className="group">
            <span className="hline"></span>
            <span className="groupa">
              <span className="frame321">
                <span className="btln">Biotlin</span>
                <span className="line22"></span>
                <span className="ktln">Keratlin</span>
                <span className="line21"></span>
                <span className="with">With</span>
              </span>
            </span>
            <span className="groupb">
              <span className="frame321">
                <span className="vtmn">Vitamin B5</span>
                <span className="line211"></span>
                <span className="ncmd">Niacinamide</span>
              </span>
            </span>
          </span>
        </span>
      </div>
      <div className="groupc">
        <div className="frame654">
          <span className="off">🎉 17% OFF</span>
          <span className="group896">
            <span className="rs3"> Rs 399</span>
            <span className="rs1">₹1194</span>
          </span>
        </div>
      </div>
      <div className="groupd">
        <button>
          <span className="acart">Add to Cart</span>
        </button>

        <span className="rectbbnow">
          <span className="bnow">
            <button>Buy Now</button>
          </span>
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
