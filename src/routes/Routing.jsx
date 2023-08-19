import React from "react";
import { Routes, Route } from "react-router-dom";
import Additional from "../Components/Cart/Additional";
import Cart from "../Components/Cart/Cart";
import Description from "../Components/Cart/Description";
import Shop from "../Components/Pages/Shop";
import LandingPage from "./LandingPage";

function Routing() {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<LandingPage />} />
        <Route path="/shop" element={<Shop />} />
        <Route  path="/cart" element={<Cart />}/>
        <Route  path="/cart/:id" element={<Cart />}>
            <Route index element={<Description/>}/>
            <Route path="description" element={<Description/>}/>
            <Route path ="additional" element={<Additional/>}/>
           

        </Route>

          {/* <Route path="/description" element={<Description />} />
          <Route path="/aditional" element={<Additional />} /> */}
       
      </Route>
    </Routes>
  );
}

export default Routing;
