import React from "react";
import "./pdetails.css";
import "../../featured/featured.css";
import Slider from "react-slick";
import cart1 from "../../../assets/img/cat-1.jpg.webp";
import cart2 from "../../../assets/img/cat-2.jpg.webp";
import cart3 from "../../../assets/img/cat-3.jpg.webp";
import cart4 from "../../../assets/img/cat-4.jpg.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalfAlt,
  faHeart,
  faMessage,
  faFaceAngry,
} from "@fortawesome/free-solid-svg-icons";
export default function pdetails() {
  const url = "https://preview.colorlib.com/theme/ogani/img/product/details/";
  const settings = {
    customPaging: function (i) {
      return (
        <a href="aa" className="img">
          <img src={`${url}product-details-${i + 1}.jpg`} alt="" />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots1 slick-thumb",
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="container product__details">
      <div className="row">
        <div className="l-6">
          <Slider {...settings}>
            <div>
              <img src={url + "product-details-1.jpg"} alt="" />
            </div>
            <div>
              <img src={url + "product-details-2.jpg"} alt="" />
            </div>
            <div>
              <img src={url + "product-details-3.jpg"} alt="" />
            </div>
            <div>
              <img src={url + "product-details-4.jpg"} alt="" />
            </div>
          </Slider>
        </div>
        <div className="l-6">
          <div className="product__details__text">
            <h3>Vetgetable’s Package</h3>
            <div className="product__details__rating">
              <FontAwesomeIcon
                icon={faStar}
                className="product__details-icon"
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                icon={faStar}
                className="product__details-icon"
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                icon={faStar}
                className="product__details-icon"
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                icon={faStar}
                className="product__details-icon"
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                icon={faStarHalfAlt}
                className="product__details-icon"
              ></FontAwesomeIcon>

              <span>(18 reviews)</span>
            </div>
            <div className="product__details__price">$50.00</div>
            <p>
              Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
              Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
              dui. Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam
              vehicula elementum sed sit amet dui. Proin eget tortor risus.
            </p>
            <div className="product__details__quantity">
              <div className="quantity">
                <div className="pro-qty">
                  <span className="dec qtybtn">-</span>
                  <input type="text" defaultValue={1} />
                  <span className="inc qtybtn">+</span>
                </div>
              </div>
            </div>
            <a href="aaa" className="primary-btn">
              ADD TO CARD
            </a>
            <a href="aaa" className="heart">
              <FontAwesomeIcon
                icon={faHeart}
                className="heart-icon"
              ></FontAwesomeIcon>
            </a>
            <ul>
              <li>
                <b>Availability</b> <span>In Stock</span>
              </li>
              <li>
                <b>Shipping</b>{" "}
                <span>
                  01 day shipping. <samp>Free pickup today</samp>
                </span>
              </li>
              <li>
                <b>Weight</b> <span>0.5 kg</span>
              </li>
              <li>
                <b>Share on</b>
                <div className="share">
                  <a href="aaa">
                    <FontAwesomeIcon
                      icon={faMessage}
                      className="share-icon"
                    ></FontAwesomeIcon>
                  </a>
                  <a href="aaa">
                    <FontAwesomeIcon
                      icon={faFaceAngry}
                      className="share-icon"
                    ></FontAwesomeIcon>
                  </a>
                  <a href="aaa">
                    <FontAwesomeIcon
                      icon={faMessage}
                      className="share-icon"
                    ></FontAwesomeIcon>
                  </a>
                  <a href="aaa">
                    <FontAwesomeIcon
                      icon={faMessage}
                      className="share-icon"
                    ></FontAwesomeIcon>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="l-12">
          <div className="product__details__tab">
            <ul className="nav nav-tabs" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  data-toggle="tab"
                  href="#tabs-1"
                  role="tab"
                  aria-selected="true"
                >
                  Description
                </a>
              </li>
              <li className="nav-item ">
                <a
                  className="nav-link"
                  data-toggle="tab"
                  href="#tabs-2"
                  role="tab"
                  aria-selected="false"
                >
                  Information
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-toggle="tab"
                  href="#tabs-3"
                  role="tab"
                  aria-selected="false"
                >
                  Reviews <span>(1)</span>
                </a>
              </li>
            </ul>
            <div className="tab-content">
              <div className="tab-pane active" id="tabs-1" role="tabpanel">
                <div className="product__details__tab__desc">
                  <h6>Products Infomation</h6>
                  <p>
                    Vestibulum ac diam sit amet quam vehicula elementum sed sit
                    amet dui. Pellentesque in ipsum id orci porta dapibus. Proin
                    eget tortor risus. Vivamus suscipit tortor eget felis
                    porttitor volutpat. Vestibulum ac diam sit amet quam
                    vehicula elementum sed sit amet dui. Donec rutrum congue leo
                    eget malesuada. Vivamus suscipit tortor eget felis porttitor
                    volutpat. Curabitur arcu erat, accumsan id imperdiet et,
                    porttitor at sem. Praesent sapien massa, convallis a
                    pellentesque nec, egestas non nisi. Vestibulum ac diam sit
                    amet quam vehicula elementum sed sit amet dui. Vestibulum
                    ante ipsum primis in faucibus orci luctus et ultrices
                    posuere cubilia Curae; Donec velit neque, auctor sit amet
                    aliquam vel, ullamcorper sit amet ligula. Proin eget tortor
                    risus.
                  </p>
                  <p>
                    Praesent sapien massa, convallis a pellentesque nec, egestas
                    non nisi. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Mauris blandit aliquet elit, eget tincidunt nibh
                    pulvinar a. Cras ultricies ligula sed magna dictum porta.
                    Cras ultricies ligula sed magna dictum porta. Sed porttitor
                    lectus nibh. Mauris blandit aliquet elit, eget tincidunt
                    nibh pulvinar a. Vestibulum ac diam sit amet quam vehicula
                    elementum sed sit amet dui. Sed porttitor lectus nibh.
                    Vestibulum ac diam sit amet quam vehicula elementum sed sit
                    amet dui. Proin eget tortor risus.
                  </p>
                </div>
              </div>
              <div className="tab-pane" id="tabs-2" role="tabpanel">
                <div className="product__details__tab__desc">
                  <h6>Products Infomation</h6>
                  <p>
                    Vestibulum ac diam sit amet quam vehicula elementum sed sit
                    amet dui. Pellentesque in ipsum id orci porta dapibus. Proin
                    eget tortor risus. Vivamus suscipit tortor eget felis
                    porttitor volutpat. Vestibulum ac diam sit amet quam
                    vehicula elementum sed sit amet dui. Donec rutrum congue leo
                    eget malesuada. Vivamus suscipit tortor eget felis porttitor
                    volutpat. Curabitur arcu erat, accumsan id imperdiet et,
                    porttitor at sem. Praesent sapien massa, convallis a
                    pellentesque nec, egestas non nisi. Vestibulum ac diam sit
                    amet quam vehicula elementum sed sit amet dui. Vestibulum
                    ante ipsum primis in faucibus orci luctus et ultrices
                    posuere cubilia Curae; Donec velit neque, auctor sit amet
                    aliquam vel, ullamcorper sit amet ligula. Proin eget tortor
                    risus.
                  </p>
                  <p>
                    Praesent sapien massa, convallis a pellentesque nec, egestas
                    non nisi. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Mauris blandit aliquet elit, eget tincidunt nibh
                    pulvinar a. Cras ultricies ligula sed magna dictum porta.
                    Cras ultricies ligula sed magna dictum porta. Sed porttitor
                    lectus nibh. Mauris blandit aliquet elit, eget tincidunt
                    nibh pulvinar a.
                  </p>
                </div>
              </div>
              <div className="tab-pane" id="tabs-3" role="tabpanel">
                <div className="product__details__tab__desc">
                  <h6>Products Infomation</h6>
                  <p>
                    Vestibulum ac diam sit amet quam vehicula elementum sed sit
                    amet dui. Pellentesque in ipsum id orci porta dapibus. Proin
                    eget tortor risus. Vivamus suscipit tortor eget felis
                    porttitor volutpat. Vestibulum ac diam sit amet quam
                    vehicula elementum sed sit amet dui. Donec rutrum congue leo
                    eget malesuada. Vivamus suscipit tortor eget felis porttitor
                    volutpat. Curabitur arcu erat, accumsan id imperdiet et,
                    porttitor at sem. Praesent sapien massa, convallis a
                    pellentesque nec, egestas non nisi. Vestibulum ac diam sit
                    amet quam vehicula elementum sed sit amet dui. Vestibulum
                    ante ipsum primis in faucibus orci luctus et ultrices
                    posuere cubilia Curae; Donec velit neque, auctor sit amet
                    aliquam vel, ullamcorper sit amet ligula. Proin eget tortor
                    risus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="l-12 ">
        <h2 className="featured__heading Related">Related Product</h2>
          <div className="container">
            <div className=" featured__product Related__product">
              <div className=" row featured__list">
                <div className="l-3 featured__item">
                  <div className="featured__img">
                    <img src={cart1} alt="" />
                  </div>
                  <div className="featured__item__text">
                    <h6>
                      <a href="hhqq">Crab Pool Security</a>
                    </h6>
                    <h5>$30.00</h5>
                  </div>
                </div>
                <div className="l-3 featured__item">
                  <div className="featured__img">
                    <img src={cart2} alt="" />
                  </div>
                  <div className="featured__item__text">
                    <h6>
                      <a href="hhqq">Crab Pool Security</a>
                    </h6>
                    <h5>$30.00</h5>
                  </div>
                </div>
                <div className="l-3 featured__item">
                  <div className="featured__img">
                    <img src={cart3} alt="" />
                  </div>
                  <div className="featured__item__text">
                    <h6>
                      <a href="hhqq">Crab Pool Security</a>
                    </h6>
                    <h5>$30.00</h5>
                  </div>
                </div>
                <div className="l-3 featured__item">
                  <div className="featured__img">
                    <img src={cart4} alt="" />
                  </div>
                  <div className="featured__item__text">
                    <h6>
                      <a href="hhqq">Crab Pool Security</a>
                    </h6>
                    <h5>$30.00</h5>
                  </div>
                </div>
             
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
