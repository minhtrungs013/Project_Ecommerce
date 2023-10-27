import React from "react";
import "./blog.css";
import blog1 from "../../assets/img/blog-1.jpg.webp";
import blog2 from "../../assets/img/blog-2.jpg.webp";
import blog3 from "../../assets/img/blog-3.jpg.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faMessage } from "@fortawesome/free-solid-svg-icons";

export default function blog() {
  return (
    <div>
      <div className=" row l-12">
        <h2 className="blog__heading"> From The Blog</h2>
      </div>
      <div className="container">
        <div className="row">
          <div className="l-4">
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
            </div>
          </div>
          <div className="l-4">
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
            </div>
          </div>
          <div className="l-4">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
