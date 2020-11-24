import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import Header from "./components/Header";
import HomeContainer from "./components/HomeContainer";

import { initializeProducts } from "./reducers/productReducer";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeProducts());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Route path="/" component={HomeContainer} />
    </div>
  );
};

export default App;
