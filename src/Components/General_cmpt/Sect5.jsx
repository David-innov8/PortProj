import React from "react";
import Img1 from "../Assets/Rectangle 20.svg";
import Img2 from "../Assets/Rectangle 19.svg";

const Sect5 = () => {
  const list = [
    {
      id: 1,
      img: Img1,
      pa: "29 Sep, 2022 / by Soroush Norozy",
      pb: "Your office should have only natural materials",
    },
    {
      id: 2,
      img: Img2,
      pa: "29 Sep, 2022 / by Soroush Norozy",
      pb: "Your office should have only natural materials",
    },
  ];

  return (
    <div className="  px-20 flex justify-between py-7">
      {list.map((item) => (
        <div key={item.id} className="h-80v  w-1/2">
          <div className=" h-80 ">
            <img src={item.img} className="w-full h-full object-fill" alt="" />
          </div>
          <div className="flex flex-col items-center">
            <p className="py-2">{item.pa}</p>
            <p className="mb-4">{item.pb}</p>
            <a href="/" className="text-black underline ">
              read more
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sect5;
