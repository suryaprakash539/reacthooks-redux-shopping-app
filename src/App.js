import React from "react";
import { Route } from "react-router-dom";
import Header from "./components/Header";
import HomeContainer from "./components/HomeContainer";

const App = () => {
  return (
    <div>
      <Header />
      <Route path="/" component={HomeContainer} />
    </div>
  );
};

export default App;
