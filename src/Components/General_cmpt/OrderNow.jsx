import React from "react";
// import Button from './Button'

const OrderNow = () => {
  return (
    <div className="h-20v bg-green-200 flex items-center justify-center mb-5">
      <h1 className="text-xl pr-7">
        order now for an{" "}
        <span className="font-bold">express delivery in 24h !</span>
      </h1>
      <div className=" flex  items-center justify-center ">
        <div className="flex justify-center w-28 border border-black ">
          <button className="text-black text-xs hover:bg-gray-200 w-full hover:text-black hover:opacity-60 py-2">
            {" "}
            View more {" >"}{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderNow;
