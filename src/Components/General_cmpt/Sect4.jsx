import React from "react";
import ImgPk from "../Assets/Rectangle 11.svg";
import ImgPk2 from "../Assets/Rectangle 13.svg";
import ImgPk3 from "../Assets/Rectangle 15.svg";
// import Button from './Button'

// const myText = (
//   <div className=" w-1/2  flex flex-col items-center  h-full justify-center">
//     <h1 className="font-bold text-3xl text-center">{title}</h1>
//     <p className="text-center text-xs  pt-3 pb-4">{content}</p>
//   </div>
// );

// const Image = (
//   <div className=" flex items-center justify-center  h-full w-1/2 ">
//     <div className=" py-2 h-full ">
//       <img style={{ height: "100%", width: "100%" }} src={ImgPk} alt="" />
//     </div>
//   </div>
// );

// const ViewMore = (
//   <div className="flex justify-center w-28 border  ">
//     <button className="text-black text-xs hover:bg-gray-200 w-full hover:text-black hover:opacity-60 py-2">
//       {" "}
//       View more {" >"}{" "}
//     </button>
//   </div>
// );
const Sect4 = () => {
  return (
    <div className="py-16 ">
      <div className="px-16 h-80v flex items-center justify-between ">
        <div className=" w-1/2  flex flex-col items-center  h-full justify-center">
          <h1 className="font-bold text-3xl text-center">STYLISH CHAIRS</h1>
          <p className="text-center text-xs  py-5">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br /> Consequat dolor odio odio malesuada at condimentum adipiscing
            iaculis semper.
          </p>

          <div className="flex justify-center w-28 border  ">
            <button className="text-black text-xs hover:bg-gray-200 w-full hover:text-black hover:opacity-60 py-2">
              {" "}
              View more {" >"}{" "}
            </button>
          </div>
        </div>

        <div className=" flex items-center justify-center  h-full w-1/2 ">
          <div className=" py-2 h-full ">
            <img style={{ height: "100%", width: "100%" }} src={ImgPk} alt="" />
          </div>
        </div>
      </div>

      <div className="px-16 my-20 h-80v flex items-center justify-between">
        <div className=" flex items-center justify-center  h-full w-1/2 ">
          <div className=" py-2 h-full ">
            <img
              style={{ height: "100%", width: "100%" }}
              src={ImgPk2}
              alt=""
            />
          </div>
        </div>

        <div className=" w-1/2  flex flex-col items-center">
          <h1 className="font-bold text-3xl text-center">TABLE</h1>
          <p className="text-center text-xs  py-5">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br /> Consequat dolor odio odio malesuada at condimentum adipiscing
            iaculis semper.
          </p>

          <div className="flex justify-center w-28 border ">
            <button className="text-black text-xs hover:bg-gray-200 w-full hover:text-black hover:opacity-60 py-2">
              {" "}
              View more {" >"}{" "}
            </button>{" "}
          </div>
        </div>
      </div>

      <div className="px-16 h-80v flex items-center justify-between ">
        <div className=" w-1/2  flex flex-col items-center">
          <h1 className="font-bold text-3xl text-center uppercase">
            contemporary lamps
          </h1>
          <p className="text-center text-xs   py-5">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br /> Consequat dolor odio odio malesuada at condimentum adipiscing
            iaculis semper.
          </p>

          <div className="flex justify-center w-28 border ">
            <button className="text-black text-xs hover:bg-gray-200 w-full hover:text-black hover:opacity-60 py-2">
              {" "}
              View more {" >"}{" "}
            </button>
          </div>
        </div>

        <div className=" flex items-center justify-center  h-full w-1/2 ">
          <div className=" py-2 h-full ">
            <img
              style={{ height: "100%", width: "100%" }}
              src={ImgPk3}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sect4;
