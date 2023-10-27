import React from "react";
import "./navbar.css";
import a2 from "../../assets/img/logo.png.webp";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
export default function navbar() {
  return (
    <div className="navbar ">
      <div className="col l-3 navbar__lerf">
        <div className="navbar__lerf_logo">
        <img src={a2} alt="" />
        </div>
      </div>
      <div className="col l-6 navbar__center">
        <ul className="row navbar__center-list">
          <li className="l-2 navbar__center-item">
            <Link className="navbar__center-link " to="/">
              Home
            </Link>
          </li>
          <li className="l-2 navbar__center-item">
            <Link className="navbar__center-link " to="/product/detail">
              Shop
            </Link>
          </li>
          <li className="l-2 navbar__center-item">
            <Link className="navbar__center-link " to="/blog">
              Blog
            </Link>
          </li>
          <li className="l-2 navbar__center-item">
            <Link className="navbar__center-link " to="#">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="col l-3 navbar__rigth">
        <div className="navbar__rigth-body ">
        <ul className="navbar__rigth-list">
          <li className="navbar__rigth-item">
            <Link to="#">
              <FontAwesomeIcon
                icon={faHeart}
                className="  navbar__rigth-icon"
              ></FontAwesomeIcon>{" "}
            </Link>
          </li>
          <li className=" navbar__rigth-item">
            <Link to="#">
              <FontAwesomeIcon
                icon={faShoppingCart}
                className="navbar__rigth-icon"
              ></FontAwesomeIcon>{" "}
            </Link>
          </li>
        </ul>
        <div className="header__cart__price">
          item: <span>$150.00</span>
        </div>
        </div>
      </div>
    </div>
  );
}
