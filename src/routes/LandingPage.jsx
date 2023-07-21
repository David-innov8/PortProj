import React from "react";
import Footer from "../Components/Common/Footer";
import Navbar from "../Components/Common/Navbar";
import Home from "../Components/General_cmpt/Home";
import MidFooter from "../Components/General_cmpt/MidFooter";
import OrderNow from "../Components/General_cmpt/OrderNow";
import ProductsOfTheWeek from "../Components/General_cmpt/ProductsOfTheWeek";
import Sect3 from "../Components/General_cmpt/Sect3";
import Sect4 from "../Components/General_cmpt/Sect4";
import Sect5 from "../Components/General_cmpt/Sect5";

function LandingPage() {
  return (
    <div>
      <Home />

      <ProductsOfTheWeek />
      <Sect3 />
      <Sect4 />
      <OrderNow />
      <MidFooter />
      <Sect5 />
      <Footer />
    </div>
  );
}

export default LandingPage;
