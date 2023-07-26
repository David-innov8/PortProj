import React from "react";
import { Routes, Route } from "react-router-dom";
import Cart from "../Components/Cart/Cart";
import Shop from "../Components/Pages/Shop";
import LandingPage from "./LandingPage";

function Routing() {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<LandingPage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart/>} />
      </Route>
    </Routes>
  );
}

export default Routing;
