import React from "react";
import "./productCardMob.css";
import "bootstrap/dist/css/bootstrap.min.css";
import cardimg from "./images/card-img.png";

const ProducCardMob = () => {
  return (
    <div className="card mobpcard">
      <img
        className="card-img-top mobcard__img"
        src={cardimg}
        alt="Card image cap"
      />
      <span className="mobnewLaunch">New Launch</span>
      <span className="mobstar">⭐4.5</span>

      <div className="card-body">
        {/* <span className="mobcard__img__hf">Hair fall Control Shampoo</span>
        <span className="mobcard__box">
          <span className="mobfirst">
            <span className="mobfirst__text">
              <span className="mobfor">For</span>
              <span className="mobvline"></span>
              <span className="mobhar"> Hair fall reduction</span>
            </span>
          </span>
          <span className="mobgroup">
            <span className="mobhline"></span>
            <span className="mobgroupa">
              <span className="mobframe321">
                <span className="mobbtln">Biotlin</span>
                <span className="mobline22"></span>
                <span className="mobktln">Keratlin</span>
                <span className="mobline21"></span>
                <span className="mobwith">With</span>
              </span>
            </span>
            <span className="mobgroupb">
              <span className="mobframe321">
                <span className="mobvtmn">Vitamin B5</span>
                <span className="mobline211"></span>
                <span className="mobncmd">Niacinamide</span>
              </span>
            </span>
          </span>
        </span> */}
      </div>
      {/* <div className="mobgroupc">
        <div className="mobframe654">
          <span className="moboff">🎉 17% OFF</span>
          <span className="mobgroup896">
            <span className="mobrs3"> Rs 499</span>
            <span className="mobrs1">₹1194</span>
          </span>
        </div>
      </div> */}
      <div className="mobgroupd">
        <button>
          <span className="mobacart">Add to Cart</span>
        </button>

        <span className="mobrectbbnow">
          <span className="mobbnow">
            <button>Buy Now</button>
          </span>
        </span>
      </div>
    </div>
  );
};

export default ProducCardMob;
