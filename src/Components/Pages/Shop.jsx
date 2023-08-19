import React from "react";
import Products from "../General_cmpt/Products";
import Navbar from "../Common/Navbar";
import Footer from "../Common/Footer";

function Shop() {
  return (
    <div>
      <Navbar />
      <div className=" px-10 flex ">
        <div className=" left w-3/4  ">
          <h1>My shop</h1>
          <Products />
        </div>
        <div className="rig w-1/4 bg-blue-300">
          <p>sdfsdf</p>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Shop;
