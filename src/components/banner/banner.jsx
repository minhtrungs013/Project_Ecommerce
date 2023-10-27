import React from "react";
import "./banner.css"
import banner1 from "../../assets/img/banner-1.jpg.webp";
import banner2 from "../../assets/img/banner-2.jpg.webp";
export default function banner() {
  return (
    <div className="container">
      <div className="row banner">
        <div className="l-6">
          <img src={banner1} alt="" />
        </div>
        <div className="l-6">
          {" "}
          <img src={banner2} alt="" />
        </div>
      </div>
    </div>
  );
}
