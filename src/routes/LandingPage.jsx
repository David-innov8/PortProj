import React from "react";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
  useQueryClient,
} from "react-query";
import { fetchdata } from "../Components/Auth/Api";
import Footer from "../Components/Common/Footer";
import Navbar from "../Components/Common/Navbar";
import Search from "../Components/Common/Search";
import ApiTest from "../Components/General_cmpt/ApiTest";
import Home from "../Components/General_cmpt/Home";
import MidFooter from "../Components/General_cmpt/MidFooter";
import OrderNow from "../Components/General_cmpt/OrderNow";
import ProductsOfTheWeek from "../Components/General_cmpt/ProductsOfTheWeek";
import Sect3 from "../Components/General_cmpt/Sect3";
import Sect4 from "../Components/General_cmpt/Sect4";
import Sect5 from "../Components/General_cmpt/Sect5";
import Testimonials from "../Components/General_cmpt/Testimonials";
import Products from "../Components/General_cmpt/Products";

function LandingPage() {
  // const queryClient = useQueryClient();
  // const { data, isLoading, isError } = useQuery("products", fetchdata);

  // if (isLoading) {
  //   return <div>Loading....</div>;
  // }

  // if (isError) {
  //   return <div>Error......</div>;
  // }

  // queryClient.setQueryData("products", data);

  return (
    <div>
      <Home />

      {/* <ProductsOfTheWeek />
      <Sect3 />
      <Sect4 />
      <OrderNow />
      <MidFooter />
      <Sect5 />
      <Testimonials /> */}
      {/* <ApiTest /> */}
      <Products/>
      <Footer />
    </div>
  );
}

export default LandingPage;
