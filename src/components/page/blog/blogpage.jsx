import React from "react";
import "./blogpage.css";
import "../../blog/blog.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightLong,
  faCalendar,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import blog1 from "../../../assets/img/blog-1.jpg.webp";
import blog2 from "../../../assets/img/blog-2.jpg.webp";
import blog3 from "../../../assets/img/blog-3.jpg.webp";
import blog4 from "../../../assets/img/blog-4.jpg.webp";
import blog5 from "../../../assets/img/blog-6.jpg.webp";
import Blognavigate from "./blognavigate";
import { Link } from "react-router-dom";

export default function blogpage() {
  return (
    <div className="container blogpage">
      <h2 className="blogpage_heading">Blog</h2>
      <div className="row">
        <div className="l-4">
          <Blognavigate />
        </div>
        <div className="l-8">
          <div className="row ">
            <div className="l-6 blogpage_item">
              {" "}
              <img src={blog1} alt="" className="blog__img" />
              <div className="blog__item__text">
                <ul className="blog__list">
                  <li className="blog__item">
                    <FontAwesomeIcon
                      icon={faCalendar}
                      className="  blog-icon"
                    ></FontAwesomeIcon>{" "}
                    May 4,2019
                  </li>
                  <li className="blog__item">
                    <FontAwesomeIcon
                      icon={faMessage}
                      className="  blog-icon"
                    ></FontAwesomeIcon>{" "}
                    5
                  </li>
                </ul>
                <h5>
                  <Link to="/blog/detail">Cooking tips make cooking simple</Link>
                </h5>
                <p>
                  Sed quia non numquam modi tempora indunt ut labore et dolore
                  magnam aliquam quaerat{" "}
                </p>
                <Link to="/blog/detail" className="blog__btn">
                  READ MORE
                  <FontAwesomeIcon
                    icon={faRightLong}
                    className=" arrow_right"
                  ></FontAwesomeIcon>
                </Link>
              </div>
            </div>
            <div className="l-6 blogpage_item">
              {" "}
              <img src={blog2} alt="" className="blog__img" />
              <div className="blog__item__text">
                <ul className="blog__list">
                  <li className="blog__item">
                    <FontAwesomeIcon
                      icon={faCalendar}
                      className="  blog-icon"
                    ></FontAwesomeIcon>{" "}
                    May 4,2019
                  </li>
                  <li className="blog__item">
                    <FontAwesomeIcon
                      icon={faMessage}
                      className="  blog-icon"
                    ></FontAwesomeIcon>{" "}
                    5
                  </li>
                </ul>
                <h5>
                  <a href="aaa">Cooking tips make cooking simple</a>
                </h5>
                <p>
                  Sed quia non numquam modi tempora indunt ut labore et dolore
                  magnam aliquam quaerat{" "}
                </p>
                <a href="aaaa" className="blog__btn">
                  READ MORE
                  <FontAwesomeIcon
                    icon={faRightLong}
                    className=" arrow_right"
                  ></FontAwesomeIcon>
                </a>
              </div>
            </div>
            <div className="l-6 blogpage_item">
              {" "}
              <img src={blog3} alt="" className="blog__img" />
              <div className="blog__item__text">
                <ul className="blog__list">
                  <li className="blog__item">
                    <FontAwesomeIcon
                      icon={faCalendar}
                      className="  blog-icon"
                    ></FontAwesomeIcon>{" "}
                    May 4,2019
                  </li>
                  <li className="blog__item">
                    <FontAwesomeIcon
                      icon={faMessage}
                      className="  blog-icon"
                    ></FontAwesomeIcon>{" "}
                    5
                  </li>
                </ul>
                <h5>
                  <a href="aaa">Cooking tips make cooking simple</a>
                </h5>
                <p>
                  Sed quia non numquam modi tempora indunt ut labore et dolore
                  magnam aliquam quaerat{" "}
                </p>
                <a href="aaaa" className="blog__btn">
                  READ MORE
                  <FontAwesomeIcon
                    icon={faRightLong}
                    className=" arrow_right"
                  ></FontAwesomeIcon>
                </a>
              </div>
            </div>
            <div className="l-6 blogpage_item">
              {" "}
              <img src={blog4} alt="" className="blog__img" />
              <div className="blog__item__text">
                <ul className="blog__list">
                  <li className="blog__item">
                    <FontAwesomeIcon
                      icon={faCalendar}
                      className="  blog-icon"
                    ></FontAwesomeIcon>{" "}
                    May 4,2019
                  </li>
                  <li className="blog__item">
                    <FontAwesomeIcon
                      icon={faMessage}
                      className="  blog-icon"
                    ></FontAwesomeIcon>{" "}
                    5
                  </li>
                </ul>
                <h5>
                  <a href="aaa">Cooking tips make cooking simple</a>
                </h5>
                <p>
                  Sed quia non numquam modi tempora indunt ut labore et dolore
                  magnam aliquam quaerat{" "}
                </p>
                <a href="aaaa" className="blog__btn">
                  READ MORE
                  <FontAwesomeIcon
                    icon={faRightLong}
                    className=" arrow_right"
                  ></FontAwesomeIcon>
                </a>
              </div>
            </div>
            <div className="l-6 blogpage_item">
              {" "}
              <img src={blog5} alt="" className="blog__img" />
              <div className="blog__item__text">
                <ul className="blog__list">
                  <li className="blog__item">
                    <FontAwesomeIcon
                      icon={faCalendar}
                      className="  blog-icon"
                    ></FontAwesomeIcon>{" "}
                    May 4,2019
                  </li>
                  <li className="blog__item">
                    <FontAwesomeIcon
                      icon={faMessage}
                      className="  blog-icon"
                    ></FontAwesomeIcon>{" "}
                    5
                  </li>
                </ul>
                <h5>
                  <a href="aaa">Cooking tips make cooking simple</a>
                </h5>
                <p>
                  Sed quia non numquam modi tempora indunt ut labore et dolore
                  magnam aliquam quaerat{" "}
                </p>
                <a href="aaaa" className="blog__btn">
                  READ MORE
                  <FontAwesomeIcon
                    icon={faRightLong}
                    className=" arrow_right"
                  ></FontAwesomeIcon>
                </a>
              </div>
            </div>
            <div className="l-6 blogpage_item">
              {" "}
              <img src={blog1} alt="" className="blog__img" />
              <div className="blog__item__text">
                <ul className="blog__list">
                  <li className="blog__item">
                    <FontAwesomeIcon
                      icon={faCalendar}
                      className="  blog-icon"
                    ></FontAwesomeIcon>{" "}
                    May 4,2019
                  </li>
                  <li className="blog__item">
                    <FontAwesomeIcon
                      icon={faMessage}
                      className="  blog-icon"
                    ></FontAwesomeIcon>{" "}
                    5
                  </li>
                </ul>
                <h5>
                  <a href="aaa">Cooking tips make cooking simple</a>
                </h5>
                <p>
                  Sed quia non numquam modi tempora indunt ut labore et dolore
                  magnam aliquam quaerat{" "}
                </p>
                <a href="aaaa" className="blog__btn">
                  READ MORE
                  <FontAwesomeIcon
                    icon={faRightLong}
                    className=" arrow_right"
                  ></FontAwesomeIcon>
                </a>
              </div>
            </div>
            <div className="l-12">
              <div className=" blog__pagination">
                <a href="aa">1</a>
                <a href="aa">2</a>
                <a href="aa">3</a>
                <a href="aa">
                  <FontAwesomeIcon
                    icon={faRightLong}
                    className=" arrow_right"
                  ></FontAwesomeIcon>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
