import { useState, useRef, useEffect } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faBars,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
export default function Header() {
  const [open, setOPen] = useState(false);
  const toggle = () => {
    setOPen(!open);
  };

 
  const contentRef = useRef();
  return (
    <div className="row header">
      <div className=" l-3">
        <div className="header_navigate " type="button" onClick={toggle}>
          <FontAwesomeIcon
            icon={faBars}
            className="header_navigate-icon"
          ></FontAwesomeIcon>{" "}
          <span> All departments</span>
          <FontAwesomeIcon
            icon={faCaretDown}
            className="header_navigate-icona"
          ></FontAwesomeIcon>{" "}
        </div>
        <div
          className="content"
          ref={contentRef}
          style={
            !open
              ? {
                  height: contentRef?.current?.scrollHeight + "px",
                }
              : { height: "0px" }
          }
        >
          <ul className="header_navigate-list">
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
        </div>
      </div>
      <div className=" l-9">
        <div className=" header__categories">
          <form action="" className="l-8 header__search">
            <div className="Categories">
              <span>All Categories</span>
              <FontAwesomeIcon
                icon={faCaretDown}
                className="Categories-icon"
              ></FontAwesomeIcon>{" "}
            </div>
            <div className="search_bt">
              <input
                type="text"
                className="Categories_input"
                placeholder="What do you need ?"
              />
              <button className=" btn__search">Search</button>
            </div>
          </form>
          <div className="l-4">
            <div className="info">
              <div className="info__phone">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="phone-icon"
                ></FontAwesomeIcon>{" "}
              </div>
              <div className="info__phone__text">
                <h5>+65 11.188.888</h5>
                <span>support 24/7 time</span>
              </div>
            </div>
          </div>
        </div>
        <div className=" header__Advertisement">
          <div className="Advertisement__text">
            <span>FRUIT FRESH</span>
            <h2>
              Vegetable <br />
              100% Organic
            </h2>
            <p>Free Pickup and Delivery Available</p>
            <Link to="#" className="primary-btn">
              SHOP NOW
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
