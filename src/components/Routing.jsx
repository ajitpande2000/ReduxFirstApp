import React from "react";
import Home from "./Home";
import Cart from "./Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./Navigation";

const Routing = () => {
  return (
    <div>
      <React.Fragment>
        <header>
          <Navigation />
        </header>
        <main>
          <Routes>
            <Route exact to path="/" element={<Home />} />

            <Route exact to path="/cart" element={<Cart />} />
          </Routes>
        </main>
      </React.Fragment>
    </div>
  );
};

export default Routing;
