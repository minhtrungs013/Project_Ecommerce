import React from "react";
import "./category.css";
import cart1 from "../../assets/img/cat-1.jpg.webp";
import cart2 from "../../assets/img/cat-2.jpg.webp";
import cart3 from "../../assets/img/cat-3.jpg.webp";
import cart4 from "../../assets/img/cat-4.jpg.webp";
import cart5 from "../../assets/img/cat-5.jpg.webp";
import Slider from "react-slick";

export default function Category() {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    cssEase: "linear",
  };
  return (
    <div className=" category">
      <Slider {...settings}>
        <div className="category__item">
          <div className="category__img">
            <img src={cart1} alt="" />
            <button className="category__btn">Fresh Fruit</button>
          </div>
        </div>
        <div className="category__item">
          <div className="category__img">
            <img src={cart2} alt="" />
            <button className="category__btn">Fresh Fruit</button>
          </div>
        </div>
        <div className="category__item">
          <div className="category__img">
            <img src={cart3} alt="" />
            <button className="category__btn">Fresh Fruit</button>
          </div>
        </div>
        <div className="category__item">
          <div className="category__img">
            <img src={cart4} alt="" />
            <button className="category__btn">Fresh Fruit</button>
          </div>
        </div>
        <div className="category__item">
          <div className="category__img">
            <img src={cart5} alt="" />
            <button className="category__btn">Fresh Fruit</button>
          </div>
        </div>
      </Slider>
    </div>
  );
}
