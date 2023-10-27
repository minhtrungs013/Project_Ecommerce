import React from "react";
import "./product.css";
import product1 from "../../assets/img/cat-1.jpg.webp";
import product2 from "../../assets/img/cat-2.jpg.webp";
import product3 from "../../assets/img/feature-2.jpg.webp";
import product4 from "../../assets/img/feature-3.jpg.webp";
import product5 from "../../assets/img/feature-4.jpg.webp";
import product6 from "../../assets/img/feature-5.jpg.webp";
import product7 from "../../assets/img/feature-6.jpg.webp";
import product8 from "../../assets/img/feature-7.jpg.webp";
import product9 from "../../assets/img/feature-8.jpg.webp";
import Pdetails from "../page/productDetails/pdetails";
import Slider from "react-slick";
export default function product() {
  const settings = {
   
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 10000,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    cssEase: "linear",
  };
  return (
    <div className="container">
        <h4 className="product__heading">Top Rated Products</h4>
      <Slider {...settings}>
        <div className="row product">
          <a href="/outstanding" className=" l-4 product__item">
            <div className="row">
              <div className="l-4">
                <img src={product1} alt="" className="product__img" />
              </div>
              <div className="l-8">
                <div className="product_item__text">
                  <h6>
                    <a href="/outstanding">Crabaaaa Pool Security</a>
                  </h6>
                  <h5>$30.00</h5>
                </div>
              </div>
            </div>
          </a>
          <a href={Pdetails} className=" l-4 product__item">
            <div className="row">
              <div className="l-4">
                <img src={product2} alt="" className="product__img" />
              </div>
              <div className="l-8">
                <div className="product_item__text">
                  <h6>
                    <a href="hhqq">Crab Pool Security</a>
                  </h6>
                  <h5>$30.00</h5>
                </div>
              </div>
            </div>
          </a>
          <a href="aaaa" className=" l-4 product__item">
            <div className="row">
              <div className="l-4">
                <img src={product3} alt="" className="product__img" />
              </div>
              <div className="l-8">
                <div className="product_item__text">
                  <h6>
                    <a href="hhqq">Crab Pool Security</a>
                  </h6>
                  <h5>$30.00</h5>
                </div>
              </div>
            </div>
          </a>
          <a href="aaaa" className=" l-4 product__item">
            <div className="row">
              <div className="l-4">
                <img src={product4} alt="" className="product__img" />
              </div>
              <div className="l-8">
                <div className="product_item__text">
                  <h6>
                    <a href="hhqq">Crab Pool Security</a>
                  </h6>
                  <h5>$30.00</h5>
                </div>
              </div>
            </div>
          </a>
          <a href="aaaa" className=" l-4 product__item">
            <div className="row">
              <div className="l-4">
                <img src={product5} alt="" className="product__img" />
              </div>
              <div className="l-8">
                <div className="product_item__text">
                  <h6>
                    <a href="hhqq">Crab Pool Security</a>
                  </h6>
                  <h5>$30.00</h5>
                </div>
              </div>
            </div>
          </a>
          <a href="aaaa" className=" l-4 product__item">
            <div className="row">
              <div className="l-4">
                <img src={product6} alt="" className="product__img" />
              </div>
              <div className="l-8">
                <div className="product_item__text">
                  <h6>
                    <a href="hhqq">Crab Pool Security</a>
                  </h6>
                  <h5>$30.00</h5>
                </div>
              </div>
            </div>
          </a>
          <a href="aaaa" className=" l-4 product__item">
            <div className="row">
              <div className="l-4">
                <img src={product7} alt="" className="product__img" />
              </div>
              <div className="l-8">
                <div className="product_item__text">
                  <h6>
                    <a href="hhqq">Crab Pool Security</a>
                  </h6>
                  <h5>$30.00</h5>
                </div>
              </div>
            </div>
          </a>
          <a href="aaaa" className=" l-4 product__item">
            <div className="row">
              <div className="l-4">
                <img src={product8} alt="" className="product__img" />
              </div>
              <div className="l-8">
                <div className="product_item__text">
                  <h6>
                    <a href="hhqq">Crab Pool Security</a>
                  </h6>
                  <h5>$30.00</h5>
                </div>
              </div>
            </div>
          </a>
          <a href="aaaa" className=" l-4 product__item">
            <div className="row">
              <div className="l-4">
                <img src={product9} alt="" className="product__img" />
              </div>
              <div className="l-8">
                <div className="product_item__text">
                  <h6>
                    <a href="hhqq">Crab Pool Security</a>
                  </h6>
                  <h5>$30.00</h5>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="row product">
          <a href="aaaa" className=" l-4 product__item">
            <div className="row">
              <div className="l-4">
                <img src={product1} alt="" className="product__img" />
              </div>
              <div className="l-8">
                <div className="product_item__text">
                  <h6>
                    <a href="hhqq">Crab Pool Security</a>
                  </h6>
                  <h5>$30.00</h5>
                </div>
              </div>
            </div>
          </a>
          <a href="aaaa" className=" l-4 product__item">
            <div className="row">
              <div className="l-4">
                <img src={product2} alt="" className="product__img" />
              </div>
              <div className="l-8">
                <div className="product_item__text">
                  <h6>
                    <a href="hhqq">Crab Pool Security</a>
                  </h6>
                  <h5>$30.00</h5>
                </div>
              </div>
            </div>
          </a>
          <a href="aaaa" className=" l-4 product__item">
            <div className="row">
              <div className="l-4">
                <img src={product3} alt="" className="product__img" />
              </div>
              <div className="l-8">
                <div className="product_item__text">
                  <h6>
                    <a href="hhqq">Crab Pool Security</a>
                  </h6>
                  <h5>$30.00</h5>
                </div>
              </div>
            </div>
          </a>
          <a href="aaaa" className=" l-4 product__item">
            <div className="row">
              <div className="l-4">
                <img src={product4} alt="" className="product__img" />
              </div>
              <div className="l-8">
                <div className="product_item__text">
                  <h6>
                    <a href="hhqq">Crab Pool Security</a>
                  </h6>
                  <h5>$30.00</h5>
                </div>
              </div>
            </div>
          </a>
          <a href="aaaa" className=" l-4 product__item">
            <div className="row">
              <div className="l-4">
                <img src={product5} alt="" className="product__img" />
              </div>
              <div className="l-8">
                <div className="product_item__text">
                  <h6>
                    <a href="hhqq">Crab Pool Security</a>
                  </h6>
                  <h5>$30.00</h5>
                </div>
              </div>
            </div>
          </a>
          <a href="aaaa" className=" l-4 product__item">
            <div className="row">
              <div className="l-4">
                <img src={product6} alt="" className="product__img" />
              </div>
              <div className="l-8">
                <div className="product_item__text">
                  <h6>
                    <a href="hhqq">Crab Pool Security</a>
                  </h6>
                  <h5>$30.00</h5>
                </div>
              </div>
            </div>
          </a>
          <a href="aaaa" className=" l-4 product__item">
            <div className="row">
              <div className="l-4">
                <img src={product7} alt="" className="product__img" />
              </div>
              <div className="l-8">
                <div className="product_item__text">
                  <h6>
                    <a href="hhqq">Crab Pool Security</a>
                  </h6>
                  <h5>$30.00</h5>
                </div>
              </div>
            </div>
          </a>
          <a href="aaaa" className=" l-4 product__item">
            <div className="row">
              <div className="l-4">
                <img src={product8} alt="" className="product__img" />
              </div>
              <div className="l-8">
                <div className="product_item__text">
                  <h6>
                    <a href="hhqq">Crab Pool Security</a>
                  </h6>
                  <h5>$30.00</h5>
                </div>
              </div>
            </div>
          </a>
          <a href="aaaa" className=" l-4 product__item">
            <div className="row">
              <div className="l-4">
                <img src={product9} alt="" className="product__img" />
              </div>
              <div className="l-8">
                <div className="product_item__text">
                  <h6>
                    <a href="hhqq">Crab Pool Security</a>
                  </h6>
                  <h5>$30.00</h5>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="row product">
          <a href="aaaa" className=" l-4 product__item">
            <div className="row">
              <div className="l-4">
                <img src={product1} alt="" className="product__img" />
              </div>
              <div className="l-8">
                <div className="product_item__text">
                  <h6>
                    <a href="hhqq">Crab Pool Security</a>
                  </h6>
                  <h5>$30.00</h5>
                </div>
              </div>
            </div>
          </a>
          <a href="aaaa" className=" l-4 product__item">
            <div className="row">
              <div className="l-4">
                <img src={product2} alt="" className="product__img" />
              </div>
              <div className="l-8">
                <div className="product_item__text">
                  <h6>
                    <a href="hhqq">Crab Pool Security</a>
                  </h6>
                  <h5>$30.00</h5>
                </div>
              </div>
            </div>
          </a>
          <a href="aaaa" className=" l-4 product__item">
            <div className="row">
              <div className="l-4">
                <img src={product3} alt="" className="product__img" />
              </div>
              <div className="l-8">
                <div className="product_item__text">
                  <h6>
                    <a href="hhqq">Crab Pool Security</a>
                  </h6>
                  <h5>$30.00</h5>
                </div>
              </div>
            </div>
          </a>
          <a href="aaaa" className=" l-4 product__item">
            <div className="row">
              <div className="l-4">
                <img src={product4} alt="" className="product__img" />
              </div>
              <div className="l-8">
                <div className="product_item__text">
                  <h6>
                    <a href="hhqq">Crab Pool Security</a>
                  </h6>
                  <h5>$30.00</h5>
                </div>
              </div>
            </div>
          </a>
          <a href="aaaa" className=" l-4 product__item">
            <div className="row">
              <div className="l-4">
                <img src={product5} alt="" className="product__img" />
              </div>
              <div className="l-8">
                <div className="product_item__text">
                  <h6>
                    <a href="hhqq">Crab Pool Security</a>
                  </h6>
                  <h5>$30.00</h5>
                </div>
              </div>
            </div>
          </a>
          <a href="aaaa" className=" l-4 product__item">
            <div className="row">
              <div className="l-4">
                <img src={product6} alt="" className="product__img" />
              </div>
              <div className="l-8">
                <div className="product_item__text">
                  <h6>
                    <a href="hhqq">Crab Pool Security</a>
                  </h6>
                  <h5>$30.00</h5>
                </div>
              </div>
            </div>
          </a>
          <a href="aaaa" className=" l-4 product__item">
            <div className="row">
              <div className="l-4">
                <img src={product7} alt="" className="product__img" />
              </div>
              <div className="l-8">
                <div className="product_item__text">
                  <h6>
                    <a href="hhqq">Crab Pool Security</a>
                  </h6>
                  <h5>$30.00</h5>
                </div>
              </div>
            </div>
          </a>
          <a href="aaaa" className=" l-4 product__item">
            <div className="row">
              <div className="l-4">
                <img src={product8} alt="" className="product__img" />
              </div>
              <div className="l-8">
                <div className="product_item__text">
                  <h6>
                    <a href="hhqq">Crab Pool Security</a>
                  </h6>
                  <h5>$30.00</h5>
                </div>
              </div>
            </div>
          </a>
          <a href="aaaa" className=" l-4 product__item">
            <div className="row">
              <div className="l-4">
                <img src={product9} alt="" className="product__img" />
              </div>
              <div className="l-8">
                <div className="product_item__text">
                  <h6>
                    <a href="hhqq">Crab Pool Security</a>
                  </h6>
                  <h5>$30.00</h5>
                </div>
              </div>
            </div>
          </a>
        </div>

       
      </Slider>
    </div>
  );
}
