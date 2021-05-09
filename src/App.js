import React from "react";
import Header from "./components/Header";
import Second from "./components/Second";
import Product from "./components/Product";
import SecondMob from "./SecondMob";
import Last from "./components/Last";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Second />
      <Product />
      <Second />
      <SecondMob />
      <Last />
    </div>
  );
}

export default App;
