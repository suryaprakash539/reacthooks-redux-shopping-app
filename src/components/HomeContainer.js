import React from "react";
import HomeBanner from "./HomeBanner";
import Products from "./Products";

import { useSelector } from "react-redux";

const HomeContainer = () => {
  const products = useSelector((state) => state);
  return (
    <div>
      <HomeBanner />
      {products.length > 0 ? <Products /> : <div></div>}
    </div>
  );
};

export default HomeContainer;
