import React from "react";
import "./last.css";
import last from "./images/last.png";
import LastCard from "./LastCard";

const Last = () => {
  return (
    <>
      <div className="last tohide">
        <div className="last__heading">How It Works</div>
        <div className="columns">
          <div className="last__left">
            <img src={last} alt="" />
          </div>
          <div className="last__right">
            <LastCard />
          </div>
        </div>
      </div>
      <div className="frame898__mob tohidemin">
        <div className="frame902__mob">
          <div className="frame900__mob">
            <div className="knowa__mob">
              Know what you're looking for? Browse ourcarefully crafted
              solutions. Not sure what will work for you? Schedule a free online
              consultation with our renowned experts
            </div>
            <div className="helpa__mob">3. Help us know you</div>
          </div>
          <div className="frame901__mob">
            <div className="knowb__mob">
              Know what you're looking for? Browse ourcarefully crafted
              solutions. Not sure what will work for you? Schedule a free online
              consultation with our renowned experts
            </div>
            <div className="helpb__mob">2. Help us know you</div>
          </div>
          <div className="frame899__mob">
            <div className="knowc__mob">
              Know what you're looking for? Browse ourcarefully crafted
              solutions. Not sure what will work for you? Schedule a free online
              consultation with our renowned experts
            </div>
            <div className="helpc__mob">1. Help us know you</div>
          </div>
          <img src={last} alt="" className="rect147__mob" />
          <div className="how__mob">How it Works</div>
        </div>
      </div>
    </>
  );
};

export default Last;
