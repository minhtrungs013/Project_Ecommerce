import { useState, useEffect } from "react";
import "./featured.css";
import cart1 from "../../assets/img/anh1.png";
import cart2 from "../../assets/img/anh2.png";
import cart3 from "../../assets/img/anh3.png";
import cart4 from "../../assets/img/anh4.png";
import cart5 from "../../assets/img/anh5.png";
import cart6 from "../../assets/img/anh6.png";
import cart7 from "../../assets/img/anh7.png";
import cart8 from "../../assets/img/anh8.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import axios from "axios";
export default function Featured() {
  const [data, setData] = useState();
const data1 = "qqqqqqqqqqqqqqqqqqqqqqqqqqqqq"
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://6327ef8e9a053ff9aaaccbd1.mockapi.io/testDB");
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  console.log(data);
  return (
    <div className="container">
      <div className=" row">
        <h2 className="featured__heading">Featured Product</h2>
        <div className="featured__controls">
          <ul className="featured__controls-list">
            <li className="featured__controls-item">All</li>
            <li className="featured__controls-item">Oranges</li>
            <li className="featured__controls-item">Fresh Meat</li>
            <li className="featured__controls-item">Vegetables</li>
            <li className="featured__controls-item">Fastfood</li>
          </ul>
        </div>
      </div>
      <div className="">
        <div className=" featured__product">
          <div className=" row featured__list">
            {/* {data?.map((item) => (
              <Link to="/product/detail" className="l-3 featured__item">
                <div className="featured__img">
                  <div className="featured__img-img">
                    <img src={cart1} alt="" className="featured__zoom" />
                  </div>
                  <div className="featured__item__text">
                    <h6>
                      <p href="hhqq">{item.nameProduct}</p>
                    </h6>
                    <div className="featured__item__price">
                      <h5>{item.price}</h5>
                      <div className="featured__item__start">
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
                      </div>
                    </div>
                  </div>
                  <div className="featured__action">
                    <div className="featured__action-img">
                      <i class="fa-solid fa-retweet"></i>
                    </div>
                    <div className="featured__action-img">
                      <i class="fa-solid fa-cart-shopping"></i>
                    </div>
                    <div className="featured__action-img">
                      <i class="fa-solid fa-heart"></i>
                    </div>
                  </div>
                </div>
              </Link>
            ))} */}

            <Link to="/product/detail" className="l-3 featured__item">
              <div className="featured__img">
                <div className="featured__img-img">
                  <img src={cart1} alt="" className="featured__zoom" />
                </div>
                <div className="featured__item__text">
                  <h6>
                    <p href="hhqq">Crab Pool Security</p>
                  </h6>
                  <div className="featured__item__price">
                    <h5>$30.00</h5>
                    <div className="featured__item__start">
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
                    </div>
                  </div>
                </div>
                <div className="featured__action">
                  <div className="featured__action-img">
                    <i class="fa-solid fa-retweet"></i>
                  </div>
                  <div className="featured__action-img">
                    <i class="fa-solid fa-cart-shopping"></i>
                  </div>
                  <div className="featured__action-img">
                    <i class="fa-solid fa-heart"></i>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/product/detail" className="l-3 featured__item">
              <div className="featured__img">
                <div className="featured__img-img">
                  <img src={cart2} alt="" className="featured__zoom" />
                </div>
                <div className="featured__item__text">
                  <h6>
                    <p href="hhqq">Crab Pool Security</p>
                  </h6>
                  <div className="featured__item__price">
                    <h5>$30.00</h5>
                    <div className="featured__item__start">
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
                    </div>
                  </div>
                </div>
                <div className="featured__action">
                  <div className="featured__action-img">
                    <i class="fa-solid fa-retweet"></i>
                  </div>
                  <div className="featured__action-img">
                    <i class="fa-solid fa-cart-shopping"></i>
                  </div>
                  <div className="featured__action-img">
                    <i class="fa-solid fa-heart"></i>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/product/detail" className="l-3 featured__item">
              <div className="featured__img">
                <div className="featured__img-img">
                  <img src={cart3} alt="" className="featured__zoom" />
                </div>
                <div className="featured__item__text">
                  <h6>
                    <p href="hhqq">Crab Pool Security</p>
                  </h6>
                  <div className="featured__item__price">
                    <h5>$30.00</h5>
                    <div className="featured__item__start">
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
                    </div>
                  </div>
                </div>
                <div className="featured__action">
                  <div className="featured__action-img">
                    <i class="fa-solid fa-retweet"></i>
                  </div>
                  <div className="featured__action-img">
                    <i class="fa-solid fa-cart-shopping"></i>
                  </div>
                  <div className="featured__action-img">
                    <i class="fa-solid fa-heart"></i>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/product/detail" className="l-3 featured__item">
              <div className="featured__img">
                <div className="featured__img-img">
                  <img src={cart4} alt="" className="featured__zoom" />
                </div>
                <div className="featured__item__text">
                  <h6>
                    <p href="hhqq">Crab Pool Security</p>
                  </h6>
                  <div className="featured__item__price">
                    <h5>$30.00</h5>
                    <div className="featured__item__start">
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
                    </div>
                  </div>
                </div>
                <div className="featured__action">
                  <div className="featured__action-img">
                    <i class="fa-solid fa-retweet"></i>
                  </div>
                  <div className="featured__action-img">
                    <i class="fa-solid fa-cart-shopping"></i>
                  </div>
                  <div className="featured__action-img">
                    <i class="fa-solid fa-heart"></i>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/product/detail" className="l-3 featured__item">
              <div className="featured__img">
                <div className="featured__img-img">
                  <img src={cart5} alt="" className="featured__zoom" />
                </div>
                <div className="featured__item__text">
                  <h6>
                    <p href="hhqq">Crab Pool Security</p>
                  </h6>
                  <div className="featured__item__price">
                    <h5>$30.00</h5>
                    <div className="featured__item__start">
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
                    </div>
                  </div>
                </div>
                <div className="featured__action">
                  <div className="featured__action-img">
                    <i class="fa-solid fa-retweet"></i>
                  </div>
                  <div className="featured__action-img">
                    <i class="fa-solid fa-cart-shopping"></i>
                  </div>
                  <div className="featured__action-img">
                    <i class="fa-solid fa-heart"></i>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/product/detail" className="l-3 featured__item">
              <div className="featured__img">
                <div className="featured__img-img">
                  <img src={cart6} alt="" className="featured__zoom" />
                </div>
                <div className="featured__item__text">
                  <h6>
                    <p href="hhqq">Crab Pool Security</p>
                  </h6>
                  <div className="featured__item__price">
                    <h5>$30.00</h5>
                    <div className="featured__item__start">
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
                    </div>
                  </div>
                </div>
                <div className="featured__action">
                  <div className="featured__action-img">
                    <i class="fa-solid fa-retweet"></i>
                  </div>
                  <div className="featured__action-img">
                    <i class="fa-solid fa-cart-shopping"></i>
                  </div>
                  <div className="featured__action-img">
                    <i class="fa-solid fa-heart"></i>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/product/detail" className="l-3 featured__item">
              <div className="featured__img">
                <div className="featured__img-img">
                  <img src={cart7} alt="" className="featured__zoom" />
                </div>
                <div className="featured__item__text">
                  <h6>
                    <p href="hhqq">Crab Pool Security</p>
                  </h6>
                  <div className="featured__item__price">
                    <h5>$30.00</h5>
                    <div className="featured__item__start">
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
                    </div>
                  </div>
                </div>
                <div className="featured__action">
                  <div className="featured__action-img">
                    <i class="fa-solid fa-retweet"></i>
                  </div>
                  <div className="featured__action-img">
                    <i class="fa-solid fa-cart-shopping"></i>
                  </div>
                  <div className="featured__action-img">
                    <i class="fa-solid fa-heart"></i>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/product/detail" className="l-3 featured__item">
              <div className="featured__img">
                <div className="featured__img-img">
                  <img src={cart8} alt="" className="featured__zoom" />
                </div>
                <div className="featured__item__text">
                  <h6>
                    <p href="hhqq">Crab Pool Security</p>
                  </h6>
                  <div className="featured__item__price">
                    <h5>$30.00</h5>
                    <div className="featured__item__start">
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
                    </div>
                  </div>
                </div>
                <div className="featured__action">
                  <div className="featured__action-img">
                    <i class="fa-solid fa-retweet"></i>
                  </div>
                  <div className="featured__action-img">
                    <i class="fa-solid fa-cart-shopping"></i>
                  </div>
                  <div className="featured__action-img">
                    <i class="fa-solid fa-heart"></i>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
