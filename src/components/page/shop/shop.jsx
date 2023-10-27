import React from "react";
import "./shop.css";
import "../../header/header.css";
import { Link } from "react-router-dom";
export default function shop() {
  return (
    <div className="container">
      <div className="row">
        <div className="l-3">
          <div className="sidebar">
            <div className="sidebar__item">
              <h4>Department</h4>
              <ul className="header_navigate-list sidebar__lists">
                <li className="header_navigate-item">
                  <Link className="dropdown-item " href="#">
                    Fresh Meat
                  </Link>
                </li>
                <li className="header_navigate-item">
                  <Link className="dropdown-item " href="#">
                    Vegetables
                  </Link>
                </li>
                <li className="header_navigate-item">
                  <Link className="dropdown-item " href="#">
                    Fruit & Nut Gifts
                  </Link>
                </li>
                <li className="header_navigate-item">
                  <Link className="dropdown-item " href="#">
                    Fresh Berries
                  </Link>
                </li>
                <li className="header_navigate-item">
                  <Link className="dropdown-item " href="#">
                    Ocean Foods
                  </Link>
                </li>
                <li className="header_navigate-item">
                  <Link className="dropdown-item " href="#">
                    Butter & Eggs
                  </Link>
                </li>
                <li className="header_navigate-item">
                  <Link className="dropdown-item " href="#">
                    Fastfood
                  </Link>
                </li>
                <li className="header_navigate-item">
                  <Link className="dropdown-item " href="#">
                    Fresh Onion
                  </Link>
                </li>
                <li className="header_navigate-item">
                  <Link className="dropdown-item " href="#">
                    Papayaya & Crisps
                  </Link>
                </li>
                <li className="header_navigate-item">
                  <Link className="dropdown-item " href="#">
                    Oatmeal
                  </Link>
                </li>
                <li className="header_navigate-item">
                  <Link className="dropdown-item " href="#">
                    Fresh Bananas
                  </Link>
                </li>
              </ul>
              f
            </div>
            <div className="sidebar__item">
              <h4>Price</h4>
              <div className="price-range-wrap">
                <div
                  className="price-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
                  data-min={10}
                  data-max={540}
                >
                  <div className="ui-slider-range ui-corner-all ui-widget-header" />
                  <span
                    tabIndex={0}
                    className="ui-slider-handle ui-corner-all ui-state-default"
                  />
                  <span
                    tabIndex={0}
                    className="ui-slider-handle ui-corner-all ui-state-default"
                  />
                </div>
                <div className="range-slider">
                  <div className="price-input">
                    <input type="text" id="minamount" />
                    <input type="text" id="maxamount" />
                  </div>
                </div>
              </div>
            </div>
            <div className="sidebar__item sidebar__item__color--option">
              <h4>Colors</h4>
              <div className="sidebar__item__color sidebar__item__color--white">
                <label htmlFor="white">
                  White
                  <input type="radio" id="white" />
                </label>
              </div>
              <div className="sidebar__item__color sidebar__item__color--gray">
                <label htmlFor="gray">
                  Gray
                  <input type="radio" id="gray" />
                </label>
              </div>
              <div className="sidebar__item__color sidebar__item__color--red">
                <label htmlFor="red">
                  Red
                  <input type="radio" id="red" />
                </label>
              </div>
              <div className="sidebar__item__color sidebar__item__color--black">
                <label htmlFor="black">
                  Black
                  <input type="radio" id="black" />
                </label>
              </div>
              <div className="sidebar__item__color sidebar__item__color--blue">
                <label htmlFor="blue">
                  Blue
                  <input type="radio" id="blue" />
                </label>
              </div>
              <div className="sidebar__item__color sidebar__item__color--green">
                <label htmlFor="green">
                  Green
                  <input type="radio" id="green" />
                </label>
              </div>
            </div>
            <div className="sidebar__item">
              <h4>Popular Size</h4>
              <div className="sidebar__item__size">
                <label htmlFor="large">
                  Large
                  <input type="radio" id="large" />
                </label>
              </div>
              <div className="sidebar__item__size">
                <label htmlFor="medium">
                  Medium
                  <input type="radio" id="medium" />
                </label>
              </div>
              <div className="sidebar__item__size">
                <label htmlFor="small">
                  Small
                  <input type="radio" id="small" />
                </label>
              </div>
              <div className="sidebar__item__size">
                <label htmlFor="tiny">
                  Tiny
                  <input type="radio" id="tiny" />
                </label>
              </div>
            </div>
            <div className="sidebar__item">
              <div className="latest-product__text">
                <h4>Latest Products</h4>
                <div className="latest-product__slider owl-carousel">
                  <div className="latest-prdouct__slider__item">
                    <a href="aaaaa" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src="img/latest-product/lp-1.jpg" alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                    <a href="aaaaa" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src="img/latest-product/lp-2.jpg" alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                    <a href="aaaaa" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src="img/latest-product/lp-3.jpg" alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                  </div>
                  <div className="latest-prdouct__slider__item">
                    <a href="aaaaa" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src="img/latest-product/lp-1.jpg" alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                    <a href="aaaaa" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src="img/latest-product/lp-2.jpg" alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                    <a href="aaaaa" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src="img/latest-product/lp-3.jpg" alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="l-9">shop</div>
      </div>
    </div>
  );
}
