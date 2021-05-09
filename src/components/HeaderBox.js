import React from "react";
import "./headerBox.css";
import Frame350 from "./images/Frame350.png";
import Frame351 from "./images/Frame351.png";
import Frame352 from "./images/Frame352.png";
import Frame3500 from "./images/Frame3500.png";
import Frame3511 from "./images/Frame3511.png";
import Frame3522 from "./images/Frame3522.png";

const HeaderBox = () => {
  return (
    <>
      <div className="HeaderBox__main tohide">
        <div className="title">Heading Title</div>
        <div className="concern">What’s your concern?</div>
        <div className="wellness">
          We are the country’s first holistic wellness platform for men. We talk
          to men, listen to them and understand their needs
        </div>
        <div className="frame845">
          <div className="frame352">
            <img src={Frame352} alt="" />
          </div>
          <div className="frame351">
            <img src={Frame351} alt="" />
          </div>
          <div className="frame350">
            <img src={Frame350} alt="" />
          </div>
        </div>
      </div>
      <div className="frame863 tohidemin">
        <div className="group878">
          <div className="group877">
            <div className="concerns"> What’s Your Concern?</div>
            <div className="group876">
              <div className="frame866">
                <img src={Frame3522} alt="" />
              </div>
              <div className="frame865">
                <img src={Frame3511} alt="" />
              </div>
              <div className="frame864">
                <img src={Frame3500} alt="" />
              </div>
            </div>
          </div>
          <div className="weare">
            We are the country’s first holistic wellness platform <br />
            for men. We talk to men, listen to them and <br />
            understand their needs
          </div>
          <div className="medium">Medium Length Display Heading Here</div>
        </div>
      </div>
    </>
  );
};

export default HeaderBox;
