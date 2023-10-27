import React from "react";
import Categories from "./categories/category";
import Featured from "./featured/featured";
import Banner from "./banner/banner";
import Product from "./product/product";
import Blog from "./blog/blog";
export default function index() {
  return (
    <>
      <Categories />
      <Featured />
      <Banner />
      <Product />
      <Blog />
    </>
  );
}
