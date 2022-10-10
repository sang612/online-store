import React from "react";
import ProductList from "./ProductList";
import Search from "./Search";
import Banner from "./Banner";

const Homepage = () => {
  return (
    <div className="p-5">
      <Banner />
      <Search />
      <ProductList />
    </div>
  );
};

export default Homepage;
