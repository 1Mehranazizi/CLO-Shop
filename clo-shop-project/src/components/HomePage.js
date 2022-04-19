import React from "react";

//Components
import Slider from "./home/Slider";
import Categories from "./home/Categories";
import SpecialOffers from "./home/SpecialOffers";
import LatestProducts from "./home/LatestProducts";

const HomePage = () => {
  return (
    <div className="container">
      <Slider />
      <Categories />
      <SpecialOffers />
      <LatestProducts />
    </div>
  );
};

export default HomePage;
