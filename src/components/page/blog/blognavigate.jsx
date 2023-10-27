import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import sr1 from "../../../assets/img/sr-1.jpg.webp";
import sr2 from "../../../assets/img/sr-2.jpg.webp";
import sr3 from "../../../assets/img/feature-6.jpg.webp";
export default function Blognavigate() {
  return (
    <div className="blog__sidebar">
      <div className="blog__sidebar__search">
        <form action="#">
          <input type="text" placeholder="Search..." />
          <button type="submit">
            <FontAwesomeIcon
              icon={faSearch}
              className=" icon_search"
            ></FontAwesomeIcon>
          </button>
        </form>
      </div>
      <div className="blog__sidebar__item">
        <h4>Categories</h4>
        <ul>
          <li>
            <a href="aaaaa">All</a>
          </li>
          <li>
            <a href="aaaaa">Beauty (20)</a>
          </li>
          <li>
            <a href="aaaaa">Food (5)</a>
          </li>
          <li>
            <a href="aaaaa">Life Style (9)</a>
          </li>
          <li>
            <a href="aaaaa">Travel (10)</a>
          </li>
        </ul>
      </div>
      <div className="blog__sidebar__item">
        <h4>Recent News</h4>
        <div className="blog__sidebar__recent">
          <a href="aaaaa" className="row blog__sidebar__recent__item">
            <div className="l-3 blog__sidebar__recent__item__pic">
              <img src={sr1} alt="" />
            </div>
            <div className="l-9 blog__sidebar__recent__item__text">
              <h6>
                09 Kinds Of Vegetables
                <br /> Protect The Liver
              </h6>
              <span>MAR 05, 2019</span>
            </div>
          </a>
          <a href="aaaaa" className=" row blog__sidebar__recent__item">
            <div className="l-3 blog__sidebar__recent__item__pic">
              <img src={sr2} alt="" />
            </div>
            <div className="l-9 blog__sidebar__recent__item__text">
              <h6>
                Tips You To Balance
                <br /> Nutrition Meal Day
              </h6>
              <span>MAR 05, 2019</span>
            </div>
          </a>
          <a href="aaaaa" className="row blog__sidebar__recent__item">
            <div className="l-3 blog__sidebar__recent__item__pic">
              <img src={sr3} alt="" />
            </div>
            <div className="l-9 blog__sidebar__recent__item__text">
              <h6>
                4 Principles Help You Lose <br />
                Weight With Vegetables
              </h6>
              <span>MAR 05, 2019</span>
            </div>
          </a>
        </div>
      </div>
      <div className="blog__sidebar__item">
        <h4>Search By</h4>
        <div className="blog__sidebar__item__tags">
          <a href="aaaaa">Apple</a>
          <a href="aaaaa">Beauty</a>
          <a href="aaaaa">Vegetables</a>
          <a href="aaaaa">Fruit</a>
          <a href="aaaaa">Healthy Food</a>
          <a href="aaaaa">Lifestyle</a>
        </div>
      </div>
    </div>
  );
}
