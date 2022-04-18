import React from "react";

//Components
import Slider from "./home/Slider";
import Categories from "./home/Categories";
import SpecialOffers from "./home/SpecialOffers";

const HomePage = () => {
  return (
    <div className="container">
      <Slider />
      <Categories />
      <SpecialOffers />
    </div>
  );
};

export default HomePage;
