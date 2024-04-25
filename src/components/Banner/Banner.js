import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="main10">
      <img className="divimg1" src="banner1.webp" alt="" />
      <img className="divimg1" src="banner.webp" alt="" />
      <div className="absolute-div">
        <h2>Browse our latest products</h2>
        <button className="btn-div1">Shop all</button>
      </div>
    </div>
  );
};

export default Banner;
