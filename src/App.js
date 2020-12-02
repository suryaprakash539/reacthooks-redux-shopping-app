import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Header from "./components/Header";
import HomeContainer from "./components/HomeContainer";

import { initializeProducts } from "./reducers/productReducer";

const App = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    if (products.length === 0) dispatch(initializeProducts());
  }, [dispatch, products]);

  return (
    <div>
      <Header />
      <Route path="/" component={HomeContainer} />
    </div>
  );
};

export default App;
