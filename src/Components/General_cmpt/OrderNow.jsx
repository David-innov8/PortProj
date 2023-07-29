import React from "react";
import ViewMore from "../Common/ViewMore";
// import Button from './Button'

const OrderNow = () => {
  return (
    <div className="h-20v py-28 bg-[#EFEFEF] flex items-center justify-center mb-5">
      <h1 className="text-xl pr-7">
        order now for an{" "}
        <span className="font-bold">express delivery in 24h !</span>
      </h1>
      <div className=" flex  items-center justify-center ">
        <div className="flex justify-center w-28 border border-black ">
          <ViewMore />
        </div>
      </div>
    </div>
  );
};

export default OrderNow;
